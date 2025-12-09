n.d(t, { Z: () => w }), n(388685), n(997841);
var r,
    i = n(442837),
    a = n(570140),
    o = n(264229),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
    _ = {},
    m = new Map();
function h(e, t) {
    var n;
    e = null != e ? e : "";
    let r = (0, o.fU)(e),
        i = f.get(e),
        a =
            null != i
                ? c({ state: s.r2o.RESOLVING }, i)
                : {
                      state: s.r2o.RESOLVING,
                      code: r.baseCode,
                  };
    t(a),
        (f = new Map(f)).set(e, a),
        (null == (n = a.guild) ? void 0 : n.id) != null && (_ = d(c({}, _), { [a.guild.id]: e }));
}
function g(e) {
    let { code: t } = e,
        n = (0, o.fU)(t);
    (f = new Map(f)).set(t, {
        code: n.baseCode,
        state: s.r2o.RESOLVING,
    });
}
function E(e) {
    return h(e.code, (t) => {
        var n, r;
        (t.state = s.r2o.RESOLVED),
            (t.guild = e.invite.guild),
            (t.channel = e.invite.channel),
            (t.inviter = e.invite.inviter),
            (t.approximate_member_count = null != (n = e.invite.approximate_member_count) ? n : null),
            (t.approximate_presence_count = null != (r = e.invite.approximate_presence_count) ? r : null),
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
function b(e) {
    return h(e.invite.code, (t) => {
        var n, r;
        (t.state = s.r2o.RESOLVED),
            (t.guild = e.invite.guild),
            (t.channel = e.invite.channel),
            (t.inviter = e.invite.inviter),
            (t.approximate_member_count = null != (n = e.invite.approximate_member_count) ? n : null),
            (t.approximate_presence_count = null != (r = e.invite.approximate_presence_count) ? r : null),
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
function y(e) {
    return h(e.invite.code, (t) => {
        (t.state = s.r2o.RESOLVED), (t.inviter = e.invite.inviter);
    });
}
function O(e) {
    e.invites.forEach((e) =>
        h(e.code, (e) => {
            e.state = s.r2o.EXPIRED;
        }),
    );
}
function v(e) {
    return h(e.code, (t) => {
        t.state = "banned" in e && e.banned ? s.r2o.BANNED : s.r2o.EXPIRED;
    });
}
function S(e) {
    return h(e.code, (e) => {
        e.state = s.r2o.ACCEPTING;
    });
}
function I(e) {
    return h(e.code, (t) => {
        (t.state = s.r2o.ACCEPTED),
            (t.guild = e.invite.guild),
            (t.new_member = e.invite.new_member),
            (t.channel = c({}, t.channel, e.invite.channel));
    });
}
function T(e) {
    return (
        p.set(e.code, e.error),
        h(e.code, (e) => {
            e.state = s.r2o.ERROR;
        })
    );
}
function A(e) {
    return h(e.code, (e) => {
        e.state = s.r2o.APP_OPENING;
    });
}
function C(e) {
    return h(e.code, (e) => {
        e.state = s.r2o.APP_OPENED;
    });
}
function N(e) {
    return h(e.code, (e) => {
        e.state = s.r2o.APP_NOT_OPENED;
    });
}
function P(e) {
    (m = new Map(m)).set(e.code, e.friendMemberIds);
}
function R(e) {
    if (!m.has(e.code)) return !1;
    (m = new Map(m)).delete(e.code);
}
class D extends (r = i.ZP.Store) {
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
    getFriendMemberIds(e) {
        return m.get(e);
    }
}
l(D, "displayName", "InviteStore");
let w = new D(a.Z, {
    INVITE_RESOLVE: g,
    INVITE_RESOLVE_SUCCESS: E,
    INVITE_RESOLVE_FAILURE: v,
    INSTANT_INVITE_REVOKE_SUCCESS: v,
    FRIEND_INVITE_CREATE_SUCCESS: y,
    FRIEND_INVITE_REVOKE_SUCCESS: O,
    INSTANT_INVITE_CREATE_SUCCESS: b,
    INVITE_ACCEPT: S,
    INVITE_ACCEPT_SUCCESS: I,
    INVITE_ACCEPT_FAILURE: T,
    INVITE_APP_OPENING: A,
    INVITE_APP_OPENED: C,
    INVITE_APP_NOT_OPENED: N,
    INVITE_FRIEND_MEMBERS_FETCH_SUCCESS: P,
    INVITE_FRIEND_MEMBERS_FETCH_FAILURE: R,
});
