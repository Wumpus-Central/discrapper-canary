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
    p = n(616356),
    h = n(961350),
    m = n(470710),
    g = n(734057),
    E = n(290863),
    A = n(309010),
    I = n(485296),
    T = n(287809),
    S = n(803301),
    y = n(977997),
    v = n(568598),
    C = n(806931),
    N = n(652215);
let b = new c.A("ChannelRTCStore"),
    R = Object.freeze([]),
    O = [],
    D = {},
    L = {},
    w = {},
    x = {},
    M = {},
    P = {},
    k = {},
    U = {},
    G = {},
    F = {};
function V(e) {
    let t = D[e];
    return null == t && ((t = new v.Ay(e)), (D[e] = t)), t;
}
function B() {
    for (let e of O) Q(e);
    J();
}
function j() {
    let e = [],
        t = A.A.getChannelId();
    null != t && e.push(t);
    let n = A.A.getVoiceChannelId();
    null == n || e.includes(n) || e.push(n);
    let r = d.default.getRemoteSessionId(),
        i = y.A.getVoiceStateForSession(h.default.getId(), r);
    i?.channelId != null && e.push(i?.channelId), s().difference(O, e).forEach(Q);
    let a = s().difference(e, O);
    return (O = e), a;
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
    return t.reduce((t, n) => (e(V(n)) ? (Z(n), X(n), !0) : t), !1);
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
    return H((t) => t.updateParticipant(e), t);
}
function W(e) {
    let t = g.A.getChannel(e),
        n = t?.isDM() && 1 ? C.jd.AUTO : C.jd.NONE;
    return L[e] ?? [n, C.jd.NONE];
}
function K(e) {
    if (null == L[e]) return !1;
    let [t] = L[e];
    return t !== C.jd.NONE;
}
function z(e) {
    null == w[e] && (w[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = w[e],
        n = performance.now(),
        r = K(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[r ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function $(e, t) {
    z(e);
    let n = K(e);
    null == t ? delete L[e] : (L[e] = t), n !== K(e) && w[e].toggleCount++;
}
function q(e) {
    return e.size(v.r4.STREAM) > 0 || e.size(v.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function X(e) {
    let t = h.default.getId(),
        n = V(e);
    if (0 === n.size() || A.A.getVoiceChannelId() !== e) return void $(e, null);
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
    let [s] = W(e);
    if (s !== C.jd.AUTO && s !== C.jd.NONE) {
        let e = n.getParticipant(s);
        (null == e || (e.type === C.lp.STREAM && null == p.A.getActiveStreamForStreamKey(e.id))) && (s = C.jd.NONE);
    }
    $(e, [s, r]);
}
function Z(e) {
    let t = V(e);
    if (0 === t.size()) return;
    let n = eD(e) || q(t) ? N._Of.VIDEO : N._Of.VOICE;
    if (n === N._Of.VOICE) {
        let t = M[e]?.[N.BRT.APP];
        delete x[e], t !== N.DUB.HAVEN && delete M[e];
    } else x[e] = n;
}
function Q(e) {
    delete D[e], delete L[e], delete x[e], delete M[e];
}
function J() {
    return H((e) => e.rebuild(), j());
}
function ee(e) {
    let { channelId: t, currentVoiceChannelId: n } = e,
        r = !1;
    if ((null != t ? delete w[t] : null != n && (delete U[n], delete G[n], z(n)), t !== n && null != n)) {
        let e = V(n);
        e.guildRingingUsers.forEach((t) => e.updateGuildRingingUsers(t, !1)), (r = H((e) => e.rebuild(), [n]));
    }
    let i = J();
    return r || i;
}
function et(e) {
    let { channelId: t, messageId: n } = e,
        r = J();
    if (null == t || null == n || U[t]) return r;
    let i = g.A.getChannel(t);
    return null != i && i.isGuildVocal() ? ((U[t] = !0), !0) : r;
}
function en(e) {
    let { voiceStates: t, initial: n } = e;
    return t.reduce((e, t) => {
        let { userId: r, channelId: i, guildId: a } = t;
        return (null != a &&
            null != i &&
            f.A.getCurrentConfig({ guildId: a, location: "voice_status_update" }, { autoTrackExposure: !1 }).enabled &&
            V(i).updateGuildRingingUsers(r, !1),
        n && null != i && !O.includes(i))
            ? e
            : Y(r) || e;
    }, !1);
}
function er() {
    return H((e) => e.updateEmbeddedActivities());
}
function ei(e) {
    let { userId: t } = e;
    return H((e) => e.updateParticipantSpeaking(t));
}
function ea() {
    return H((e) => e.updateParticipantSpeaking(h.default.getId()));
}
function es(e) {
    let { user: t } = e;
    return Y(t.id);
}
function eo(e) {
    let { channelId: t } = e;
    return H((e) => e.rebuild(), [t]);
}
function el(e) {
    let { channelId: t } = e;
    return Q(t);
}
function eu(e) {
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
    s().forEach(n, (e) => Q(e));
}
function ec(e) {
    let { channelId: t, participantsOpen: n } = e;
    P[t] = n;
}
function ed(e) {
    let { channelId: t, voiceParticipantsHidden: n } = e;
    k[t] = n;
}
function e_(e) {
    let { channelId: t, selfStreamHidden: n } = e,
        r = h.default.getId();
    if (n) {
        let [e] = W(t);
        (0, _.wL)(e) && e.includes(r) && $(t, null);
    }
    Y(r, [t]);
}
function ef(e) {
    let { channelId: t, large: n } = e;
    G[t] = n;
}
function ep(e) {
    let { channelId: t, dismissed: n } = e;
    F[t] = n;
}
function eh(e) {
    let { channelId: t, chatOpen: n } = e;
    U[t] = n;
}
function em(e) {
    let { channelId: t, id: n } = e,
        r = V(t);
    null == n &&
        r.toArray(v.r4.STREAM).forEach((e) => {
            (0, C.Ay)(e) && r.updateParticipant(e.user.id);
        });
    let [, i] = W(t);
    if (($(t, [n ?? C.jd.NONE, i]), (0, _.wL)(n))) {
        try {
            let { ownerId: e } = (0, _.Iy)(n);
            e === h.default.getId() && Y(e, [t]);
        } catch (e) {
            b.warn(`INVALID STREAM KEY FORMAT ${n}`, e);
        }
        q(r) || (P[t] = !1);
    }
}
function eg(e) {
    let { channelId: t, participantId: n } = e,
        [r] = W(t);
    r === n && $(t, null);
    let i = V(t),
        a = i.getParticipant(n);
    null == a || (a.type !== C.lp.ACTIVITY && (i.updateParticipantPoppedOut(n, !0), Y(a.user.id, [t])));
}
function eE(e) {
    let { channelId: t, participantId: n } = e,
        r = V(t);
    r.updateParticipantPoppedOut(n, !1);
    let i = r.getParticipant(n);
    null == i || (i.type !== C.lp.ACTIVITY && Y(i.user.id, [t]));
}
function eA(e) {
    let { channel: t } = e;
    if (t.type === N.rbe.GROUP_DM) {
        let e = t.originChannelId;
        if (null != e) return (M[t.id] = { [N.BRT.APP]: M[e]?.[N.BRT.APP] ?? N.DUB.NORMAL }), !0;
    }
    return !1;
}
function eI(e) {
    let {
        channel: { id: t },
    } = e;
    return delete U[t], delete G[t], Q(t);
}
function eT(e) {
    let { channelId: t, layout: n, appContext: r } = e;
    M[t] = { ...M[t], [r]: n };
}
function eS(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, _.Iy)(t);
    return Y(r, [n]);
}
function ey(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, _.Iy)(t);
    return Y(r, [n]);
}
function ev(e) {
    let { channelId: t, userId: n } = e;
    return Y(n, [t]);
}
function eC(e) {
    let { channelId: t, userId: n } = e;
    return Y(n, [t]);
}
function eN(e) {
    let { userId: t } = e;
    return Y(t);
}
function eb(e) {
    let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
    return H((e) => e.updateParticipantQuality(n, r, i), [t]);
}
function eR(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (!f.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
    let i = V(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !0)), H((e) => e.rebuild(), [t]);
}
function eO(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (!f.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
    let i = V(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !1)), H((e) => e.rebuild(), [t]);
}
function eD(e) {
    return !!g.A.getChannel(e)?.isGuildVocalOrThread();
}
function eL(e) {
    return !!g.A.getChannel(e)?.isGuildVocal();
}
function ew(e) {
    return !!g.A.getChannel(e)?.isVocalThread();
}
class ex extends o.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        this.waitFor(p.A, h.default, m.A, g.A, u.Ay, d.default, E.A, A.A, I.A, T.default, S.A, y.A),
            this.syncWith([u.Ay], er),
            this.syncWith([d.default], J),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(k, e?.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: k };
    }
    getParticipantsVersion(e) {
        return V(e).version;
    }
    getParticipants(e) {
        return V(e).toArray() ?? R;
    }
    getSpeakingParticipants(e) {
        return V(e).toArray(v.r4.SPEAKING) ?? R;
    }
    getFilteredParticipants(e) {
        let t = V(e);
        return k[e] ? t.toArray(v.r4.FILTERED) : t.toArray(v.r4.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        return V(e).toArray(v.r4.VIDEO) ?? R;
    }
    getStreamParticipants(e) {
        return V(e).toArray(v.r4.STREAM) ?? R;
    }
    getActivityParticipants(e) {
        return V(e).toArray(v.r4.ACTIVITY) ?? R;
    }
    getParticipant(e, t) {
        return V(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = V(e);
        return t.size() - t.size(v.r4.STREAM) - t.size(v.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return P[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return k[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = W(e);
        return t === C.jd.NONE ? null : t !== C.jd.AUTO ? t : n === C.jd.NONE || n === C.jd.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : V(e).getParticipant(t);
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
        return V(e).guildRingingUsers;
    }
    getMode(e) {
        return x[e] ?? (eD(e) ? N._Of.VIDEO : N._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N.BRT.APP;
        if (__OVERLAY__) return N.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            r = eL(e) || (n && ew(e));
        return M[e]?.[t] ?? (r ? N.DUB.NO_CHAT : N.DUB.NORMAL);
    }
    getChatOpen(e) {
        return U[e] ?? g.A.getChannel(e)?.isVocalThread() ?? !1;
    }
    getAllChatOpen() {
        return U;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.BRT.APP;
        return Object.values(M).some((t) => t[e] === N.DUB.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return G[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return F[e];
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
let eM = new ex(l.h, {
    CONNECTION_OPEN: B,
    CONNECTION_OPEN_SUPPLEMENTAL: J,
    THREAD_LIST_SYNC: J,
    OVERLAY_INITIALIZE: J,
    VOICE_CHANNEL_SELECT: ee,
    CHANNEL_SELECT: et,
    CHANNEL_RTC_ACTIVE_CHANNELS: J,
    VOICE_STATE_UPDATES: en,
    CHANNEL_CREATE: eA,
    CHANNEL_DELETE: eI,
    THREAD_DELETE: eI,
    CALL_CREATE: eo,
    CALL_UPDATE: eo,
    CALL_DELETE: el,
    CHANNEL_RTC_SELECT_PARTICIPANT: em,
    CHANNEL_RTC_POPOUT_PARTICIPANT: eg,
    CHANNEL_RTC_RETURN_PARTICIPANT: eE,
    CHANNEL_RTC_UPDATE_LAYOUT: eT,
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: ec,
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: ed,
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: ef,
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: ep,
    STREAM_UPDATE_SELF_HIDDEN: e_,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: eh,
    RTC_CONNECTION_VIDEO: ev,
    RTC_CONNECTION_PLATFORM: eC,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: eN,
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: eb,
    STREAM_CLOSE: eS,
    STREAM_DELETE: eS,
    STREAM_WATCH: ey,
    SPEAKING: ei,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: ei,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: ei,
    PUSH_TO_TALK_STATE_CHANGE: ea,
    GUILD_RING_START: eR,
    GUILD_RING_STOP: eO,
    USER_UPDATE: es,
    GUILD_MEMBER_UPDATE: es,
    GUILD_DELETE: eu,
});
