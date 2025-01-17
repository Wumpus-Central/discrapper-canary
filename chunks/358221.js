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
    b = r(158776),
    y = r(944486),
    S = r(606304),
    A = r(594174),
    N = r(33039),
    C = r(979651),
    R = r(413523),
    O = r(354459),
    D = r(981631);
function L(e, n, r) {
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
let x = new p.Z('ChannelRTCStore'),
    w = Object.freeze([]),
    P = [],
    M = {},
    k = {},
    U = {},
    B = {},
    G = {},
    Z = {},
    F = {},
    V = {},
    j = {},
    H = {},
    Y = {};
function W(e) {
    let n = M[e];
    return null == n && ((n = new R.ZP(e)), (M[e] = n)), n;
}
function K() {
    for (let e of P) ei(e);
    ea();
}
function z() {
    let e = [],
        n = y.Z.getChannelId();
    null != n && e.push(n);
    let r = y.Z.getVoiceChannelId();
    null != r && !e.includes(r) && e.push(r);
    let i = m.Z.getRemoteSessionId(),
        a = C.Z.getVoiceStateForSession(v.default.getId(), i);
    (null == a ? void 0 : a.channelId) != null && e.push(null == a ? void 0 : a.channelId), d().difference(P, e).forEach(ei);
    let s = d().difference(e, P);
    return (P = e), s;
}
function q(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
    return n.reduce((n, r) => (e(W(r)) ? (er(r), en(r), !0) : n), !1);
}
function Q(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
    return q((n) => n.updateParticipant(e), n);
}
function X(e) {
    var n;
    let r = T.Z.getChannel(e),
        i = (null == r ? void 0 : r.isDM()) ? O.dF.AUTO : O.dF.NONE;
    return null !== (n = k[e]) && void 0 !== n ? n : [i, O.dF.NONE];
}
function J(e) {
    if (null == k[e]) return !1;
    let [n] = k[e];
    return n !== O.dF.NONE;
}
function $(e) {
    null == U[e] &&
        (U[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0
        });
    let n = U[e],
        r = performance.now(),
        i = J(e);
    if (n.lastUpdate > 0) {
        let e = r - n.lastUpdate;
        n[i ? 'focusDurationMs' : 'gridDurationMs'] += e;
    }
    n.lastUpdate = r;
}
function ee(e, n) {
    $(e);
    let r = J(e);
    null == n ? delete k[e] : (k[e] = n), r !== J(e) && U[e].toggleCount++;
}
function et(e) {
    return e.size(R.sI.STREAM) > 0 || e.size(R.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function en(e) {
    let n = v.default.getId(),
        r = W(e);
    if (0 === r.size() || y.Z.getVoiceChannelId() !== e) {
        ee(e, null);
        return;
    }
    let i = O.dF.NONE,
        a = r.toArray(R.sI.STREAM).find((e) => e.type === O.fO.STREAM && E.Z.getActiveStreamForStreamKey(e.id));
    if (null != a) u()(a.type === O.fO.STREAM, 'Impossible condition'), (i = a.id);
    else if (1 === r.size()) i = n;
    else if (1 === r.size(R.sI.VIDEO)) {
        let [e] = r.toArray(R.sI.VIDEO);
        i = e.id;
    } else {
        var s;
        let e = r.toArray().find((e) => e.type === O.fO.USER && e.id !== n && !e.ringing);
        i = null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : n;
    }
    let [o] = X(e);
    if (o !== O.dF.AUTO && o !== O.dF.NONE) {
        let e = r.getParticipant(o);
        (null == e || (e.type === O.fO.STREAM && null == E.Z.getActiveStreamForStreamKey(e.id))) && (o = O.dF.NONE);
    }
    ee(e, [o, i]);
}
function er(e) {
    let n = W(e);
    if (0 === n.size()) return;
    let r = ew(e) || et(n) ? D.WtW.VIDEO : D.WtW.VOICE;
    r === D.WtW.VOICE ? (delete B[e], delete G[e]) : (B[e] = r);
}
function ei(e) {
    delete M[e], delete k[e], delete B[e], delete G[e];
}
function ea() {
    return q((e) => e.rebuild(), z());
}
function es(e) {
    let { channelId: n, currentVoiceChannelId: r } = e;
    return null != n ? delete U[n] : null != r && (delete V[r], delete H[r], $(r)), ea();
}
function eo(e) {
    let { channelId: n, messageId: r } = e,
        i = ea(),
        a = T.Z.getChannel(n);
    return null == n || null == r || ((null == a ? void 0 : a.type) !== D.d4z.GUILD_VOICE && (null == a ? void 0 : a.type) !== D.d4z.GUILD_STAGE_VOICE) || V[n] ? i : ((j[n] = !1), (V[n] = !0), !0);
}
function el(e) {
    let { voiceStates: n, initial: r } = e;
    return n.reduce((e, n) => {
        let { userId: i, channelId: a } = n;
        return r && null != a && !P.includes(a) ? e : Q(i) || e;
    }, !1);
}
function eu() {
    return q((e) => e.updateEmbeddedActivities());
}
function ec() {
    b.Z.getUserIds().forEach((e) => Q(e));
}
function ed(e) {
    let { userId: n } = e;
    return q((e) => e.updateParticipantSpeaking(n));
}
function ef(e) {
    let { user: n } = e;
    return Q(n.id);
}
function e_(e) {
    let { channelId: n } = e;
    return q((e) => e.rebuild(), [n]);
}
function eh(e) {
    let { channelId: n } = e;
    return ei(n);
}
function ep(e) {
    let { guild: n } = e,
        r = [];
    if (
        (d().forEach(P, (e) => {
            let i = T.Z.getChannel(e);
            (null == i || i.getGuildId() === n.id) && r.push(e);
        }),
        0 === r.length)
    )
        return !1;
    d().forEach(r, (e) => ei(e));
}
function em(e) {
    let { channelId: n, participantsOpen: r } = e;
    Z[n] = r;
}
function eg(e) {
    let { channelId: n, voiceParticipantsHidden: r } = e;
    F[n] = r;
}
function eE(e) {
    let { channelId: n, selfStreamHidden: r } = e,
        i = v.default.getId();
    if (r) {
        let [e] = X(n);
        (0, g.DB)(e) && e.includes(i) && ee(n, null);
    }
    Q(i, [n]);
}
function ev(e) {
    let { channelId: n, large: r } = e;
    H[n] = r;
}
function eI(e) {
    let { channelId: n, dismissed: r } = e;
    Y[n] = r;
}
function eT(e) {
    let { channelId: n, chatOpen: r } = e;
    (V[n] = r), r && (j[n] = !1);
}
function eb(e) {
    let { channelId: n, participantsListOpen: r } = e;
    (j[n] = r), r && (V[n] = !1);
}
function ey(e) {
    let { channelId: n, id: r } = e,
        i = W(n);
    null == r &&
        i.toArray(R.sI.STREAM).forEach((e) => {
            (0, O._5)(e) && i.updateParticipant(e.user.id);
        });
    let [, a] = X(n);
    if ((ee(n, [null != r ? r : O.dF.NONE, a]), (0, g.DB)(r))) {
        try {
            let { ownerId: e } = (0, g.my)(r);
            e === v.default.getId() && Q(e, [n]);
        } catch (e) {
            x.warn('INVALID STREAM KEY FORMAT '.concat(r), e);
        }
        !et(i) && (Z[n] = !1);
    }
}
function eS(e) {
    let { channel: n } = e;
    if (n.type === D.d4z.GROUP_DM) {
        let e = n.originChannelId;
        if (null != e) {
            var r, i;
            return (G[n.id] = { [D.IlC.APP]: null !== (i = null === (r = G[e]) || void 0 === r ? void 0 : r[D.IlC.APP]) && void 0 !== i ? i : D.AEg.NORMAL }), !0;
        }
    }
    return !1;
}
function eA(e) {
    let {
        channel: { id: n }
    } = e;
    return delete V[n], delete j[n], delete H[n], ei(n);
}
function eN(e) {
    let { channelId: n, layout: r, appContext: i } = e;
    G[n] = {
        ...G[n],
        [i]: r
    };
}
function eC(e) {
    let { streamKey: n } = e,
        { channelId: r, ownerId: i } = (0, g.my)(n);
    return Q(i, [r]);
}
function eR(e) {
    let { streamKey: n } = e,
        { channelId: r, ownerId: i } = (0, g.my)(n);
    return Q(i, [r]);
}
function eO(e) {
    let { channelId: n, userId: r } = e;
    return Q(r, [n]);
}
function eD(e) {
    let { channelId: n, userId: r } = e;
    return Q(r, [n]);
}
function eL(e) {
    let { userId: n } = e;
    return Q(n);
}
function ex(e) {
    let { channelId: n, senderUserId: r, maxResolution: i, maxFrameRate: a } = e;
    return q((e) => e.updateParticipantQuality(r, i, a), [n]);
}
function ew(e) {
    var n;
    return !!(null === (n = T.Z.getChannel(e)) || void 0 === n ? void 0 : n.isGuildVocal());
}
class eP extends (i = f.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(E.Z, v.default, I.Z, T.Z, h.ZP, b.Z, y.Z, S.Z, A.default, N.Z, C.Z), this.syncWith([h.ZP], eu), this.syncWith([b.Z], ec), this.syncWith([m.Z], ea), (null == e ? void 0 : e.voiceParticipantsHidden) !== void 0 && Object.assign(F, null == e ? void 0 : e.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: F };
    }
    getParticipantsVersion(e) {
        return W(e).version;
    }
    getParticipants(e) {
        var n;
        return null !== (n = W(e).toArray()) && void 0 !== n ? n : w;
    }
    getSpeakingParticipants(e) {
        var n;
        return null !== (n = W(e).toArray(R.sI.SPEAKING)) && void 0 !== n ? n : w;
    }
    getFilteredParticipants(e) {
        return F[e] ? W(e).toArray(R.sI.FILTERED) : W(e).toArray();
    }
    getVideoParticipants(e) {
        var n;
        return null !== (n = W(e).toArray(R.sI.VIDEO)) && void 0 !== n ? n : w;
    }
    getStreamParticipants(e) {
        var n;
        return null !== (n = W(e).toArray(R.sI.STREAM)) && void 0 !== n ? n : w;
    }
    getActivityParticipants(e) {
        var n;
        return null !== (n = W(e).toArray(R.sI.ACTIVITY)) && void 0 !== n ? n : w;
    }
    getParticipant(e, n) {
        return W(e).getParticipant(n);
    }
    getUserParticipantCount(e) {
        let n = W(e);
        return n.size() - n.size(R.sI.STREAM) - n.size(R.sI.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var n;
        return null === (n = Z[e]) || void 0 === n || n;
    }
    getVoiceParticipantsHidden(e) {
        var n;
        return null !== (n = F[e]) && void 0 !== n && n;
    }
    getSelectedParticipantId(e) {
        let [n, r] = X(e);
        return n === O.dF.NONE ? null : n !== O.dF.AUTO ? n : r === O.dF.NONE || r === O.dF.AUTO ? null : r;
    }
    getSelectedParticipant(e) {
        let n = this.getSelectedParticipantId(e);
        return null == n ? null : W(e).getParticipant(n);
    }
    getSelectedParticipantStats(e) {
        let n = U[e];
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
        return null !== (n = B[e]) && void 0 !== n ? n : ew(e) ? D.WtW.VIDEO : D.WtW.VOICE;
    }
    getLayout(e) {
        var n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D.IlC.APP;
        if (__OVERLAY__) return D.AEg.NORMAL;
        let a = ew(e);
        return null !== (r = null === (n = G[e]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : a ? D.AEg.NO_CHAT : D.AEg.NORMAL;
    }
    getChatOpen(e) {
        var n;
        return null !== (n = V[e]) && void 0 !== n && n;
    }
    getAllChatOpen() {
        return V;
    }
    getParticipantsListOpen(e) {
        var n;
        return null !== (n = j[e]) && void 0 !== n && n;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D.IlC.APP;
        return Object.values(G).some((n) => n[e] === D.AEg.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return H[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return Y[e];
    }
}
L(eP, 'displayName', 'ChannelRTCStore'),
    L(eP, 'persistKey', 'ChannelRTCStore'),
    (n.Z = new eP(_.Z, {
        CONNECTION_OPEN: K,
        CONNECTION_OPEN_SUPPLEMENTAL: ea,
        THREAD_LIST_SYNC: ea,
        OVERLAY_INITIALIZE: ea,
        VOICE_CHANNEL_SELECT: es,
        CHANNEL_SELECT: eo,
        CHANNEL_RTC_ACTIVE_CHANNELS: ea,
        VOICE_STATE_UPDATES: el,
        CHANNEL_CREATE: eS,
        CHANNEL_DELETE: eA,
        THREAD_DELETE: eA,
        CALL_CREATE: e_,
        CALL_UPDATE: e_,
        CALL_DELETE: eh,
        CHANNEL_RTC_SELECT_PARTICIPANT: ey,
        CHANNEL_RTC_UPDATE_LAYOUT: eN,
        CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: em,
        CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: eg,
        CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: ev,
        CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: eI,
        STREAM_UPDATE_SELF_HIDDEN: eE,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: eT,
        CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: eb,
        RTC_CONNECTION_VIDEO: eO,
        RTC_CONNECTION_PLATFORM: eD,
        AUDIO_SET_LOCAL_VIDEO_DISABLED: eL,
        MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: ex,
        STREAM_CLOSE: eC,
        STREAM_DELETE: eC,
        STREAM_WATCH: eR,
        SPEAKING: ed,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: ed,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: ed,
        USER_UPDATE: ef,
        GUILD_MEMBER_UPDATE: ef,
        GUILD_DELETE: ep
    }));
