"use strict";
let r, i, a, s, o, l, u;
n.d(t, { A: () => er, c: () => V });
var c = n(735438),
    d = n.n(c),
    _ = n(136722),
    f = n(311907),
    h = n(506774),
    p = n(73153),
    g = n(976860),
    E = n(95701),
    A = n(403362),
    I = n(961350),
    T = n(734057),
    y = n(808728),
    S = n(71393),
    v = n(430452),
    C = n(576705),
    b = n(967198),
    N = n(652215),
    R = n(746080);
let O = "SelectedChannelStore",
    D = 3e5,
    L = 6e4,
    w = {},
    x = {},
    P = {},
    M = new Set();
function k(e) {
    return String(e);
}
function U() {
    __OVERLAY__ ||
        h.w.set(O, {
            selectedChannelId: a,
            selectedVoiceChannelId: o,
            lastChannelFollowingDestination: s,
            lastConnectedTime: l,
            selectedChannelIds: w,
            mostRecentSelectedTextChannelIds: P,
            knownThreadIds: d()(w)
                .values()
                .concat(d().values(P))
                .filter(A.Vq)
                .uniq()
                .filter((e) => {
                    let t = T.A.getBasicChannel(e);
                    return M.has(e) || (null != t && E.Le.has(t.type));
                })
                .value(),
        });
}
function G(e) {
    if (null != e) {
        let t = y.Ay.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function F(e, t) {
    if (null == e || null == t || P[e] === t) return !1;
    let n = T.A.getChannel(t),
        r = null != n && (0, E.ke)(n.type),
        i = n?.getGuildId() === e;
    return !!r && !!i && ((P[e] = t), !0);
}
function V(e) {
    let t = T.A.getMutableBasicGuildChannelsForGuild(e),
        n = d().find(t, (e) => e.type === N.rbe.GUILD_VOICE);
    return n?.id;
}
function B() {
    let e = !1,
        t = S.A.getGuildsArray();
    return (
        d().each(w, (t, n) => {
            (null != t && (T.A.hasChannel(t) || t === a || M.has(t) || (0, R.mP)(t))) ||
                (delete w[n], delete x[n], (e = !0));
        }),
        d().each(P, (t, n) => {
            (null != t && (T.A.hasChannel(t) || M.has(t))) || (delete P[n], (e = !0));
        }),
        t.forEach((e) => {
            let t = w[e.id];
            null == P[e.id] && F(e.id, t);
        }),
        null != l && Date.now() - l >= D && ((o = null), (e = !0)),
        e
    );
}
function j(e) {
    if (((r = e.sessionId), null != o)) {
        let e = T.A.getChannel(o);
        (null != e && C.A.can(_.kg(N.xBc.VIEW_CHANNEL, N.xBc.CONNECT), e)) || (o = null);
    }
    B() && U();
}
function H(e) {
    (r = e.sessionId),
        (o = e.selectedVoiceChannelId),
        (w = {}),
        (x = {}),
        (a = e.selectedChannelId),
        (w[e.selectedGuildId] = e.selectedChannelId),
        F(e.selectedGuildId, a),
        B();
}
function Y() {
    r = null;
}
function W(e) {
    let { guildId: t, channelId: n } = e;
    if (void 0 === t) return !1;
    null == n && (n = G(t)),
        null != a && n !== a && (i = a),
        (a = n),
        F(t, n),
        w[k(t)] !== n && ((x[k(t)] = w[k(t)]), (w[k(t)] = a)),
        U();
}
function K(e) {
    let { channelId: t } = e;
    if (null == t) {
        let e = T.A.getChannel(o),
            t = e?.guild_id;
        null != t && t !== b.A.getGuildId() && w[t] === o && (w[t] = G(t));
    }
    (o = t), U();
}
function $(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if ((M.delete(e), null == t)) {
        let n = b.A.getGuildId();
        w[k(n)] === e && (t = n);
    }
    let i = null != S.A.getGuild(t) ? t : null,
        a = !1;
    o === e && ((o = null), (a = !0)),
        w[k(i)] === e &&
            ((w[k(i)] = r && null != n ? n : G(k(i))),
            b.A.getGuildId() === i && (0, g.bG)(N.BVt.CHANNEL(t, w[k(i)])),
            (a = !0)),
        null != i && P[i] === e && (delete P[i], (a = !0)),
        a && U();
}
function z(e) {
    let { type: t, channel: n } = e;
    $(n.id, n.guild_id, n.parent_id, "THREAD_DELETE" === t);
}
function q(e) {
    let { channels: t } = e;
    for (let e of t)
        if (e.isScheduledForDeletion()) {
            let t = E.Le.has(e.type);
            $(e.id, e.guild_id, e.parent_id, t);
        }
}
function X(e) {
    let { guild: t } = e;
    if (null == w[t.id]) {
        let e = G(t.id);
        (w[t.id] = e), F(t.id, e), U();
    }
}
function Z(e) {
    let {
        guild: { id: t, unavailable: n },
    } = e;
    if ((o === w[t] && (o = null), n)) return !1;
    delete P[t], delete w[t], U();
}
function Q(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (t.sessionId === r) {
            clearInterval(u);
            let e = T.A.getChannel(o)?.getGuildId();
            (t.guildId !== e && null == t.channelId) || (o = t.channelId),
                (l = Date.now()),
                null != o &&
                    (u = setInterval(() => {
                        (l = Date.now()), U();
                    }, L)),
                U();
        } else {
            if (t.userId !== I.default.getId()) return e;
            clearInterval(u), (u = void 0), (l = 0);
            let n = T.A.getChannel(o)?.getGuildId(),
                r = T.A.getChannel(t.channelId)?.getGuildId();
            ((null != n && r === n) || o === t.channelId) && (o = null), U();
        }
        return !0;
    }, !1);
}
function J(e) {
    let { channelId: t, guildId: n } = e;
    (null == s || t !== s.channelId) && ((s = { channelId: t, guildId: n }), U());
}
function ee() {
    (w = {}), (a = null), (i = void 0), (P = {}), (s = {}), (o = null), h.w.remove(O);
}
function et(e) {
    let { channel: t } = e;
    switch (t.type) {
        case N.rbe.GUILD_ANNOUNCEMENT:
        case N.rbe.GUILD_TEXT:
            let n = t.guild_id;
            if ((null != n && null == P[n] && (P[n] = t.id), null != n && null == w[n])) return (w[n] = G(n)), !0;
    }
    return !1;
}
class en extends f.Ay.Store {
    static displayName = "SelectedChannelStore";
    initialize() {
        if (!__OVERLAY__) {
            let e = h.w.get(O) ?? {
                selectedChannelId: a,
                selectedVoiceChannelId: o,
                lastChannelFollowingDestination: s,
                lastConnectedTime: l,
                selectedChannelIds: w,
                mostRecentSelectedTextChannelIds: P,
            };
            null != e.knownThreadIds && (M = new Set(e.knownThreadIds)),
                (o = e.selectedVoiceChannelId),
                (s = e.lastChannelFollowingDestination),
                (l = e.lastConnectedTime),
                (P = e.mostRecentSelectedTextChannelIds ?? {}),
                null != e.selectedChannelIds && (w = { ...e.selectedChannelIds, null: null });
        }
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(I.default, T.A, y.Ay, S.A, v.Ay, C.A, b.A);
    }
    getChannelId(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = k(e === N.ME ? null : (e ?? b.A.getGuildId() ?? null));
        return t ? (w[n] ?? G(n)) : w[n];
    }
    getVoiceChannelId() {
        return v.Ay.isSupported() ? o : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        return null == e ? null : (P[e] ?? null);
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? w[e] : a;
    }
    getLastSelectedChannelId(e) {
        return null != e ? x[e] : i;
    }
    getLastSelectedChannels(e) {
        return x[e];
    }
    getLastChannelFollowingDestination() {
        return s;
    }
}
let er = new en(p.h, {
    CONNECTION_OPEN: j,
    OVERLAY_INITIALIZE: H,
    CONNECTION_CLOSED: Y,
    CHANNEL_SELECT: W,
    CHANNEL_CREATE: et,
    CHANNEL_DELETE: z,
    CHANNEL_UPDATES: q,
    THREAD_DELETE: z,
    GUILD_CREATE: X,
    GUILD_DELETE: Z,
    VOICE_CHANNEL_SELECT: K,
    VOICE_STATE_UPDATES: Q,
    CHANNEL_FOLLOWER_CREATED: J,
    LOGOUT: ee,
});
