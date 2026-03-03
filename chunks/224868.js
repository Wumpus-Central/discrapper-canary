"use strict";
n.d(t, { f: () => E, p: () => m });
var r = n(47167),
    i = n(508675),
    s = n(7584),
    a = n(863005),
    o = n(734057),
    l = n(808728),
    u = n(696451),
    c = n(317525),
    d = n(71393),
    _ = n(287809),
    f = n(248465),
    p = n(661191),
    h = n(408018);
function m(e, t, n, r) {
    let { allowUsers: i = !0, allowRoles: s = !0 } = r ?? {};
    switch (e[0]) {
        case "@":
            return g(e, t, n, i, s);
        case ":":
            return T(e, t);
        case "#":
            return I(e, t);
    }
    return null;
}
function E(e, t, n, r) {
    let i = m(e, t, n, r);
    return null == i ? null : (0, h.QR)(i);
}
function g(e, t, n, r, i) {
    let [s, a] = e.slice(1).split("#", 2),
        l = null != t ? d.A.getGuild(t) : null;
    if (i && null == a && null != l) {
        for (let e of c.A.getSortedRoles(l.id))
            if (s === e.name) return { type: "roleMention", roleId: e.id, children: [{ text: "" }] };
    }
    if (r) {
        let e = null != n ? o.A.getChannel(n) : null;
        if (null == e) return null;
        let r = (
            e.isPrivate()
                ? e.recipients
                : u.Ay.getMembers(t).map((e) => {
                      let { userId: t } = e;
                      return t;
                  })
        )
            .map((e) => _.default.getUser(e))
            .filter((e) => void 0 !== e && A(s, a, e));
        if (1 === r.length) {
            let e = r[0];
            if (A(s, a, e, { requireExact: !0 }))
                return { type: "userMention", userId: e.id, children: [{ text: "" }] };
        }
    }
    return null;
}
function A(e, t, n) {
    let { requireExact: r = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (r ? n.username === e : n.username.startsWith(e)) && n.discriminator === (t ?? "0");
}
function I(e, t) {
    let n;
    if (null == t) return null;
    n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, r.LG)(e.slice(2, e.length - 1)) : e.slice(1);
    let i = l.Ay.getTextChannelNameDisambiguations(t);
    for (let e of p.default.keys(i))
        if (i[e].name === n) return { type: "channelMention", channelId: e, children: [{ text: "" }] };
    for (let e of f.L3)
        if (e !== l.I6) {
            for (let { channel: r } of l.Ay.getChannels(t)[e])
                if (r.name === n) return { type: "channelMention", channelId: r.id, children: [{ text: "" }] };
        }
    let s = a.A.getActiveJoinedThreadsForGuild(t);
    for (let e of p.default.keys(s))
        for (let t of p.default.keys(s[e])) {
            let { channel: r } = s[e][t];
            if (r.name === n) return { type: "channelMention", channelId: r.id, children: [{ text: "" }] };
        }
    return null;
}
function T(e, t) {
    let n = s.Ay.EMOJI_NAME_RE.exec(e);
    if (null == n) return null;
    let r = n[1],
        a = i.Ay.getDisambiguatedEmojiContext(t).getCustomEmoji();
    if (null != a && Object.prototype.hasOwnProperty.call(a, r)) {
        let e = a[r];
        return {
            type: "customEmoji",
            emoji: {
                emojiId: e.id,
                name: "require_colons" in e && e.require_colons ? `:${e.name}:` : e.name,
                animated: !0 === e.animated,
                jumboable: !1,
            },
            children: [{ text: "" }],
        };
    }
    return null;
}
