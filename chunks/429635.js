t.d(l, { A: () => a });
var r = t(582128),
    n = t(17928),
    u = t(733391),
    o = t(832163);
function a(e) {
    let { applicationId: l, guildId: t } = e,
        a = (0, n.bG)(
            [o.A],
            () =>
                null != l ? o.A.getStorefrontDataForApplicationId(l) : null != t ? o.A.getStorefrontData(t) : void 0,
            [l, t],
        );
    return (
        r.useEffect(() => {
            null != l ? (0, u.ap)(l, { eager: !1 }) : null != t && (0, u.Rw)(t, { eager: !1 });
        }, [l, t]),
        a
    );
}
