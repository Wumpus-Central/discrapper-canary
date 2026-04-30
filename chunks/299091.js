"use strict";
n.d(t, { A: () => h }), n(938796);
var i = n(17928),
    r = n(228366),
    s = n(842241),
    a = n(652215);
let o = new Map(),
    l = new Map(),
    u = {},
    c = new Map();
function d(e, t) {
    e = e ?? "";
    let n = (0, s.y$)(e),
        i = o.get(e),
        r = null != i ? { state: a.elq.RESOLVING, ...i } : { state: a.elq.RESOLVING, code: n.baseCode };
    t(r), (o = new Map(o)).set(e, r), r.guild?.id != null && (u = { ...u, [r.guild.id]: e });
}
function _(e) {
    return d(e.code, (t) => {
        t.state = "banned" in e && e.banned ? a.elq.BANNED : a.elq.EXPIRED;
    });
}
class f extends i.Ay.Store {
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
let h = new f(r.h, {
    INVITE_RESOLVE: function (e) {
        let { code: t } = e,
            n = (0, s.y$)(t);
        (o = new Map(o)).set(t, { code: n.baseCode, state: a.elq.RESOLVING });
    },
    INVITE_RESOLVE_SUCCESS: function (e) {
        return d(e.code, (t) => {
            (t.state = a.elq.RESOLVED),
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
    },
    INVITE_RESOLVE_FAILURE: _,
    INSTANT_INVITE_REVOKE_SUCCESS: _,
    FRIEND_INVITE_CREATE_SUCCESS: function (e) {
        return d(e.invite.code, (t) => {
            (t.state = a.elq.RESOLVED), (t.inviter = e.invite.inviter);
        });
    },
    FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
        e.invites.forEach((e) =>
            d(e.code, (e) => {
                e.state = a.elq.EXPIRED;
            }),
        );
    },
    INSTANT_INVITE_CREATE_SUCCESS: function (e) {
        return d(e.invite.code, (t) => {
            (t.state = a.elq.RESOLVED),
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
    },
    INVITE_ACCEPT: function (e) {
        return d(e.code, (e) => {
            e.state = a.elq.ACCEPTING;
        });
    },
    INVITE_ACCEPT_SUCCESS: function (e) {
        return d(e.code, (t) => {
            (t.state = a.elq.ACCEPTED),
                (t.guild = e.invite.guild),
                (t.new_member = e.invite.new_member),
                (t.channel = { ...t.channel, ...e.invite.channel });
        });
    },
    INVITE_ACCEPT_FAILURE: function (e) {
        return (
            l.set(e.code, e.error),
            d(e.code, (e) => {
                e.state = a.elq.ERROR;
            })
        );
    },
    INVITE_APP_OPENING: function (e) {
        return d(e.code, (e) => {
            e.state = a.elq.APP_OPENING;
        });
    },
    INVITE_APP_OPENED: function (e) {
        return d(e.code, (e) => {
            e.state = a.elq.APP_OPENED;
        });
    },
    INVITE_APP_NOT_OPENED: function (e) {
        return d(e.code, (e) => {
            e.state = a.elq.APP_NOT_OPENED;
        });
    },
    INVITE_FRIEND_MEMBERS_FETCH_SUCCESS: function (e) {
        (c = new Map(c)).set(e.code, e.friendMemberIds);
    },
    INVITE_FRIEND_MEMBERS_FETCH_FAILURE: function (e) {
        if (!c.has(e.code)) return !1;
        (c = new Map(c)).delete(e.code);
    },
});
