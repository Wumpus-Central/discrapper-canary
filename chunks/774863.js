let r;
(n.d(t, { Z: () => T }), n(388685));
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
let _ = 2,
    p = 14 * s.Z.Millis.DAY,
    h = Object.freeze([]),
    m = {},
    g = {};
function E(e) {
    var t;
    let { messageId: n, channelId: r, attachments: i } = e,
        a = {
            messageId: n,
            channelId: r,
            attachments: i,
            reportSubmit: !1
        },
        o = null != (t = g[r]) ? t : h;
    ((g[r] = [...o, a]), (m[n] = a));
}
function b(e) {
    let { messageId: t, channelId: n } = e,
        r = g[n];
    null != r && ((g[n] = r.map((e) => (e.messageId === t ? f(u({}, e), { reportSubmit: !0 }) : e))), (m[t] = f(u({}, m[t]), { reportSubmit: !0 })));
}
function y() {
    v();
}
function O(e) {
    let { explicitContentScanVersion: t } = e;
    ((r = t), v());
}
function v() {
    ((m = {}), (g = {}));
}
class I extends (i = a.ZP.Store) {
    getFpMessageInfo(e) {
        return m[e];
    }
    getChannelFpInfo(e) {
        var t;
        return null != (t = g[e]) ? t : h;
    }
    canSubmitFpReport(e) {
        let t = m[e];
        return null != t && !t.reportSubmit && l.default.age(t.messageId) < p;
    }
    get validContentScanVersion() {
        return null != r ? r : _;
    }
}
c(I, 'displayName', 'FalsePositiveStore');
let T = new I(o.Z, {
    LOGOUT: y,
    CONNECTION_OPEN: O,
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: E,
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: b
});
