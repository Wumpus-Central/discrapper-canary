var i = r(477660),
    a = r.n(i),
    o = r(430198),
    s = r(933557),
    l = r(66999),
    u = r(754688),
    c = r(592125),
    d = r(430824),
    f = r(496675),
    p = r(699516),
    h = r(594174),
    _ = r(768581),
    m = r(934415),
    g = r(624138),
    E = r(699450),
    v = r(594199),
    y = r(981631),
    b = r(388032);
let I = (e) => {
    let n = c.Z.getChannel(e);
    return null == n ? void 0 : n.getGuildId();
};
function T(e) {
    return {
        type: 'guild',
        guildId: e.id,
        content: (0, g.aF)(e.name, 32),
        icon: _.ZP.getGuildIconURL({
            id: e.id,
            icon: e.icon,
            size: 40
        })
    };
}
function S(e, n) {
    let r;
    let i = O((0, g.aF)(e.name, 32));
    return {
        type: 'channel',
        content: [
            (r =
                'italics' === n
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
function A(e, n) {
    let r = {
        type: 'channel',
        content: [O(e.roleSubscriptionGated ? e.name : b.intl.string(b.t['/YzI6+']))],
        channelType: e.roleSubscriptionGated ? e.type : y.d4z.UNKNOWN,
        iconType: 'locked'
    };
    return {
        type: 'channelMention',
        guildId: e.guildId,
        channelId: e.id,
        messageId: n,
        inContent: null,
        content: [r]
    };
}
function C(e) {
    return {
        type: 'channel',
        content: [O('')],
        iconType: e ? 'post' : 'message'
    };
}
function N(e, n) {
    var r;
    let i = c.Z.getChannel(e),
        a = (0, l.$)(e, c.Z, o.Z, f.Z).isSubscriptionGated,
        d = null !== (r = (0, m.wl)(i)) && void 0 !== r ? r : 'text';
    if (null != n) {
        let r = n.find((n) => n.id === e);
        if (null != r)
            return {
                type: r.type,
                id: r.id,
                guildId: r.guild_id,
                name: r.name,
                isDm: null != i && i.isPrivate(),
                isForumPost: null != i && i.isForumPost(),
                isMentionable: !0,
                canViewChannel: !0,
                roleSubscriptionGated: a,
                iconType: d,
                parentId: null == i ? void 0 : i.parent_id
            };
    }
    return null != i
        ? {
              type: i.type,
              id: i.id,
              guildId: i.guild_id,
              name: (0, s.F6)(i, h.default, p.Z),
              isDm: i.isPrivate(),
              isForumPost: i.isForumPost(),
              isMentionable: (0, E.B)(i.type),
              canViewChannel: (0, u.YO)(i),
              roleSubscriptionGated: a,
              iconType: d,
              parentId: i.parent_id
          }
        : null;
}
function R(e) {
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
function O(e) {
    return {
        type: 'text',
        content: e
    };
}
function D(e) {
    return null != e ? R(e) : O('#'.concat(b.intl.string(b.t.J90oLS)));
}
function x() {
    return S(
        {
            name: b.intl.string(b.t.zLZPmp).toLowerCase(),
            type: y.d4z.UNKNOWN,
            iconType: 'text'
        },
        'italics'
    );
}
function L(e, n, r, i, a) {
    let o = d.Z.getGuild(e),
        s = (null == o ? void 0 : o.id) === i;
    return {
        type: 'channelMention',
        guildId: e,
        channelId: n,
        messageId: r,
        originalLink: a,
        inContent: null == o || s ? null : [T(o)],
        content: [x()]
    };
}
function w(e, n, r, i) {
    let a = T(e),
        o = S(n),
        s = C(n.isForumPost);
    if (r && i) {
        if (n.isForumPost) {
            let e = c.Z.getChannel(n.parentId);
            if (null != e) {
                var l;
                return {
                    inContent: [
                        S({
                            name: e.name,
                            type: e.type,
                            iconType: null !== (l = (0, m.wl)(e)) && void 0 !== l ? l : 'forum'
                        })
                    ],
                    content: [o]
                };
            }
        }
        return {
            inContent: [o],
            content: [s]
        };
    }
    if (r && !i)
        return {
            inContent: null,
            content: [o]
        };
    if (!r && i)
        return {
            inContent: [a],
            content: [n.isForumPost ? o : s]
        };
    else if (!r && !i)
        return {
            inContent: [a],
            content: [o]
        };
}
function P(e, n, r, i) {
    if (!e.canViewChannel) return A(e, n);
    if (!e.isMentionable) return O('#'.concat(e.name));
    let a = {
            type: 'channelMention',
            channelId: e.id,
            guildId: e.guildId,
            messageId: n,
            originalLink: i
        },
        o = d.Z.getGuild(e.guildId);
    if (null == o)
        return e.isDm
            ? {
                  ...a,
                  guildId: y.ME,
                  inContent: [S(e)],
                  content: [C(!1)]
              }
            : D(i);
    let s = e.guildId === r,
        l = null != n;
    return {
        ...a,
        ...w(o, e, s, l)
    };
}
let M = {
        order: v.ZP.order,
        requiredFirstCharacters: ['<'],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, n, r) {
            let i = e[1];
            if (r.returnMentionIds)
                return {
                    type: 'channelMention',
                    id: i
                };
            let a = N(i, r.mentionChannels);
            return null == a ? L(null, i, null, I(r.channelId)) : P(a, null, I(r.channelId));
        }
    },
    k = {
        order: a().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ['h'],
        match(e) {
            let n = u.Jv.exec(e);
            return null != n && ((null != n[2] && /\D/.test(n[2])) || (null != n[3] && /\D/.test(n[3]))) ? null : n;
        },
        parse(e, n, r) {
            let i = e[0],
                a = e[1],
                o = e[2],
                s = e[3];
            if (null == o) return R(i);
            let l = N(o, null);
            return null == l ? L(a, o, s, I(r.channelId), i) : P(l, s, I(r.channelId), i);
        }
    },
    U = {
        order: a().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ['h'],
        match: (e) => u.M0.exec(e),
        parse(e, n, r) {
            let i = e[0],
                a = e[1],
                o = e[2],
                s = e[3],
                l = e[4];
            if (null == o || null == s) return R(i);
            let u = N(s, null);
            if (null != u) return P(u, l, I(r.channelId), i);
            let c = N(o, null);
            return null != c ? P(c, l, I(r.channelId), i) : L(a, o, l, I(r.channelId), i);
        }
    };
n.Z = {
    channelMention: M,
    channelOrMessageUrl: k,
    mediaPostLink: U
};
