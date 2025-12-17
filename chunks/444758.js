n.d(t, { Z: () => G }), n(35282);
var r = n(159635),
    i = n.n(r),
    a = n(430198),
    o = n(933557),
    s = n(66999),
    l = n(754688),
    c = n(592125),
    u = n(430824),
    d = n(496675),
    f = n(699516),
    p = n(594174),
    _ = n(768581),
    m = n(934415),
    h = n(624138),
    g = n(699450),
    E = n(594199),
    b = n(981631),
    y = n(388032);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = (e) => {
    let t = c.Z.getChannel(e);
    return null == t ? void 0 : t.getGuildId();
};
function C(e) {
    return {
        type: "guild",
        guildId: e.id,
        content: (0, h.aF)(e.name, 32),
        icon: _.ZP.getGuildIconURL({
            id: e.id,
            icon: e.icon,
            size: 40,
        }),
    };
}
function A(e, t) {
    let n,
        r = D((0, h.aF)(e.name, 32));
    return {
        type: "channel",
        content: [
            (n =
                "italics" === t
                    ? {
                          type: "em",
                          content: [r],
                      }
                    : r),
        ],
        channelType: e.type,
        iconType: e.iconType,
    };
}
function N(e, t) {
    let n = {
        type: "channel",
        content: [D(e.roleSubscriptionGated ? e.name : y.intl.string(y.t["/YzI63"]))],
        channelType: e.roleSubscriptionGated ? e.type : b.d4z.UNKNOWN,
        iconType: "locked",
    };
    return {
        type: "channelMention",
        guildId: e.guildId,
        channelId: e.id,
        messageId: t,
        inContent: null,
        content: [n],
    };
}
function P(e) {
    return {
        type: "channel",
        content: [D("")],
        iconType: e ? "post" : "message",
    };
}
function R(e, t) {
    var n;
    let r = c.Z.getChannel(e),
        i = (0, s.$)(e, c.Z, a.Z, d.Z).isSubscriptionGated,
        u = null != (n = (0, m.wl)(r)) ? n : "text";
    if (null != t) {
        let n = t.find((t) => t.id === e);
        if (null != n)
            return {
                type: n.type,
                id: n.id,
                guildId: n.guild_id,
                name: n.name,
                isDm: null != r && r.isPrivate(),
                isForumPost: null != r && r.isForumPost(),
                isMentionable: !0,
                canViewChannel: !0,
                roleSubscriptionGated: i,
                iconType: u,
                parentId: null == r ? void 0 : r.parent_id,
            };
    }
    return null != r
        ? {
              type: r.type,
              id: r.id,
              guildId: r.guild_id,
              name: (0, o.F6)(r, p.default, f.Z),
              isDm: r.isPrivate(),
              isForumPost: r.isForumPost(),
              isMentionable: (0, g.B)(r.type),
              canViewChannel: (0, l.YO)(r),
              roleSubscriptionGated: i,
              iconType: u,
              parentId: r.parent_id,
          }
        : null;
}
function w(e) {
    return {
        type: "link",
        content: [
            {
                type: "text",
                content: e,
            },
        ],
        target: e,
        title: void 0,
    };
}
function D(e) {
    return {
        type: "text",
        content: e,
    };
}
function x(e) {
    return null != e ? w(e) : D("#".concat(y.intl.string(y.t.J90oLW)));
}
function L() {
    return A(
        {
            name: y.intl.string(y.t.zLZPmk).toLowerCase(),
            type: b.d4z.UNKNOWN,
            iconType: "text",
        },
        "italics",
    );
}
function j(e, t, n, r, i) {
    let a = u.Z.getGuild(e),
        o = (null == a ? void 0 : a.id) === r;
    return {
        type: "channelMention",
        guildId: e,
        channelId: t,
        messageId: n,
        originalLink: i,
        inContent: null == a || o ? null : [C(a)],
        content: [L()],
    };
}
function M(e, t, n, r) {
    let i = C(e),
        a = A(t),
        o = P(t.isForumPost);
    if (n && r) {
        if (t.isForumPost) {
            let e = c.Z.getChannel(t.parentId);
            if (null != e) {
                var s;
                return {
                    inContent: [
                        A({
                            name: e.name,
                            type: e.type,
                            iconType: null != (s = (0, m.wl)(e)) ? s : "forum",
                        }),
                    ],
                    content: [a],
                };
            }
        }
        return {
            inContent: [a],
            content: [o],
        };
    }
    return n && !r
        ? {
              inContent: null,
              content: [a],
          }
        : !n && r
          ? {
                inContent: [i],
                content: [t.isForumPost ? a : o],
            }
          : n || r
            ? void 0
            : {
                  inContent: [i],
                  content: [a],
              };
}
function k(e, t, n, r) {
    if (!e.canViewChannel) return N(e, t);
    if (!e.isMentionable) return D("#".concat(e.name));
    let i = {
            type: "channelMention",
            channelId: e.id,
            guildId: e.guildId,
            messageId: t,
            originalLink: r,
        },
        a = u.Z.getGuild(e.guildId);
    if (null == a)
        if (e.isDm)
            return I(v({}, i), {
                guildId: b.ME,
                inContent: [A(e)],
                content: [P(!1)],
            });
        else return x(r);
    let o = e.guildId === n;
    return v({}, i, M(a, e, o, null != t));
}
let U = {
        order: E.ZP.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, t, n) {
            let r = e[1];
            if (n.returnMentionIds)
                return {
                    type: "channelMention",
                    id: r,
                };
            let i = R(r, n.mentionChannels);
            return null == i ? j(null, r, null, T(n.channelId)) : k(i, null, T(n.channelId));
        },
    },
    G = {
        channelMention: U,
        channelOrMessageUrl: {
            order: i().defaultRules.url.order - 0.5,
            requiredFirstCharacters: ["h"],
            match(e) {
                let t = l.Jv.exec(e);
                return null != t && ((null != t[2] && /\D/.test(t[2])) || (null != t[3] && /\D/.test(t[3]))) ? null : t;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = e[1],
                    a = e[2],
                    o = e[3];
                if (null == a) return w(r);
                let s = R(a, null);
                return null == s ? j(i, a, o, T(n.channelId), r) : k(s, o, T(n.channelId), r);
            },
        },
        mediaPostLink: {
            order: i().defaultRules.url.order - 0.5,
            requiredFirstCharacters: ["h"],
            match: (e) => l.M0.exec(e),
            parse(e, t, n) {
                let r = e[0],
                    i = e[1],
                    a = e[2],
                    o = e[3],
                    s = e[4];
                if (null == a || null == o) return w(r);
                let l = R(o, null);
                if (null != l) return k(l, s, T(n.channelId), r);
                let c = R(a, null);
                return null != c ? k(c, s, T(n.channelId), r) : j(i, a, s, T(n.channelId), r);
            },
        },
    };
