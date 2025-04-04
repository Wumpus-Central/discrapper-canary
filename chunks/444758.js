n.d(t, { Z: () => G }), n(301563);
var r = n(477660),
    i = n.n(r),
    o = n(430198),
    a = n(933557),
    s = n(66999),
    l = n(754688),
    c = n(592125),
    u = n(430824),
    d = n(496675),
    f = n(699516),
    _ = n(594174),
    p = n(768581),
    h = n(934415),
    m = n(624138),
    g = n(699450),
    E = n(594199),
    b = n(981631),
    y = n(388032);
function v(e, t, n) {
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
function O(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = (e) => {
    let t = c.Z.getChannel(e);
    return null == t ? void 0 : t.getGuildId();
};
function N(e) {
    return {
        type: 'guild',
        guildId: e.id,
        content: (0, m.aF)(e.name, 32),
        icon: p.ZP.getGuildIconURL({
            id: e.id,
            icon: e.icon,
            size: 40
        })
    };
}
function A(e, t) {
    let n,
        r = D((0, m.aF)(e.name, 32));
    return {
        type: 'channel',
        content: [
            (n =
                'italics' === t
                    ? {
                          type: 'em',
                          content: [r]
                      }
                    : r)
        ],
        channelType: e.type,
        iconType: e.iconType
    };
}
function C(e, t) {
    let n = {
        type: 'channel',
        content: [D(e.roleSubscriptionGated ? e.name : y.NW.string(y.t['/YzI6+']))],
        channelType: e.roleSubscriptionGated ? e.type : b.d4z.UNKNOWN,
        iconType: 'locked'
    };
    return {
        type: 'channelMention',
        guildId: e.guildId,
        channelId: e.id,
        messageId: t,
        inContent: null,
        content: [n]
    };
}
function R(e) {
    return {
        type: 'channel',
        content: [D('')],
        iconType: e ? 'post' : 'message'
    };
}
function P(e, t) {
    var n;
    let r = c.Z.getChannel(e),
        i = (0, s.$)(e, c.Z, o.Z, d.Z).isSubscriptionGated,
        u = null != (n = (0, h.wl)(r)) ? n : 'text';
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
                parentId: null == r ? void 0 : r.parent_id
            };
    }
    return null != r
        ? {
              type: r.type,
              id: r.id,
              guildId: r.guild_id,
              name: (0, a.F6)(r, _.default, f.Z),
              isDm: r.isPrivate(),
              isForumPost: r.isForumPost(),
              isMentionable: (0, g.B)(r.type),
              canViewChannel: (0, l.YO)(r),
              roleSubscriptionGated: i,
              iconType: u,
              parentId: r.parent_id
          }
        : null;
}
function w(e) {
    return {
        type: 'link',
        content: [
            {
                type: 'text',
                content: e
            }
        ],
        target: e,
        title: void 0
    };
}
function D(e) {
    return {
        type: 'text',
        content: e
    };
}
function L(e) {
    return null != e ? w(e) : D('#'.concat(y.NW.string(y.t.J90oLS)));
}
function x() {
    return A(
        {
            name: y.NW.string(y.t.zLZPmp).toLowerCase(),
            type: b.d4z.UNKNOWN,
            iconType: 'text'
        },
        'italics'
    );
}
function M(e, t, n, r, i) {
    let o = u.Z.getGuild(e),
        a = (null == o ? void 0 : o.id) === r;
    return {
        type: 'channelMention',
        guildId: e,
        channelId: t,
        messageId: n,
        originalLink: i,
        inContent: null == o || a ? null : [N(o)],
        content: [x()]
    };
}
function k(e, t, n, r) {
    let i = N(e),
        o = A(t),
        a = R(t.isForumPost);
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
                            iconType: null != (s = (0, h.wl)(e)) ? s : 'forum'
                        })
                    ],
                    content: [o]
                };
            }
        }
        return {
            inContent: [o],
            content: [a]
        };
    }
    return n && !r
        ? {
              inContent: null,
              content: [o]
          }
        : !n && r
          ? {
                inContent: [i],
                content: [t.isForumPost ? o : a]
            }
          : n || r
            ? void 0
            : {
                  inContent: [i],
                  content: [o]
              };
}
function j(e, t, n, r) {
    if (!e.canViewChannel) return C(e, t);
    if (!e.isMentionable) return D('#'.concat(e.name));
    let i = {
            type: 'channelMention',
            channelId: e.id,
            guildId: e.guildId,
            messageId: t,
            originalLink: r
        },
        o = u.Z.getGuild(e.guildId);
    if (null == o)
        if (e.isDm)
            return S(O({}, i), {
                guildId: b.ME,
                inContent: [A(e)],
                content: [R(!1)]
            });
        else return L(r);
    let a = e.guildId === n;
    return O({}, i, k(o, e, a, null != t));
}
let U = {
        order: E.ZP.order,
        requiredFirstCharacters: ['<'],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, t, n) {
            let r = e[1];
            if (n.returnMentionIds)
                return {
                    type: 'channelMention',
                    id: r
                };
            let i = P(r, n.mentionChannels);
            return null == i ? M(null, r, null, T(n.channelId)) : j(i, null, T(n.channelId));
        }
    },
    G = {
        channelMention: U,
        channelOrMessageUrl: {
            order: i().defaultRules.url.order - 0.5,
            requiredFirstCharacters: ['h'],
            match(e) {
                let t = l.Jv.exec(e);
                return null != t && ((null != t[2] && /\D/.test(t[2])) || (null != t[3] && /\D/.test(t[3]))) ? null : t;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3];
                if (null == o) return w(r);
                let s = P(o, null);
                return null == s ? M(i, o, a, T(n.channelId), r) : j(s, a, T(n.channelId), r);
            }
        },
        mediaPostLink: {
            order: i().defaultRules.url.order - 0.5,
            requiredFirstCharacters: ['h'],
            match: (e) => l.M0.exec(e),
            parse(e, t, n) {
                let r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    s = e[4];
                if (null == o || null == a) return w(r);
                let l = P(a, null);
                if (null != l) return j(l, s, T(n.channelId), r);
                let c = P(o, null);
                return null != c ? j(c, s, T(n.channelId), r) : M(i, o, s, T(n.channelId), r);
            }
        }
    };
