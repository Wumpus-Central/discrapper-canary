n.d(t, {
    K: () => E,
    i: () => g
}),
    n(388685),
    n(35282);
var r = n(933557),
    i = n(797610),
    a = n(339085),
    o = n(633302),
    s = n(601070),
    l = n(592125),
    c = n(984933),
    u = n(271383),
    d = n(430824),
    f = n(594174),
    _ = n(483360),
    p = n(709054),
    h = n(752305),
    m = n(377668);
function g(e, t, n, r) {
    let { allowUsers: i = !0, allowRoles: a = !0 } = null != r ? r : {};
    switch (e[0]) {
        case '@':
            return b(e, t, n, i, a);
        case ':':
            return O(e, t);
        case '#':
            return v(e, t);
    }
    return null;
}
function E(e, t, n, r) {
    let i = g(e, t, n, r);
    return null == i ? null : (0, h.VI)(i);
}
function b(e, t, n, r, a) {
    let [o, s] = e.slice(1).split('#', 2),
        c = null != t ? d.Z.getGuild(t) : null,
        f = (0, i.M9)(c);
    if (a && null == s && null != c) {
        for (let e of Object.values(d.Z.getRoles(c.id)))
            if (o === e.name)
                return {
                    type: 'roleMention',
                    roleId: e.id,
                    children: [{ text: '' }]
                };
    }
    if (r) {
        let e = null != n ? l.Z.getChannel(n) : null;
        if (null != e)
            if (e.isPrivate()) {
                for (let t of e.recipients)
                    if (y(o, s, t))
                        return {
                            type: 'userMention',
                            userId: t,
                            children: [{ text: '' }]
                        };
            } else {
                for (let { userId: e } of u.ZP.getMembers(t))
                    if (y(o, s, e))
                        return {
                            type: 'userMention',
                            userId: e,
                            children: [{ text: '' }]
                        };
                if (f && y(o, s, m.fL))
                    return {
                        type: 'userMention',
                        userId: m.fL,
                        children: [{ text: '' }]
                    };
            }
    }
    return null;
}
function y(e, t, n) {
    let r = f.default.getUser(n);
    return null != r && ((n === m.fL && 'clyde' === e.toLowerCase()) || (r.username === e && r.discriminator === (null != t ? t : '0')));
}
function v(e, t) {
    let n;
    if (null == t) return null;
    n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, r.mA)(e.slice(2, e.length - 1)) : e.slice(1);
    let i = c.ZP.getTextChannelNameDisambiguations(t);
    for (let e of p.default.keys(i))
        if (i[e].name === n)
            return {
                type: 'channelMention',
                channelId: e,
                children: [{ text: '' }]
            };
    for (let e of _.k1)
        if (e !== c.sH) {
            for (let { channel: r } of c.ZP.getChannels(t)[e])
                if (r.name === n)
                    return {
                        type: 'channelMention',
                        channelId: r.id,
                        children: [{ text: '' }]
                    };
        }
    let a = s.Z.getActiveJoinedThreadsForGuild(t);
    for (let e of p.default.keys(a))
        for (let t of p.default.keys(a[e])) {
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
function O(e, t) {
    let n = o.ZP.EMOJI_NAME_RE.exec(e);
    if (null == n) return null;
    let r = n[1],
        i = a.ZP.getDisambiguatedEmojiContext(t).getCustomEmoji();
    if (null != i && r in i) {
        let e = i[r];
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
