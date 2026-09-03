t.d(l, { A: () => a });
var r = t(582128),
    n = t(17928),
    u = t(733391),
    o = t(832163);
function a(e) {
    let { applicationId: l } = e,
        t = (0, n.bG)([o.A], () => (null != l ? o.A.getStorefrontDataForApplicationId(l) : void 0), [l]);
    return (
        r.useEffect(() => {
            null != l && (0, u.ap)(l, { eager: !1 });
        }, [l]),
        t
    );
}
