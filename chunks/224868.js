"use strict";
n.d(t, { f: () => S, p: () => g });
var i = n(47167),
    r = n(236285),
    a = n(7584),
    s = n(863005),
    l = n(734057),
    o = n(808728),
    d = n(696451),
    c = n(317525),
    u = n(71393),
    _ = n(576705),
    E = n(994500),
    A = n(287809),
    h = n(802842),
    I = n(690521),
    f = n(935208),
    p = n(408018),
    T = n(652215),
    m = n(307731);
function g(e, t, n, p) {
    let { allowUsers: g = !0, allowRoles: S = !0 } = p ?? {};
    switch (e[0]) {
        case "@":
            return (function (e, t, n, i, r) {
                let [a, s] = e.slice(1).split("#", 2),
                    o = null != t ? u.A.getGuild(t) : null;
                if (r && null == s && null != o) {
                    for (let e of c.A.getSortedRoles(o.id))
                        if (a === e.name) return { type: "roleMention", roleId: e.id, children: [{ text: "" }] };
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
                        .filter((e) => void 0 !== e && N(a, s, e));
                    if (1 === i.length) {
                        let e = i[0];
                        if (N(a, s, e, { requireExact: !0 }))
                            return { type: "userMention", userId: e.id, children: [{ text: "" }] };
                    }
                }
                return null;
            })(e, t, n, g, S);
        case ":":
            var C = e,
                O = t,
                R = n;
            let L = a.Ay.EMOJI_NAME_RE.exec(C);
            if (null == L) break;
            let y = L[1],
                D = r.Ay.getDisambiguatedEmojiContext(O).getCustomEmoji().get(y),
                v = null != R ? l.A.getChannel(R) : null;
            return null == D || I.Ay.isEmojiFiltered({ emoji: D, channel: v, intention: m.EmojiIntention.CHAT })
                ? null
                : {
                      type: "customEmoji",
                      emoji: {
                          emojiId: D.id,
                          name: "require_colons" in D && D.require_colons ? `:${D.name}:` : D.name,
                          animated: !0 === D.animated,
                          jumboable: !1,
                      },
                      children: [{ text: "" }],
                  };
        case "#":
            let b;
            var M = e,
                P = t;
            if (null == P) break;
            b =
                M.length > 3 && '"' === M[1] && '"' === M[M.length - 1]
                    ? (0, i.LG)(M.slice(2, M.length - 1))
                    : M.slice(1);
            let U = o.Ay.getTextChannelNameDisambiguations(P);
            for (let e of f.default.keys(U))
                if (U[e].name === b) return { type: "channelMention", channelId: e, children: [{ text: "" }] };
            for (let e of h.L3)
                if (e !== o.I6) {
                    for (let { channel: t } of o.Ay.getChannels(P)[e])
                        if ((0, i.m1)(t, A.default, E.A) === b) {
                            if (t.isCategory() && !_.A.can(T.xBc.VIEW_CHANNEL, t)) continue;
                            return { type: "channelMention", channelId: t.id, children: [{ text: "" }] };
                        }
                }
            let w = s.A.getActiveJoinedThreadsForGuild(P);
            for (let e of f.default.keys(w))
                for (let t of f.default.keys(w[e])) {
                    let { channel: n } = w[e][t];
                    if ((0, i.m1)(n, A.default, E.A) === b)
                        return { type: "channelMention", channelId: n.id, children: [{ text: "" }] };
                }
            break;
    }
    return null;
}
function S(e, t, n, i) {
    let r = g(e, t, n, i);
    return null == r ? null : (0, p.QR)(r);
}
function N(e, t, n) {
    let { requireExact: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (i ? n.username === e : n.username.startsWith(e)) && n.discriminator === (t ?? "0");
}
