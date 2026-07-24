l.d(t, { A: () => r });
var i = l(64700),
    a = l(17928),
    n = l(733391),
    s = l(832163);
function r(e) {
    let { applicationId: t } = e,
        l = (0, a.bG)([s.A], () => (null != t ? s.A.getStorefrontDataForApplicationId(t) : void 0), [t]);
    return (
        i.useEffect(() => {
            null != t && (0, n.ap)(t, { eager: !1 });
        }, [t]),
        l
    );
}
