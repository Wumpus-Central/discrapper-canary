n.d(t, { Z: () => l });
var r = n(473749),
    i = n(442837),
    a = n(411935),
    o = n(210218),
    s = n(699955);
function l(e) {
    let { guildId: t, location: n } = e,
        l = (0, s.cZ)({ location: n }),
        c = (0, i.e7)([o.Z], () => (null != t ? o.Z.getStorefrontData(t) : void 0), [t]);
    return (
        r.useEffect(() => {
            null != t && l && (0, a.YL)(t, !1);
        }, [t, c, l]),
        c
    );
}
