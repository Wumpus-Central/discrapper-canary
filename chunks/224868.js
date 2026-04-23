"use strict";
n.d(t, { f: () => g, p: () => m });
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
    E = n(408018);
function m(e, t, n, E) {
    let { allowUsers: m = !0, allowRoles: g = !0 } = E ?? {};
    switch (e[0]) {
        case "@":
            return (function (e, t, n, r, i) {
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
            let v;
            var C = e,
                O = t;
            if (null == O) break;
            v =
                C.length > 3 && '"' === C[1] && '"' === C[C.length - 1]
                    ? (0, r.LG)(C.slice(2, C.length - 1))
                    : C.slice(1);
            let R = l.Ay.getTextChannelNameDisambiguations(O);
            for (let e of h.default.keys(R))
                if (R[e].name === v) return { type: "channelMention", channelId: e, children: [{ text: "" }] };
            for (let e of p.L3)
                if (e !== l.I6) {
                    for (let { channel: t } of l.Ay.getChannels(O)[e])
                        if ((0, r.m1)(t, f.default, _.A) === v)
                            return { type: "channelMention", channelId: t.id, children: [{ text: "" }] };
                }
            let b = a.A.getActiveJoinedThreadsForGuild(O);
            for (let e of h.default.keys(b))
                for (let t of h.default.keys(b[e])) {
                    let { channel: n } = b[e][t];
                    if ((0, r.m1)(n, f.default, _.A) === v)
                        return { type: "channelMention", channelId: n.id, children: [{ text: "" }] };
                }
            break;
    }
    return null;
}
function g(e, t, n, r) {
    let i = m(e, t, n, r);
    return null == i ? null : (0, E.QR)(i);
}
function A(e, t, n) {
    let { requireExact: r = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (r ? n.username === e : n.username.startsWith(e)) && n.discriminator === (t ?? "0");
}
