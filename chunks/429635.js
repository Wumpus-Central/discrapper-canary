a.d(e, { A: () => u });
var p = a(64700),
    r = a(17928),
    i = a(733391),
    n = a(832163);
function u(t) {
    let { applicationId: e } = t,
        a = (0, r.bG)([n.A], () => (null != e ? n.A.getStorefrontDataForApplicationId(e) : void 0), [e]);
    return (
        p.useEffect(() => {
            null != e && (0, i.ap)(e, { eager: !1 });
        }, [e]),
        a
    );
}
