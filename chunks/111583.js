let i;
n.d(t, { Z: () => _ });
var r,
    s = n(442837),
    l = n(544891),
    o = n(570140),
    a = n(333023),
    u = n(70956),
    c = n(314897),
    d = n(300429),
    h = n(981631);
function p(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
let f = 10 * u.Z.Millis.SECOND,
    v = 1.5 * u.Z.Millis.SECOND,
    m = {},
    C = Object.freeze({});
function b(e) {
    var t;
    return null != (t = m[e]) ? t : C;
}
function y(e) {
    let { channelId: t, userId: n } = e,
        i = g({}, b(t));
    clearTimeout(i[n]),
        (i[n] = setTimeout(() => {
            o.Z.dispatch({
                type: "TYPING_STOP",
                channelId: t,
                userId: n,
            });
        }, f)),
        (m[t] = i);
}
function O(e) {
    let { channelId: t, userId: n } = e,
        i = m[t];
    if (null == i || null == i[n]) return !1;
    let r = g({}, i);
    clearTimeout(r[n]), delete r[n], (m[t] = r);
}
function S() {
    m = {};
}
class E extends (r = s.ZP.Store) {
    getTypingUsers(e) {
        return b(e);
    }
    isTyping(e, t) {
        return null != b(e)[t];
    }
}
p(E, "displayName", "TypingStore");
let _ = new E(o.Z, {
    TYPING_START: y,
    TYPING_STOP: O,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = c.default.getId();
        if (null == n || t === a.V) return !1;
        null != i && i.channelId !== t && (null != i.timeout && clearTimeout(i.timeout), (i = null));
        let r = Date.now(),
            s = 0.8 * f;
        if (null != i && (null != i.timeout || i.prevSend + s > r)) return !1;
        let u = setTimeout(
            () => {
                null != i &&
                    i.channelId === t &&
                    n === c.default.getId() &&
                    null != i.timeout &&
                    ((i.timeout = null),
                    (function (e) {
                        let t = b(e);
                        return t === C ? 0 : Object.keys(t).length;
                    })(t) > 5 ||
                        l.tn
                            .post({
                                url: h.ANM.TYPING(t),
                                oldFormErrors: !0,
                                rejectWithError: !0,
                            })
                            .then((e) => {
                                if (200 === e.status) {
                                    var n, i;
                                    let r = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
                                        s = null != (i = e.body.thread_create_cooldown_ms) ? i : 0;
                                    r > 0 &&
                                        o.Z.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: d.S.SendMessage,
                                            cooldownMs: r,
                                        }),
                                        s > 0 &&
                                            o.Z.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: t,
                                                slowmodeType: d.S.CreateThread,
                                                cooldownMs: s,
                                            });
                                }
                            }));
            },
            null == i || i.prevSend > r - 2 * s ? v : 0,
        );
        return (
            (i = {
                channelId: t,
                timeout: u,
                prevSend: r,
            }),
            y({
                channelId: t,
                userId: n,
            })
        );
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            n = c.default.getId();
        return (
            null != n &&
            null != i &&
            i.channelId === t &&
            null != i.timeout &&
            (clearTimeout(i.timeout),
            (i = null),
            O({
                channelId: t,
                userId: n,
            }))
        );
    },
    CONNECTION_OPEN: S,
    OVERLAY_INITIALIZE: S,
    MESSAGE_CREATE: function (e) {
        let {
            channelId: t,
            message: { author: n },
            optimistic: r,
        } = e;
        return (
            r &&
                (function (e) {
                    if (null != i && i.channelId === e) null != i.timeout && clearTimeout(i.timeout), (i = null);
                })(t),
            null != n &&
                O({
                    channelId: t,
                    userId: n.id,
                })
        );
    },
});
