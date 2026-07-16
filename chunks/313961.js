"use strict";
n.d(t, { A: () => er }), n(321073);
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
    R = n(806931),
    O = n(652215);
let L = new c.A("ChannelRTCStore");
L.enableNativeLogger(!0);
let y = Object.freeze([]),
    D = [],
    v = {},
    b = {},
    M = {},
    P = {},
    U = {},
    w = {},
    G = {},
    x = {},
    k = {},
    F = {};
function V(e) {
    let t = v[e];
    return null == t && ((t = new C.Ay(e)), (v[e] = t)), t;
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
    return t.reduce(
        (t, n) =>
            e(V(n))
                ? ((function (e) {
                      let t = V(e);
                      if (0 === t.size()) return;
                      let n = en(e) || $(t) ? O._Of.VIDEO : O._Of.VOICE;
                      if (n === O._Of.VOICE) {
                          let t = U[e]?.[O.BRT.APP];
                          delete P[e], t !== O.DUB.HAVEN && delete U[e];
                      } else P[e] = n;
                  })(n),
                  (function (e) {
                      let t = h.default.getId(),
                          n = V(e);
                      if (0 === n.size() || T.Ay.getVoiceChannelId() !== e) return K(e, null);
                      let i = R.jd.NONE,
                          a = n
                              .toArray(C.r4.STREAM)
                              .find((e) => e.type === R.lp.STREAM && A.A.getActiveStreamForStreamKey(e.id));
                      if (null != a) r()(a.type === R.lp.STREAM, "Impossible condition"), (i = a.id);
                      else if (1 === n.size()) i = t;
                      else if (1 === n.size(C.r4.VIDEO)) {
                          let [e] = n.toArray(C.r4.VIDEO);
                          i = e.id;
                      } else {
                          let e = n.toArray().find((e) => e.type === R.lp.USER && e.id !== t && !e.ringing);
                          i = e?.id ?? t;
                      }
                      let [s] = j(e);
                      if (s !== R.jd.AUTO && s !== R.jd.NONE) {
                          let e = n.getParticipant(s);
                          (null == e || (e.type === R.lp.STREAM && null == A.A.getActiveStreamForStreamKey(e.id))) &&
                              (s = R.jd.NONE);
                      }
                      K(e, [s, i]);
                  })(n),
                  !0)
                : t,
        !1,
    );
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
    return B((t) => t.updateParticipant(e), t);
}
function j(e) {
    let t = f.A.getChannel(e),
        n = t?.isDM() && 1 ? R.jd.AUTO : R.jd.NONE;
    return b[e] ?? [n, R.jd.NONE];
}
function W(e) {
    if (null == b[e]) return !1;
    let [t] = b[e];
    return t !== R.jd.NONE;
}
function Y(e) {
    null == M[e] && (M[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = M[e],
        n = performance.now(),
        i = W(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[i ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function K(e, t) {
    Y(e);
    let n = W(e);
    null == t ? delete b[e] : (b[e] = t), n !== W(e) && M[e].toggleCount++;
}
function $(e) {
    return e.size(C.r4.STREAM) > 0 || e.size(C.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function z(e) {
    delete v[e], delete b[e], delete P[e], delete U[e];
}
function q() {
    let e, t, n, i, r, a;
    return B(
        (e) => e.rebuild(),
        ((e = []),
        null != (t = T.Ay.getChannelId()) && e.push(t),
        null == (n = T.Ay.getVoiceChannelId()) || e.includes(n) || e.push(n),
        (i = u.default.getRemoteSessionId()),
        (r = N.A.getVoiceStateForSession(h.default.getId(), i)),
        r?.channelId != null && e.push(r?.channelId),
        s().difference(D, e).forEach(z),
        (a = s().difference(e, D)),
        (D = e),
        a),
    );
}
function Z() {
    return B((e) => e.updateEmbeddedActivities());
}
function X(e) {
    let { userId: t } = e;
    return B((e) => e.updateParticipantSpeaking(t));
}
function Q(e) {
    let { user: t } = e;
    return H(t.id);
}
function J(e) {
    let { channelId: t } = e;
    return B((e) => e.rebuild(), [t]);
}
function ee(e) {
    let {
        channel: { id: t },
    } = e;
    return delete x[t], delete k[t], z(t);
}
function et(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: i } = (0, _.Iy)(t);
    return H(i, [n]);
}
function en(e) {
    return !!f.A.getChannel(e)?.isGuildVocalOrThread();
}
class ei extends l.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        this.waitFor(A.A, h.default, I.A, f.A, d.Ay, u.default, p.A, T.Ay, m.A, g.default, S.A, N.A),
            this.syncWith([d.Ay], Z),
            this.syncWith([u.default], q),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(G, e?.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: G };
    }
    getParticipantsVersion(e) {
        return V(e).version;
    }
    getParticipants(e) {
        return V(e).toArray() ?? y;
    }
    getSpeakingParticipants(e) {
        return V(e).toArray(C.r4.SPEAKING) ?? y;
    }
    getFilteredParticipants(e) {
        let t = V(e);
        return G[e] ? t.toArray(C.r4.FILTERED) : t.toArray(C.r4.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        return V(e).toArray(C.r4.VIDEO) ?? y;
    }
    getStreamParticipants(e) {
        return V(e).toArray(C.r4.STREAM) ?? y;
    }
    getActivityParticipants(e) {
        return V(e).toArray(C.r4.ACTIVITY) ?? y;
    }
    getParticipant(e, t) {
        return V(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = V(e);
        return t.size() - t.size(C.r4.STREAM) - t.size(C.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return w[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return G[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = j(e);
        return t === R.jd.NONE ? null : t !== R.jd.AUTO ? t : n === R.jd.NONE || n === R.jd.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : V(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = M[e];
        return null == t
            ? {}
            : {
                  view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                  view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                  view_mode_toggle_count: t.toggleCount,
              };
    }
    getGuildRingingUsers(e) {
        return V(e).guildRingingUsers;
    }
    getMode(e) {
        return P[e] ?? (en(e) ? O._Of.VIDEO : O._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.BRT.APP;
        if (__OVERLAY__) return O.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            i = !!f.A.getChannel(e)?.isGuildVocal() || (n && !!f.A.getChannel(e)?.isVocalThread());
        return U[e]?.[t] ?? (i ? O.DUB.NO_CHAT : O.DUB.NORMAL);
    }
    getChatOpen(e) {
        return x[e] ?? f.A.getChannel(e)?.isVocalThread() ?? !1;
    }
    getAllChatOpen() {
        return x;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O.BRT.APP;
        return Object.values(U).some((t) => t[e] === O.DUB.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return k[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return F[e];
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
let er = new ei(o.h, {
    CONNECTION_OPEN: function () {
        for (let e of D) z(e);
        q();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: q,
    THREAD_LIST_SYNC: q,
    OVERLAY_INITIALIZE: q,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e,
            i = !1;
        if ((null != t ? delete M[t] : null != n && (delete x[n], delete k[n], Y(n)), t !== n && null != n)) {
            let e = V(n);
            e.guildRingingUsers.forEach((t) => e.updateGuildRingingUsers(t, !1)), (i = B((e) => e.rebuild(), [n]));
        }
        let r = q();
        return i || r;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            i = q();
        if (null == t || null == n || x[t]) return i;
        let r = f.A.getChannel(t);
        return null != r && r.isGuildVocal() ? ((x[t] = !0), !0) : i;
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
                V(r).updateGuildRingingUsers(i, !1),
            n && null != r && !D.includes(r))
                ? e
                : H(i) || e;
        }, !1);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (t.type === O.rbe.GROUP_DM) {
            let e = t.originChannelId;
            if (null != e) return (U[t.id] = { [O.BRT.APP]: U[e]?.[O.BRT.APP] ?? O.DUB.NORMAL }), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: ee,
    THREAD_DELETE: ee,
    CALL_CREATE: J,
    CALL_UPDATE: J,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        return z(t);
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let { channelId: t, id: n } = e,
            i = V(t);
        null == n &&
            i.toArray(C.r4.STREAM).forEach((e) => {
                (0, R.Ay)(e) && i.updateParticipant(e.user.id);
            });
        let [, r] = j(t);
        if ((K(t, [n ?? R.jd.NONE, r]), (0, _.wL)(n))) {
            try {
                let { ownerId: e } = (0, _.Iy)(n);
                e === h.default.getId() && H(e, [t]);
            } catch (e) {
                L.warn(`INVALID STREAM KEY FORMAT ${n}`, e);
            }
            $(i) || (w[t] = !1);
        }
    },
    CHANNEL_RTC_POPOUT_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            [i] = j(t);
        i === n && K(t, null);
        let r = V(t),
            a = r.getParticipant(n);
        null == a || (a.type !== R.lp.ACTIVITY && (r.updateParticipantPoppedOut(n, !0), H(a.user.id, [t])));
    },
    CHANNEL_RTC_RETURN_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            i = V(t);
        i.updateParticipantPoppedOut(n, !1);
        let r = i.getParticipant(n);
        null == r || (r.type !== R.lp.ACTIVITY && H(r.user.id, [t]));
    },
    CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
        let { channelId: t, layout: n, appContext: i } = e;
        U[t] = { ...U[t], [i]: n };
    },
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function (e) {
        let { channelId: t, participantsOpen: n } = e;
        w[t] = n;
    },
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function (e) {
        let { channelId: t, voiceParticipantsHidden: n } = e;
        G[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function (e) {
        let { channelId: t, large: n } = e;
        k[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function (e) {
        let { channelId: t, dismissed: n } = e;
        F[t] = n;
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e,
            i = h.default.getId();
        if (n) {
            let [e] = j(t);
            (0, _.wL)(e) && e.includes(i) && K(t, null);
        }
        H(i, [t]);
    },
    CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
        let { channelId: t, chatOpen: n } = e;
        x[t] = n;
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { channelId: t, userId: n } = e;
        return H(n, [t]);
    },
    RTC_CONNECTION_PLATFORM: function (e) {
        let { channelId: t, userId: n } = e;
        return H(n, [t]);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { userId: t } = e;
        return H(t);
    },
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function (e) {
        let { channelId: t, senderUserId: n, maxResolution: i, maxFrameRate: r } = e;
        return B((e) => e.updateParticipantQuality(n, i, r), [t]);
    },
    STREAM_CLOSE: et,
    STREAM_DELETE: et,
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { channelId: n, ownerId: i } = (0, _.Iy)(t);
        return H(i, [n]);
    },
    SPEAKING: X,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: X,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: X,
    PUSH_TO_TALK_STATE_CHANGE: function () {
        return B((e) => e.updateParticipantSpeaking(h.default.getId()));
    },
    GUILD_RING_START: function (e) {
        let { channelId: t, guildId: n, ongoingRings: i } = e;
        if (!E.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
        let r = V(t);
        return Object.keys(i).forEach((e) => r.updateGuildRingingUsers(e, !0)), B((e) => e.rebuild(), [t]);
    },
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (!E.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
        let r = V(t);
        return i.forEach((e) => r.updateGuildRingingUsers(e, !1)), B((e) => e.rebuild(), [t]);
    },
    USER_UPDATE: Q,
    GUILD_MEMBER_UPDATE: Q,
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
        s().forEach(n, (e) => z(e));
    },
});
