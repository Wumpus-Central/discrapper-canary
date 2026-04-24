"use strict";
let l;
n.d(t, { A: () => A });
var i = n(17928),
    s = n(636537),
    a = n(228366),
    r = n(695870),
    o = n(927813),
    c = n(495544),
    u = n(101392),
    d = n(652215);
let h = 10 * o.A.Millis.SECOND,
    m = 1.5 * o.A.Millis.SECOND,
    p = {},
    f = Object.freeze({});
function g(e) {
    let { channelId: t, userId: n } = e,
        l = { ...(p[t] ?? f) };
    clearTimeout(l[n]),
        (l[n] = setTimeout(() => {
            a.h.dispatch({ type: "TYPING_STOP", channelId: t, userId: n });
        }, h)),
        (p[t] = l);
}
function _(e) {
    let { channelId: t, userId: n } = e,
        l = p[t];
    if (null == l || null == l[n]) return !1;
    let i = { ...l };
    clearTimeout(i[n]), delete i[n], (p[t] = i);
}
function x() {
    p = {};
}
class C extends i.Ay.Store {
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
let A = new C(a.h, {
    TYPING_START: g,
    TYPING_STOP: _,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = c.default.getId();
        if (null == n || t === r.E) return !1;
        null != l && l.channelId !== t && (null != l.timeout && clearTimeout(l.timeout), (l = null));
        let i = Date.now(),
            o = 0.8 * h;
        if (null != l && (null != l.timeout || l.prevSend + o > i)) return !1;
        let _ = setTimeout(
            () => {
                let e;
                null == l ||
                    l.channelId !== t ||
                    n !== c.default.getId() ||
                    null == l.timeout ||
                    ((l.timeout = null),
                    ((e = p[t] ?? f) === f ? 0 : Object.keys(e).length) > 5 ||
                        s.Bo.post({ url: d.Rsh.TYPING(t), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                            if (200 === e.status) {
                                let n = e.body.message_send_cooldown_ms ?? 0,
                                    l = e.body.thread_create_cooldown_ms ?? 0;
                                n > 0 &&
                                    a.h.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: u.R.SendMessage,
                                        cooldownMs: n,
                                    }),
                                    l > 0 &&
                                        a.h.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: u.R.CreateThread,
                                            cooldownMs: l,
                                        });
                            }
                        }));
            },
            null == l || l.prevSend > i - 2 * o ? m : 0,
        );
        return (l = { channelId: t, timeout: _, prevSend: i }), g({ channelId: t, userId: n });
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            n = c.default.getId();
        return (
            null != n &&
            null != l &&
            l.channelId === t &&
            null != l.timeout &&
            (clearTimeout(l.timeout), (l = null), _({ channelId: t, userId: n }))
        );
    },
    CONNECTION_OPEN: x,
    OVERLAY_INITIALIZE: x,
    MESSAGE_CREATE: function (e) {
        var t;
        let {
            channelId: n,
            message: { author: i },
            optimistic: s,
        } = e;
        return (
            s &&
                ((t = n), null == l || l.channelId !== t || (null != l.timeout && clearTimeout(l.timeout), (l = null))),
            null != i && _({ channelId: n, userId: i.id })
        );
    },
});
