var i,
    a = r(47120);
var s = r(653041);
var o = r(724458);
var l = r(512722),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(442837),
    _ = r(570140),
    h = r(317381),
    p = r(710845),
    m = r(258609),
    g = r(569545),
    E = r(199902),
    v = r(314897),
    I = r(523746),
    T = r(592125),
    b = r(944486),
    y = r(606304),
    S = r(594174),
    A = r(33039),
    N = r(979651),
    C = r(413523),
    R = r(354459),
    O = r(981631);
function D(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let L = new p.Z('ChannelRTCStore'),
    x = Object.freeze([]),
    w = [],
    P = {},
    M = {},
    k = {},
    U = {},
    B = {},
    G = {},
    F = {},
    Z = {},
    V = {},
    j = {},
    H = {};
function Y(e) {
    let n = P[e];
    return null == n && ((n = new C.ZP(e)), (P[e] = n)), n;
}
function W() {
    for (let e of w) er(e);
    ei();
}
function K() {
    let e = [],
        n = b.Z.getChannelId();
    null != n && e.push(n);
    let r = b.Z.getVoiceChannelId();
    null != r && !e.includes(r) && e.push(r);
    let i = m.Z.getRemoteSessionId(),
        a = N.Z.getVoiceStateForSession(v.default.getId(), i);
    (null == a ? void 0 : a.channelId) != null && e.push(null == a ? void 0 : a.channelId), d().difference(w, e).forEach(er);
    let s = d().difference(e, w);
    return (w = e), s;
}
function z(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
    return n.reduce((n, r) => (e(Y(r)) ? (en(r), et(r), !0) : n), !1);
}
function q(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
    return z((n) => n.updateParticipant(e), n);
}
function Q(e) {
    var n;
    let r = T.Z.getChannel(e),
        i = (null == r ? void 0 : r.isDM()) ? R.dF.AUTO : R.dF.NONE;
    return null !== (n = M[e]) && void 0 !== n ? n : [i, R.dF.NONE];
}
function X(e) {
    if (null == M[e]) return !1;
    let [n] = M[e];
    return n !== R.dF.NONE;
}
function J(e) {
    null == k[e] &&
        (k[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0
        });
    let n = k[e],
        r = performance.now(),
        i = X(e);
    if (n.lastUpdate > 0) {
        let e = r - n.lastUpdate;
        n[i ? 'focusDurationMs' : 'gridDurationMs'] += e;
    }
    n.lastUpdate = r;
}
function $(e, n) {
    J(e);
    let r = X(e);
    null == n ? delete M[e] : (M[e] = n), r !== X(e) && k[e].toggleCount++;
}
function ee(e) {
    return e.size(C.sI.STREAM) > 0 || e.size(C.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function et(e) {
    let n = v.default.getId(),
        r = Y(e);
    if (0 === r.size() || b.Z.getVoiceChannelId() !== e) {
        $(e, null);
        return;
    }
    let i = R.dF.NONE,
        a = r.toArray(C.sI.STREAM).find((e) => e.type === R.fO.STREAM && E.Z.getActiveStreamForStreamKey(e.id));
    if (null != a) u()(a.type === R.fO.STREAM, 'Impossible condition'), (i = a.id);
    else if (1 === r.size()) i = n;
    else if (1 === r.size(C.sI.VIDEO)) {
        let [e] = r.toArray(C.sI.VIDEO);
        i = e.id;
    } else {
        var s;
        let e = r.toArray().find((e) => e.type === R.fO.USER && e.id !== n && !e.ringing);
        i = null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : n;
    }
    let [o] = Q(e);
    if (o !== R.dF.AUTO && o !== R.dF.NONE) {
        let e = r.getParticipant(o);
        (null == e || (e.type === R.fO.STREAM && null == E.Z.getActiveStreamForStreamKey(e.id))) && (o = R.dF.NONE);
    }
    $(e, [o, i]);
}
function en(e) {
    let n = Y(e);
    if (0 === n.size()) return;
    let r = eL(e) || ee(n) ? O.WtW.VIDEO : O.WtW.VOICE;
    r === O.WtW.VOICE ? (delete U[e], delete B[e]) : (U[e] = r);
}
function er(e) {
    delete P[e], delete M[e], delete U[e], delete B[e];
}
function ei() {
    return z((e) => e.rebuild(), K());
}
function ea(e) {
    let { channelId: n, currentVoiceChannelId: r } = e;
    return null != n ? delete k[n] : null != r && (delete Z[r], delete j[r], J(r)), ei();
}
function es(e) {
    let { channelId: n, messageId: r } = e,
        i = ei(),
        a = T.Z.getChannel(n);
    return null == n || null == r || ((null == a ? void 0 : a.type) !== O.d4z.GUILD_VOICE && (null == a ? void 0 : a.type) !== O.d4z.GUILD_STAGE_VOICE) || Z[n] ? i : ((V[n] = !1), (Z[n] = !0), !0);
}
function eo(e) {
    let { voiceStates: n, initial: r } = e;
    return n.reduce((e, n) => {
        let { userId: i, channelId: a } = n;
        return r && null != a && !w.includes(a) ? e : q(i) || e;
    }, !1);
}
function el() {
    return z((e) => e.updateEmbeddedActivities());
}
function eu(e) {
    let { userId: n } = e;
    return z((e) => e.updateParticipantSpeaking(n));
}
function ec(e) {
    let { user: n } = e;
    return q(n.id);
}
function ed(e) {
    let { channelId: n } = e;
    return z((e) => e.rebuild(), [n]);
}
function ef(e) {
    let { channelId: n } = e;
    return er(n);
}
function e_(e) {
    let { guild: n } = e,
        r = [];
    if (
        (d().forEach(w, (e) => {
            let i = T.Z.getChannel(e);
            (null == i || i.getGuildId() === n.id) && r.push(e);
        }),
        0 === r.length)
    )
        return !1;
    d().forEach(r, (e) => er(e));
}
function eh(e) {
    let { channelId: n, participantsOpen: r } = e;
    G[n] = r;
}
function ep(e) {
    let { channelId: n, voiceParticipantsHidden: r } = e;
    F[n] = r;
}
function em(e) {
    let { channelId: n, selfStreamHidden: r } = e,
        i = v.default.getId();
    if (r) {
        let [e] = Q(n);
        (0, g.DB)(e) && e.includes(i) && $(n, null);
    }
    q(i, [n]);
}
function eg(e) {
    let { channelId: n, large: r } = e;
    j[n] = r;
}
function eE(e) {
    let { channelId: n, dismissed: r } = e;
    H[n] = r;
}
function ev(e) {
    let { channelId: n, chatOpen: r } = e;
    (Z[n] = r), r && (V[n] = !1);
}
function eI(e) {
    let { channelId: n, participantsListOpen: r } = e;
    (V[n] = r), r && (Z[n] = !1);
}
function eT(e) {
    let { channelId: n, id: r } = e,
        i = Y(n);
    null == r &&
        i.toArray(C.sI.STREAM).forEach((e) => {
            (0, R._5)(e) && i.updateParticipant(e.user.id);
        });
    let [, a] = Q(n);
    if (($(n, [null != r ? r : R.dF.NONE, a]), (0, g.DB)(r))) {
        try {
            let { ownerId: e } = (0, g.my)(r);
            e === v.default.getId() && q(e, [n]);
        } catch (e) {
            L.warn('INVALID STREAM KEY FORMAT '.concat(r), e);
        }
        !ee(i) && (G[n] = !1);
    }
}
function eb(e) {
    let { channel: n } = e;
    if (n.type === O.d4z.GROUP_DM) {
        let e = n.originChannelId;
        if (null != e) {
            var r, i;
            return (B[n.id] = { [O.IlC.APP]: null !== (i = null === (r = B[e]) || void 0 === r ? void 0 : r[O.IlC.APP]) && void 0 !== i ? i : O.AEg.NORMAL }), !0;
        }
    }
    return !1;
}
function ey(e) {
    let {
        channel: { id: n }
    } = e;
    return delete Z[n], delete V[n], delete j[n], er(n);
}
function eS(e) {
    let { channelId: n, layout: r, appContext: i } = e;
    B[n] = {
        ...B[n],
        [i]: r
    };
}
function eA(e) {
    let { streamKey: n } = e,
        { channelId: r, ownerId: i } = (0, g.my)(n);
    return q(i, [r]);
}
function eN(e) {
    let { streamKey: n } = e,
        { channelId: r, ownerId: i } = (0, g.my)(n);
    return q(i, [r]);
}
function eC(e) {
    let { channelId: n, userId: r } = e;
    return q(r, [n]);
}
function eR(e) {
    let { channelId: n, userId: r } = e;
    return q(r, [n]);
}
function eO(e) {
    let { userId: n } = e;
    return q(n);
}
function eD(e) {
    let { channelId: n, senderUserId: r, maxResolution: i, maxFrameRate: a } = e;
    return z((e) => e.updateParticipantQuality(r, i, a), [n]);
}
function eL(e) {
    var n;
    return !!(null === (n = T.Z.getChannel(e)) || void 0 === n ? void 0 : n.isGuildVocal());
}
class ex extends (i = f.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(E.Z, v.default, I.Z, T.Z, h.ZP, b.Z, y.Z, S.default, A.Z, N.Z), this.syncWith([h.ZP], el), this.syncWith([m.Z], ei), (null == e ? void 0 : e.voiceParticipantsHidden) !== void 0 && Object.assign(F, null == e ? void 0 : e.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: F };
    }
    getParticipantsVersion(e) {
        return Y(e).version;
    }
    getParticipants(e) {
        var n;
        return null !== (n = Y(e).toArray()) && void 0 !== n ? n : x;
    }
    getSpeakingParticipants(e) {
        var n;
        return null !== (n = Y(e).toArray(C.sI.SPEAKING)) && void 0 !== n ? n : x;
    }
    getFilteredParticipants(e) {
        return F[e] ? Y(e).toArray(C.sI.FILTERED) : Y(e).toArray();
    }
    getVideoParticipants(e) {
        var n;
        return null !== (n = Y(e).toArray(C.sI.VIDEO)) && void 0 !== n ? n : x;
    }
    getStreamParticipants(e) {
        var n;
        return null !== (n = Y(e).toArray(C.sI.STREAM)) && void 0 !== n ? n : x;
    }
    getActivityParticipants(e) {
        var n;
        return null !== (n = Y(e).toArray(C.sI.ACTIVITY)) && void 0 !== n ? n : x;
    }
    getParticipant(e, n) {
        return Y(e).getParticipant(n);
    }
    getUserParticipantCount(e) {
        let n = Y(e);
        return n.size() - n.size(C.sI.STREAM) - n.size(C.sI.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var n;
        return null === (n = G[e]) || void 0 === n || n;
    }
    getVoiceParticipantsHidden(e) {
        var n;
        return null !== (n = F[e]) && void 0 !== n && n;
    }
    getSelectedParticipantId(e) {
        let [n, r] = Q(e);
        return n === R.dF.NONE ? null : n !== R.dF.AUTO ? n : r === R.dF.NONE || r === R.dF.AUTO ? null : r;
    }
    getSelectedParticipant(e) {
        let n = this.getSelectedParticipantId(e);
        return null == n ? null : Y(e).getParticipant(n);
    }
    getSelectedParticipantStats(e) {
        let n = k[e];
        return null == n
            ? {}
            : {
                  view_mode_grid_duration_ms: Math.floor(n.gridDurationMs),
                  view_mode_focus_duration_ms: Math.floor(n.focusDurationMs),
                  view_mode_toggle_count: n.toggleCount
              };
    }
    getMode(e) {
        var n;
        return null !== (n = U[e]) && void 0 !== n ? n : eL(e) ? O.WtW.VIDEO : O.WtW.VOICE;
    }
    getLayout(e) {
        var n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.IlC.APP;
        if (__OVERLAY__) return O.AEg.NORMAL;
        let a = eL(e);
        return null !== (r = null === (n = B[e]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : a ? O.AEg.NO_CHAT : O.AEg.NORMAL;
    }
    getChatOpen(e) {
        var n;
        return null !== (n = Z[e]) && void 0 !== n && n;
    }
    getAllChatOpen() {
        return Z;
    }
    getParticipantsListOpen(e) {
        var n;
        return null !== (n = V[e]) && void 0 !== n && n;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O.IlC.APP;
        return Object.values(B).some((n) => n[e] === O.AEg.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return j[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return H[e];
    }
}
D(ex, 'displayName', 'ChannelRTCStore'),
    D(ex, 'persistKey', 'ChannelRTCStore'),
    (n.Z = new ex(_.Z, {
        CONNECTION_OPEN: W,
        CONNECTION_OPEN_SUPPLEMENTAL: ei,
        THREAD_LIST_SYNC: ei,
        OVERLAY_INITIALIZE: ei,
        VOICE_CHANNEL_SELECT: ea,
        CHANNEL_SELECT: es,
        CHANNEL_RTC_ACTIVE_CHANNELS: ei,
        VOICE_STATE_UPDATES: eo,
        CHANNEL_CREATE: eb,
        CHANNEL_DELETE: ey,
        THREAD_DELETE: ey,
        CALL_CREATE: ed,
        CALL_UPDATE: ed,
        CALL_DELETE: ef,
        CHANNEL_RTC_SELECT_PARTICIPANT: eT,
        CHANNEL_RTC_UPDATE_LAYOUT: eS,
        CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: eh,
        CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: ep,
        CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: eg,
        CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: eE,
        STREAM_UPDATE_SELF_HIDDEN: em,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: ev,
        CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: eI,
        RTC_CONNECTION_VIDEO: eC,
        RTC_CONNECTION_PLATFORM: eR,
        AUDIO_SET_LOCAL_VIDEO_DISABLED: eO,
        MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: eD,
        STREAM_CLOSE: eA,
        STREAM_DELETE: eA,
        STREAM_WATCH: eN,
        SPEAKING: eu,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: eu,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: eu,
        USER_UPDATE: ec,
        GUILD_MEMBER_UPDATE: ec,
        GUILD_DELETE: e_
    }));
