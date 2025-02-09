n.d(t, {
    K: () => E,
    i: () => g
}),
    n(47120);
var i = n(933557),
    r = n(927723),
    a = n(339085),
    s = n(633302),
    o = n(601070),
    l = n(592125),
    u = n(984933),
    c = n(271383),
    d = n(430824),
    f = n(594174),
    _ = n(483360),
    p = n(709054),
    h = n(752305),
    m = n(377668);
function g(e, t, n, i) {
    let { allowUsers: r = !0, allowRoles: a = !0 } = null != i ? i : {};
    switch (e[0]) {
        case '@':
            return v(e, t, n, r, a);
        case ':':
            return T(e, t);
        case '#':
            return I(e, t);
    }
    return null;
}
function E(e, t, n, i) {
    let r = g(e, t, n, i);
    return null == r ? null : (0, h.VI)(r);
}
function v(e, t, n, i, a) {
    let [s, o] = e.slice(1).split('#', 2),
        u = null != t ? d.Z.getGuild(t) : null,
        f = (0, r.M9)(u);
    if (a && null == o && null != u) {
        for (let e of Object.values(d.Z.getRoles(u.id)))
            if (s === e.name)
                return {
                    type: 'roleMention',
                    roleId: e.id,
                    children: [{ text: '' }]
                };
    }
    if (i) {
        let e = null != n ? l.Z.getChannel(n) : null;
        if (null != e) {
            if (e.isPrivate()) {
                for (let t of e.recipients)
                    if (y(s, o, t))
                        return {
                            type: 'userMention',
                            userId: t,
                            children: [{ text: '' }]
                        };
            } else {
                for (let { userId: e } of c.ZP.getMembers(t))
                    if (y(s, o, e))
                        return {
                            type: 'userMention',
                            userId: e,
                            children: [{ text: '' }]
                        };
                if (f && y(s, o, m.fL))
                    return {
                        type: 'userMention',
                        userId: m.fL,
                        children: [{ text: '' }]
                    };
            }
        }
    }
    return null;
}
function y(e, t, n) {
    let i = f.default.getUser(n);
    return null != i && ((n === m.fL && 'clyde' === e.toLowerCase()) || (i.username === e && i.discriminator === (null != t ? t : '0')));
}
function I(e, t) {
    let n;
    if (null == t) return null;
    n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, i.mA)(e.slice(2, e.length - 1)) : e.slice(1);
    let r = u.ZP.getTextChannelNameDisambiguations(t);
    for (let e of p.default.keys(r))
        if (r[e].name === n)
            return {
                type: 'channelMention',
                channelId: e,
                children: [{ text: '' }]
            };
    for (let e of _.k1)
        if (e !== u.sH) {
            for (let { channel: i } of u.ZP.getChannels(t)[e])
                if (i.name === n)
                    return {
                        type: 'channelMention',
                        channelId: i.id,
                        children: [{ text: '' }]
                    };
        }
    let a = o.Z.getActiveJoinedThreadsForGuild(t);
    for (let e of p.default.keys(a))
        for (let t of p.default.keys(a[e])) {
            let { channel: i } = a[e][t];
            if (i.name === n)
                return {
                    type: 'channelMention',
                    channelId: i.id,
                    children: [{ text: '' }]
                };
        }
    return null;
}
function T(e, t) {
    let n = s.ZP.EMOJI_NAME_RE.exec(e);
    if (null == n) return null;
    let i = n[1],
        r = a.ZP.getDisambiguatedEmojiContext(t).getCustomEmoji();
    if (null != r && i in r) {
        let e = r[i];
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
