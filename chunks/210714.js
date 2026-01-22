n.d(t, {
    D: () => g,
    d: () => m,
}),
    n(747238),
    n(896048);
var r = n(835245),
    i = n(77729),
    a = n(954571),
    s = n(837921),
    o = n(614792),
    l = n(652215);
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
function u(e) {
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
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p() {
    return window.GLOBAL_ENV.HTML_TIMESTAMP;
}
class _ {
    trackEvent(e) {
        let t = Date.now();
        requestIdleCallback(() => {
            a.default.track(
                l.HAw.APP_UI_VIEWED,
                f(u({}, E(), b()), {
                    load_id: this.loadId,
                    screen_name: e,
                    duration_ms_since_app_opened: t - p(),
                    app_hardware_acceleration_enabled: s.Ay.getEnableHardwareAcceleration(),
                }),
            );
        });
    }
    trackTTI() {
        var e, t, n;
        if (window.__TTI_COMPLETED) return;
        window.__TTI_COMPLETED = !0;
        let r = null == (n = window.location) || null == (t = n.pathname) || null == (e = t.split("/")) ? void 0 : e[1];
        requestIdleCallback(() => {
            let e = p();
            o.A.firstRenderAfterReadyPayload.record();
            let t = o.A.serializeWebPerfStartupMetrics(e);
            a.default.track(
                l.HAw.APP_WEB_PERF_STARTUP_METRICS,
                u(
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
}
let h = new _();
function m(e) {
    h.trackAppUIViewed(e);
}
function g() {
    h.trackTTI();
}
function E() {
    var e, t, n;
    let r = "--campaign-id=";
    for (let a of null !=
    (e =
        null === i.A || void 0 === i.A || null == (n = i.A.processUtils) || null == (t = n.getMainArgvSync)
            ? void 0
            : t.call(n))
        ? e
        : [])
        if (a.startsWith(r)) return { referrer: a.substr(r.length) };
    return {};
}
function b() {
    let e = !1,
        t = {
            total_compressed_byte_size: 0,
            total_uncompressed_byte_size: 0,
            total_transfer_byte_size: 0,
            js_compressed_byte_size: 0,
            js_uncompressed_byte_size: 0,
            js_transfer_byte_size: 0,
            css_compressed_byte_size: 0,
            css_uncompressed_byte_size: 0,
            css_transfer_byte_size: 0,
        };
    return (
        null != window.performance &&
            null != window.performance.getEntries &&
            window.performance.getEntries().forEach((n) => {
                let r = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                    i = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                    a = n.transferSize;
                null != i &&
                    null != r &&
                    ((e = !0),
                    (t.total_compressed_byte_size += r),
                    (t.total_uncompressed_byte_size += i),
                    null != a && (t.total_uncompressed_byte_size += a),
                    "resource" === n.entryType &&
                        ("script" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.js/) &&
                            ((t.js_compressed_byte_size += r),
                            (t.js_uncompressed_byte_size += i),
                            null != a && (t.js_uncompressed_byte_size += a)),
                        "link" === n.initiatorType &&
                            null != n.name &&
                            null != n.name.match(/\.css/) &&
                            ((t.css_compressed_byte_size += r),
                            (t.css_uncompressed_byte_size += i),
                            null != a && (t.css_uncompressed_byte_size += a))));
            }),
        e ? t : {}
    );
}
