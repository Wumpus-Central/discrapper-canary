n.d(t, { Z: () => M });
var i = n(477660),
    r = n.n(i),
    a = n(430198),
    s = n(933557),
    o = n(66999),
    l = n(754688),
    u = n(592125),
    c = n(430824),
    d = n(496675),
    f = n(699516),
    _ = n(594174),
    p = n(768581),
    h = n(934415),
    m = n(624138),
    g = n(699450),
    E = n(594199),
    v = n(981631),
    y = n(388032);
let I = (e) => {
    let t = u.Z.getChannel(e);
    return null == t ? void 0 : t.getGuildId();
};
function T(e) {
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
function b(e, t) {
    let n;
    let i = R((0, m.aF)(e.name, 32));
    return {
        type: 'channel',
        content: [
            (n =
                'italics' === t
                    ? {
                          type: 'em',
                          content: [i]
                      }
                    : i)
        ],
        channelType: e.type,
        iconType: e.iconType
    };
}
function S(e, t) {
    let n = {
        type: 'channel',
        content: [R(e.roleSubscriptionGated ? e.name : y.intl.string(y.t['/YzI6+']))],
        channelType: e.roleSubscriptionGated ? e.type : v.d4z.UNKNOWN,
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
function A(e) {
    return {
        type: 'channel',
        content: [R('')],
        iconType: e ? 'post' : 'message'
    };
}
function N(e, t) {
    var n;
    let i = u.Z.getChannel(e),
        r = (0, o.$)(e, u.Z, a.Z, d.Z).isSubscriptionGated,
        c = null !== (n = (0, h.wl)(i)) && void 0 !== n ? n : 'text';
    if (null != t) {
        let n = t.find((t) => t.id === e);
        if (null != n)
            return {
                type: n.type,
                id: n.id,
                guildId: n.guild_id,
                name: n.name,
                isDm: null != i && i.isPrivate(),
                isForumPost: null != i && i.isForumPost(),
                isMentionable: !0,
                canViewChannel: !0,
                roleSubscriptionGated: r,
                iconType: c,
                parentId: null == i ? void 0 : i.parent_id
            };
    }
    return null != i
        ? {
              type: i.type,
              id: i.id,
              guildId: i.guild_id,
              name: (0, s.F6)(i, _.default, f.Z),
              isDm: i.isPrivate(),
              isForumPost: i.isForumPost(),
              isMentionable: (0, g.B)(i.type),
              canViewChannel: (0, l.YO)(i),
              roleSubscriptionGated: r,
              iconType: c,
              parentId: i.parent_id
          }
        : null;
}
function C(e) {
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
function R(e) {
    return {
        type: 'text',
        content: e
    };
}
function O(e) {
    return null != e ? C(e) : R('#'.concat(y.intl.string(y.t.J90oLS)));
}
function D() {
    return b(
        {
            name: y.intl.string(y.t.zLZPmp).toLowerCase(),
            type: v.d4z.UNKNOWN,
            iconType: 'text'
        },
        'italics'
    );
}
function x(e, t, n, i, r) {
    let a = c.Z.getGuild(e),
        s = (null == a ? void 0 : a.id) === i;
    return {
        type: 'channelMention',
        guildId: e,
        channelId: t,
        messageId: n,
        originalLink: r,
        inContent: null == a || s ? null : [T(a)],
        content: [D()]
    };
}
function L(e, t, n, i) {
    let r = T(e),
        a = b(t),
        s = A(t.isForumPost);
    if (n && i) {
        if (t.isForumPost) {
            let e = u.Z.getChannel(t.parentId);
            if (null != e) {
                var o;
                return {
                    inContent: [
                        b({
                            name: e.name,
                            type: e.type,
                            iconType: null !== (o = (0, h.wl)(e)) && void 0 !== o ? o : 'forum'
                        })
                    ],
                    content: [a]
                };
            }
        }
        return {
            inContent: [a],
            content: [s]
        };
    }
    return n && !i
        ? {
              inContent: null,
              content: [a]
          }
        : !n && i
          ? {
                inContent: [r],
                content: [t.isForumPost ? a : s]
            }
          : n || i
            ? void 0
            : {
                  inContent: [r],
                  content: [a]
              };
}
function P(e, t, n, i) {
    if (!e.canViewChannel) return S(e, t);
    if (!e.isMentionable) return R('#'.concat(e.name));
    let r = {
            type: 'channelMention',
            channelId: e.id,
            guildId: e.guildId,
            messageId: t,
            originalLink: i
        },
        a = c.Z.getGuild(e.guildId);
    if (null == a)
        return e.isDm
            ? {
                  ...r,
                  guildId: v.ME,
                  inContent: [b(e)],
                  content: [A(!1)]
              }
            : O(i);
    let s = e.guildId === n,
        o = null != t;
    return {
        ...r,
        ...L(a, e, s, o)
    };
}
let w = {
        order: E.ZP.order,
        requiredFirstCharacters: ['<'],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, t, n) {
            let i = e[1];
            if (n.returnMentionIds)
                return {
                    type: 'channelMention',
                    id: i
                };
            let r = N(i, n.mentionChannels);
            return null == r ? x(null, i, null, I(n.channelId)) : P(r, null, I(n.channelId));
        }
    },
    M = {
        channelMention: w,
        channelOrMessageUrl: {
            order: r().defaultRules.url.order - 0.5,
            requiredFirstCharacters: ['h'],
            match(e) {
                let t = l.Jv.exec(e);
                return null != t && ((null != t[2] && /\D/.test(t[2])) || (null != t[3] && /\D/.test(t[3]))) ? null : t;
            },
            parse(e, t, n) {
                let i = e[0],
                    r = e[1],
                    a = e[2],
                    s = e[3];
                if (null == a) return C(i);
                let o = N(a, null);
                return null == o ? x(r, a, s, I(n.channelId), i) : P(o, s, I(n.channelId), i);
            }
        },
        mediaPostLink: {
            order: r().defaultRules.url.order - 0.5,
            requiredFirstCharacters: ['h'],
            match: (e) => l.M0.exec(e),
            parse(e, t, n) {
                let i = e[0],
                    r = e[1],
                    a = e[2],
                    s = e[3],
                    o = e[4];
                if (null == a || null == s) return C(i);
                let l = N(s, null);
                if (null != l) return P(l, o, I(n.channelId), i);
                let u = N(a, null);
                return null != u ? P(u, o, I(n.channelId), i) : x(r, a, o, I(n.channelId), i);
            }
        }
    };
