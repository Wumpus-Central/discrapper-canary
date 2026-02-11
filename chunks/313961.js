"use strict";
n.d(t, { A: () => eM }), n(321073);
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
    h = n(616356),
    p = n(961350),
    g = n(470710),
    E = n(734057),
    A = n(290863),
    I = n(309010),
    T = n(485296),
    y = n(287809),
    S = n(803301),
    v = n(977997),
    C = n(568598),
    b = n(806931),
    N = n(652215);
let R = new c.A("ChannelRTCStore"),
    O = Object.freeze([]),
    D = [],
    L = {},
    w = {},
    x = {},
    P = {},
    M = {},
    k = {},
    U = {},
    G = {},
    F = {},
    V = {};
function B(e) {
    let t = L[e];
    return null == t && ((t = new C.Ay(e)), (L[e] = t)), t;
}
function j() {
    for (let e of D) J(e);
    ee();
}
function H() {
    let e = [],
        t = I.A.getChannelId();
    null != t && e.push(t);
    let n = I.A.getVoiceChannelId();
    null == n || e.includes(n) || e.push(n);
    let r = d.default.getRemoteSessionId(),
        i = v.A.getVoiceStateForSession(p.default.getId(), r);
    i?.channelId != null && e.push(i?.channelId), s().difference(D, e).forEach(J);
    let a = s().difference(e, D);
    return (D = e), a;
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
    return t.reduce((t, n) => (e(B(n)) ? (Q(n), Z(n), !0) : t), !1);
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
    return Y((t) => t.updateParticipant(e), t);
}
function K(e) {
    let t = E.A.getChannel(e),
        n = t?.isDM() && 1 ? b.jd.AUTO : b.jd.NONE;
    return w[e] ?? [n, b.jd.NONE];
}
function $(e) {
    if (null == w[e]) return !1;
    let [t] = w[e];
    return t !== b.jd.NONE;
}
function z(e) {
    null == x[e] && (x[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = x[e],
        n = performance.now(),
        r = $(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[r ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function q(e, t) {
    z(e);
    let n = $(e);
    null == t ? delete w[e] : (w[e] = t), n !== $(e) && x[e].toggleCount++;
}
function X(e) {
    return e.size(C.r4.STREAM) > 0 || e.size(C.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function Z(e) {
    let t = p.default.getId(),
        n = B(e);
    if (0 === n.size() || I.A.getVoiceChannelId() !== e) return void q(e, null);
    let r = b.jd.NONE,
        a = n.toArray(C.r4.STREAM).find((e) => e.type === b.lp.STREAM && h.A.getActiveStreamForStreamKey(e.id));
    if (null != a) i()(a.type === b.lp.STREAM, "Impossible condition"), (r = a.id);
    else if (1 === n.size()) r = t;
    else if (1 === n.size(C.r4.VIDEO)) {
        let [e] = n.toArray(C.r4.VIDEO);
        r = e.id;
    } else {
        let e = n.toArray().find((e) => e.type === b.lp.USER && e.id !== t && !e.ringing);
        r = e?.id ?? t;
    }
    let [s] = K(e);
    if (s !== b.jd.AUTO && s !== b.jd.NONE) {
        let e = n.getParticipant(s);
        (null == e || (e.type === b.lp.STREAM && null == h.A.getActiveStreamForStreamKey(e.id))) && (s = b.jd.NONE);
    }
    q(e, [s, r]);
}
function Q(e) {
    let t = B(e);
    if (0 === t.size()) return;
    let n = eL(e) || X(t) ? N._Of.VIDEO : N._Of.VOICE;
    if (n === N._Of.VOICE) {
        let t = M[e]?.[N.BRT.APP];
        delete P[e], t !== N.DUB.HAVEN && delete M[e];
    } else P[e] = n;
}
function J(e) {
    delete L[e], delete w[e], delete P[e], delete M[e];
}
function ee() {
    return Y((e) => e.rebuild(), H());
}
function et(e) {
    let { channelId: t, currentVoiceChannelId: n } = e,
        r = !1;
    if ((null != t ? delete x[t] : null != n && (delete G[n], delete F[n], z(n)), t !== n && null != n)) {
        let e = B(n);
        e.guildRingingUsers.forEach((t) => e.updateGuildRingingUsers(t, !1)), (r = Y((e) => e.rebuild(), [n]));
    }
    let i = ee();
    return r || i;
}
function en(e) {
    let { channelId: t, messageId: n } = e,
        r = ee();
    if (null == t || null == n || G[t]) return r;
    let i = E.A.getChannel(t);
    return null != i && i.isGuildVocal() ? ((G[t] = !0), !0) : r;
}
function er(e) {
    let { voiceStates: t, initial: n } = e;
    return t.reduce((e, t) => {
        let { userId: r, channelId: i, guildId: a } = t;
        return (null != a &&
            null != i &&
            f.A.getCurrentConfig({ guildId: a, location: "voice_status_update" }, { autoTrackExposure: !1 }).enabled &&
            B(i).updateGuildRingingUsers(r, !1),
        n && null != i && !D.includes(i))
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
    return Y((e) => e.updateParticipantSpeaking(p.default.getId()));
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
        (s().forEach(D, (e) => {
            let r = E.A.getChannel(e);
            (null == r || r.getGuildId() === t.id) && n.push(e);
        }),
        0 === n.length)
    )
        return !1;
    s().forEach(n, (e) => J(e));
}
function ed(e) {
    let { channelId: t, participantsOpen: n } = e;
    k[t] = n;
}
function e_(e) {
    let { channelId: t, voiceParticipantsHidden: n } = e;
    U[t] = n;
}
function ef(e) {
    let { channelId: t, selfStreamHidden: n } = e,
        r = p.default.getId();
    if (n) {
        let [e] = K(t);
        (0, _.wL)(e) && e.includes(r) && q(t, null);
    }
    W(r, [t]);
}
function eh(e) {
    let { channelId: t, large: n } = e;
    F[t] = n;
}
function ep(e) {
    let { channelId: t, dismissed: n } = e;
    V[t] = n;
}
function em(e) {
    let { channelId: t, chatOpen: n } = e;
    G[t] = n;
}
function eg(e) {
    let { channelId: t, id: n } = e,
        r = B(t);
    null == n &&
        r.toArray(C.r4.STREAM).forEach((e) => {
            (0, b.Ay)(e) && r.updateParticipant(e.user.id);
        });
    let [, i] = K(t);
    if ((q(t, [n ?? b.jd.NONE, i]), (0, _.wL)(n))) {
        try {
            let { ownerId: e } = (0, _.Iy)(n);
            e === p.default.getId() && W(e, [t]);
        } catch (e) {
            R.warn(`INVALID STREAM KEY FORMAT ${n}`, e);
        }
        X(r) || (k[t] = !1);
    }
}
function eE(e) {
    let { channelId: t, participantId: n } = e,
        [r] = K(t);
    r === n && q(t, null);
    let i = B(t),
        a = i.getParticipant(n);
    null == a || (a.type !== b.lp.ACTIVITY && (i.updateParticipantPoppedOut(n, !0), W(a.user.id, [t])));
}
function eA(e) {
    let { channelId: t, participantId: n } = e,
        r = B(t);
    r.updateParticipantPoppedOut(n, !1);
    let i = r.getParticipant(n);
    null == i || (i.type !== b.lp.ACTIVITY && W(i.user.id, [t]));
}
function eI(e) {
    let { channel: t } = e;
    if (t.type === N.rbe.GROUP_DM) {
        let e = t.originChannelId;
        if (null != e) return (M[t.id] = { [N.BRT.APP]: M[e]?.[N.BRT.APP] ?? N.DUB.NORMAL }), !0;
    }
    return !1;
}
function eT(e) {
    let {
        channel: { id: t },
    } = e;
    return delete G[t], delete F[t], J(t);
}
function ey(e) {
    let { channelId: t, layout: n, appContext: r } = e;
    M[t] = { ...M[t], [r]: n };
}
function eS(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, _.Iy)(t);
    return W(r, [n]);
}
function ev(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, _.Iy)(t);
    return W(r, [n]);
}
function eC(e) {
    let { channelId: t, userId: n } = e;
    return W(n, [t]);
}
function eb(e) {
    let { channelId: t, userId: n } = e;
    return W(n, [t]);
}
function eN(e) {
    let { userId: t } = e;
    return W(t);
}
function eR(e) {
    let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
    return Y((e) => e.updateParticipantQuality(n, r, i), [t]);
}
function eO(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (!f.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
    let i = B(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !0)), Y((e) => e.rebuild(), [t]);
}
function eD(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (!f.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
    let i = B(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !1)), Y((e) => e.rebuild(), [t]);
}
function eL(e) {
    return !!E.A.getChannel(e)?.isGuildVocalOrThread();
}
function ew(e) {
    return !!E.A.getChannel(e)?.isGuildVocal();
}
function ex(e) {
    return !!E.A.getChannel(e)?.isVocalThread();
}
class eP extends o.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        this.waitFor(h.A, p.default, g.A, E.A, u.Ay, d.default, A.A, I.A, T.A, y.default, S.A, v.A),
            this.syncWith([u.Ay], ei),
            this.syncWith([d.default], ee),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(U, e?.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: U };
    }
    getParticipantsVersion(e) {
        return B(e).version;
    }
    getParticipants(e) {
        return B(e).toArray() ?? O;
    }
    getSpeakingParticipants(e) {
        return B(e).toArray(C.r4.SPEAKING) ?? O;
    }
    getFilteredParticipants(e) {
        let t = B(e);
        return U[e] ? t.toArray(C.r4.FILTERED) : t.toArray(C.r4.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        return B(e).toArray(C.r4.VIDEO) ?? O;
    }
    getStreamParticipants(e) {
        return B(e).toArray(C.r4.STREAM) ?? O;
    }
    getActivityParticipants(e) {
        return B(e).toArray(C.r4.ACTIVITY) ?? O;
    }
    getParticipant(e, t) {
        return B(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = B(e);
        return t.size() - t.size(C.r4.STREAM) - t.size(C.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return k[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return U[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = K(e);
        return t === b.jd.NONE ? null : t !== b.jd.AUTO ? t : n === b.jd.NONE || n === b.jd.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : B(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = x[e];
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
        return P[e] ?? (eL(e) ? N._Of.VIDEO : N._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N.BRT.APP;
        if (__OVERLAY__) return N.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            r = ew(e) || (n && ex(e));
        return M[e]?.[t] ?? (r ? N.DUB.NO_CHAT : N.DUB.NORMAL);
    }
    getChatOpen(e) {
        return G[e] ?? E.A.getChannel(e)?.isVocalThread() ?? !1;
    }
    getAllChatOpen() {
        return G;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.BRT.APP;
        return Object.values(M).some((t) => t[e] === N.DUB.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return F[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return V[e];
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
let eM = new eP(l.h, {
    CONNECTION_OPEN: j,
    CONNECTION_OPEN_SUPPLEMENTAL: ee,
    THREAD_LIST_SYNC: ee,
    OVERLAY_INITIALIZE: ee,
    VOICE_CHANNEL_SELECT: et,
    CHANNEL_SELECT: en,
    CHANNEL_RTC_ACTIVE_CHANNELS: ee,
    VOICE_STATE_UPDATES: er,
    CHANNEL_CREATE: eI,
    CHANNEL_DELETE: eT,
    THREAD_DELETE: eT,
    CALL_CREATE: el,
    CALL_UPDATE: el,
    CALL_DELETE: eu,
    CHANNEL_RTC_SELECT_PARTICIPANT: eg,
    CHANNEL_RTC_POPOUT_PARTICIPANT: eE,
    CHANNEL_RTC_RETURN_PARTICIPANT: eA,
    CHANNEL_RTC_UPDATE_LAYOUT: ey,
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: ed,
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: e_,
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: eh,
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: ep,
    STREAM_UPDATE_SELF_HIDDEN: ef,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: em,
    RTC_CONNECTION_VIDEO: eC,
    RTC_CONNECTION_PLATFORM: eb,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: eN,
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: eR,
    STREAM_CLOSE: eS,
    STREAM_DELETE: eS,
    STREAM_WATCH: ev,
    SPEAKING: ea,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: ea,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: ea,
    PUSH_TO_TALK_STATE_CHANGE: es,
    GUILD_RING_START: eO,
    GUILD_RING_STOP: eD,
    USER_UPDATE: eo,
    GUILD_MEMBER_UPDATE: eo,
    GUILD_DELETE: ec,
});
