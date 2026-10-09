(n.d(t, { A: () => eo }), n(321073));
var i = n(284009),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(73153),
    d = n(933958),
    c = n(626584),
    u = n(643501),
    _ = n(652896),
    E = n(312006),
    A = n(616356),
    h = n(280450),
    f = n(470710),
    I = n(734057),
    p = n(290863),
    T = n(309010),
    m = n(485296),
    g = n(287809),
    S = n(803301),
    N = n(977997),
    C = n(568598);
let O = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-08-dont-close-chat",
    defaultConfig: { closeChatOnLeave: !0 },
    variations: { 1: { closeChatOnLeave: !1 } },
});
var R = n(806931),
    L = n(652215);
let y = new c.A("ChannelRTCStore");
y.enableNativeLogger(!0);
let D = Object.freeze([]),
    v = [],
    b = new Set(),
    M = {},
    P = {},
    U = {},
    w = {},
    G = {},
    x = {},
    k = {},
    F = {},
    B = {},
    V = {},
    H = {};
function j(e) {
    let t = M[e];
    return (null == t && ((t = new C.Ay(e)), (M[e] = t)), t);
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
    return t.reduce(
        (t, n) =>
            e(j(n))
                ? ((function (e) {
                      let t = j(e);
                      if (0 === t.size()) return;
                      let n = es(e) || Z(t) ? L._Of.VIDEO : L._Of.VOICE;
                      n === L._Of.VOICE ? (delete w[e], delete G[e]) : (w[e] = n);
                  })(n),
                  (function (e) {
                      let t = h.default.getId(),
                          n = j(e);
                      if (0 === n.size() || T.Ay.getVoiceChannelId() !== e) return X(e, null);
                      let i = R.jd.NONE,
                          a = n
                              .toArray(C.r4.STREAM)
                              .find((e) => e.type === R.lp.STREAM && null != A.A.getActiveStreamForStreamKey(e.id));
                      if (null != a) (r()(a.type === R.lp.STREAM, "Impossible condition"), (i = a.id));
                      else if (1 === n.size()) i = t;
                      else if (1 === n.size(C.r4.VIDEO)) {
                          let [e] = n.toArray(C.r4.VIDEO);
                          i = e.id;
                      } else {
                          let e = n.toArray().find((e) => e.type === R.lp.USER && e.id !== t && !e.ringing);
                          i = e?.id ?? t;
                      }
                      let [s] = K(e);
                      if (s !== R.jd.AUTO && s !== R.jd.NONE) {
                          let e = n.getParticipant(s);
                          (null == e || (e.type === R.lp.STREAM && null == A.A.getActiveStreamForStreamKey(e.id))) &&
                              (s = R.jd.NONE);
                      }
                      (s === R.jd.NONE && null != a && !0 === B[e] && (s = a.id), X(e, [s, i]));
                  })(n),
                  !0)
                : t,
        !1,
    );
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
    return W((t) => t.updateParticipant(e), t);
}
function K(e) {
    let t = I.A.getChannel(e),
        n = t?.isDM() && 1 ? R.jd.AUTO : R.jd.NONE;
    return P[e] ?? [n, R.jd.NONE];
}
function $(e) {
    if (null == P[e]) return !1;
    let [t] = P[e];
    return t !== R.jd.NONE;
}
function z(e) {
    null == U[e] && (U[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = U[e],
        n = performance.now(),
        i = $(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[i ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function X(e, t) {
    z(e);
    let n = $(e);
    (null == t ? delete P[e] : (P[e] = t), n !== $(e) && U[e].toggleCount++);
}
function Z(e) {
    return e.size(C.r4.STREAM) > 0 || e.size(C.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function q(e) {
    (delete M[e], delete P[e], delete w[e], delete G[e], delete B[e]);
}
function Q() {
    let e, t, n, i, r, a;
    return W(
        (e) => e.rebuild(),
        ((e = []),
        null != (t = T.Ay.getChannelId()) && e.push(t),
        null == (n = T.Ay.getVoiceChannelId()) || e.includes(n) || e.push(n),
        (i = u.default.getRemoteSessionId()),
        (r = N.A.getVoiceStateForSession(h.default.getId(), i)),
        r?.channelId != null && e.push(r?.channelId),
        s().difference(v, e).forEach(q),
        (a = s().difference(e, v)),
        (v = e),
        a),
    );
}
function J(e, t) {
    t ? (b.add(e), (H[e] = !1)) : b.delete(e);
}
function ee() {
    return W((e) => e.updateEmbeddedActivities());
}
function et(e) {
    let { userId: t } = e;
    return W((e) => e.updateParticipantSpeaking(t));
}
function en(e) {
    let { user: t } = e;
    return Y(t.id);
}
function ei(e) {
    let { channelId: t } = e;
    return W((e) => e.rebuild(), [t]);
}
function er(e) {
    let {
        channel: { id: t },
    } = e;
    return (b.delete(t), delete F[t], q(t));
}
function ea(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: i } = (0, _.Iy)(t);
    return Y(i, [n]);
}
function es(e) {
    return !!I.A.getChannel(e)?.isGuildVocalOrThread();
}
class el extends l.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        (this.waitFor(A.A, h.default, f.A, I.A, d.Ay, u.default, p.A, T.Ay, m.A, E.Ay, g.default, S.A, N.A),
            this.syncWith([d.Ay], ee),
            this.syncWith([u.default], Q),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(k, e?.voiceParticipantsHidden));
    }
    getState() {
        return { voiceParticipantsHidden: k };
    }
    getParticipantsVersion(e) {
        return j(e).version;
    }
    getParticipants(e) {
        return j(e).toArray() ?? D;
    }
    getSpeakingParticipants(e) {
        return j(e).toArray(C.r4.SPEAKING) ?? D;
    }
    getFilteredParticipants(e) {
        let t = j(e);
        return k[e] ? t.toArray(C.r4.FILTERED) : t.toArray(C.r4.NOT_POPPED_OUT);
    }
    getStageSpeakerParticipants(e) {
        return j(e).toArray(C.r4.STAGE_SPEAKER);
    }
    getVideoParticipants(e) {
        return j(e).toArray(C.r4.VIDEO) ?? D;
    }
    getStreamParticipants(e) {
        return j(e).toArray(C.r4.STREAM) ?? D;
    }
    getActivityParticipants(e) {
        return j(e).toArray(C.r4.ACTIVITY) ?? D;
    }
    getParticipant(e, t) {
        return j(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = j(e);
        return t.size() - t.size(C.r4.STREAM) - t.size(C.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return x[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return k[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = K(e);
        return t === R.jd.NONE ? null : t !== R.jd.AUTO ? t : n === R.jd.NONE || n === R.jd.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : j(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = U[e];
        return null == t
            ? {}
            : {
                  view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                  view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                  view_mode_toggle_count: t.toggleCount,
              };
    }
    getMode(e) {
        return w[e] ?? (es(e) ? L._Of.VIDEO : L._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L.BRT.APP;
        if (__OVERLAY__) return L.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            i = !!I.A.getChannel(e)?.isGuildVocal() || (n && !!I.A.getChannel(e)?.isVocalThread());
        return G[e]?.[t] ?? (i ? L.DUB.NO_CHAT : L.DUB.NORMAL);
    }
    getChatOpen(e) {
        return b.has(e);
    }
    getOpenChatChannelIds() {
        return b;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L.BRT.APP;
        return Object.values(G).some((t) => t[e] === L.DUB.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return F[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return V[e];
    }
    getStageAudienceSidebarOpen(e) {
        return H[e] ?? !b.has(e);
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
let eo = new el(o.h, {
    CONNECTION_OPEN: function () {
        for (let e of v) q(e);
        Q();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: Q,
    THREAD_LIST_SYNC: Q,
    OVERLAY_INITIALIZE: Q,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e,
            i = !1;
        if (null != t) delete U[t];
        else
            null != n &&
                ((!b.has(n) || O.getConfig({ location: "handleVoiceChannelSelect" }).closeChatOnLeave) && b.delete(n),
                delete F[n],
                z(n));
        t !== n && null != n && (i = W((e) => e.rebuild(), [n]));
        let r = Q();
        return i || r;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            i = Q();
        if (null == t || null == n || b.has(t)) return i;
        let r = I.A.getChannel(t);
        return null != r && r.isGuildVocal() ? (J(t, !0), !0) : i;
    },
    CHANNEL_RTC_ACTIVE_CHANNELS: Q,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t, initial: n } = e;
        return t.reduce((e, t) => {
            let { userId: i, channelId: r } = t;
            return n && null != r && !v.includes(r) ? e : Y(i) || e;
        }, !1);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (t.type === L.rbe.GROUP_DM) {
            let e = t.originChannelId;
            if (null != e) return ((G[t.id] = { [L.BRT.APP]: G[e]?.[L.BRT.APP] ?? L.DUB.NORMAL }), !0);
        }
        return !1;
    },
    CHANNEL_DELETE: er,
    THREAD_DELETE: er,
    CALL_CREATE: ei,
    CALL_UPDATE: ei,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        return q(t);
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        var t;
        let { channelId: n, id: i } = e,
            r = j(n);
        ((t = n),
            I.A.getChannel(t)?.isGuildStageVoice() && (B[n] = (0, _.wL)(i)),
            null == i &&
                r.toArray(C.r4.STREAM).forEach((e) => {
                    (0, R.Ay)(e) && r.updateParticipant(e.user.id);
                }));
        let [, a] = K(n);
        if ((X(n, [i ?? R.jd.NONE, a]), (0, _.wL)(i))) {
            try {
                let { ownerId: e } = (0, _.Iy)(i);
                e === h.default.getId() && Y(e, [n]);
            } catch (e) {
                y.warn(`INVALID STREAM KEY FORMAT ${i}`, e);
            }
            Z(r) || (x[n] = !1);
        }
    },
    CHANNEL_RTC_POPOUT_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            [i] = K(t);
        i === n && X(t, null);
        let r = j(t),
            a = r.getParticipant(n);
        null == a || (a.type !== R.lp.ACTIVITY && (r.updateParticipantPoppedOut(n, !0), Y(a.user.id, [t])));
    },
    CHANNEL_RTC_RETURN_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            i = j(t);
        i.updateParticipantPoppedOut(n, !1);
        let r = i.getParticipant(n);
        null == r || (r.type !== R.lp.ACTIVITY && Y(r.user.id, [t]));
    },
    CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
        let { channelId: t, layout: n, appContext: i } = e;
        G[t] = { ...G[t], [i]: n };
    },
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function (e) {
        let { channelId: t, participantsOpen: n } = e;
        x[t] = n;
    },
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function (e) {
        let { channelId: t, voiceParticipantsHidden: n } = e;
        k[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function (e) {
        let { channelId: t, large: n } = e;
        F[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function (e) {
        let { channelId: t, dismissed: n } = e;
        V[t] = n;
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e,
            i = h.default.getId();
        if (n) {
            let [e] = K(t);
            (0, _.wL)(e) && e.includes(i) && X(t, null);
        }
        Y(i, [t]);
    },
    CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
        let { channelId: t, chatOpen: n } = e;
        J(t, n);
    },
    CHANNEL_RTC_UPDATE_STAGE_AUDIENCE_SIDEBAR_OPEN: function (e) {
        let { channelId: t, open: n } = e;
        ((H[t] = n), n && J(t, !1));
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { channelId: t, userId: n } = e;
        return Y(n, [t]);
    },
    RTC_CONNECTION_PLATFORM: function (e) {
        let { channelId: t, userId: n } = e;
        return Y(n, [t]);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { userId: t } = e;
        return Y(t);
    },
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function (e) {
        let { channelId: t, senderUserId: n, maxResolution: i, maxFrameRate: r } = e;
        return W((e) => e.updateParticipantQuality(n, i, r), [t]);
    },
    STREAM_CLOSE: ea,
    STREAM_DELETE: ea,
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { channelId: n, ownerId: i } = (0, _.Iy)(t);
        return Y(i, [n]);
    },
    SPEAKING: et,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: et,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: et,
    PUSH_TO_TALK_STATE_CHANGE: function () {
        return W((e) => e.updateParticipantSpeaking(h.default.getId()));
    },
    USER_UPDATE: en,
    GUILD_MEMBER_UPDATE: en,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        if (
            (s().forEach(v, (e) => {
                let i = I.A.getChannel(e);
                (null == i || i.getGuildId() === t.id) && n.push(e);
            }),
            0 === n.length)
        )
            return !1;
        s().forEach(n, (e) => q(e));
    },
});
