"use strict";
n.d(t, { f: () => g, p: () => m });
var r = n(47167),
    i = n(508675),
    s = n(7584),
    a = n(863005),
    o = n(734057),
    l = n(808728),
    u = n(696451),
    d = n(317525),
    c = n(71393),
    _ = n(994500),
    f = n(287809),
    E = n(248465),
    h = n(661191),
    p = n(408018);
function m(e, t, n, p) {
    let { allowUsers: m = !0, allowRoles: g = !0 } = p ?? {};
    switch (e[0]) {
        case "@":
            return (function (e, t, n, r, i) {
                let [s, a] = e.slice(1).split("#", 2),
                    l = null != t ? c.A.getGuild(t) : null;
                if (i && null == a && null != l) {
                    for (let e of d.A.getSortedRoles(l.id))
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
                        .filter((e) => void 0 !== e && A(s, a, e));
                    if (1 === r.length) {
                        let e = r[0];
                        if (A(s, a, e, { requireExact: !0 }))
                            return { type: "userMention", userId: e.id, children: [{ text: "" }] };
                    }
                }
                return null;
            })(e, t, n, m, g);
        case ":":
            var I = e,
                T = t;
            let S = s.Ay.EMOJI_NAME_RE.exec(I);
            if (null == S) break;
            let y = S[1],
                N = i.Ay.getDisambiguatedEmojiContext(T).getCustomEmoji().get(y);
            return null != N
                ? {
                      type: "customEmoji",
                      emoji: {
                          emojiId: N.id,
                          name: "require_colons" in N && N.require_colons ? `:${N.name}:` : N.name,
                          animated: !0 === N.animated,
                          jumboable: !1,
                      },
                      children: [{ text: "" }],
                  }
                : null;
        case "#":
            let O;
            var R = e,
                v = t;
            if (null == v) break;
            O =
                R.length > 3 && '"' === R[1] && '"' === R[R.length - 1]
                    ? (0, r.LG)(R.slice(2, R.length - 1))
                    : R.slice(1);
            let C = l.Ay.getTextChannelNameDisambiguations(v);
            for (let e of h.default.keys(C))
                if (C[e].name === O) return { type: "channelMention", channelId: e, children: [{ text: "" }] };
            for (let e of E.L3)
                if (e !== l.I6) {
                    for (let { channel: t } of l.Ay.getChannels(v)[e])
                        if ((0, r.m1)(t, f.default, _.A) === O)
                            return { type: "channelMention", channelId: t.id, children: [{ text: "" }] };
                }
            let b = a.A.getActiveJoinedThreadsForGuild(v);
            for (let e of h.default.keys(b))
                for (let t of h.default.keys(b[e])) {
                    let { channel: n } = b[e][t];
                    if ((0, r.m1)(n, f.default, _.A) === O)
                        return { type: "channelMention", channelId: n.id, children: [{ text: "" }] };
                }
            break;
    }
    return null;
}
function g(e, t, n, r) {
    let i = m(e, t, n, r);
    return null == i ? null : (0, p.QR)(i);
}
function A(e, t, n) {
    let { requireExact: r = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (r ? n.username === e : n.username.startsWith(e)) && n.discriminator === (t ?? "0");
}
