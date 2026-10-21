n.d(t, { P: () => I });
var i = n(148494),
    l = n(5180),
    r = n(873298),
    s = n(567035),
    a = n(863005),
    o = n(734057),
    d = n(573163),
    c = n(935208),
    u = n(181079),
    A = n(458294),
    E = n(232835),
    h = n(309010),
    C = n(967198),
    _ = n(625494),
    g = n(652215);
let I = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
        let e = C.A.getGuildId();
        if (null == e) return;
        if ((0, l.ai)(e)) {
            if (
                !(function () {
                    let e = u.A.getFavoriteChannels(),
                        t = new Set();
                    for (let n of c.default.keys(e)) {
                        if (e[n].type === r.Ip.CATEGORY) continue;
                        let i = o.A.getChannel(n);
                        if (null == i) continue;
                        (i.isForumLikeChannel() || d.Ay.hasUnreadOrMentions(n)) && t.add(n);
                        let l = i.getGuildId();
                        if (!(null == l || i.isThread()))
                            for (let e in a.A.getActiveJoinedThreadsForParent(l, n))
                                d.Ay.hasUnreadOrMentions(e) && t.add(e);
                    }
                    return 0 !== t.size && ((0, s.q)([...t]), !0);
                })()
            )
                return;
        } else {
            if (!A.default.getGuildHasUnreadIgnoreMuted(e)) return;
            (0, s.A)([e]);
        }
        let t = h.Ay.getChannelId(e);
        null == t ||
            (E.A.getMessages(t).hasMoreAfter ? i.A.jumpToPresent(t, g.EMb) : _._.dispatch(g.jej.SCROLLTO_PRESENT));
    },
};
