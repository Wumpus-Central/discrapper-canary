"use strict";
function i(e, t) {
    let n = e.scripts.get(t);
    return (
        null == n &&
            ((n = {
                url: t,
                downloadMs: 0,
                fromCache: !1,
                transferSizeBytes: 0,
                initialEvalMs: 0,
                totalEvalMs: 0,
                evalSampleCount: 0,
                evalAttributed: !1,
            }),
            e.scripts.set(t, n),
            (e.distinctUrlsObserved += 1)),
        n
    );
}
function r(e) {
    return "classic-script" === e || "module-script" === e;
}
n.d(t, { $: () => d, v: () => o }), n(323874), n(14289), n(35956);
class a {
    sink;
    maxUrls;
    state = { scripts: new Map(), unattributedEvalMs: 0, distinctUrlsObserved: 0 };
    resourceObserver = null;
    loafObserver = null;
    started = !1;
    loafSupported = !1;
    warnedLoafUnsupported = !1;
    warnedEviction = !1;
    onPageHide = () => this.stop();
    constructor(e = {}) {
        (this.sink = e.sink), (this.maxUrls = e.maxUrls ?? 1e3);
    }
    start() {
        if (!this.started) {
            (this.loafSupported =
                "u" > typeof PerformanceObserver &&
                PerformanceObserver.supportedEntryTypes?.includes("long-animation-frame") === !0),
                (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500;
                    try {
                        performance.setResourceTimingBufferSize(e);
                    } catch {}
                })();
            try {
                (this.resourceObserver = new PerformanceObserver((e) => this.foldResourceEntries(e.getEntries()))),
                    this.resourceObserver.observe({ type: "resource", buffered: !0 }),
                    this.loafSupported
                        ? ((this.loafObserver = new PerformanceObserver((e) => this.foldScriptEntries(e.getEntries()))),
                          this.loafObserver.observe({ type: "long-animation-frame", buffered: !0 }))
                        : this.warnedLoafUnsupported ||
                          ((this.warnedLoafUnsupported = !0),
                          console.warn(
                              "[scriptCost] Long Animation Frames API unavailable (Chromium <123?); evaluation timings disabled, download-only.",
                          ));
            } catch (e) {
                this.resourceObserver?.disconnect(),
                    (this.resourceObserver = null),
                    this.loafObserver?.disconnect(),
                    (this.loafObserver = null),
                    console.warn(
                        "[scriptCost] failed to register PerformanceObserver; script-cost telemetry disabled.",
                        e,
                    );
                return;
            }
            window.addEventListener("pagehide", this.onPageHide), (this.started = !0);
        }
    }
    foldResourceEntries(e) {
        for (let t of e)
            !(function (e, t) {
                if (
                    !(
                        "script" === t.initiatorType ||
                        (("link" === t.initiatorType || "preload" === t.initiatorType) &&
                            /\.m?js(?:[?#]|$)/.test(t.name))
                    )
                )
                    return;
                let n = i(e, t.name);
                (n.downloadMs += t.responseEnd - t.startTime),
                    (n.transferSizeBytes += t.transferSize),
                    (n.fromCache = n.fromCache || "cache" === t.deliveryType);
            })(this.state, t);
        this.afterFold();
    }
    foldScriptEntries(e) {
        for (let t of e)
            for (let e of t.scripts ?? [])
                !(function (e, t) {
                    let n,
                        a = t.sourceURL;
                    if (null == (n = "string" == typeof a && a.length > 0 ? a : r(t.invokerType) ? "<inline>" : null))
                        return (e.unattributedEvalMs += t.duration);
                    let s = i(e, n);
                    (s.totalEvalMs += t.duration),
                        (s.evalSampleCount += 1),
                        r(t.invokerType) && (s.initialEvalMs += t.duration),
                        (s.evalAttributed = !0);
                })(this.state, e);
        this.afterFold();
    }
    afterFold() {
        (function (e, t) {
            if (e.scripts.size <= t) return !1;
            function n(e) {
                return e.downloadMs + e.totalEvalMs;
            }
            let i = Array.from(e.scripts.values()).sort((e, t) => n(e) - n(t)),
                r = e.scripts.size - t;
            for (let t = 0; t < r; t++) e.scripts.delete(i[t].url);
            return !0;
        })(this.state, this.maxUrls) &&
            !this.warnedEviction &&
            ((this.warnedEviction = !0),
            console.warn(
                `[scriptCost] retained URL count exceeded maxUrls (${this.maxUrls}); evicting lowest-cost entries.`,
            ));
    }
    drainPending() {
        null != this.resourceObserver && this.foldResourceEntries(this.resourceObserver.takeRecords()),
            null != this.loafObserver && this.foldScriptEntries(this.loafObserver.takeRecords());
    }
    stop() {
        this.resourceObserver?.disconnect(),
            (this.resourceObserver = null),
            this.loafObserver?.disconnect(),
            (this.loafObserver = null),
            window.removeEventListener("pagehide", this.onPageHide),
            (this.started = !1);
    }
    snapshot() {
        var e, t;
        let n;
        return (
            (e = this.state),
            (t = this.loafSupported),
            (n = Array.from(e.scripts.values()).map((e) => ({ ...e }))),
            {
                takenAt: performance.now(),
                loafSupported: t,
                scripts: n,
                unattributedEvalMs: e.unattributedEvalMs,
                totalScriptsObserved: e.distinctUrlsObserved,
            }
        );
    }
    flush() {
        this.sink?.(this.snapshot());
    }
}
let s = null,
    l = !1;
function o() {
    null == s && (s = new a(void 0)).start();
}
function d() {
    if (null == s || l) return {};
    (l = !0), s.drainPending();
    let e = s.snapshot();
    function t(e) {
        return e.downloadMs + e.totalEvalMs;
    }
    s.stop(), (s = null);
    let n = [...e.scripts]
        .filter((e) => t(e) >= 32)
        .sort((e, n) => t(n) - t(e))
        .slice(0, 20);
    return {
        script_cost_loaf_supported: e.loafSupported,
        script_cost_unattributed_eval_ms: Math.round(e.unattributedEvalMs),
        script_cost_total_count: e.totalScriptsObserved,
        script_cost_reported_count: n.length,
        script_cost_url: n.map((e) =>
            (function (e) {
                if (e.startsWith("<")) return e;
                try {
                    let t = new URL(e);
                    return t.pathname + t.search;
                } catch {
                    return "<unparsed>";
                }
            })(e.url),
        ),
        script_cost_download_ms: n.map((e) => Math.round(e.downloadMs)),
        script_cost_transfer_size_bytes: n.map((e) => e.transferSizeBytes),
        script_cost_from_cache: n.map((e) => e.fromCache),
        script_cost_initial_eval_ms: n.map((e) => Math.round(e.initialEvalMs)),
        script_cost_total_eval_ms: n.map((e) => Math.round(e.totalEvalMs)),
        script_cost_eval_attributed: n.map((e) => e.evalAttributed),
    };
}
