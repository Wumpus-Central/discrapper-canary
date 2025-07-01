let r;
n.d(t, { Z: () => P });
var s,
    i = n(442837),
    l = n(544891),
    o = n(570140),
    a = n(333023),
    c = n(70956),
    u = n(314897),
    d = n(300429),
    f = n(981631);
function p(e, t, n) {
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
function g(e) {
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
                p(e, t, n[t]);
            }));
    }
    return e;
}
let b = 10 * c.Z.Millis.SECOND,
    v = 1.5 * c.Z.Millis.SECOND,
    m = {},
    h = Object.freeze({});
function O(e) {
    var t;
    return null != (t = m[e]) ? t : h;
}
function y(e) {
    let { channelId: t, userId: n } = e,
        r = g({}, O(t));
    (clearTimeout(r[n]),
        (r[n] = setTimeout(() => {
            o.Z.dispatch({
                type: 'TYPING_STOP',
                channelId: t,
                userId: n
            });
        }, b)),
        (m[t] = r));
}
function j(e) {
    let { channelId: t, userId: n } = e,
        r = m[t];
    if (null == r || null == r[n]) return !1;
    let s = g({}, r);
    (clearTimeout(s[n]), delete s[n], (m[t] = s));
}
function S() {
    m = {};
}
class E extends (s = i.ZP.Store) {
    getTypingUsers(e) {
        return O(e);
    }
    isTyping(e, t) {
        return null != O(e)[t];
    }
}
p(E, 'displayName', 'TypingStore');
let P = new E(o.Z, {
    TYPING_START: y,
    TYPING_STOP: j,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = u.default.getId();
        if (null == n || t === a.V) return !1;
        null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), (r = null));
        let s = Date.now(),
            i = 0.8 * b;
        if (null != r && (null != r.timeout || r.prevSend + i > s)) return !1;
        let c = setTimeout(
            () => {
                null != r &&
                    r.channelId === t &&
                    n === u.default.getId() &&
                    null != r.timeout &&
                    ((r.timeout = null),
                    (function (e) {
                        let t = O(e);
                        return t === h ? 0 : Object.keys(t).length;
                    })(t) > 5 ||
                        l.tn
                            .post({
                                url: f.ANM.TYPING(t),
                                oldFormErrors: !0,
                                rejectWithError: !0
                            })
                            .then((e) => {
                                if (200 === e.status) {
                                    var n, r;
                                    let s = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
                                        i = null != (r = e.body.thread_create_cooldown_ms) ? r : 0;
                                    (s > 0 &&
                                        o.Z.dispatch({
                                            type: 'SLOWMODE_SET_COOLDOWN',
                                            channelId: t,
                                            slowmodeType: d.S.SendMessage,
                                            cooldownMs: s
                                        }),
                                        i > 0 &&
                                            o.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: t,
                                                slowmodeType: d.S.CreateThread,
                                                cooldownMs: i
                                            }));
                                }
                            }));
            },
            null == r || r.prevSend > s - 2 * i ? v : 0
        );
        return (
            (r = {
                channelId: t,
                timeout: c,
                prevSend: s
            }),
            y({
                channelId: t,
                userId: n
            })
        );
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            n = u.default.getId();
        return (
            null != n &&
            null != r &&
            r.channelId === t &&
            null != r.timeout &&
            (clearTimeout(r.timeout),
            (r = null),
            j({
                channelId: t,
                userId: n
            }))
        );
    },
    CONNECTION_OPEN: S,
    OVERLAY_INITIALIZE: S,
    MESSAGE_CREATE: function (e) {
        let {
            channelId: t,
            message: { author: n },
            optimistic: s
        } = e;
        return (
            s &&
                (function (e) {
                    if (null != r && r.channelId === e) (null != r.timeout && clearTimeout(r.timeout), (r = null));
                })(t),
            null != n &&
                j({
                    channelId: t,
                    userId: n.id
                })
        );
    }
});
