let i;
n.d(t, { Z: () => D });
var r,
    a = n(442837),
    s = n(544891),
    o = n(570140),
    l = n(333023),
    u = n(70956),
    c = n(314897),
    d = n(300429),
    f = n(981631);
function _(e, t, n) {
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
let p = 10 * u.Z.Millis.SECOND,
    h = 1.5 * u.Z.Millis.SECOND,
    m = 5,
    g = {},
    E = Object.freeze({});
function v(e) {
    var t;
    return null !== (t = g[e]) && void 0 !== t ? t : E;
}
function y(e) {
    let { channelId: t } = e,
        n = c.default.getId();
    if (null == n || t === l.V) return !1;
    null != i && i.channelId !== t && (null != i.timeout && clearTimeout(i.timeout), (i = null));
    let r = Date.now(),
        a = 0.8 * p;
    if (null != i && (null != i.timeout || i.prevSend + a > r)) return !1;
    let u = setTimeout(
        () => {
            if (null != i && i.channelId === t && n === c.default.getId() && null != i.timeout)
                (i.timeout = null),
                    !(R(t) > m) &&
                        s.tn
                            .post({
                                url: f.ANM.TYPING(t),
                                oldFormErrors: !0,
                                rejectWithError: !0
                            })
                            .then((e) => {
                                if (200 === e.status) {
                                    var n, i;
                                    let r = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
                                        a = null !== (i = e.body.thread_create_cooldown_ms) && void 0 !== i ? i : 0;
                                    r > 0 &&
                                        o.Z.dispatch({
                                            type: 'SLOWMODE_SET_COOLDOWN',
                                            channelId: t,
                                            slowmodeType: d.S.SendMessage,
                                            cooldownMs: r
                                        }),
                                        a > 0 &&
                                            o.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: t,
                                                slowmodeType: d.S.CreateThread,
                                                cooldownMs: a
                                            });
                                }
                            });
        },
        null == i || i.prevSend > r - 2 * a ? h : 0
    );
    return (
        (i = {
            channelId: t,
            timeout: u,
            prevSend: r
        }),
        S({
            channelId: t,
            userId: n
        })
    );
}
function I(e) {
    if (null == i || i.channelId !== e) return !1;
    null != i.timeout && clearTimeout(i.timeout), (i = null);
}
function b(e) {
    let { channelId: t } = e,
        n = c.default.getId();
    return (
        null != n &&
        null != i &&
        i.channelId === t &&
        null != i.timeout &&
        (clearTimeout(i.timeout),
        (i = null),
        A({
            channelId: t,
            userId: n
        }))
    );
}
function T(e, t) {
    return setTimeout(() => {
        o.Z.dispatch({
            type: 'TYPING_STOP',
            channelId: e,
            userId: t
        });
    }, p);
}
function S(e) {
    let { channelId: t, userId: n } = e,
        i = { ...v(t) };
    clearTimeout(i[n]), (i[n] = T(t, n)), (g[t] = i);
}
function A(e) {
    let { channelId: t, userId: n } = e,
        i = g[t];
    if (null == i || null == i[n]) return !1;
    let r = { ...i };
    clearTimeout(r[n]), delete r[n], (g[t] = r);
}
function N(e) {
    let {
        channelId: t,
        message: { author: n },
        optimistic: i
    } = e;
    return (
        i && I(t),
        null != n &&
            A({
                channelId: t,
                userId: n.id
            })
    );
}
function C() {
    g = {};
}
function R(e) {
    let t = v(e);
    return t === E ? 0 : Object.keys(t).length;
}
class O extends (r = a.ZP.Store) {
    getTypingUsers(e) {
        return v(e);
    }
    isTyping(e, t) {
        return null != v(e)[t];
    }
}
_(O, 'displayName', 'TypingStore');
let D = new O(o.Z, {
    TYPING_START: S,
    TYPING_STOP: A,
    TYPING_START_LOCAL: y,
    TYPING_STOP_LOCAL: b,
    CONNECTION_OPEN: C,
    OVERLAY_INITIALIZE: C,
    MESSAGE_CREATE: N
});
