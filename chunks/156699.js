r.d(n, {
    C: function () {
        return _;
    },
    u: function () {
        return g;
    }
});
var i = r(47120);
var a = r(149765),
    o = r(668781),
    s = r(434404),
    l = r(430824),
    u = r(745752),
    c = r(45966),
    d = r(637853),
    f = r(290511),
    p = r(981631),
    h = r(388032);
async function _(e, n) {
    return (
        null == e ||
        (await m(e, n, {
            removingView: !0,
            removingChat: !0
        }))
    );
}
async function m(e, n, r) {
    var i;
    let a = l.Z.getGuild(e);
    if (null == a) return !0;
    let o = null != a && (null === (i = a.features) || void 0 === i ? void 0 : i.has(p.oNc.GUILD_ONBOARDING));
    if (!o) return !0;
    o && c.Z.shouldFetchPrompts(e) && (await (0, u.eM)(e));
    let s = c.Z.getDefaultChannelIds(e),
        [h, _] = (0, d.d9)(e, s);
    if (!s.includes(n)) return !0;
    let m = r.removingView && _.length - 1 < f.md,
        g = (r.removingChat || r.removingView) && h.length - 1 < f.X;
    return !m && !g;
}
async function g(e, n, r) {
    let i = e.getGuildId();
    if (null == i) return !0;
    null != r && (n = a.hX(n, a.U_(r)));
    let l = e.permissionOverwrites[i],
        u = null != l ? a.hX(l.deny, a.U_(l.allow)) : a.vB(0),
        c = {
            removingView: a.e$(n, p.Plq.VIEW_CHANNEL) && !a.e$(u, p.Plq.VIEW_CHANNEL),
            removingChat: !1
        };
    return (
        e.isForumLikeChannel() ? (c.removingChat = a.e$(n, p.Plq.SEND_MESSAGES_IN_THREADS) && !a.e$(u, p.Plq.SEND_MESSAGES_IN_THREADS)) : (c.removingChat = a.e$(n, p.Plq.SEND_MESSAGES) && !a.e$(u, p.Plq.SEND_MESSAGES)),
        (!c.removingChat && !c.removingView) ||
            !!(await m(i, e.id, c)) ||
            (o.Z.show({
                title: h.intl.string(h.t.ut7sq6),
                body: h.intl.format(h.t['Zaz+ur'], {
                    onClick: () => {
                        o.Z.close(), s.Z.open(i, p.pNK.ONBOARDING);
                    }
                })
            }),
            !1)
    );
}
