"use strict";
let l;
n.d(t, { A: () => S });
var i = n(17928),
    s = n(636537),
    r = n(228366),
    a = n(695870),
    o = n(927813),
    u = n(280450),
    c = n(734057),
    d = n(101392),
    h = n(652215);
let m = 10 * o.A.Millis.SECOND,
    f = 1.5 * o.A.Millis.SECOND,
    p = {},
    g = {},
    x = Object.freeze({}),
    A = Object.freeze({});
function C(e) {
    return c.A.getChannel(e)?.getGuildId() ?? void 0;
}
function E(e) {
    var t, n, l, i;
    let s,
        a,
        { channelId: o, userId: u, guildId: c } = e,
        d = { ...(p[o] ?? x) };
    clearTimeout(d[u]);
    let h = setTimeout(() => {
        r.h.dispatch({ type: "TYPING_STOP", channelId: o, userId: u, guildId: c });
    }, m);
    (d[u] = h),
        (p[o] = d),
        null != c &&
            ((t = c),
            (n = o),
            (l = u),
            (i = h),
            clearTimeout((a = { ...((s = { ...(g[t] ?? A) })[n] ?? x) })[l]),
            (a[l] = i),
            (s[n] = a),
            (g[t] = s));
}
function I(e) {
    let { channelId: t, userId: n, guildId: l } = e,
        i = p[t];
    if (null == i || null == i[n]) return !1;
    let s = { ...i };
    clearTimeout(s[n]),
        delete s[n],
        (p[t] = s),
        null != l &&
            (function (e, t, n) {
                let l = g[e];
                if (null == l) return;
                let i = l[t];
                if (null == i || null == i[n]) return;
                let s = { ...i };
                delete s[n];
                let r = { ...l };
                0 === Object.keys(s).length ? delete r[t] : (r[t] = s),
                    0 === Object.keys(r).length ? delete g[e] : (g[e] = r);
            })(l, t, n);
}
function y() {
    (p = {}), (g = {});
}
class v extends i.Ay.Store {
    initialize() {
        this.waitFor(u.default, c.A);
    }
    static displayName = "TypingStore";
    getTypingUsers(e) {
        return p[e] ?? x;
    }
    getTypingUsersByGuild(e) {
        return g[e] ?? A;
    }
    isTyping(e, t) {
        return null != (p[e] ?? x)[t];
    }
}
let S = new v(r.h, {
    TYPING_START: E,
    TYPING_STOP: I,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = u.default.getId();
        if (null == n || t === a.E) return !1;
        null != l && l.channelId !== t && (null != l.timeout && clearTimeout(l.timeout), (l = null));
        let i = Date.now(),
            o = 0.8 * m;
        if (null != l && (null != l.timeout || l.prevSend + o > i)) return !1;
        let c = setTimeout(
            () => {
                let e;
                null == l ||
                    l.channelId !== t ||
                    n !== u.default.getId() ||
                    null == l.timeout ||
                    ((l.timeout = null),
                    ((e = p[t] ?? x) === x ? 0 : Object.keys(e).length) > 5 ||
                        s.Bo.post({ url: h.Rsh.TYPING(t), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                            if (200 === e.status) {
                                let n = e.body.message_send_cooldown_ms ?? 0,
                                    l = e.body.thread_create_cooldown_ms ?? 0;
                                n > 0 &&
                                    r.h.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: d.R.SendMessage,
                                        cooldownMs: n,
                                    }),
                                    l > 0 &&
                                        r.h.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: d.R.CreateThread,
                                            cooldownMs: l,
                                        });
                            }
                        }));
            },
            null == l || l.prevSend > i - 2 * o ? f : 0,
        );
        return (l = { channelId: t, timeout: c, prevSend: i }), E({ channelId: t, userId: n, guildId: C(t) });
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            n = u.default.getId();
        return (
            null != n &&
            null != l &&
            l.channelId === t &&
            null != l.timeout &&
            (clearTimeout(l.timeout), (l = null), I({ channelId: t, userId: n, guildId: C(t) }))
        );
    },
    CONNECTION_OPEN: y,
    OVERLAY_INITIALIZE: y,
    MESSAGE_CREATE: function (e) {
        var t;
        let {
            channelId: n,
            guildId: i,
            message: { author: s },
            optimistic: r,
        } = e;
        return (
            r &&
                ((t = n), null == l || l.channelId !== t || (null != l.timeout && clearTimeout(l.timeout), (l = null))),
            null != s && I({ channelId: n, userId: s.id, guildId: i ?? C(n) })
        );
    },
});
