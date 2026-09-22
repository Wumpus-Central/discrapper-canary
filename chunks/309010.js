let i, r, a, s, l, o, d;
n.d(t, { Ay: () => z, cX: () => F });
var c = n(435558),
    u = n.n(c),
    _ = n(136722),
    E = n(17928),
    A = n(506774),
    h = n(228366),
    I = n(717125),
    f = n(891897),
    p = n(976860),
    T = n(95701),
    g = n(403362),
    m = n(280450),
    S = n(734057),
    N = n(808728),
    C = n(71393),
    O = n(25578),
    R = n(576705),
    L = n(967198),
    y = n(652215),
    D = n(746080);
let v = "SelectedChannelStore",
    b = {},
    M = {},
    P = {},
    U = new Set();
function w(e) {
    return String(e);
}
function G() {
    __OVERLAY__ ||
        A.w.set(v, {
            selectedChannelId: a,
            selectedVoiceChannelId: l,
            lastChannelFollowingDestination: s,
            lastConnectedTime: o,
            selectedChannelIds: b,
            mostRecentSelectedTextChannelIds: P,
            knownThreadIds: u()(b)
                .values()
                .concat(u().values(P))
                .filter(g.Vq)
                .uniq()
                .filter((e) => {
                    let t = S.A.getBasicChannel(e);
                    return U.has(e) || (null != t && T.Le.has(t.type));
                })
                .value(),
        });
}
function x(e) {
    if (null != e) {
        let t = N.Ay.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function k(e, t) {
    if (null == e || null == t || P[e] === t) return !1;
    let n = S.A.getChannel(t),
        i = null != n && (0, T.ke)(n.type),
        r = n?.getGuildId() === e;
    return !!i && !!r && ((P[e] = t), !0);
}
function F(e) {
    let t = S.A.getMutableBasicGuildChannelsForGuild(e),
        n = u().find(t, (e) => e.type === y.rbe.GUILD_VOICE);
    return n?.id;
}
function B() {
    let e = !1,
        t = C.A.getGuildsArray();
    return (
        u().each(b, (t, n) => {
            (null != t && (S.A.hasChannel(t) || t === a || U.has(t) || (0, D.mP)(t))) ||
                (delete b[n], delete M[n], (e = !0));
        }),
        u().each(P, (t, n) => {
            (null != t && (S.A.hasChannel(t) || U.has(t))) || (delete P[n], (e = !0));
        }),
        t.forEach((e) => {
            let t = b[e.id];
            null == P[e.id] && k(e.id, t);
        }),
        null != o && Date.now() - o >= 3e5 && ((l = null), (e = !0)),
        e
    );
}
function V(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if ((arguments.length > 4 && void 0 !== arguments[4] && arguments[4], U.delete(e), null == t)) {
        let n = L.A.getGuildId();
        b[w(n)] === e && (t = n);
    }
    let r = null != C.A.getGuild(t) ? t : null,
        a = !1;
    l === e && ((l = null), (a = !0));
    let s = w(r),
        o = i && null != n ? n : x(s),
        d = b[s] === e;
    (d && ((b[s] = o), (a = !0)),
        null != r && P[r] === e && (delete P[r], (a = !0)),
        L.A.getGuildId() === r && d && (0, p.bG)(y.BVt.CHANNEL(t, o)),
        a && G());
}
function H(e) {
    let { type: t, channel: n } = e;
    V(n.id, n.guild_id, n.parent_id, "THREAD_DELETE" === t);
}
function j(e) {
    return e.isScheduledForDeletion() || !(0, f.A)(e);
}
function W(e) {
    if (!j(e)) return !1;
    let t = T.Le.has(e.type),
        n = t ? S.A.getChannel(e.parent_id) : null,
        i = null == n || j(n) ? null : n.id;
    return (V(e.id, e.guild_id, i, t, !1), !0);
}
function Y(e) {
    let t = S.A.getChannel(b[w(e)]);
    return null != t && W(t);
}
function K(e) {
    let { guildId: t } = e;
    return Y(t);
}
class $ extends E.Ay.Store {
    static displayName = "SelectedChannelStore";
    initialize() {
        if (!__OVERLAY__) {
            let e = A.w.get(v) ?? {
                selectedChannelId: a,
                selectedVoiceChannelId: l,
                lastChannelFollowingDestination: s,
                lastConnectedTime: o,
                selectedChannelIds: b,
                mostRecentSelectedTextChannelIds: P,
            };
            (null != e.knownThreadIds && (U = new Set(e.knownThreadIds)),
                (l = e.selectedVoiceChannelId),
                (s = e.lastChannelFollowingDestination),
                (o = e.lastConnectedTime),
                (P = e.mostRecentSelectedTextChannelIds ?? {}),
                null != e.selectedChannelIds && (b = { ...e.selectedChannelIds, null: null }));
        }
        (this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(m.default, S.A, I.A, N.Ay, C.A, O.Ay, R.A, L.A));
    }
    getChannelId(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = w(e === y.ME ? null : (e ?? L.A.getGuildId() ?? null));
        return t ? (b[n] ?? x(n)) : b[n];
    }
    getVoiceChannelId() {
        return O.Ay.isSupported() ? l : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        return null == e ? null : (P[e] ?? null);
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? b[e] : a;
    }
    getLastSelectedChannelId(e) {
        return null != e ? M[e] : r;
    }
    getLastSelectedChannels(e) {
        return M[e];
    }
    getLastChannelFollowingDestination() {
        return s;
    }
}
let z = new $(h.h, {
    CONNECTION_OPEN: function (e) {
        if (((i = e.sessionId), null != l)) {
            let e = S.A.getChannel(l);
            (null != e && (e.isPrivate() || R.A.can(_.kg(y.xBc.VIEW_CHANNEL, y.xBc.CONNECT), e))) || (l = null);
        }
        B() && G();
    },
    OVERLAY_INITIALIZE: function (e) {
        ((i = e.sessionId),
            (l = e.selectedVoiceChannelId),
            (b = {}),
            (M = {}),
            (a = e.selectedChannelId),
            (b[e.selectedGuildId] = e.selectedChannelId),
            k(e.selectedGuildId, a),
            B());
    },
    CONNECTION_CLOSED: function () {
        i = null;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (void 0 === t) return !1;
        (null == n && (n = x(t)),
            null != a && n !== a && (r = a),
            (a = n),
            k(t, n),
            b[w(t)] !== n && ((M[w(t)] = b[w(t)]), (b[w(t)] = a)),
            G());
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        switch (t.type) {
            case y.rbe.GUILD_ANNOUNCEMENT:
            case y.rbe.GUILD_TEXT:
                let n = t.guild_id;
                if ((null != n && null == P[n] && (P[n] = t.id), null != n && null == b[n])) return ((b[n] = x(n)), !0);
        }
        return !1;
    },
    CHANNEL_DELETE: H,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = new Set(),
            i = !1;
        for (let e of t) ((i = W(e) || i), n.add(e.guild_id));
        for (let e of n) i = Y(e) || i;
        return i;
    },
    THREAD_DELETE: H,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        if (null == b[t.id]) {
            let e = x(t.id);
            ((b[t.id] = e), k(t.id, e), G());
        }
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if ((l === b[t] && (l = null), n)) return !1;
        (delete P[t], delete b[t], G());
    },
    GUILD_ROLE_UPDATE: K,
    GUILD_ROLE_DELETE: K,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return n.id === m.default.getId() && Y(t);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) {
            let e = S.A.getChannel(l),
                t = e?.guild_id;
            null != t && t !== L.A.getGuildId() && b[t] === l && (b[t] = x(t));
        }
        ((l = t), G());
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (t.sessionId === i) {
                clearInterval(d);
                let e = S.A.getChannel(l)?.getGuildId();
                ((t.guildId !== e && null == t.channelId) || (l = t.channelId),
                    (o = Date.now()),
                    null != l &&
                        (d = setInterval(() => {
                            ((o = Date.now()), G());
                        }, 6e4)),
                    G());
            } else {
                if (t.userId !== m.default.getId()) return e;
                (clearInterval(d), (d = void 0), (o = 0));
                let n = S.A.getChannel(l)?.getGuildId(),
                    i = S.A.getChannel(t.channelId)?.getGuildId();
                (((null != n && i === n) || l === t.channelId) && (l = null), G());
            }
            return !0;
        }, !1);
    },
    CHANNEL_FOLLOWER_CREATED: function (e) {
        let { channelId: t, guildId: n } = e;
        (null == s || t !== s.channelId) && ((s = { channelId: t, guildId: n }), G());
    },
    LOGOUT: function () {
        ((b = {}), (a = null), (r = void 0), (P = {}), (s = {}), (l = null), A.w.remove(v));
    },
});
