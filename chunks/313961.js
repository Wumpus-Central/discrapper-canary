"use strict";
n.d(t, { A: () => el }), n(321073);
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
    E = n(164891),
    A = n(616356),
    h = n(280450),
    I = n(470710),
    f = n(734057),
    p = n(290863),
    T = n(309010),
    m = n(485296),
    g = n(287809),
    S = n(803301),
    N = n(977997),
    C = n(568598),
    O = n(806931),
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
    V = {};
function B(e) {
    let t = b[e];
    return null == t && ((t = new C.Ay(e)), (b[e] = t)), t;
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
    return t.reduce(
        (t, n) =>
            e(B(n))
                ? ((function (e) {
                      let t = B(e);
                      if (0 === t.size()) return;
                      let n = ea(e) || z(t) ? R._Of.VIDEO : R._Of.VOICE;
                      if (n === R._Of.VOICE) {
                          let t = w[e]?.[R.BRT.APP];
                          delete U[e], t !== R.DUB.HAVEN && delete w[e];
                      } else U[e] = n;
                  })(n),
                  (function (e) {
                      let t = h.default.getId(),
                          n = B(e);
                      if (0 === n.size() || T.Ay.getVoiceChannelId() !== e) return $(e, null);
                      let i = O.jd.NONE,
                          a = n
                              .toArray(C.r4.STREAM)
                              .find((e) => e.type === O.lp.STREAM && null != A.A.getActiveStreamForStreamKey(e.id));
                      if (null != a) r()(a.type === O.lp.STREAM, "Impossible condition"), (i = a.id);
                      else if (1 === n.size()) i = t;
                      else if (1 === n.size(C.r4.VIDEO)) {
                          let [e] = n.toArray(C.r4.VIDEO);
                          i = e.id;
                      } else {
                          let e = n.toArray().find((e) => e.type === O.lp.USER && e.id !== t && !e.ringing);
                          i = e?.id ?? t;
                      }
                      let [s] = W(e);
                      if (s !== O.jd.AUTO && s !== O.jd.NONE) {
                          let e = n.getParticipant(s);
                          (null == e || (e.type === O.lp.STREAM && null == A.A.getActiveStreamForStreamKey(e.id))) &&
                              (s = O.jd.NONE);
                      }
                      $(e, [s, i]);
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
    let t = f.A.getChannel(e),
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
    null == t ? delete M[e] : (M[e] = t), n !== Y(e) && P[e].toggleCount++;
}
function z(e) {
    return e.size(C.r4.STREAM) > 0 || e.size(C.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function q(e) {
    delete b[e], delete M[e], delete U[e], delete w[e];
}
function Z() {
    let e, t, n, i, r, a;
    return H(
        (e) => e.rebuild(),
        ((e = []),
        null != (t = T.Ay.getChannelId()) && e.push(t),
        null == (n = T.Ay.getVoiceChannelId()) || e.includes(n) || e.push(n),
        (i = u.default.getRemoteSessionId()),
        (r = N.A.getVoiceStateForSession(h.default.getId(), i)),
        r?.channelId != null && e.push(r?.channelId),
        s().difference(D, e).forEach(q),
        (a = s().difference(e, D)),
        (D = e),
        a),
    );
}
function X(e, t) {
    (k[e] = t), t ? v.add(e) : v.delete(e);
}
function Q(e) {
    delete k[e], v.delete(e);
}
function J() {
    return H((e) => e.updateEmbeddedActivities());
}
function ee(e) {
    let { userId: t } = e;
    return H((e) => e.updateParticipantSpeaking(t));
}
function et(e) {
    let { user: t } = e;
    return j(t.id);
}
function en(e) {
    let { channelId: t } = e;
    return H((e) => e.rebuild(), [t]);
}
function ei(e) {
    let {
        channel: { id: t },
    } = e;
    return Q(t), delete F[t], q(t);
}
function er(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: i } = (0, _.Iy)(t);
    return j(i, [n]);
}
function ea(e) {
    return !!f.A.getChannel(e)?.isGuildVocalOrThread();
}
class es extends l.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        this.waitFor(A.A, h.default, I.A, f.A, d.Ay, u.default, p.A, T.Ay, m.A, g.default, S.A, N.A),
            this.syncWith([d.Ay], J),
            this.syncWith([u.default], Z),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(x, e?.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: x };
    }
    getParticipantsVersion(e) {
        return B(e).version;
    }
    getParticipants(e) {
        return B(e).toArray() ?? y;
    }
    getSpeakingParticipants(e) {
        return B(e).toArray(C.r4.SPEAKING) ?? y;
    }
    getFilteredParticipants(e) {
        let t = B(e);
        return x[e] ? t.toArray(C.r4.FILTERED) : t.toArray(C.r4.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        return B(e).toArray(C.r4.VIDEO) ?? y;
    }
    getStreamParticipants(e) {
        return B(e).toArray(C.r4.STREAM) ?? y;
    }
    getActivityParticipants(e) {
        return B(e).toArray(C.r4.ACTIVITY) ?? y;
    }
    getParticipant(e, t) {
        return B(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = B(e);
        return t.size() - t.size(C.r4.STREAM) - t.size(C.r4.ACTIVITY);
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
        return null == t ? null : B(e).getParticipant(t);
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
    getGuildRingingUsers(e) {
        return B(e).guildRingingUsers;
    }
    getMode(e) {
        return U[e] ?? (ea(e) ? R._Of.VIDEO : R._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R.BRT.APP;
        if (__OVERLAY__) return R.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            i = !!f.A.getChannel(e)?.isGuildVocal() || (n && !!f.A.getChannel(e)?.isVocalThread());
        return w[e]?.[t] ?? (i ? R.DUB.NO_CHAT : R.DUB.NORMAL);
    }
    getChatOpen(e) {
        return k[e] ?? f.A.getChannel(e)?.isVocalThread() ?? !1;
    }
    getAllChatOpen() {
        return k;
    }
    getOpenChatChannelIds() {
        return v;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R.BRT.APP;
        return Object.values(w).some((t) => t[e] === R.DUB.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return F[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return V[e];
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
let el = new es(o.h, {
    CONNECTION_OPEN: function () {
        for (let e of D) q(e);
        Z();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: Z,
    THREAD_LIST_SYNC: Z,
    OVERLAY_INITIALIZE: Z,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e,
            i = !1;
        if ((null != t ? delete P[t] : null != n && (Q(n), delete F[n], K(n)), t !== n && null != n)) {
            let e = B(n);
            e.guildRingingUsers.forEach((t) => e.updateGuildRingingUsers(t, !1)), (i = H((e) => e.rebuild(), [n]));
        }
        let r = Z();
        return i || r;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            i = Z();
        if (null == t || null == n || k[t]) return i;
        let r = f.A.getChannel(t);
        return null != r && r.isGuildVocal() ? (X(t, !0), !0) : i;
    },
    CHANNEL_RTC_ACTIVE_CHANNELS: Z,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t, initial: n } = e;
        return t.reduce((e, t) => {
            let { userId: i, channelId: r, guildId: a } = t;
            return (null != a &&
                null != r &&
                E.A.getCurrentConfig({ guildId: a, location: "voice_status_update" }, { autoTrackExposure: !1 })
                    .enabled &&
                B(r).updateGuildRingingUsers(i, !1),
            n && null != r && !D.includes(r))
                ? e
                : j(i) || e;
        }, !1);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (t.type === R.rbe.GROUP_DM) {
            let e = t.originChannelId;
            if (null != e) return (w[t.id] = { [R.BRT.APP]: w[e]?.[R.BRT.APP] ?? R.DUB.NORMAL }), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: ei,
    THREAD_DELETE: ei,
    CALL_CREATE: en,
    CALL_UPDATE: en,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        return q(t);
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let { channelId: t, id: n } = e,
            i = B(t);
        null == n &&
            i.toArray(C.r4.STREAM).forEach((e) => {
                (0, O.Ay)(e) && i.updateParticipant(e.user.id);
            });
        let [, r] = W(t);
        if (($(t, [n ?? O.jd.NONE, r]), (0, _.wL)(n))) {
            try {
                let { ownerId: e } = (0, _.Iy)(n);
                e === h.default.getId() && j(e, [t]);
            } catch (e) {
                L.warn(`INVALID STREAM KEY FORMAT ${n}`, e);
            }
            z(i) || (G[t] = !1);
        }
    },
    CHANNEL_RTC_POPOUT_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            [i] = W(t);
        i === n && $(t, null);
        let r = B(t),
            a = r.getParticipant(n);
        null == a || (a.type !== O.lp.ACTIVITY && (r.updateParticipantPoppedOut(n, !0), j(a.user.id, [t])));
    },
    CHANNEL_RTC_RETURN_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            i = B(t);
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
            let [e] = W(t);
            (0, _.wL)(e) && e.includes(i) && $(t, null);
        }
        j(i, [t]);
    },
    CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
        let { channelId: t, chatOpen: n } = e;
        X(t, n);
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
    STREAM_CLOSE: er,
    STREAM_DELETE: er,
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { channelId: n, ownerId: i } = (0, _.Iy)(t);
        return j(i, [n]);
    },
    SPEAKING: ee,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: ee,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: ee,
    PUSH_TO_TALK_STATE_CHANGE: function () {
        return H((e) => e.updateParticipantSpeaking(h.default.getId()));
    },
    GUILD_RING_START: function (e) {
        let { channelId: t, guildId: n, ongoingRings: i } = e;
        if (!E.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
        let r = B(t);
        return Object.keys(i).forEach((e) => r.updateGuildRingingUsers(e, !0)), H((e) => e.rebuild(), [t]);
    },
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (!E.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
        let r = B(t);
        return i.forEach((e) => r.updateGuildRingingUsers(e, !1)), H((e) => e.rebuild(), [t]);
    },
    USER_UPDATE: et,
    GUILD_MEMBER_UPDATE: et,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        if (
            (s().forEach(D, (e) => {
                let i = f.A.getChannel(e);
                (null == i || i.getGuildId() === t.id) && n.push(e);
            }),
            0 === n.length)
        )
            return !1;
        s().forEach(n, (e) => q(e));
    },
});
