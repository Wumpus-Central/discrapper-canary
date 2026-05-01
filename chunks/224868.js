n.d(t, { f: () => f, p: () => N });
var i = n(47167),
    a = n(159273),
    r = n(7584),
    s = n(695633),
    l = n(734057),
    o = n(808728),
    d = n(696451),
    c = n(317525),
    _ = n(71393),
    E = n(576705),
    u = n(994500),
    A = n(287809),
    I = n(768038),
    T = n(935208),
    h = n(408018),
    S = n(652215);
function N(e, t, n, h) {
    let { allowUsers: N = !0, allowRoles: f = !0 } = h ?? {};
    switch (e[0]) {
        case "@":
            return (function (e, t, n, i, a) {
                let [r, s] = e.slice(1).split("#", 2),
                    o = null != t ? _.A.getGuild(t) : null;
                if (a && null == s && null != o) {
                    for (let e of c.A.getSortedRoles(o.id))
                        if (r === e.name) return { type: "roleMention", roleId: e.id, children: [{ text: "" }] };
                }
                if (i) {
                    let e = null != n ? l.A.getChannel(n) : null;
                    if (null == e) return null;
                    let i = (
                        e.isPrivate()
                            ? e.recipients
                            : d.Ay.getMembers(t).map((e) => {
                                  let { userId: t } = e;
                                  return t;
                              })
                    )
                        .map((e) => A.default.getUser(e))
                        .filter((e) => void 0 !== e && p(r, s, e));
                    if (1 === i.length) {
                        let e = i[0];
                        if (p(r, s, e, { requireExact: !0 }))
                            return { type: "userMention", userId: e.id, children: [{ text: "" }] };
                    }
                }
                return null;
            })(e, t, n, N, f);
        case ":":
            var m = e,
                O = t;
            let C = r.Ay.EMOJI_NAME_RE.exec(m);
            if (null == C) break;
            let R = C[1],
                g = a.Ay.getDisambiguatedEmojiContext(O).getCustomEmoji().get(R);
            return null != g
                ? {
                      type: "customEmoji",
                      emoji: {
                          emojiId: g.id,
                          name: "require_colons" in g && g.require_colons ? `:${g.name}:` : g.name,
                          animated: !0 === g.animated,
                          jumboable: !1,
                      },
                      children: [{ text: "" }],
                  }
                : null;
        case "#":
            let L;
            var D = e,
                b = t;
            if (null == b) break;
            L =
                D.length > 3 && '"' === D[1] && '"' === D[D.length - 1]
                    ? (0, i.LG)(D.slice(2, D.length - 1))
                    : D.slice(1);
            let M = o.Ay.getTextChannelNameDisambiguations(b);
            for (let e of T.default.keys(M))
                if (M[e].name === L) return { type: "channelMention", channelId: e, children: [{ text: "" }] };
            for (let e of I.L3)
                if (e !== o.I6) {
                    for (let { channel: t } of o.Ay.getChannels(b)[e])
                        if ((0, i.m1)(t, A.default, u.A) === L) {
                            if (t.isCategory() && !E.A.can(S.xBc.VIEW_CHANNEL, t)) continue;
                            return { type: "channelMention", channelId: t.id, children: [{ text: "" }] };
                        }
                }
            let P = s.A.getActiveJoinedThreadsForGuild(b);
            for (let e of T.default.keys(P))
                for (let t of T.default.keys(P[e])) {
                    let { channel: n } = P[e][t];
                    if ((0, i.m1)(n, A.default, u.A) === L)
                        return { type: "channelMention", channelId: n.id, children: [{ text: "" }] };
                }
            break;
    }
    return null;
}
function f(e, t, n, i) {
    let a = N(e, t, n, i);
    return null == a ? null : (0, h.QR)(a);
}
function p(e, t, n) {
    let { requireExact: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (i ? n.username === e : n.username.startsWith(e)) && n.discriminator === (t ?? "0");
}
