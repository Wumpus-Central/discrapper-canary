"use strict";
let i, r, s, a, o, l, _;
n.d(t, { A: () => H, c: () => G });
var d = n(735438),
    u = n.n(d),
    c = n(136722),
    E = n(17928),
    h = n(506774),
    m = n(228366),
    f = n(976860),
    g = n(95701),
    I = n(403362),
    A = n(495544),
    p = n(734057),
    T = n(808728),
    S = n(71393),
    N = n(51760),
    O = n(576705),
    R = n(967198),
    C = n(652215),
    y = n(746080);
let D = "SelectedChannelStore",
    L = {},
    v = {},
    w = {},
    P = new Set();
function b(e) {
    return String(e);
}
function k() {
    __OVERLAY__ ||
        h.w.set(D, {
            selectedChannelId: s,
            selectedVoiceChannelId: o,
            lastChannelFollowingDestination: a,
            lastConnectedTime: l,
            selectedChannelIds: L,
            mostRecentSelectedTextChannelIds: w,
            knownThreadIds: u()(L)
                .values()
                .concat(u().values(w))
                .filter(I.Vq)
                .uniq()
                .filter((e) => {
                    let t = p.A.getBasicChannel(e);
                    return P.has(e) || (null != t && g.Le.has(t.type));
                })
                .value(),
        });
}
function U(e) {
    if (null != e) {
        let t = T.Ay.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function M(e, t) {
    if (null == e || null == t || w[e] === t) return !1;
    let n = p.A.getChannel(t),
        i = null != n && (0, g.ke)(n.type),
        r = n?.getGuildId() === e;
    return !!i && !!r && ((w[e] = t), !0);
}
function G(e) {
    let t = p.A.getMutableBasicGuildChannelsForGuild(e),
        n = u().find(t, (e) => e.type === C.rbe.GUILD_VOICE);
    return n?.id;
}
function x() {
    let e = !1,
        t = S.A.getGuildsArray();
    return (
        u().each(L, (t, n) => {
            (null != t && (p.A.hasChannel(t) || t === s || P.has(t) || (0, y.mP)(t))) ||
                (delete L[n], delete v[n], (e = !0));
        }),
        u().each(w, (t, n) => {
            (null != t && (p.A.hasChannel(t) || P.has(t))) || (delete w[n], (e = !0));
        }),
        t.forEach((e) => {
            let t = L[e.id];
            null == w[e.id] && M(e.id, t);
        }),
        null != l && Date.now() - l >= 3e5 && ((o = null), (e = !0)),
        e
    );
}
function V(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if ((P.delete(e), null == t)) {
        let n = R.A.getGuildId();
        L[b(n)] === e && (t = n);
    }
    let r = null != S.A.getGuild(t) ? t : null,
        s = !1;
    o === e && ((o = null), (s = !0)),
        L[b(r)] === e &&
            ((L[b(r)] = i && null != n ? n : U(b(r))),
            R.A.getGuildId() === r && (0, f.bG)(C.BVt.CHANNEL(t, L[b(r)])),
            (s = !0)),
        null != r && w[r] === e && (delete w[r], (s = !0)),
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
            let e = h.w.get(D) ?? {
                selectedChannelId: s,
                selectedVoiceChannelId: o,
                lastChannelFollowingDestination: a,
                lastConnectedTime: l,
                selectedChannelIds: L,
                mostRecentSelectedTextChannelIds: w,
            };
            null != e.knownThreadIds && (P = new Set(e.knownThreadIds)),
                (o = e.selectedVoiceChannelId),
                (a = e.lastChannelFollowingDestination),
                (l = e.lastConnectedTime),
                (w = e.mostRecentSelectedTextChannelIds ?? {}),
                null != e.selectedChannelIds && (L = { ...e.selectedChannelIds, null: null });
        }
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(A.default, p.A, T.Ay, S.A, N.Ay, O.A, R.A);
    }
    getChannelId(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = b(e === C.ME ? null : (e ?? R.A.getGuildId() ?? null));
        return t ? (L[n] ?? U(n)) : L[n];
    }
    getVoiceChannelId() {
        return N.Ay.isSupported() ? o : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        return null == e ? null : (w[e] ?? null);
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? L[e] : s;
    }
    getLastSelectedChannelId(e) {
        return null != e ? v[e] : r;
    }
    getLastSelectedChannels(e) {
        return v[e];
    }
    getLastChannelFollowingDestination() {
        return a;
    }
}
let H = new B(m.h, {
    CONNECTION_OPEN: function (e) {
        if (((i = e.sessionId), null != o)) {
            let e = p.A.getChannel(o);
            (null != e && O.A.can(c.kg(C.xBc.VIEW_CHANNEL, C.xBc.CONNECT), e)) || (o = null);
        }
        x() && k();
    },
    OVERLAY_INITIALIZE: function (e) {
        (i = e.sessionId),
            (o = e.selectedVoiceChannelId),
            (L = {}),
            (v = {}),
            (s = e.selectedChannelId),
            (L[e.selectedGuildId] = e.selectedChannelId),
            M(e.selectedGuildId, s),
            x();
    },
    CONNECTION_CLOSED: function () {
        i = null;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (void 0 === t) return !1;
        null == n && (n = U(t)),
            null != s && n !== s && (r = s),
            (s = n),
            M(t, n),
            L[b(t)] !== n && ((v[b(t)] = L[b(t)]), (L[b(t)] = s)),
            k();
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        switch (t.type) {
            case C.rbe.GUILD_ANNOUNCEMENT:
            case C.rbe.GUILD_TEXT:
                let n = t.guild_id;
                if ((null != n && null == w[n] && (w[n] = t.id), null != n && null == L[n])) return (L[n] = U(n)), !0;
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
        if (null == L[t.id]) {
            let e = U(t.id);
            (L[t.id] = e), M(t.id, e), k();
        }
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if ((o === L[t] && (o = null), n)) return !1;
        delete w[t], delete L[t], k();
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) {
            let e = p.A.getChannel(o),
                t = e?.guild_id;
            null != t && t !== R.A.getGuildId() && L[t] === o && (L[t] = U(t));
        }
        (o = t), k();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (t.sessionId === i) {
                clearInterval(_);
                let e = p.A.getChannel(o)?.getGuildId();
                (t.guildId !== e && null == t.channelId) || (o = t.channelId),
                    (l = Date.now()),
                    null != o &&
                        (_ = setInterval(() => {
                            (l = Date.now()), k();
                        }, 6e4)),
                    k();
            } else {
                if (t.userId !== A.default.getId()) return e;
                clearInterval(_), (_ = void 0), (l = 0);
                let n = p.A.getChannel(o)?.getGuildId(),
                    i = p.A.getChannel(t.channelId)?.getGuildId();
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
        (L = {}), (s = null), (r = void 0), (w = {}), (a = {}), (o = null), h.w.remove(D);
    },
});
