n.d(t, {
    C: () => f,
    u: () => g,
}),
    n(388685);
var l = n(149765),
    i = n(668781),
    r = n(434404),
    u = n(430824),
    a = n(745752),
    o = n(45966),
    s = n(637853),
    d = n(290511),
    c = n(981631),
    E = n(388032);
async function f(e, t) {
    return (
        null == e ||
        (await N(e, t, {
            removingView: !0,
            removingChat: !0,
        }))
    );
}
async function N(e, t, n) {
    var l;
    let i = u.Z.getGuild(e);
    if (null == i) return !0;
    let r = null != i && (null == (l = i.features) ? void 0 : l.has(c.GuildFeatures.GUILD_ONBOARDING));
    if (!r) return !0;
    r && o.Z.shouldFetchPrompts(e) && (await (0, a.eM)(e));
    let E = o.Z.getDefaultChannelIds(e),
        [f] = (0, s.d9)(e, E);
    return !E.includes(t) || !((n.removingChat || n.removingView) && f.length - 1 < d.X);
}
async function g(e, t, n) {
    let u = e.getGuildId();
    if (null == u) return !0;
    null != n && (t = l.hX(t, l.U_(n)));
    let a = e.permissionOverwrites[u],
        o = null != a ? l.hX(a.deny, l.U_(a.allow)) : l.vB(0),
        s = {
            removingView: l.e$(t, c.Plq.VIEW_CHANNEL) && !l.e$(o, c.Plq.VIEW_CHANNEL),
            removingChat: !1,
        };
    return (
        e.isForumLikeChannel()
            ? (s.removingChat = l.e$(t, c.Plq.SEND_MESSAGES_IN_THREADS) && !l.e$(o, c.Plq.SEND_MESSAGES_IN_THREADS))
            : (s.removingChat = l.e$(t, c.Plq.SEND_MESSAGES) && !l.e$(o, c.Plq.SEND_MESSAGES)),
        (!s.removingChat && !s.removingView) ||
            !!(await N(u, e.id, s)) ||
            (i.Z.show({
                title: E.intl.string(E.t.ut7sq0),
                body: E.intl.format(E.t["Zaz+un"], {
                    onClick: () => {
                        i.Z.close(), r.Z.open(u, c.pNK.ONBOARDING);
                    },
                }),
            }),
            !1)
    );
}
