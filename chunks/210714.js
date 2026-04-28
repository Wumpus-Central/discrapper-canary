s.d(t, { D: () => u, d: () => p });
var r = s(132500),
    a = s(77729),
    n = s(954571),
    i = s(19575),
    _ = s(464578),
    d = s(652215);
function c() {
    return window.GLOBAL_ENV.HTML_TIMESTAMP;
}
class o {
    loadId = (0, r.A)();
    appUIViewed = !1;
    trackEvent(e) {
        let t = Date.now();
        requestIdleCallback(() => {
            let s, r;
            n.default.track(d.HAw.APP_UI_VIEWED, {
                ...(function () {
                    let e = "--campaign-id=";
                    for (let t of a.A?.processUtils?.getMainArgvSync?.() ?? [])
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
                            a = null != e.decodedBodySize ? e.decodedBodySize : e.encodedBodySize,
                            n = e.transferSize;
                        null != a &&
                            null != t &&
                            ((s = !0),
                            (r.total_compressed_byte_size += t),
                            (r.total_uncompressed_byte_size += a),
                            null != n && (r.total_uncompressed_byte_size += n),
                            "resource" === e.entryType &&
                                ("script" === e.initiatorType &&
                                    null != e.name &&
                                    null != e.name.match(/\.js/) &&
                                    ((r.js_compressed_byte_size += t),
                                    (r.js_uncompressed_byte_size += a),
                                    null != n && (r.js_uncompressed_byte_size += n)),
                                "link" === e.initiatorType &&
                                    null != e.name &&
                                    null != e.name.match(/\.css/) &&
                                    ((r.css_compressed_byte_size += t),
                                    (r.css_uncompressed_byte_size += a),
                                    null != n && (r.css_uncompressed_byte_size += n))));
                    }),
                s ? r : {}),
                load_id: this.loadId,
                screen_name: e,
                duration_ms_since_app_opened: t - c(),
                app_hardware_acceleration_enabled: i.Ay.getEnableHardwareAcceleration(),
            });
        });
    }
    trackTTI() {
        if (window.__TTI_COMPLETED) return;
        window.__TTI_COMPLETED = !0;
        let e = window.location?.pathname,
            t = e?.startsWith("/channels/@me") ? "channels/@me" : e?.split("/")?.[1];
        requestIdleCallback(() => {
            let e = c();
            _.A.firstRenderAfterReadyPayload.record();
            let s = _.A.serializeWebPerfStartupMetrics(e);
            n.default.track(d.HAw.APP_WEB_PERF_STARTUP_METRICS, { load_id: this.loadId, url_root_path: t, ...s });
            try {
                i.Ay.appFirstRenderAfterReadyPayload();
            } catch (e) {}
        });
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) {
            performance.mark(`trackAppUIViewed-${e}`), this.trackEvent(e);
            try {
                i.Ay.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
}
let l = new o();
function p(e) {
    l.trackAppUIViewed(e);
}
function u() {
    l.trackTTI();
}
