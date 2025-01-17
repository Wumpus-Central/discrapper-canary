r.d(n, {
    K: function () {
        return I;
    },
    i: function () {
        return v;
    }
});
var i = r(47120);
var a = r(933557),
    s = r(927723),
    o = r(339085),
    l = r(633302),
    u = r(601070),
    c = r(592125),
    d = r(984933),
    f = r(271383),
    _ = r(430824),
    h = r(594174),
    p = r(483360),
    m = r(709054),
    g = r(752305),
    E = r(377668);
function v(e, n, r, i) {
    let { allowUsers: a = !0, allowRoles: s = !0 } = null != i ? i : {};
    switch (e[0]) {
        case '@':
            return T(e, n, r, a, s);
        case ':':
            return S(e, n);
        case '#':
            return y(e, n);
    }
    return null;
}
function I(e, n, r, i) {
    let a = v(e, n, r, i);
    return null == a ? null : (0, g.VI)(a);
}
function T(e, n, r, i, a) {
    let [o, l] = e.slice(1).split('#', 2),
        u = null != n ? _.Z.getGuild(n) : null,
        d = (0, s.M9)(u);
    if (a && null == l && null != u) {
        for (let e of Object.values(_.Z.getRoles(u.id)))
            if (o === e.name)
                return {
                    type: 'roleMention',
                    roleId: e.id,
                    children: [{ text: '' }]
                };
    }
    if (i) {
        let e = null != r ? c.Z.getChannel(r) : null;
        if (null != e) {
            if (e.isPrivate()) {
                for (let n of e.recipients)
                    if (b(o, l, n))
                        return {
                            type: 'userMention',
                            userId: n,
                            children: [{ text: '' }]
                        };
            } else {
                for (let { userId: e } of f.ZP.getMembers(n))
                    if (b(o, l, e))
                        return {
                            type: 'userMention',
                            userId: e,
                            children: [{ text: '' }]
                        };
                if (d && b(o, l, E.fL))
                    return {
                        type: 'userMention',
                        userId: E.fL,
                        children: [{ text: '' }]
                    };
            }
        }
    }
    return null;
}
function b(e, n, r) {
    let i = h.default.getUser(r);
    return null != i && ((r === E.fL && 'clyde' === e.toLowerCase()) || (i.username === e && i.discriminator === (null != n ? n : '0')));
}
function y(e, n) {
    let r;
    if (null == n) return null;
    r = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, a.mA)(e.slice(2, e.length - 1)) : e.slice(1);
    let i = d.ZP.getTextChannelNameDisambiguations(n);
    for (let e of m.default.keys(i))
        if (i[e].name === r)
            return {
                type: 'channelMention',
                channelId: e,
                children: [{ text: '' }]
            };
    for (let e of p.k1) {
        if (e !== d.sH) {
            for (let { channel: i } of d.ZP.getChannels(n)[e])
                if (i.name === r)
                    return {
                        type: 'channelMention',
                        channelId: i.id,
                        children: [{ text: '' }]
                    };
        }
    }
    let s = u.Z.getActiveJoinedThreadsForGuild(n);
    for (let e of m.default.keys(s))
        for (let n of m.default.keys(s[e])) {
            let { channel: i } = s[e][n];
            if (i.name === r)
                return {
                    type: 'channelMention',
                    channelId: i.id,
                    children: [{ text: '' }]
                };
        }
    return null;
}
function S(e, n) {
    let r = l.ZP.EMOJI_NAME_RE.exec(e);
    if (null == r) return null;
    let i = r[1],
        a = o.ZP.getDisambiguatedEmojiContext(n).getCustomEmoji();
    if (null != a && i in a) {
        let e = a[i];
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
