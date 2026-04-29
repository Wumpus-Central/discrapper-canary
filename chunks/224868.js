n.d(t, { f: () => f, p: () => O });
var i = n(47167),
    a = n(159273),
    r = n(7584),
    _ = n(695633),
    s = n(734057),
    l = n(808728),
    o = n(696451),
    E = n(317525),
    d = n(71393),
    c = n(576705),
    u = n(994500),
    I = n(287809),
    T = n(768038),
    A = n(935208),
    S = n(408018),
    N = n(652215);
function O(e, t, n, S) {
    let { allowUsers: O = !0, allowRoles: f = !0 } = S ?? {};
    switch (e[0]) {
        case "@":
            return (function (e, t, n, i, a) {
                let [r, _] = e.slice(1).split("#", 2),
                    l = null != t ? d.A.getGuild(t) : null;
                if (a && null == _ && null != l) {
                    for (let e of E.A.getSortedRoles(l.id))
                        if (r === e.name) return { type: "roleMention", roleId: e.id, children: [{ text: "" }] };
                }
                if (i) {
                    let e = null != n ? s.A.getChannel(n) : null;
                    if (null == e) return null;
                    let i = (
                        e.isPrivate()
                            ? e.recipients
                            : o.Ay.getMembers(t).map((e) => {
                                  let { userId: t } = e;
                                  return t;
                              })
                    )
                        .map((e) => I.default.getUser(e))
                        .filter((e) => void 0 !== e && R(r, _, e));
                    if (1 === i.length) {
                        let e = i[0];
                        if (R(r, _, e, { requireExact: !0 }))
                            return { type: "userMention", userId: e.id, children: [{ text: "" }] };
                    }
                }
                return null;
            })(e, t, n, O, f);
        case ":":
            var C = e,
                D = t;
            let p = r.Ay.EMOJI_NAME_RE.exec(C);
            if (null == p) break;
            let L = p[1],
                m = a.Ay.getDisambiguatedEmojiContext(D).getCustomEmoji().get(L);
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
            let h;
            var g = e,
                b = t;
            if (null == b) break;
            h =
                g.length > 3 && '"' === g[1] && '"' === g[g.length - 1]
                    ? (0, i.LG)(g.slice(2, g.length - 1))
                    : g.slice(1);
            let U = l.Ay.getTextChannelNameDisambiguations(b);
            for (let e of A.default.keys(U))
                if (U[e].name === h) return { type: "channelMention", channelId: e, children: [{ text: "" }] };
            for (let e of T.L3)
                if (e !== l.I6) {
                    for (let { channel: t } of l.Ay.getChannels(b)[e])
                        if ((0, i.m1)(t, I.default, u.A) === h) {
                            if (t.isCategory() && !c.A.can(N.xBc.VIEW_CHANNEL, t)) continue;
                            return { type: "channelMention", channelId: t.id, children: [{ text: "" }] };
                        }
                }
            let P = _.A.getActiveJoinedThreadsForGuild(b);
            for (let e of A.default.keys(P))
                for (let t of A.default.keys(P[e])) {
                    let { channel: n } = P[e][t];
                    if ((0, i.m1)(n, I.default, u.A) === h)
                        return { type: "channelMention", channelId: n.id, children: [{ text: "" }] };
                }
            break;
    }
    return null;
}
function f(e, t, n, i) {
    let a = O(e, t, n, i);
    return null == a ? null : (0, S.QR)(a);
}
function R(e, t, n) {
    let { requireExact: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (i ? n.username === e : n.username.startsWith(e)) && n.discriminator === (t ?? "0");
}
