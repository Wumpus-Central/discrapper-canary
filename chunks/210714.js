n.d(t, {
    D: () => m,
    d: () => p,
}),
    n(747238),
    n(896048);
var r = n(835245),
    i = n(77729),
    l = n(954571),
    s = n(837921),
    a = n(614792),
    o = n(652215);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}

function u() {
    return window.GLOBAL_ENV.HTML_TIMESTAMP;
}
let _ = new (class {
    trackEvent(e) {
        let t = Date.now();
        requestIdleCallback(() => {
            var n, r;
            let a, c;
            l.default.track(
                o.HAw.APP_UI_VIEWED,
                ((n = d(
                    {},
                    (function () {
                        var e, t, n;
                        let r = "--campaign-id=";
                        for (let l of null !=
                        (e =
                            null === i.A ||
                            void 0 === i.A ||
                            null == (n = i.A.processUtils) ||
                            null == (t = n.getMainArgvSync)
                                ? void 0
                                : t.call(n))
                            ? e
                            : [])
                            if (l.startsWith(r))
                                return {
                                    referrer: l.substr(r.length),
                                };
                        return {};
                    })(),
                    ((a = !1),
                    (c = {
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
                                r = e.transferSize;
                            null != n &&
                                null != t &&
                                ((a = !0),
                                (c.total_compressed_byte_size += t),
                                (c.total_uncompressed_byte_size += n),
                                null != r && (c.total_uncompressed_byte_size += r),
                                "resource" === e.entryType &&
                                    ("script" === e.initiatorType &&
                                        null != e.name &&
                                        null != e.name.match(/\.js/) &&
                                        ((c.js_compressed_byte_size += t),
                                        (c.js_uncompressed_byte_size += n),
                                        null != r && (c.js_uncompressed_byte_size += r)),
                                    "link" === e.initiatorType &&
                                        null != e.name &&
                                        null != e.name.match(/\.css/) &&
                                        ((c.css_compressed_byte_size += t),
                                        (c.css_uncompressed_byte_size += n),
                                        null != r && (c.css_uncompressed_byte_size += r))));
                        }),
                    a ? c : {}),
                )),
                (r = r =
                    {
                        load_id: this.loadId,
                        screen_name: e,
                        duration_ms_since_app_opened: t - u(),
                        app_hardware_acceleration_enabled: s.Ay.getEnableHardwareAcceleration(),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                n),
            );
        });
    }
    trackTTI() {
        var e, t, n;
        if (window.__TTI_COMPLETED) return;
        window.__TTI_COMPLETED = !0;
        let r = null == (n = window.location) || null == (t = n.pathname) || null == (e = t.split("/")) ? void 0 : e[1];
        requestIdleCallback(() => {
            let e = u();
            a.A.firstRenderAfterReadyPayload.record();
            let t = a.A.serializeWebPerfStartupMetrics(e);
            l.default.track(
                o.HAw.APP_WEB_PERF_STARTUP_METRICS,
                d(
                    {
                        load_id: this.loadId,
                        url_root_path: r,
                    },
                    t,
                ),
            );
            try {
                s.Ay.appFirstRenderAfterReadyPayload();
            } catch (e) {}
        });
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) {
            this.trackEvent(e);
            try {
                s.Ay.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
    constructor() {
        c(this, "loadId", (0, r.A)()), c(this, "appUIViewed", !1);
    }
})();

function p(e) {
    _.trackAppUIViewed(e);
}

function m() {
    _.trackTTI();
}
