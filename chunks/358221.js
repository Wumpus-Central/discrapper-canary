n.d(t, { Z: () => eB }), n(388685), n(539854);
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
    A = n(354459),
    C = n(981631);
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
    B = {},
    F = {},
    V = {},
    H = {},
    Y = {};
function W(e) {
    let t = j[e];
    return null == t && ((t = new T.ZP(e)), (j[e] = t)), t;
}
function K() {
    for (let e of L) ei(e);
    ea();
}
function z() {
    let e = [],
        t = y.Z.getChannelId();
    null != t && e.push(t);
    let n = y.Z.getVoiceChannelId();
    null == n || e.includes(n) || e.push(n);
    let r = f.default.getRemoteSessionId(),
        i = I.Z.getVoiceStateForSession(h.default.getId(), r);
    (null == i ? void 0 : i.channelId) != null && e.push(null == i ? void 0 : i.channelId),
        s().difference(L, e).forEach(ei);
    let a = s().difference(e, L);
    return (L = e), a;
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
    return t.reduce((t, n) => (e(W(n)) ? (er(n), en(n), !0) : t), !1);
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
    return q((t) => t.updateParticipant(e), t);
}
function X(e) {
    var t;
    let n = E.Z.getChannel(e),
        r = (null == n ? void 0 : n.isDM()) && 1 ? A.dF.AUTO : A.dF.NONE;
    return null != (t = M[e]) ? t : [r, A.dF.NONE];
}
function J(e) {
    if (null == M[e]) return !1;
    let [t] = M[e];
    return t !== A.dF.NONE;
}
function $(e) {
    null == k[e] &&
        (k[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0,
        });
    let t = k[e],
        n = performance.now(),
        r = J(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[r ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function ee(e, t) {
    $(e);
    let n = J(e);
    null == t ? delete M[e] : (M[e] = t), n !== J(e) && k[e].toggleCount++;
}
function et(e) {
    return e.size(T.sI.STREAM) > 0 || e.size(T.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function en(e) {
    let t = h.default.getId(),
        n = W(e);
    if (0 === n.size() || y.Z.getVoiceChannelId() !== e) return void ee(e, null);
    let r = A.dF.NONE,
        i = n.toArray(T.sI.STREAM).find((e) => e.type === A.fO.STREAM && m.Z.getActiveStreamForStreamKey(e.id));
    if (null != i) a()(i.type === A.fO.STREAM, "Impossible condition"), (r = i.id);
    else if (1 === n.size()) r = t;
    else if (1 === n.size(T.sI.VIDEO)) {
        let [e] = n.toArray(T.sI.VIDEO);
        r = e.id;
    } else {
        var o;
        let e = n.toArray().find((e) => e.type === A.fO.USER && e.id !== t && !e.ringing);
        r = null != (o = null == e ? void 0 : e.id) ? o : t;
    }
    let [s] = X(e);
    if (s !== A.dF.AUTO && s !== A.dF.NONE) {
        let e = n.getParticipant(s);
        (null == e || (e.type === A.fO.STREAM && null == m.Z.getActiveStreamForStreamKey(e.id))) && (s = A.dF.NONE);
    }
    ee(e, [s, r]);
}
function er(e) {
    let t = W(e);
    if (0 === t.size()) return;
    let n = eU(e) || et(t) ? C.WtW.VIDEO : C.WtW.VOICE;
    n === C.WtW.VOICE ? (delete U[e], delete G[e]) : (U[e] = n);
}
function ei(e) {
    delete j[e], delete M[e], delete U[e], delete G[e];
}
function ea() {
    return q((e) => e.rebuild(), z());
}
function eo(e) {
    let { channelId: t, currentVoiceChannelId: n } = e;
    return null != t ? delete k[t] : null != n && (delete F[n], delete H[n], $(n)), ea();
}
function es(e) {
    let { channelId: t, messageId: n } = e,
        r = ea();
    if (null == t || null == n || F[t]) return r;
    let i = E.Z.getChannel(t);
    return null != i && i.isGuildVocal() ? ((V[t] = !1), (F[t] = !0), !0) : r;
}
function el(e) {
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
            W(i).updateGuildRingingUsers(r, !1),
        n && null != i && !L.includes(i))
            ? e
            : Q(r) || e;
    }, !1);
}
function ec() {
    return q((e) => e.updateEmbeddedActivities());
}
function eu() {
    b.Z.getUserIds().forEach((e) => Q(e));
}
function ed(e) {
    let { userId: t } = e;
    return q((e) => e.updateParticipantSpeaking(t));
}
function ef() {
    return q((e) => e.updateParticipantSpeaking(h.default.getId()));
}
function ep(e) {
    let { user: t } = e;
    return Q(t.id);
}
function e_(e) {
    let { channelId: t } = e;
    return q((e) => e.rebuild(), [t]);
}
function em(e) {
    let { channelId: t } = e;
    return ei(t);
}
function eh(e) {
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
    s().forEach(n, (e) => ei(e));
}
function eg(e) {
    let { channelId: t, participantsOpen: n } = e;
    Z[t] = n;
}
function eE(e) {
    let { channelId: t, voiceParticipantsHidden: n } = e;
    B[t] = n;
}
function eb(e) {
    let { channelId: t, selfStreamHidden: n } = e,
        r = h.default.getId();
    if (n) {
        let [e] = X(t);
        (0, p.DB)(e) && e.includes(r) && ee(t, null);
    }
    Q(r, [t]);
}
function ey(e) {
    let { channelId: t, large: n } = e;
    H[t] = n;
}
function eO(e) {
    let { channelId: t, dismissed: n } = e;
    Y[t] = n;
}
function ev(e) {
    let { channelId: t, chatOpen: n } = e;
    (F[t] = n), n && (V[t] = !1);
}
function eS(e) {
    let { channelId: t, participantsListOpen: n } = e;
    (V[t] = n), n && (F[t] = !1);
}
function eI(e) {
    let { channelId: t, id: n } = e,
        r = W(t);
    null == n &&
        r.toArray(T.sI.STREAM).forEach((e) => {
            (0, A._5)(e) && r.updateParticipant(e.user.id);
        });
    let [, i] = X(t);
    if ((ee(t, [null != n ? n : A.dF.NONE, i]), (0, p.DB)(n))) {
        try {
            let { ownerId: e } = (0, p.my)(n);
            e === h.default.getId() && Q(e, [t]);
        } catch (e) {
            D.warn("INVALID STREAM KEY FORMAT ".concat(n), e);
        }
        et(r) || (Z[t] = !1);
    }
}
function eT(e) {
    let { channelId: t, participantId: n } = e,
        [r] = X(t);
    r === n && ee(t, null);
    let i = W(t),
        a = i.getParticipant(n);
    null != a && a.type !== A.fO.ACTIVITY && (i.updateParticipantPoppedOut(n, !0), Q(a.user.id, [t]));
}
function eA(e) {
    let { channelId: t, participantId: n } = e,
        r = W(t);
    r.updateParticipantPoppedOut(n, !1);
    let i = r.getParticipant(n);
    null != i && i.type !== A.fO.ACTIVITY && Q(i.user.id, [t]);
}
function eC(e) {
    let { channel: t } = e;
    if (t.type === C.d4z.GROUP_DM) {
        let e = t.originChannelId;
        if (null != e) {
            var n, r;
            return (
                (G[t.id] = {
                    [C.IlC.APP]: null != (r = null == (n = G[e]) ? void 0 : n[C.IlC.APP]) ? r : C.AEg.NORMAL,
                }),
                !0
            );
        }
    }
    return !1;
}
function eN(e) {
    let {
        channel: { id: t },
    } = e;
    return delete F[t], delete V[t], delete H[t], ei(t);
}
function eP(e) {
    let { channelId: t, layout: n, appContext: r } = e;
    G[t] = w(P({}, G[t]), { [r]: n });
}
function eR(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, p.my)(t);
    return Q(r, [n]);
}
function ew(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, p.my)(t);
    return Q(r, [n]);
}
function eD(e) {
    let { channelId: t, userId: n } = e;
    return Q(n, [t]);
}
function ex(e) {
    let { channelId: t, userId: n } = e;
    return Q(n, [t]);
}
function eL(e) {
    let { userId: t } = e;
    return Q(t);
}
function ej(e) {
    let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
    return q((e) => e.updateParticipantQuality(n, r, i), [t]);
}
function eM(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (
        !_.Z.getCurrentConfig({
            guildId: n,
            location: "guild_ring_start",
        }).enabled
    )
        return !1;
    let i = W(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !0)), q((e) => e.rebuild(), [t]);
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
    let i = W(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !1)), q((e) => e.rebuild(), [t]);
}
function eU(e) {
    var t;
    return !!(null == (t = E.Z.getChannel(e)) ? void 0 : t.isGuildVocalOrThread());
}
function eG(e) {
    var t;
    return !!(null == (t = E.Z.getChannel(e)) ? void 0 : t.isGuildVocal());
}
class eZ extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(m.Z, h.default, g.Z, E.Z, u.ZP, f.default, b.Z, y.Z, O.Z, v.default, S.Z, I.Z),
            this.syncWith([u.ZP], ec),
            this.syncWith([b.Z], eu),
            this.syncWith([f.default], ea),
            (null == e ? void 0 : e.voiceParticipantsHidden) !== void 0 &&
                Object.assign(B, null == e ? void 0 : e.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: B };
    }
    getParticipantsVersion(e) {
        return W(e).version;
    }
    getParticipants(e) {
        var t;
        return null != (t = W(e).toArray()) ? t : x;
    }
    getSpeakingParticipants(e) {
        var t;
        return null != (t = W(e).toArray(T.sI.SPEAKING)) ? t : x;
    }
    getFilteredParticipants(e) {
        var t;
        let n = W(e);
        return null != (t = B[e]) && t ? n.toArray(T.sI.FILTERED) : n.toArray(T.sI.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        var t;
        return null != (t = W(e).toArray(T.sI.VIDEO)) ? t : x;
    }
    getStreamParticipants(e) {
        var t;
        return null != (t = W(e).toArray(T.sI.STREAM)) ? t : x;
    }
    getActivityParticipants(e) {
        var t;
        return null != (t = W(e).toArray(T.sI.ACTIVITY)) ? t : x;
    }
    getParticipant(e, t) {
        return W(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = W(e);
        return t.size() - t.size(T.sI.STREAM) - t.size(T.sI.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var t;
        return null == (t = Z[e]) || t;
    }
    getVoiceParticipantsHidden(e) {
        var t;
        return null != (t = B[e]) && t;
    }
    getSelectedParticipantId(e) {
        let [t, n] = X(e);
        return t === A.dF.NONE ? null : t !== A.dF.AUTO ? t : n === A.dF.NONE || n === A.dF.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : W(e).getParticipant(t);
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
        return W(e).guildRingingUsers;
    }
    getMode(e) {
        var t;
        return null != (t = U[e]) ? t : eU(e) ? C.WtW.VIDEO : C.WtW.VOICE;
    }
    getLayout(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.IlC.APP;
        if (__OVERLAY__) return C.AEg.NORMAL;
        let i = eG(e);
        return null != (n = null == (t = G[e]) ? void 0 : t[r]) ? n : i ? C.AEg.NO_CHAT : C.AEg.NORMAL;
    }
    getChatOpen(e) {
        var t, n, r;
        return null != (r = null != (n = F[e]) ? n : null == (t = E.Z.getChannel(e)) ? void 0 : t.isVocalThread()) && r;
    }
    getAllChatOpen() {
        return F;
    }
    getParticipantsListOpen(e) {
        var t;
        return null != (t = V[e]) && t;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.IlC.APP;
        return Object.values(G).some((t) => t[e] === C.AEg.FULL_SCREEN);
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
N(eZ, "displayName", "ChannelRTCStore"), N(eZ, "persistKey", "ChannelRTCStore");
let eB = new eZ(c.Z, {
    CONNECTION_OPEN: K,
    CONNECTION_OPEN_SUPPLEMENTAL: ea,
    THREAD_LIST_SYNC: ea,
    OVERLAY_INITIALIZE: ea,
    VOICE_CHANNEL_SELECT: eo,
    CHANNEL_SELECT: es,
    CHANNEL_RTC_ACTIVE_CHANNELS: ea,
    VOICE_STATE_UPDATES: el,
    CHANNEL_CREATE: eC,
    CHANNEL_DELETE: eN,
    THREAD_DELETE: eN,
    CALL_CREATE: e_,
    CALL_UPDATE: e_,
    CALL_DELETE: em,
    CHANNEL_RTC_SELECT_PARTICIPANT: eI,
    CHANNEL_RTC_POPOUT_PARTICIPANT: eT,
    CHANNEL_RTC_RETURN_PARTICIPANT: eA,
    CHANNEL_RTC_UPDATE_LAYOUT: eP,
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: eg,
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: eE,
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: ey,
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: eO,
    STREAM_UPDATE_SELF_HIDDEN: eb,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: ev,
    CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: eS,
    RTC_CONNECTION_VIDEO: eD,
    RTC_CONNECTION_PLATFORM: ex,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: eL,
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: ej,
    STREAM_CLOSE: eR,
    STREAM_DELETE: eR,
    STREAM_WATCH: ew,
    SPEAKING: ed,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: ed,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: ed,
    PUSH_TO_TALK_STATE_CHANGE: ef,
    GUILD_RING_START: eM,
    GUILD_RING_STOP: ek,
    USER_UPDATE: ep,
    GUILD_MEMBER_UPDATE: ep,
    GUILD_DELETE: eh,
});
