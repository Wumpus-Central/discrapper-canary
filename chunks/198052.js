(n.d(t, { A: () => eA }), n(321073));
var i = n(284009),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(73153),
    d = n(933958),
    c = n(587895),
    u = n(260498),
    _ = n(333807),
    E = n(626584),
    A = n(91242),
    h = n(643501),
    f = n(652896),
    I = n(209932),
    p = n(312006),
    T = n(616356),
    m = n(280450),
    g = n(470710),
    S = n(734057),
    N = n(290863),
    C = n(309010),
    O = n(485296),
    R = n(287809),
    L = n(803301),
    y = n(977997),
    D = n(568598);
let v = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-08-dont-close-chat",
    defaultConfig: { closeChatOnLeave: !0 },
    variations: { 1: { closeChatOnLeave: !1 } },
});
var b = n(806931),
    M = n(652215);
let P = new E.A("ChannelRTCStore");
P.enableNativeLogger(!0);
let U = Object.freeze([]),
    w = [],
    G = new Set(),
    x = {},
    k = {},
    F = {},
    B = {},
    V = {},
    H = {},
    j = {},
    W = {},
    Y = {},
    K = {},
    $ = {};
function z(e) {
    let t = x[e];
    return (null == t && ((t = new D.Ay(e)), (x[e] = t)), t);
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
    return t.reduce(
        (t, n) =>
            e(z(n))
                ? ((function (e) {
                      let t = z(e);
                      if (0 === t.size()) return;
                      let n = e_(e) || et(t) ? M._Of.VIDEO : M._Of.VOICE;
                      n === M._Of.VOICE ? (delete B[e], delete V[e]) : (B[e] = n);
                  })(n),
                  (function (e) {
                      let t = m.default.getId(),
                          n = z(e);
                      if (0 === n.size() || C.Ay.getVoiceChannelId() !== e) return ee(e, null);
                      let i = b.jd.NONE,
                          a = n
                              .toArray(D.r4.STREAM)
                              .find((e) => e.type === b.lp.STREAM && null != T.A.getActiveStreamForStreamKey(e.id));
                      if (null != a) (r()(a.type === b.lp.STREAM, "Impossible condition"), (i = a.id));
                      else if (1 === n.size()) i = t;
                      else if (1 === n.size(D.r4.VIDEO)) {
                          let [e] = n.toArray(D.r4.VIDEO);
                          i = e.id;
                      } else {
                          let e = n.toArray().find((e) => e.type === b.lp.USER && e.id !== t && !e.ringing);
                          i = e?.id ?? t;
                      }
                      let [s] = Z(e);
                      if (s !== b.jd.AUTO && s !== b.jd.NONE) {
                          let e = n.getParticipant(s);
                          (null == e || (e.type === b.lp.STREAM && null == T.A.getActiveStreamForStreamKey(e.id))) &&
                              (s = b.jd.NONE);
                      }
                      (s === b.jd.NONE && null != a && !0 === Y[e] && (s = a.id), ee(e, [s, i]));
                  })(n),
                  !0)
                : t,
        !1,
    );
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
    return X((t) => t.updateParticipant(e), t);
}
function Z(e) {
    let t = S.A.getChannel(e),
        n = t?.isDM() && 1 ? b.jd.AUTO : b.jd.NONE;
    return k[e] ?? [n, b.jd.NONE];
}
function Q(e) {
    if (null == k[e]) return !1;
    let [t] = k[e];
    return t !== b.jd.NONE;
}
function J(e) {
    null == F[e] && (F[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = F[e],
        n = performance.now(),
        i = Q(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[i ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function ee(e, t) {
    J(e);
    let n = Q(e);
    (null == t ? delete k[e] : (k[e] = t), n !== Q(e) && F[e].toggleCount++);
}
function et(e) {
    return e.size(D.r4.STREAM) > 0 || e.size(D.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function en(e) {
    (delete x[e], delete k[e], delete B[e], delete V[e], delete Y[e]);
}
function ei() {
    let e, t, n, i, r, a;
    return X(
        (e) => e.rebuild(),
        ((e = []),
        null != (t = C.Ay.getChannelId()) && e.push(t),
        null == (n = C.Ay.getVoiceChannelId()) || e.includes(n) || e.push(n),
        (i = h.default.getRemoteSessionId()),
        (r = y.A.getVoiceStateForSession(m.default.getId(), i)),
        r?.channelId != null && e.push(r?.channelId),
        s().difference(w, e).forEach(en),
        (a = s().difference(e, w)),
        (w = e),
        a),
    );
}
function er(e, t) {
    t ? (G.add(e), ($[e] = !1)) : G.delete(e);
}
function ea() {
    return X((e) => e.updateEmbeddedActivities());
}
function es() {
    let e = A.A.getMainFrame();
    return (
        (!!w.some((e) =>
            z(e)
                .toArray(D.r4.ACTIVITY)
                .some((e) => e.type === b.lp.ACTIVITY && null != e.frameId),
        ) ||
            (null != e && !!(0, _.A)(e.applicationId))) &&
        ea()
    );
}
function el(e) {
    let { userId: t } = e;
    return X((e) => e.updateParticipantSpeaking(t));
}
function eo(e) {
    let { user: t } = e;
    return q(t.id);
}
function ed(e) {
    let { channelId: t } = e;
    return X((e) => e.rebuild(), [t]);
}
function ec(e) {
    let {
        channel: { id: t },
    } = e;
    return (G.delete(t), delete W[t], en(t));
}
function eu(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: i } = (0, f.Iy)(t);
    return q(i, [n]);
}
function e_(e) {
    return !!S.A.getChannel(e)?.isGuildVocalOrThread();
}
class eE extends l.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        (this.waitFor(
            c.A,
            T.A,
            m.default,
            g.A,
            S.A,
            u.Ay,
            d.Ay,
            A.A,
            h.default,
            N.A,
            C.Ay,
            I.A,
            O.A,
            p.Ay,
            R.default,
            L.A,
            y.A,
        ),
            this.syncWith([d.Ay], ea),
            this.syncWith([h.default], ei),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(j, e?.voiceParticipantsHidden));
    }
    getState() {
        return { voiceParticipantsHidden: j };
    }
    getParticipantsVersion(e) {
        return z(e).version;
    }
    getParticipants(e) {
        return z(e).toArray() ?? U;
    }
    getSpeakingParticipants(e) {
        return z(e).toArray(D.r4.SPEAKING) ?? U;
    }
    getFilteredParticipants(e) {
        let t = z(e);
        return j[e] ? t.toArray(D.r4.FILTERED) : t.toArray(D.r4.NOT_POPPED_OUT);
    }
    getStageSpeakerParticipants(e) {
        return z(e).toArray(D.r4.STAGE_SPEAKER);
    }
    getVideoParticipants(e) {
        return z(e).toArray(D.r4.VIDEO) ?? U;
    }
    getStreamParticipants(e) {
        return z(e).toArray(D.r4.STREAM) ?? U;
    }
    getActivityParticipants(e) {
        return z(e).toArray(D.r4.ACTIVITY) ?? U;
    }
    getParticipant(e, t) {
        return z(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = z(e);
        return t.size() - t.size(D.r4.STREAM) - t.size(D.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return H[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return j[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = Z(e);
        return t === b.jd.NONE ? null : t !== b.jd.AUTO ? t : n === b.jd.NONE || n === b.jd.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : z(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = F[e];
        return null == t
            ? {}
            : {
                  view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                  view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                  view_mode_toggle_count: t.toggleCount,
              };
    }
    getMode(e) {
        return B[e] ?? (e_(e) ? M._Of.VIDEO : M._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M.BRT.APP;
        if (__OVERLAY__) return M.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            i = !!S.A.getChannel(e)?.isGuildVocal() || (n && !!S.A.getChannel(e)?.isVocalThread());
        return V[e]?.[t] ?? (i ? M.DUB.NO_CHAT : M.DUB.NORMAL);
    }
    getChatOpen(e) {
        return G.has(e);
    }
    getOpenChatChannelIds() {
        return G;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M.BRT.APP;
        return Object.values(V).some((t) => t[e] === M.DUB.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return W[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return K[e];
    }
    getStageAudienceSidebarOpen(e) {
        return $[e] ?? !G.has(e);
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
let eA = new eE(o.h, {
    CONNECTION_OPEN: function () {
        for (let e of w) en(e);
        ei();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: ei,
    THREAD_LIST_SYNC: ei,
    OVERLAY_INITIALIZE: ei,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e,
            i = !1;
        if (null != t) delete F[t];
        else
            null != n &&
                ((!G.has(n) || v.getConfig({ location: "handleVoiceChannelSelect" }).closeChatOnLeave) && G.delete(n),
                delete W[n],
                J(n));
        t !== n && null != n && (i = X((e) => e.rebuild(), [n]));
        let r = ei();
        return i || r;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            i = ei();
        if (null == t || null == n || G.has(t)) return i;
        let r = S.A.getChannel(t);
        return null != r && r.isGuildVocal() ? (er(t, !0), !0) : i;
    },
    CHANNEL_RTC_ACTIVE_CHANNELS: ei,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t, initial: n } = e;
        return t.reduce((e, t) => {
            let { userId: i, channelId: r } = t;
            return n && null != r && !w.includes(r) ? e : q(i) || e;
        }, !1);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (t.type === M.rbe.GROUP_DM) {
            let e = t.originChannelId;
            if (null != e) return ((V[t.id] = { [M.BRT.APP]: V[e]?.[M.BRT.APP] ?? M.DUB.NORMAL }), !0);
        }
        return !1;
    },
    CHANNEL_DELETE: ec,
    THREAD_DELETE: ec,
    CALL_CREATE: ed,
    CALL_UPDATE: ed,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        return en(t);
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        var t;
        let { channelId: n, id: i } = e,
            r = z(n);
        ((t = n),
            S.A.getChannel(t)?.isGuildStageVoice() && (Y[n] = (0, f.wL)(i)),
            null == i &&
                r.toArray(D.r4.STREAM).forEach((e) => {
                    (0, b.Ay)(e) && r.updateParticipant(e.user.id);
                }));
        let [, a] = Z(n);
        if ((ee(n, [i ?? b.jd.NONE, a]), (0, f.wL)(i))) {
            try {
                let { ownerId: e } = (0, f.Iy)(i);
                e === m.default.getId() && q(e, [n]);
            } catch (e) {
                P.warn(`INVALID STREAM KEY FORMAT ${i}`, e);
            }
            et(r) || (H[n] = !1);
        }
    },
    FRAME_LAUNCH: es,
    FRAME_STOP: es,
    FRAME_PROMOTE: es,
    FRAME_CLEAR_MAIN_SLOT: es,
    APPLICATION_FETCH_SUCCESS: es,
    APPLICATIONS_FETCH_SUCCESS: es,
    CONJURE_PROJECTS_FETCH_SUCCESS: es,
    CHANNEL_RTC_POPOUT_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            [i] = Z(t);
        i === n && ee(t, null);
        let r = z(t),
            a = r.getParticipant(n);
        null == a || (a.type !== b.lp.ACTIVITY && (r.updateParticipantPoppedOut(n, !0), q(a.user.id, [t])));
    },
    CHANNEL_RTC_RETURN_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            i = z(t);
        i.updateParticipantPoppedOut(n, !1);
        let r = i.getParticipant(n);
        null == r || (r.type !== b.lp.ACTIVITY && q(r.user.id, [t]));
    },
    CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
        let { channelId: t, layout: n, appContext: i } = e;
        V[t] = { ...V[t], [i]: n };
    },
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function (e) {
        let { channelId: t, participantsOpen: n } = e;
        H[t] = n;
    },
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function (e) {
        let { channelId: t, voiceParticipantsHidden: n } = e;
        j[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function (e) {
        let { channelId: t, large: n } = e;
        W[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function (e) {
        let { channelId: t, dismissed: n } = e;
        K[t] = n;
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e,
            i = m.default.getId();
        if (n) {
            let [e] = Z(t);
            (0, f.wL)(e) && e.includes(i) && ee(t, null);
        }
        q(i, [t]);
    },
    CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
        let { channelId: t, chatOpen: n } = e;
        er(t, n);
    },
    CHANNEL_RTC_UPDATE_STAGE_AUDIENCE_SIDEBAR_OPEN: function (e) {
        let { channelId: t, open: n } = e;
        (($[t] = n), n && er(t, !1));
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { channelId: t, userId: n } = e;
        return q(n, [t]);
    },
    RTC_CONNECTION_PLATFORM: function (e) {
        let { channelId: t, userId: n } = e;
        return q(n, [t]);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { userId: t } = e;
        return q(t);
    },
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function (e) {
        let { channelId: t, senderUserId: n, maxResolution: i, maxFrameRate: r } = e;
        return X((e) => e.updateParticipantQuality(n, i, r), [t]);
    },
    STREAM_CLOSE: eu,
    STREAM_DELETE: eu,
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { channelId: n, ownerId: i } = (0, f.Iy)(t);
        return q(i, [n]);
    },
    SPEAKING: el,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: el,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: el,
    PUSH_TO_TALK_STATE_CHANGE: function () {
        return X((e) => e.updateParticipantSpeaking(m.default.getId()));
    },
    USER_UPDATE: eo,
    GUILD_MEMBER_UPDATE: eo,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        if (
            (s().forEach(w, (e) => {
                let i = S.A.getChannel(e);
                (null == i || i.getGuildId() === t.id) && n.push(e);
            }),
            0 === n.length)
        )
            return !1;
        s().forEach(n, (e) => en(e));
    },
});
