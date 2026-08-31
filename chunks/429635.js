l.d(t, { A: () => s });
var n = l(582128),
    i = l(17928),
    a = l(733391),
    r = l(832163);
function s(e) {
    let { applicationId: t } = e,
        l = (0, i.bG)([r.A], () => (null != t ? r.A.getStorefrontDataForApplicationId(t) : void 0), [t]);
    return (
        n.useEffect(() => {
            null != t && (0, a.ap)(t, { eager: !1 });
        }, [t]),
        l
    );
}
