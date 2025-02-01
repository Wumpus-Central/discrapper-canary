n.d(t, { Z: () => N }), n(47120), n(789020);
var i,
    r = n(442837),
    a = n(570140),
    s = n(264229),
    o = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = new Map(),
    c = new Map(),
    d = {};
function f(e, t) {
    var n;
    e = null != e ? e : '';
    let i = (0, s.fU)(e),
        r = u.get(e),
        a =
            null != r
                ? {
                      state: o.r2o.RESOLVING,
                      ...r
                  }
                : {
                      state: o.r2o.RESOLVING,
                      code: i.baseCode
                  };
    t(a),
        (u = new Map(u)).set(e, a),
        (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null &&
            (d = {
                ...d,
                [a.guild.id]: e
            });
}
function _(e) {
    let { code: t } = e,
        n = (0, s.fU)(t);
    (u = new Map(u)).set(t, {
        code: n.baseCode,
        state: o.r2o.RESOLVING
    });
}
function p(e) {
    return f(e.code, (t) => {
        var n, i;
        (t.state = o.r2o.RESOLVED), (t.guild = e.invite.guild), (t.channel = e.invite.channel), (t.inviter = e.invite.inviter), (t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null), (t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null), (t.target_type = e.invite.target_type), (t.target_user = e.invite.target_user), (t.target_application = e.invite.target_application), (t.expires_at = e.invite.expires_at), (t.stage_instance = e.invite.stage_instance), (t.friends_count = e.invite.friends_count), (t.is_contact = e.invite.is_contact), (t.guild_scheduled_event = e.invite.guild_scheduled_event), (t.type = e.invite.type), (t.flags = e.invite.flags), (t.is_nickname_changeable = e.invite.is_nickname_changeable);
    });
}
function h(e) {
    return f(e.invite.code, (t) => {
        var n, i;
        (t.state = o.r2o.RESOLVED), (t.guild = e.invite.guild), (t.channel = e.invite.channel), (t.inviter = e.invite.inviter), (t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null), (t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null), (t.target_type = e.invite.target_type), (t.target_user = e.invite.target_user), (t.target_application = e.invite.target_application), (t.stage_instance = e.invite.stage_instance), (t.guild_scheduled_event = e.invite.guild_scheduled_event), (t.type = e.invite.type), (t.is_nickname_changeable = e.invite.is_nickname_changeable);
    });
}
function m(e) {
    return f(e.invite.code, (t) => {
        (t.state = o.r2o.RESOLVED), (t.inviter = e.invite.inviter);
    });
}
function g(e) {
    e.invites.forEach((e) =>
        f(e.code, (e) => {
            e.state = o.r2o.EXPIRED;
        })
    );
}
function E(e) {
    return f(e.code, (t) => {
        t.state = 'banned' in e && e.banned ? o.r2o.BANNED : o.r2o.EXPIRED;
    });
}
function v(e) {
    return f(e.code, (e) => {
        e.state = o.r2o.ACCEPTING;
    });
}
function y(e) {
    return f(e.code, (t) => {
        (t.state = o.r2o.ACCEPTED),
            (t.guild = e.invite.guild),
            (t.new_member = e.invite.new_member),
            (t.channel = {
                ...t.channel,
                ...e.invite.channel
            });
    });
}
function I(e) {
    return (
        c.set(e.code, e.error),
        f(e.code, (e) => {
            e.state = o.r2o.ERROR;
        })
    );
}
function T(e) {
    return f(e.code, (e) => {
        e.state = o.r2o.APP_OPENING;
    });
}
function b(e) {
    return f(e.code, (e) => {
        e.state = o.r2o.APP_OPENED;
    });
}
function S(e) {
    return f(e.code, (e) => {
        e.state = o.r2o.APP_NOT_OPENED;
    });
}
class A extends (i = r.ZP.Store) {
    getInvite(e) {
        return u.get(e);
    }
    getInviteError(e) {
        return c.get(e);
    }
    getInvites() {
        return u;
    }
    getInviteKeyForGuildId(e) {
        return d[e];
    }
}
l(A, 'displayName', 'InviteStore');
let N = new A(a.Z, {
    INVITE_RESOLVE: _,
    INVITE_RESOLVE_SUCCESS: p,
    INVITE_RESOLVE_FAILURE: E,
    INSTANT_INVITE_REVOKE_SUCCESS: E,
    FRIEND_INVITE_CREATE_SUCCESS: m,
    FRIEND_INVITE_REVOKE_SUCCESS: g,
    INSTANT_INVITE_CREATE_SUCCESS: h,
    INVITE_ACCEPT: v,
    INVITE_ACCEPT_SUCCESS: y,
    INVITE_ACCEPT_FAILURE: I,
    INVITE_APP_OPENING: T,
    INVITE_APP_OPENED: b,
    INVITE_APP_NOT_OPENED: S
});
