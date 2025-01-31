n.d(t, {
    V: () => c,
    m: () => d
});
var i = n(399606),
    r = n(592125),
    a = n(699516),
    s = n(594174),
    o = n(651530),
    l = n(247206),
    u = n(294602);
let c = (e, t) => {
        let n = (0, o.yh)(),
            { explicitContentGuilds: c, explicitContentFriendDm: d, explicitContentNonFriendDm: f } = (0, u.B)(),
            _ = (0, i.e7)([a.Z], () => a.Z.getFriendIDs().includes(t)),
            p = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            h = (0, i.e7)([r.Z], () => {
                let t = r.Z.getChannel(e);
                return null != t && t.isPrivate();
            });
        return !!n && null != p && p.id !== t && (h && _ ? (0, l.vx)(d) : h ? (0, l.vx)(f) : (0, l.vx)(c));
    },
    d = () => {
        let e = (0, o.yh)(),
            { explicitContentGuilds: t } = (0, u.B)(),
            n = (0, i.e7)([s.default], () => s.default.getCurrentUser());
        return !!e && null != n && (0, l.vx)(t);
    };
