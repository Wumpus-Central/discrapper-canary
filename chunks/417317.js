n.d(t, { Z: () => c });
var i = n(473749),
    r = n(442837),
    l = n(430824),
    a = n(411935),
    o = n(210218),
    s = n(699955);
function c(e) {
    let { guildId: t, location: n } = e,
        c = (0, s.cZ)({ location: n }),
        u = (0, r.e7)([l.Z], () => l.Z.getGuild(null != t ? t : null), [t]),
        d = (0, r.e7)([o.Z], () => (null != u ? o.Z.getStorefrontData(u.id) : void 0));
    return (
        i.useEffect(() => {
            (null == u ? void 0 : u.id) != null && c && (0, a.YL)(null == u ? void 0 : u.id, !1);
        }, [null == u ? void 0 : u.id, d, c]),
        d
    );
}
