"use strict";
n.d(t, { A: () => E }), n(321073);
var r = n(311907),
    i = n(73153),
    a = n(546885),
    s = n(734057),
    o = n(696451);
let l = new a.A(o.Ay.isMember, (e, t) => {
    i.h.dispatch({ type: "GUILD_MEMBERS_REQUEST", guildIds: [e], userIds: t });
});
function u() {
    l.reset();
}
function c(e) {
    let { chunks: t } = e;
    for (let e of t)
        e.members.forEach((t) => {
            l.acknowledge(e.guildId, t.user.id);
        }),
            null != e.notFound && e.notFound.forEach((t) => l.acknowledge(e.guildId, t));
    return !1;
}
function d() {
    return l.requestUnacknowledged(), !1;
}
function _(e, t) {
    return l.request(e, t), !1;
}
function f(e, t) {
    return (
        t.forEach((t) => {
            let { author: n, mentions: r } = t;
            null != n && _(e, n.id), r?.forEach((t) => _(e, t.id));
        }),
        !1
    );
}
function p(e) {
    let { channelId: t, messages: n } = e,
        r = s.A.getChannel(t);
    return null != r && null != r.guild_id && f(r.guild_id, n);
}
function h(e) {
    let { pins: t, channelId: n } = e,
        r = s.A.getChannel(n);
    return (
        null != r &&
        null != r.guild_id &&
        f(
            r.guild_id,
            t.map((e) => {
                let { message: t } = e;
                return t;
            }),
        )
    );
}
function m(e) {
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
        f(t, r)
    );
}
class g extends r.Ay.Store {
    static displayName = "GuildMemberRequesterStore";
    initialize() {
        this.waitFor(s.A, o.Ay);
    }
    requestMember(e, t) {
        _(e, t);
    }
    getDebugState(e) {
        return l.getDebugState(e);
    }
}
let E = new g(i.h, {
    CONNECTION_CLOSED: u,
    CONNECTION_OPEN: u,
    CONNECTION_RESUMED: d,
    GUILD_MEMBERS_CHUNK_BATCH: c,
    SEARCH_MESSAGES_SUCCESS: m,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: m,
    LOCAL_MESSAGES_LOADED: p,
    LOAD_MESSAGES_SUCCESS: p,
    LOAD_MESSAGES_AROUND_SUCCESS: p,
    LOAD_RECENT_MENTIONS_SUCCESS: p,
    LOAD_PINNED_MESSAGES_SUCCESS: h,
});
