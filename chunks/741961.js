let n;
l.d(t, { A: () => C });
var u = l(17928),
    i = l(636537),
    r = l(73153),
    o = l(695870),
    d = l(927813),
    s = l(280450),
    a = l(734057),
    c = l(101392),
    T = l(652215);
let h = 10 * d.A.Millis.SECOND,
    m = 1.5 * d.A.Millis.SECOND,
    I = {},
    O = {},
    p = {},
    g = Object.freeze({}),
    f = Object.freeze({});
function _(e) {
    return a.A.getChannel(e)?.getGuildId() ?? void 0;
}
function S(e) {
    var t, l, n, u;
    let i,
        o,
        { channelId: d, userId: s, guildId: a, customTypingIndicatorConfig: c } = e,
        T = { ...(I[d] ?? g) };
    clearTimeout(T[s]);
    let m = setTimeout(() => {
        r.h.dispatch({ type: "TYPING_STOP", channelId: d, userId: s, guildId: a });
    }, h);
    ((T[s] = m),
        (I[d] = T),
        null != a &&
            ((t = a),
            (l = d),
            (n = s),
            (u = m),
            clearTimeout((o = { ...((i = { ...(O[t] ?? f) })[l] ?? g) })[n]),
            (o[n] = u),
            (i[l] = o),
            (O[t] = i)),
        void 0 !== c && p[s] !== c && (p = { ...p, [s]: c }));
}
function y(e) {
    let { channelId: t, userId: l, guildId: n } = e,
        u = I[t];
    if (null == u || null == u[l]) return !1;
    let i = { ...u };
    if (
        (clearTimeout(i[l]),
        delete i[l],
        (I[t] = i),
        null != n &&
            (function (e, t, l) {
                let n = O[e];
                if (null == n) return;
                let u = n[t];
                if (null == u || null == u[l]) return;
                let i = { ...u };
                delete i[l];
                let r = { ...n };
                (0 === Object.keys(i).length ? delete r[t] : (r[t] = i),
                    0 === Object.keys(r).length ? delete O[e] : (O[e] = r));
            })(n, t, l),
        l in p && !Object.values(I).some((e) => l in e))
    ) {
        let e = { ...p };
        (delete e[l], (p = e));
    }
}
function E() {
    ((I = {}), (O = {}), (p = {}));
}
class N extends u.Ay.Store {
    initialize() {
        this.waitFor(s.default, a.A);
    }
    static displayName = "TypingStore";
    getTypingUsers(e) {
        return I[e] ?? g;
    }
    getTypingUsersByGuild(e) {
        return O[e] ?? f;
    }
    isTyping(e, t) {
        return null != (I[e] ?? g)[t];
    }
    getCustomTypingIndicatorConfig(e) {
        return p[e] ?? null;
    }
}
let C = new N(r.h, {
    TYPING_START: S,
    TYPING_STOP: y,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            l = s.default.getId();
        if (null == l || t === o.E) return !1;
        null != n && n.channelId !== t && (null != n.timeout && clearTimeout(n.timeout), (n = null));
        let u = Date.now(),
            d = 0.8 * h;
        if (null != n && (null != n.timeout || n.prevSend + d > u)) return !1;
        let a = setTimeout(
            () => {
                let e;
                null == n ||
                    n.channelId !== t ||
                    l !== s.default.getId() ||
                    null == n.timeout ||
                    ((n.timeout = null),
                    ((e = I[t] ?? g) === g ? 0 : Object.keys(e).length) > 5 ||
                        i.Bo.post({ url: T.Rsh.TYPING(t), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                            if (200 === e.status) {
                                let l = e.body.message_send_cooldown_ms ?? 0,
                                    n = e.body.thread_create_cooldown_ms ?? 0;
                                (l > 0 &&
                                    r.h.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: c.R.SendMessage,
                                        cooldownMs: l,
                                    }),
                                    n > 0 &&
                                        r.h.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: c.R.CreateThread,
                                            cooldownMs: n,
                                        }));
                            }
                        }));
            },
            null == n || n.prevSend > u - 2 * d ? m : 0,
        );
        return ((n = { channelId: t, timeout: a, prevSend: u }), S({ channelId: t, userId: l, guildId: _(t) }));
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            l = s.default.getId();
        return (
            null != l &&
            null != n &&
            n.channelId === t &&
            null != n.timeout &&
            (clearTimeout(n.timeout), (n = null), y({ channelId: t, userId: l, guildId: _(t) }))
        );
    },
    CONNECTION_OPEN: E,
    OVERLAY_INITIALIZE: E,
    MESSAGE_CREATE: function (e) {
        var t;
        let {
            channelId: l,
            guildId: u,
            message: { author: i },
            optimistic: r,
        } = e;
        return (
            r &&
                ((t = l), null == n || n.channelId !== t || (null != n.timeout && clearTimeout(n.timeout), (n = null))),
            null != i && y({ channelId: l, userId: i.id, guildId: u ?? _(l) })
        );
    },
});
