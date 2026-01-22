n.d(t, {
    A: () => D,
}),
    n(896048),
    n(938796);
var r,
    i = n(311907),
    a = n(73153),
    s = n(21599),
    o = n(652215);

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
    h = new Map();

function m(e, t) {
    var n;
    e = null != e ? e : "";
    let r = (0, s.y$)(e),
        i = f.get(e),
        a =
            null != i
                ? c(
                      {
                          state: o.elq.RESOLVING,
                      },
                      i,
                  )
                : {
                      state: o.elq.RESOLVING,
                      code: r.baseCode,
                  };
    t(a),
        (f = new Map(f)).set(e, a),
        (null == (n = a.guild) ? void 0 : n.id) != null &&
            (_ = d(c({}, _), {
                [a.guild.id]: e,
            }));
}

function g(e) {
    let { code: t } = e,
        n = (0, s.y$)(t);
    (f = new Map(f)).set(t, {
        code: n.baseCode,
        state: o.elq.RESOLVING,
    });
}

function E(e) {
    return m(e.code, (t) => {
        var n, r;
        (t.state = o.elq.RESOLVED),
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
    return m(e.invite.code, (t) => {
        var n, r;
        (t.state = o.elq.RESOLVED),
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
    return m(e.invite.code, (t) => {
        (t.state = o.elq.RESOLVED), (t.inviter = e.invite.inviter);
    });
}

function O(e) {
    e.invites.forEach((e) =>
        m(e.code, (e) => {
            e.state = o.elq.EXPIRED;
        }),
    );
}

function A(e) {
    return m(e.code, (t) => {
        t.state = "banned" in e && e.banned ? o.elq.BANNED : o.elq.EXPIRED;
    });
}

function v(e) {
    return m(e.code, (e) => {
        e.state = o.elq.ACCEPTING;
    });
}

function S(e) {
    return m(e.code, (t) => {
        (t.state = o.elq.ACCEPTED),
            (t.guild = e.invite.guild),
            (t.new_member = e.invite.new_member),
            (t.channel = c({}, t.channel, e.invite.channel));
    });
}

function I(e) {
    return (
        p.set(e.code, e.error),
        m(e.code, (e) => {
            e.state = o.elq.ERROR;
        })
    );
}

function T(e) {
    return m(e.code, (e) => {
        e.state = o.elq.APP_OPENING;
    });
}

function C(e) {
    return m(e.code, (e) => {
        e.state = o.elq.APP_OPENED;
    });
}

function N(e) {
    return m(e.code, (e) => {
        e.state = o.elq.APP_NOT_OPENED;
    });
}

function R(e) {
    (h = new Map(h)).set(e.code, e.friendMemberIds);
}

function w(e) {
    if (!h.has(e.code)) return !1;
    (h = new Map(h)).delete(e.code);
}
class P extends (r = i.Ay.Store) {
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
        return h.get(e);
    }
}
l(P, "displayName", "InviteStore");
let D = new P(a.h, {
    INVITE_RESOLVE: g,
    INVITE_RESOLVE_SUCCESS: E,
    INVITE_RESOLVE_FAILURE: A,
    INSTANT_INVITE_REVOKE_SUCCESS: A,
    FRIEND_INVITE_CREATE_SUCCESS: y,
    FRIEND_INVITE_REVOKE_SUCCESS: O,
    INSTANT_INVITE_CREATE_SUCCESS: b,
    INVITE_ACCEPT: v,
    INVITE_ACCEPT_SUCCESS: S,
    INVITE_ACCEPT_FAILURE: I,
    INVITE_APP_OPENING: T,
    INVITE_APP_OPENED: C,
    INVITE_APP_NOT_OPENED: N,
    INVITE_FRIEND_MEMBERS_FETCH_SUCCESS: R,
    INVITE_FRIEND_MEMBERS_FETCH_FAILURE: w,
});
