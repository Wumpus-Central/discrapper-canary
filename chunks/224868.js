"use strict";
n.d(t, { f: () => g, p: () => E });
var r = n(47167),
    i = n(508675),
    s = n(7584),
    a = n(863005),
    o = n(734057),
    l = n(808728),
    u = n(696451),
    c = n(317525),
    d = n(71393),
    _ = n(994500),
    f = n(287809),
    p = n(248465),
    h = n(661191),
    m = n(408018);
function E(e, t, n, r) {
    let { allowUsers: i = !0, allowRoles: s = !0 } = r ?? {};
    switch (e[0]) {
        case "@":
            return A(e, t, n, i, s);
        case ":":
            return S(e, t);
        case "#":
            return T(e, t);
    }
    return null;
}
function g(e, t, n, r) {
    let i = E(e, t, n, r);
    return null == i ? null : (0, m.QR)(i);
}
function A(e, t, n, r, i) {
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
            .map((e) => f.default.getUser(e))
            .filter((e) => void 0 !== e && I(s, a, e));
        if (1 === r.length) {
            let e = r[0];
            if (I(s, a, e, { requireExact: !0 }))
                return { type: "userMention", userId: e.id, children: [{ text: "" }] };
        }
    }
    return null;
}
function I(e, t, n) {
    let { requireExact: r = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (r ? n.username === e : n.username.startsWith(e)) && n.discriminator === (t ?? "0");
}
function T(e, t) {
    let n;
    if (null == t) return null;
    n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, r.LG)(e.slice(2, e.length - 1)) : e.slice(1);
    let i = l.Ay.getTextChannelNameDisambiguations(t);
    for (let e of h.default.keys(i))
        if (i[e].name === n) return { type: "channelMention", channelId: e, children: [{ text: "" }] };
    for (let e of p.L3)
        if (e !== l.I6) {
            for (let { channel: i } of l.Ay.getChannels(t)[e])
                if ((0, r.m1)(i, f.default, _.A) === n)
                    return { type: "channelMention", channelId: i.id, children: [{ text: "" }] };
        }
    let s = a.A.getActiveJoinedThreadsForGuild(t);
    for (let e of h.default.keys(s))
        for (let t of h.default.keys(s[e])) {
            let { channel: i } = s[e][t];
            if ((0, r.m1)(i, f.default, _.A) === n)
                return { type: "channelMention", channelId: i.id, children: [{ text: "" }] };
        }
    return null;
}
function S(e, t) {
    let n = s.Ay.EMOJI_NAME_RE.exec(e);
    if (null == n) return null;
    let r = n[1],
        a = i.Ay.getDisambiguatedEmojiContext(t).getCustomEmoji().get(r);
    return null != a
        ? {
              type: "customEmoji",
              emoji: {
                  emojiId: a.id,
                  name: "require_colons" in a && a.require_colons ? `:${a.name}:` : a.name,
                  animated: !0 === a.animated,
                  jumboable: !1,
              },
              children: [{ text: "" }],
          }
        : null;
}
