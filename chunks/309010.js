"use strict";
let i, r, s, a, o, l, d;
n.d(t, { A: () => H, c: () => x });
var _ = n(735438),
    u = n.n(_),
    c = n(136722),
    E = n(17928),
    h = n(506774),
    m = n(228366),
    f = n(976860),
    g = n(95701),
    p = n(403362),
    A = n(495544),
    I = n(734057),
    T = n(808728),
    S = n(71393),
    N = n(969341),
    C = n(576705),
    R = n(967198),
    O = n(652215),
    y = n(746080);
let v = "SelectedChannelStore",
    D = {},
    L = {},
    b = {},
    w = new Set();
function P(e) {
    return String(e);
}
function k() {
    __OVERLAY__ ||
        h.w.set(v, {
            selectedChannelId: s,
            selectedVoiceChannelId: o,
            lastChannelFollowingDestination: a,
            lastConnectedTime: l,
            selectedChannelIds: D,
            mostRecentSelectedTextChannelIds: b,
            knownThreadIds: u()(D)
                .values()
                .concat(u().values(b))
                .filter(p.Vq)
                .uniq()
                .filter((e) => {
                    let t = I.A.getBasicChannel(e);
                    return w.has(e) || (null != t && g.Le.has(t.type));
                })
                .value(),
        });
}
function M(e) {
    if (null != e) {
        let t = T.Ay.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function U(e, t) {
    if (null == e || null == t || b[e] === t) return !1;
    let n = I.A.getChannel(t),
        i = null != n && (0, g.ke)(n.type),
        r = n?.getGuildId() === e;
    return !!i && !!r && ((b[e] = t), !0);
}
function x(e) {
    let t = I.A.getMutableBasicGuildChannelsForGuild(e),
        n = u().find(t, (e) => e.type === O.rbe.GUILD_VOICE);
    return n?.id;
}
function G() {
    let e = !1,
        t = S.A.getGuildsArray();
    return (
        u().each(D, (t, n) => {
            (null != t && (I.A.hasChannel(t) || t === s || w.has(t) || (0, y.mP)(t))) ||
                (delete D[n], delete L[n], (e = !0));
        }),
        u().each(b, (t, n) => {
            (null != t && (I.A.hasChannel(t) || w.has(t))) || (delete b[n], (e = !0));
        }),
        t.forEach((e) => {
            let t = D[e.id];
            null == b[e.id] && U(e.id, t);
        }),
        null != l && Date.now() - l >= 3e5 && ((o = null), (e = !0)),
        e
    );
}
function V(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if ((w.delete(e), null == t)) {
        let n = R.A.getGuildId();
        D[P(n)] === e && (t = n);
    }
    let r = null != S.A.getGuild(t) ? t : null,
        s = !1;
    o === e && ((o = null), (s = !0)),
        D[P(r)] === e &&
            ((D[P(r)] = i && null != n ? n : M(P(r))),
            R.A.getGuildId() === r && (0, f.bG)(O.BVt.CHANNEL(t, D[P(r)])),
            (s = !0)),
        null != r && b[r] === e && (delete b[r], (s = !0)),
        s && k();
}
function F(e) {
    let { type: t, channel: n } = e;
    V(n.id, n.guild_id, n.parent_id, "THREAD_DELETE" === t);
}
class B extends E.Ay.Store {
    static displayName = "SelectedChannelStore";
    initialize() {
        if (!__OVERLAY__) {
            let e = h.w.get(v) ?? {
                selectedChannelId: s,
                selectedVoiceChannelId: o,
                lastChannelFollowingDestination: a,
                lastConnectedTime: l,
                selectedChannelIds: D,
                mostRecentSelectedTextChannelIds: b,
            };
            null != e.knownThreadIds && (w = new Set(e.knownThreadIds)),
                (o = e.selectedVoiceChannelId),
                (a = e.lastChannelFollowingDestination),
                (l = e.lastConnectedTime),
                (b = e.mostRecentSelectedTextChannelIds ?? {}),
                null != e.selectedChannelIds && (D = { ...e.selectedChannelIds, null: null });
        }
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(A.default, I.A, T.Ay, S.A, N.Ay, C.A, R.A);
    }
    getChannelId(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = P(e === O.ME ? null : (e ?? R.A.getGuildId() ?? null));
        return t ? (D[n] ?? M(n)) : D[n];
    }
    getVoiceChannelId() {
        return N.Ay.isSupported() ? o : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        return null == e ? null : (b[e] ?? null);
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? D[e] : s;
    }
    getLastSelectedChannelId(e) {
        return null != e ? L[e] : r;
    }
    getLastSelectedChannels(e) {
        return L[e];
    }
    getLastChannelFollowingDestination() {
        return a;
    }
}
let H = new B(m.h, {
    CONNECTION_OPEN: function (e) {
        if (((i = e.sessionId), null != o)) {
            let e = I.A.getChannel(o);
            (null != e && C.A.can(c.kg(O.xBc.VIEW_CHANNEL, O.xBc.CONNECT), e)) || (o = null);
        }
        G() && k();
    },
    OVERLAY_INITIALIZE: function (e) {
        (i = e.sessionId),
            (o = e.selectedVoiceChannelId),
            (D = {}),
            (L = {}),
            (s = e.selectedChannelId),
            (D[e.selectedGuildId] = e.selectedChannelId),
            U(e.selectedGuildId, s),
            G();
    },
    CONNECTION_CLOSED: function () {
        i = null;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (void 0 === t) return !1;
        null == n && (n = M(t)),
            null != s && n !== s && (r = s),
            (s = n),
            U(t, n),
            D[P(t)] !== n && ((L[P(t)] = D[P(t)]), (D[P(t)] = s)),
            k();
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        switch (t.type) {
            case O.rbe.GUILD_ANNOUNCEMENT:
            case O.rbe.GUILD_TEXT:
                let n = t.guild_id;
                if ((null != n && null == b[n] && (b[n] = t.id), null != n && null == D[n])) return (D[n] = M(n)), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: F,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t)
            if (e.isScheduledForDeletion()) {
                let t = g.Le.has(e.type);
                V(e.id, e.guild_id, e.parent_id, t);
            }
    },
    THREAD_DELETE: F,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        if (null == D[t.id]) {
            let e = M(t.id);
            (D[t.id] = e), U(t.id, e), k();
        }
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if ((o === D[t] && (o = null), n)) return !1;
        delete b[t], delete D[t], k();
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) {
            let e = I.A.getChannel(o),
                t = e?.guild_id;
            null != t && t !== R.A.getGuildId() && D[t] === o && (D[t] = M(t));
        }
        (o = t), k();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (t.sessionId === i) {
                clearInterval(d);
                let e = I.A.getChannel(o)?.getGuildId();
                (t.guildId !== e && null == t.channelId) || (o = t.channelId),
                    (l = Date.now()),
                    null != o &&
                        (d = setInterval(() => {
                            (l = Date.now()), k();
                        }, 6e4)),
                    k();
            } else {
                if (t.userId !== A.default.getId()) return e;
                clearInterval(d), (d = void 0), (l = 0);
                let n = I.A.getChannel(o)?.getGuildId(),
                    i = I.A.getChannel(t.channelId)?.getGuildId();
                ((null != n && i === n) || o === t.channelId) && (o = null), k();
            }
            return !0;
        }, !1);
    },
    CHANNEL_FOLLOWER_CREATED: function (e) {
        let { channelId: t, guildId: n } = e;
        (null == a || t !== a.channelId) && ((a = { channelId: t, guildId: n }), k());
    },
    LOGOUT: function () {
        (D = {}), (s = null), (r = void 0), (b = {}), (a = {}), (o = null), h.w.remove(v);
    },
});
