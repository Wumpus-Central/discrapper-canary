n.d(t, {
    V: () => u,
    m: () => c
});
var i = n(399606),
    r = n(592125),
    a = n(699516),
    s = n(594174),
    o = n(247206),
    l = n(294602);
let u = (e, t) => {
        let { explicitContentGuilds: n, explicitContentFriendDm: u, explicitContentNonFriendDm: c } = (0, l.B)(),
            d = (0, i.e7)([a.Z], () => a.Z.getFriendIDs().includes(t)),
            f = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            _ = (0, i.e7)([r.Z], () => {
                let t = r.Z.getChannel(e);
                return null != t && t.isPrivate();
            });
        return null != f && f.id !== t && (_ && d ? (0, o.vx)(u) : _ ? (0, o.vx)(c) : (0, o.vx)(n));
    },
    c = () => {
        let { explicitContentGuilds: e } = (0, l.B)();
        return null != (0, i.e7)([s.default], () => s.default.getCurrentUser()) && (0, o.vx)(e);
    };
