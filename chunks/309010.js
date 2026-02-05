"use strict";
let r, i, a, s, o, l, u;
n.d(t, { A: () => en, c: () => V });
var c = n(735438),
    d = n.n(c),
    _ = n(136722),
    f = n(311907),
    p = n(506774),
    h = n(73153),
    m = n(976860),
    g = n(95701),
    E = n(403362),
    A = n(961350),
    I = n(734057),
    T = n(808728),
    y = n(71393),
    S = n(430452),
    v = n(576705),
    C = n(967198),
    b = n(652215),
    N = n(746080);
let R = "SelectedChannelStore",
    O = 3e5,
    D = 6e4,
    L = {},
    w = {},
    x = {},
    P = new Set();
function M(e) {
    return String(e);
}
function k() {
    __OVERLAY__ ||
        p.w.set(R, {
            selectedChannelId: a,
            selectedVoiceChannelId: o,
            lastChannelFollowingDestination: s,
            lastConnectedTime: l,
            selectedChannelIds: L,
            mostRecentSelectedTextChannelIds: x,
            knownThreadIds: d()(L)
                .values()
                .concat(d().values(x))
                .filter(E.Vq)
                .uniq()
                .filter((e) => {
                    let t = I.A.getBasicChannel(e);
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
function G(e, t) {
    if (null == e || null == t || x[e] === t) return !1;
    let n = I.A.getChannel(t),
        r = null != n && (0, g.ke)(n.type),
        i = n?.getGuildId() === e;
    return !!r && !!i && ((x[e] = t), !0);
}
function V(e) {
    let t = I.A.getMutableBasicGuildChannelsForGuild(e),
        n = d().find(t, (e) => e.type === b.rbe.GUILD_VOICE);
    return n?.id;
}
function F() {
    let e = !1,
        t = y.A.getGuildsArray();
    return (
        d().each(L, (t, n) => {
            (null != t && (I.A.hasChannel(t) || t === a || P.has(t) || (0, N.mP)(t))) ||
                (delete L[n], delete w[n], (e = !0));
        }),
        d().each(x, (t, n) => {
            (null != t && (I.A.hasChannel(t) || P.has(t))) || (delete x[n], (e = !0));
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
        (null != e && v.A.can(_.kg(b.xBc.VIEW_CHANNEL, b.xBc.CONNECT), e)) || (o = null);
    }
    F() && k();
}
function j(e) {
    (r = e.sessionId),
        (o = e.selectedVoiceChannelId),
        (L = {}),
        (w = {}),
        (a = e.selectedChannelId),
        (L[e.selectedGuildId] = e.selectedChannelId),
        G(e.selectedGuildId, a),
        F();
}
function H() {
    r = null;
}
function Y(e) {
    let { guildId: t, channelId: n } = e;
    if (void 0 === t) return !1;
    null == n && (n = U(t)),
        null != a && n !== a && (i = a),
        (a = n),
        G(t, n),
        L[M(t)] !== n && ((w[M(t)] = L[M(t)]), (L[M(t)] = a)),
        k();
}
function W(e) {
    let { channelId: t } = e;
    if (null == t) {
        let e = I.A.getChannel(o),
            t = e?.guild_id;
        null != t && t !== C.A.getGuildId() && L[t] === o && (L[t] = U(t));
    }
    (o = t), k();
}
function K(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if ((P.delete(e), null == t)) {
        let n = C.A.getGuildId();
        L[M(n)] === e && (t = n);
    }
    let i = null != y.A.getGuild(t) ? t : null,
        a = !1;
    o === e && ((o = null), (a = !0)),
        L[M(i)] === e &&
            ((L[M(i)] = r && null != n ? n : U(M(i))),
            C.A.getGuildId() === i && (0, m.bG)(b.BVt.CHANNEL(t, L[M(i)])),
            (a = !0)),
        null != i && x[i] === e && (delete x[i], (a = !0)),
        a && k();
}
function z(e) {
    let { type: t, channel: n } = e;
    K(n.id, n.guild_id, n.parent_id, "THREAD_DELETE" === t);
}
function $(e) {
    let { channels: t } = e;
    for (let e of t)
        if (e.isScheduledForDeletion()) {
            let t = g.Le.has(e.type);
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
function Q(e) {
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
function X(e) {
    let { channelId: t, guildId: n } = e;
    (null == s || t !== s.channelId) && ((s = { channelId: t, guildId: n }), k());
}
function J() {
    (L = {}), (a = null), (i = void 0), (x = {}), (s = {}), (o = null), p.w.remove(R);
}
function ee(e) {
    let { channel: t } = e;
    switch (t.type) {
        case b.rbe.GUILD_ANNOUNCEMENT:
        case b.rbe.GUILD_TEXT:
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
                selectedChannelId: a,
                selectedVoiceChannelId: o,
                lastChannelFollowingDestination: s,
                lastConnectedTime: l,
                selectedChannelIds: L,
                mostRecentSelectedTextChannelIds: x,
            };
            null != e.knownThreadIds && (P = new Set(e.knownThreadIds)),
                (o = e.selectedVoiceChannelId),
                (s = e.lastChannelFollowingDestination),
                (l = e.lastConnectedTime),
                (x = e.mostRecentSelectedTextChannelIds ?? {}),
                null != e.selectedChannelIds && (L = { ...e.selectedChannelIds, null: null });
        }
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(A.default, I.A, T.Ay, y.A, S.A, v.A, C.A);
    }
    getChannelId(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = M(e === b.ME ? null : (e ?? C.A.getGuildId() ?? null));
        return t ? (L[n] ?? U(n)) : L[n];
    }
    getVoiceChannelId() {
        return S.A.isSupported() ? o : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        return null == e ? null : (x[e] ?? null);
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? L[e] : a;
    }
    getLastSelectedChannelId(e) {
        return null != e ? w[e] : i;
    }
    getLastSelectedChannels(e) {
        return w[e];
    }
    getLastChannelFollowingDestination() {
        return s;
    }
}
let en = new et(h.h, {
    CONNECTION_OPEN: B,
    OVERLAY_INITIALIZE: j,
    CONNECTION_CLOSED: H,
    CHANNEL_SELECT: Y,
    CHANNEL_CREATE: ee,
    CHANNEL_DELETE: z,
    CHANNEL_UPDATES: $,
    THREAD_DELETE: z,
    GUILD_CREATE: q,
    GUILD_DELETE: Z,
    VOICE_CHANNEL_SELECT: W,
    VOICE_STATE_UPDATES: Q,
    CHANNEL_FOLLOWER_CREATED: X,
    LOGOUT: J,
});
