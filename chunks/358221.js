n.d(t, { Z: () => ew }), n(47120), n(653041), n(724458);
var i,
    r = n(512722),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(317381),
    d = n(710845),
    f = n(258609),
    _ = n(569545),
    p = n(163612),
    h = n(199902),
    m = n(314897),
    g = n(523746),
    E = n(592125),
    v = n(158776),
    y = n(944486),
    I = n(606304),
    T = n(594174),
    b = n(33039),
    S = n(979651),
    A = n(413523),
    N = n(354459),
    C = n(981631);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let O = new d.Z('ChannelRTCStore'),
    D = Object.freeze([]),
    x = [],
    L = {},
    P = {},
    w = {},
    M = {},
    k = {},
    U = {},
    G = {},
    B = {},
    Z = {},
    F = {},
    V = {};
function j(e) {
    let t = L[e];
    return null == t && ((t = new A.ZP(e)), (L[e] = t)), t;
}
function H() {
    for (let e of x) et(e);
    en();
}
function Y() {
    let e = [],
        t = y.Z.getChannelId();
    null != t && e.push(t);
    let n = y.Z.getVoiceChannelId();
    null == n || e.includes(n) || e.push(n);
    let i = f.Z.getRemoteSessionId(),
        r = S.Z.getVoiceStateForSession(m.default.getId(), i);
    (null == r ? void 0 : r.channelId) != null && e.push(null == r ? void 0 : r.channelId), o().difference(x, e).forEach(et);
    let a = o().difference(e, x);
    return (x = e), a;
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x;
    return t.reduce((t, n) => (e(j(n)) ? (ee(n), $(n), !0) : t), !1);
}
function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x;
    return W((t) => t.updateParticipant(e), t);
}
function z(e) {
    var t;
    let n = E.Z.getChannel(e),
        i = (null == n ? void 0 : n.isDM()) ? N.dF.AUTO : N.dF.NONE;
    return null !== (t = P[e]) && void 0 !== t ? t : [i, N.dF.NONE];
}
function q(e) {
    if (null == P[e]) return !1;
    let [t] = P[e];
    return t !== N.dF.NONE;
}
function Q(e) {
    null == w[e] &&
        (w[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0
        });
    let t = w[e],
        n = performance.now(),
        i = q(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[i ? 'focusDurationMs' : 'gridDurationMs'] += e;
    }
    t.lastUpdate = n;
}
function X(e, t) {
    Q(e);
    let n = q(e);
    null == t ? delete P[e] : (P[e] = t), n !== q(e) && w[e].toggleCount++;
}
function J(e) {
    return e.size(A.sI.STREAM) > 0 || e.size(A.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function $(e) {
    let t = m.default.getId(),
        n = j(e);
    if (0 === n.size() || y.Z.getVoiceChannelId() !== e) {
        X(e, null);
        return;
    }
    let i = N.dF.NONE,
        r = n.toArray(A.sI.STREAM).find((e) => e.type === N.fO.STREAM && h.Z.getActiveStreamForStreamKey(e.id));
    if (null != r) a()(r.type === N.fO.STREAM, 'Impossible condition'), (i = r.id);
    else if (1 === n.size()) i = t;
    else if (1 === n.size(A.sI.VIDEO)) {
        let [e] = n.toArray(A.sI.VIDEO);
        i = e.id;
    } else {
        var s;
        let e = n.toArray().find((e) => e.type === N.fO.USER && e.id !== t && !e.ringing);
        i = null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : t;
    }
    let [o] = z(e);
    if (o !== N.dF.AUTO && o !== N.dF.NONE) {
        let e = n.getParticipant(o);
        (null == e || (e.type === N.fO.STREAM && null == h.Z.getActiveStreamForStreamKey(e.id))) && (o = N.dF.NONE);
    }
    X(e, [o, i]);
}
function ee(e) {
    let t = j(e);
    if (0 === t.size()) return;
    let n = eL(e) || J(t) ? C.WtW.VIDEO : C.WtW.VOICE;
    n === C.WtW.VOICE ? (delete M[e], delete k[e]) : (M[e] = n);
}
function et(e) {
    delete L[e], delete P[e], delete M[e], delete k[e];
}
function en() {
    return W((e) => e.rebuild(), Y());
}
function ei(e) {
    let { channelId: t, currentVoiceChannelId: n } = e;
    return null != t ? delete w[t] : null != n && (delete B[n], delete F[n], Q(n)), en();
}
function er(e) {
    let { channelId: t, messageId: n } = e,
        i = en(),
        r = E.Z.getChannel(t);
    return null == t || null == n || ((null == r ? void 0 : r.type) !== C.d4z.GUILD_VOICE && (null == r ? void 0 : r.type) !== C.d4z.GUILD_STAGE_VOICE) || B[t] ? i : ((Z[t] = !1), (B[t] = !0), !0);
}
function ea(e) {
    let { voiceStates: t, initial: n } = e;
    return t.reduce((e, t) => {
        let { userId: i, channelId: r, guildId: a } = t;
        return (null != a &&
            null != r &&
            p.Z.getCurrentConfig(
                {
                    guildId: a,
                    location: 'voice_status_update'
                },
                { autoTrackExposure: !1 }
            ).enabled &&
            j(r).updateGuildRingingUsers(i, !1),
        n && null != r && !x.includes(r))
            ? e
            : K(i) || e;
    }, !1);
}
function es() {
    return W((e) => e.updateEmbeddedActivities());
}
function eo() {
    v.Z.getUserIds().forEach((e) => K(e));
}
function el(e) {
    let { userId: t } = e;
    return W((e) => e.updateParticipantSpeaking(t));
}
function eu(e) {
    let { user: t } = e;
    return K(t.id);
}
function ec(e) {
    let { channelId: t } = e;
    return W((e) => e.rebuild(), [t]);
}
function ed(e) {
    let { channelId: t } = e;
    return et(t);
}
function ef(e) {
    let { guild: t } = e,
        n = [];
    if (
        (o().forEach(x, (e) => {
            let i = E.Z.getChannel(e);
            (null == i || i.getGuildId() === t.id) && n.push(e);
        }),
        0 === n.length)
    )
        return !1;
    o().forEach(n, (e) => et(e));
}
function e_(e) {
    let { channelId: t, participantsOpen: n } = e;
    U[t] = n;
}
function ep(e) {
    let { channelId: t, voiceParticipantsHidden: n } = e;
    G[t] = n;
}
function eh(e) {
    let { channelId: t, selfStreamHidden: n } = e,
        i = m.default.getId();
    if (n) {
        let [e] = z(t);
        (0, _.DB)(e) && e.includes(i) && X(t, null);
    }
    K(i, [t]);
}
function em(e) {
    let { channelId: t, large: n } = e;
    F[t] = n;
}
function eg(e) {
    let { channelId: t, dismissed: n } = e;
    V[t] = n;
}
function eE(e) {
    let { channelId: t, chatOpen: n } = e;
    (B[t] = n), n && (Z[t] = !1);
}
function ev(e) {
    let { channelId: t, participantsListOpen: n } = e;
    (Z[t] = n), n && (B[t] = !1);
}
function ey(e) {
    let { channelId: t, id: n } = e,
        i = j(t);
    null == n &&
        i.toArray(A.sI.STREAM).forEach((e) => {
            (0, N._5)(e) && i.updateParticipant(e.user.id);
        });
    let [, r] = z(t);
    if ((X(t, [null != n ? n : N.dF.NONE, r]), (0, _.DB)(n))) {
        try {
            let { ownerId: e } = (0, _.my)(n);
            e === m.default.getId() && K(e, [t]);
        } catch (e) {
            O.warn('INVALID STREAM KEY FORMAT '.concat(n), e);
        }
        J(i) || (U[t] = !1);
    }
}
function eI(e) {
    let { channel: t } = e;
    if (t.type === C.d4z.GROUP_DM) {
        let e = t.originChannelId;
        if (null != e) {
            var n, i;
            return (k[t.id] = { [C.IlC.APP]: null !== (i = null === (n = k[e]) || void 0 === n ? void 0 : n[C.IlC.APP]) && void 0 !== i ? i : C.AEg.NORMAL }), !0;
        }
    }
    return !1;
}
function eT(e) {
    let {
        channel: { id: t }
    } = e;
    return delete B[t], delete Z[t], delete F[t], et(t);
}
function eb(e) {
    let { channelId: t, layout: n, appContext: i } = e;
    k[t] = {
        ...k[t],
        [i]: n
    };
}
function eS(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: i } = (0, _.my)(t);
    return K(i, [n]);
}
function eA(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: i } = (0, _.my)(t);
    return K(i, [n]);
}
function eN(e) {
    let { channelId: t, userId: n } = e;
    return K(n, [t]);
}
function eC(e) {
    let { channelId: t, userId: n } = e;
    return K(n, [t]);
}
function eR(e) {
    let { userId: t } = e;
    return K(t);
}
function eO(e) {
    let { channelId: t, senderUserId: n, maxResolution: i, maxFrameRate: r } = e;
    return W((e) => e.updateParticipantQuality(n, i, r), [t]);
}
function eD(e) {
    let { channelId: t, guildId: n, ringing: i } = e;
    if (
        !p.Z.getCurrentConfig({
            guildId: n,
            location: 'guild_ring_start'
        }).enabled
    )
        return !1;
    let r = j(t);
    return i.forEach((e) => r.updateGuildRingingUsers(e, !0)), W((e) => e.rebuild(), [t]);
}
function ex(e) {
    let { channelId: t, guildId: n, ringing: i } = e;
    if (
        !p.Z.getCurrentConfig({
            guildId: n,
            location: 'guild_ring_start'
        }).enabled
    )
        return !1;
    let r = j(t);
    return i.forEach((e) => r.updateGuildRingingUsers(e, !1)), W((e) => e.rebuild(), [t]);
}
function eL(e) {
    var t;
    return !!(null === (t = E.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal());
}
class eP extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(h.Z, m.default, g.Z, E.Z, c.ZP, v.Z, y.Z, I.Z, T.default, b.Z, S.Z), this.syncWith([c.ZP], es), this.syncWith([v.Z], eo), this.syncWith([f.Z], en), (null == e ? void 0 : e.voiceParticipantsHidden) !== void 0 && Object.assign(G, null == e ? void 0 : e.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: G };
    }
    getParticipantsVersion(e) {
        return j(e).version;
    }
    getParticipants(e) {
        var t;
        return null !== (t = j(e).toArray()) && void 0 !== t ? t : D;
    }
    getSpeakingParticipants(e) {
        var t;
        return null !== (t = j(e).toArray(A.sI.SPEAKING)) && void 0 !== t ? t : D;
    }
    getFilteredParticipants(e) {
        return G[e] ? j(e).toArray(A.sI.FILTERED) : j(e).toArray();
    }
    getVideoParticipants(e) {
        var t;
        return null !== (t = j(e).toArray(A.sI.VIDEO)) && void 0 !== t ? t : D;
    }
    getStreamParticipants(e) {
        var t;
        return null !== (t = j(e).toArray(A.sI.STREAM)) && void 0 !== t ? t : D;
    }
    getActivityParticipants(e) {
        var t;
        return null !== (t = j(e).toArray(A.sI.ACTIVITY)) && void 0 !== t ? t : D;
    }
    getParticipant(e, t) {
        return j(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = j(e);
        return t.size() - t.size(A.sI.STREAM) - t.size(A.sI.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var t;
        return null === (t = U[e]) || void 0 === t || t;
    }
    getVoiceParticipantsHidden(e) {
        var t;
        return null !== (t = G[e]) && void 0 !== t && t;
    }
    getSelectedParticipantId(e) {
        let [t, n] = z(e);
        return t === N.dF.NONE ? null : t !== N.dF.AUTO ? t : n === N.dF.NONE || n === N.dF.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : j(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = w[e];
        return null == t
            ? {}
            : {
                  view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                  view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                  view_mode_toggle_count: t.toggleCount
              };
    }
    getGuildRingingUsers(e) {
        return j(e).guildRingingUsers;
    }
    getMode(e) {
        var t;
        return null !== (t = M[e]) && void 0 !== t ? t : eL(e) ? C.WtW.VIDEO : C.WtW.VOICE;
    }
    getLayout(e) {
        var t, n;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.IlC.APP;
        if (__OVERLAY__) return C.AEg.NORMAL;
        let r = eL(e);
        return null !== (n = null === (t = k[e]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : r ? C.AEg.NO_CHAT : C.AEg.NORMAL;
    }
    getChatOpen(e) {
        var t;
        return null !== (t = B[e]) && void 0 !== t && t;
    }
    getAllChatOpen() {
        return B;
    }
    getParticipantsListOpen(e) {
        var t;
        return null !== (t = Z[e]) && void 0 !== t && t;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.IlC.APP;
        return Object.values(k).some((t) => t[e] === C.AEg.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return F[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return V[e];
    }
}
R(eP, 'displayName', 'ChannelRTCStore'), R(eP, 'persistKey', 'ChannelRTCStore');
let ew = new eP(u.Z, {
    CONNECTION_OPEN: H,
    CONNECTION_OPEN_SUPPLEMENTAL: en,
    THREAD_LIST_SYNC: en,
    OVERLAY_INITIALIZE: en,
    VOICE_CHANNEL_SELECT: ei,
    CHANNEL_SELECT: er,
    CHANNEL_RTC_ACTIVE_CHANNELS: en,
    VOICE_STATE_UPDATES: ea,
    CHANNEL_CREATE: eI,
    CHANNEL_DELETE: eT,
    THREAD_DELETE: eT,
    CALL_CREATE: ec,
    CALL_UPDATE: ec,
    CALL_DELETE: ed,
    CHANNEL_RTC_SELECT_PARTICIPANT: ey,
    CHANNEL_RTC_UPDATE_LAYOUT: eb,
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: e_,
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: ep,
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: em,
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: eg,
    STREAM_UPDATE_SELF_HIDDEN: eh,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: eE,
    CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: ev,
    RTC_CONNECTION_VIDEO: eN,
    RTC_CONNECTION_PLATFORM: eC,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: eR,
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: eO,
    STREAM_CLOSE: eS,
    STREAM_DELETE: eS,
    STREAM_WATCH: eA,
    SPEAKING: el,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: el,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: el,
    GUILD_RING_START: eD,
    GUILD_RING_STOP: ex,
    USER_UPDATE: eu,
    GUILD_MEMBER_UPDATE: eu,
    GUILD_DELETE: ef
});
