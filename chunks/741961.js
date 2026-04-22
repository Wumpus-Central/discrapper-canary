"use strict";
let i;
n.d(t, { A: () => C });
var l = n(311907),
    s = n(562465),
    r = n(73153),
    a = n(695870),
    o = n(927813),
    c = n(961350),
    u = n(101392),
    d = n(652215);
let h = 10 * o.A.Millis.SECOND,
    m = 1.5 * o.A.Millis.SECOND,
    p = {},
    f = Object.freeze({});
function g(e) {
    let { channelId: t, userId: n } = e,
        i = { ...(p[t] ?? f) };
    clearTimeout(i[n]),
        (i[n] = setTimeout(() => {
            r.h.dispatch({ type: "TYPING_STOP", channelId: t, userId: n });
        }, h)),
        (p[t] = i);
}
function _(e) {
    let { channelId: t, userId: n } = e,
        i = p[t];
    if (null == i || null == i[n]) return !1;
    let l = { ...i };
    clearTimeout(l[n]), delete l[n], (p[t] = l);
}
function x() {
    p = {};
}
class A extends l.Ay.Store {
    initialize() {
        this.waitFor(c.default);
    }
    static displayName = "TypingStore";
    getTypingUsers(e) {
        return p[e] ?? f;
    }
    isTyping(e, t) {
        return null != (p[e] ?? f)[t];
    }
}
let C = new A(r.h, {
    TYPING_START: g,
    TYPING_STOP: _,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = c.default.getId();
        if (null == n || t === a.E) return !1;
        null != i && i.channelId !== t && (null != i.timeout && clearTimeout(i.timeout), (i = null));
        let l = Date.now(),
            o = 0.8 * h;
        if (null != i && (null != i.timeout || i.prevSend + o > l)) return !1;
        let _ = setTimeout(
            () => {
                let e;
                null == i ||
                    i.channelId !== t ||
                    n !== c.default.getId() ||
                    null == i.timeout ||
                    ((i.timeout = null),
                    ((e = p[t] ?? f) === f ? 0 : Object.keys(e).length) > 5 ||
                        s.Bo.post({ url: d.Rsh.TYPING(t), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                            if (200 === e.status) {
                                let n = e.body.message_send_cooldown_ms ?? 0,
                                    i = e.body.thread_create_cooldown_ms ?? 0;
                                n > 0 &&
                                    r.h.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: u.R.SendMessage,
                                        cooldownMs: n,
                                    }),
                                    i > 0 &&
                                        r.h.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: u.R.CreateThread,
                                            cooldownMs: i,
                                        });
                            }
                        }));
            },
            null == i || i.prevSend > l - 2 * o ? m : 0,
        );
        return (i = { channelId: t, timeout: _, prevSend: l }), g({ channelId: t, userId: n });
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            n = c.default.getId();
        return (
            null != n &&
            null != i &&
            i.channelId === t &&
            null != i.timeout &&
            (clearTimeout(i.timeout), (i = null), _({ channelId: t, userId: n }))
        );
    },
    CONNECTION_OPEN: x,
    OVERLAY_INITIALIZE: x,
    MESSAGE_CREATE: function (e) {
        var t;
        let {
            channelId: n,
            message: { author: l },
            optimistic: s,
        } = e;
        return (
            s &&
                ((t = n), null == i || i.channelId !== t || (null != i.timeout && clearTimeout(i.timeout), (i = null))),
            null != l && _({ channelId: n, userId: l.id })
        );
    },
});
