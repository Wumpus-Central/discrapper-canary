let r;
n.d(t, { Z: () => x });
var i,
    s = n(442837),
    l = n(544891),
    o = n(570140),
    a = n(333023),
    c = n(384278),
    u = n(70956),
    d = n(314897),
    f = n(300429),
    p = n(981631);
function g(e, t, n) {
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
function b(e) {
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
                g(e, t, n[t]);
            }));
    }
    return e;
}
let v = 10 * u.Z.Millis.SECOND,
    m = {},
    h = Object.freeze({});
function O(e) {
    var t;
    return null != (t = m[e]) ? t : h;
}
function y(e) {
    let { channelId: t, userId: n } = e,
        r = b({}, O(t));
    (clearTimeout(r[n]),
        (r[n] = setTimeout(() => {
            o.Z.dispatch({
                type: 'TYPING_STOP',
                channelId: t,
                userId: n
            });
        }, v)),
        (m[t] = r));
}
function E(e) {
    let { channelId: t, userId: n } = e,
        r = m[t];
    if (null == r || null == r[n]) return !1;
    let i = b({}, r);
    (clearTimeout(i[n]), delete i[n], (m[t] = i));
}
function j() {
    m = {};
}
class S extends (i = s.ZP.Store) {
    getTypingUsers(e) {
        return O(e);
    }
    isTyping(e, t) {
        return null != O(e)[t];
    }
}
g(S, 'displayName', 'TypingStore');
let x = new S(o.Z, {
    TYPING_START: y,
    TYPING_STOP: E,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = d.default.getId();
        if (null == n || t === a.V) return !1;
        null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), (r = null));
        let i = Date.now(),
            s = 0.8 * v;
        if (null != r && (null != r.timeout || r.prevSend + s > i)) return !1;
        let { delayMs: u } = (0, c.M1)('typing_store'),
            g = setTimeout(
                () => {
                    null != r &&
                        r.channelId === t &&
                        n === d.default.getId() &&
                        null != r.timeout &&
                        ((r.timeout = null),
                        (function (e) {
                            let t = O(e);
                            return t === h ? 0 : Object.keys(t).length;
                        })(t) > 5 ||
                            l.tn
                                .post({
                                    url: p.ANM.TYPING(t),
                                    oldFormErrors: !0,
                                    rejectWithError: !0
                                })
                                .then((e) => {
                                    if (200 === e.status) {
                                        var n, r;
                                        let i = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
                                            s = null != (r = e.body.thread_create_cooldown_ms) ? r : 0;
                                        (i > 0 &&
                                            o.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: t,
                                                slowmodeType: f.S.SendMessage,
                                                cooldownMs: i
                                            }),
                                            s > 0 &&
                                                o.Z.dispatch({
                                                    type: 'SLOWMODE_SET_COOLDOWN',
                                                    channelId: t,
                                                    slowmodeType: f.S.CreateThread,
                                                    cooldownMs: s
                                                }));
                                    }
                                }));
                },
                null == r || r.prevSend > i - 2 * s ? u : 0
            );
        return (
            (r = {
                channelId: t,
                timeout: g,
                prevSend: i
            }),
            y({
                channelId: t,
                userId: n
            })
        );
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            n = d.default.getId();
        return (
            null != n &&
            null != r &&
            r.channelId === t &&
            null != r.timeout &&
            (clearTimeout(r.timeout),
            (r = null),
            E({
                channelId: t,
                userId: n
            }))
        );
    },
    CONNECTION_OPEN: j,
    OVERLAY_INITIALIZE: j,
    MESSAGE_CREATE: function (e) {
        let {
            channelId: t,
            message: { author: n },
            optimistic: i
        } = e;
        return (
            i &&
                (function (e) {
                    if (null != r && r.channelId === e) (null != r.timeout && clearTimeout(r.timeout), (r = null));
                })(t),
            null != n &&
                E({
                    channelId: t,
                    userId: n.id
                })
        );
    }
});
