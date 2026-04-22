"use strict";
n.d(t, { A: () => W }), n(321073);
var r = n(812729),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(713402),
    u = n(73153),
    d = n(652896),
    c = n(616356),
    _ = n(961350),
    f = n(734057),
    E = n(71393),
    h = n(576705),
    p = n(994500),
    m = n(485296),
    g = n(287809),
    A = n(977997),
    I = n(607567),
    T = n(69407),
    S = n(312006),
    y = n(446600);
let N = "NO_GUILD",
    O = new l.J(
        (e) => [e.getGuildId() ?? N],
        (e) => e.id,
    ),
    R = new Set(),
    v = {};
function C(e) {
    return O.values(e ?? void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function b(e) {
    R.has(e) ||
        (R.add(e),
        a()(f.A.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                w(e) && O.set(e.id, e);
            }));
}
function D(e) {
    let t = v[e];
    if (null != t) return t;
    let n = f.A.getChannel(e);
    return null != n && n.isGuildStageVoice() && (b(n.guild_id), w(n)) ? L(e) : null;
}
function L(e) {
    let t = v[e];
    return null == t && ((t = new T.Ay(e)), (v[e] = t), t.rebuild()), t;
}
function w(e) {
    return null != e && e.isGuildStageVoice() && I.Ay.countVoiceStatesForChannel(e.id) > 0;
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C();
    return t.reduce((t, n) => {
        let r,
            i = L(n);
        return e(i)
            ? (null != (r = f.A.getChannel(n)) && r.isGuildStageVoice()
                  ? 0 === i.size()
                      ? U(r.id)
                      : null != O.get(r.id) || O.set(r.id, r)
                  : U(n),
              !0)
            : t;
    }, !1);
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C();
    return M((t) => t.updateParticipant(e), t);
}
function U(e) {
    return null != e && (delete v[e], O.delete(e), !0);
}
function k() {
    R.clear(), O.clear(), (v = {});
}
function x(e, t, n) {
    if (null == n || e.has(n)) return;
    let r = f.A.getChannel(n);
    r?.isGuildStageVoice() && (t.add(n), null == v[n] && e.add(n));
}
function G(e) {
    let { user: t } = e;
    return P(t.id);
}
function V(e) {
    let { relationship: t } = e;
    return P(t.id);
}
function F(e) {
    let { guild: t } = e;
    var n = t.id;
    for (let e of O.values(n)) O.delete(e.id), delete v[e.id];
    R.delete(n);
}
function B(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: r, ownerId: i } = (0, d.Iy)(t);
    return null != r && !!R.has(r) && P(i, [n]);
}
let H = [];
class Y extends o.Ay.Store {
    static displayName = "StageChannelParticipantStore";
    initialize() {
        this.waitFor(_.default, g.default, f.A, m.A, A.A, h.A, I.Ay, E.A, S.Ay, p.A, y.A, c.A);
    }
    getParticipantsVersion(e) {
        return null == e ? -1 : (D(e)?.version ?? -1);
    }
    getMutableParticipants(e, t) {
        return null == e ? H : (D(e)?.toArray(t) ?? H);
    }
    getMutableRequestToSpeakParticipants(e) {
        return D(e)?.getRequestToSpeakParticipants() ?? H;
    }
    getRequestToSpeakParticipantsVersion(e) {
        return D(e)?.requestToSpeakVersion ?? -1;
    }
    getParticipantCount(e, t) {
        return D(e)?.size(t) ?? 0;
    }
    getChannels(e) {
        return b(e ?? N), O.values(e ?? N);
    }
    getChannelsVersion() {
        return O.version;
    }
    getParticipant(e, t) {
        return D(e)?.getParticipant(t) ?? null;
    }
}
let W = new Y(u.h, {
    CONNECTION_OPEN: k,
    OVERLAY_INITIALIZE: k,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = new Set();
        return t.reduce((e, t) => {
            if (null == t.guildId || !R.has(t.guildId)) return e;
            let r = new Set();
            return (x(n, r, t.oldChannelId), x(n, r, t.channelId), 0 === r.size) ? e : P(t.userId, Array.from(r)) || e;
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
        for (let e of t) for (let t of e.members) n = P(t.user.id) || n;
        return n;
    },
    USER_UPDATE: G,
    GUILD_MEMBER_REMOVE: G,
    GUILD_MEMBER_UPDATE: G,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = t.reduce((e, t) => {
                if (!t.isGuildStageVoice() || !R.has(t.guild_id)) return e;
                let n = O.get(t.id);
                return (
                    null == n || i()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), O.set(t.id, t)),
                    e
                );
            }, []);
        return M((e) => e.rebuild(), n), n.length > 0;
    },
    GUILD_ROLE_UPDATE: function (e) {
        let { guildId: t } = e;
        if (R.has(t)) return M((e) => e.rebuild(), C(t));
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { channelId: t, guildId: n, userId: r } = e;
        return null != n && !!R.has(n) && P(r, [t]);
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
        for (let n of C(e.guildId)) t = L(n).rebuild() || t;
        return t;
    },
});
