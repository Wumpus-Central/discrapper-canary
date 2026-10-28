n.d(t, { f: () => N, p: () => S });
var i = n(47167),
    r = n(236285),
    a = n(7584),
    s = n(620181),
    l = n(863005),
    o = n(734057),
    d = n(808728),
    c = n(696451),
    u = n(317525),
    _ = n(71393),
    E = n(576705),
    A = n(994500),
    h = n(287809),
    f = n(768038),
    I = n(690521),
    p = n(935208),
    T = n(408018),
    m = n(652215),
    g = n(307731);
function S(e, t, n, T) {
    let { allowUsers: S = !0, allowRoles: N = !0 } = T ?? {};
    switch (e[0]) {
        case "@":
            return (function (e, t, n, i, r) {
                let [a, s] = e.slice(1).split("#", 2),
                    l = null != t ? _.A.getGuild(t) : null;
                if (r && null == s && null != l) {
                    for (let e of u.A.getSortedRoles(l.id))
                        if (a === e.name) return { type: "roleMention", roleId: e.id, children: [{ text: "" }] };
                }
                if (i) {
                    let e = null != n ? o.A.getChannel(n) : null;
                    if (null == e) return null;
                    let i = (
                        e.isPrivate()
                            ? e.recipients
                            : c.Ay.getMembers(t).map((e) => {
                                  let { userId: t } = e;
                                  return t;
                              })
                    )
                        .map((e) => h.default.getUser(e))
                        .filter((e) => void 0 !== e && C(a, s, e));
                    if (1 === i.length) {
                        let e = i[0];
                        if (C(a, s, e, { requireExact: !0 }))
                            return { type: "userMention", userId: e.id, children: [{ text: "" }] };
                    }
                }
                return null;
            })(e, t, n, S, N);
        case ":":
            return (function (e, t, n) {
                let i = a.Ay.EMOJI_NAME_RE.exec(e);
                if (null == i) return null;
                let l = i[1],
                    d = r.Ay.getDisambiguatedEmojiContext(t),
                    c = (0, s.A)(d, l),
                    u = null != n ? o.A.getChannel(n) : null;
                return null == c || I.Ay.isEmojiFiltered({ emoji: c, channel: u, intention: g.EmojiIntention.CHAT })
                    ? null
                    : {
                          type: "customEmoji",
                          emoji: {
                              emojiId: c.id,
                              name: "require_colons" in c && c.require_colons ? `:${c.name}:` : c.name,
                              animated: !0 === c.animated,
                              jumboable: !1,
                          },
                          children: [{ text: "" }],
                      };
            })(e, t, n);
        case "#":
            let O;
            var R = e,
                L = t;
            if (null == L) break;
            O =
                R.length > 3 && '"' === R[1] && '"' === R[R.length - 1]
                    ? (0, i.LG)(R.slice(2, R.length - 1))
                    : R.slice(1);
            let y = d.Ay.getTextChannelNameDisambiguations(L);
            for (let e of p.default.keys(y))
                if (y[e].name === O) return { type: "channelMention", channelId: e, children: [{ text: "" }] };
            for (let e of f.L3)
                if (e !== d.I6) {
                    for (let { channel: t } of d.Ay.getChannels(L)[e])
                        if ((0, i.m1)(t, h.default, A.A) === O) {
                            if (t.isCategory() && !E.A.can(m.xBc.VIEW_CHANNEL, t)) continue;
                            return { type: "channelMention", channelId: t.id, children: [{ text: "" }] };
                        }
                }
            let D = l.A.getActiveJoinedThreadsForGuild(L);
            for (let e of p.default.keys(D))
                for (let t of p.default.keys(D[e])) {
                    let { channel: n } = D[e][t];
                    if ((0, i.m1)(n, h.default, A.A) === O)
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
function C(e, t, n) {
    let { requireExact: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (i ? n.username === e : n.username.startsWith(e)) && n.discriminator === (t ?? "0");
}
