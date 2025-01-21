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
    E = r(163612),
    v = r(199902),
    I = r(314897),
    T = r(523746),
    b = r(592125),
    y = r(158776),
    S = r(944486),
    A = r(606304),
    N = r(594174),
    C = r(33039),
    R = r(979651),
    O = r(413523),
    D = r(354459),
    L = r(981631);
function x(e, n, r) {
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
let w = new p.Z('ChannelRTCStore'),
    P = Object.freeze([]),
    M = [],
    k = {},
    U = {},
    B = {},
    G = {},
    F = {},
    Z = {},
    V = {},
    j = {},
    H = {},
    Y = {},
    W = {};
function K(e) {
    let n = k[e];
    return null == n && ((n = new O.ZP(e)), (k[e] = n)), n;
}
function z() {
    for (let e of M) ea(e);
    es();
}
function q() {
    let e = [],
        n = S.Z.getChannelId();
    null != n && e.push(n);
    let r = S.Z.getVoiceChannelId();
    null != r && !e.includes(r) && e.push(r);
    let i = m.Z.getRemoteSessionId(),
        a = R.Z.getVoiceStateForSession(I.default.getId(), i);
    (null == a ? void 0 : a.channelId) != null && e.push(null == a ? void 0 : a.channelId), d().difference(M, e).forEach(ea);
    let s = d().difference(e, M);
    return (M = e), s;
}
function Q(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M;
    return n.reduce((n, r) => (e(K(r)) ? (ei(r), er(r), !0) : n), !1);
}
function X(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M;
    return Q((n) => n.updateParticipant(e), n);
}
function J(e) {
    var n;
    let r = b.Z.getChannel(e),
        i = (null == r ? void 0 : r.isDM()) ? D.dF.AUTO : D.dF.NONE;
    return null !== (n = U[e]) && void 0 !== n ? n : [i, D.dF.NONE];
}
function $(e) {
    if (null == U[e]) return !1;
    let [n] = U[e];
    return n !== D.dF.NONE;
}
function ee(e) {
    null == B[e] &&
        (B[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0
        });
    let n = B[e],
        r = performance.now(),
        i = $(e);
    if (n.lastUpdate > 0) {
        let e = r - n.lastUpdate;
        n[i ? 'focusDurationMs' : 'gridDurationMs'] += e;
    }
    n.lastUpdate = r;
}
function et(e, n) {
    ee(e);
    let r = $(e);
    null == n ? delete U[e] : (U[e] = n), r !== $(e) && B[e].toggleCount++;
}
function en(e) {
    return e.size(O.sI.STREAM) > 0 || e.size(O.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function er(e) {
    let n = I.default.getId(),
        r = K(e);
    if (0 === r.size() || S.Z.getVoiceChannelId() !== e) {
        et(e, null);
        return;
    }
    let i = D.dF.NONE,
        a = r.toArray(O.sI.STREAM).find((e) => e.type === D.fO.STREAM && v.Z.getActiveStreamForStreamKey(e.id));
    if (null != a) u()(a.type === D.fO.STREAM, 'Impossible condition'), (i = a.id);
    else if (1 === r.size()) i = n;
    else if (1 === r.size(O.sI.VIDEO)) {
        let [e] = r.toArray(O.sI.VIDEO);
        i = e.id;
    } else {
        var s;
        let e = r.toArray().find((e) => e.type === D.fO.USER && e.id !== n && !e.ringing);
        i = null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : n;
    }
    let [o] = J(e);
    if (o !== D.dF.AUTO && o !== D.dF.NONE) {
        let e = r.getParticipant(o);
        (null == e || (e.type === D.fO.STREAM && null == v.Z.getActiveStreamForStreamKey(e.id))) && (o = D.dF.NONE);
    }
    et(e, [o, i]);
}
function ei(e) {
    let n = K(e);
    if (0 === n.size()) return;
    let r = ek(e) || en(n) ? L.WtW.VIDEO : L.WtW.VOICE;
    r === L.WtW.VOICE ? (delete G[e], delete F[e]) : (G[e] = r);
}
function ea(e) {
    delete k[e], delete U[e], delete G[e], delete F[e];
}
function es() {
    return Q((e) => e.rebuild(), q());
}
function eo(e) {
    let { channelId: n, currentVoiceChannelId: r } = e;
    return null != n ? delete B[n] : null != r && (delete j[r], delete Y[r], ee(r)), es();
}
function el(e) {
    let { channelId: n, messageId: r } = e,
        i = es(),
        a = b.Z.getChannel(n);
    return null == n || null == r || ((null == a ? void 0 : a.type) !== L.d4z.GUILD_VOICE && (null == a ? void 0 : a.type) !== L.d4z.GUILD_STAGE_VOICE) || j[n] ? i : ((H[n] = !1), (j[n] = !0), !0);
}
function eu(e) {
    let { voiceStates: n, initial: r } = e;
    return n.reduce((e, n) => {
        let { userId: i, channelId: a, guildId: s } = n;
        return (null != s &&
            null != a &&
            E.Z.getCurrentConfig({
                guildId: s,
                location: 'voice_status_update'
            }).enabled &&
            K(a).updateGuildRingingUsers(i, !1),
        r && null != a && !M.includes(a))
            ? e
            : X(i) || e;
    }, !1);
}
function ec() {
    return Q((e) => e.updateEmbeddedActivities());
}
function ed() {
    y.Z.getUserIds().forEach((e) => X(e));
}
function ef(e) {
    let { userId: n } = e;
    return Q((e) => e.updateParticipantSpeaking(n));
}
function e_(e) {
    let { user: n } = e;
    return X(n.id);
}
function eh(e) {
    let { channelId: n } = e;
    return Q((e) => e.rebuild(), [n]);
}
function ep(e) {
    let { channelId: n } = e;
    return ea(n);
}
function em(e) {
    let { guild: n } = e,
        r = [];
    if (
        (d().forEach(M, (e) => {
            let i = b.Z.getChannel(e);
            (null == i || i.getGuildId() === n.id) && r.push(e);
        }),
        0 === r.length)
    )
        return !1;
    d().forEach(r, (e) => ea(e));
}
function eg(e) {
    let { channelId: n, participantsOpen: r } = e;
    Z[n] = r;
}
function eE(e) {
    let { channelId: n, voiceParticipantsHidden: r } = e;
    V[n] = r;
}
function ev(e) {
    let { channelId: n, selfStreamHidden: r } = e,
        i = I.default.getId();
    if (r) {
        let [e] = J(n);
        (0, g.DB)(e) && e.includes(i) && et(n, null);
    }
    X(i, [n]);
}
function eI(e) {
    let { channelId: n, large: r } = e;
    Y[n] = r;
}
function eT(e) {
    let { channelId: n, dismissed: r } = e;
    W[n] = r;
}
function eb(e) {
    let { channelId: n, chatOpen: r } = e;
    (j[n] = r), r && (H[n] = !1);
}
function ey(e) {
    let { channelId: n, participantsListOpen: r } = e;
    (H[n] = r), r && (j[n] = !1);
}
function eS(e) {
    let { channelId: n, id: r } = e,
        i = K(n);
    null == r &&
        i.toArray(O.sI.STREAM).forEach((e) => {
            (0, D._5)(e) && i.updateParticipant(e.user.id);
        });
    let [, a] = J(n);
    if ((et(n, [null != r ? r : D.dF.NONE, a]), (0, g.DB)(r))) {
        try {
            let { ownerId: e } = (0, g.my)(r);
            e === I.default.getId() && X(e, [n]);
        } catch (e) {
            w.warn('INVALID STREAM KEY FORMAT '.concat(r), e);
        }
        !en(i) && (Z[n] = !1);
    }
}
function eA(e) {
    let { channel: n } = e;
    if (n.type === L.d4z.GROUP_DM) {
        let e = n.originChannelId;
        if (null != e) {
            var r, i;
            return (F[n.id] = { [L.IlC.APP]: null !== (i = null === (r = F[e]) || void 0 === r ? void 0 : r[L.IlC.APP]) && void 0 !== i ? i : L.AEg.NORMAL }), !0;
        }
    }
    return !1;
}
function eN(e) {
    let {
        channel: { id: n }
    } = e;
    return delete j[n], delete H[n], delete Y[n], ea(n);
}
function eC(e) {
    let { channelId: n, layout: r, appContext: i } = e;
    F[n] = {
        ...F[n],
        [i]: r
    };
}
function eR(e) {
    let { streamKey: n } = e,
        { channelId: r, ownerId: i } = (0, g.my)(n);
    return X(i, [r]);
}
function eO(e) {
    let { streamKey: n } = e,
        { channelId: r, ownerId: i } = (0, g.my)(n);
    return X(i, [r]);
}
function eD(e) {
    let { channelId: n, userId: r } = e;
    return X(r, [n]);
}
function eL(e) {
    let { channelId: n, userId: r } = e;
    return X(r, [n]);
}
function ex(e) {
    let { userId: n } = e;
    return X(n);
}
function ew(e) {
    let { channelId: n, senderUserId: r, maxResolution: i, maxFrameRate: a } = e;
    return Q((e) => e.updateParticipantQuality(r, i, a), [n]);
}
function eP(e) {
    let { channelId: n, guildId: r, ringing: i } = e;
    if (
        !E.Z.getCurrentConfig({
            guildId: r,
            location: 'guild_ring_start'
        }).enabled
    )
        return !1;
    let a = K(n);
    return i.forEach((e) => a.updateGuildRingingUsers(e, !0)), Q((e) => e.rebuild(), [n]);
}
function eM(e) {
    let { channelId: n, guildId: r, ringing: i } = e;
    if (
        !E.Z.getCurrentConfig({
            guildId: r,
            location: 'guild_ring_start'
        }).enabled
    )
        return !1;
    let a = K(n);
    return i.forEach((e) => a.updateGuildRingingUsers(e, !1)), Q((e) => e.rebuild(), [n]);
}
function ek(e) {
    var n;
    return !!(null === (n = b.Z.getChannel(e)) || void 0 === n ? void 0 : n.isGuildVocal());
}
class eU extends (i = f.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(v.Z, I.default, T.Z, b.Z, h.ZP, y.Z, S.Z, A.Z, N.default, C.Z, R.Z), this.syncWith([h.ZP], ec), this.syncWith([y.Z], ed), this.syncWith([m.Z], es), (null == e ? void 0 : e.voiceParticipantsHidden) !== void 0 && Object.assign(V, null == e ? void 0 : e.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: V };
    }
    getParticipantsVersion(e) {
        return K(e).version;
    }
    getParticipants(e) {
        var n;
        return null !== (n = K(e).toArray()) && void 0 !== n ? n : P;
    }
    getSpeakingParticipants(e) {
        var n;
        return null !== (n = K(e).toArray(O.sI.SPEAKING)) && void 0 !== n ? n : P;
    }
    getFilteredParticipants(e) {
        return V[e] ? K(e).toArray(O.sI.FILTERED) : K(e).toArray();
    }
    getVideoParticipants(e) {
        var n;
        return null !== (n = K(e).toArray(O.sI.VIDEO)) && void 0 !== n ? n : P;
    }
    getStreamParticipants(e) {
        var n;
        return null !== (n = K(e).toArray(O.sI.STREAM)) && void 0 !== n ? n : P;
    }
    getActivityParticipants(e) {
        var n;
        return null !== (n = K(e).toArray(O.sI.ACTIVITY)) && void 0 !== n ? n : P;
    }
    getParticipant(e, n) {
        return K(e).getParticipant(n);
    }
    getUserParticipantCount(e) {
        let n = K(e);
        return n.size() - n.size(O.sI.STREAM) - n.size(O.sI.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var n;
        return null === (n = Z[e]) || void 0 === n || n;
    }
    getVoiceParticipantsHidden(e) {
        var n;
        return null !== (n = V[e]) && void 0 !== n && n;
    }
    getSelectedParticipantId(e) {
        let [n, r] = J(e);
        return n === D.dF.NONE ? null : n !== D.dF.AUTO ? n : r === D.dF.NONE || r === D.dF.AUTO ? null : r;
    }
    getSelectedParticipant(e) {
        let n = this.getSelectedParticipantId(e);
        return null == n ? null : K(e).getParticipant(n);
    }
    getSelectedParticipantStats(e) {
        let n = B[e];
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
        return null !== (n = G[e]) && void 0 !== n ? n : ek(e) ? L.WtW.VIDEO : L.WtW.VOICE;
    }
    getLayout(e) {
        var n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L.IlC.APP;
        if (__OVERLAY__) return L.AEg.NORMAL;
        let a = ek(e);
        return null !== (r = null === (n = F[e]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : a ? L.AEg.NO_CHAT : L.AEg.NORMAL;
    }
    getChatOpen(e) {
        var n;
        return null !== (n = j[e]) && void 0 !== n && n;
    }
    getAllChatOpen() {
        return j;
    }
    getParticipantsListOpen(e) {
        var n;
        return null !== (n = H[e]) && void 0 !== n && n;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L.IlC.APP;
        return Object.values(F).some((n) => n[e] === L.AEg.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return Y[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return W[e];
    }
}
x(eU, 'displayName', 'ChannelRTCStore'),
    x(eU, 'persistKey', 'ChannelRTCStore'),
    (n.Z = new eU(_.Z, {
        CONNECTION_OPEN: z,
        CONNECTION_OPEN_SUPPLEMENTAL: es,
        THREAD_LIST_SYNC: es,
        OVERLAY_INITIALIZE: es,
        VOICE_CHANNEL_SELECT: eo,
        CHANNEL_SELECT: el,
        CHANNEL_RTC_ACTIVE_CHANNELS: es,
        VOICE_STATE_UPDATES: eu,
        CHANNEL_CREATE: eA,
        CHANNEL_DELETE: eN,
        THREAD_DELETE: eN,
        CALL_CREATE: eh,
        CALL_UPDATE: eh,
        CALL_DELETE: ep,
        CHANNEL_RTC_SELECT_PARTICIPANT: eS,
        CHANNEL_RTC_UPDATE_LAYOUT: eC,
        CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: eg,
        CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: eE,
        CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: eI,
        CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: eT,
        STREAM_UPDATE_SELF_HIDDEN: ev,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: eb,
        CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: ey,
        RTC_CONNECTION_VIDEO: eD,
        RTC_CONNECTION_PLATFORM: eL,
        AUDIO_SET_LOCAL_VIDEO_DISABLED: ex,
        MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: ew,
        STREAM_CLOSE: eR,
        STREAM_DELETE: eR,
        STREAM_WATCH: eO,
        SPEAKING: ef,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: ef,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: ef,
        GUILD_RING_START: eP,
        GUILD_RING_STOP: eM,
        USER_UPDATE: e_,
        GUILD_MEMBER_UPDATE: e_,
        GUILD_DELETE: em
    }));
