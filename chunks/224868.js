"use strict";
n.d(t, { f: () => I, p: () => A });
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
    E = n(935208),
    m = n(408018),
    g = n(652215);
function A(e, t, n, m) {
    let { allowUsers: A = !0, allowRoles: I = !0 } = m ?? {};
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
                        .filter((e) => void 0 !== e && T(s, a, e));
                    if (1 === i.length) {
                        let e = i[0];
                        if (T(s, a, e, { requireExact: !0 }))
                            return { type: "userMention", userId: e.id, children: [{ text: "" }] };
                    }
                }
                return null;
            })(e, t, n, A, I);
        case ":":
            var S = e,
                N = t;
            let y = s.Ay.EMOJI_NAME_RE.exec(S);
            if (null == y) break;
            let C = y[1],
                v = r.Ay.getDisambiguatedEmojiContext(N).getCustomEmoji().get(C);
            return null != v
                ? {
                      type: "customEmoji",
                      emoji: {
                          emojiId: v.id,
                          name: "require_colons" in v && v.require_colons ? `:${v.name}:` : v.name,
                          animated: !0 === v.animated,
                          jumboable: !1,
                      },
                      children: [{ text: "" }],
                  }
                : null;
        case "#":
            let O;
            var R = e,
                b = t;
            if (null == b) break;
            O =
                R.length > 3 && '"' === R[1] && '"' === R[R.length - 1]
                    ? (0, i.LG)(R.slice(2, R.length - 1))
                    : R.slice(1);
            let D = l.Ay.getTextChannelNameDisambiguations(b);
            for (let e of E.default.keys(D))
                if (D[e].name === O) return { type: "channelMention", channelId: e, children: [{ text: "" }] };
            for (let e of p.L3)
                if (e !== l.I6) {
                    for (let { channel: t } of l.Ay.getChannels(b)[e])
                        if ((0, i.m1)(t, h.default, f.A) === O) {
                            if (t.isCategory() && !_.A.can(g.xBc.VIEW_CHANNEL, t)) continue;
                            return { type: "channelMention", channelId: t.id, children: [{ text: "" }] };
                        }
                }
            let L = a.A.getActiveJoinedThreadsForGuild(b);
            for (let e of E.default.keys(L))
                for (let t of E.default.keys(L[e])) {
                    let { channel: n } = L[e][t];
                    if ((0, i.m1)(n, h.default, f.A) === O)
                        return { type: "channelMention", channelId: n.id, children: [{ text: "" }] };
                }
            break;
    }
    return null;
}
function I(e, t, n, i) {
    let r = A(e, t, n, i);
    return null == r ? null : (0, m.QR)(r);
}
function T(e, t, n) {
    let { requireExact: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (i ? n.username === e : n.username.startsWith(e)) && n.discriminator === (t ?? "0");
}
