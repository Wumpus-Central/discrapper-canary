n.d(t, {
    V: () => c,
    m: () => u
});
var r = n(399606),
    i = n(592125),
    o = n(699516),
    a = n(594174),
    s = n(247206),
    l = n(294602);
let c = (e, t) => {
        let { explicitContentGuilds: n, explicitContentFriendDm: c, explicitContentNonFriendDm: u } = (0, l.B)(),
            d = (0, r.e7)([o.Z], () => o.Z.getFriendIDs().includes(t)),
            f = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
            _ = (0, r.e7)([i.Z], () => {
                let t = i.Z.getChannel(e);
                return null != t && t.isPrivate();
            });
        return null != f && f.id !== t && (_ && d ? (0, s.vx)(c) : _ ? (0, s.vx)(u) : (0, s.vx)(n));
    },
    u = () => {
        let { explicitContentGuilds: e } = (0, l.B)();
        return null != (0, r.e7)([a.default], () => a.default.getCurrentUser()) && (0, s.vx)(e);
    };
