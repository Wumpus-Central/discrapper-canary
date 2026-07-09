"use strict";
n.d(t, { D: () => h, d: () => A });
var i = n(132500),
    r = n(77729),
    a = n(824579),
    s = n(174459),
    l = n(612181),
    o = n(19575),
    d = n(464578),
    c = n(652215);
function u() {
    return window.GLOBAL_ENV.HTML_TIMESTAMP;
}
class _ {
    loadId = (0, i.A)();
    appUIViewed = !1;
    trackEvent(e) {
        let t = Date.now();
        requestIdleCallback(() => {
            let n, i;
            s.default.track(c.HAw.APP_UI_VIEWED, {
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
                duration_ms_since_app_opened: t - u(),
                app_hardware_acceleration_enabled: o.Ay.getEnableHardwareAcceleration(),
            });
        });
    }
    trackTTI() {
        if (window.__TTI_COMPLETED) return;
        window.__TTI_COMPLETED = !0;
        let e = window.location?.pathname,
            t = e?.startsWith("/channels/@me") ? "channels/@me" : e?.split("/")?.[1];
        requestIdleCallback(() => {
            let e = u();
            d.A.firstRenderAfterReadyPayload.record();
            let n = d.A.serializeWebPerfStartupMetrics(e);
            s.default.track(c.HAw.APP_WEB_PERF_STARTUP_METRICS, { load_id: this.loadId, url_root_path: t, ...n });
            try {
                o.Ay.appFirstRenderAfterReadyPayload((0, l.wR)());
            } catch (e) {}
            (0, a.K)();
        });
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) {
            performance.mark(`trackAppUIViewed-${e}`), this.trackEvent(e);
            try {
                o.Ay.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
}
let E = new _();
function A(e) {
    E.trackAppUIViewed(e);
}
function h() {
    E.trackTTI();
}
