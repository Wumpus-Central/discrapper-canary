s.d(t, { DC: () => w, d0: () => m, y9: () => b });
var r = s(132500),
    n = s(77729),
    a = s(824579),
    i = s(550568),
    d = s(174459),
    _ = s(612181),
    c = s(19575),
    o = s(464578),
    l = s(652215);
function p() {
    return window.GLOBAL_ENV.HTML_TIMESTAMP;
}
class u {
    loadId = (0, r.A)();
    appUIViewed = !1;
    trackEvent(e) {
        let t = Date.now();
        requestIdleCallback(() => {
            let s, r;
            d.default.track(l.HAw.APP_UI_VIEWED, {
                ...(function () {
                    let e = "--campaign-id=";
                    for (let t of n.A?.processUtils?.getMainArgvSync?.() ?? [])
                        if (t.startsWith(e)) return { referrer: t.substr(e.length) };
                    return {};
                })(),
                ...((s = !1),
                (r = {
                    total_compressed_byte_size: 0,
                    total_uncompressed_byte_size: 0,
                    total_transfer_byte_size: 0,
                    js_compressed_byte_size: 0,
                    js_uncompressed_byte_size: 0,
                    js_transfer_byte_size: 0,
                    css_compressed_byte_size: 0,
                    css_uncompressed_byte_size: 0,
                    css_transfer_byte_size: 0,
                }),
                null != window.performance &&
                    null != window.performance.getEntries &&
                    window.performance.getEntries().forEach((e) => {
                        let t = null != e.encodedBodySize ? e.encodedBodySize : e.decodedBodySize,
                            n = null != e.decodedBodySize ? e.decodedBodySize : e.encodedBodySize,
                            a = e.transferSize;
                        null != n &&
                            null != t &&
                            ((s = !0),
                            (r.total_compressed_byte_size += t),
                            (r.total_uncompressed_byte_size += n),
                            null != a && (r.total_uncompressed_byte_size += a),
                            "resource" === e.entryType &&
                                ("script" === e.initiatorType &&
                                    null != e.name &&
                                    null != e.name.match(/\.js/) &&
                                    ((r.js_compressed_byte_size += t),
                                    (r.js_uncompressed_byte_size += n),
                                    null != a && (r.js_uncompressed_byte_size += a)),
                                "link" === e.initiatorType &&
                                    null != e.name &&
                                    null != e.name.match(/\.css/) &&
                                    ((r.css_compressed_byte_size += t),
                                    (r.css_uncompressed_byte_size += n),
                                    null != a && (r.css_uncompressed_byte_size += a))));
                    }),
                s ? r : {}),
                load_id: this.loadId,
                screen_name: e,
                duration_ms_since_app_opened: t - p(),
                app_hardware_acceleration_enabled: c.Ay.getEnableHardwareAcceleration(),
            });
        });
    }
    trackTTI() {
        if (window.__TTI_COMPLETED) return;
        window.__TTI_COMPLETED = !0;
        let e = window.location?.pathname,
            t = e?.startsWith("/channels/@me") ? "channels/@me" : e?.split("/")?.[1];
        requestIdleCallback(() => {
            let e = p();
            o.A.firstRenderAfterReadyPayload.record();
            let s = o.A.serializeWebPerfStartupMetrics(e);
            d.default.track(l.HAw.APP_WEB_PERF_STARTUP_METRICS, {
                load_id: this.loadId,
                metric_name: "tti",
                url_root_path: t,
                ...s,
                ...(0, i.$)(),
            });
            try {
                c.Ay.appFirstRenderAfterReadyPayload((0, _.wR)());
            } catch (e) {}
            (0, a.K)();
        });
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) {
            performance.mark(`trackAppUIViewed-${e}`), this.trackEvent(e);
            try {
                c.Ay.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
}
let y = new u();
function m(e) {
    y.trackAppUIViewed(e);
}
function w() {
    y.trackTTI();
}
function b() {
    return y.loadId;
}
