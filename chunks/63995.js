n.d(t, { A: () => W }), n(321073);
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(713402),
    d = n(228366),
    c = n(652896),
    u = n(616356),
    _ = n(280450),
    E = n(734057),
    A = n(71393),
    h = n(576705),
    I = n(994500),
    f = n(485296),
    p = n(287809),
    T = n(977997),
    m = n(607567),
    g = n(518769),
    S = n(312006),
    N = n(446600);
let C = "NO_GUILD",
    O = new o.J(
        (e) => [e.getGuildId() ?? C],
        (e) => e.id,
    ),
    R = new Set(),
    L = {};
function y(e) {
    return O.values(e ?? void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function D(e) {
    R.has(e) ||
        (R.add(e),
        s()(E.A.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                M(e) && O.set(e.id, e);
            }));
}
function v(e) {
    let t = L[e];
    if (null != t) return t;
    let n = E.A.getChannel(e);
    return null != n && n.isGuildStageVoice() && (D(n.guild_id), M(n)) ? b(e) : null;
}
function b(e) {
    let t = L[e];
    return null == t && ((t = new g.Ay(e)), (L[e] = t), t.rebuild()), t;
}
function M(e) {
    return null != e && e.isGuildStageVoice() && m.Ay.countVoiceStatesForChannel(e.id) > 0;
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y();
    return t.reduce((t, n) => {
        let i,
            r = b(n);
        return e(r)
            ? (null != (i = E.A.getChannel(n)) && i.isGuildStageVoice()
                  ? 0 === r.size()
                      ? w(i.id)
                      : null != O.get(i.id) || O.set(i.id, i)
                  : w(n),
              !0)
            : t;
    }, !1);
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y();
    return P((t) => t.updateParticipant(e), t);
}
function w(e) {
    return null != e && (delete L[e], O.delete(e), !0);
}
function G() {
    R.clear(), O.clear(), (L = {});
}
function x(e, t, n) {
    if (null == n || e.has(n)) return;
    let i = E.A.getChannel(n);
    i?.isGuildStageVoice() && (t.add(n), null == L[n] && e.add(n));
}
function k(e) {
    let { user: t } = e;
    return U(t.id);
}
function F(e) {
    let { relationship: t } = e;
    return U(t.id);
}
function V(e) {
    let { guild: t } = e;
    var n = t.id;
    for (let e of O.values(n)) O.delete(e.id), delete L[e.id];
    R.delete(n);
}
function B(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: i, ownerId: r } = (0, c.Iy)(t);
    return null != i && !!R.has(i) && U(r, [n]);
}
let H = [];
class j extends l.Ay.Store {
    static displayName = "StageChannelParticipantStore";
    initialize() {
        this.waitFor(_.default, p.default, E.A, f.A, T.A, h.A, m.Ay, A.A, S.Ay, I.A, N.A, u.A);
    }
    getParticipantsVersion(e) {
        return null == e ? -1 : (v(e)?.version ?? -1);
    }
    getMutableParticipants(e, t) {
        return null == e ? H : (v(e)?.toArray(t) ?? H);
    }
    getMutableRequestToSpeakParticipants(e) {
        return v(e)?.getRequestToSpeakParticipants() ?? H;
    }
    getRequestToSpeakParticipantsVersion(e) {
        return v(e)?.requestToSpeakVersion ?? -1;
    }
    getParticipantCount(e, t) {
        return v(e)?.size(t) ?? 0;
    }
    getChannels(e) {
        return D(e ?? C), O.values(e ?? C);
    }
    getChannelsVersion() {
        return O.version;
    }
    getParticipant(e, t) {
        return v(e)?.getParticipant(t) ?? null;
    }
}
let W = new j(d.h, {
    CONNECTION_OPEN: G,
    OVERLAY_INITIALIZE: G,
    VOICE_CHANNEL_SELECT: function (e) {
        let { currentVoiceChannelId: t } = e;
        if (null == t) return !1;
        let n = E.A.getChannel(t);
        if (!n?.isGuildStageVoice() || !R.has(n.guild_id)) return !1;
        let i = _.default.getId();
        return null != i && U(i, [t]);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = new Set();
        return t.reduce((e, t) => {
            if (null == t.guildId || !R.has(t.guildId)) return e;
            let i = new Set();
            return (x(n, i, t.oldChannelId), x(n, i, t.channelId), 0 === i.size) ? e : U(t.userId, Array.from(i)) || e;
        }, !1);
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return w(t);
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let e of t) for (let t of e.members) n = U(t.user.id) || n;
        return n;
    },
    USER_UPDATE: k,
    GUILD_MEMBER_REMOVE: k,
    GUILD_MEMBER_UPDATE: k,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = t.reduce((e, t) => {
                if (!t.isGuildStageVoice() || !R.has(t.guild_id)) return e;
                let n = O.get(t.id);
                return (
                    null == n || r()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), O.set(t.id, t)),
                    e
                );
            }, []);
        return P((e) => e.rebuild(), n), n.length > 0;
    },
    GUILD_ROLE_UPDATE: function (e) {
        let { guildId: t } = e;
        if (R.has(t)) return P((e) => e.rebuild(), y(t));
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { channelId: t, guildId: n, userId: i } = e;
        return null != n && !!R.has(n) && U(i, [t]);
    },
    STREAM_CLOSE: B,
    STREAM_DELETE: B,
    RELATIONSHIP_ADD: F,
    RELATIONSHIP_REMOVE: F,
    RELATIONSHIP_UPDATE: F,
    GUILD_CREATE: V,
    GUILD_DELETE: V,
    PASSIVE_UPDATE_V2: function (e) {
        let t = !1;
        for (let n of y(e.guildId)) t = b(n).rebuild() || t;
        return t;
    },
});
