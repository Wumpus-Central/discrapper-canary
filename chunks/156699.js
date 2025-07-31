(n.d(t, {
    C: () => E,
    u: () => N
}),
    n(388685));
var r = n(149765),
    i = n(668781),
    l = n(434404),
    u = n(430824),
    a = n(745752),
    o = n(45966),
    s = n(637853),
    c = n(290511),
    d = n(981631),
    f = n(388032);
async function E(e, t) {
    return (
        null == e ||
        (await S(e, t, {
            removingView: !0,
            removingChat: !0
        }))
    );
}
async function S(e, t, n) {
    var r;
    let i = u.Z.getGuild(e);
    if (null == i) return !0;
    let l = null != i && (null == (r = i.features) ? void 0 : r.has(d.oNc.GUILD_ONBOARDING));
    if (!l) return !0;
    l && o.Z.shouldFetchPrompts(e) && (await (0, a.eM)(e));
    let f = o.Z.getDefaultChannelIds(e),
        [E, S] = (0, s.d9)(e, f);
    if (!f.includes(t)) return !0;
    let N = n.removingView && S.length - 1 < c.md,
        g = (n.removingChat || n.removingView) && E.length - 1 < c.X;
    return !N && !g;
}
async function N(e, t, n) {
    let u = e.getGuildId();
    if (null == u) return !0;
    null != n && (t = r.hX(t, r.U_(n)));
    let a = e.permissionOverwrites[u],
        o = null != a ? r.hX(a.deny, r.U_(a.allow)) : r.vB(0),
        s = {
            removingView: r.e$(t, d.Plq.VIEW_CHANNEL) && !r.e$(o, d.Plq.VIEW_CHANNEL),
            removingChat: !1
        };
    return (
        e.isForumLikeChannel() ? (s.removingChat = r.e$(t, d.Plq.SEND_MESSAGES_IN_THREADS) && !r.e$(o, d.Plq.SEND_MESSAGES_IN_THREADS)) : (s.removingChat = r.e$(t, d.Plq.SEND_MESSAGES) && !r.e$(o, d.Plq.SEND_MESSAGES)),
        (!s.removingChat && !s.removingView) ||
            !!(await S(u, e.id, s)) ||
            (i.Z.show({
                title: f.intl.string(f.t.ut7sq6),
                body: f.intl.format(f.t['Zaz+ur'], {
                    onClick: () => {
                        (i.Z.close(), l.Z.open(u, d.pNK.ONBOARDING));
                    }
                })
            }),
            !1)
    );
}
