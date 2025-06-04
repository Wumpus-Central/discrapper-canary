let r;
n.d(t, { Z: () => A }), n(388685);
var i,
    o = n(442837),
    a = n(570140),
    s = n(70956),
    l = n(709054),
    c = n(470734);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = 1,
    h = 2,
    m = 14 * s.Z.Millis.DAY,
    g = Object.freeze([]),
    E = {},
    b = {};
function y(e) {
    var t;
    let { messageId: n, channelId: r, attachments: i } = e,
        o = {
            messageId: n,
            channelId: r,
            attachments: i,
            reportSubmit: !1
        },
        a = null != (t = b[r]) ? t : g;
    (b[r] = [...a, o]), (E[n] = o);
}
function O(e) {
    let { messageId: t, channelId: n } = e,
        r = b[n];
    null != r && ((b[n] = r.map((e) => (e.messageId === t ? _(d({}, e), { reportSubmit: !0 }) : e))), (E[t] = _(d({}, E[t]), { reportSubmit: !0 })));
}
function v() {
    S();
}
function I(e) {
    let { explicitContentScanVersion: t } = e;
    (r = t), S();
}
function S() {
    (E = {}), (b = {});
}
class T extends (i = o.ZP.Store) {
    getFpMessageInfo(e) {
        return E[e];
    }
    getChannelFpInfo(e) {
        var t;
        return null != (t = b[e]) ? t : g;
    }
    canSubmitFpReport(e) {
        let t = E[e];
        return null != t && !t.reportSubmit && l.default.age(t.messageId) < m;
    }
    get validContentScanVersion() {
        return (0, c.U2)('ExplicitMediaStore.validContentScanVersion') ? h : null != r ? r : p;
    }
}
u(T, 'displayName', 'FalsePositiveStore');
let A = new T(a.Z, {
    LOGOUT: v,
    CONNECTION_OPEN: I,
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: y,
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: O
});
