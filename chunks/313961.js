n.d(t, {
    A: () => eB,
}),
    n(896048),
    n(321073);
var r,
    i = n(284009),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(311907),
    c = n(73153),
    u = n(933958),
    d = n(626584),
    f = n(643501),
    p = n(652896),
    _ = n(164891),
    h = n(616356),
    m = n(961350),
    g = n(470710),
    E = n(734057),
    b = n(290863),
    y = n(309010),
    O = n(485296),
    A = n(287809),
    v = n(803301),
    S = n(977997),
    I = n(568598),
    T = n(806931),
    C = n(652215);

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

function w(e, t) {
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

function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = new d.A("ChannelRTCStore"),
    x = Object.freeze([]),
    L = [],
    j = {},
    M = {},
    k = {},
    U = {},
    G = {},
    V = {},
    F = {},
    B = {},
    H = {},
    Y = {},
    W = {};

function K(e) {
    let t = j[e];
    return null == t && ((t = new I.Ay(e)), (j[e] = t)), t;
}

function z() {
    for (let e of L) ei(e);
    ea();
}

function q() {
    let e = [],
        t = y.A.getChannelId();
    null != t && e.push(t);
    let n = y.A.getVoiceChannelId();
    null == n || e.includes(n) || e.push(n);
    let r = f.default.getRemoteSessionId(),
        i = S.A.getVoiceStateForSession(m.default.getId(), r);
    (null == i ? void 0 : i.channelId) != null && e.push(null == i ? void 0 : i.channelId),
        o().difference(L, e).forEach(ei);
    let a = o().difference(e, L);
    return (L = e), a;
}

function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
    return t.reduce((t, n) => (e(K(n)) ? (er(n), en(n), !0) : t), !1);
}

function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
    return X((t) => t.updateParticipant(e), t);
}

function Q(e) {
    var t;
    let n = E.A.getChannel(e),
        r = (null == n ? void 0 : n.isDM()) && 1 ? T.jd.AUTO : T.jd.NONE;
    return null != (t = M[e]) ? t : [r, T.jd.NONE];
}

function $(e) {
    if (null == M[e]) return !1;
    let [t] = M[e];
    return t !== T.jd.NONE;
}

function J(e) {
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

function ee(e, t) {
    J(e);
    let n = $(e);
    null == t ? delete M[e] : (M[e] = t), n !== $(e) && k[e].toggleCount++;
}

function et(e) {
    return e.size(I.r4.STREAM) > 0 || e.size(I.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}

function en(e) {
    let t = m.default.getId(),
        n = K(e);
    if (0 === n.size() || y.A.getVoiceChannelId() !== e) return void ee(e, null);
    let r = T.jd.NONE,
        i = n.toArray(I.r4.STREAM).find((e) => e.type === T.lp.STREAM && h.A.getActiveStreamForStreamKey(e.id));
    if (null != i) a()(i.type === T.lp.STREAM, "Impossible condition"), (r = i.id);
    else if (1 === n.size()) r = t;
    else if (1 === n.size(I.r4.VIDEO)) {
        let [e] = n.toArray(I.r4.VIDEO);
        r = e.id;
    } else {
        var s;
        let e = n.toArray().find((e) => e.type === T.lp.USER && e.id !== t && !e.ringing);
        r = null != (s = null == e ? void 0 : e.id) ? s : t;
    }
    let [o] = Q(e);
    if (o !== T.jd.AUTO && o !== T.jd.NONE) {
        let e = n.getParticipant(o);
        (null == e || (e.type === T.lp.STREAM && null == h.A.getActiveStreamForStreamKey(e.id))) && (o = T.jd.NONE);
    }
    ee(e, [o, r]);
}

function er(e) {
    let t = K(e);
    if (0 === t.size()) return;
    let n = eU(e) || et(t) ? C._Of.VIDEO : C._Of.VOICE;
    if (n === C._Of.VOICE) {
        var r;
        let t = null == (r = G[e]) ? void 0 : r[C.BRT.APP];
        delete U[e], t !== C.DUB.HAVEN && delete G[e];
    } else U[e] = n;
}

function ei(e) {
    delete j[e], delete M[e], delete U[e], delete G[e];
}

function ea() {
    return X((e) => e.rebuild(), q());
}

function es(e) {
    let { channelId: t, currentVoiceChannelId: n } = e;
    return null != t ? delete k[t] : null != n && (delete B[n], delete Y[n], J(n)), ea();
}

function eo(e) {
    let { channelId: t, messageId: n } = e,
        r = ea();
    if (null == t || null == n || B[t]) return r;
    let i = E.A.getChannel(t);
    return null != i && i.isGuildVocal() ? ((H[t] = !1), (B[t] = !0), !0) : r;
}

function el(e) {
    let { voiceStates: t, initial: n } = e;
    return t.reduce((e, t) => {
        let { userId: r, channelId: i, guildId: a } = t;
        return (null != a &&
            null != i &&
            _.A.getCurrentConfig(
                {
                    guildId: a,
                    location: "voice_status_update",
                },
                {
                    autoTrackExposure: !1,
                },
            ).enabled &&
            K(i).updateGuildRingingUsers(r, !1),
        n && null != i && !L.includes(i))
            ? e
            : Z(r) || e;
    }, !1);
}

function ec() {
    return X((e) => e.updateEmbeddedActivities());
}

function eu() {
    b.A.getUserIds().forEach((e) => Z(e));
}

function ed(e) {
    let { userId: t } = e;
    return X((e) => e.updateParticipantSpeaking(t));
}

function ef() {
    return X((e) => e.updateParticipantSpeaking(m.default.getId()));
}

function ep(e) {
    let { user: t } = e;
    return Z(t.id);
}

function e_(e) {
    let { channelId: t } = e;
    return X((e) => e.rebuild(), [t]);
}

function eh(e) {
    let { channelId: t } = e;
    return ei(t);
}

function em(e) {
    let { guild: t } = e,
        n = [];
    if (
        (o().forEach(L, (e) => {
            let r = E.A.getChannel(e);
            (null == r || r.getGuildId() === t.id) && n.push(e);
        }),
        0 === n.length)
    )
        return !1;
    o().forEach(n, (e) => ei(e));
}

function eg(e) {
    let { channelId: t, participantsOpen: n } = e;
    V[t] = n;
}

function eE(e) {
    let { channelId: t, voiceParticipantsHidden: n } = e;
    F[t] = n;
}

function eb(e) {
    let { channelId: t, selfStreamHidden: n } = e,
        r = m.default.getId();
    if (n) {
        let [e] = Q(t);
        (0, p.wL)(e) && e.includes(r) && ee(t, null);
    }
    Z(r, [t]);
}

function ey(e) {
    let { channelId: t, large: n } = e;
    Y[t] = n;
}

function eO(e) {
    let { channelId: t, dismissed: n } = e;
    W[t] = n;
}

function eA(e) {
    let { channelId: t, chatOpen: n } = e;
    (B[t] = n), n && (H[t] = !1);
}

function ev(e) {
    let { channelId: t, participantsListOpen: n } = e;
    (H[t] = n), n && (B[t] = !1);
}

function eS(e) {
    let { channelId: t, id: n } = e,
        r = K(t);
    null == n &&
        r.toArray(I.r4.STREAM).forEach((e) => {
            (0, T.Ay)(e) && r.updateParticipant(e.user.id);
        });
    let [, i] = Q(t);
    if ((ee(t, [null != n ? n : T.jd.NONE, i]), (0, p.wL)(n))) {
        try {
            let { ownerId: e } = (0, p.Iy)(n);
            e === m.default.getId() && Z(e, [t]);
        } catch (e) {
            D.warn("INVALID STREAM KEY FORMAT ".concat(n), e);
        }
        et(r) || (V[t] = !1);
    }
}

function eI(e) {
    let { channelId: t, participantId: n } = e,
        [r] = Q(t);
    r === n && ee(t, null);
    let i = K(t),
        a = i.getParticipant(n);
    null == a || (a.type !== T.lp.ACTIVITY && (i.updateParticipantPoppedOut(n, !0), Z(a.user.id, [t])));
}

function eT(e) {
    let { channelId: t, participantId: n } = e,
        r = K(t);
    r.updateParticipantPoppedOut(n, !1);
    let i = r.getParticipant(n);
    null == i || (i.type !== T.lp.ACTIVITY && Z(i.user.id, [t]));
}

function eC(e) {
    let { channel: t } = e;
    if (t.type === C.rbe.GROUP_DM) {
        let e = t.originChannelId;
        if (null != e) {
            var n, r;
            return (
                (G[t.id] = {
                    [C.BRT.APP]: null != (n = null == (r = G[e]) ? void 0 : r[C.BRT.APP]) ? n : C.DUB.NORMAL,
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
    return delete B[t], delete H[t], delete Y[t], ei(t);
}

function eR(e) {
    let { channelId: t, layout: n, appContext: r } = e;
    G[t] = P(R({}, G[t]), {
        [r]: n,
    });
}

function ew(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, p.Iy)(t);
    return Z(r, [n]);
}

function eP(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, p.Iy)(t);
    return Z(r, [n]);
}

function eD(e) {
    let { channelId: t, userId: n } = e;
    return Z(n, [t]);
}

function ex(e) {
    let { channelId: t, userId: n } = e;
    return Z(n, [t]);
}

function eL(e) {
    let { userId: t } = e;
    return Z(t);
}

function ej(e) {
    let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
    return X((e) => e.updateParticipantQuality(n, r, i), [t]);
}

function eM(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (
        !_.A.getCurrentConfig({
            guildId: n,
            location: "guild_ring_start",
        }).enabled
    )
        return !1;
    let i = K(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !0)), X((e) => e.rebuild(), [t]);
}

function ek(e) {
    let { channelId: t, guildId: n, ringing: r } = e;
    if (
        !_.A.getCurrentConfig({
            guildId: n,
            location: "guild_ring_start",
        }).enabled
    )
        return !1;
    let i = K(t);
    return r.forEach((e) => i.updateGuildRingingUsers(e, !1)), X((e) => e.rebuild(), [t]);
}

function eU(e) {
    var t;
    return !!(null == (t = E.A.getChannel(e)) ? void 0 : t.isGuildVocalOrThread());
}

function eG(e) {
    var t;
    return !!(null == (t = E.A.getChannel(e)) ? void 0 : t.isGuildVocal());
}

function eV(e) {
    var t;
    return !!(null == (t = E.A.getChannel(e)) ? void 0 : t.isVocalThread());
}
class eF extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(h.A, m.default, g.A, E.A, u.Ay, f.default, b.A, y.A, O.A, A.default, v.A, S.A),
            this.syncWith([u.Ay], ec),
            this.syncWith([b.A], eu),
            this.syncWith([f.default], ea),
            (null == e ? void 0 : e.voiceParticipantsHidden) !== void 0 &&
                Object.assign(F, null == e ? void 0 : e.voiceParticipantsHidden);
    }
    getState() {
        return {
            voiceParticipantsHidden: F,
        };
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
        return null != (t = K(e).toArray(I.r4.SPEAKING)) ? t : x;
    }
    getFilteredParticipants(e) {
        var t;
        let n = K(e);
        return null != (t = F[e]) && t ? n.toArray(I.r4.FILTERED) : n.toArray(I.r4.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        var t;
        return null != (t = K(e).toArray(I.r4.VIDEO)) ? t : x;
    }
    getStreamParticipants(e) {
        var t;
        return null != (t = K(e).toArray(I.r4.STREAM)) ? t : x;
    }
    getActivityParticipants(e) {
        var t;
        return null != (t = K(e).toArray(I.r4.ACTIVITY)) ? t : x;
    }
    getParticipant(e, t) {
        return K(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = K(e);
        return t.size() - t.size(I.r4.STREAM) - t.size(I.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var t;
        return null == (t = V[e]) || t;
    }
    getVoiceParticipantsHidden(e) {
        var t;
        return null != (t = F[e]) && t;
    }
    getSelectedParticipantId(e) {
        let [t, n] = Q(e);
        return t === T.jd.NONE ? null : t !== T.jd.AUTO ? t : n === T.jd.NONE || n === T.jd.AUTO ? null : n;
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
        return null != (t = U[e]) ? t : eU(e) ? C._Of.VIDEO : C._Of.VOICE;
    }
    getLayout(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.BRT.APP;
        if (__OVERLAY__) return C.DUB.NORMAL;
        let i = this.getUserParticipantCount(e) > 0,
            a = eG(e) || (i && eV(e));
        return null != (t = null == (n = G[e]) ? void 0 : n[r]) ? t : a ? C.DUB.NO_CHAT : C.DUB.NORMAL;
    }
    getChatOpen(e) {
        var t, n, r;
        return null != (t = null != (n = B[e]) ? n : null == (r = E.A.getChannel(e)) ? void 0 : r.isVocalThread()) && t;
    }
    getAllChatOpen() {
        return B;
    }
    getParticipantsListOpen(e) {
        var t;
        return null != (t = H[e]) && t;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.BRT.APP;
        return Object.values(G).some((t) => t[e] === C.DUB.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return Y[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return W[e];
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
N(eF, "displayName", "ChannelRTCStore"), N(eF, "persistKey", "ChannelRTCStore");
let eB = new eF(c.h, {
    CONNECTION_OPEN: z,
    CONNECTION_OPEN_SUPPLEMENTAL: ea,
    THREAD_LIST_SYNC: ea,
    OVERLAY_INITIALIZE: ea,
    VOICE_CHANNEL_SELECT: es,
    CHANNEL_SELECT: eo,
    CHANNEL_RTC_ACTIVE_CHANNELS: ea,
    VOICE_STATE_UPDATES: el,
    CHANNEL_CREATE: eC,
    CHANNEL_DELETE: eN,
    THREAD_DELETE: eN,
    CALL_CREATE: e_,
    CALL_UPDATE: e_,
    CALL_DELETE: eh,
    CHANNEL_RTC_SELECT_PARTICIPANT: eS,
    CHANNEL_RTC_POPOUT_PARTICIPANT: eI,
    CHANNEL_RTC_RETURN_PARTICIPANT: eT,
    CHANNEL_RTC_UPDATE_LAYOUT: eR,
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: eg,
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: eE,
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: ey,
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: eO,
    STREAM_UPDATE_SELF_HIDDEN: eb,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: eA,
    CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: ev,
    RTC_CONNECTION_VIDEO: eD,
    RTC_CONNECTION_PLATFORM: ex,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: eL,
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: ej,
    STREAM_CLOSE: ew,
    STREAM_DELETE: ew,
    STREAM_WATCH: eP,
    SPEAKING: ed,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: ed,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: ed,
    PUSH_TO_TALK_STATE_CHANGE: ef,
    GUILD_RING_START: eM,
    GUILD_RING_STOP: ek,
    USER_UPDATE: ep,
    GUILD_MEMBER_UPDATE: ep,
    GUILD_DELETE: em,
});
