n.d(t, {
    C: () => _,
    u: () => h
}),
    n(47120);
var i = n(149765),
    r = n(668781),
    a = n(434404),
    s = n(430824),
    o = n(745752),
    l = n(45966),
    u = n(637853),
    c = n(290511),
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
    var i;
    let r = s.Z.getGuild(e);
    if (null == r) return !0;
    let a = null != r && (null === (i = r.features) || void 0 === i ? void 0 : i.has(d.oNc.GUILD_ONBOARDING));
    if (!a) return !0;
    a && l.Z.shouldFetchPrompts(e) && (await (0, o.eM)(e));
    let f = l.Z.getDefaultChannelIds(e),
        [_, p] = (0, u.d9)(e, f);
    if (!f.includes(t)) return !0;
    let h = n.removingView && p.length - 1 < c.md,
        m = (n.removingChat || n.removingView) && _.length - 1 < c.X;
    return !h && !m;
}
async function h(e, t, n) {
    let s = e.getGuildId();
    if (null == s) return !0;
    null != n && (t = i.hX(t, i.U_(n)));
    let o = e.permissionOverwrites[s],
        l = null != o ? i.hX(o.deny, i.U_(o.allow)) : i.vB(0),
        u = {
            removingView: i.e$(t, d.Plq.VIEW_CHANNEL) && !i.e$(l, d.Plq.VIEW_CHANNEL),
            removingChat: !1
        };
    return (
        e.isForumLikeChannel() ? (u.removingChat = i.e$(t, d.Plq.SEND_MESSAGES_IN_THREADS) && !i.e$(l, d.Plq.SEND_MESSAGES_IN_THREADS)) : (u.removingChat = i.e$(t, d.Plq.SEND_MESSAGES) && !i.e$(l, d.Plq.SEND_MESSAGES)),
        (!u.removingChat && !u.removingView) ||
            !!(await p(s, e.id, u)) ||
            (r.Z.show({
                title: f.intl.string(f.t.ut7sq6),
                body: f.intl.format(f.t['Zaz+ur'], {
                    onClick: () => {
                        r.Z.close(), a.Z.open(s, d.pNK.ONBOARDING);
                    }
                })
            }),
            !1)
    );
}
