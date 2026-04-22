"use strict";
n.d(t, { A: () => ei }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(73153),
    u = n(933958),
    d = n(626584),
    c = n(643501),
    _ = n(652896),
    f = n(164891),
    E = n(616356),
    h = n(961350),
    p = n(470710),
    m = n(734057),
    g = n(290863),
    A = n(309010),
    I = n(485296),
    T = n(287809),
    S = n(803301),
    y = n(977997),
    N = n(568598),
    O = n(806931),
    R = n(652215);
let v = new d.A("ChannelRTCStore");
v.enableNativeLogger(!0);
let C = Object.freeze([]),
    b = [],
    D = {},
    L = {},
    w = {},
    M = {},
    P = {},
    U = {},
    k = {},
    x = {},
    G = {},
    V = {};
function F(e) {
    let t = D[e];
    return null == t && ((t = new N.Ay(e)), (D[e] = t)), t;
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
    return t.reduce(
        (t, n) =>
            e(F(n))
                ? ((function (e) {
                      let t = F(e);
                      if (0 === t.size()) return;
                      let n = en(e) || $(t) ? R._Of.VIDEO : R._Of.VOICE;
                      if (n === R._Of.VOICE) {
                          let t = P[e]?.[R.BRT.APP];
                          delete M[e], t !== R.DUB.HAVEN && delete P[e];
                      } else M[e] = n;
                  })(n),
                  (function (e) {
                      let t = h.default.getId(),
                          n = F(e);
                      if (0 === n.size() || A.A.getVoiceChannelId() !== e) return K(e, null);
                      let r = O.jd.NONE,
                          s = n
                              .toArray(N.r4.STREAM)
                              .find((e) => e.type === O.lp.STREAM && E.A.getActiveStreamForStreamKey(e.id));
                      if (null != s) i()(s.type === O.lp.STREAM, "Impossible condition"), (r = s.id);
                      else if (1 === n.size()) r = t;
                      else if (1 === n.size(N.r4.VIDEO)) {
                          let [e] = n.toArray(N.r4.VIDEO);
                          r = e.id;
                      } else {
                          let e = n.toArray().find((e) => e.type === O.lp.USER && e.id !== t && !e.ringing);
                          r = e?.id ?? t;
                      }
                      let [a] = Y(e);
                      if (a !== O.jd.AUTO && a !== O.jd.NONE) {
                          let e = n.getParticipant(a);
                          (null == e || (e.type === O.lp.STREAM && null == E.A.getActiveStreamForStreamKey(e.id))) &&
                              (a = O.jd.NONE);
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
function Y(e) {
    let t = m.A.getChannel(e),
        n = t?.isDM() && 1 ? O.jd.AUTO : O.jd.NONE;
    return L[e] ?? [n, O.jd.NONE];
}
function W(e) {
    if (null == L[e]) return !1;
    let [t] = L[e];
    return t !== O.jd.NONE;
}
function j(e) {
    null == w[e] && (w[e] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 });
    let t = w[e],
        n = performance.now(),
        r = W(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[r ? "focusDurationMs" : "gridDurationMs"] += e;
    }
    t.lastUpdate = n;
}
function K(e, t) {
    j(e);
    let n = W(e);
    null == t ? delete L[e] : (L[e] = t), n !== W(e) && w[e].toggleCount++;
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
        (r = c.default.getRemoteSessionId()),
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
function J(e) {
    let { user: t } = e;
    return H(t.id);
}
function Z(e) {
    let { channelId: t } = e;
    return B((e) => e.rebuild(), [t]);
}
function ee(e) {
    let {
        channel: { id: t },
    } = e;
    return delete x[t], delete G[t], z(t);
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
        this.waitFor(E.A, h.default, p.A, m.A, u.Ay, c.default, g.A, A.A, I.A, T.default, S.A, y.A),
            this.syncWith([u.Ay], X),
            this.syncWith([c.default], q),
            e?.voiceParticipantsHidden !== void 0 && Object.assign(k, e?.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: k };
    }
    getParticipantsVersion(e) {
        return F(e).version;
    }
    getParticipants(e) {
        return F(e).toArray() ?? C;
    }
    getSpeakingParticipants(e) {
        return F(e).toArray(N.r4.SPEAKING) ?? C;
    }
    getFilteredParticipants(e) {
        let t = F(e);
        return k[e] ? t.toArray(N.r4.FILTERED) : t.toArray(N.r4.NOT_POPPED_OUT);
    }
    getVideoParticipants(e) {
        return F(e).toArray(N.r4.VIDEO) ?? C;
    }
    getStreamParticipants(e) {
        return F(e).toArray(N.r4.STREAM) ?? C;
    }
    getActivityParticipants(e) {
        return F(e).toArray(N.r4.ACTIVITY) ?? C;
    }
    getParticipant(e, t) {
        return F(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = F(e);
        return t.size() - t.size(N.r4.STREAM) - t.size(N.r4.ACTIVITY);
    }
    getParticipantsOpen(e) {
        return U[e] ?? !0;
    }
    getVoiceParticipantsHidden(e) {
        return k[e] ?? !1;
    }
    getSelectedParticipantId(e) {
        let [t, n] = Y(e);
        return t === O.jd.NONE ? null : t !== O.jd.AUTO ? t : n === O.jd.NONE || n === O.jd.AUTO ? null : n;
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
        return M[e] ?? (en(e) ? R._Of.VIDEO : R._Of.VOICE);
    }
    getLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R.BRT.APP;
        if (__OVERLAY__) return R.DUB.NORMAL;
        let n = this.getUserParticipantCount(e) > 0,
            r = !!m.A.getChannel(e)?.isGuildVocal() || (n && !!m.A.getChannel(e)?.isVocalThread());
        return P[e]?.[t] ?? (r ? R.DUB.NO_CHAT : R.DUB.NORMAL);
    }
    getChatOpen(e) {
        return x[e] ?? m.A.getChannel(e)?.isVocalThread() ?? !1;
    }
    getAllChatOpen() {
        return x;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R.BRT.APP;
        return Object.values(P).some((t) => t[e] === R.DUB.FULL_SCREEN);
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
        if ((null != t ? delete w[t] : null != n && (delete x[n], delete G[n], j(n)), t !== n && null != n)) {
            let e = F(n);
            e.guildRingingUsers.forEach((t) => e.updateGuildRingingUsers(t, !1)), (r = B((e) => e.rebuild(), [n]));
        }
        let i = q();
        return r || i;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            r = q();
        if (null == t || null == n || x[t]) return r;
        let i = m.A.getChannel(t);
        return null != i && i.isGuildVocal() ? ((x[t] = !0), !0) : r;
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
                F(i).updateGuildRingingUsers(r, !1),
            n && null != i && !b.includes(i))
                ? e
                : H(r) || e;
        }, !1);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (t.type === R.rbe.GROUP_DM) {
            let e = t.originChannelId;
            if (null != e) return (P[t.id] = { [R.BRT.APP]: P[e]?.[R.BRT.APP] ?? R.DUB.NORMAL }), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: ee,
    THREAD_DELETE: ee,
    CALL_CREATE: Z,
    CALL_UPDATE: Z,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        return z(t);
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let { channelId: t, id: n } = e,
            r = F(t);
        null == n &&
            r.toArray(N.r4.STREAM).forEach((e) => {
                (0, O.Ay)(e) && r.updateParticipant(e.user.id);
            });
        let [, i] = Y(t);
        if ((K(t, [n ?? O.jd.NONE, i]), (0, _.wL)(n))) {
            try {
                let { ownerId: e } = (0, _.Iy)(n);
                e === h.default.getId() && H(e, [t]);
            } catch (e) {
                v.warn(`INVALID STREAM KEY FORMAT ${n}`, e);
            }
            $(r) || (U[t] = !1);
        }
    },
    CHANNEL_RTC_POPOUT_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            [r] = Y(t);
        r === n && K(t, null);
        let i = F(t),
            s = i.getParticipant(n);
        null == s || (s.type !== O.lp.ACTIVITY && (i.updateParticipantPoppedOut(n, !0), H(s.user.id, [t])));
    },
    CHANNEL_RTC_RETURN_PARTICIPANT: function (e) {
        let { channelId: t, participantId: n } = e,
            r = F(t);
        r.updateParticipantPoppedOut(n, !1);
        let i = r.getParticipant(n);
        null == i || (i.type !== O.lp.ACTIVITY && H(i.user.id, [t]));
    },
    CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
        let { channelId: t, layout: n, appContext: r } = e;
        P[t] = { ...P[t], [r]: n };
    },
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function (e) {
        let { channelId: t, participantsOpen: n } = e;
        U[t] = n;
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
        V[t] = n;
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let { channelId: t, selfStreamHidden: n } = e,
            r = h.default.getId();
        if (n) {
            let [e] = Y(t);
            (0, _.wL)(e) && e.includes(r) && K(t, null);
        }
        H(r, [t]);
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
        let i = F(t);
        return Object.keys(r).forEach((e) => i.updateGuildRingingUsers(e, !0)), B((e) => e.rebuild(), [t]);
    },
    GUILD_RING_STOP: function (e) {
        let { channelId: t, guildId: n, ringing: r } = e;
        if (!f.A.getCurrentConfig({ guildId: n, location: "guild_ring_start" }).enabled) return !1;
        let i = F(t);
        return r.forEach((e) => i.updateGuildRingingUsers(e, !1)), B((e) => e.rebuild(), [t]);
    },
    USER_UPDATE: J,
    GUILD_MEMBER_UPDATE: J,
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
