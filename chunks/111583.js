let i;
n.d(t, { Z: () => E });
var r,
    s = n(442837),
    l = n(544891),
    o = n(570140),
    a = n(333023),
    c = n(70956),
    u = n(314897),
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
let f = 10 * c.Z.Millis.SECOND,
    m = 1.5 * c.Z.Millis.SECOND,
    b = {},
    v = Object.freeze({});
function C(e) {
    var t;
    return null != (t = b[e]) ? t : v;
}
function _(e) {
    let { channelId: t, userId: n } = e,
        i = g({}, C(t));
    clearTimeout(i[n]),
        (i[n] = setTimeout(() => {
            o.Z.dispatch({
                type: "TYPING_STOP",
                channelId: t,
                userId: n,
            });
        }, f)),
        (b[t] = i);
}
function y(e) {
    let { channelId: t, userId: n } = e,
        i = b[t];
    if (null == i || null == i[n]) return !1;
    let r = g({}, i);
    clearTimeout(r[n]), delete r[n], (b[t] = r);
}
function O() {
    b = {};
}
class S extends (r = s.ZP.Store) {
    getTypingUsers(e) {
        return C(e);
    }
    isTyping(e, t) {
        return null != C(e)[t];
    }
}
p(S, "displayName", "TypingStore");
let E = new S(o.Z, {
    TYPING_START: _,
    TYPING_STOP: y,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = u.default.getId();
        if (null == n || t === a.V) return !1;
        null != i && i.channelId !== t && (null != i.timeout && clearTimeout(i.timeout), (i = null));
        let r = Date.now(),
            s = 0.8 * f;
        if (null != i && (null != i.timeout || i.prevSend + s > r)) return !1;
        let c = setTimeout(
            () => {
                null != i &&
                    i.channelId === t &&
                    n === u.default.getId() &&
                    null != i.timeout &&
                    ((i.timeout = null),
                    (function (e) {
                        let t = C(e);
                        return t === v ? 0 : Object.keys(t).length;
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
            null == i || i.prevSend > r - 2 * s ? m : 0,
        );
        return (
            (i = {
                channelId: t,
                timeout: c,
                prevSend: r,
            }),
            _({
                channelId: t,
                userId: n,
            })
        );
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            n = u.default.getId();
        return (
            null != n &&
            null != i &&
            i.channelId === t &&
            null != i.timeout &&
            (clearTimeout(i.timeout),
            (i = null),
            y({
                channelId: t,
                userId: n,
            }))
        );
    },
    CONNECTION_OPEN: O,
    OVERLAY_INITIALIZE: O,
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
                y({
                    channelId: t,
                    userId: n.id,
                })
        );
    },
});
