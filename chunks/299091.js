"use strict";
n.d(t, { A: () => N }), n(938796);
var r = n(311907),
    i = n(73153),
    a = n(21599),
    s = n(652215);
let o = new Map(),
    l = new Map(),
    u = {},
    c = new Map();
function d(e, t) {
    e = e ?? "";
    let n = (0, a.y$)(e),
        r = o.get(e),
        i = null != r ? { state: s.elq.RESOLVING, ...r } : { state: s.elq.RESOLVING, code: n.baseCode };
    t(i), (o = new Map(o)).set(e, i), i.guild?.id != null && (u = { ...u, [i.guild.id]: e });
}
function _(e) {
    let { code: t } = e,
        n = (0, a.y$)(t);
    (o = new Map(o)).set(t, { code: n.baseCode, state: s.elq.RESOLVING });
}
function f(e) {
    return d(e.code, (t) => {
        (t.state = s.elq.RESOLVED),
            (t.guild = e.invite.guild),
            (t.channel = e.invite.channel),
            (t.inviter = e.invite.inviter),
            (t.approximate_member_count = e.invite.approximate_member_count ?? null),
            (t.approximate_presence_count = e.invite.approximate_presence_count ?? null),
            (t.target_type = e.invite.target_type),
            (t.target_user = e.invite.target_user),
            (t.target_application = e.invite.target_application),
            (t.expires_at = e.invite.expires_at),
            (t.friends_count = e.invite.friends_count),
            (t.is_contact = e.invite.is_contact),
            (t.guild_scheduled_event = e.invite.guild_scheduled_event),
            (t.type = e.invite.type),
            (t.flags = e.invite.flags),
            (t.is_nickname_changeable = e.invite.is_nickname_changeable),
            (t.profile = e.invite.profile),
            (t.roles = e.invite.roles);
    });
}
function p(e) {
    return d(e.invite.code, (t) => {
        (t.state = s.elq.RESOLVED),
            (t.guild = e.invite.guild),
            (t.channel = e.invite.channel),
            (t.inviter = e.invite.inviter),
            (t.approximate_member_count = e.invite.approximate_member_count ?? null),
            (t.approximate_presence_count = e.invite.approximate_presence_count ?? null),
            (t.target_type = e.invite.target_type),
            (t.target_user = e.invite.target_user),
            (t.target_application = e.invite.target_application),
            (t.guild_scheduled_event = e.invite.guild_scheduled_event),
            (t.type = e.invite.type),
            (t.is_nickname_changeable = e.invite.is_nickname_changeable),
            (t.profile = e.invite.profile),
            (t.roles = e.invite.roles);
    });
}
function h(e) {
    return d(e.invite.code, (t) => {
        (t.state = s.elq.RESOLVED), (t.inviter = e.invite.inviter);
    });
}
function m(e) {
    e.invites.forEach((e) =>
        d(e.code, (e) => {
            e.state = s.elq.EXPIRED;
        }),
    );
}
function g(e) {
    return d(e.code, (t) => {
        t.state = "banned" in e && e.banned ? s.elq.BANNED : s.elq.EXPIRED;
    });
}
function E(e) {
    return d(e.code, (e) => {
        e.state = s.elq.ACCEPTING;
    });
}
function A(e) {
    return d(e.code, (t) => {
        (t.state = s.elq.ACCEPTED),
            (t.guild = e.invite.guild),
            (t.new_member = e.invite.new_member),
            (t.channel = { ...t.channel, ...e.invite.channel });
    });
}
function I(e) {
    return (
        l.set(e.code, e.error),
        d(e.code, (e) => {
            e.state = s.elq.ERROR;
        })
    );
}
function T(e) {
    return d(e.code, (e) => {
        e.state = s.elq.APP_OPENING;
    });
}
function y(e) {
    return d(e.code, (e) => {
        e.state = s.elq.APP_OPENED;
    });
}
function S(e) {
    return d(e.code, (e) => {
        e.state = s.elq.APP_NOT_OPENED;
    });
}
function v(e) {
    (c = new Map(c)).set(e.code, e.friendMemberIds);
}
function C(e) {
    if (!c.has(e.code)) return !1;
    (c = new Map(c)).delete(e.code);
}
class b extends r.Ay.Store {
    static displayName = "InviteStore";
    getInvite(e) {
        return o.get(e);
    }
    getInviteError(e) {
        return l.get(e);
    }
    getInvites() {
        return o;
    }
    getInviteKeyForGuildId(e) {
        return u[e];
    }
    getFriendMemberIds(e) {
        return c.get(e);
    }
}
let N = new b(i.h, {
    INVITE_RESOLVE: _,
    INVITE_RESOLVE_SUCCESS: f,
    INVITE_RESOLVE_FAILURE: g,
    INSTANT_INVITE_REVOKE_SUCCESS: g,
    FRIEND_INVITE_CREATE_SUCCESS: h,
    FRIEND_INVITE_REVOKE_SUCCESS: m,
    INSTANT_INVITE_CREATE_SUCCESS: p,
    INVITE_ACCEPT: E,
    INVITE_ACCEPT_SUCCESS: A,
    INVITE_ACCEPT_FAILURE: I,
    INVITE_APP_OPENING: T,
    INVITE_APP_OPENED: y,
    INVITE_APP_NOT_OPENED: S,
    INVITE_FRIEND_MEMBERS_FETCH_SUCCESS: v,
    INVITE_FRIEND_MEMBERS_FETCH_FAILURE: C,
});
