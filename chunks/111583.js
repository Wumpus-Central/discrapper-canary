let r;
n.d(t, { Z: () => w });
var i,
    o = n(442837),
    a = n(544891),
    s = n(570140),
    l = n(333023),
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
function _(e) {
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
let h = 10 * c.Z.Millis.SECOND,
    m = 1.5 * c.Z.Millis.SECOND,
    g = 5,
    E = {},
    v = Object.freeze({});
function b(e) {
    var t;
    return null !== (t = E[e]) && void 0 !== t ? t : v;
}
function y(e) {
    let { channelId: t } = e,
        n = u.default.getId();
    if (null == n || t === l.V) return !1;
    null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), (r = null));
    let i = Date.now(),
        o = 0.8 * h;
    if (null != r && (null != r.timeout || r.prevSend + o > i)) return !1;
    let c = setTimeout(
        () => {
            if (null != r && r.channelId === t && n === u.default.getId() && null != r.timeout)
                (r.timeout = null),
                    !(R(t) > g) &&
                        a.tn
                            .post({
                                url: f.ANM.TYPING(t),
                                oldFormErrors: !0,
                                rejectWithError: !0
                            })
                            .then((e) => {
                                if (200 === e.status) {
                                    var n, r;
                                    let i = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
                                        o = null !== (r = e.body.thread_create_cooldown_ms) && void 0 !== r ? r : 0;
                                    i > 0 &&
                                        s.Z.dispatch({
                                            type: 'SLOWMODE_SET_COOLDOWN',
                                            channelId: t,
                                            slowmodeType: d.S.SendMessage,
                                            cooldownMs: i
                                        }),
                                        o > 0 &&
                                            s.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: t,
                                                slowmodeType: d.S.CreateThread,
                                                cooldownMs: o
                                            });
                                }
                            });
        },
        null == r || r.prevSend > i - 2 * o ? m : 0
    );
    return (
        (r = {
            channelId: t,
            timeout: c,
            prevSend: i
        }),
        T({
            channelId: t,
            userId: n
        })
    );
}
function O(e) {
    if (null == r || r.channelId !== e) return !1;
    null != r.timeout && clearTimeout(r.timeout), (r = null);
}
function S(e) {
    let { channelId: t } = e,
        n = u.default.getId();
    return (
        null != n &&
        null != r &&
        r.channelId === t &&
        null != r.timeout &&
        (clearTimeout(r.timeout),
        (r = null),
        N({
            channelId: t,
            userId: n
        }))
    );
}
function I(e, t) {
    return setTimeout(() => {
        s.Z.dispatch({
            type: 'TYPING_STOP',
            channelId: e,
            userId: t
        });
    }, h);
}
function T(e) {
    let { channelId: t, userId: n } = e,
        r = _({}, b(t));
    clearTimeout(r[n]), (r[n] = I(t, n)), (E[t] = r);
}
function N(e) {
    let { channelId: t, userId: n } = e,
        r = E[t];
    if (null == r || null == r[n]) return !1;
    let i = _({}, r);
    clearTimeout(i[n]), delete i[n], (E[t] = i);
}
function A(e) {
    let {
        channelId: t,
        message: { author: n },
        optimistic: r
    } = e;
    return (
        r && O(t),
        null != n &&
            N({
                channelId: t,
                userId: n.id
            })
    );
}
function C() {
    E = {};
}
function R(e) {
    let t = b(e);
    return t === v ? 0 : Object.keys(t).length;
}
class P extends (i = o.ZP.Store) {
    getTypingUsers(e) {
        return b(e);
    }
    isTyping(e, t) {
        return null != b(e)[t];
    }
}
p(P, 'displayName', 'TypingStore');
let w = new P(s.Z, {
    TYPING_START: T,
    TYPING_STOP: N,
    TYPING_START_LOCAL: y,
    TYPING_STOP_LOCAL: S,
    CONNECTION_OPEN: C,
    OVERLAY_INITIALIZE: C,
    MESSAGE_CREATE: A
});
