"use strict";
n.d(t, { A: () => h }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(546885),
    a = n(734057),
    o = n(696451);
let l = new s.A(o.Ay.isMember, (e, t) => {
    i.h.dispatch({ type: "GUILD_MEMBERS_REQUEST", guildIds: [e], userIds: t });
});
function u() {
    l.reset();
}
function c(e, t) {
    return l.request(e, t), !1;
}
function d(e, t) {
    return (
        t.forEach((t) => {
            let { author: n, mentions: r } = t;
            null != n && c(e, n.id), r?.forEach((t) => c(e, t.id));
        }),
        !1
    );
}
function _(e) {
    let { channelId: t, messages: n } = e,
        r = a.A.getChannel(t);
    return null != r && null != r.guild_id && d(r.guild_id, n);
}
function f(e) {
    let { guildId: t, data: n } = e;
    if (null == t) return !1;
    let r = [];
    return (
        n.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    r.push(e);
                });
            });
        }),
        d(t, r)
    );
}
class p extends r.Ay.Store {
    static displayName = "GuildMemberRequesterStore";
    initialize() {
        this.waitFor(a.A, o.Ay);
    }
    requestMember(e, t) {
        c(e, t);
    }
    getDebugState(e) {
        return l.getDebugState(e);
    }
}
let h = new p(i.h, {
    CONNECTION_CLOSED: u,
    CONNECTION_OPEN: u,
    CONNECTION_RESUMED: function () {
        return l.requestUnacknowledged(), !1;
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e;
        for (let e of t)
            e.members.forEach((t) => {
                l.acknowledge(e.guildId, t.user.id);
            }),
                null != e.notFound && e.notFound.forEach((t) => l.acknowledge(e.guildId, t));
        return !1;
    },
    SEARCH_MESSAGES_SUCCESS: f,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: f,
    LOCAL_MESSAGES_LOADED: _,
    LOAD_MESSAGES_SUCCESS: _,
    LOAD_MESSAGES_AROUND_SUCCESS: _,
    LOAD_RECENT_MENTIONS_SUCCESS: _,
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { pins: t, channelId: n } = e,
            r = a.A.getChannel(n);
        return (
            null != r &&
            null != r.guild_id &&
            d(
                r.guild_id,
                t.map((e) => {
                    let { message: t } = e;
                    return t;
                }),
            )
        );
    },
});
