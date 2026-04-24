"use strict";
n.d(t, { D: () => h, d: () => _ });
var i = n(132500),
    s = n(77729),
    l = n(954571),
    r = n(19575),
    a = n(464578),
    o = n(652215);
function d() {
    return window.GLOBAL_ENV.HTML_TIMESTAMP;
}
class c {
    loadId = (0, i.A)();
    appUIViewed = !1;
    trackEvent(e) {
        let t = Date.now();
        requestIdleCallback(() => {
            let n, i;
            l.default.track(o.HAw.APP_UI_VIEWED, {
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
                            l = e.transferSize;
                        null != s &&
                            null != t &&
                            ((n = !0),
                            (i.total_compressed_byte_size += t),
                            (i.total_uncompressed_byte_size += s),
                            null != l && (i.total_uncompressed_byte_size += l),
                            "resource" === e.entryType &&
                                ("script" === e.initiatorType &&
                                    null != e.name &&
                                    null != e.name.match(/\.js/) &&
                                    ((i.js_compressed_byte_size += t),
                                    (i.js_uncompressed_byte_size += s),
                                    null != l && (i.js_uncompressed_byte_size += l)),
                                "link" === e.initiatorType &&
                                    null != e.name &&
                                    null != e.name.match(/\.css/) &&
                                    ((i.css_compressed_byte_size += t),
                                    (i.css_uncompressed_byte_size += s),
                                    null != l && (i.css_uncompressed_byte_size += l))));
                    }),
                n ? i : {}),
                load_id: this.loadId,
                screen_name: e,
                duration_ms_since_app_opened: t - d(),
                app_hardware_acceleration_enabled: r.Ay.getEnableHardwareAcceleration(),
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
            a.A.firstRenderAfterReadyPayload.record();
            let n = a.A.serializeWebPerfStartupMetrics(e);
            l.default.track(o.HAw.APP_WEB_PERF_STARTUP_METRICS, { load_id: this.loadId, url_root_path: t, ...n });
            try {
                r.Ay.appFirstRenderAfterReadyPayload();
            } catch (e) {}
        });
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) {
            this.trackEvent(e);
            try {
                r.Ay.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
}
let u = new c();
function _(e) {
    u.trackAppUIViewed(e);
}
function h() {
    u.trackTTI();
}
