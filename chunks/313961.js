"use strict";
n.d(t, { A: () => ek }), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(73153),
    u = n(933958),
    c = n(626584),
    d = n(643501),
    _ = n(652896),
    f = n(164891),
    p = n(616356),
    h = n(961350),
    m = n(470710),
    g = n(734057),
    E = n(290863),
    A = n(309010),
    I = n(485296),
    T = n(287809),
    y = n(803301),
    S = n(977997),
    v = n(568598),
    C = n(806931),
    b = n(652215);
let N = new c.A("ChannelRTCStore"),
    R = Object.freeze([]),
    O = [],
    D = {},
    L = {},
    w = {},
    x = {},
    P = {},
    M = {},
    k = {},
    U = {},
    G = {},
    V = {},
    F = {};
function B(e) {
    let t = D[e];
    return null == t && ((t = new v.Ay(e)), (D[e] = t)), t;
}
function j() {
    for (let e of O) J(e);
    ee();
}
function H() {
    let e = [],
        t = A.A.getChannelId();
    null != t && e.push(t);
    let n = A.A.getVoiceChannelId();
    null == n || e.includes(n) || e.push(n);
    let r = d.default.getRemoteSessionId(),
        i = S.A.getVoiceStateForSession(h.default.getId(), r);
    i?.channelId != null && e.push(i?.channelId), s().difference(O, e).forEach(J);
    let a = s().difference(e, O);
    return (O = e), a;
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
    return t.reduce((t, n) => (e(B(n)) ? (X(n), Q(n), !0) : t), !1);
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
    return Y((t) => t.updateParticipant(e), t);
}
function K(e) {
    let t = g.A.getChannel(e),
        n = t?.isDM() && 1 ? C.jd.AUTO : C.jd.NONE;
    return L[e] ?? [n, C.jd.NONE];
}
function z(e) {
    if (null == L[e]) return !1;
    let [t] = L[e];
    return t !== C.jd.NONE;
}
function $(e) {
    null == w[e] && (w[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = w[e],
        n = performance.now(),
        r = z(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[r ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function q(e, t) {
    $(e);
    let n = z(e);
    null == t ? delete L[e] : (L[e] = t), n !== z(e) && w[e].toggleCount++;
}
function Z(e) {
    return e.size(v.r4.STREAM) > 0 || e.size(v.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function Q(e) {
    let t = h.default.getId(),
        n = B(e);
    if (0 === n.size() || A.A.getVoiceChannelId() !== e) return void q(e, null);
    let r = C.jd.NONE,
        a = n.toArray(v.r4.STREAM).find((e) => e.type === C.lp.STREAM && p.A.getActiveStreamForStreamKey(e.id));
    if (null != a) i()(a.type === C.lp.STREAM, "Impossible condition"), (r = a.id);
    else if (1 === n.size()) r = t;
    else if (1 === n.size(v.r4.VIDEO)) {
        let [e] = n.toArray(v.r4.VIDEO);
        r = e.id;
    } else {
        let e = n.toArray().find((e) => e.type === C.lp.USER && e.id !== t && !e.ringing);
        r = e?.id ?? t;
    }
    let [s] = K(e);
    if (s !== C.jd.AUTO && s !== C.jd.NONE) {
        let e = n.getParticipant(s);
        (null == e || (e.type === C.lp.STREAM && null == p.A.getActiveStreamForStreamKey(e.id))) && (s = C.jd.NONE);
    }
    q(e, [s, r]);
}
function X(e) {
    let t = B(e);
    if (0 === t.size()) return;
    let n = ew(e) || Z(t) ? b._Of.VIDEO : b._Of.VOICE;
    if (n === b._Of.VOICE) {
        let t = P[e]?.[b.BRT.APP];
        delete x[e], t !== b.DUB.HAVEN && delete P[e];
    } else x[e] = n;
}
function J(e) {
    delete D[e], delete L[e], delete x[e], delete P[e];
}
function ee() {
    return Y((e) => e.rebuild(), H());
}
function et(e) {
    let { channelId: t, currentVoiceChannelId: n } = e,
        r = !1;
    if ((null != t ? delete w[t] : null != n && (delete U[n], delete V[n], $(n)), t !== n && null != n)) {
        let e = B(n);
        e.guildRingingUsers.forEach((t) => e.updateGuildRingingUsers(t, !1)), (r = Y((e) => e.rebuild(), [n]));
    }
    let i = ee();
    return r || i;
}
function en(e) {
    let { channelId: t, messageId: n } = e,
        r = ee();
    if (null == t || null == n || U[t]) return r;
    let i = g.A.getChannel(t);
    return null != i && i.isGuildVocal() ? ((G[t] = !1), (U[t] = !0), !0) : r;
}
function er(e) {
    let { voiceStates: t, initial: n } = e;
    return t.reduce((e, t) => {
        let { userId: r, channelId: i, guildId: a } = t;
        return (null != a &&
            null != i &&
            f.A.getCurrentConfig({ guildId: a, location: "voice_status_update" }, { autoTrackExposure: !1 }).enabled &&
            B(i).updateGuildRingingUsers(r, !1),
        n && null != i && !O.includes(i))
            ? e
            : W(r) || e;
    }, !1);
}
function ei() {
    return Y((e) => e.updateEmbeddedActivities());
}
function ea(e) {
    let { userId: t } = e;
    return Y((e) => e.updateParticipantSpeaking(t));
}
function es() {
    return Y((e) => e.updateParticipantSpeaking(h.default.getId()));
}
function eo(e) {
    let { user: t } = e;
    return W(t.id);
}
function el(e) {
    let { channelId: t } = e;
    return Y((e) => e.rebuild(), [t]);
}
function eu(e) {
    let { channelId: t } = e;
    return J(t);
}
function ec(e) {
    let { guild: t } = e,
        n = [];
    if (
        (s().forEach(O, (e) => {
            let r = g.A.getChannel(e);
            (null == r || r.getGuildId() === t.id) && n.push(e);
        }),
        0 === n.length)
    )
        return !1;
    s().forEach(n, (e) => J(e));
}
function ed(e) {
    let { channelId: t, participantsOpen: n } = e;
    M[t] = n;
}
function e_(e) {
    let { channelId: t, voiceParticipantsHidden: n } = e;
    k[t] = n;
}
function ef(e) {
    let { channelId: t, selfStreamHidden: n } = e,
        r = h.default.getId();
    if (n) {
        let [e] = K(t);
        (0, _.wL)(e) && e.includes(r) && q(t, null);
    }
    W(r, [t]);
}
function ep(e) {
    let { channelId: t, large: n } = e;
    V[t] = n;
}
function eh(e) {
    let { channelId: t, dismissed: n } = e;
    F[t] = n;
}
function em(e) {
    let { channelId: t, chatOpen: n } = e;
    (U[t] = n), n && (G[t] = !1);
}
function eg(e) {
    let { channelId: t, participantsListOpen: n } = e;
    (G[t] = n), n && (U[t] = !1);
}
function eE(e) {
    let { channelId: t, id: n } = e,
        r = B(t);
    null == n &&
        r.toArray(v.r4.STREAM).forEach((e) => {
            (0, C.Ay)(e) && r.updateParticipant(e.user.id);
        });
    let [, i] = K(t);
    if ((q(t, [n ?? C.jd.NONE, i]), (0, _.wL)(n))) {
        try {
            let { ownerId: e } = (0, _.Iy)(n);
            e === h.default.getId() && W(e, [t]);
        } catch (e) {
            N.warn(`INVALID STREAM KEY FORMAT ${n}`, e);
        }
        Z(r) || (M[t] = !1);
    }
}
function eA(e) {
    let { channelId: t, participantId: n } = e,
        [r] = K(t);
    r === n && q(t, null);
    let i = B(t),
        a = i.getParticipant(n);
    null == a || (a.type !== C.lp.ACTIVITY && (i.updateParticipantPoppedOut(n, !0), W(a.user.id, [t])));
}
function eI(e) {
    let { channelId: t, participantId: n } = e,
        r = B(t);
    r.updateParticipantPoppedOut(n, !1);
    let i = r.getParticipant(n);
    null == i || (i.type !== C.lp.ACTIVITY && W(i.user.id, [t]));
}
function eT(e) {
    let { channel: t } = e;
    if (t.type === b.rbe.GROUP_DM) {
        let e = t.originChannelId;
        if (null != e) return (P[t.id] = { [b.BRT.APP]: P[e]?.[b.BRT.APP] ?? b.DUB.NORMAL }), !0;
    }
    return !1;
}
function ey(e) {
    let {
        channel: { id: t },
    } = e;
    return delete U[t], delete G[t], delete V[t], J(t);
}
function eS(e) {
    let { channelId: t, layout: n, appContext: r } = e;
    P[t] = { ...P[t], [r]: n };
}
function ev(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, _.Iy)(t);
    return W(r, [n]);
}
function eC(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, _.Iy)(t);
    return W(r, [n]);
}
function eb(e) {
    let { channelId: t, userId: n } = e;
    return W(n, [t]);
}
function eN(e) {
    let { channelId: t, userId: n } = e;
    return W(n, [t]);
}
function eR(e) {
    let { userId: t } = e;
    return W(t);
}
function eO(e) {
    let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
    return Y((e) => e.updateParticipantQuality(n, r, i), [t]);
}
function eD(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (!f.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
    let i = B(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !0)), Y((e) => e.rebuild(), [t]);
}
function eL(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (!f.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
    let i = B(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !1)), Y((e) => e.rebuild(), [t]);
}
function ew(e) {
    return !!g.A.getChannel(e)?.isGuildVocalOrThread();
}
function ex(e) {
    return !!g.A.getChannel(e)?.isGuildVocal();
}
function eP(e) {
    return !!g.A.getChannel(e)?.isVocalThread();
}
class eM extends o.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        this.waitFor(p.A, h.default, m.A, g.A, u.Ay, d.default, E.A, A.A, I.A, T.default, y.A, S.A),
            this.syncWith([u.Ay], ei),
            this.syncWith([d.default], ee),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(k, e?.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: k };
    }
    getParticipantsVersion(e) {
        return B(e).version;
    }
    getParticipants(e) {
        return B(e).toArray() ?? R;
    }
    getSpeakingParticipants(e) {
        return B(e).toArray(v.r4.SPEAKING) ?? R;
    }
    getFilteredParticipants(e) {
        let t = B(e);
        return k[e] ? t.toArray(v.r4.FILTERED) : t.toArray(v.r4.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        return B(e).toArray(v.r4.VIDEO) ?? R;
    }
    getStreamParticipants(e) {
        return B(e).toArray(v.r4.STREAM) ?? R;
    }
    getActivityParticipants(e) {
        return B(e).toArray(v.r4.ACTIVITY) ?? R;
    }
    getParticipant(e, t) {
        return B(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = B(e);
        return t.size() - t.size(v.r4.STREAM) - t.size(v.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return M[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return k[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = K(e);
        return t === C.jd.NONE ? null : t !== C.jd.AUTO ? t : n === C.jd.NONE || n === C.jd.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : B(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = w[e];
        return null == t
            ? {}
            : {
                  view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                  view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                  view_mode_toggle_count: t.toggleCount,
              };
    }
    getGuildRingingUsers(e) {
        return B(e).guildRingingUsers;
    }
    getMode(e) {
        return x[e] ?? (ew(e) ? b._Of.VIDEO : b._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.BRT.APP;
        if (__OVERLAY__) return b.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            r = ex(e) || (n && eP(e));
        return P[e]?.[t] ?? (r ? b.DUB.NO_CHAT : b.DUB.NORMAL);
    }
    getChatOpen(e) {
        return U[e] ?? g.A.getChannel(e)?.isVocalThread() ?? !1;
    }
    getAllChatOpen() {
        return U;
    }
    getParticipantsListOpen(e) {
        return G[e] ?? !1;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.BRT.APP;
        return Object.values(P).some((t) => t[e] === b.DUB.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return V[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return F[e];
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
let ek = new eM(l.h, {
    CONNECTION_OPEN: j,
    CONNECTION_OPEN_SUPPLEMENTAL: ee,
    THREAD_LIST_SYNC: ee,
    OVERLAY_INITIALIZE: ee,
    VOICE_CHANNEL_SELECT: et,
    CHANNEL_SELECT: en,
    CHANNEL_RTC_ACTIVE_CHANNELS: ee,
    VOICE_STATE_UPDATES: er,
    CHANNEL_CREATE: eT,
    CHANNEL_DELETE: ey,
    THREAD_DELETE: ey,
    CALL_CREATE: el,
    CALL_UPDATE: el,
    CALL_DELETE: eu,
    CHANNEL_RTC_SELECT_PARTICIPANT: eE,
    CHANNEL_RTC_POPOUT_PARTICIPANT: eA,
    CHANNEL_RTC_RETURN_PARTICIPANT: eI,
    CHANNEL_RTC_UPDATE_LAYOUT: eS,
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: ed,
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: e_,
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: ep,
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: eh,
    STREAM_UPDATE_SELF_HIDDEN: ef,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: em,
    CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: eg,
    RTC_CONNECTION_VIDEO: eb,
    RTC_CONNECTION_PLATFORM: eN,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: eR,
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: eO,
    STREAM_CLOSE: ev,
    STREAM_DELETE: ev,
    STREAM_WATCH: eC,
    SPEAKING: ea,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: ea,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: ea,
    PUSH_TO_TALK_STATE_CHANGE: es,
    GUILD_RING_START: eD,
    GUILD_RING_STOP: eL,
    USER_UPDATE: eo,
    GUILD_MEMBER_UPDATE: eo,
    GUILD_DELETE: ec,
});
