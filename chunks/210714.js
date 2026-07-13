"use strict";
n.d(t, { D: () => I, d: () => h });
var i = n(132500),
    r = n(77729),
    a = n(824579),
    s = n(550568),
    l = n(174459),
    o = n(612181),
    d = n(19575),
    c = n(464578),
    u = n(652215);
function _() {
    return window.GLOBAL_ENV.HTML_TIMESTAMP;
}
class E {
    loadId = (0, i.A)();
    appUIViewed = !1;
    trackEvent(e) {
        let t = Date.now();
        requestIdleCallback(() => {
            let n, i;
            l.default.track(u.HAw.APP_UI_VIEWED, {
                ...(function () {
                    let e = "--campaign-id=";
                    for (let t of r.A?.processUtils?.getMainArgvSync?.() ?? [])
                        if (t.startsWith(e)) return { referrer: t.substr(e.length) };
                    return {};
                })(),
                ...((n = !1),
                (i = {
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
                            r = null != e.decodedBodySize ? e.decodedBodySize : e.encodedBodySize,
                            a = e.transferSize;
                        null != r &&
                            null != t &&
                            ((n = !0),
                            (i.total_compressed_byte_size += t),
                            (i.total_uncompressed_byte_size += r),
                            null != a && (i.total_uncompressed_byte_size += a),
                            "resource" === e.entryType &&
                                ("script" === e.initiatorType &&
                                    null != e.name &&
                                    null != e.name.match(/\.js/) &&
                                    ((i.js_compressed_byte_size += t),
                                    (i.js_uncompressed_byte_size += r),
                                    null != a && (i.js_uncompressed_byte_size += a)),
                                "link" === e.initiatorType &&
                                    null != e.name &&
                                    null != e.name.match(/\.css/) &&
                                    ((i.css_compressed_byte_size += t),
                                    (i.css_uncompressed_byte_size += r),
                                    null != a && (i.css_uncompressed_byte_size += a))));
                    }),
                n ? i : {}),
                load_id: this.loadId,
                screen_name: e,
                duration_ms_since_app_opened: t - _(),
                app_hardware_acceleration_enabled: d.Ay.getEnableHardwareAcceleration(),
            });
        });
    }
    trackTTI() {
        if (window.__TTI_COMPLETED) return;
        window.__TTI_COMPLETED = !0;
        let e = window.location?.pathname,
            t = e?.startsWith("/channels/@me") ? "channels/@me" : e?.split("/")?.[1];
        requestIdleCallback(() => {
            let e = _();
            c.A.firstRenderAfterReadyPayload.record();
            let n = c.A.serializeWebPerfStartupMetrics(e);
            l.default.track(u.HAw.APP_WEB_PERF_STARTUP_METRICS, {
                load_id: this.loadId,
                url_root_path: t,
                ...n,
                ...(0, s.$)(),
            });
            try {
                d.Ay.appFirstRenderAfterReadyPayload((0, o.wR)());
            } catch (e) {}
            (0, a.K)();
        });
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) {
            performance.mark(`trackAppUIViewed-${e}`), this.trackEvent(e);
            try {
                d.Ay.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
}
let A = new E();
function h(e) {
    A.trackAppUIViewed(e);
}
function I() {
    A.trackTTI();
}
