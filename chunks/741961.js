"use strict";
let r;
n.d(t, { A: () => I });
var i = n(311907),
    s = n(562465),
    a = n(73153),
    o = n(695870),
    l = n(927813),
    u = n(961350),
    c = n(101392),
    d = n(652215);
let _ = 10 * l.A.Millis.SECOND,
    f = 1.5 * l.A.Millis.SECOND,
    p = {},
    h = Object.freeze({});
function E(e) {
    let { channelId: t, userId: n } = e,
        r = { ...(p[t] ?? h) };
    clearTimeout(r[n]),
        (r[n] = setTimeout(() => {
            a.h.dispatch({ type: "TYPING_STOP", channelId: t, userId: n });
        }, _)),
        (p[t] = r);
}
function m(e) {
    let { channelId: t, userId: n } = e,
        r = p[t];
    if (null == r || null == r[n]) return !1;
    let i = { ...r };
    clearTimeout(i[n]), delete i[n], (p[t] = i);
}
function g() {
    p = {};
}
class A extends i.Ay.Store {
    initialize() {
        this.waitFor(u.default);
    }
    static displayName = "TypingStore";
    getTypingUsers(e) {
        return p[e] ?? h;
    }
    isTyping(e, t) {
        return null != (p[e] ?? h)[t];
    }
}
let I = new A(a.h, {
    TYPING_START: E,
    TYPING_STOP: m,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = u.default.getId();
        if (null == n || t === o.E) return !1;
        null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), (r = null));
        let i = Date.now(),
            l = 0.8 * _;
        if (null != r && (null != r.timeout || r.prevSend + l > i)) return !1;
        let m = setTimeout(
            () => {
                let e;
                null == r ||
                    r.channelId !== t ||
                    n !== u.default.getId() ||
                    null == r.timeout ||
                    ((r.timeout = null),
                    ((e = p[t] ?? h) === h ? 0 : Object.keys(e).length) > 5 ||
                        s.Bo.post({ url: d.Rsh.TYPING(t), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                            if (200 === e.status) {
                                let n = e.body.message_send_cooldown_ms ?? 0,
                                    r = e.body.thread_create_cooldown_ms ?? 0;
                                n > 0 &&
                                    a.h.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: c.R.SendMessage,
                                        cooldownMs: n,
                                    }),
                                    r > 0 &&
                                        a.h.dispatch({
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
        return (r = { channelId: t, timeout: m, prevSend: i }), E({ channelId: t, userId: n });
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            n = u.default.getId();
        return (
            null != n &&
            null != r &&
            r.channelId === t &&
            null != r.timeout &&
            (clearTimeout(r.timeout), (r = null), m({ channelId: t, userId: n }))
        );
    },
    CONNECTION_OPEN: g,
    OVERLAY_INITIALIZE: g,
    MESSAGE_CREATE: function (e) {
        var t;
        let {
            channelId: n,
            message: { author: i },
            optimistic: s,
        } = e;
        return (
            s &&
                ((t = n), null == r || r.channelId !== t || (null != r.timeout && clearTimeout(r.timeout), (r = null))),
            null != i && m({ channelId: n, userId: i.id })
        );
    },
});
