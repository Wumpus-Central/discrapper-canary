"use strict";
let r, i, s, a, o, l, u;
n.d(t, { A: () => H, c: () => x });
var d = n(735438),
    c = n.n(d),
    _ = n(136722),
    f = n(311907),
    E = n(506774),
    h = n(73153),
    p = n(976860),
    m = n(95701),
    g = n(403362),
    A = n(961350),
    I = n(734057),
    T = n(808728),
    S = n(71393),
    y = n(430452),
    N = n(576705),
    O = n(967198),
    R = n(652215),
    v = n(746080);
let C = "SelectedChannelStore",
    b = {},
    D = {},
    L = {},
    w = new Set();
function M(e) {
    return String(e);
}
function P() {
    __OVERLAY__ ||
        E.w.set(C, {
            selectedChannelId: s,
            selectedVoiceChannelId: o,
            lastChannelFollowingDestination: a,
            lastConnectedTime: l,
            selectedChannelIds: b,
            mostRecentSelectedTextChannelIds: L,
            knownThreadIds: c()(b)
                .values()
                .concat(c().values(L))
                .filter(g.Vq)
                .uniq()
                .filter((e) => {
                    let t = I.A.getBasicChannel(e);
                    return w.has(e) || (null != t && m.Le.has(t.type));
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
function k(e, t) {
    if (null == e || null == t || L[e] === t) return !1;
    let n = I.A.getChannel(t),
        r = null != n && (0, m.ke)(n.type),
        i = n?.getGuildId() === e;
    return !!r && !!i && ((L[e] = t), !0);
}
function x(e) {
    let t = I.A.getMutableBasicGuildChannelsForGuild(e),
        n = c().find(t, (e) => e.type === R.rbe.GUILD_VOICE);
    return n?.id;
}
function G() {
    let e = !1,
        t = S.A.getGuildsArray();
    return (
        c().each(b, (t, n) => {
            (null != t && (I.A.hasChannel(t) || t === s || w.has(t) || (0, v.mP)(t))) ||
                (delete b[n], delete D[n], (e = !0));
        }),
        c().each(L, (t, n) => {
            (null != t && (I.A.hasChannel(t) || w.has(t))) || (delete L[n], (e = !0));
        }),
        t.forEach((e) => {
            let t = b[e.id];
            null == L[e.id] && k(e.id, t);
        }),
        null != l && Date.now() - l >= 3e5 && ((o = null), (e = !0)),
        e
    );
}
function V(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if ((w.delete(e), null == t)) {
        let n = O.A.getGuildId();
        b[M(n)] === e && (t = n);
    }
    let i = null != S.A.getGuild(t) ? t : null,
        s = !1;
    o === e && ((o = null), (s = !0)),
        b[M(i)] === e &&
            ((b[M(i)] = r && null != n ? n : U(M(i))),
            O.A.getGuildId() === i && (0, p.bG)(R.BVt.CHANNEL(t, b[M(i)])),
            (s = !0)),
        null != i && L[i] === e && (delete L[i], (s = !0)),
        s && P();
}
function F(e) {
    let { type: t, channel: n } = e;
    V(n.id, n.guild_id, n.parent_id, "THREAD_DELETE" === t);
}
class B extends f.Ay.Store {
    static displayName = "SelectedChannelStore";
    initialize() {
        if (!__OVERLAY__) {
            let e = E.w.get(C) ?? {
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
            this.waitFor(A.default, I.A, T.Ay, S.A, y.Ay, N.A, O.A);
    }
    getChannelId(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = M(e === R.ME ? null : (e ?? O.A.getGuildId() ?? null));
        return t ? (b[n] ?? U(n)) : b[n];
    }
    getVoiceChannelId() {
        return y.Ay.isSupported() ? o : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        return null == e ? null : (L[e] ?? null);
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? b[e] : s;
    }
    getLastSelectedChannelId(e) {
        return null != e ? D[e] : i;
    }
    getLastSelectedChannels(e) {
        return D[e];
    }
    getLastChannelFollowingDestination() {
        return a;
    }
}
let H = new B(h.h, {
    CONNECTION_OPEN: function (e) {
        if (((r = e.sessionId), null != o)) {
            let e = I.A.getChannel(o);
            (null != e && N.A.can(_.kg(R.xBc.VIEW_CHANNEL, R.xBc.CONNECT), e)) || (o = null);
        }
        G() && P();
    },
    OVERLAY_INITIALIZE: function (e) {
        (r = e.sessionId),
            (o = e.selectedVoiceChannelId),
            (b = {}),
            (D = {}),
            (s = e.selectedChannelId),
            (b[e.selectedGuildId] = e.selectedChannelId),
            k(e.selectedGuildId, s),
            G();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (void 0 === t) return !1;
        null == n && (n = U(t)),
            null != s && n !== s && (i = s),
            (s = n),
            k(t, n),
            b[M(t)] !== n && ((D[M(t)] = b[M(t)]), (b[M(t)] = s)),
            P();
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        switch (t.type) {
            case R.rbe.GUILD_ANNOUNCEMENT:
            case R.rbe.GUILD_TEXT:
                let n = t.guild_id;
                if ((null != n && null == L[n] && (L[n] = t.id), null != n && null == b[n])) return (b[n] = U(n)), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: F,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t)
            if (e.isScheduledForDeletion()) {
                let t = m.Le.has(e.type);
                V(e.id, e.guild_id, e.parent_id, t);
            }
    },
    THREAD_DELETE: F,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        if (null == b[t.id]) {
            let e = U(t.id);
            (b[t.id] = e), k(t.id, e), P();
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
            null != t && t !== O.A.getGuildId() && b[t] === o && (b[t] = U(t));
        }
        (o = t), P();
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (t.sessionId === r) {
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
                    r = I.A.getChannel(t.channelId)?.getGuildId();
                ((null != n && r === n) || o === t.channelId) && (o = null), P();
            }
            return !0;
        }, !1);
    },
    CHANNEL_FOLLOWER_CREATED: function (e) {
        let { channelId: t, guildId: n } = e;
        (null == a || t !== a.channelId) && ((a = { channelId: t, guildId: n }), P());
    },
    LOGOUT: function () {
        (b = {}), (s = null), (i = void 0), (L = {}), (a = {}), (o = null), E.w.remove(C);
    },
});
