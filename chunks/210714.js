"use strict";
n.d(t, { D: () => p, d: () => f });
var i = n(835245),
    r = n(77729),
    s = n(824579),
    a = n(174459),
    o = n(612181),
    l = n(19575),
    u = n(464578),
    c = n(652215);
function d() {
    return window.GLOBAL_ENV.HTML_TIMESTAMP;
}
class _ {
    loadId = (0, i.A)();
    appUIViewed = !1;
    trackEvent(e) {
        let t = Date.now();
        requestIdleCallback(() => {
            let n, i;
            a.default.track(c.HAw.APP_UI_VIEWED, {
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
                            s = e.transferSize;
                        null != r &&
                            null != t &&
                            ((n = !0),
                            (i.total_compressed_byte_size += t),
                            (i.total_uncompressed_byte_size += r),
                            null != s && (i.total_uncompressed_byte_size += s),
                            "resource" === e.entryType &&
                                ("script" === e.initiatorType &&
                                    null != e.name &&
                                    null != e.name.match(/\.js/) &&
                                    ((i.js_compressed_byte_size += t),
                                    (i.js_uncompressed_byte_size += r),
                                    null != s && (i.js_uncompressed_byte_size += s)),
                                "link" === e.initiatorType &&
                                    null != e.name &&
                                    null != e.name.match(/\.css/) &&
                                    ((i.css_compressed_byte_size += t),
                                    (i.css_uncompressed_byte_size += r),
                                    null != s && (i.css_uncompressed_byte_size += s))));
                    }),
                n ? i : {}),
                load_id: this.loadId,
                screen_name: e,
                duration_ms_since_app_opened: t - d(),
                app_hardware_acceleration_enabled: l.Ay.getEnableHardwareAcceleration(),
            });
        });
    }
    trackTTI() {
        if (window.__TTI_COMPLETED) return;
        window.__TTI_COMPLETED = !0;
        let e = window.location?.pathname,
            t = e?.startsWith("/channels/@me") ? "channels/@me" : e?.split("/")?.[1];
        requestIdleCallback(() => {
            let e = d();
            u.A.firstRenderAfterReadyPayload.record();
            let n = u.A.serializeWebPerfStartupMetrics(e);
            a.default.track(c.HAw.APP_WEB_PERF_STARTUP_METRICS, { load_id: this.loadId, url_root_path: t, ...n });
            try {
                l.Ay.appFirstRenderAfterReadyPayload((0, o.wR)());
            } catch (e) {}
            (0, s.K)();
        });
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) {
            performance.mark(`trackAppUIViewed-${e}`), this.trackEvent(e);
            try {
                l.Ay.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
}
let h = new _();
function f(e) {
    h.trackAppUIViewed(e);
}
function p() {
    h.trackTTI();
}
