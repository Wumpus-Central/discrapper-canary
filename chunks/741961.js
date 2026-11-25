let i;
var r = n(855986),
    a = n(620632),
    s = n(73153);
n(695870);
var l = n(927813),
    o = n(46653),
    d = n(734057),
    c = n(101392),
    u = n(652215);
let _ = 10 * l.A.Millis.SECOND,
    E = 1.5 * l.A.Millis.SECOND,
    A = {},
    f = {},
    h = {},
    I = Object.freeze({}),
    p = Object.freeze({});
function m(e) {
    return d.A.getChannel(e)?.getGuildId() ?? void 0;
}
function g(e) {
    var t, n, i, r;
    let a,
        l,
        { channelId: o, userId: d, guildId: c, customTypingIndicatorConfig: u } = e,
        E = { ...(A[o] ?? I) };
    clearTimeout(E[d]);
    let m = setTimeout(() => {
        s.h.dispatch({ type: "TYPING_STOP", channelId: o, userId: d, guildId: c });
    }, _);
    ((E[d] = m),
        (A[o] = E),
        null != c &&
            ((t = c),
            (n = o),
            (i = d),
            (r = m),
            clearTimeout((l = { ...((a = { ...(f[t] ?? p) })[n] ?? I) })[i]),
            (l[i] = r),
            (a[n] = l),
            (f[t] = a)),
        void 0 !== u && h[d] !== u && (h = { ...h, [d]: u }));
}
function T(e) {
    let { channelId: t, userId: n, guildId: i } = e,
        r = A[t];
    if (null == r || null == r[n]) return !1;
    let a = { ...r };
    if (
        (clearTimeout(a[n]),
        delete a[n],
        (A[t] = a),
        null != i &&
            (function (e, t, n) {
                let i = f[e];
                if (null == i) return;
                let r = i[t];
                if (null == r || null == r[n]) return;
                let a = { ...r };
                delete a[n];
                let s = { ...i };
                (0 === Object.keys(a).length ? delete s[t] : (s[t] = a),
                    0 === Object.keys(s).length ? delete f[e] : (f[e] = s));
            })(i, t, n),
        n in h && !Object.values(A).some((e) => n in e))
    ) {
        let e = { ...h };
        (delete e[n], (h = e));
    }
}
function S() {
    ((A = {}), (f = {}), (h = {}));
}
class N extends r.Ay.Store {
    initialize() {
        this.waitFor(o.default, d.A);
    }
    static displayName = "TypingStore";
    getTypingUsers(e) {
        return A[e] ?? I;
    }
    getTypingUsersByGuild(e) {
        return f[e] ?? p;
    }
    isTyping(e, t) {
        return null != (A[e] ?? I)[t];
    }
    getCustomTypingIndicatorConfig(e) {
        return h[e] ?? null;
    }
}
let C = new N(s.h, {
    TYPING_START: g,
    TYPING_STOP: T,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            n = o.default.getId();
        if (null == n || "131" === t) return !1;
        null != i && i.channelId !== t && (null != i.timeout && clearTimeout(i.timeout), (i = null));
        let r = Date.now(),
            l = 0.8 * _;
        if (null != i && (null != i.timeout || i.prevSend + l > r)) return !1;
        let d = setTimeout(
            () => {
                let e;
                null == i ||
                    i.channelId !== t ||
                    n !== o.default.getId() ||
                    null == i.timeout ||
                    ((i.timeout = null),
                    ((e = A[t] ?? I) === I ? 0 : Object.keys(e).length) > 5 ||
                        a.Bo.post({ url: u.Rsh.TYPING(t), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                            if (200 === e.status) {
                                let n = e.body.message_send_cooldown_ms ?? 0,
                                    i = e.body.thread_create_cooldown_ms ?? 0;
                                (n > 0 &&
                                    s.h.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: c.R.SendMessage,
                                        cooldownMs: n,
                                    }),
                                    i > 0 &&
                                        s.h.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: c.R.CreateThread,
                                            cooldownMs: i,
                                        }));
                            }
                        }));
            },
            null == i || i.prevSend > r - 2 * l ? E : 0,
        );
        return ((i = { channelId: t, timeout: d, prevSend: r }), g({ channelId: t, userId: n, guildId: m(t) }));
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            n = o.default.getId();
        return (
            null != n &&
            null != i &&
            i.channelId === t &&
            null != i.timeout &&
            (clearTimeout(i.timeout), (i = null), T({ channelId: t, userId: n, guildId: m(t) }))
        );
    },
    CONNECTION_OPEN: S,
    OVERLAY_INITIALIZE: S,
    MESSAGE_CREATE: function (e) {
        var t;
        let {
            channelId: n,
            guildId: r,
            message: { author: a },
            optimistic: s,
        } = e;
        return (
            s &&
                ((t = n), null == i || i.channelId !== t || (null != i.timeout && clearTimeout(i.timeout), (i = null))),
            null != a && T({ channelId: n, userId: a.id, guildId: r ?? m(n) })
        );
    },
});
n.d(t, {}, { A: C });
