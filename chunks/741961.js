let n;
var u = l(855986),
    i = l(620632),
    r = l(73153);
l(695870);
var o = l(927813),
    d = l(46653),
    s = l(734057),
    a = l(101392),
    c = l(652215);
let T = 10 * o.A.Millis.SECOND,
    h = 1.5 * o.A.Millis.SECOND,
    m = {},
    I = {},
    O = {},
    p = Object.freeze({}),
    g = Object.freeze({});
function f(e) {
    return s.A.getChannel(e)?.getGuildId() ?? void 0;
}
function _(e) {
    var t, l, n, u;
    let i,
        o,
        { channelId: d, userId: s, guildId: a, customTypingIndicatorConfig: c } = e,
        h = { ...(m[d] ?? p) };
    clearTimeout(h[s]);
    let f = setTimeout(() => {
        r.h.dispatch({ type: "TYPING_STOP", channelId: d, userId: s, guildId: a });
    }, T);
    ((h[s] = f),
        (m[d] = h),
        null != a &&
            ((t = a),
            (l = d),
            (n = s),
            (u = f),
            clearTimeout((o = { ...((i = { ...(I[t] ?? g) })[l] ?? p) })[n]),
            (o[n] = u),
            (i[l] = o),
            (I[t] = i)),
        void 0 !== c && O[s] !== c && (O = { ...O, [s]: c }));
}
function S(e) {
    let { channelId: t, userId: l, guildId: n } = e,
        u = m[t];
    if (null == u || null == u[l]) return !1;
    let i = { ...u };
    if (
        (clearTimeout(i[l]),
        delete i[l],
        (m[t] = i),
        null != n &&
            (function (e, t, l) {
                let n = I[e];
                if (null == n) return;
                let u = n[t];
                if (null == u || null == u[l]) return;
                let i = { ...u };
                delete i[l];
                let r = { ...n };
                (0 === Object.keys(i).length ? delete r[t] : (r[t] = i),
                    0 === Object.keys(r).length ? delete I[e] : (I[e] = r));
            })(n, t, l),
        l in O && !Object.values(m).some((e) => l in e))
    ) {
        let e = { ...O };
        (delete e[l], (O = e));
    }
}
function y() {
    ((m = {}), (I = {}), (O = {}));
}
class E extends u.Ay.Store {
    initialize() {
        this.waitFor(d.default, s.A);
    }
    static displayName = "TypingStore";
    getTypingUsers(e) {
        return m[e] ?? p;
    }
    getTypingUsersByGuild(e) {
        return I[e] ?? g;
    }
    isTyping(e, t) {
        return null != (m[e] ?? p)[t];
    }
    getCustomTypingIndicatorConfig(e) {
        return O[e] ?? null;
    }
}
let N = new E(r.h, {
    TYPING_START: _,
    TYPING_STOP: S,
    TYPING_START_LOCAL: function (e) {
        let { channelId: t } = e,
            l = d.default.getId();
        if (null == l || "131" === t) return !1;
        null != n && n.channelId !== t && (null != n.timeout && clearTimeout(n.timeout), (n = null));
        let u = Date.now(),
            o = 0.8 * T;
        if (null != n && (null != n.timeout || n.prevSend + o > u)) return !1;
        let s = setTimeout(
            () => {
                let e;
                null == n ||
                    n.channelId !== t ||
                    l !== d.default.getId() ||
                    null == n.timeout ||
                    ((n.timeout = null),
                    ((e = m[t] ?? p) === p ? 0 : Object.keys(e).length) > 5 ||
                        i.Bo.post({ url: c.Rsh.TYPING(t), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                            if (200 === e.status) {
                                let l = e.body.message_send_cooldown_ms ?? 0,
                                    n = e.body.thread_create_cooldown_ms ?? 0;
                                (l > 0 &&
                                    r.h.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: a.R.SendMessage,
                                        cooldownMs: l,
                                    }),
                                    n > 0 &&
                                        r.h.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: a.R.CreateThread,
                                            cooldownMs: n,
                                        }));
                            }
                        }));
            },
            null == n || n.prevSend > u - 2 * o ? h : 0,
        );
        return ((n = { channelId: t, timeout: s, prevSend: u }), _({ channelId: t, userId: l, guildId: f(t) }));
    },
    TYPING_STOP_LOCAL: function (e) {
        let { channelId: t } = e,
            l = d.default.getId();
        return (
            null != l &&
            null != n &&
            n.channelId === t &&
            null != n.timeout &&
            (clearTimeout(n.timeout), (n = null), S({ channelId: t, userId: l, guildId: f(t) }))
        );
    },
    CONNECTION_OPEN: y,
    OVERLAY_INITIALIZE: y,
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
            null != i && S({ channelId: l, userId: i.id, guildId: u ?? f(l) })
        );
    },
});
l.d(t, {}, { A: N });
