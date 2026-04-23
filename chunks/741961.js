"use strict";
let i;
n.d(t, { A: () => I });
var r = n(17928),
    s = n(636537),
    a = n(228366),
    o = n(695870),
    l = n(927813),
    d = n(495544),
    _ = n(101392),
    u = n(652215);
let c = 10 * l.A.Millis.SECOND,
    E = 1.5 * l.A.Millis.SECOND,
    h = {},
    m = Object.freeze({});
function f(e) {
    let { channelId: t, userId: n } = e,
        i = { ...(h[t] ?? m) };
    clearTimeout(i[n]),
        (i[n] = setTimeout(() => {
            a.h.dispatch({ type: "TYPING_STOP", channelId: t, userId: n });
        }, c)),
        (h[t] = i);
}
function g(e) {
    let { channelId: t, userId: n } = e,
        i = h[t];
    if (null == i || null == i[n]) return !1;
    let r = { ...i };
    clearTimeout(r[n]), delete r[n], (h[t] = r);
}
function p() {
    h = {};
}
class A extends r.Ay.Store {
    initialize() {
        this.waitFor(d.default);
    }
    static displayName = "TypingStore";
    getTypingUsers(e) {
        return h[e] ?? m;
    }
    isTyping(e, t) {
        return null != (h[e] ?? m)[t];
    }
}
let I = new A(a.h, {
    TYPING_START: f,
    TYPING_STOP: g,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = d.default.getId();
        if (null == n || t === o.E) return !1;
        null != i && i.channelId !== t && (null != i.timeout && clearTimeout(i.timeout), (i = null));
        let r = Date.now(),
            l = 0.8 * c;
        if (null != i && (null != i.timeout || i.prevSend + l > r)) return !1;
        let g = setTimeout(
            () => {
                let e;
                null == i ||
                    i.channelId !== t ||
                    n !== d.default.getId() ||
                    null == i.timeout ||
                    ((i.timeout = null),
                    ((e = h[t] ?? m) === m ? 0 : Object.keys(e).length) > 5 ||
                        s.Bo.post({ url: u.Rsh.TYPING(t), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                            if (200 === e.status) {
                                let n = e.body.message_send_cooldown_ms ?? 0,
                                    i = e.body.thread_create_cooldown_ms ?? 0;
                                n > 0 &&
                                    a.h.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: _.R.SendMessage,
                                        cooldownMs: n,
                                    }),
                                    i > 0 &&
                                        a.h.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: _.R.CreateThread,
                                            cooldownMs: i,
                                        });
                            }
                        }));
            },
            null == i || i.prevSend > r - 2 * l ? E : 0,
        );
        return (i = { channelId: t, timeout: g, prevSend: r }), f({ channelId: t, userId: n });
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            n = d.default.getId();
        return (
            null != n &&
            null != i &&
            i.channelId === t &&
            null != i.timeout &&
            (clearTimeout(i.timeout), (i = null), g({ channelId: t, userId: n }))
        );
    },
    CONNECTION_OPEN: p,
    OVERLAY_INITIALIZE: p,
    MESSAGE_CREATE: function (e) {
        var t;
        let {
            channelId: n,
            message: { author: r },
            optimistic: s,
        } = e;
        return (
            s &&
                ((t = n), null == i || i.channelId !== t || (null != i.timeout && clearTimeout(i.timeout), (i = null))),
            null != r && g({ channelId: n, userId: r.id })
        );
    },
});
