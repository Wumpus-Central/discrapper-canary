l.d(t, { A: () => s });
var i = l(64700),
    n = l(17928),
    a = l(733391),
    r = l(832163);
function s(e) {
    let { applicationId: t } = e,
        l = (0, n.bG)([r.A], () => (null != t ? r.A.getStorefrontDataForApplicationId(t) : void 0), [t]);
    return (
        i.useEffect(() => {
            null != t && (0, a.ap)(t, { eager: !1 });
        }, [t]),
        l
    );
}
