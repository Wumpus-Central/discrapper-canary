n.d(t, { Z: () => R }), n(47120), n(789020);
var r,
    i = n(442837),
    o = n(570140),
    a = n(264229),
    s = n(981631);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = new Map(),
    p = new Map(),
    _ = {};
function h(e, t) {
    var n;
    e = null != e ? e : '';
    let r = (0, a.fU)(e),
        i = f.get(e),
        o =
            null != i
                ? c({ state: s.r2o.RESOLVING }, i)
                : {
                      state: s.r2o.RESOLVING,
                      code: r.baseCode
                  };
    t(o), (f = new Map(f)).set(e, o), (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (_ = d(c({}, _), { [o.guild.id]: e }));
}
function m(e) {
    let { code: t } = e,
        n = (0, a.fU)(t);
    (f = new Map(f)).set(t, {
        code: n.baseCode,
        state: s.r2o.RESOLVING
    });
}
function g(e) {
    return h(e.code, (t) => {
        var n, r;
        (t.state = s.r2o.RESOLVED), (t.guild = e.invite.guild), (t.channel = e.invite.channel), (t.inviter = e.invite.inviter), (t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null), (t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null), (t.target_type = e.invite.target_type), (t.target_user = e.invite.target_user), (t.target_application = e.invite.target_application), (t.expires_at = e.invite.expires_at), (t.stage_instance = e.invite.stage_instance), (t.friends_count = e.invite.friends_count), (t.is_contact = e.invite.is_contact), (t.guild_scheduled_event = e.invite.guild_scheduled_event), (t.type = e.invite.type), (t.flags = e.invite.flags), (t.is_nickname_changeable = e.invite.is_nickname_changeable);
    });
}
function E(e) {
    return h(e.invite.code, (t) => {
        var n, r;
        (t.state = s.r2o.RESOLVED), (t.guild = e.invite.guild), (t.channel = e.invite.channel), (t.inviter = e.invite.inviter), (t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null), (t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null), (t.target_type = e.invite.target_type), (t.target_user = e.invite.target_user), (t.target_application = e.invite.target_application), (t.stage_instance = e.invite.stage_instance), (t.guild_scheduled_event = e.invite.guild_scheduled_event), (t.type = e.invite.type), (t.is_nickname_changeable = e.invite.is_nickname_changeable);
    });
}
function v(e) {
    return h(e.invite.code, (t) => {
        (t.state = s.r2o.RESOLVED), (t.inviter = e.invite.inviter);
    });
}
function b(e) {
    e.invites.forEach((e) =>
        h(e.code, (e) => {
            e.state = s.r2o.EXPIRED;
        })
    );
}
function y(e) {
    return h(e.code, (t) => {
        t.state = 'banned' in e && e.banned ? s.r2o.BANNED : s.r2o.EXPIRED;
    });
}
function O(e) {
    return h(e.code, (e) => {
        e.state = s.r2o.ACCEPTING;
    });
}
function S(e) {
    return h(e.code, (t) => {
        (t.state = s.r2o.ACCEPTED), (t.guild = e.invite.guild), (t.new_member = e.invite.new_member), (t.channel = c({}, t.channel, e.invite.channel));
    });
}
function I(e) {
    return (
        p.set(e.code, e.error),
        h(e.code, (e) => {
            e.state = s.r2o.ERROR;
        })
    );
}
function T(e) {
    return h(e.code, (e) => {
        e.state = s.r2o.APP_OPENING;
    });
}
function N(e) {
    return h(e.code, (e) => {
        e.state = s.r2o.APP_OPENED;
    });
}
function A(e) {
    return h(e.code, (e) => {
        e.state = s.r2o.APP_NOT_OPENED;
    });
}
class C extends (r = i.ZP.Store) {
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
        return _[e];
    }
}
l(C, 'displayName', 'InviteStore');
let R = new C(o.Z, {
    INVITE_RESOLVE: m,
    INVITE_RESOLVE_SUCCESS: g,
    INVITE_RESOLVE_FAILURE: y,
    INSTANT_INVITE_REVOKE_SUCCESS: y,
    FRIEND_INVITE_CREATE_SUCCESS: v,
    FRIEND_INVITE_REVOKE_SUCCESS: b,
    INSTANT_INVITE_CREATE_SUCCESS: E,
    INVITE_ACCEPT: O,
    INVITE_ACCEPT_SUCCESS: S,
    INVITE_ACCEPT_FAILURE: I,
    INVITE_APP_OPENING: T,
    INVITE_APP_OPENED: N,
    INVITE_APP_NOT_OPENED: A
});
