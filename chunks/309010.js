"use strict";
let i, r, a, s, l, o, d;
n.d(t, { Ay: () => H, cX: () => x });
var c = n(435558),
    u = n.n(c),
    _ = n(136722),
    E = n(17928),
    A = n(506774),
    h = n(228366),
    I = n(976860),
    f = n(95701),
    p = n(403362),
    T = n(280450),
    m = n(734057),
    g = n(808728),
    S = n(71393),
    N = n(186295),
    C = n(576705),
    R = n(967198),
    O = n(652215),
    L = n(746080);
let y = "SelectedChannelStore",
    D = {},
    v = {},
    b = {},
    M = new Set();
function P(e) {
    return String(e);
}
function U() {
    __OVERLAY__ ||
        A.w.set(y, {
            selectedChannelId: a,
            selectedVoiceChannelId: l,
            lastChannelFollowingDestination: s,
            lastConnectedTime: o,
            selectedChannelIds: D,
            mostRecentSelectedTextChannelIds: b,
            knownThreadIds: u()(D)
                .values()
                .concat(u().values(b))
                .filter(p.Vq)
                .uniq()
                .filter((e) => {
                    let t = m.A.getBasicChannel(e);
                    return M.has(e) || (null != t && f.Le.has(t.type));
                })
                .value(),
        });
}
function w(e) {
    if (null != e) {
        let t = g.Ay.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function G(e, t) {
    if (null == e || null == t || b[e] === t) return !1;
    let n = m.A.getChannel(t),
        i = null != n && (0, f.ke)(n.type),
        r = n?.getGuildId() === e;
    return !!i && !!r && ((b[e] = t), !0);
}
function x(e) {
    let t = m.A.getMutableBasicGuildChannelsForGuild(e),
        n = u().find(t, (e) => e.type === O.rbe.GUILD_VOICE);
    return n?.id;
}
function k() {
    let e = !1,
        t = S.A.getGuildsArray();
    return (
        u().each(D, (t, n) => {
            (null != t && (m.A.hasChannel(t) || t === a || M.has(t) || (0, L.mP)(t))) ||
                (delete D[n], delete v[n], (e = !0));
        }),
        u().each(b, (t, n) => {
            (null != t && (m.A.hasChannel(t) || M.has(t))) || (delete b[n], (e = !0));
        }),
        t.forEach((e) => {
            let t = D[e.id];
            null == b[e.id] && G(e.id, t);
        }),
        null != o && Date.now() - o >= 3e5 && ((l = null), (e = !0)),
        e
    );
}
function F(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if ((M.delete(e), null == t)) {
        let n = R.A.getGuildId();
        D[P(n)] === e && (t = n);
    }
    let r = null != S.A.getGuild(t) ? t : null,
        a = !1;
    l === e && ((l = null), (a = !0)),
        D[P(r)] === e &&
            ((D[P(r)] = i && null != n ? n : w(P(r))),
            R.A.getGuildId() === r && (0, I.bG)(O.BVt.CHANNEL(t, D[P(r)])),
            (a = !0)),
        null != r && b[r] === e && (delete b[r], (a = !0)),
        a && U();
}
function V(e) {
    let { type: t, channel: n } = e;
    F(n.id, n.guild_id, n.parent_id, "THREAD_DELETE" === t);
}
class B extends E.Ay.Store {
    static displayName = "SelectedChannelStore";
    initialize() {
        if (!__OVERLAY__) {
            let e = A.w.get(y) ?? {
                selectedChannelId: a,
                selectedVoiceChannelId: l,
                lastChannelFollowingDestination: s,
                lastConnectedTime: o,
                selectedChannelIds: D,
                mostRecentSelectedTextChannelIds: b,
            };
            null != e.knownThreadIds && (M = new Set(e.knownThreadIds)),
                (l = e.selectedVoiceChannelId),
                (s = e.lastChannelFollowingDestination),
                (o = e.lastConnectedTime),
                (b = e.mostRecentSelectedTextChannelIds ?? {}),
                null != e.selectedChannelIds && (D = { ...e.selectedChannelIds, null: null });
        }
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(T.default, m.A, g.Ay, S.A, N.Ay, C.A, R.A);
    }
    getChannelId(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = P(e === O.ME ? null : (e ?? R.A.getGuildId() ?? null));
        return t ? (D[n] ?? w(n)) : D[n];
    }
    getVoiceChannelId() {
        return N.Ay.isSupported() ? l : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        return null == e ? null : (b[e] ?? null);
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? D[e] : a;
    }
    getLastSelectedChannelId(e) {
        return null != e ? v[e] : r;
    }
    getLastSelectedChannels(e) {
        return v[e];
    }
    getLastChannelFollowingDestination() {
        return s;
    }
}
let H = new B(h.h, {
    CONNECTION_OPEN: function (e) {
        if (((i = e.sessionId), null != l)) {
            let e = m.A.getChannel(l);
            (null != e && (e.isPrivate() || C.A.can(_.kg(O.xBc.VIEW_CHANNEL, O.xBc.CONNECT), e))) || (l = null);
        }
        k() && U();
    },
    OVERLAY_INITIALIZE: function (e) {
        (i = e.sessionId),
            (l = e.selectedVoiceChannelId),
            (D = {}),
            (v = {}),
            (a = e.selectedChannelId),
            (D[e.selectedGuildId] = e.selectedChannelId),
            G(e.selectedGuildId, a),
            k();
    },
    CONNECTION_CLOSED: function () {
        i = null;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (void 0 === t) return !1;
        null == n && (n = w(t)),
            null != a && n !== a && (r = a),
            (a = n),
            G(t, n),
            D[P(t)] !== n && ((v[P(t)] = D[P(t)]), (D[P(t)] = a)),
            U();
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        switch (t.type) {
            case O.rbe.GUILD_ANNOUNCEMENT:
            case O.rbe.GUILD_TEXT:
                let n = t.guild_id;
                if ((null != n && null == b[n] && (b[n] = t.id), null != n && null == D[n])) return (D[n] = w(n)), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: V,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t)
            if (e.isScheduledForDeletion()) {
                let t = f.Le.has(e.type);
                F(e.id, e.guild_id, e.parent_id, t);
            }
    },
    THREAD_DELETE: V,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        if (null == D[t.id]) {
            let e = w(t.id);
            (D[t.id] = e), G(t.id, e), U();
        }
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if ((l === D[t] && (l = null), n)) return !1;
        delete b[t], delete D[t], U();
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) {
            let e = m.A.getChannel(l),
                t = e?.guild_id;
            null != t && t !== R.A.getGuildId() && D[t] === l && (D[t] = w(t));
        }
        (l = t), U();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (t.sessionId === i) {
                clearInterval(d);
                let e = m.A.getChannel(l)?.getGuildId();
                (t.guildId !== e && null == t.channelId) || (l = t.channelId),
                    (o = Date.now()),
                    null != l &&
                        (d = setInterval(() => {
                            (o = Date.now()), U();
                        }, 6e4)),
                    U();
            } else {
                if (t.userId !== T.default.getId()) return e;
                clearInterval(d), (d = void 0), (o = 0);
                let n = m.A.getChannel(l)?.getGuildId(),
                    i = m.A.getChannel(t.channelId)?.getGuildId();
                ((null != n && i === n) || l === t.channelId) && (l = null), U();
            }
            return !0;
        }, !1);
    },
    CHANNEL_FOLLOWER_CREATED: function (e) {
        let { channelId: t, guildId: n } = e;
        (null == s || t !== s.channelId) && ((s = { channelId: t, guildId: n }), U());
    },
    LOGOUT: function () {
        (D = {}), (a = null), (r = void 0), (b = {}), (s = {}), (l = null), A.w.remove(y);
    },
});
