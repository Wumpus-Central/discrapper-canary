let r;
n.d(t, { Z: () => j });
var i,
    s = n(442837),
    o = n(544891),
    l = n(570140),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
let b = 10 * c.Z.Millis.SECOND,
    m = 1.5 * c.Z.Millis.SECOND,
    _ = {},
    h = Object.freeze({});
function v(e) {
    var t;
    return null != (t = _[e]) ? t : h;
}
function O(e) {
    let { channelId: t, userId: n } = e,
        r = g({}, v(t));
    clearTimeout(r[n]),
        (r[n] = setTimeout(() => {
            l.Z.dispatch({
                type: 'TYPING_STOP',
                channelId: t,
                userId: n
            });
        }, b)),
        (_[t] = r);
}
function y(e) {
    let { channelId: t, userId: n } = e,
        r = _[t];
    if (null == r || null == r[n]) return !1;
    let i = g({}, r);
    clearTimeout(i[n]), delete i[n], (_[t] = i);
}
function S() {
    _ = {};
}
class C extends (i = s.ZP.Store) {
    getTypingUsers(e) {
        return v(e);
    }
    isTyping(e, t) {
        return null != v(e)[t];
    }
}
p(C, 'displayName', 'TypingStore');
let j = new C(l.Z, {
    TYPING_START: O,
    TYPING_STOP: y,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = u.default.getId();
        if (null == n || t === a.V) return !1;
        null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), (r = null));
        let i = Date.now(),
            s = 0.8 * b;
        if (null != r && (null != r.timeout || r.prevSend + s > i)) return !1;
        let c = setTimeout(
            () => {
                null != r &&
                    r.channelId === t &&
                    n === u.default.getId() &&
                    null != r.timeout &&
                    ((r.timeout = null),
                    (function (e) {
                        let t = v(e);
                        return t === h ? 0 : Object.keys(t).length;
                    })(t) > 5 ||
                        o.tn
                            .post({
                                url: f.ANM.TYPING(t),
                                oldFormErrors: !0,
                                rejectWithError: !0
                            })
                            .then((e) => {
                                if (200 === e.status) {
                                    var n, r;
                                    let i = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
                                        s = null != (r = e.body.thread_create_cooldown_ms) ? r : 0;
                                    i > 0 &&
                                        l.Z.dispatch({
                                            type: 'SLOWMODE_SET_COOLDOWN',
                                            channelId: t,
                                            slowmodeType: d.S.SendMessage,
                                            cooldownMs: i
                                        }),
                                        s > 0 &&
                                            l.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: t,
                                                slowmodeType: d.S.CreateThread,
                                                cooldownMs: s
                                            });
                                }
                            }));
            },
            null == r || r.prevSend > i - 2 * s ? m : 0
        );
        return (
            (r = {
                channelId: t,
                timeout: c,
                prevSend: i
            }),
            O({
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
            y({
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
                    if (null != r && r.channelId === e) null != r.timeout && clearTimeout(r.timeout), (r = null);
                })(t),
            null != n &&
                y({
                    channelId: t,
                    userId: n.id
                })
        );
    }
});
