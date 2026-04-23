"use strict";
n.d(t, { A: () => er }), n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(228366),
    d = n(933958),
    _ = n(626584),
    u = n(643501),
    c = n(652896),
    E = n(164891),
    h = n(616356),
    m = n(495544),
    f = n(470710),
    g = n(734057),
    p = n(290863),
    A = n(309010),
    I = n(485296),
    T = n(287809),
    S = n(803301),
    N = n(977997),
    C = n(568598),
    R = n(806931),
    O = n(652215);
let y = new _.A("ChannelRTCStore");
y.enableNativeLogger(!0);
let v = Object.freeze([]),
    D = [],
    L = {},
    b = {},
    w = {},
    P = {},
    k = {},
    M = {},
    U = {},
    x = {},
    G = {},
    V = {};
function F(e) {
    let t = L[e];
    return null == t && ((t = new C.Ay(e)), (L[e] = t)), t;
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
    return t.reduce(
        (t, n) =>
            e(F(n))
                ? ((function (e) {
                      let t = F(e);
                      if (0 === t.size()) return;
                      let n = en(e) || z(t) ? O._Of.VIDEO : O._Of.VOICE;
                      if (n === O._Of.VOICE) {
                          let t = k[e]?.[O.BRT.APP];
                          delete P[e], t !== O.DUB.HAVEN && delete k[e];
                      } else P[e] = n;
                  })(n),
                  (function (e) {
                      let t = m.default.getId(),
                          n = F(e);
                      if (0 === n.size() || A.A.getVoiceChannelId() !== e) return K(e, null);
                      let i = R.jd.NONE,
                          s = n
                              .toArray(C.r4.STREAM)
                              .find((e) => e.type === R.lp.STREAM && h.A.getActiveStreamForStreamKey(e.id));
                      if (null != s) r()(s.type === R.lp.STREAM, "Impossible condition"), (i = s.id);
                      else if (1 === n.size()) i = t;
                      else if (1 === n.size(C.r4.VIDEO)) {
                          let [e] = n.toArray(C.r4.VIDEO);
                          i = e.id;
                      } else {
                          let e = n.toArray().find((e) => e.type === R.lp.USER && e.id !== t && !e.ringing);
                          i = e?.id ?? t;
                      }
                      let [a] = j(e);
                      if (a !== R.jd.AUTO && a !== R.jd.NONE) {
                          let e = n.getParticipant(a);
                          (null == e || (e.type === R.lp.STREAM && null == h.A.getActiveStreamForStreamKey(e.id))) &&
                              (a = R.jd.NONE);
                      }
                      K(e, [a, i]);
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
    let t = g.A.getChannel(e),
        n = t?.isDM() && 1 ? R.jd.AUTO : R.jd.NONE;
    return b[e] ?? [n, R.jd.NONE];
}
function W(e) {
    if (null == b[e]) return !1;
    let [t] = b[e];
    return t !== R.jd.NONE;
}
function Y(e) {
    null == w[e] && (w[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = w[e],
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
    null == t ? delete b[e] : (b[e] = t), n !== W(e) && w[e].toggleCount++;
}
function z(e) {
    return e.size(C.r4.STREAM) > 0 || e.size(C.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function $(e) {
    delete L[e], delete b[e], delete P[e], delete k[e];
}
function q() {
    let e, t, n, i, r, s;
    return B(
        (e) => e.rebuild(),
        ((e = []),
        null != (t = A.A.getChannelId()) && e.push(t),
        null == (n = A.A.getVoiceChannelId()) || e.includes(n) || e.push(n),
        (i = u.default.getRemoteSessionId()),
        (r = N.A.getVoiceStateForSession(m.default.getId(), i)),
        r?.channelId != null && e.push(r?.channelId),
        a().difference(D, e).forEach($),
        (s = a().difference(e, D)),
        (D = e),
        s),
    );
}
function X() {
    return B((e) => e.updateEmbeddedActivities());
}
function Z(e) {
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
    return delete x[t], delete G[t], $(t);
}
function et(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: i } = (0, c.Iy)(t);
    return H(i, [n]);
}
function en(e) {
    return !!g.A.getChannel(e)?.isGuildVocalOrThread();
}
class ei extends o.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        this.waitFor(h.A, m.default, f.A, g.A, d.Ay, u.default, p.A, A.A, I.A, T.default, S.A, N.A),
            this.syncWith([d.Ay], X),
            this.syncWith([u.default], q),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(U, e?.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: U };
    }
    getParticipantsVersion(e) {
        return F(e).version;
    }
    getParticipants(e) {
        return F(e).toArray() ?? v;
    }
    getSpeakingParticipants(e) {
        return F(e).toArray(C.r4.SPEAKING) ?? v;
    }
    getFilteredParticipants(e) {
        let t = F(e);
        return U[e] ? t.toArray(C.r4.FILTERED) : t.toArray(C.r4.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        return F(e).toArray(C.r4.VIDEO) ?? v;
    }
    getStreamParticipants(e) {
        return F(e).toArray(C.r4.STREAM) ?? v;
    }
    getActivityParticipants(e) {
        return F(e).toArray(C.r4.ACTIVITY) ?? v;
    }
    getParticipant(e, t) {
        return F(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = F(e);
        return t.size() - t.size(C.r4.STREAM) - t.size(C.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return M[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return U[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = j(e);
        return t === R.jd.NONE ? null : t !== R.jd.AUTO ? t : n === R.jd.NONE || n === R.jd.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : F(e).getParticipant(t);
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
        return F(e).guildRingingUsers;
    }
    getMode(e) {
        return P[e] ?? (en(e) ? O._Of.VIDEO : O._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.BRT.APP;
        if (__OVERLAY__) return O.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            i = !!g.A.getChannel(e)?.isGuildVocal() || (n && !!g.A.getChannel(e)?.isVocalThread());
        return k[e]?.[t] ?? (i ? O.DUB.NO_CHAT : O.DUB.NORMAL);
    }
    getChatOpen(e) {
        return x[e] ?? g.A.getChannel(e)?.isVocalThread() ?? !1;
    }
    getAllChatOpen() {
        return x;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O.BRT.APP;
        return Object.values(k).some((t) => t[e] === O.DUB.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return G[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return V[e];
    }
    isParticipantPoppedOut(e, t) {
        let n = this.getParticipant(e, t);
        return null != n && "isPoppedOut" in n && n.isPoppedOut;
    }
}
let er = new ei(l.h, {
    CONNECTION_OPEN: function () {
        for (let e of D) $(e);
        q();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: q,
    THREAD_LIST_SYNC: q,
    OVERLAY_INITIALIZE: q,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e,
            i = !1;
        if ((null != t ? delete w[t] : null != n && (delete x[n], delete G[n], Y(n)), t !== n && null != n)) {
            let e = F(n);
            e.guildRingingUsers.forEach((t) => e.updateGuildRingingUsers(t, !1)), (i = B((e) => e.rebuild(), [n]));
        }
        let r = q();
        return i || r;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            i = q();
        if (null == t || null == n || x[t]) return i;
        let r = g.A.getChannel(t);
        return null != r && r.isGuildVocal() ? ((x[t] = !0), !0) : i;
    },
    CHANNEL_RTC_ACTIVE_CHANNELS: q,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t, initial: n } = e;
        return t.reduce((e, t) => {
            let { userId: i, channelId: r, guildId: s } = t;
            return (null != s &&
                null != r &&
                E.A.getCurrentConfig({ guildId: s, location: "voice_status_update" }, { autoTrackExposure: !1 })
                    .enabled &&
                F(r).updateGuildRingingUsers(i, !1),
            n && null != r && !D.includes(r))
                ? e
                : H(i) || e;
        }, !1);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (t.type === O.rbe.GROUP_DM) {
            let e = t.originChannelId;
            if (null != e) return (k[t.id] = { [O.BRT.APP]: k[e]?.[O.BRT.APP] ?? O.DUB.NORMAL }), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: ee,
    THREAD_DELETE: ee,
    CALL_CREATE: J,
    CALL_UPDATE: J,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        return $(t);
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let { channelId: t, id: n } = e,
            i = F(t);
        null == n &&
            i.toArray(C.r4.STREAM).forEach((e) => {
                (0, R.Ay)(e) && i.updateParticipant(e.user.id);
            });
        let [, r] = j(t);
        if ((K(t, [n ?? R.jd.NONE, r]), (0, c.wL)(n))) {
            try {
                let { ownerId: e } = (0, c.Iy)(n);
                e === m.default.getId() && H(e, [t]);
            } catch (e) {
                y.warn(`INVALID STREAM KEY FORMAT ${n}`, e);
            }
            z(i) || (M[t] = !1);
        }
    },
    CHANNEL_RTC_POPOUT_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            [i] = j(t);
        i === n && K(t, null);
        let r = F(t),
            s = r.getParticipant(n);
        null == s || (s.type !== R.lp.ACTIVITY && (r.updateParticipantPoppedOut(n, !0), H(s.user.id, [t])));
    },
    CHANNEL_RTC_RETURN_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            i = F(t);
        i.updateParticipantPoppedOut(n, !1);
        let r = i.getParticipant(n);
        null == r || (r.type !== R.lp.ACTIVITY && H(r.user.id, [t]));
    },
    CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
        let { channelId: t, layout: n, appContext: i } = e;
        k[t] = { ...k[t], [i]: n };
    },
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function (e) {
        let { channelId: t, participantsOpen: n } = e;
        M[t] = n;
    },
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function (e) {
        let { channelId: t, voiceParticipantsHidden: n } = e;
        U[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function (e) {
        let { channelId: t, large: n } = e;
        G[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function (e) {
        let { channelId: t, dismissed: n } = e;
        V[t] = n;
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e,
            i = m.default.getId();
        if (n) {
            let [e] = j(t);
            (0, c.wL)(e) && e.includes(i) && K(t, null);
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
            { channelId: n, ownerId: i } = (0, c.Iy)(t);
        return H(i, [n]);
    },
    SPEAKING: Z,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: Z,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: Z,
    PUSH_TO_TALK_STATE_CHANGE: function () {
        return B((e) => e.updateParticipantSpeaking(m.default.getId()));
    },
    GUILD_RING_START: function (e) {
        let { channelId: t, guildId: n, ongoingRings: i } = e;
        if (!E.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
        let r = F(t);
        return Object.keys(i).forEach((e) => r.updateGuildRingingUsers(e, !0)), B((e) => e.rebuild(), [t]);
    },
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: i } = e;
        if (!E.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
        let r = F(t);
        return i.forEach((e) => r.updateGuildRingingUsers(e, !1)), B((e) => e.rebuild(), [t]);
    },
    USER_UPDATE: Q,
    GUILD_MEMBER_UPDATE: Q,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        if (
            (a().forEach(D, (e) => {
                let i = g.A.getChannel(e);
                (null == i || i.getGuildId() === t.id) && n.push(e);
            }),
            0 === n.length)
        )
            return !1;
        a().forEach(n, (e) => $(e));
    },
});
