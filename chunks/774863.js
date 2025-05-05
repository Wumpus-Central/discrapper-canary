let r;
n.d(t, { Z: () => I }), n(388685);
var i,
    a = n(442837),
    o = n(570140),
    s = n(70956),
    l = n(709054);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
let _ = 14 * s.Z.Millis.DAY,
    p = Object.freeze([]),
    h = {},
    m = {};
function g(e) {
    var t;
    let { messageId: n, channelId: r, attachments: i } = e,
        a = {
            messageId: n,
            channelId: r,
            attachments: i,
            reportSubmit: !1
        },
        o = null != (t = m[r]) ? t : p;
    (m[r] = [...o, a]), (h[n] = a);
}
function E(e) {
    let { messageId: t, channelId: n } = e,
        r = m[n];
    null != r && ((m[n] = r.map((e) => (e.messageId === t ? f(u({}, e), { reportSubmit: !0 }) : e))), (h[t] = f(u({}, h[t]), { reportSubmit: !0 })));
}
function b() {
    O();
}
function y(e) {
    let { explicitContentScanVersion: t } = e;
    (r = t), O();
}
function O() {
    (h = {}), (m = {});
}
class v extends (i = a.ZP.Store) {
    getFpMessageInfo(e) {
        return h[e];
    }
    getChannelFpInfo(e) {
        var t;
        return null != (t = m[e]) ? t : p;
    }
    canSubmitFpReport(e) {
        let t = h[e];
        return null != t && !t.reportSubmit && l.default.age(t.messageId) < _;
    }
    get validContentScanVersion() {
        return r;
    }
}
c(v, 'displayName', 'FalsePositiveStore');
let I = new v(o.Z, {
    LOGOUT: b,
    CONNECTION_OPEN: y,
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: g,
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: E
});
