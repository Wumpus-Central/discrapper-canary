"use strict";
n.d(t, { A: () => ei }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(73153),
    u = n(933958),
    c = n(626584),
    d = n(643501),
    _ = n(652896),
    f = n(164891),
    p = n(616356),
    h = n(961350),
    E = n(470710),
    m = n(734057),
    g = n(290863),
    A = n(309010),
    I = n(485296),
    T = n(287809),
    S = n(803301),
    y = n(977997),
    N = n(568598),
    v = n(806931),
    C = n(652215);
let O = new c.A("ChannelRTCStore");
O.enableNativeLogger(!0);
let R = Object.freeze([]),
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
    return null == t && ((t = new N.Ay(e)), (D[e] = t)), t;
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
    return t.reduce(
        (t, n) =>
            e(V(n))
                ? ((function (e) {
                      let t = V(e);
                      if (0 === t.size()) return;
                      let n = en(e) || $(t) ? C._Of.VIDEO : C._Of.VOICE;
                      if (n === C._Of.VOICE) {
                          let t = P[e]?.[C.BRT.APP];
                          delete M[e], t !== C.DUB.HAVEN && delete P[e];
                      } else M[e] = n;
                  })(n),
                  (function (e) {
                      let t = h.default.getId(),
                          n = V(e);
                      if (0 === n.size() || A.A.getVoiceChannelId() !== e) return K(e, null);
                      let r = v.jd.NONE,
                          s = n
                              .toArray(N.r4.STREAM)
                              .find((e) => e.type === v.lp.STREAM && p.A.getActiveStreamForStreamKey(e.id));
                      if (null != s) i()(s.type === v.lp.STREAM, "Impossible condition"), (r = s.id);
                      else if (1 === n.size()) r = t;
                      else if (1 === n.size(N.r4.VIDEO)) {
                          let [e] = n.toArray(N.r4.VIDEO);
                          r = e.id;
                      } else {
                          let e = n.toArray().find((e) => e.type === v.lp.USER && e.id !== t && !e.ringing);
                          r = e?.id ?? t;
                      }
                      let [a] = j(e);
                      if (a !== v.jd.AUTO && a !== v.jd.NONE) {
                          let e = n.getParticipant(a);
                          (null == e || (e.type === v.lp.STREAM && null == p.A.getActiveStreamForStreamKey(e.id))) &&
                              (a = v.jd.NONE);
                      }
                      K(e, [a, r]);
                  })(n),
                  !0)
                : t,
        !1,
    );
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
    return B((t) => t.updateParticipant(e), t);
}
function j(e) {
    let t = m.A.getChannel(e),
        n = t?.isDM() && 1 ? v.jd.AUTO : v.jd.NONE;
    return L[e] ?? [n, v.jd.NONE];
}
function Y(e) {
    if (null == L[e]) return !1;
    let [t] = L[e];
    return t !== v.jd.NONE;
}
function W(e) {
    null == w[e] && (w[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = w[e],
        n = performance.now(),
        r = Y(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[r ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function K(e, t) {
    W(e);
    let n = Y(e);
    null == t ? delete L[e] : (L[e] = t), n !== Y(e) && w[e].toggleCount++;
}
function $(e) {
    return e.size(N.r4.STREAM) > 0 || e.size(N.r4.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function z(e) {
    delete D[e], delete L[e], delete M[e], delete P[e];
}
function q() {
    let e, t, n, r, i, s;
    return B(
        (e) => e.rebuild(),
        ((e = []),
        null != (t = A.A.getChannelId()) && e.push(t),
        null == (n = A.A.getVoiceChannelId()) || e.includes(n) || e.push(n),
        (r = d.default.getRemoteSessionId()),
        (i = y.A.getVoiceStateForSession(h.default.getId(), r)),
        i?.channelId != null && e.push(i?.channelId),
        a().difference(b, e).forEach(z),
        (s = a().difference(e, b)),
        (b = e),
        s),
    );
}
function X() {
    return B((e) => e.updateEmbeddedActivities());
}
function Q(e) {
    let { userId: t } = e;
    return B((e) => e.updateParticipantSpeaking(t));
}
function Z(e) {
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
    return delete U[t], delete G[t], z(t);
}
function et(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, _.Iy)(t);
    return H(r, [n]);
}
function en(e) {
    return !!m.A.getChannel(e)?.isGuildVocalOrThread();
}
class er extends o.Ay.PersistedStore {
    static displayName = "ChannelRTCStore";
    static persistKey = "ChannelRTCStore";
    initialize(e) {
        this.waitFor(p.A, h.default, E.A, m.A, u.Ay, d.default, g.A, A.A, I.A, T.default, S.A, y.A),
            this.syncWith([u.Ay], X),
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
        return V(e).toArray() ?? R;
    }
    getSpeakingParticipants(e) {
        return V(e).toArray(N.r4.SPEAKING) ?? R;
    }
    getFilteredParticipants(e) {
        let t = V(e);
        return k[e] ? t.toArray(N.r4.FILTERED) : t.toArray(N.r4.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        return V(e).toArray(N.r4.VIDEO) ?? R;
    }
    getStreamParticipants(e) {
        return V(e).toArray(N.r4.STREAM) ?? R;
    }
    getActivityParticipants(e) {
        return V(e).toArray(N.r4.ACTIVITY) ?? R;
    }
    getParticipant(e, t) {
        return V(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = V(e);
        return t.size() - t.size(N.r4.STREAM) - t.size(N.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return x[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return k[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = j(e);
        return t === v.jd.NONE ? null : t !== v.jd.AUTO ? t : n === v.jd.NONE || n === v.jd.AUTO ? null : n;
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
        return M[e] ?? (en(e) ? C._Of.VIDEO : C._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.BRT.APP;
        if (__OVERLAY__) return C.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            r = !!m.A.getChannel(e)?.isGuildVocal() || (n && !!m.A.getChannel(e)?.isVocalThread());
        return P[e]?.[t] ?? (r ? C.DUB.NO_CHAT : C.DUB.NORMAL);
    }
    getChatOpen(e) {
        return U[e] ?? m.A.getChannel(e)?.isVocalThread() ?? !1;
    }
    getAllChatOpen() {
        return U;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.BRT.APP;
        return Object.values(P).some((t) => t[e] === C.DUB.FULL_SCREEN);
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
let ei = new er(l.h, {
    CONNECTION_OPEN: function () {
        for (let e of b) z(e);
        q();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: q,
    THREAD_LIST_SYNC: q,
    OVERLAY_INITIALIZE: q,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e,
            r = !1;
        if ((null != t ? delete w[t] : null != n && (delete U[n], delete G[n], W(n)), t !== n && null != n)) {
            let e = V(n);
            e.guildRingingUsers.forEach((t) => e.updateGuildRingingUsers(t, !1)), (r = B((e) => e.rebuild(), [n]));
        }
        let i = q();
        return r || i;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            r = q();
        if (null == t || null == n || U[t]) return r;
        let i = m.A.getChannel(t);
        return null != i && i.isGuildVocal() ? ((U[t] = !0), !0) : r;
    },
    CHANNEL_RTC_ACTIVE_CHANNELS: q,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t, initial: n } = e;
        return t.reduce((e, t) => {
            let { userId: r, channelId: i, guildId: s } = t;
            return (null != s &&
                null != i &&
                f.A.getCurrentConfig({ guildId: s, location: "voice_status_update" }, { autoTrackExposure: !1 })
                    .enabled &&
                V(i).updateGuildRingingUsers(r, !1),
            n && null != i && !b.includes(i))
                ? e
                : H(r) || e;
        }, !1);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (t.type === C.rbe.GROUP_DM) {
            let e = t.originChannelId;
            if (null != e) return (P[t.id] = { [C.BRT.APP]: P[e]?.[C.BRT.APP] ?? C.DUB.NORMAL }), !0;
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
            r = V(t);
        null == n &&
            r.toArray(N.r4.STREAM).forEach((e) => {
                (0, v.Ay)(e) && r.updateParticipant(e.user.id);
            });
        let [, i] = j(t);
        if ((K(t, [n ?? v.jd.NONE, i]), (0, _.wL)(n))) {
            try {
                let { ownerId: e } = (0, _.Iy)(n);
                e === h.default.getId() && H(e, [t]);
            } catch (e) {
                O.warn(`INVALID STREAM KEY FORMAT ${n}`, e);
            }
            $(r) || (x[t] = !1);
        }
    },
    CHANNEL_RTC_POPOUT_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            [r] = j(t);
        r === n && K(t, null);
        let i = V(t),
            s = i.getParticipant(n);
        null == s || (s.type !== v.lp.ACTIVITY && (i.updateParticipantPoppedOut(n, !0), H(s.user.id, [t])));
    },
    CHANNEL_RTC_RETURN_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            r = V(t);
        r.updateParticipantPoppedOut(n, !1);
        let i = r.getParticipant(n);
        null == i || (i.type !== v.lp.ACTIVITY && H(i.user.id, [t]));
    },
    CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
        let { channelId: t, layout: n, appContext: r } = e;
        P[t] = { ...P[t], [r]: n };
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
            r = h.default.getId();
        if (n) {
            let [e] = j(t);
            (0, _.wL)(e) && e.includes(r) && K(t, null);
        }
        H(r, [t]);
    },
    CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
        let { channelId: t, chatOpen: n } = e;
        U[t] = n;
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
        let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
        return B((e) => e.updateParticipantQuality(n, r, i), [t]);
    },
    STREAM_CLOSE: et,
    STREAM_DELETE: et,
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { channelId: n, ownerId: r } = (0, _.Iy)(t);
        return H(r, [n]);
    },
    SPEAKING: Q,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: Q,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: Q,
    PUSH_TO_TALK_STATE_CHANGE: function () {
        return B((e) => e.updateParticipantSpeaking(h.default.getId()));
    },
    GUILD_RING_START: function (e) {
        let { channelId: t, guildId: n, ongoingRings: r } = e;
        if (!f.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
        let i = V(t);
        return Object.keys(r).forEach((e) => i.updateGuildRingingUsers(e, !0)), B((e) => e.rebuild(), [t]);
    },
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: r } = e;
        if (!f.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
        let i = V(t);
        return r.forEach((e) => i.updateGuildRingingUsers(e, !1)), B((e) => e.rebuild(), [t]);
    },
    USER_UPDATE: Z,
    GUILD_MEMBER_UPDATE: Z,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = [];
        if (
            (a().forEach(b, (e) => {
                let r = m.A.getChannel(e);
                (null == r || r.getGuildId() === t.id) && n.push(e);
            }),
            0 === n.length)
        )
            return !1;
        a().forEach(n, (e) => z(e));
    },
});
