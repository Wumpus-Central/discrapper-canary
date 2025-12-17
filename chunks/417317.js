t.d(n, { Z: () => r });
var l = t(473749),
    i = t(442837),
    a = t(411935),
    o = t(210218),
    s = t(699955);
function r(e) {
    let { guildId: n, location: t } = e,
        r = (0, s.cZ)({ location: t }),
        d = (0, i.e7)([o.Z], () => (null != n ? o.Z.getStorefrontData(n) : void 0), [n]);
    return (
        l.useEffect(() => {
            null != n && r && (0, a.YL)(n, !1);
        }, [n, d, r]),
        d
    );
}
