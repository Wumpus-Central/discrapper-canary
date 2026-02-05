"use strict";
let r;
n.d(t, { A: () => R });
var i = n(311907),
    a = n(562465),
    s = n(73153),
    o = n(695870),
    l = n(927813),
    u = n(961350),
    c = n(101392),
    d = n(652215);
let _ = 10 * l.A.Millis.SECOND,
    f = 1.5 * l.A.Millis.SECOND,
    p = 5,
    h = {},
    m = Object.freeze({});
function g(e) {
    return h[e] ?? m;
}
function E(e) {
    let { channelId: t } = e,
        n = u.default.getId();
    if (null == n || t === o.E) return !1;
    null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), (r = null));
    let i = Date.now(),
        l = 0.8 * _;
    if (null != r && (null != r.timeout || r.prevSend + l > i)) return !1;
    let h = setTimeout(
        () => {
            null == r ||
                r.channelId !== t ||
                n !== u.default.getId() ||
                null == r.timeout ||
                ((r.timeout = null),
                b(t) > p ||
                    a.Bo.post({ url: d.Rsh.TYPING(t), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                        if (200 === e.status) {
                            let n = e.body.message_send_cooldown_ms ?? 0,
                                r = e.body.thread_create_cooldown_ms ?? 0;
                            n > 0 &&
                                s.h.dispatch({
                                    type: "SLOWMODE_SET_COOLDOWN",
                                    channelId: t,
                                    slowmodeType: c.R.SendMessage,
                                    cooldownMs: n,
                                }),
                                r > 0 &&
                                    s.h.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: c.R.CreateThread,
                                        cooldownMs: r,
                                    });
                        }
                    }));
        },
        null == r || r.prevSend > i - 2 * l ? f : 0,
    );
    return (r = { channelId: t, timeout: h, prevSend: i }), y({ channelId: t, userId: n });
}
function A(e) {
    if (null == r || r.channelId !== e) return !1;
    null != r.timeout && clearTimeout(r.timeout), (r = null);
}
function I(e) {
    let { channelId: t } = e,
        n = u.default.getId();
    return (
        null != n &&
        null != r &&
        r.channelId === t &&
        null != r.timeout &&
        (clearTimeout(r.timeout), (r = null), S({ channelId: t, userId: n }))
    );
}
function T(e, t) {
    return setTimeout(() => {
        s.h.dispatch({ type: "TYPING_STOP", channelId: e, userId: t });
    }, _);
}
function y(e) {
    let { channelId: t, userId: n } = e,
        r = { ...g(t) };
    clearTimeout(r[n]), (r[n] = T(t, n)), (h[t] = r);
}
function S(e) {
    let { channelId: t, userId: n } = e,
        r = h[t];
    if (null == r || null == r[n]) return !1;
    let i = { ...r };
    clearTimeout(i[n]), delete i[n], (h[t] = i);
}
function v(e) {
    let {
        channelId: t,
        message: { author: n },
        optimistic: r,
    } = e;
    return r && A(t), null != n && S({ channelId: t, userId: n.id });
}
function C() {
    h = {};
}
function b(e) {
    let t = g(e);
    return t === m ? 0 : Object.keys(t).length;
}
class N extends i.Ay.Store {
    initialize() {
        this.waitFor(u.default);
    }
    static displayName = "TypingStore";
    getTypingUsers(e) {
        return g(e);
    }
    isTyping(e, t) {
        return null != g(e)[t];
    }
}
let R = new N(s.h, {
    TYPING_START: y,
    TYPING_STOP: S,
    TYPING_START_LOCAL: E,
    TYPING_STOP_LOCAL: I,
    CONNECTION_OPEN: C,
    OVERLAY_INITIALIZE: C,
    MESSAGE_CREATE: v,
});
