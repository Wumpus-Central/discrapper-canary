let l;
n.d(t, { A: () => N });
var i = n(17928),
    s = n(636537),
    r = n(228366),
    a = n(695870),
    o = n(927813),
    u = n(280450),
    c = n(734057),
    d = n(101392),
    m = n(652215);
let h = 10 * o.A.Millis.SECOND,
    p = 1.5 * o.A.Millis.SECOND,
    f = {},
    g = {},
    x = {},
    A = Object.freeze({}),
    C = Object.freeze({});
function E(e) {
    return c.A.getChannel(e)?.getGuildId() ?? void 0;
}
function I(e) {
    var t, n, l, i;
    let s,
        a,
        { channelId: o, userId: u, guildId: c, customTypingIndicatorConfig: d } = e,
        m = { ...(f[o] ?? A) };
    clearTimeout(m[u]);
    let p = setTimeout(() => {
        r.h.dispatch({ type: "TYPING_STOP", channelId: o, userId: u, guildId: c });
    }, h);
    ((m[u] = p),
        (f[o] = m),
        null != c &&
            ((t = c),
            (n = o),
            (l = u),
            (i = p),
            clearTimeout((a = { ...((s = { ...(g[t] ?? C) })[n] ?? A) })[l]),
            (a[l] = i),
            (s[n] = a),
            (g[t] = s)),
        void 0 !== d && x[u] !== d && (x = { ...x, [u]: d }));
}
function y(e) {
    let { channelId: t, userId: n, guildId: l } = e,
        i = f[t];
    if (null == i || null == i[n]) return !1;
    let s = { ...i };
    if (
        (clearTimeout(s[n]),
        delete s[n],
        (f[t] = s),
        null != l &&
            (function (e, t, n) {
                let l = g[e];
                if (null == l) return;
                let i = l[t];
                if (null == i || null == i[n]) return;
                let s = { ...i };
                delete s[n];
                let r = { ...l };
                (0 === Object.keys(s).length ? delete r[t] : (r[t] = s),
                    0 === Object.keys(r).length ? delete g[e] : (g[e] = r));
            })(l, t, n),
        n in x && !Object.values(f).some((e) => n in e))
    ) {
        let e = { ...x };
        (delete e[n], (x = e));
    }
}
function S() {
    ((f = {}), (g = {}), (x = {}));
}
class v extends i.Ay.Store {
    initialize() {
        this.waitFor(u.default, c.A);
    }
    static displayName = "TypingStore";
    getTypingUsers(e) {
        return f[e] ?? A;
    }
    getTypingUsersByGuild(e) {
        return g[e] ?? C;
    }
    isTyping(e, t) {
        return null != (f[e] ?? A)[t];
    }
    getCustomTypingIndicatorConfig(e) {
        return x[e] ?? null;
    }
}
let N = new v(r.h, {
    TYPING_START: I,
    TYPING_STOP: y,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = u.default.getId();
        if (null == n || t === a.E) return !1;
        null != l && l.channelId !== t && (null != l.timeout && clearTimeout(l.timeout), (l = null));
        let i = Date.now(),
            o = 0.8 * h;
        if (null != l && (null != l.timeout || l.prevSend + o > i)) return !1;
        let c = setTimeout(
            () => {
                let e;
                null == l ||
                    l.channelId !== t ||
                    n !== u.default.getId() ||
                    null == l.timeout ||
                    ((l.timeout = null),
                    ((e = f[t] ?? A) === A ? 0 : Object.keys(e).length) > 5 ||
                        s.Bo.post({ url: m.Rsh.TYPING(t), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                            if (200 === e.status) {
                                let n = e.body.message_send_cooldown_ms ?? 0,
                                    l = e.body.thread_create_cooldown_ms ?? 0;
                                (n > 0 &&
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
                                        }));
                            }
                        }));
            },
            null == l || l.prevSend > i - 2 * o ? p : 0,
        );
        return ((l = { channelId: t, timeout: c, prevSend: i }), I({ channelId: t, userId: n, guildId: E(t) }));
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            n = u.default.getId();
        return (
            null != n &&
            null != l &&
            l.channelId === t &&
            null != l.timeout &&
            (clearTimeout(l.timeout), (l = null), y({ channelId: t, userId: n, guildId: E(t) }))
        );
    },
    CONNECTION_OPEN: S,
    OVERLAY_INITIALIZE: S,
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
            null != s && y({ channelId: n, userId: s.id, guildId: i ?? E(n) })
        );
    },
});
