(n.d(t, { A: () => es }), n(321073));
var i = n(284009),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(228366),
    d = n(933958),
    c = n(626584),
    u = n(643501),
    _ = n(652896),
    E = n(616356),
    A = n(280450),
    h = n(470710),
    I = n(734057),
    f = n(290863),
    p = n(309010),
    T = n(485296),
    m = n(287809),
    g = n(803301),
    S = n(977997),
    N = n(568598);
let C = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-08-dont-close-chat",
    defaultConfig: { closeChatOnLeave: !0 },
    variations: { 1: { closeChatOnLeave: !1 } },
});
var O = n(806931),
    R = n(652215);
let L = new c.A("ChannelRTCStore");
L.enableNativeLogger(!0);
let y = Object.freeze([]),
    D = [],
    v = new Set(),
    b = {},
    M = {},
    P = {},
    U = {},
    w = {},
    G = {},
    x = {},
    k = {},
    F = {},
    B = {};
function V(e) {
    let t = b[e];
    return (null == t && ((t = new N.Ay(e)), (b[e] = t)), t);
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
    return t.reduce(
        (t, n) =>
            e(V(n))
                ? ((function (e) {
                      let t = V(e);
                      if (0 === t.size()) return;
                      let n = er(e) || z(t) ? R._Of.VIDEO : R._Of.VOICE;
                      n === R._Of.VOICE ? (delete U[e], delete w[e]) : (U[e] = n);
                  })(n),
                  (function (e) {
                      let t = A.default.getId(),
                          n = V(e);
                      if (0 === n.size() || p.Ay.getVoiceChannelId() !== e) return $(e, null);
                      let i = O.jd.NONE,
                          a = n
                              .toArray(N.r4.STREAM)
                              .find((e) => e.type === O.lp.STREAM && null != E.A.getActiveStreamForStreamKey(e.id));
                      if (null != a) (r()(a.type === O.lp.STREAM, "Impossible condition"), (i = a.id));
                      else if (1 === n.size()) i = t;
                      else if (1 === n.size(N.r4.VIDEO)) {
                          let [e] = n.toArray(N.r4.VIDEO);
                          i = e.id;
                      } else {
                          let e = n.toArray().find((e) => e.type === O.lp.USER && e.id !== t && !e.ringing);
                          i = e?.id ?? t;
                      }
                      let [s] = W(e);
                      if (s !== O.jd.AUTO && s !== O.jd.NONE) {
                          let e = n.getParticipant(s);
                          (null == e || (e.type === O.lp.STREAM && null == E.A.getActiveStreamForStreamKey(e.id))) &&
                              (s = O.jd.NONE);
                      }
                      (s === O.jd.NONE && null != a && !0 === F[e] && (s = a.id), $(e, [s, i]));
                  })(n),
                  !0)
                : t,
        !1,
    );
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
    return H((t) => t.updateParticipant(e), t);
}
function W(e) {
    let t = I.A.getChannel(e),
        n = t?.isDM() && 1 ? O.jd.AUTO : O.jd.NONE;
    return M[e] ?? [n, O.jd.NONE];
}
function Y(e) {
    if (null == M[e]) return !1;
    let [t] = M[e];
    return t !== O.jd.NONE;
}
function K(e) {
    null == P[e] && (P[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = P[e],
        n = performance.now(),
        i = Y(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[i ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function $(e, t) {
    K(e);
    let n = Y(e);
    (null == t ? delete M[e] : (M[e] = t), n !== Y(e) && P[e].toggleCount++);
}
function z(e) {
    return e.size(N.r4.STREAM) > 0 || e.size(N.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function X(e) {
    (delete b[e], delete M[e], delete U[e], delete w[e], delete F[e]);
}
function q() {
    let e, t, n, i, r, a;
    return H(
        (e) => e.rebuild(),
        ((e = []),
        null != (t = p.Ay.getChannelId()) && e.push(t),
        null == (n = p.Ay.getVoiceChannelId()) || e.includes(n) || e.push(n),
        (i = u.default.getRemoteSessionId()),
        (r = S.A.getVoiceStateForSession(A.default.getId(), i)),
        r?.channelId != null && e.push(r?.channelId),
        s().difference(D, e).forEach(X),
        (a = s().difference(e, D)),
        (D = e),
        a),
    );
}
function Z(e, t) {
    t ? v.add(e) : v.delete(e);
}
function Q() {
    return H((e) => e.updateEmbeddedActivities());
}
function J(e) {
    let { userId: t } = e;
    return H((e) => e.updateParticipantSpeaking(t));
}
function ee(e) {
    let { user: t } = e;
    return j(t.id);
}
function et(e) {
    let { channelId: t } = e;
    return H((e) => e.rebuild(), [t]);
}
function en(e) {
    let {
        channel: { id: t },
    } = e;
    return (v.delete(t), delete k[t], X(t));
}
function ei(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: i } = (0, _.Iy)(t);
    return j(i, [n]);
}
function er(e) {
    return !!I.A.getChannel(e)?.isGuildVocalOrThread();
}
class ea extends l.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        (this.waitFor(E.A, A.default, h.A, I.A, d.Ay, u.default, f.A, p.Ay, T.A, m.default, g.A, S.A),
            this.syncWith([d.Ay], Q),
            this.syncWith([u.default], q),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(x, e?.voiceParticipantsHidden));
    }
    getState() {
        return { voiceParticipantsHidden: x };
    }
    getParticipantsVersion(e) {
        return V(e).version;
    }
    getParticipants(e) {
        return V(e).toArray() ?? y;
    }
    getSpeakingParticipants(e) {
        return V(e).toArray(N.r4.SPEAKING) ?? y;
    }
    getFilteredParticipants(e) {
        let t = V(e);
        return x[e] ? t.toArray(N.r4.FILTERED) : t.toArray(N.r4.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        return V(e).toArray(N.r4.VIDEO) ?? y;
    }
    getStreamParticipants(e) {
        return V(e).toArray(N.r4.STREAM) ?? y;
    }
    getActivityParticipants(e) {
        return V(e).toArray(N.r4.ACTIVITY) ?? y;
    }
    getParticipant(e, t) {
        return V(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = V(e);
        return t.size() - t.size(N.r4.STREAM) - t.size(N.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return G[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return x[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = W(e);
        return t === O.jd.NONE ? null : t !== O.jd.AUTO ? t : n === O.jd.NONE || n === O.jd.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : V(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = P[e];
        return null == t
            ? {}
            : {
                  view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                  view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                  view_mode_toggle_count: t.toggleCount,
              };
    }
    getMode(e) {
        return U[e] ?? (er(e) ? R._Of.VIDEO : R._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R.BRT.APP;
        if (__OVERLAY__) return R.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            i = !!I.A.getChannel(e)?.isGuildVocal() || (n && !!I.A.getChannel(e)?.isVocalThread());
        return w[e]?.[t] ?? (i ? R.DUB.NO_CHAT : R.DUB.NORMAL);
    }
    getChatOpen(e) {
        return v.has(e);
    }
    getOpenChatChannelIds() {
        return v;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R.BRT.APP;
        return Object.values(w).some((t) => t[e] === R.DUB.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return k[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return B[e];
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
let es = new ea(o.h, {
    CONNECTION_OPEN: function () {
        for (let e of D) X(e);
        q();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: q,
    THREAD_LIST_SYNC: q,
    OVERLAY_INITIALIZE: q,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e,
            i = !1;
        if (null != t) delete P[t];
        else
            null != n &&
                ((!v.has(n) || C.getConfig({ location: "handleVoiceChannelSelect" }).closeChatOnLeave) && v.delete(n),
                delete k[n],
                K(n));
        t !== n && null != n && (i = H((e) => e.rebuild(), [n]));
        let r = q();
        return i || r;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            i = q();
        if (null == t || null == n || v.has(t)) return i;
        let r = I.A.getChannel(t);
        return null != r && r.isGuildVocal() ? (Z(t, !0), !0) : i;
    },
    CHANNEL_RTC_ACTIVE_CHANNELS: q,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t, initial: n } = e;
        return t.reduce((e, t) => {
            let { userId: i, channelId: r } = t;
            return n && null != r && !D.includes(r) ? e : j(i) || e;
        }, !1);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (t.type === R.rbe.GROUP_DM) {
            let e = t.originChannelId;
            if (null != e) return ((w[t.id] = { [R.BRT.APP]: w[e]?.[R.BRT.APP] ?? R.DUB.NORMAL }), !0);
        }
        return !1;
    },
    CHANNEL_DELETE: en,
    THREAD_DELETE: en,
    CALL_CREATE: et,
    CALL_UPDATE: et,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        return X(t);
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        var t;
        let { channelId: n, id: i } = e,
            r = V(n);
        ((t = n),
            I.A.getChannel(t)?.isGuildStageVoice() && (F[n] = (0, _.wL)(i)),
            null == i &&
                r.toArray(N.r4.STREAM).forEach((e) => {
                    (0, O.Ay)(e) && r.updateParticipant(e.user.id);
                }));
        let [, a] = W(n);
        if (($(n, [i ?? O.jd.NONE, a]), (0, _.wL)(i))) {
            try {
                let { ownerId: e } = (0, _.Iy)(i);
                e === A.default.getId() && j(e, [n]);
            } catch (e) {
                L.warn(`INVALID STREAM KEY FORMAT ${i}`, e);
            }
            z(r) || (G[n] = !1);
        }
    },
    CHANNEL_RTC_POPOUT_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            [i] = W(t);
        i === n && $(t, null);
        let r = V(t),
            a = r.getParticipant(n);
        null == a || (a.type !== O.lp.ACTIVITY && (r.updateParticipantPoppedOut(n, !0), j(a.user.id, [t])));
    },
    CHANNEL_RTC_RETURN_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            i = V(t);
        i.updateParticipantPoppedOut(n, !1);
        let r = i.getParticipant(n);
        null == r || (r.type !== O.lp.ACTIVITY && j(r.user.id, [t]));
    },
    CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
        let { channelId: t, layout: n, appContext: i } = e;
        w[t] = { ...w[t], [i]: n };
    },
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function (e) {
        let { channelId: t, participantsOpen: n } = e;
        G[t] = n;
    },
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function (e) {
        let { channelId: t, voiceParticipantsHidden: n } = e;
        x[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function (e) {
        let { channelId: t, large: n } = e;
        k[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function (e) {
        let { channelId: t, dismissed: n } = e;
        B[t] = n;
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e,
            i = A.default.getId();
        if (n) {
            let [e] = W(t);
            (0, _.wL)(e) && e.includes(i) && $(t, null);
        }
        j(i, [t]);
    },
    CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
        let { channelId: t, chatOpen: n } = e;
        Z(t, n);
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { channelId: t, userId: n } = e;
        return j(n, [t]);
    },
    RTC_CONNECTION_PLATFORM: function (e) {
        let { channelId: t, userId: n } = e;
        return j(n, [t]);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { userId: t } = e;
        return j(t);
    },
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function (e) {
        let { channelId: t, senderUserId: n, maxResolution: i, maxFrameRate: r } = e;
        return H((e) => e.updateParticipantQuality(n, i, r), [t]);
    },
    STREAM_CLOSE: ei,
    STREAM_DELETE: ei,
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { channelId: n, ownerId: i } = (0, _.Iy)(t);
        return j(i, [n]);
    },
    SPEAKING: J,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: J,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: J,
    PUSH_TO_TALK_STATE_CHANGE: function () {
        return H((e) => e.updateParticipantSpeaking(A.default.getId()));
    },
    USER_UPDATE: ee,
    GUILD_MEMBER_UPDATE: ee,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        if (
            (s().forEach(D, (e) => {
                let i = I.A.getChannel(e);
                (null == i || i.getGuildId() === t.id) && n.push(e);
            }),
            0 === n.length)
        )
            return !1;
        s().forEach(n, (e) => X(e));
    },
});
