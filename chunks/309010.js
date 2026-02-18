"use strict";
let r, i, s, a, o, l, u;
n.d(t, { A: () => en, c: () => F });
var c = n(735438),
    d = n.n(c),
    _ = n(136722),
    f = n(311907),
    p = n(506774),
    h = n(73153),
    m = n(976860),
    E = n(95701),
    g = n(403362),
    A = n(961350),
    I = n(734057),
    T = n(808728),
    S = n(71393),
    y = n(430452),
    v = n(576705),
    N = n(967198),
    C = n(652215),
    b = n(746080);
let R = "SelectedChannelStore",
    O = 3e5,
    D = 6e4,
    L = {},
    w = {},
    x = {},
    M = new Set();
function P(e) {
    return String(e);
}
function k() {
    __OVERLAY__ ||
        p.w.set(R, {
            selectedChannelId: s,
            selectedVoiceChannelId: o,
            lastChannelFollowingDestination: a,
            lastConnectedTime: l,
            selectedChannelIds: L,
            mostRecentSelectedTextChannelIds: x,
            knownThreadIds: d()(L)
                .values()
                .concat(d().values(x))
                .filter(g.Vq)
                .uniq()
                .filter((e) => {
                    let t = I.A.getBasicChannel(e);
                    return M.has(e) || (null != t && E.Le.has(t.type));
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
function G(e, t) {
    if (null == e || null == t || x[e] === t) return !1;
    let n = I.A.getChannel(t),
        r = null != n && (0, E.ke)(n.type),
        i = n?.getGuildId() === e;
    return !!r && !!i && ((x[e] = t), !0);
}
function F(e) {
    let t = I.A.getMutableBasicGuildChannelsForGuild(e),
        n = d().find(t, (e) => e.type === C.rbe.GUILD_VOICE);
    return n?.id;
}
function V() {
    let e = !1,
        t = S.A.getGuildsArray();
    return (
        d().each(L, (t, n) => {
            (null != t && (I.A.hasChannel(t) || t === s || M.has(t) || (0, b.mP)(t))) ||
                (delete L[n], delete w[n], (e = !0));
        }),
        d().each(x, (t, n) => {
            (null != t && (I.A.hasChannel(t) || M.has(t))) || (delete x[n], (e = !0));
        }),
        t.forEach((e) => {
            let t = L[e.id];
            null == x[e.id] && G(e.id, t);
        }),
        null != l && Date.now() - l >= O && ((o = null), (e = !0)),
        e
    );
}
function B(e) {
    if (((r = e.sessionId), null != o)) {
        let e = I.A.getChannel(o);
        (null != e && v.A.can(_.kg(C.xBc.VIEW_CHANNEL, C.xBc.CONNECT), e)) || (o = null);
    }
    V() && k();
}
function H(e) {
    (r = e.sessionId),
        (o = e.selectedVoiceChannelId),
        (L = {}),
        (w = {}),
        (s = e.selectedChannelId),
        (L[e.selectedGuildId] = e.selectedChannelId),
        G(e.selectedGuildId, s),
        V();
}
function j() {
    r = null;
}
function Y(e) {
    let { guildId: t, channelId: n } = e;
    if (void 0 === t) return !1;
    null == n && (n = U(t)),
        null != s && n !== s && (i = s),
        (s = n),
        G(t, n),
        L[P(t)] !== n && ((w[P(t)] = L[P(t)]), (L[P(t)] = s)),
        k();
}
function W(e) {
    let { channelId: t } = e;
    if (null == t) {
        let e = I.A.getChannel(o),
            t = e?.guild_id;
        null != t && t !== N.A.getGuildId() && L[t] === o && (L[t] = U(t));
    }
    (o = t), k();
}
function K(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if ((M.delete(e), null == t)) {
        let n = N.A.getGuildId();
        L[P(n)] === e && (t = n);
    }
    let i = null != S.A.getGuild(t) ? t : null,
        s = !1;
    o === e && ((o = null), (s = !0)),
        L[P(i)] === e &&
            ((L[P(i)] = r && null != n ? n : U(P(i))),
            N.A.getGuildId() === i && (0, m.bG)(C.BVt.CHANNEL(t, L[P(i)])),
            (s = !0)),
        null != i && x[i] === e && (delete x[i], (s = !0)),
        s && k();
}
function z(e) {
    let { type: t, channel: n } = e;
    K(n.id, n.guild_id, n.parent_id, "THREAD_DELETE" === t);
}
function $(e) {
    let { channels: t } = e;
    for (let e of t)
        if (e.isScheduledForDeletion()) {
            let t = E.Le.has(e.type);
            K(e.id, e.guild_id, e.parent_id, t);
        }
}
function q(e) {
    let { guild: t } = e;
    if (null == L[t.id]) {
        let e = U(t.id);
        (L[t.id] = e), G(t.id, e), k();
    }
}
function Z(e) {
    let {
        guild: { id: t, unavailable: n },
    } = e;
    if ((o === L[t] && (o = null), n)) return !1;
    delete x[t], delete L[t], k();
}
function X(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (t.sessionId === r) {
            clearInterval(u);
            let e = I.A.getChannel(o)?.getGuildId();
            (t.guildId !== e && null == t.channelId) || (o = t.channelId),
                (l = Date.now()),
                null != o &&
                    (u = setInterval(() => {
                        (l = Date.now()), k();
                    }, D)),
                k();
        } else {
            if (t.userId !== A.default.getId()) return e;
            clearInterval(u), (u = void 0), (l = 0);
            let n = I.A.getChannel(o)?.getGuildId(),
                r = I.A.getChannel(t.channelId)?.getGuildId();
            ((null != n && r === n) || o === t.channelId) && (o = null), k();
        }
        return !0;
    }, !1);
}
function Q(e) {
    let { channelId: t, guildId: n } = e;
    (null == a || t !== a.channelId) && ((a = { channelId: t, guildId: n }), k());
}
function J() {
    (L = {}), (s = null), (i = void 0), (x = {}), (a = {}), (o = null), p.w.remove(R);
}
function ee(e) {
    let { channel: t } = e;
    switch (t.type) {
        case C.rbe.GUILD_ANNOUNCEMENT:
        case C.rbe.GUILD_TEXT:
            let n = t.guild_id;
            if ((null != n && null == x[n] && (x[n] = t.id), null != n && null == L[n])) return (L[n] = U(n)), !0;
    }
    return !1;
}
class et extends f.Ay.Store {
    static displayName = "SelectedChannelStore";
    initialize() {
        if (!__OVERLAY__) {
            let e = p.w.get(R) ?? {
                selectedChannelId: s,
                selectedVoiceChannelId: o,
                lastChannelFollowingDestination: a,
                lastConnectedTime: l,
                selectedChannelIds: L,
                mostRecentSelectedTextChannelIds: x,
            };
            null != e.knownThreadIds && (M = new Set(e.knownThreadIds)),
                (o = e.selectedVoiceChannelId),
                (a = e.lastChannelFollowingDestination),
                (l = e.lastConnectedTime),
                (x = e.mostRecentSelectedTextChannelIds ?? {}),
                null != e.selectedChannelIds && (L = { ...e.selectedChannelIds, null: null });
        }
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(A.default, I.A, T.Ay, S.A, y.Ay, v.A, N.A);
    }
    getChannelId(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = P(e === C.ME ? null : (e ?? N.A.getGuildId() ?? null));
        return t ? (L[n] ?? U(n)) : L[n];
    }
    getVoiceChannelId() {
        return y.Ay.isSupported() ? o : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        return null == e ? null : (x[e] ?? null);
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? L[e] : s;
    }
    getLastSelectedChannelId(e) {
        return null != e ? w[e] : i;
    }
    getLastSelectedChannels(e) {
        return w[e];
    }
    getLastChannelFollowingDestination() {
        return a;
    }
}
let en = new et(h.h, {
    CONNECTION_OPEN: B,
    OVERLAY_INITIALIZE: H,
    CONNECTION_CLOSED: j,
    CHANNEL_SELECT: Y,
    CHANNEL_CREATE: ee,
    CHANNEL_DELETE: z,
    CHANNEL_UPDATES: $,
    THREAD_DELETE: z,
    GUILD_CREATE: q,
    GUILD_DELETE: Z,
    VOICE_CHANNEL_SELECT: W,
    VOICE_STATE_UPDATES: X,
    CHANNEL_FOLLOWER_CREATED: Q,
    LOGOUT: J,
});
