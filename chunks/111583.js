let i;
var a,
    o = r(442837),
    s = r(544891),
    l = r(570140),
    u = r(70956),
    c = r(314897),
    d = r(300429),
    f = r(981631),
    p = r(176505);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = 10 * u.Z.Millis.SECOND,
    m = 1.5 * u.Z.Millis.SECOND,
    g = 5,
    E = {},
    v = Object.freeze({});
function y(e) {
    var n;
    return null !== (n = E[e]) && void 0 !== n ? n : v;
}
function b(e) {
    let { channelId: n } = e,
        r = c.default.getId();
    if (null == r || n === p.V) return !1;
    null != i && i.channelId !== n && (null != i.timeout && clearTimeout(i.timeout), (i = null));
    let a = Date.now(),
        o = 0.8 * _;
    if (null != i && (null != i.timeout || i.prevSend + o > a)) return !1;
    let u = setTimeout(
        () => {
            if (null == i || i.channelId !== n || r !== c.default.getId() || null == i.timeout) return;
            if (((i.timeout = null), !(O(n) > g)))
                s.tn
                    .post({
                        url: f.ANM.TYPING(n),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then((e) => {
                        if (200 === e.status) {
                            var r, i;
                            let a = null !== (r = e.body.message_send_cooldown_ms) && void 0 !== r ? r : 0,
                                o = null !== (i = e.body.thread_create_cooldown_ms) && void 0 !== i ? i : 0;
                            a > 0 &&
                                l.Z.dispatch({
                                    type: 'SLOWMODE_SET_COOLDOWN',
                                    channelId: n,
                                    slowmodeType: d.S.SendMessage,
                                    cooldownMs: a
                                }),
                                o > 0 &&
                                    l.Z.dispatch({
                                        type: 'SLOWMODE_SET_COOLDOWN',
                                        channelId: n,
                                        slowmodeType: d.S.CreateThread,
                                        cooldownMs: o
                                    });
                        }
                    });
        },
        null == i || i.prevSend > a - 2 * o ? m : 0
    );
    return (
        (i = {
            channelId: n,
            timeout: u,
            prevSend: a
        }),
        A({
            channelId: n,
            userId: r
        })
    );
}
function I(e) {
    if (null == i || i.channelId !== e) return !1;
    null != i.timeout && clearTimeout(i.timeout), (i = null);
}
function T(e) {
    let { channelId: n } = e,
        r = c.default.getId();
    return (
        null != r &&
        null != i &&
        i.channelId === n &&
        null != i.timeout &&
        (clearTimeout(i.timeout),
        (i = null),
        C({
            channelId: n,
            userId: r
        }))
    );
}
function S(e, n) {
    return setTimeout(() => {
        l.Z.dispatch({
            type: 'TYPING_STOP',
            channelId: e,
            userId: n
        });
    }, _);
}
function A(e) {
    let { channelId: n, userId: r } = e,
        i = { ...y(n) };
    clearTimeout(i[r]), (i[r] = S(n, r)), (E[n] = i);
}
function C(e) {
    let { channelId: n, userId: r } = e,
        i = E[n];
    if (null == i || null == i[r]) return !1;
    let a = { ...i };
    clearTimeout(a[r]), delete a[r], (E[n] = a);
}
function N(e) {
    let {
        channelId: n,
        message: { author: r },
        optimistic: i
    } = e;
    return (
        i && I(n),
        null != r &&
            C({
                channelId: n,
                userId: r.id
            })
    );
}
function R() {
    E = {};
}
function O(e) {
    let n = y(e);
    return n === v ? 0 : Object.keys(n).length;
}
class D extends (a = o.ZP.Store) {
    getTypingUsers(e) {
        return y(e);
    }
    isTyping(e, n) {
        return null != y(e)[n];
    }
}
h(D, 'displayName', 'TypingStore'),
    (n.Z = new D(l.Z, {
        TYPING_START: A,
        TYPING_STOP: C,
        TYPING_START_LOCAL: b,
        TYPING_STOP_LOCAL: T,
        CONNECTION_OPEN: R,
        OVERLAY_INITIALIZE: R,
        MESSAGE_CREATE: N
    }));
