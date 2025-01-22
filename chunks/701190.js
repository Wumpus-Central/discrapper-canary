var i,
    a = r(47120);
var o = r(789020);
var s = r(442837),
    l = r(570140),
    u = r(264229),
    c = r(981631);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = new Map(),
    p = new Map(),
    h = {};
function _(e, n) {
    var r;
    e = null != e ? e : '';
    let i = (0, u.fU)(e),
        a = f.get(e),
        o =
            null != a
                ? {
                      state: c.r2o.RESOLVING,
                      ...a
                  }
                : {
                      state: c.r2o.RESOLVING,
                      code: i.baseCode
                  };
    n(o),
        (f = new Map(f)).set(e, o),
        (null === (r = o.guild) || void 0 === r ? void 0 : r.id) != null &&
            (h = {
                ...h,
                [o.guild.id]: e
            });
}
function m(e) {
    let { code: n } = e,
        r = (0, u.fU)(n);
    (f = new Map(f)).set(n, {
        code: r.baseCode,
        state: c.r2o.RESOLVING
    });
}
function g(e) {
    return _(e.code, (n) => {
        var r, i;
        (n.state = c.r2o.RESOLVED), (n.guild = e.invite.guild), (n.channel = e.invite.channel), (n.inviter = e.invite.inviter), (n.approximate_member_count = null !== (r = e.invite.approximate_member_count) && void 0 !== r ? r : null), (n.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null), (n.target_type = e.invite.target_type), (n.target_user = e.invite.target_user), (n.target_application = e.invite.target_application), (n.expires_at = e.invite.expires_at), (n.stage_instance = e.invite.stage_instance), (n.friends_count = e.invite.friends_count), (n.is_contact = e.invite.is_contact), (n.guild_scheduled_event = e.invite.guild_scheduled_event), (n.type = e.invite.type), (n.flags = e.invite.flags);
    });
}
function E(e) {
    return _(e.invite.code, (n) => {
        var r, i;
        (n.state = c.r2o.RESOLVED), (n.guild = e.invite.guild), (n.channel = e.invite.channel), (n.inviter = e.invite.inviter), (n.approximate_member_count = null !== (r = e.invite.approximate_member_count) && void 0 !== r ? r : null), (n.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null), (n.target_type = e.invite.target_type), (n.target_user = e.invite.target_user), (n.target_application = e.invite.target_application), (n.stage_instance = e.invite.stage_instance), (n.guild_scheduled_event = e.invite.guild_scheduled_event), (n.type = e.invite.type);
    });
}
function v(e) {
    return _(e.invite.code, (n) => {
        (n.state = c.r2o.RESOLVED), (n.inviter = e.invite.inviter);
    });
}
function y(e) {
    e.invites.forEach((e) =>
        _(e.code, (e) => {
            e.state = c.r2o.EXPIRED;
        })
    );
}
function b(e) {
    return _(e.code, (n) => {
        n.state = 'banned' in e && e.banned ? c.r2o.BANNED : c.r2o.EXPIRED;
    });
}
function I(e) {
    return _(e.code, (e) => {
        e.state = c.r2o.ACCEPTING;
    });
}
function T(e) {
    return _(e.code, (n) => {
        (n.state = c.r2o.ACCEPTED),
            (n.guild = e.invite.guild),
            (n.new_member = e.invite.new_member),
            (n.channel = {
                ...n.channel,
                ...e.invite.channel
            });
    });
}
function S(e) {
    return (
        p.set(e.code, e.error),
        _(e.code, (e) => {
            e.state = c.r2o.ERROR;
        })
    );
}
function A(e) {
    return _(e.code, (e) => {
        e.state = c.r2o.APP_OPENING;
    });
}
function C(e) {
    return _(e.code, (e) => {
        e.state = c.r2o.APP_OPENED;
    });
}
function N(e) {
    return _(e.code, (e) => {
        e.state = c.r2o.APP_NOT_OPENED;
    });
}
class R extends (i = s.ZP.Store) {
    getInvite(e) {
        return f.get(e);
    }
    getInviteError(e) {
        return p.get(e);
    }
    getInvites() {
        return f;
    }
    getInviteKeyForGuildId(e) {
        return h[e];
    }
}
d(R, 'displayName', 'InviteStore'),
    (n.Z = new R(l.Z, {
        INVITE_RESOLVE: m,
        INVITE_RESOLVE_SUCCESS: g,
        INVITE_RESOLVE_FAILURE: b,
        INSTANT_INVITE_REVOKE_SUCCESS: b,
        FRIEND_INVITE_CREATE_SUCCESS: v,
        FRIEND_INVITE_REVOKE_SUCCESS: y,
        INSTANT_INVITE_CREATE_SUCCESS: E,
        INVITE_ACCEPT: I,
        INVITE_ACCEPT_SUCCESS: T,
        INVITE_ACCEPT_FAILURE: S,
        INVITE_APP_OPENING: A,
        INVITE_APP_OPENED: C,
        INVITE_APP_NOT_OPENED: N
    }));
