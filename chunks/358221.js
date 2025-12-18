n.d(t, { Z: () => eV }), n(388685), n(539854);
var r,
    i = n(512722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(317381),
    d = n(710845),
    f = n(258609),
    p = n(569545),
    _ = n(163612),
    m = n(199902),
    h = n(314897),
    g = n(523746),
    E = n(592125),
    b = n(158776),
    y = n(944486),
    O = n(606304),
    v = n(594174),
    S = n(33039),
    I = n(979651),
    T = n(413523),
    C = n(354459),
    A = n(981631);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = new d.Z("ChannelRTCStore"),
    x = Object.freeze([]),
    L = [],
    j = {},
    M = {},
    k = {},
    U = {},
    G = {},
    Z = {},
    F = {},
    B = {},
    V = {},
    H = {},
    Y = {},
    W = null;
function K(e) {
    let t = j[e];
    return null == t && ((t = new T.ZP(e)), (j[e] = t)), t;
}
function z() {
    for (let e of L) ea(e);
    eo();
}
function q() {
    let e = [],
        t = y.Z.getChannelId();
    null != t && e.push(t), null == (W = y.Z.getVoiceChannelId()) || e.includes(W) || e.push(W);
    let n = f.default.getRemoteSessionId(),
        r = I.Z.getVoiceStateForSession(h.default.getId(), n);
    (null == r ? void 0 : r.channelId) != null && e.push(null == r ? void 0 : r.channelId),
        s().difference(L, e).forEach(ea);
    let i = s().difference(e, L);
    return (L = e), i;
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
    return t.reduce((t, n) => (e(K(n)) ? (ei(n), er(n), !0) : t), !1);
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
    return Q((t) => t.updateParticipant(e), t);
}
function J(e) {
    var t;
    let n = E.Z.getChannel(e),
        r = (null == n ? void 0 : n.isDM()) && 1 ? C.dF.AUTO : C.dF.NONE;
    return null != (t = M[e]) ? t : [r, C.dF.NONE];
}
function $(e) {
    if (null == M[e]) return !1;
    let [t] = M[e];
    return t !== C.dF.NONE;
}
function ee(e) {
    null == k[e] &&
        (k[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0,
        });
    let t = k[e],
        n = performance.now(),
        r = $(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[r ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function et(e, t) {
    ee(e);
    let n = $(e);
    null == t ? delete M[e] : (M[e] = t), n !== $(e) && k[e].toggleCount++;
}
function en(e) {
    return e.size(T.sI.STREAM) > 0 || e.size(T.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function er(e) {
    let t = h.default.getId(),
        n = K(e);
    if (0 === n.size() || y.Z.getVoiceChannelId() !== e) return void et(e, null);
    let r = C.dF.NONE,
        i = n.toArray(T.sI.STREAM).find((e) => e.type === C.fO.STREAM && m.Z.getActiveStreamForStreamKey(e.id));
    if (null != i) a()(i.type === C.fO.STREAM, "Impossible condition"), (r = i.id);
    else if (1 === n.size()) r = t;
    else if (1 === n.size(T.sI.VIDEO)) {
        let [e] = n.toArray(T.sI.VIDEO);
        r = e.id;
    } else {
        var o;
        let e = n.toArray().find((e) => e.type === C.fO.USER && e.id !== t && !e.ringing);
        r = null != (o = null == e ? void 0 : e.id) ? o : t;
    }
    let [s] = J(e);
    if (s !== C.dF.AUTO && s !== C.dF.NONE) {
        let e = n.getParticipant(s);
        (null == e || (e.type === C.fO.STREAM && null == m.Z.getActiveStreamForStreamKey(e.id))) && (s = C.dF.NONE);
    }
    et(e, [s, r]);
}
function ei(e) {
    let t = K(e);
    if (0 === t.size()) return;
    let n = eG(e) || en(t) ? A.WtW.VIDEO : A.WtW.VOICE;
    n === A.WtW.VOICE ? (delete U[e], delete G[e]) : (U[e] = n);
}
function ea(e) {
    delete j[e], delete M[e], delete U[e], delete G[e], (W = y.Z.getVoiceChannelId());
}
function eo() {
    return Q((e) => e.rebuild(), q());
}
function es(e) {
    let { channelId: t, currentVoiceChannelId: n } = e;
    return null != t ? delete k[t] : null != n && (delete B[n], delete H[n], ee(n)), eo();
}
function el(e) {
    let { channelId: t, messageId: n } = e,
        r = eo();
    if (null == t || null == n || B[t]) return r;
    let i = E.Z.getChannel(t);
    return null != i && i.isGuildVocal() ? ((V[t] = !1), (B[t] = !0), !0) : r;
}
function ec(e) {
    let { voiceStates: t, initial: n } = e;
    return t.reduce((e, t) => {
        let { userId: r, channelId: i, guildId: a } = t;
        return (null != a &&
            null != i &&
            _.Z.getCurrentConfig(
                {
                    guildId: a,
                    location: "voice_status_update",
                },
                { autoTrackExposure: !1 },
            ).enabled &&
            K(i).updateGuildRingingUsers(r, !1),
        n && null != i && !L.includes(i))
            ? e
            : X(r) || e;
    }, !1);
}
function eu() {
    return Q((e) => e.updateEmbeddedActivities());
}
function ed() {
    b.Z.getUserIds().forEach((e) => X(e));
}
function ef(e) {
    let { userId: t } = e;
    return Q((e) => e.updateParticipantSpeaking(t));
}
function ep() {
    return Q((e) => e.updateParticipantSpeaking(h.default.getId()));
}
function e_(e) {
    let { user: t } = e;
    return X(t.id);
}
function em(e) {
    let { channelId: t } = e;
    return Q((e) => e.rebuild(), [t]);
}
function eh(e) {
    let { channelId: t } = e;
    return ea(t);
}
function eg(e) {
    let { guild: t } = e,
        n = [];
    if (
        (s().forEach(L, (e) => {
            let r = E.Z.getChannel(e);
            (null == r || r.getGuildId() === t.id) && n.push(e);
        }),
        0 === n.length)
    )
        return !1;
    s().forEach(n, (e) => ea(e));
}
function eE(e) {
    let { channelId: t, participantsOpen: n } = e;
    Z[t] = n;
}
function eb(e) {
    let { channelId: t, voiceParticipantsHidden: n } = e;
    F[t] = n;
}
function ey(e) {
    let { channelId: t, selfStreamHidden: n } = e,
        r = h.default.getId();
    if (n) {
        let [e] = J(t);
        (0, p.DB)(e) && e.includes(r) && et(t, null);
    }
    X(r, [t]);
}
function eO(e) {
    let { channelId: t, large: n } = e;
    H[t] = n;
}
function ev(e) {
    let { channelId: t, dismissed: n } = e;
    Y[t] = n;
}
function eS(e) {
    let { channelId: t, chatOpen: n } = e;
    (B[t] = n), n && (V[t] = !1);
}
function eI(e) {
    let { channelId: t, participantsListOpen: n } = e;
    (V[t] = n), n && (B[t] = !1);
}
function eT(e) {
    let { channelId: t, id: n } = e,
        r = K(t);
    null == n &&
        r.toArray(T.sI.STREAM).forEach((e) => {
            (0, C._5)(e) && r.updateParticipant(e.user.id);
        });
    let [, i] = J(t);
    if ((et(t, [null != n ? n : C.dF.NONE, i]), (0, p.DB)(n))) {
        try {
            let { ownerId: e } = (0, p.my)(n);
            e === h.default.getId() && X(e, [t]);
        } catch (e) {
            D.warn("INVALID STREAM KEY FORMAT ".concat(n), e);
        }
        en(r) || (Z[t] = !1);
    }
}
function eC(e) {
    let { channelId: t, participantId: n } = e,
        [r] = J(t);
    r === n && et(t, null);
    let i = K(t),
        a = i.getParticipant(n);
    null != a && a.type !== C.fO.ACTIVITY && (i.updateParticipantPoppedOut(n, !0), X(a.user.id, [t]));
}
function eA(e) {
    let { channelId: t, participantId: n } = e,
        r = K(t);
    r.updateParticipantPoppedOut(n, !1);
    let i = r.getParticipant(n);
    null != i && i.type !== C.fO.ACTIVITY && X(i.user.id, [t]);
}
function eN(e) {
    let { channel: t } = e;
    if (t.type === A.d4z.GROUP_DM) {
        let e = t.originChannelId;
        if (null != e) {
            var n, r;
            return (
                (G[t.id] = {
                    [A.IlC.APP]: null != (r = null == (n = G[e]) ? void 0 : n[A.IlC.APP]) ? r : A.AEg.NORMAL,
                }),
                !0
            );
        }
    }
    return !1;
}
function eP(e) {
    let {
        channel: { id: t },
    } = e;
    return delete B[t], delete V[t], delete H[t], ea(t);
}
function eR(e) {
    let { channelId: t, layout: n, appContext: r } = e;
    G[t] = w(P({}, G[t]), { [r]: n });
}
function ew(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, p.my)(t);
    return X(r, [n]);
}
function eD(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, p.my)(t);
    return X(r, [n]);
}
function ex(e) {
    let { channelId: t, userId: n } = e;
    return X(n, [t]);
}
function eL(e) {
    let { channelId: t, userId: n } = e;
    return X(n, [t]);
}
function ej(e) {
    let { userId: t } = e;
    return X(t);
}
function eM(e) {
    let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
    return Q((e) => e.updateParticipantQuality(n, r, i), [t]);
}
function ek(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (
        !_.Z.getCurrentConfig({
            guildId: n,
            location: "guild_ring_start",
        }).enabled
    )
        return !1;
    let i = K(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !0)), Q((e) => e.rebuild(), [t]);
}
function eU(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (
        !_.Z.getCurrentConfig({
            guildId: n,
            location: "guild_ring_start",
        }).enabled
    )
        return !1;
    let i = K(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !1)), Q((e) => e.rebuild(), [t]);
}
function eG(e) {
    var t;
    return !!(null == (t = E.Z.getChannel(e)) ? void 0 : t.isGuildVocalOrThread());
}
function eZ(e) {
    var t;
    return !!(null == (t = E.Z.getChannel(e)) ? void 0 : t.isGuildVocal());
}
function eF(e) {
    var t;
    return !!(null == (t = E.Z.getChannel(e)) ? void 0 : t.isVocalThread());
}
class eB extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(m.Z, h.default, g.Z, E.Z, u.ZP, f.default, b.Z, y.Z, O.Z, v.default, S.Z, I.Z),
            this.syncWith([u.ZP], eu),
            this.syncWith([b.Z], ed),
            this.syncWith([f.default], eo),
            (null == e ? void 0 : e.voiceParticipantsHidden) !== void 0 &&
                Object.assign(F, null == e ? void 0 : e.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: F };
    }
    getParticipantsVersion(e) {
        return K(e).version;
    }
    getParticipants(e) {
        var t;
        return null != (t = K(e).toArray()) ? t : x;
    }
    getSpeakingParticipants(e) {
        var t;
        return null != (t = K(e).toArray(T.sI.SPEAKING)) ? t : x;
    }
    getFilteredParticipants(e) {
        var t;
        let n = K(e);
        return null != (t = F[e]) && t ? n.toArray(T.sI.FILTERED) : n.toArray(T.sI.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        var t;
        return null != (t = K(e).toArray(T.sI.VIDEO)) ? t : x;
    }
    getStreamParticipants(e) {
        var t;
        return null != (t = K(e).toArray(T.sI.STREAM)) ? t : x;
    }
    getActivityParticipants(e) {
        var t;
        return null != (t = K(e).toArray(T.sI.ACTIVITY)) ? t : x;
    }
    getParticipant(e, t) {
        return K(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = K(e);
        return t.size() - t.size(T.sI.STREAM) - t.size(T.sI.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var t;
        return null == (t = Z[e]) || t;
    }
    getVoiceParticipantsHidden(e) {
        var t;
        return null != (t = F[e]) && t;
    }
    getSelectedParticipantId(e) {
        let [t, n] = J(e);
        return t === C.dF.NONE ? null : t !== C.dF.AUTO ? t : n === C.dF.NONE || n === C.dF.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : K(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = k[e];
        return null == t
            ? {}
            : {
                  view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                  view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                  view_mode_toggle_count: t.toggleCount,
              };
    }
    getGuildRingingUsers(e) {
        return K(e).guildRingingUsers;
    }
    getMode(e) {
        var t;
        return null != (t = U[e]) ? t : eG(e) ? A.WtW.VIDEO : A.WtW.VOICE;
    }
    getLayout(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.IlC.APP;
        if (__OVERLAY__) return A.AEg.NORMAL;
        let i = W === e,
            a = eZ(e) || (i && eF(e));
        return null != (n = null == (t = G[e]) ? void 0 : t[r]) ? n : a ? A.AEg.NO_CHAT : A.AEg.NORMAL;
    }
    getChatOpen(e) {
        var t, n, r;
        return null != (r = null != (n = B[e]) ? n : null == (t = E.Z.getChannel(e)) ? void 0 : t.isVocalThread()) && r;
    }
    getAllChatOpen() {
        return B;
    }
    getParticipantsListOpen(e) {
        var t;
        return null != (t = V[e]) && t;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.IlC.APP;
        return Object.values(G).some((t) => t[e] === A.AEg.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return H[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return Y[e];
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
N(eB, "displayName", "ChannelRTCStore"), N(eB, "persistKey", "ChannelRTCStore");
let eV = new eB(c.Z, {
    CONNECTION_OPEN: z,
    CONNECTION_OPEN_SUPPLEMENTAL: eo,
    THREAD_LIST_SYNC: eo,
    OVERLAY_INITIALIZE: eo,
    VOICE_CHANNEL_SELECT: es,
    CHANNEL_SELECT: el,
    CHANNEL_RTC_ACTIVE_CHANNELS: eo,
    VOICE_STATE_UPDATES: ec,
    CHANNEL_CREATE: eN,
    CHANNEL_DELETE: eP,
    THREAD_DELETE: eP,
    CALL_CREATE: em,
    CALL_UPDATE: em,
    CALL_DELETE: eh,
    CHANNEL_RTC_SELECT_PARTICIPANT: eT,
    CHANNEL_RTC_POPOUT_PARTICIPANT: eC,
    CHANNEL_RTC_RETURN_PARTICIPANT: eA,
    CHANNEL_RTC_UPDATE_LAYOUT: eR,
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: eE,
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: eb,
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: eO,
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: ev,
    STREAM_UPDATE_SELF_HIDDEN: ey,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: eS,
    CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: eI,
    RTC_CONNECTION_VIDEO: ex,
    RTC_CONNECTION_PLATFORM: eL,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: ej,
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: eM,
    STREAM_CLOSE: ew,
    STREAM_DELETE: ew,
    STREAM_WATCH: eD,
    SPEAKING: ef,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: ef,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: ef,
    PUSH_TO_TALK_STATE_CHANGE: ep,
    GUILD_RING_START: ek,
    GUILD_RING_STOP: eU,
    USER_UPDATE: e_,
    GUILD_MEMBER_UPDATE: e_,
    GUILD_DELETE: eg,
});
