t.d(l, { A: () => a });
var e = t(582128),
    u = t(17928),
    r = t(733391),
    o = t(832163);
function a(n) {
    let { applicationId: l, guildId: t } = n,
        a = (0, u.bG)(
            [o.A],
            () =>
                null != l ? o.A.getStorefrontDataForApplicationId(l) : null != t ? o.A.getStorefrontData(t) : void 0,
            [l, t],
        );
    return (
        e.useEffect(() => {
            null != l ? (0, r.ap)(l, { eager: !1 }) : null != t && (0, r.Rw)(t, { eager: !1 });
        }, [l, t]),
        a
    );
}
