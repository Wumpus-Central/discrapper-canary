"use strict";
n.d(t, { A: () => A }), n(938796);
var i = n(17928),
    r = n(228366),
    a = n(842241),
    s = n(652215);
let l = new Map(),
    o = new Map(),
    d = {},
    c = new Map();
function u(e, t) {
    e = e ?? "";
    let n = (0, a.y$)(e),
        i = l.get(e),
        r = null != i ? { state: s.elq.RESOLVING, ...i } : { state: s.elq.RESOLVING, code: n.baseCode };
    t(r), (l = new Map(l)).set(e, r), r.guild?.id != null && (d = { ...d, [r.guild.id]: e });
}
function _(e) {
    return u(e.code, (t) => {
        t.state = "banned" in e && e.banned ? s.elq.BANNED : s.elq.EXPIRED;
    });
}
class E extends i.Ay.Store {
    static displayName = "InviteStore";
    getInvite(e) {
        return l.get(e);
    }
    getInviteError(e) {
        return o.get(e);
    }
    getInvites() {
        return l;
    }
    getInviteKeyForGuildId(e) {
        return d[e];
    }
    getFriendMemberIds(e) {
        return c.get(e);
    }
}
let A = new E(r.h, {
    INVITE_RESOLVE: function (e) {
        let { code: t } = e,
            n = (0, a.y$)(t);
        (l = new Map(l)).set(t, { code: n.baseCode, state: s.elq.RESOLVING });
    },
    INVITE_RESOLVE_SUCCESS: function (e) {
        return u(e.code, (t) => {
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
                (t.roles = e.invite.roles),
                (t.target_channel_id = e.invite.target_channel_id),
                (t.target_message_id = e.invite.target_message_id),
                (t.liveliness = e.invite.liveliness);
        });
    },
    INVITE_RESOLVE_FAILURE: _,
    INSTANT_INVITE_REVOKE_SUCCESS: _,
    FRIEND_INVITE_CREATE_SUCCESS: function (e) {
        return u(e.invite.code, (t) => {
            (t.state = s.elq.RESOLVED), (t.inviter = e.invite.inviter);
        });
    },
    FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
        e.invites.forEach((e) =>
            u(e.code, (e) => {
                e.state = s.elq.EXPIRED;
            }),
        );
    },
    INSTANT_INVITE_CREATE_SUCCESS: function (e) {
        return u(e.invite.code, (t) => {
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
    },
    INVITE_ACCEPT: function (e) {
        return u(e.code, (e) => {
            e.state = s.elq.ACCEPTING;
        });
    },
    INVITE_ACCEPT_SUCCESS: function (e) {
        return u(e.code, (t) => {
            (t.state = s.elq.ACCEPTED),
                (t.guild = e.invite.guild),
                (t.new_member = e.invite.new_member),
                (t.channel = { ...t.channel, ...e.invite.channel });
        });
    },
    INVITE_ACCEPT_FAILURE: function (e) {
        return (
            o.set(e.code, e.error),
            u(e.code, (e) => {
                e.state = s.elq.ERROR;
            })
        );
    },
    INVITE_APP_OPENING: function (e) {
        return u(e.code, (e) => {
            e.state = s.elq.APP_OPENING;
        });
    },
    INVITE_APP_OPENED: function (e) {
        return u(e.code, (e) => {
            e.state = s.elq.APP_OPENED;
        });
    },
    INVITE_APP_NOT_OPENED: function (e) {
        return u(e.code, (e) => {
            e.state = s.elq.APP_NOT_OPENED;
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
