n.d(t, {
    V: () => u,
    m: () => d
});
var r = n(399606),
    i = n(592125),
    o = n(699516),
    a = n(594174),
    s = n(470734),
    l = n(721360),
    c = n(294602);
let u = (e, t) => {
        let { explicitContentGuilds: n, explicitContentFriendDm: u, explicitContentNonFriendDm: d } = (0, c.B)(),
            { goreContentGuilds: f, goreContentFriendDm: _, goreContentNonFriendDm: p } = (0, c.K)(),
            h = (0, s.pn)('useShouldRedactExplicitContent'),
            m = (0, r.e7)([o.Z], () => o.Z.getFriendIDs().includes(t)),
            g = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
            E = (0, r.e7)([i.Z], () => {
                let t = i.Z.getChannel(e);
                return null != t && t.isPrivate();
            });
        return null != g && g.id !== t && (E && m ? (0, l.v)(u) || (h && (0, l.v)(_)) : E ? (0, l.v)(d) || (h && (0, l.v)(p)) : (0, l.v)(n) || (h && (0, l.v)(f)));
    },
    d = () => {
        let { explicitContentGuilds: e } = (0, c.B)(),
            { goreContentGuilds: t } = (0, c.K)(),
            n = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
            i = (0, s.pn)('useShouldRedactExplicitContentForForum');
        return null != n && ((0, l.v)(e) || (i && (0, l.v)(t)));
    };
