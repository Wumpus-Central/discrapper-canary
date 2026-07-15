let i;
d.d(t, { a: () => L, d: () => X, i: () => R, n: () => I, o: () => V, s: () => w, t: () => z });
var e = d(987800),
    c = d(871178),
    a = d(768672),
    s = d(935374),
    n = d(368499),
    Z = d(288052),
    b = d(599078),
    m = d(943956),
    o = d(806374);
let u = "https://cdn.incodesmile.com/ml-wasm-kit-release",
    h = "v2.14.07-post7-post1",
    W = ["wasmPath", "wasmSimdPath", "glueCodePath", "glueCodeSimdPath", "modelsBasePath"];
function G(l) {
    let t = l.trim();
    if ("" === t) return !1;
    if (
        (function (l) {
            for (let t = 0; t < l.length; t += 1) {
                let d = l.charCodeAt(t);
                if (d < 32 || 127 === d) return !0;
            }
            return !1;
        })(t)
    )
        return !0;
    if (/^https?:\/\//i.test(t))
        try {
            new URL(t);
        } catch {
            return !0;
        }
    return !1;
}
function p(l, t) {
    "empty" === t
        ? console.warn(`[Incode SDK] wasm.${l} is empty. Falling back to CDN default.`)
        : console.warn(`[Incode SDK] wasm.${l} appears malformed. Falling back to CDN default.`);
}
function N(l, t, d) {
    if (!t || !(l in t)) return d;
    let i = t[l];
    return void 0 === i || "string" != typeof i
        ? d
        : "" === i.trim()
          ? (p(l, "empty"), d)
          : G(i)
            ? (p(l, "malformed"), d)
            : i.trim();
}
function M(l) {
    let t = l.endsWith("/") ? l.slice(0, -1) : l;
    return {
        wasmPath: `${t}/webLib.wasm`,
        wasmSimdPath: `${t}/webLibSimd.wasm`,
        glueCodePath: `${t}/webLib.js`,
        glueCodeSimdPath: `${t}/webLibSimd.js`,
        modelsBasePath: `${t}/models`,
    };
}
function X(l) {
    let t;
    if (!l) return M(`${u}/${h}`);
    let d = M(N("basePath", l, `${u}/${h}`)),
        i = d.wasmSimdPath ?? d.wasmPath,
        c =
            d.modelsBasePath ??
            (-1 === (t = d.wasmPath.lastIndexOf("/")) ? "models" : `${d.wasmPath.substring(0, t)}/models`),
        a = N("wasmSimdPath", l, i),
        s = (0, e.p)(a),
        n = {
            wasmPath: N("wasmPath", l, d.wasmPath),
            wasmSimdPath: a,
            glueCodePath: N("glueCodePath", l, d.glueCodePath),
            glueCodeSimdPath: N("glueCodeSimdPath", l, s),
            modelsBasePath: N("modelsBasePath", l, c),
            useSimd: l.useSimd,
            pipelines: l.pipelines,
            pipelineModels: l.pipelineModels,
        };
    for (let l of W) {
        let t = n[l];
        "string" == typeof t &&
            G(t) &&
            console.warn(`[Incode SDK] wasm.${l} appears malformed. Check the URL or path.`);
    }
    return n;
}
var r = class {
    sendBeacon(l, t, d = "application/json") {
        if ("u" < typeof navigator || "function" != typeof navigator.sendBeacon) return !1;
        let i = new Blob([t], { type: d });
        return navigator.sendBeacon(l, i);
    }
    onPageHide(l) {
        let t = () => {
            "hidden" === document.visibilityState && l();
        };
        return (
            document.addEventListener("visibilitychange", t),
            window.addEventListener("pagehide", l),
            window.addEventListener("beforeunload", l),
            () => {
                document.removeEventListener("visibilitychange", t),
                    window.removeEventListener("pagehide", l),
                    window.removeEventListener("beforeunload", l);
            }
        );
    }
};
let y = new (class {
    constructor() {
        (this.detectorPaused = !0), (this.isDevtoolsOpen = !1);
    }
    start(l) {
        this.canUseDevtoolsDetector() &&
            !this.heart &&
            this.startDetector({
                pollingIntervalSeconds: 0.25,
                maxMillisBeforeAckWhenClosed: 100,
                moreAnnoyingDebuggerStatements: 1,
                onDetectOpen: l.onInspectorOpened,
                onDetectClose: void 0,
                startup: "asap",
            });
    }
    stop() {
        this.clearNextPulse(),
            this.resolveVerdict?.(null),
            (this.resolveVerdict = void 0),
            this.heart?.terminate(),
            (this.heart = void 0),
            (this.detectorPaused = !0),
            (this.isDevtoolsOpen = !1);
    }
    canUseDevtoolsDetector() {
        return (
            "u" > typeof globalThis &&
            "u" > typeof Worker &&
            "u" > typeof URL &&
            "function" == typeof URL.createObjectURL &&
            "u" > typeof Blob
        );
    }
    createDetectorWorker() {
        return new Worker(
            URL.createObjectURL(
                new Blob(
                    [
                        `"use strict";
onmessage = (ev) => { postMessage({isOpenBeat:true});
  debugger; for (let i = 0; i < ev.data.moreDebugs; i++) { debugger; }
  postMessage({isOpenBeat:false});
};`,
                    ],
                    { type: "text/javascript" },
                ),
            ),
        );
    }
    clearNextPulse() {
        void 0 !== this.nextPulseTimeout && (clearTimeout(this.nextPulseTimeout), (this.nextPulseTimeout = void 0));
    }
    doOnePulse(l) {
        this.heart?.postMessage({ moreDebugs: l });
    }
    startDetector(l) {
        this.heart = this.createDetectorWorker();
        let t = (t) => {
            t.data.isOpenBeat
                ? new Promise((t) => {
                      (this.resolveVerdict = t),
                          setTimeout(() => {
                              this.resolveVerdict?.(!0);
                          }, l.maxMillisBeforeAckWhenClosed + 1);
                  }).then((t) => {
                      null !== t &&
                          (t !== this.isDevtoolsOpen &&
                              ((this.isDevtoolsOpen = t), t ? l.onDetectOpen() : l.onDetectClose && l.onDetectClose()),
                          this.clearNextPulse(),
                          (this.nextPulseTimeout = setTimeout(() => {
                              (this.nextPulseTimeout = void 0), this.doOnePulse(l.moreAnnoyingDebuggerStatements);
                          }, 1e3 * l.pollingIntervalSeconds)));
                  })
                : this.resolveVerdict?.(!1);
        };
        this.heart.addEventListener("message", t);
        let d = () => {
            this.detectorPaused && ((this.detectorPaused = !1), this.doOnePulse(l.moreAnnoyingDebuggerStatements));
        };
        switch (l.startup) {
            case "manual":
                break;
            case "asap":
                d();
                break;
            case "domContentLoaded":
                "u" > typeof document && "loading" !== document.readyState
                    ? d()
                    : "u" > typeof document && document.addEventListener("DOMContentLoaded", d, { once: !0 });
        }
    }
})();
async function Y() {
    try {
        (await e.t.getInstance()).setInspectorOpened(!0);
    } catch {
        return;
    }
    (0, b.t)({ inspectorOpened: !0 });
}
let T = "sha1";
async function V(l) {
    void 0 !== l.ipLookup && (0, m.s)(l.ipLookup),
        void 0 !== l.fingerprint && ((0, m.o)(l.fingerprint), (0, e.r)(!1 === l.fingerprint)),
        (0, n._)() ||
            (0, n.y)(
                (0, n.h)({
                    endpoint: Z.t.events,
                    authToken: () => (0, a.r)(),
                    apiBaseUrl: () => (0, a.n)().defaults.baseURL,
                    apiClient: a.t,
                    pageLifecycle: new r(),
                    timer: c.t.getInstance(),
                }),
            );
    let t = (function (l) {
            if (void 0 !== l)
                return !1 === l
                    ? { enabled: !1, mgf1: T }
                    : !0 === l
                      ? { enabled: !0, mgf1: T }
                      : { enabled: !0, mgf1: l.mgf1 ?? T };
        })(l.encryption),
        d = (0, s.t)();
    if (t && d && (t.enabled !== d.encryption.enabled || (t.enabled && t.mgf1 !== d.encryption.mgf1)))
        throw Error(
            "Encryption is locked at the first setup() call and cannot be changed at runtime. Call reset() to fully reinitialize the SDK if you need a different encryption configuration.",
        );
    if (t?.enabled && !1 === l.wasm)
        throw Error("Encryption is incompatible with `wasm: false`. Either remove `wasm: false` or omit `encryption`.");
    let b = t ?? d?.encryption ?? { enabled: !1, mgf1: "sha1" },
        u = l.wasm || t?.enabled ? X(l.wasm || {}) : void 0;
    if (
        (l.apiURL && (await (0, s.n)(l.apiURL, l, u, b)),
        l.token &&
            (0, a.i)() &&
            (0, m.i)({ token: l.token, hostingApp: l.hostingApp }).catch((l) => {
                console.warn("Session initialization failed:", l);
            }),
        u)
    ) {
        (i = { ...u, pipelines: u.pipelines ? [...u.pipelines] : void 0 }), await (0, e.i)(u);
        let t = await e.t.getInstance();
        await t.initialize({ ...u, pipelines: u.pipelines ? [...u.pipelines] : void 0 });
        let d = "object" == typeof l.wasm && !0 === l.wasm.showLogs;
        await t.setProductionMode(!d),
            l.devMode ||
                y.start({
                    onInspectorOpened: () => {
                        Y();
                    },
                });
    }
    l.tri && (await (0, o.n)(l.tri, { sessionToken: l.token }));
}
function L(l) {
    i = l;
}
async function I(l) {
    let t = l ?? i;
    if (!t) throw Error("WASM config is required. Provide config parameter or call setWasmConfig() first.");
    let d = X(t);
    await (await e.t.getInstance()).initialize({ ...d, pipelines: d.pipelines ? [...d.pipelines] : void 0 });
}
async function z(l) {
    0 !== l.length && i && (await (0, e.i)({ ...X(i), pipelines: [...l] }));
}
async function w(l) {
    let t = l ?? i;
    t && (await (0, s.i)(X(t)));
}
function R() {
    y.stop(),
        (0, b.r)(),
        (0, a.a)(),
        (0, m.a)(),
        (0, m.s)(!0),
        (0, m.o)(!0),
        (0, e.r)(!1),
        (0, n.v)(),
        (0, s.r)(),
        (0, o.a)(),
        (i = void 0),
        e.t.resetInstance(),
        (0, o.o)();
}
