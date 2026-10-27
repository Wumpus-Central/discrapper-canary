n.d(t, { P: () => p });
var i = n(148494),
    r = n(5180),
    a = n(873298),
    s = n(567035),
    l = n(863005),
    o = n(734057),
    d = n(573163),
    c = n(935208),
    u = n(181079),
    _ = n(458294),
    E = n(232835),
    A = n(309010),
    h = n(967198),
    f = n(625494),
    I = n(652215);
let p = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
        let e = h.A.getGuildId();
        if (null == e) return;
        if ((0, r.ai)(e)) {
            if (
                !(function () {
                    let e = u.A.getFavoriteChannels(),
                        t = new Set();
                    for (let n of c.default.keys(e)) {
                        if (e[n].type === a.Ip.CATEGORY) continue;
                        let i = o.A.getChannel(n);
                        if (null == i) continue;
                        (i.isForumLikeChannel() || d.Ay.hasUnreadOrMentions(n)) && t.add(n);
                        let r = i.getGuildId();
                        if (!(null == r || i.isThread()))
                            for (let e in l.A.getActiveJoinedThreadsForParent(r, n))
                                d.Ay.hasUnreadOrMentions(e) && t.add(e);
                    }
                    return 0 !== t.size && ((0, s.q)([...t]), !0);
                })()
            )
                return;
        } else {
            if (!_.default.getGuildHasUnreadIgnoreMuted(e)) return;
            (0, s.A)([e]);
        }
        let t = A.Ay.getChannelId(e);
        null == t ||
            (E.A.getMessages(t).hasMoreAfter ? i.A.jumpToPresent(t, I.EMb) : f._.dispatch(I.jej.SCROLLTO_PRESENT));
    },
};
