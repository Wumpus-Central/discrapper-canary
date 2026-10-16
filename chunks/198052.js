(n.d(t, { A: () => eE }), n(321073));
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
    I = n(312006),
    p = n(616356),
    T = n(280450),
    m = n(470710),
    g = n(734057),
    S = n(290863),
    N = n(309010),
    C = n(485296),
    O = n(287809),
    R = n(803301),
    L = n(977997),
    y = n(568598);
let D = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-08-dont-close-chat",
    defaultConfig: { closeChatOnLeave: !0 },
    variations: { 1: { closeChatOnLeave: !1 } },
});
var v = n(806931),
    b = n(652215);
let M = new E.A("ChannelRTCStore");
M.enableNativeLogger(!0);
let P = Object.freeze([]),
    U = [],
    w = new Set(),
    G = {},
    x = {},
    k = {},
    F = {},
    B = {},
    V = {},
    H = {},
    j = {},
    W = {},
    Y = {},
    K = {};
function $(e) {
    let t = G[e];
    return (null == t && ((t = new y.Ay(e)), (G[e] = t)), t);
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U;
    return t.reduce(
        (t, n) =>
            e($(n))
                ? ((function (e) {
                      let t = $(e);
                      if (0 === t.size()) return;
                      let n = eu(e) || ee(t) ? b._Of.VIDEO : b._Of.VOICE;
                      n === b._Of.VOICE ? (delete F[e], delete B[e]) : (F[e] = n);
                  })(n),
                  (function (e) {
                      let t = T.default.getId(),
                          n = $(e);
                      if (0 === n.size() || N.Ay.getVoiceChannelId() !== e) return J(e, null);
                      let i = v.jd.NONE,
                          a = n
                              .toArray(y.r4.STREAM)
                              .find((e) => e.type === v.lp.STREAM && null != p.A.getActiveStreamForStreamKey(e.id));
                      if (null != a) (r()(a.type === v.lp.STREAM, "Impossible condition"), (i = a.id));
                      else if (1 === n.size()) i = t;
                      else if (1 === n.size(y.r4.VIDEO)) {
                          let [e] = n.toArray(y.r4.VIDEO);
                          i = e.id;
                      } else {
                          let e = n.toArray().find((e) => e.type === v.lp.USER && e.id !== t && !e.ringing);
                          i = e?.id ?? t;
                      }
                      let [s] = q(e);
                      if (s !== v.jd.AUTO && s !== v.jd.NONE) {
                          let e = n.getParticipant(s);
                          (null == e || (e.type === v.lp.STREAM && null == p.A.getActiveStreamForStreamKey(e.id))) &&
                              (s = v.jd.NONE);
                      }
                      (s === v.jd.NONE && null != a && !0 === W[e] && (s = a.id), J(e, [s, i]));
                  })(n),
                  !0)
                : t,
        !1,
    );
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U;
    return z((t) => t.updateParticipant(e), t);
}
function q(e) {
    let t = g.A.getChannel(e),
        n = t?.isDM() && 1 ? v.jd.AUTO : v.jd.NONE;
    return x[e] ?? [n, v.jd.NONE];
}
function Z(e) {
    if (null == x[e]) return !1;
    let [t] = x[e];
    return t !== v.jd.NONE;
}
function Q(e) {
    null == k[e] && (k[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = k[e],
        n = performance.now(),
        i = Z(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[i ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function J(e, t) {
    Q(e);
    let n = Z(e);
    (null == t ? delete x[e] : (x[e] = t), n !== Z(e) && k[e].toggleCount++);
}
function ee(e) {
    return e.size(y.r4.STREAM) > 0 || e.size(y.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function et(e) {
    (delete G[e], delete x[e], delete F[e], delete B[e], delete W[e]);
}
function en() {
    let e, t, n, i, r, a;
    return z(
        (e) => e.rebuild(),
        ((e = []),
        null != (t = N.Ay.getChannelId()) && e.push(t),
        null == (n = N.Ay.getVoiceChannelId()) || e.includes(n) || e.push(n),
        (i = h.default.getRemoteSessionId()),
        (r = L.A.getVoiceStateForSession(T.default.getId(), i)),
        r?.channelId != null && e.push(r?.channelId),
        s().difference(U, e).forEach(et),
        (a = s().difference(e, U)),
        (U = e),
        a),
    );
}
function ei(e, t) {
    t ? (w.add(e), (K[e] = !1)) : w.delete(e);
}
function er() {
    return z((e) => e.updateEmbeddedActivities());
}
function ea() {
    let e = A.A.getMainFrame();
    return (
        (!!U.some((e) =>
            $(e)
                .toArray(y.r4.ACTIVITY)
                .some((e) => e.type === v.lp.ACTIVITY && null != e.frameId),
        ) ||
            (null != e && !!(0, _.A)(e.applicationId))) &&
        er()
    );
}
function es(e) {
    let { userId: t } = e;
    return z((e) => e.updateParticipantSpeaking(t));
}
function el(e) {
    let { user: t } = e;
    return X(t.id);
}
function eo(e) {
    let { channelId: t } = e;
    return z((e) => e.rebuild(), [t]);
}
function ed(e) {
    let {
        channel: { id: t },
    } = e;
    return (w.delete(t), delete j[t], et(t));
}
function ec(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: i } = (0, f.Iy)(t);
    return X(i, [n]);
}
function eu(e) {
    return !!g.A.getChannel(e)?.isGuildVocalOrThread();
}
class e_ extends l.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        (this.waitFor(
            c.A,
            p.A,
            T.default,
            m.A,
            g.A,
            u.Ay,
            d.Ay,
            A.A,
            h.default,
            S.A,
            N.Ay,
            C.A,
            I.Ay,
            O.default,
            R.A,
            L.A,
        ),
            this.syncWith([d.Ay], er),
            this.syncWith([h.default], en),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(H, e?.voiceParticipantsHidden));
    }
    getState() {
        return { voiceParticipantsHidden: H };
    }
    getParticipantsVersion(e) {
        return $(e).version;
    }
    getParticipants(e) {
        return $(e).toArray() ?? P;
    }
    getSpeakingParticipants(e) {
        return $(e).toArray(y.r4.SPEAKING) ?? P;
    }
    getFilteredParticipants(e) {
        let t = $(e);
        return H[e] ? t.toArray(y.r4.FILTERED) : t.toArray(y.r4.NOT_POPPED_OUT);
    }
    getStageSpeakerParticipants(e) {
        return $(e).toArray(y.r4.STAGE_SPEAKER);
    }
    getVideoParticipants(e) {
        return $(e).toArray(y.r4.VIDEO) ?? P;
    }
    getStreamParticipants(e) {
        return $(e).toArray(y.r4.STREAM) ?? P;
    }
    getActivityParticipants(e) {
        return $(e).toArray(y.r4.ACTIVITY) ?? P;
    }
    getParticipant(e, t) {
        return $(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = $(e);
        return t.size() - t.size(y.r4.STREAM) - t.size(y.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return V[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return H[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = q(e);
        return t === v.jd.NONE ? null : t !== v.jd.AUTO ? t : n === v.jd.NONE || n === v.jd.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : $(e).getParticipant(t);
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
    getMode(e) {
        return F[e] ?? (eu(e) ? b._Of.VIDEO : b._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.BRT.APP;
        if (__OVERLAY__) return b.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            i = !!g.A.getChannel(e)?.isGuildVocal() || (n && !!g.A.getChannel(e)?.isVocalThread());
        return B[e]?.[t] ?? (i ? b.DUB.NO_CHAT : b.DUB.NORMAL);
    }
    getChatOpen(e) {
        return w.has(e);
    }
    getOpenChatChannelIds() {
        return w;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.BRT.APP;
        return Object.values(B).some((t) => t[e] === b.DUB.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return j[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return Y[e];
    }
    getStageAudienceSidebarOpen(e) {
        return K[e] ?? !w.has(e);
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
let eE = new e_(o.h, {
    CONNECTION_OPEN: function () {
        for (let e of U) et(e);
        en();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: en,
    THREAD_LIST_SYNC: en,
    OVERLAY_INITIALIZE: en,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e,
            i = !1;
        if (null != t) delete k[t];
        else
            null != n &&
                ((!w.has(n) || D.getConfig({ location: "handleVoiceChannelSelect" }).closeChatOnLeave) && w.delete(n),
                delete j[n],
                Q(n));
        t !== n && null != n && (i = z((e) => e.rebuild(), [n]));
        let r = en();
        return i || r;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            i = en();
        if (null == t || null == n || w.has(t)) return i;
        let r = g.A.getChannel(t);
        return null != r && r.isGuildVocal() ? (ei(t, !0), !0) : i;
    },
    CHANNEL_RTC_ACTIVE_CHANNELS: en,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t, initial: n } = e;
        return t.reduce((e, t) => {
            let { userId: i, channelId: r } = t;
            return n && null != r && !U.includes(r) ? e : X(i) || e;
        }, !1);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (t.type === b.rbe.GROUP_DM) {
            let e = t.originChannelId;
            if (null != e) return ((B[t.id] = { [b.BRT.APP]: B[e]?.[b.BRT.APP] ?? b.DUB.NORMAL }), !0);
        }
        return !1;
    },
    CHANNEL_DELETE: ed,
    THREAD_DELETE: ed,
    CALL_CREATE: eo,
    CALL_UPDATE: eo,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        return et(t);
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        var t;
        let { channelId: n, id: i } = e,
            r = $(n);
        ((t = n),
            g.A.getChannel(t)?.isGuildStageVoice() && (W[n] = (0, f.wL)(i)),
            null == i &&
                r.toArray(y.r4.STREAM).forEach((e) => {
                    (0, v.Ay)(e) && r.updateParticipant(e.user.id);
                }));
        let [, a] = q(n);
        if ((J(n, [i ?? v.jd.NONE, a]), (0, f.wL)(i))) {
            try {
                let { ownerId: e } = (0, f.Iy)(i);
                e === T.default.getId() && X(e, [n]);
            } catch (e) {
                M.warn(`INVALID STREAM KEY FORMAT ${i}`, e);
            }
            ee(r) || (V[n] = !1);
        }
    },
    FRAME_LAUNCH: ea,
    FRAME_STOP: ea,
    FRAME_PROMOTE: ea,
    FRAME_CLEAR_MAIN_SLOT: ea,
    APPLICATION_FETCH_SUCCESS: ea,
    APPLICATIONS_FETCH_SUCCESS: ea,
    CONJURE_PROJECTS_FETCH_SUCCESS: ea,
    CHANNEL_RTC_POPOUT_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            [i] = q(t);
        i === n && J(t, null);
        let r = $(t),
            a = r.getParticipant(n);
        null == a || (a.type !== v.lp.ACTIVITY && (r.updateParticipantPoppedOut(n, !0), X(a.user.id, [t])));
    },
    CHANNEL_RTC_RETURN_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            i = $(t);
        i.updateParticipantPoppedOut(n, !1);
        let r = i.getParticipant(n);
        null == r || (r.type !== v.lp.ACTIVITY && X(r.user.id, [t]));
    },
    CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
        let { channelId: t, layout: n, appContext: i } = e;
        B[t] = { ...B[t], [i]: n };
    },
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function (e) {
        let { channelId: t, participantsOpen: n } = e;
        V[t] = n;
    },
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function (e) {
        let { channelId: t, voiceParticipantsHidden: n } = e;
        H[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function (e) {
        let { channelId: t, large: n } = e;
        j[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function (e) {
        let { channelId: t, dismissed: n } = e;
        Y[t] = n;
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e,
            i = T.default.getId();
        if (n) {
            let [e] = q(t);
            (0, f.wL)(e) && e.includes(i) && J(t, null);
        }
        X(i, [t]);
    },
    CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
        let { channelId: t, chatOpen: n } = e;
        ei(t, n);
    },
    CHANNEL_RTC_UPDATE_STAGE_AUDIENCE_SIDEBAR_OPEN: function (e) {
        let { channelId: t, open: n } = e;
        ((K[t] = n), n && ei(t, !1));
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { channelId: t, userId: n } = e;
        return X(n, [t]);
    },
    RTC_CONNECTION_PLATFORM: function (e) {
        let { channelId: t, userId: n } = e;
        return X(n, [t]);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { userId: t } = e;
        return X(t);
    },
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function (e) {
        let { channelId: t, senderUserId: n, maxResolution: i, maxFrameRate: r } = e;
        return z((e) => e.updateParticipantQuality(n, i, r), [t]);
    },
    STREAM_CLOSE: ec,
    STREAM_DELETE: ec,
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { channelId: n, ownerId: i } = (0, f.Iy)(t);
        return X(i, [n]);
    },
    SPEAKING: es,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: es,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: es,
    PUSH_TO_TALK_STATE_CHANGE: function () {
        return z((e) => e.updateParticipantSpeaking(T.default.getId()));
    },
    USER_UPDATE: el,
    GUILD_MEMBER_UPDATE: el,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        if (
            (s().forEach(U, (e) => {
                let i = g.A.getChannel(e);
                (null == i || i.getGuildId() === t.id) && n.push(e);
            }),
            0 === n.length)
        )
            return !1;
        s().forEach(n, (e) => et(e));
    },
});
