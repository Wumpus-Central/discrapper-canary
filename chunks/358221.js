n.d(t, { Z: () => eH }), n(388685), n(539854);
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
    _ = n(569545),
    p = n(163612),
    h = n(199902),
    m = n(314897),
    g = n(523746),
    E = n(592125),
    b = n(158776),
    y = n(944486),
    O = n(606304),
    v = n(594174),
    I = n(33039),
    T = n(979651),
    S = n(413523),
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
function R(e) {
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
function P(e, t) {
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
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = new d.Z("ChannelRTCStore"),
    L = Object.freeze([]),
    x = [],
    M = {},
    k = {},
    j = {},
    U = {},
    G = {},
    B = {},
    Z = {},
    F = {},
    V = {},
    H = {},
    Y = {},
    W = {};
function K(e) {
    let t = M[e];
    return null == t && ((t = new S.ZP(e, (t) => en(e).has(t))), (M[e] = t)), t;
}
function z() {
    for (let e of x) ec(e);
    eu();
}
function q() {
    let e = [],
        t = y.Z.getChannelId();
    null != t && e.push(t);
    let n = y.Z.getVoiceChannelId();
    null == n || e.includes(n) || e.push(n);
    let r = f.default.getRemoteSessionId(),
        i = T.Z.getVoiceStateForSession(m.default.getId(), r);
    (null == i ? void 0 : i.channelId) != null && e.push(null == i ? void 0 : i.channelId),
        s().difference(x, e).forEach(ec);
    let a = s().difference(e, x);
    return (x = e), a;
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x;
    return t.reduce((t, n) => (e(K(n)) ? (el(n), es(n), !0) : t), !1);
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x;
    return X((t) => t.updateParticipant(e), t);
}
function J(e) {
    var t;
    let n = E.Z.getChannel(e),
        r = (null == n ? void 0 : n.isDM()) && 1 ? A.dF.AUTO : A.dF.NONE;
    return null != (t = k[e]) ? t : [r, A.dF.NONE];
}
function $(e) {
    if (null == k[e]) return !1;
    let [t] = k[e];
    return t !== A.dF.NONE;
}
function ee(e) {
    null == j[e] &&
        (j[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0,
        });
    let t = j[e],
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
    null == t ? delete k[e] : (k[e] = t), n !== $(e) && j[e].toggleCount++;
}
function en(e) {
    return null == W[e] && (W[e] = new Set()), W[e];
}
function er(e, t) {
    en(e).add(t);
}
function ei(e, t) {
    en(e).delete(t);
}
function ea(e) {
    delete W[e];
}
function eo(e) {
    return e.size(S.sI.STREAM) > 0 || e.size(S.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function es(e) {
    let t = m.default.getId(),
        n = K(e);
    if (0 === n.size() || y.Z.getVoiceChannelId() !== e) return void et(e, null);
    let r = A.dF.NONE,
        i = n.toArray(S.sI.STREAM).find((e) => e.type === A.fO.STREAM && h.Z.getActiveStreamForStreamKey(e.id));
    if (null != i) a()(i.type === A.fO.STREAM, "Impossible condition"), (r = i.id);
    else if (1 === n.size()) r = t;
    else if (1 === n.size(S.sI.VIDEO)) {
        let [e] = n.toArray(S.sI.VIDEO);
        r = e.id;
    } else {
        var o;
        let e = n.toArray().find((e) => e.type === A.fO.USER && e.id !== t && !e.ringing);
        r = null != (o = null == e ? void 0 : e.id) ? o : t;
    }
    let [s] = J(e);
    if (s !== A.dF.AUTO && s !== A.dF.NONE) {
        let e = n.getParticipant(s);
        (null == e || (e.type === A.fO.STREAM && null == h.Z.getActiveStreamForStreamKey(e.id))) && (s = A.dF.NONE);
    }
    et(e, [s, r]);
}
function el(e) {
    let t = K(e);
    if (0 === t.size()) return;
    let n = eF(e) || eo(t) ? C.WtW.VIDEO : C.WtW.VOICE;
    n === C.WtW.VOICE ? (delete U[e], delete G[e]) : (U[e] = n);
}
function ec(e) {
    delete M[e], delete k[e], delete U[e], delete G[e], ea(e);
}
function eu() {
    return X((e) => e.rebuild(), q());
}
function ed(e) {
    let { channelId: t, currentVoiceChannelId: n } = e;
    return null != t ? delete j[t] : null != n && (delete F[n], delete H[n], ee(n)), eu();
}
function ef(e) {
    let { channelId: t, messageId: n } = e,
        r = eu(),
        i = E.Z.getChannel(t);
    return null == t ||
        null == n ||
        ((null == i ? void 0 : i.type) !== C.d4z.GUILD_VOICE &&
            (null == i ? void 0 : i.type) !== C.d4z.GUILD_STAGE_VOICE) ||
        F[t]
        ? r
        : ((V[t] = !1), (F[t] = !0), !0);
}
function e_(e) {
    let { voiceStates: t, initial: n } = e;
    return t.reduce((e, t) => {
        let { userId: r, channelId: i, guildId: a } = t;
        return (null != a &&
            null != i &&
            p.Z.getCurrentConfig(
                {
                    guildId: a,
                    location: "voice_status_update",
                },
                { autoTrackExposure: !1 },
            ).enabled &&
            K(i).updateGuildRingingUsers(r, !1),
        n && null != i && !x.includes(i))
            ? e
            : Q(r) || e;
    }, !1);
}
function ep() {
    return X((e) => e.updateEmbeddedActivities());
}
function eh() {
    b.Z.getUserIds().forEach((e) => Q(e));
}
function em(e) {
    let { userId: t } = e;
    return X((e) => e.updateParticipantSpeaking(t));
}
function eg(e) {
    let { user: t } = e;
    return Q(t.id);
}
function eE(e) {
    let { channelId: t } = e;
    return X((e) => e.rebuild(), [t]);
}
function eb(e) {
    let { channelId: t } = e;
    return ec(t);
}
function ey(e) {
    let { guild: t } = e,
        n = [];
    if (
        (s().forEach(x, (e) => {
            let r = E.Z.getChannel(e);
            (null == r || r.getGuildId() === t.id) && n.push(e);
        }),
        0 === n.length)
    )
        return !1;
    s().forEach(n, (e) => ec(e));
}
function eO(e) {
    let { channelId: t, participantsOpen: n } = e;
    B[t] = n;
}
function ev(e) {
    let { channelId: t, voiceParticipantsHidden: n } = e;
    Z[t] = n;
}
function eI(e) {
    let { channelId: t, selfStreamHidden: n } = e,
        r = m.default.getId();
    if (n) {
        let [e] = J(t);
        (0, _.DB)(e) && e.includes(r) && et(t, null);
    }
    Q(r, [t]);
}
function eT(e) {
    let { channelId: t, large: n } = e;
    H[t] = n;
}
function eS(e) {
    let { channelId: t, dismissed: n } = e;
    Y[t] = n;
}
function eA(e) {
    let { channelId: t, chatOpen: n } = e;
    (F[t] = n), n && (V[t] = !1);
}
function eC(e) {
    let { channelId: t, participantsListOpen: n } = e;
    (V[t] = n), n && (F[t] = !1);
}
function eN(e) {
    let { channelId: t, id: n } = e,
        r = K(t);
    null == n &&
        r.toArray(S.sI.STREAM).forEach((e) => {
            (0, A._5)(e) && r.updateParticipant(e.user.id);
        });
    let [, i] = J(t);
    if ((et(t, [null != n ? n : A.dF.NONE, i]), (0, _.DB)(n))) {
        try {
            let { ownerId: e } = (0, _.my)(n);
            e === m.default.getId() && Q(e, [t]);
        } catch (e) {
            D.warn("INVALID STREAM KEY FORMAT ".concat(n), e);
        }
        eo(r) || (B[t] = !1);
    }
}
function eR(e) {
    let { channelId: t, participantId: n } = e;
    er(t, n);
    let [r] = J(t);
    r === n && et(t, [A.dF.NONE, A.dF.NONE]);
    let i = K(t).getParticipant(n);
    null != i && i.type === A.fO.USER ? Q(i.user.id, [t]) : null != i && (0, A._5)(i) && Q(i.user.id, [t]);
}
function eP(e) {
    let { channelId: t, participantId: n } = e;
    ei(t, n);
    let r = K(t).getParticipant(n);
    null != r && r.type === A.fO.USER ? Q(r.user.id, [t]) : null != r && (0, A._5)(r) && Q(r.user.id, [t]);
}
function ew(e) {
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
function eD(e) {
    let {
        channel: { id: t },
    } = e;
    return delete F[t], delete V[t], delete H[t], ec(t);
}
function eL(e) {
    let { channelId: t, layout: n, appContext: r } = e;
    G[t] = w(R({}, G[t]), { [r]: n });
}
function ex(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, _.my)(t);
    return Q(r, [n]);
}
function eM(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, _.my)(t);
    return Q(r, [n]);
}
function ek(e) {
    let { channelId: t, userId: n } = e;
    return Q(n, [t]);
}
function ej(e) {
    let { channelId: t, userId: n } = e;
    return Q(n, [t]);
}
function eU(e) {
    let { userId: t } = e;
    return Q(t);
}
function eG(e) {
    let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
    return X((e) => e.updateParticipantQuality(n, r, i), [t]);
}
function eB(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (
        !p.Z.getCurrentConfig({
            guildId: n,
            location: "guild_ring_start",
        }).enabled
    )
        return !1;
    let i = K(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !0)), X((e) => e.rebuild(), [t]);
}
function eZ(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (
        !p.Z.getCurrentConfig({
            guildId: n,
            location: "guild_ring_start",
        }).enabled
    )
        return !1;
    let i = K(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !1)), X((e) => e.rebuild(), [t]);
}
function eF(e) {
    var t;
    return !!(null == (t = E.Z.getChannel(e)) ? void 0 : t.isGuildVocal());
}
class eV extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(h.Z, m.default, g.Z, E.Z, u.ZP, b.Z, y.Z, O.Z, v.default, I.Z, T.Z),
            this.syncWith([u.ZP], ep),
            this.syncWith([b.Z], eh),
            this.syncWith([f.default], eu),
            (null == e ? void 0 : e.voiceParticipantsHidden) !== void 0 &&
                Object.assign(Z, null == e ? void 0 : e.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: Z };
    }
    getParticipantsVersion(e) {
        return K(e).version;
    }
    getParticipants(e) {
        var t;
        return null != (t = K(e).toArray()) ? t : L;
    }
    getSpeakingParticipants(e) {
        var t;
        return null != (t = K(e).toArray(S.sI.SPEAKING)) ? t : L;
    }
    getFilteredParticipants(e) {
        var t;
        let n = K(e),
            r = en(e),
            i = null != (t = Z[e]) && t ? n.toArray(S.sI.FILTERED) : n.toArray();
        return 0 === r.size ? i : i.filter((e) => !r.has(e.id));
    }
    getVideoParticipants(e) {
        var t;
        return null != (t = K(e).toArray(S.sI.VIDEO)) ? t : L;
    }
    getStreamParticipants(e) {
        var t;
        return null != (t = K(e).toArray(S.sI.STREAM)) ? t : L;
    }
    getActivityParticipants(e) {
        var t;
        return null != (t = K(e).toArray(S.sI.ACTIVITY)) ? t : L;
    }
    getParticipant(e, t) {
        return K(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = K(e);
        return t.size() - t.size(S.sI.STREAM) - t.size(S.sI.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var t;
        return null == (t = B[e]) || t;
    }
    getVoiceParticipantsHidden(e) {
        var t;
        return null != (t = Z[e]) && t;
    }
    getSelectedParticipantId(e) {
        let [t, n] = J(e);
        return t === A.dF.NONE ? null : t !== A.dF.AUTO ? t : n === A.dF.NONE || n === A.dF.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : K(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = j[e];
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
        return null != (t = U[e]) ? t : eF(e) ? C.WtW.VIDEO : C.WtW.VOICE;
    }
    getLayout(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.IlC.APP;
        if (__OVERLAY__) return C.AEg.NORMAL;
        let i = eF(e);
        return null != (n = null == (t = G[e]) ? void 0 : t[r]) ? n : i ? C.AEg.NO_CHAT : C.AEg.NORMAL;
    }
    getChatOpen(e) {
        var t;
        return null != (t = F[e]) && t;
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
    getPoppedOutParticipantIds(e) {
        return en(e);
    }
    isParticipantPoppedOut(e, t) {
        return en(e).has(t);
    }
}
N(eV, "displayName", "ChannelRTCStore"), N(eV, "persistKey", "ChannelRTCStore");
let eH = new eV(c.Z, {
    CONNECTION_OPEN: z,
    CONNECTION_OPEN_SUPPLEMENTAL: eu,
    THREAD_LIST_SYNC: eu,
    OVERLAY_INITIALIZE: eu,
    VOICE_CHANNEL_SELECT: ed,
    CHANNEL_SELECT: ef,
    CHANNEL_RTC_ACTIVE_CHANNELS: eu,
    VOICE_STATE_UPDATES: e_,
    CHANNEL_CREATE: ew,
    CHANNEL_DELETE: eD,
    THREAD_DELETE: eD,
    CALL_CREATE: eE,
    CALL_UPDATE: eE,
    CALL_DELETE: eb,
    CHANNEL_RTC_SELECT_PARTICIPANT: eN,
    CHANNEL_RTC_POPOUT_PARTICIPANT: eR,
    CHANNEL_RTC_RETURN_PARTICIPANT: eP,
    CHANNEL_RTC_UPDATE_LAYOUT: eL,
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: eO,
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: ev,
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: eT,
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: eS,
    STREAM_UPDATE_SELF_HIDDEN: eI,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: eA,
    CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: eC,
    RTC_CONNECTION_VIDEO: ek,
    RTC_CONNECTION_PLATFORM: ej,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: eU,
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: eG,
    STREAM_CLOSE: ex,
    STREAM_DELETE: ex,
    STREAM_WATCH: eM,
    SPEAKING: em,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: em,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: em,
    GUILD_RING_START: eB,
    GUILD_RING_STOP: eZ,
    USER_UPDATE: eg,
    GUILD_MEMBER_UPDATE: eg,
    GUILD_DELETE: ey,
});
