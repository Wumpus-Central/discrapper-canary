"use strict";
n.d(t, { f: () => S, p: () => T });
var i = n(47167),
    r = n(159273),
    s = n(7584),
    a = n(695633),
    o = n(734057),
    l = n(808728),
    u = n(696451),
    c = n(317525),
    d = n(71393),
    _ = n(576705),
    f = n(994500),
    h = n(287809),
    p = n(768038),
    E = n(690521),
    m = n(935208),
    g = n(408018),
    A = n(652215),
    I = n(307731);
function T(e, t, n, g) {
    let { allowUsers: T = !0, allowRoles: S = !0 } = g ?? {};
    switch (e[0]) {
        case "@":
            return (function (e, t, n, i, r) {
                let [s, a] = e.slice(1).split("#", 2),
                    l = null != t ? d.A.getGuild(t) : null;
                if (r && null == a && null != l) {
                    for (let e of c.A.getSortedRoles(l.id))
                        if (s === e.name) return { type: "roleMention", roleId: e.id, children: [{ text: "" }] };
                }
                if (i) {
                    let e = null != n ? o.A.getChannel(n) : null;
                    if (null == e) return null;
                    let i = (
                        e.isPrivate()
                            ? e.recipients
                            : u.Ay.getMembers(t).map((e) => {
                                  let { userId: t } = e;
                                  return t;
                              })
                    )
                        .map((e) => h.default.getUser(e))
                        .filter((e) => void 0 !== e && N(s, a, e));
                    if (1 === i.length) {
                        let e = i[0];
                        if (N(s, a, e, { requireExact: !0 }))
                            return { type: "userMention", userId: e.id, children: [{ text: "" }] };
                    }
                }
                return null;
            })(e, t, n, T, S);
        case ":":
            var y = e,
                C = t,
                v = n;
            let O = s.Ay.EMOJI_NAME_RE.exec(y);
            if (null == O) break;
            let R = O[1],
                b = r.Ay.getDisambiguatedEmojiContext(C).getCustomEmoji().get(R),
                D = null != v ? o.A.getChannel(v) : null;
            return null == b || E.Ay.isEmojiFiltered({ emoji: b, channel: D, intention: I.EmojiIntention.CHAT })
                ? null
                : {
                      type: "customEmoji",
                      emoji: {
                          emojiId: b.id,
                          name: "require_colons" in b && b.require_colons ? `:${b.name}:` : b.name,
                          animated: !0 === b.animated,
                          jumboable: !1,
                      },
                      children: [{ text: "" }],
                  };
        case "#":
            let L;
            var w = e,
                M = t;
            if (null == M) break;
            L =
                w.length > 3 && '"' === w[1] && '"' === w[w.length - 1]
                    ? (0, i.LG)(w.slice(2, w.length - 1))
                    : w.slice(1);
            let P = l.Ay.getTextChannelNameDisambiguations(M);
            for (let e of m.default.keys(P))
                if (P[e].name === L) return { type: "channelMention", channelId: e, children: [{ text: "" }] };
            for (let e of p.L3)
                if (e !== l.I6) {
                    for (let { channel: t } of l.Ay.getChannels(M)[e])
                        if ((0, i.m1)(t, h.default, f.A) === L) {
                            if (t.isCategory() && !_.A.can(A.xBc.VIEW_CHANNEL, t)) continue;
                            return { type: "channelMention", channelId: t.id, children: [{ text: "" }] };
                        }
                }
            let x = a.A.getActiveJoinedThreadsForGuild(M);
            for (let e of m.default.keys(x))
                for (let t of m.default.keys(x[e])) {
                    let { channel: n } = x[e][t];
                    if ((0, i.m1)(n, h.default, f.A) === L)
                        return { type: "channelMention", channelId: n.id, children: [{ text: "" }] };
                }
            break;
    }
    return null;
}
function S(e, t, n, i) {
    let r = T(e, t, n, i);
    return null == r ? null : (0, g.QR)(r);
}
function N(e, t, n) {
    let { requireExact: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (i ? n.username === e : n.username.startsWith(e)) && n.discriminator === (t ?? "0");
}
