l.d(t, { A: () => s });
var a = l(64700),
    i = l(17928),
    n = l(733391),
    r = l(832163);
function s(e) {
    let { applicationId: t } = e,
        l = (0, i.bG)([r.A], () => (null != t ? r.A.getStorefrontDataForApplicationId(t) : void 0), [t]);
    return (
        a.useEffect(() => {
            null != t && (0, n.ap)(t, { eager: !1 });
        }, [t]),
        l
    );
}
