n.d(t, {
    C: () => _,
    u: () => h
}),
    n(47120);
var r = n(149765),
    i = n(668781),
    o = n(434404),
    a = n(430824),
    s = n(745752),
    l = n(45966),
    c = n(637853),
    u = n(290511),
    d = n(981631),
    f = n(388032);
async function _(e, t) {
    return (
        null == e ||
        (await p(e, t, {
            removingView: !0,
            removingChat: !0
        }))
    );
}
async function p(e, t, n) {
    var r;
    let i = a.Z.getGuild(e);
    if (null == i) return !0;
    let o = null != i && (null == (r = i.features) ? void 0 : r.has(d.oNc.GUILD_ONBOARDING));
    if (!o) return !0;
    o && l.Z.shouldFetchPrompts(e) && (await (0, s.eM)(e));
    let f = l.Z.getDefaultChannelIds(e),
        [_, p] = (0, c.d9)(e, f);
    if (!f.includes(t)) return !0;
    let h = n.removingView && p.length - 1 < u.md,
        m = (n.removingChat || n.removingView) && _.length - 1 < u.X;
    return !h && !m;
}
async function h(e, t, n) {
    let a = e.getGuildId();
    if (null == a) return !0;
    null != n && (t = r.hX(t, r.U_(n)));
    let s = e.permissionOverwrites[a],
        l = null != s ? r.hX(s.deny, r.U_(s.allow)) : r.vB(0),
        c = {
            removingView: r.e$(t, d.Plq.VIEW_CHANNEL) && !r.e$(l, d.Plq.VIEW_CHANNEL),
            removingChat: !1
        };
    return (
        e.isForumLikeChannel() ? (c.removingChat = r.e$(t, d.Plq.SEND_MESSAGES_IN_THREADS) && !r.e$(l, d.Plq.SEND_MESSAGES_IN_THREADS)) : (c.removingChat = r.e$(t, d.Plq.SEND_MESSAGES) && !r.e$(l, d.Plq.SEND_MESSAGES)),
        (!c.removingChat && !c.removingView) ||
            !!(await p(a, e.id, c)) ||
            (i.Z.show({
                title: f.NW.string(f.t.ut7sq6),
                body: f.NW.format(f.t['Zaz+ur'], {
                    onClick: () => {
                        i.Z.close(), o.Z.open(a, d.pNK.ONBOARDING);
                    }
                })
            }),
            !1)
    );
}
