let r;
n.d(t, { Z: () => w });
var i,
    o = n(442837),
    a = n(544891),
    s = n(570140),
    l = n(333023),
    c = n(384278),
    u = n(70956),
    d = n(314897),
    f = n(300429),
    _ = n(981631);
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = 10 * u.Z.Millis.SECOND,
    g = 5,
    E = {},
    b = Object.freeze({});
function y(e) {
    var t;
    return null != (t = E[e]) ? t : b;
}
function O(e) {
    let { channelId: t } = e,
        n = d.default.getId();
    if (null == n || t === l.V) return !1;
    null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), (r = null));
    let i = Date.now(),
        o = 0.8 * m;
    if (null != r && (null != r.timeout || r.prevSend + o > i)) return !1;
    let { delayMs: u } = (0, c.M1)("typing_store"),
        p = setTimeout(
            () => {
                null != r &&
                    r.channelId === t &&
                    n === d.default.getId() &&
                    null != r.timeout &&
                    ((r.timeout = null),
                    R(t) > g ||
                        a.tn
                            .post({
                                url: _.ANM.TYPING(t),
                                oldFormErrors: !0,
                                rejectWithError: !0,
                            })
                            .then((e) => {
                                if (200 === e.status) {
                                    var n, r;
                                    let i = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
                                        o = null != (r = e.body.thread_create_cooldown_ms) ? r : 0;
                                    i > 0 &&
                                        s.Z.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: f.S.SendMessage,
                                            cooldownMs: i,
                                        }),
                                        o > 0 &&
                                            s.Z.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: t,
                                                slowmodeType: f.S.CreateThread,
                                                cooldownMs: o,
                                            });
                                }
                            }));
            },
            null == r || r.prevSend > i - 2 * o ? u : 0,
        );
    return (
        (r = {
            channelId: t,
            timeout: p,
            prevSend: i,
        }),
        S({
            channelId: t,
            userId: n,
        })
    );
}
function v(e) {
    if (null == r || r.channelId !== e) return !1;
    null != r.timeout && clearTimeout(r.timeout), (r = null);
}
function I(e) {
    let { channelId: t } = e,
        n = d.default.getId();
    return (
        null != n &&
        null != r &&
        r.channelId === t &&
        null != r.timeout &&
        (clearTimeout(r.timeout),
        (r = null),
        A({
            channelId: t,
            userId: n,
        }))
    );
}
function T(e, t) {
    return setTimeout(() => {
        s.Z.dispatch({
            type: "TYPING_STOP",
            channelId: e,
            userId: t,
        });
    }, m);
}
function S(e) {
    let { channelId: t, userId: n } = e,
        r = h({}, y(t));
    clearTimeout(r[n]), (r[n] = T(t, n)), (E[t] = r);
}
function A(e) {
    let { channelId: t, userId: n } = e,
        r = E[t];
    if (null == r || null == r[n]) return !1;
    let i = h({}, r);
    clearTimeout(i[n]), delete i[n], (E[t] = i);
}
function N(e) {
    let {
        channelId: t,
        message: { author: n },
        optimistic: r,
    } = e;
    return (
        r && v(t),
        null != n &&
            A({
                channelId: t,
                userId: n.id,
            })
    );
}
function C() {
    E = {};
}
function R(e) {
    let t = y(e);
    return t === b ? 0 : Object.keys(t).length;
}
class P extends (i = o.ZP.Store) {
    getTypingUsers(e) {
        return y(e);
    }
    isTyping(e, t) {
        return null != y(e)[t];
    }
}
p(P, "displayName", "TypingStore");
let w = new P(s.Z, {
    TYPING_START: S,
    TYPING_STOP: A,
    TYPING_START_LOCAL: O,
    TYPING_STOP_LOCAL: I,
    CONNECTION_OPEN: C,
    OVERLAY_INITIALIZE: C,
    MESSAGE_CREATE: N,
});
