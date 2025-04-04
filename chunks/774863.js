let r;
n.d(t, { Z: () => I }), n(47120);
var i,
    o = n(442837),
    a = n(570140),
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
        o = {
            messageId: n,
            channelId: r,
            attachments: i,
            reportSubmit: !1
        },
        a = null != (t = m[r]) ? t : p;
    (m[r] = [...a, o]), (h[n] = o);
}
function E(e) {
    let { messageId: t, channelId: n } = e,
        r = m[n];
    null != r && ((m[n] = r.map((e) => (e.messageId === t ? f(u({}, e), { reportSubmit: !0 }) : e))), (h[t] = f(u({}, h[t]), { reportSubmit: !0 })));
}
function b() {
    v();
}
function y(e) {
    let { explicitContentScanVersion: t } = e;
    (r = t), v();
}
function v() {
    (h = {}), (m = {});
}
class O extends (i = o.ZP.Store) {
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
c(O, 'displayName', 'FalsePositiveStore');
let I = new O(a.Z, {
    LOGOUT: b,
    CONNECTION_OPEN: y,
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: g,
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: E
});
