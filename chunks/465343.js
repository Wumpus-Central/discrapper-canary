n.d(t, {
    K: () => m,
    i: () => h
}),
    n(388685),
    n(35282);
var r = n(933557),
    i = n(339085),
    a = n(633302),
    o = n(601070),
    s = n(592125),
    l = n(984933),
    c = n(271383),
    u = n(430824),
    d = n(594174),
    _ = n(483360),
    f = n(709054),
    p = n(752305);
function h(e, t, n, r) {
    let { allowUsers: i = !0, allowRoles: a = !0 } = null != r ? r : {};
    switch (e[0]) {
        case '@':
            return g(e, t, n, i, a);
        case ':':
            return y(e, t);
        case '#':
            return b(e, t);
    }
    return null;
}
function m(e, t, n, r) {
    let i = h(e, t, n, r);
    return null == i ? null : (0, p.VI)(i);
}
function g(e, t, n, r, i) {
    let [a, o] = e.slice(1).split('#', 2),
        l = null != t ? u.Z.getGuild(t) : null;
    if (i && null == o && null != l) {
        for (let e of Object.values(u.Z.getRoles(l.id)))
            if (a === e.name)
                return {
                    type: 'roleMention',
                    roleId: e.id,
                    children: [{ text: '' }]
                };
    }
    if (r) {
        let e = null != n ? s.Z.getChannel(n) : null;
        if (null != e) {
            if (e.isPrivate()) {
                for (let t of e.recipients)
                    if (E(a, o, t))
                        return {
                            type: 'userMention',
                            userId: t,
                            children: [{ text: '' }]
                        };
            } else
                for (let { userId: e } of c.ZP.getMembers(t))
                    if (E(a, o, e))
                        return {
                            type: 'userMention',
                            userId: e,
                            children: [{ text: '' }]
                        };
        }
    }
    return null;
}
function E(e, t, n) {
    let r = d.default.getUser(n);
    return null != r && r.username === e && r.discriminator === (null != t ? t : '0');
}
function b(e, t) {
    let n;
    if (null == t) return null;
    n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, r.mA)(e.slice(2, e.length - 1)) : e.slice(1);
    let i = l.ZP.getTextChannelNameDisambiguations(t);
    for (let e of f.default.keys(i))
        if (i[e].name === n)
            return {
                type: 'channelMention',
                channelId: e,
                children: [{ text: '' }]
            };
    for (let e of _.k1)
        if (e !== l.sH) {
            for (let { channel: r } of l.ZP.getChannels(t)[e])
                if (r.name === n)
                    return {
                        type: 'channelMention',
                        channelId: r.id,
                        children: [{ text: '' }]
                    };
        }
    let a = o.Z.getActiveJoinedThreadsForGuild(t);
    for (let e of f.default.keys(a))
        for (let t of f.default.keys(a[e])) {
            let { channel: r } = a[e][t];
            if (r.name === n)
                return {
                    type: 'channelMention',
                    channelId: r.id,
                    children: [{ text: '' }]
                };
        }
    return null;
}
function y(e, t) {
    let n = a.ZP.EMOJI_NAME_RE.exec(e);
    if (null == n) return null;
    let r = n[1],
        o = i.ZP.getDisambiguatedEmojiContext(t).getCustomEmoji();
    if (null != o && r in o) {
        let e = o[r];
        return {
            type: 'customEmoji',
            emoji: {
                emojiId: e.id,
                name: 'require_colons' in e && e.require_colons ? ':'.concat(e.name, ':') : e.name,
                animated: !0 === e.animated,
                jumboable: !1
            },
            children: [{ text: '' }]
        };
    }
    return null;
}
