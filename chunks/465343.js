(n.d(t, {
    K: () => g,
    i: () => m
}),
    n(388685),
    n(35282));
var r = n(933557),
    i = n(339085),
    a = n(633302),
    o = n(601070),
    s = n(592125),
    l = n(984933),
    c = n(271383),
    u = n(485386),
    d = n(430824),
    _ = n(594174),
    f = n(483360),
    p = n(709054),
    h = n(752305);
function m(e, t, n, r) {
    let { allowUsers: i = !0, allowRoles: a = !0 } = null != r ? r : {};
    switch (e[0]) {
        case '@':
            return E(e, t, n, i, a);
        case ':':
            return O(e, t);
        case '#':
            return y(e, t);
    }
    return null;
}
function g(e, t, n, r) {
    let i = m(e, t, n, r);
    return null == i ? null : (0, h.VI)(i);
}
function E(e, t, n, r, i) {
    let [a, o] = e.slice(1).split('#', 2),
        l = null != t ? d.Z.getGuild(t) : null;
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
        if (null == e) return null;
        let r = (
            e.isPrivate()
                ? e.recipients
                : c.ZP.getMembers(t).map((e) => {
                      let { userId: t } = e;
                      return t;
                  })
        )
            .map((e) => _.default.getUser(e))
            .filter((e) => void 0 !== e && b(a, o, e));
        if (1 === r.length) {
            let e = r[0];
            if (b(a, o, e, { requireExact: !0 }))
                return {
                    type: 'userMention',
                    userId: e.id,
                    children: [{ text: '' }]
                };
        }
    }
    return null;
}
function b(e, t, n) {
    let { requireExact: r = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (r ? n.username === e : n.username.startsWith(e)) && n.discriminator === (null != t ? t : '0');
}
function y(e, t) {
    let n;
    if (null == t) return null;
    n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, r.mA)(e.slice(2, e.length - 1)) : e.slice(1);
    let i = l.ZP.getTextChannelNameDisambiguations(t);
    for (let e of p.default.keys(i))
        if (i[e].name === n)
            return {
                type: 'channelMention',
                channelId: e,
                children: [{ text: '' }]
            };
    for (let e of f.k1)
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
