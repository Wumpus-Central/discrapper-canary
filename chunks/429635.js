a.d(n, { A: () => i });
var t = a(64700),
    r = a(17928),
    d = a(733391),
    l = a(832163);
function i(e) {
    let { applicationId: n } = e,
        a = (0, r.bG)([l.A], () => (null != n ? l.A.getStorefrontDataForApplicationId(n) : void 0), [n]);
    return (
        t.useEffect(() => {
            null != n && (0, d.ap)(n, { eager: !1 });
        }, [n]),
        a
    );
}
