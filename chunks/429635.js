t.d(l, { A: () => r });
var n = t(64700),
    s = t(311907),
    a = t(733391),
    i = t(832163),
    d = t(916023);
function r(e) {
    let { guildId: l, location: t } = e,
        r = (0, d.kt)({ location: t }),
        o = (0, s.bG)([i.A], () => (null != l ? i.A.getStorefrontData(l) : void 0), [l]);
    return (
        n.useEffect(() => {
            null != l && r && (0, a.Rw)(l, { eager: !1 });
        }, [l, o, r]),
        o
    );
}
