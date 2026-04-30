"use strict";
n.d(t, { A: () => W }), n(321073);
var i = n(812729),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(713402),
    _ = n(228366),
    d = n(652896),
    u = n(616356),
    c = n(495544),
    E = n(734057),
    h = n(71393),
    m = n(576705),
    f = n(994500),
    g = n(485296),
    A = n(287809),
    I = n(977997),
    p = n(607567),
    T = n(69407),
    S = n(312006),
    N = n(446600);
let O = "NO_GUILD",
    R = new l.J(
        (e) => [e.getGuildId() ?? O],
        (e) => e.id,
    ),
    C = new Set(),
    y = {};
function D(e) {
    return R.values(e ?? void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function L(e) {
    C.has(e) ||
        (C.add(e),
        a()(E.A.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                P(e) && R.set(e.id, e);
            }));
}
function v(e) {
    let t = y[e];
    if (null != t) return t;
    let n = E.A.getChannel(e);
    return null != n && n.isGuildStageVoice() && (L(n.guild_id), P(n)) ? w(e) : null;
}
function w(e) {
    let t = y[e];
    return null == t && ((t = new T.Ay(e)), (y[e] = t), t.rebuild()), t;
}
function P(e) {
    return null != e && e.isGuildStageVoice() && p.Ay.countVoiceStatesForChannel(e.id) > 0;
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D();
    return t.reduce((t, n) => {
        let i,
            r = w(n);
        return e(r)
            ? (null != (i = E.A.getChannel(n)) && i.isGuildStageVoice()
                  ? 0 === r.size()
                      ? U(i.id)
                      : null != R.get(i.id) || R.set(i.id, i)
                  : U(n),
              !0)
            : t;
    }, !1);
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D();
    return b((t) => t.updateParticipant(e), t);
}
function U(e) {
    return null != e && (delete y[e], R.delete(e), !0);
}
function M() {
    C.clear(), R.clear(), (y = {});
}
function G(e, t, n) {
    if (null == n || e.has(n)) return;
    let i = E.A.getChannel(n);
    i?.isGuildStageVoice() && (t.add(n), null == y[n] && e.add(n));
}
function x(e) {
    let { user: t } = e;
    return k(t.id);
}
function V(e) {
    let { relationship: t } = e;
    return k(t.id);
}
function F(e) {
    let { guild: t } = e;
    var n = t.id;
    for (let e of R.values(n)) R.delete(e.id), delete y[e.id];
    C.delete(n);
}
function B(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: i, ownerId: r } = (0, d.Iy)(t);
    return null != i && !!C.has(i) && k(r, [n]);
}
let H = [];
class Y extends o.Ay.Store {
    static displayName = "StageChannelParticipantStore";
    initialize() {
        this.waitFor(c.default, A.default, E.A, g.A, I.A, m.A, p.Ay, h.A, S.Ay, f.A, N.A, u.A);
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
        return L(e ?? O), R.values(e ?? O);
    }
    getChannelsVersion() {
        return R.version;
    }
    getParticipant(e, t) {
        return v(e)?.getParticipant(t) ?? null;
    }
}
let W = new Y(_.h, {
    CONNECTION_OPEN: M,
    OVERLAY_INITIALIZE: M,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = new Set();
        return t.reduce((e, t) => {
            if (null == t.guildId || !C.has(t.guildId)) return e;
            let i = new Set();
            return (G(n, i, t.oldChannelId), G(n, i, t.channelId), 0 === i.size) ? e : k(t.userId, Array.from(i)) || e;
        }, !1);
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return U(t);
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let e of t) for (let t of e.members) n = k(t.user.id) || n;
        return n;
    },
    USER_UPDATE: x,
    GUILD_MEMBER_REMOVE: x,
    GUILD_MEMBER_UPDATE: x,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = t.reduce((e, t) => {
                if (!t.isGuildStageVoice() || !C.has(t.guild_id)) return e;
                let n = R.get(t.id);
                return (
                    null == n || r()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), R.set(t.id, t)),
                    e
                );
            }, []);
        return b((e) => e.rebuild(), n), n.length > 0;
    },
    GUILD_ROLE_UPDATE: function (e) {
        let { guildId: t } = e;
        if (C.has(t)) return b((e) => e.rebuild(), D(t));
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { channelId: t, guildId: n, userId: i } = e;
        return null != n && !!C.has(n) && k(i, [t]);
    },
    STREAM_CLOSE: B,
    STREAM_DELETE: B,
    RELATIONSHIP_ADD: V,
    RELATIONSHIP_REMOVE: V,
    RELATIONSHIP_UPDATE: V,
    GUILD_CREATE: F,
    GUILD_DELETE: F,
    PASSIVE_UPDATE_V2: function (e) {
        let t = !1;
        for (let n of D(e.guildId)) t = w(n).rebuild() || t;
        return t;
    },
});
