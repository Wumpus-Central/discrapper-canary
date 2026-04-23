"use strict";
n.d(t, { D: () => h, d: () => _ });
var i = n(835245),
    s = n(77729),
    r = n(954571),
    l = n(837921),
    a = n(614792),
    o = n(652215);
function c() {
    return window.GLOBAL_ENV.HTML_TIMESTAMP;
}
class d {
    loadId = (0, i.A)();
    appUIViewed = !1;
    trackEvent(e) {
        let t = Date.now();
        requestIdleCallback(() => {
            let n, i;
            r.default.track(o.HAw.APP_UI_VIEWED, {
                ...(function () {
                    let e = "--campaign-id=";
                    for (let t of s.A?.processUtils?.getMainArgvSync?.() ?? [])
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
                            s = null != e.decodedBodySize ? e.decodedBodySize : e.encodedBodySize,
                            r = e.transferSize;
                        null != s &&
                            null != t &&
                            ((n = !0),
                            (i.total_compressed_byte_size += t),
                            (i.total_uncompressed_byte_size += s),
                            null != r && (i.total_uncompressed_byte_size += r),
                            "resource" === e.entryType &&
                                ("script" === e.initiatorType &&
                                    null != e.name &&
                                    null != e.name.match(/\.js/) &&
                                    ((i.js_compressed_byte_size += t),
                                    (i.js_uncompressed_byte_size += s),
                                    null != r && (i.js_uncompressed_byte_size += r)),
                                "link" === e.initiatorType &&
                                    null != e.name &&
                                    null != e.name.match(/\.css/) &&
                                    ((i.css_compressed_byte_size += t),
                                    (i.css_uncompressed_byte_size += s),
                                    null != r && (i.css_uncompressed_byte_size += r))));
                    }),
                n ? i : {}),
                load_id: this.loadId,
                screen_name: e,
                duration_ms_since_app_opened: t - c(),
                app_hardware_acceleration_enabled: l.Ay.getEnableHardwareAcceleration(),
            });
        });
    }
    trackTTI() {
        if (window.__TTI_COMPLETED) return;
        window.__TTI_COMPLETED = !0;
        let e = window.location?.pathname?.split("/")?.[1];
        requestIdleCallback(() => {
            let t = c();
            a.A.firstRenderAfterReadyPayload.record();
            let n = a.A.serializeWebPerfStartupMetrics(t);
            r.default.track(o.HAw.APP_WEB_PERF_STARTUP_METRICS, { load_id: this.loadId, url_root_path: e, ...n });
            try {
                l.Ay.appFirstRenderAfterReadyPayload();
            } catch (e) {}
        });
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) {
            this.trackEvent(e);
            try {
                l.Ay.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
}
let u = new d();
function _(e) {
    u.trackAppUIViewed(e);
}
function h() {
    u.trackTTI();
}
