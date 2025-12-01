n.d(t, { e: () => m }), n(388685), n(35282);
var r = n(772848),
    i = n(579806),
    a = n(626135),
    o = n(998502),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f() {
    return window.GLOBAL_ENV.HTML_TIMESTAMP;
}
class p {
    trackEvent(e) {
        let t = Date.now();
        requestIdleCallback(() => {
            a.default.track(
                s.rMx.APP_UI_VIEWED,
                d(c({}, h(), g()), {
                    load_id: this.loadId,
                    screen_name: e,
                    duration_ms_since_app_opened: t - f(),
                    app_hardware_acceleration_enabled: o.ZP.getEnableHardwareAcceleration(),
                }),
            );
        });
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) {
            this.trackEvent(e);
            try {
                o.ZP.appViewed();
            } catch (e) {}
            this.appUIViewed = !0;
        }
    }
    constructor() {
        l(this, "loadId", (0, r.Z)()), l(this, "appUIViewed", !1);
    }
}
let _ = new p();
function m(e) {
    _.trackAppUIViewed(e);
}
function h() {
    var e, t, n;
    let r = "--campaign-id=";
    for (let a of null !=
    (n =
        null === i.Z || void 0 === i.Z || null == (t = i.Z.processUtils) || null == (e = t.getMainArgvSync)
            ? void 0
            : e.call(t))
        ? n
        : [])
        if (a.startsWith(r)) return { referrer: a.substr(r.length) };
    return {};
}
function g() {
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
