let r;
n.d(t, { Z: () => C });
var i,
    l = n(442837),
    s = n(544891),
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
function m(e) {
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
let b = 10 * u.Z.Millis.SECOND,
    h = {},
    v = Object.freeze({});
function O(e) {
    var t;
    return null != (t = h[e]) ? t : v;
}
function y(e) {
    let { channelId: t, userId: n } = e,
        r = m({}, O(t));
    (clearTimeout(r[n]),
        (r[n] = setTimeout(() => {
            o.Z.dispatch({
                type: 'TYPING_STOP',
                channelId: t,
                userId: n
            });
        }, b)),
        (h[t] = r));
}
function E(e) {
    let { channelId: t, userId: n } = e,
        r = h[t];
    if (null == r || null == r[n]) return !1;
    let i = m({}, r);
    (clearTimeout(i[n]), delete i[n], (h[t] = i));
}
function S() {
    h = {};
}
class j extends (i = l.ZP.Store) {
    getTypingUsers(e) {
        return O(e);
    }
    isTyping(e, t) {
        return null != O(e)[t];
    }
}
g(j, 'displayName', 'TypingStore');
let C = new j(o.Z, {
    TYPING_START: y,
    TYPING_STOP: E,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = d.default.getId();
        if (null == n || t === a.V) return !1;
        null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), (r = null));
        let i = Date.now(),
            l = 0.8 * b;
        if (null != r && (null != r.timeout || r.prevSend + l > i)) return !1;
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
                            return t === v ? 0 : Object.keys(t).length;
                        })(t) > 5 ||
                            s.tn
                                .post({
                                    url: p.ANM.TYPING(t),
                                    oldFormErrors: !0,
                                    rejectWithError: !0
                                })
                                .then((e) => {
                                    if (200 === e.status) {
                                        var n, r;
                                        let i = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
                                            l = null != (r = e.body.thread_create_cooldown_ms) ? r : 0;
                                        (i > 0 &&
                                            o.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: t,
                                                slowmodeType: f.S.SendMessage,
                                                cooldownMs: i
                                            }),
                                            l > 0 &&
                                                o.Z.dispatch({
                                                    type: 'SLOWMODE_SET_COOLDOWN',
                                                    channelId: t,
                                                    slowmodeType: f.S.CreateThread,
                                                    cooldownMs: l
                                                }));
                                    }
                                }));
                },
                null == r || r.prevSend > i - 2 * l ? u : 0
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
    CONNECTION_OPEN: S,
    OVERLAY_INITIALIZE: S,
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
