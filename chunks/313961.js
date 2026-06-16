"use strict";
n.d(t, { A: () => er }), n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(228366),
    u = n(933958),
    c = n(626584),
    d = n(643501),
    _ = n(652896),
    h = n(164891),
    f = n(616356),
    p = n(495544),
    E = n(470710),
    m = n(734057),
    g = n(290863),
    A = n(309010),
    I = n(485296),
    T = n(287809),
    S = n(803301),
    y = n(977997),
    C = n(568598),
    N = n(806931),
    v = n(652215);
let R = new c.A("ChannelRTCStore");
R.enableNativeLogger(!0);
let O = Object.freeze([]),
    b = [],
    D = {},
    L = {},
    w = {},
    M = {},
    P = {},
    x = {},
    k = {},
    U = {},
    G = {},
    F = {};
function V(e) {
    let t = D[e];
    return null == t && ((t = new C.Ay(e)), (D[e] = t)), t;
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
    return t.reduce(
        (t, n) =>
            e(V(n))
                ? ((function (e) {
                      let t = V(e);
                      if (0 === t.size()) return;
                      let n = en(e) || $(t) ? v._Of.VIDEO : v._Of.VOICE;
                      if (n === v._Of.VOICE) {
                          let t = P[e]?.[v.BRT.APP];
                          delete M[e], t !== v.DUB.HAVEN && delete P[e];
                      } else M[e] = n;
                  })(n),
                  (function (e) {
                      let t = p.default.getId(),
                          n = V(e);
                      if (0 === n.size() || A.A.getVoiceChannelId() !== e) return K(e, null);
                      let i = N.jd.NONE,
                          s = n
                              .toArray(C.r4.STREAM)
                              .find((e) => e.type === N.lp.STREAM && f.A.getActiveStreamForStreamKey(e.id));
                      if (null != s) r()(s.type === N.lp.STREAM, "Impossible condition"), (i = s.id);
                      else if (1 === n.size()) i = t;
                      else if (1 === n.size(C.r4.VIDEO)) {
                          let [e] = n.toArray(C.r4.VIDEO);
                          i = e.id;
                      } else {
                          let e = n.toArray().find((e) => e.type === N.lp.USER && e.id !== t && !e.ringing);
                          i = e?.id ?? t;
                      }
                      let [a] = H(e);
                      if (a !== N.jd.AUTO && a !== N.jd.NONE) {
                          let e = n.getParticipant(a);
                          (null == e || (e.type === N.lp.STREAM && null == f.A.getActiveStreamForStreamKey(e.id))) &&
                              (a = N.jd.NONE);
                      }
                      K(e, [a, i]);
                  })(n),
                  !0)
                : t,
        !1,
    );
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
    return B((t) => t.updateParticipant(e), t);
}
function H(e) {
    let t = m.A.getChannel(e),
        n = t?.isDM() && 1 ? N.jd.AUTO : N.jd.NONE;
    return L[e] ?? [n, N.jd.NONE];
}
function Y(e) {
    if (null == L[e]) return !1;
    let [t] = L[e];
    return t !== N.jd.NONE;
}
function W(e) {
    null == w[e] && (w[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = w[e],
        n = performance.now(),
        i = Y(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[i ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function K(e, t) {
    W(e);
    let n = Y(e);
    null == t ? delete L[e] : (L[e] = t), n !== Y(e) && w[e].toggleCount++;
}
function $(e) {
    return e.size(C.r4.STREAM) > 0 || e.size(C.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function z(e) {
    delete D[e], delete L[e], delete M[e], delete P[e];
}
function q() {
    let e, t, n, i, r, s;
    return B(
        (e) => e.rebuild(),
        ((e = []),
        null != (t = A.A.getChannelId()) && e.push(t),
        null == (n = A.A.getVoiceChannelId()) || e.includes(n) || e.push(n),
        (i = d.default.getRemoteSessionId()),
        (r = y.A.getVoiceStateForSession(p.default.getId(), i)),
        r?.channelId != null && e.push(r?.channelId),
        a().difference(b, e).forEach(z),
        (s = a().difference(e, b)),
        (b = e),
        s),
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
    return j(t.id);
}
function J(e) {
    let { channelId: t } = e;
    return B((e) => e.rebuild(), [t]);
}
function ee(e) {
    let {
        channel: { id: t },
    } = e;
    return delete U[t], delete G[t], z(t);
}
function et(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: i } = (0, _.Iy)(t);
    return j(i, [n]);
}
function en(e) {
    return !!m.A.getChannel(e)?.isGuildVocalOrThread();
}
class ei extends o.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        this.waitFor(f.A, p.default, E.A, m.A, u.Ay, d.default, g.A, A.A, I.A, T.default, S.A, y.A),
            this.syncWith([u.Ay], Z),
            this.syncWith([d.default], q),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(k, e?.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: k };
    }
    getParticipantsVersion(e) {
        return V(e).version;
    }
    getParticipants(e) {
        return V(e).toArray() ?? O;
    }
    getSpeakingParticipants(e) {
        return V(e).toArray(C.r4.SPEAKING) ?? O;
    }
    getFilteredParticipants(e) {
        let t = V(e);
        return k[e] ? t.toArray(C.r4.FILTERED) : t.toArray(C.r4.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        return V(e).toArray(C.r4.VIDEO) ?? O;
    }
    getStreamParticipants(e) {
        return V(e).toArray(C.r4.STREAM) ?? O;
    }
    getActivityParticipants(e) {
        return V(e).toArray(C.r4.ACTIVITY) ?? O;
    }
    getParticipant(e, t) {
        return V(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = V(e);
        return t.size() - t.size(C.r4.STREAM) - t.size(C.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return x[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return k[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = H(e);
        return t === N.jd.NONE ? null : t !== N.jd.AUTO ? t : n === N.jd.NONE || n === N.jd.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : V(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = w[e];
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
        return M[e] ?? (en(e) ? v._Of.VIDEO : v._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v.BRT.APP;
        if (__OVERLAY__) return v.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            i = !!m.A.getChannel(e)?.isGuildVocal() || (n && !!m.A.getChannel(e)?.isVocalThread());
        return P[e]?.[t] ?? (i ? v.DUB.NO_CHAT : v.DUB.NORMAL);
    }
    getChatOpen(e) {
        return U[e] ?? m.A.getChannel(e)?.isVocalThread() ?? !1;
    }
    getAllChatOpen() {
        return U;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.BRT.APP;
        return Object.values(P).some((t) => t[e] === v.DUB.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return G[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return F[e];
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
let er = new ei(l.h, {
    CONNECTION_OPEN: function () {
        for (let e of b) z(e);
        q();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: q,
    THREAD_LIST_SYNC: q,
    OVERLAY_INITIALIZE: q,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e,
            i = !1;
        if ((null != t ? delete w[t] : null != n && (delete U[n], delete G[n], W(n)), t !== n && null != n)) {
            let e = V(n);
            e.guildRingingUsers.forEach((t) => e.updateGuildRingingUsers(t, !1)), (i = B((e) => e.rebuild(), [n]));
        }
        let r = q();
        return i || r;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            i = q();
        if (null == t || null == n || U[t]) return i;
        let r = m.A.getChannel(t);
        return null != r && r.isGuildVocal() ? ((U[t] = !0), !0) : i;
    },
    CHANNEL_RTC_ACTIVE_CHANNELS: q,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t, initial: n } = e;
        return t.reduce((e, t) => {
            let { userId: i, channelId: r, guildId: s } = t;
            return (null != s &&
                null != r &&
                h.A.getCurrentConfig({ guildId: s, location: "voice_status_update" }, { autoTrackExposure: !1 })
                    .enabled &&
                V(r).updateGuildRingingUsers(i, !1),
            n && null != r && !b.includes(r))
                ? e
                : j(i) || e;
        }, !1);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (t.type === v.rbe.GROUP_DM) {
            let e = t.originChannelId;
            if (null != e) return (P[t.id] = { [v.BRT.APP]: P[e]?.[v.BRT.APP] ?? v.DUB.NORMAL }), !0;
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
                (0, N.Ay)(e) && i.updateParticipant(e.user.id);
            });
        let [, r] = H(t);
        if ((K(t, [n ?? N.jd.NONE, r]), (0, _.wL)(n))) {
            try {
                let { ownerId: e } = (0, _.Iy)(n);
                e === p.default.getId() && j(e, [t]);
            } catch (e) {
                R.warn(`INVALID STREAM KEY FORMAT ${n}`, e);
            }
            $(i) || (x[t] = !1);
        }
    },
    CHANNEL_RTC_POPOUT_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            [i] = H(t);
        i === n && K(t, null);
        let r = V(t),
            s = r.getParticipant(n);
        null == s || (s.type !== N.lp.ACTIVITY && (r.updateParticipantPoppedOut(n, !0), j(s.user.id, [t])));
    },
    CHANNEL_RTC_RETURN_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            i = V(t);
        i.updateParticipantPoppedOut(n, !1);
        let r = i.getParticipant(n);
        null == r || (r.type !== N.lp.ACTIVITY && j(r.user.id, [t]));
    },
    CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
        let { channelId: t, layout: n, appContext: i } = e;
        P[t] = { ...P[t], [i]: n };
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
        G[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function (e) {
        let { channelId: t, dismissed: n } = e;
        F[t] = n;
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e,
            i = p.default.getId();
        if (n) {
            let [e] = H(t);
            (0, _.wL)(e) && e.includes(i) && K(t, null);
        }
        j(i, [t]);
    },
    CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
        let { channelId: t, chatOpen: n } = e;
        U[t] = n;
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
        return B((e) => e.updateParticipantQuality(n, i, r), [t]);
    },
    STREAM_CLOSE: et,
    STREAM_DELETE: et,
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { channelId: n, ownerId: i } = (0, _.Iy)(t);
        return j(i, [n]);
    },
    SPEAKING: X,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: X,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: X,
    PUSH_TO_TALK_STATE_CHANGE: function () {
        return B((e) => e.updateParticipantSpeaking(p.default.getId()));
    },
    GUILD_RING_START: function (e) {
        let { channelId: t, guildId: n, ongoingRings: i } = e;
        if (!h.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
        let r = V(t);
        return Object.keys(i).forEach((e) => r.updateGuildRingingUsers(e, !0)), B((e) => e.rebuild(), [t]);
    },
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (!h.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
        let r = V(t);
        return i.forEach((e) => r.updateGuildRingingUsers(e, !1)), B((e) => e.rebuild(), [t]);
    },
    USER_UPDATE: Q,
    GUILD_MEMBER_UPDATE: Q,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        if (
            (a().forEach(b, (e) => {
                let i = m.A.getChannel(e);
                (null == i || i.getGuildId() === t.id) && n.push(e);
            }),
            0 === n.length)
        )
            return !1;
        a().forEach(n, (e) => z(e));
    },
});
