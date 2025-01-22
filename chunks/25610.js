r.d(n, {
    V: function () {
        return d;
    },
    m: function () {
        return f;
    }
});
var i = r(399606),
    a = r(592125),
    o = r(699516),
    s = r(594174),
    l = r(651530),
    u = r(247206),
    c = r(294602);
let d = (e, n) => {
        let r = (0, l.yh)(),
            { explicitContentGuilds: d, explicitContentFriendDm: f, explicitContentNonFriendDm: p } = (0, c.B)(),
            h = (0, i.e7)([o.Z], () => o.Z.getFriendIDs().includes(n)),
            _ = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            m = (0, i.e7)([a.Z], () => {
                let n = a.Z.getChannel(e);
                return null != n && n.isPrivate();
            });
        return !!r && null != _ && _.id !== n && (m && h ? (0, u.vx)(f) : m ? (0, u.vx)(p) : (0, u.vx)(d));
    },
    f = () => {
        let e = (0, l.yh)(),
            { explicitContentGuilds: n } = (0, c.B)(),
            r = (0, i.e7)([s.default], () => s.default.getCurrentUser());
        return !!e && null != r && (0, u.vx)(n);
    };
