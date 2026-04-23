n.d(t, { f: () => N, p: () => S });
var i = n(47167),
    r = n(159273),
    a = n(7584),
    s = n(695633),
    _ = n(734057),
    l = n(808728),
    o = n(696451),
    E = n(317525),
    d = n(71393),
    c = n(994500),
    u = n(287809),
    I = n(768038),
    A = n(935208),
    T = n(408018);
function S(e, t, n, T) {
    let { allowUsers: S = !0, allowRoles: N = !0 } = T ?? {};
    switch (e[0]) {
        case "@":
            return (function (e, t, n, i, r) {
                let [a, s] = e.slice(1).split("#", 2),
                    l = null != t ? d.A.getGuild(t) : null;
                if (r && null == s && null != l) {
                    for (let e of E.A.getSortedRoles(l.id))
                        if (a === e.name) return { type: "roleMention", roleId: e.id, children: [{ text: "" }] };
                }
                if (i) {
                    let e = null != n ? _.A.getChannel(n) : null;
                    if (null == e) return null;
                    let i = (
                        e.isPrivate()
                            ? e.recipients
                            : o.Ay.getMembers(t).map((e) => {
                                  let { userId: t } = e;
                                  return t;
                              })
                    )
                        .map((e) => u.default.getUser(e))
                        .filter((e) => void 0 !== e && O(a, s, e));
                    if (1 === i.length) {
                        let e = i[0];
                        if (O(a, s, e, { requireExact: !0 }))
                            return { type: "userMention", userId: e.id, children: [{ text: "" }] };
                    }
                }
                return null;
            })(e, t, n, S, N);
        case ":":
            var R = e,
                f = t;
            let C = a.Ay.EMOJI_NAME_RE.exec(R);
            if (null == C) break;
            let p = C[1],
                m = r.Ay.getDisambiguatedEmojiContext(f).getCustomEmoji().get(p);
            return null != m
                ? {
                      type: "customEmoji",
                      emoji: {
                          emojiId: m.id,
                          name: "require_colons" in m && m.require_colons ? `:${m.name}:` : m.name,
                          animated: !0 === m.animated,
                          jumboable: !1,
                      },
                      children: [{ text: "" }],
                  }
                : null;
        case "#":
            let L;
            var D = e,
                h = t;
            if (null == h) break;
            L =
                D.length > 3 && '"' === D[1] && '"' === D[D.length - 1]
                    ? (0, i.LG)(D.slice(2, D.length - 1))
                    : D.slice(1);
            let g = l.Ay.getTextChannelNameDisambiguations(h);
            for (let e of A.default.keys(g))
                if (g[e].name === L) return { type: "channelMention", channelId: e, children: [{ text: "" }] };
            for (let e of I.L3)
                if (e !== l.I6) {
                    for (let { channel: t } of l.Ay.getChannels(h)[e])
                        if ((0, i.m1)(t, u.default, c.A) === L)
                            return { type: "channelMention", channelId: t.id, children: [{ text: "" }] };
                }
            let b = s.A.getActiveJoinedThreadsForGuild(h);
            for (let e of A.default.keys(b))
                for (let t of A.default.keys(b[e])) {
                    let { channel: n } = b[e][t];
                    if ((0, i.m1)(n, u.default, c.A) === L)
                        return { type: "channelMention", channelId: n.id, children: [{ text: "" }] };
                }
            break;
    }
    return null;
}
function N(e, t, n, i) {
    let r = S(e, t, n, i);
    return null == r ? null : (0, T.QR)(r);
}
function O(e, t, n) {
    let { requireExact: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (i ? n.username === e : n.username.startsWith(e)) && n.discriminator === (t ?? "0");
}
