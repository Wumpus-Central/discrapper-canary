"use strict";
n.d(t, { A: () => es }), n(321073);
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
    V = {};
function B(e) {
    let t = M[e];
    return null == t && ((t = new C.Ay(e)), (M[e] = t)), t;
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
    return t.reduce(
        (t, n) =>
            e(B(n))
                ? ((function (e) {
                      let t = B(e);
                      if (0 === t.size()) return;
                      let n = er(e) || z(t) ? L._Of.VIDEO : L._Of.VOICE;
                      n === L._Of.VOICE ? (delete w[e], delete G[e]) : (w[e] = n);
                  })(n),
                  (function (e) {
                      let t = h.default.getId(),
                          n = B(e);
                      if (0 === n.size() || T.Ay.getVoiceChannelId() !== e) return $(e, null);
                      let i = R.jd.NONE,
                          a = n
                              .toArray(C.r4.STREAM)
                              .find((e) => e.type === R.lp.STREAM && null != A.A.getActiveStreamForStreamKey(e.id));
                      if (null != a) r()(a.type === R.lp.STREAM, "Impossible condition"), (i = a.id);
                      else if (1 === n.size()) i = t;
                      else if (1 === n.size(C.r4.VIDEO)) {
                          let [e] = n.toArray(C.r4.VIDEO);
                          i = e.id;
                      } else {
                          let e = n.toArray().find((e) => e.type === R.lp.USER && e.id !== t && !e.ringing);
                          i = e?.id ?? t;
                      }
                      let [s] = W(e);
                      if (s !== R.jd.AUTO && s !== R.jd.NONE) {
                          let e = n.getParticipant(s);
                          (null == e || (e.type === R.lp.STREAM && null == A.A.getActiveStreamForStreamKey(e.id))) &&
                              (s = R.jd.NONE);
                      }
                      $(e, [s, i]);
                  })(n),
                  !0)
                : t,
        !1,
    );
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
    return H((t) => t.updateParticipant(e), t);
}
function W(e) {
    let t = f.A.getChannel(e),
        n = t?.isDM() && 1 ? R.jd.AUTO : R.jd.NONE;
    return P[e] ?? [n, R.jd.NONE];
}
function Y(e) {
    if (null == P[e]) return !1;
    let [t] = P[e];
    return t !== R.jd.NONE;
}
function K(e) {
    null == U[e] && (U[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = U[e],
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
    null == t ? delete P[e] : (P[e] = t), n !== Y(e) && U[e].toggleCount++;
}
function z(e) {
    return e.size(C.r4.STREAM) > 0 || e.size(C.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function Z(e) {
    delete M[e], delete P[e], delete w[e], delete G[e];
}
function q() {
    let e, t, n, i, r, a;
    return H(
        (e) => e.rebuild(),
        ((e = []),
        null != (t = T.Ay.getChannelId()) && e.push(t),
        null == (n = T.Ay.getVoiceChannelId()) || e.includes(n) || e.push(n),
        (i = u.default.getRemoteSessionId()),
        (r = N.A.getVoiceStateForSession(h.default.getId(), i)),
        r?.channelId != null && e.push(r?.channelId),
        s().difference(v, e).forEach(Z),
        (a = s().difference(e, v)),
        (v = e),
        a),
    );
}
function X(e, t) {
    t ? b.add(e) : b.delete(e);
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
    return b.delete(t), delete F[t], Z(t);
}
function ei(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: i } = (0, _.Iy)(t);
    return j(i, [n]);
}
function er(e) {
    return !!f.A.getChannel(e)?.isGuildVocalOrThread();
}
class ea extends l.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        this.waitFor(A.A, h.default, I.A, f.A, d.Ay, u.default, p.A, T.Ay, m.A, g.default, S.A, N.A),
            this.syncWith([d.Ay], Q),
            this.syncWith([u.default], q),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(k, e?.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: k };
    }
    getParticipantsVersion(e) {
        return B(e).version;
    }
    getParticipants(e) {
        return B(e).toArray() ?? D;
    }
    getSpeakingParticipants(e) {
        return B(e).toArray(C.r4.SPEAKING) ?? D;
    }
    getFilteredParticipants(e) {
        let t = B(e);
        return k[e] ? t.toArray(C.r4.FILTERED) : t.toArray(C.r4.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        return B(e).toArray(C.r4.VIDEO) ?? D;
    }
    getStreamParticipants(e) {
        return B(e).toArray(C.r4.STREAM) ?? D;
    }
    getActivityParticipants(e) {
        return B(e).toArray(C.r4.ACTIVITY) ?? D;
    }
    getParticipant(e, t) {
        return B(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = B(e);
        return t.size() - t.size(C.r4.STREAM) - t.size(C.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return x[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return k[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = W(e);
        return t === R.jd.NONE ? null : t !== R.jd.AUTO ? t : n === R.jd.NONE || n === R.jd.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : B(e).getParticipant(t);
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
    getGuildRingingUsers(e) {
        return B(e).guildRingingUsers;
    }
    getMode(e) {
        return w[e] ?? (er(e) ? L._Of.VIDEO : L._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L.BRT.APP;
        if (__OVERLAY__) return L.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            i = !!f.A.getChannel(e)?.isGuildVocal() || (n && !!f.A.getChannel(e)?.isVocalThread());
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
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
let es = new ea(o.h, {
    CONNECTION_OPEN: function () {
        for (let e of v) Z(e);
        q();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: q,
    THREAD_LIST_SYNC: q,
    OVERLAY_INITIALIZE: q,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e,
            i = !1;
        if (null != t) delete U[t];
        else
            null != n &&
                ((!b.has(n) || O.getConfig({ location: "handleVoiceChannelSelect" }).closeChatOnLeave) && b.delete(n),
                delete F[n],
                K(n));
        if (t !== n && null != n) {
            let e = B(n);
            e.guildRingingUsers.forEach((t) => e.updateGuildRingingUsers(t, !1)), (i = H((e) => e.rebuild(), [n]));
        }
        let r = q();
        return i || r;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            i = q();
        if (null == t || null == n || b.has(t)) return i;
        let r = f.A.getChannel(t);
        return null != r && r.isGuildVocal() ? (X(t, !0), !0) : i;
    },
    CHANNEL_RTC_ACTIVE_CHANNELS: q,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t, initial: n } = e;
        return t.reduce((e, t) => {
            let { userId: i, channelId: r, guildId: a } = t;
            return (null != a &&
                null != r &&
                E.A.getCurrentConfig({ guildId: a, location: "voice_status_update" }, { autoTrackExposure: !1 })
                    .enabled &&
                B(r).updateGuildRingingUsers(i, !1),
            n && null != r && !v.includes(r))
                ? e
                : j(i) || e;
        }, !1);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (t.type === L.rbe.GROUP_DM) {
            let e = t.originChannelId;
            if (null != e) return (G[t.id] = { [L.BRT.APP]: G[e]?.[L.BRT.APP] ?? L.DUB.NORMAL }), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: en,
    THREAD_DELETE: en,
    CALL_CREATE: et,
    CALL_UPDATE: et,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        return Z(t);
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let { channelId: t, id: n } = e,
            i = B(t);
        null == n &&
            i.toArray(C.r4.STREAM).forEach((e) => {
                (0, R.Ay)(e) && i.updateParticipant(e.user.id);
            });
        let [, r] = W(t);
        if (($(t, [n ?? R.jd.NONE, r]), (0, _.wL)(n))) {
            try {
                let { ownerId: e } = (0, _.Iy)(n);
                e === h.default.getId() && j(e, [t]);
            } catch (e) {
                y.warn(`INVALID STREAM KEY FORMAT ${n}`, e);
            }
            z(i) || (x[t] = !1);
        }
    },
    CHANNEL_RTC_POPOUT_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            [i] = W(t);
        i === n && $(t, null);
        let r = B(t),
            a = r.getParticipant(n);
        null == a || (a.type !== R.lp.ACTIVITY && (r.updateParticipantPoppedOut(n, !0), j(a.user.id, [t])));
    },
    CHANNEL_RTC_RETURN_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            i = B(t);
        i.updateParticipantPoppedOut(n, !1);
        let r = i.getParticipant(n);
        null == r || (r.type !== R.lp.ACTIVITY && j(r.user.id, [t]));
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
    USER_UPDATE: ee,
    GUILD_MEMBER_UPDATE: ee,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        if (
            (s().forEach(v, (e) => {
                let i = f.A.getChannel(e);
                (null == i || i.getGuildId() === t.id) && n.push(e);
            }),
            0 === n.length)
        )
            return !1;
        s().forEach(n, (e) => Z(e));
    },
});
