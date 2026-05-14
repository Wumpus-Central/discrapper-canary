"use strict";
let i, r, s, a, o, l, u;
n.d(t, { A: () => H, c: () => k });
var c = n(735438),
    d = n.n(c),
    _ = n(136722),
    f = n(17928),
    h = n(506774),
    p = n(228366),
    E = n(976860),
    m = n(95701),
    g = n(403362),
    A = n(495544),
    I = n(734057),
    T = n(808728),
    S = n(71393),
    N = n(235058),
    y = n(576705),
    C = n(967198),
    v = n(652215),
    O = n(746080);
let R = "SelectedChannelStore",
    b = {},
    D = {},
    L = {},
    w = new Set();
function M(e) {
    return String(e);
}
function P() {
    __OVERLAY__ ||
        h.w.set(R, {
            selectedChannelId: s,
            selectedVoiceChannelId: o,
            lastChannelFollowingDestination: a,
            lastConnectedTime: l,
            selectedChannelIds: b,
            mostRecentSelectedTextChannelIds: L,
            knownThreadIds: d()(b)
                .values()
                .concat(d().values(L))
                .filter(g.Vq)
                .uniq()
                .filter((e) => {
                    let t = I.A.getBasicChannel(e);
                    return w.has(e) || (null != t && m.Le.has(t.type));
                })
                .value(),
        });
}
function x(e) {
    if (null != e) {
        let t = T.Ay.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function U(e, t) {
    if (null == e || null == t || L[e] === t) return !1;
    let n = I.A.getChannel(t),
        i = null != n && (0, m.ke)(n.type),
        r = n?.getGuildId() === e;
    return !!i && !!r && ((L[e] = t), !0);
}
function k(e) {
    let t = I.A.getMutableBasicGuildChannelsForGuild(e),
        n = d().find(t, (e) => e.type === v.rbe.GUILD_VOICE);
    return n?.id;
}
function G() {
    let e = !1,
        t = S.A.getGuildsArray();
    return (
        d().each(b, (t, n) => {
            (null != t && (I.A.hasChannel(t) || t === s || w.has(t) || (0, O.mP)(t))) ||
                (delete b[n], delete D[n], (e = !0));
        }),
        d().each(L, (t, n) => {
            (null != t && (I.A.hasChannel(t) || w.has(t))) || (delete L[n], (e = !0));
        }),
        t.forEach((e) => {
            let t = b[e.id];
            null == L[e.id] && U(e.id, t);
        }),
        null != l && Date.now() - l >= 3e5 && ((o = null), (e = !0)),
        e
    );
}
function F(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if ((w.delete(e), null == t)) {
        let n = C.A.getGuildId();
        b[M(n)] === e && (t = n);
    }
    let r = null != S.A.getGuild(t) ? t : null,
        s = !1;
    o === e && ((o = null), (s = !0)),
        b[M(r)] === e &&
            ((b[M(r)] = i && null != n ? n : x(M(r))),
            C.A.getGuildId() === r && (0, E.bG)(v.BVt.CHANNEL(t, b[M(r)])),
            (s = !0)),
        null != r && L[r] === e && (delete L[r], (s = !0)),
        s && P();
}
function V(e) {
    let { type: t, channel: n } = e;
    F(n.id, n.guild_id, n.parent_id, "THREAD_DELETE" === t);
}
class B extends f.Ay.Store {
    static displayName = "SelectedChannelStore";
    initialize() {
        if (!__OVERLAY__) {
            let e = h.w.get(R) ?? {
                selectedChannelId: s,
                selectedVoiceChannelId: o,
                lastChannelFollowingDestination: a,
                lastConnectedTime: l,
                selectedChannelIds: b,
                mostRecentSelectedTextChannelIds: L,
            };
            null != e.knownThreadIds && (w = new Set(e.knownThreadIds)),
                (o = e.selectedVoiceChannelId),
                (a = e.lastChannelFollowingDestination),
                (l = e.lastConnectedTime),
                (L = e.mostRecentSelectedTextChannelIds ?? {}),
                null != e.selectedChannelIds && (b = { ...e.selectedChannelIds, null: null });
        }
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(A.default, I.A, T.Ay, S.A, N.Ay, y.A, C.A);
    }
    getChannelId(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = M(e === v.ME ? null : (e ?? C.A.getGuildId() ?? null));
        return t ? (b[n] ?? x(n)) : b[n];
    }
    getVoiceChannelId() {
        return N.Ay.isSupported() ? o : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        return null == e ? null : (L[e] ?? null);
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? b[e] : s;
    }
    getLastSelectedChannelId(e) {
        return null != e ? D[e] : r;
    }
    getLastSelectedChannels(e) {
        return D[e];
    }
    getLastChannelFollowingDestination() {
        return a;
    }
}
let H = new B(p.h, {
    CONNECTION_OPEN: function (e) {
        if (((i = e.sessionId), null != o)) {
            let e = I.A.getChannel(o);
            (null != e && y.A.can(_.kg(v.xBc.VIEW_CHANNEL, v.xBc.CONNECT), e)) || (o = null);
        }
        G() && P();
    },
    OVERLAY_INITIALIZE: function (e) {
        (i = e.sessionId),
            (o = e.selectedVoiceChannelId),
            (b = {}),
            (D = {}),
            (s = e.selectedChannelId),
            (b[e.selectedGuildId] = e.selectedChannelId),
            U(e.selectedGuildId, s),
            G();
    },
    CONNECTION_CLOSED: function () {
        i = null;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (void 0 === t) return !1;
        null == n && (n = x(t)),
            null != s && n !== s && (r = s),
            (s = n),
            U(t, n),
            b[M(t)] !== n && ((D[M(t)] = b[M(t)]), (b[M(t)] = s)),
            P();
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        switch (t.type) {
            case v.rbe.GUILD_ANNOUNCEMENT:
            case v.rbe.GUILD_TEXT:
                let n = t.guild_id;
                if ((null != n && null == L[n] && (L[n] = t.id), null != n && null == b[n])) return (b[n] = x(n)), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: V,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t)
            if (e.isScheduledForDeletion()) {
                let t = m.Le.has(e.type);
                F(e.id, e.guild_id, e.parent_id, t);
            }
    },
    THREAD_DELETE: V,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        if (null == b[t.id]) {
            let e = x(t.id);
            (b[t.id] = e), U(t.id, e), P();
        }
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if ((o === b[t] && (o = null), n)) return !1;
        delete L[t], delete b[t], P();
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) {
            let e = I.A.getChannel(o),
                t = e?.guild_id;
            null != t && t !== C.A.getGuildId() && b[t] === o && (b[t] = x(t));
        }
        (o = t), P();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (t.sessionId === i) {
                clearInterval(u);
                let e = I.A.getChannel(o)?.getGuildId();
                (t.guildId !== e && null == t.channelId) || (o = t.channelId),
                    (l = Date.now()),
                    null != o &&
                        (u = setInterval(() => {
                            (l = Date.now()), P();
                        }, 6e4)),
                    P();
            } else {
                if (t.userId !== A.default.getId()) return e;
                clearInterval(u), (u = void 0), (l = 0);
                let n = I.A.getChannel(o)?.getGuildId(),
                    i = I.A.getChannel(t.channelId)?.getGuildId();
                ((null != n && i === n) || o === t.channelId) && (o = null), P();
            }
            return !0;
        }, !1);
    },
    CHANNEL_FOLLOWER_CREATED: function (e) {
        let { channelId: t, guildId: n } = e;
        (null == a || t !== a.channelId) && ((a = { channelId: t, guildId: n }), P());
    },
    LOGOUT: function () {
        (b = {}), (s = null), (r = void 0), (L = {}), (a = {}), (o = null), h.w.remove(R);
    },
});
