r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(399606),
    o = r(16084),
    l = r(881052),
    u = r(128069),
    c = r(228624),
    d = r(855775),
    f = r(55563),
    _ = r(474936);
function h() {
    let [e, n] = a.useState({});
    return {
        previewErrorsById: e,
        setErrorById: a.useCallback(
            (e, r) => {
                n((n) => ({
                    ...n,
                    [e]: r
                }));
            },
            [n]
        )
    };
}
function p(e) {
    let { applicationId: n, skuIDs: r, currentPaymentSourceId: i, isGift: p } = e,
        m = a.useMemo(() => r.filter((e) => !_.YQ.includes(e)), [JSON.stringify(r)]),
        g = (0, s.e7)([f.Z], () => m.every((e) => !f.Z.isFetching(e) && null != f.Z.get(e))),
        { previewErrorsById: E, setErrorById: v } = h(),
        I = (0, s.cj)(
            [f.Z],
            () => {
                let e = {};
                for (let r of m) {
                    var n;
                    e[r] = null !== (n = f.Z.get(r)) && void 0 !== n ? n : void 0;
                }
                return e;
            },
            [m]
        ),
        T = (0, c.hv)('useSkus');
    a.useEffect(() => {
        for (let e of m) !f.Z.isFetching(e) && null == f.Z.get(e) && (0, o.$N)(n, e, T);
    }, [n, m, T]);
    let b = (0, s.cj)(
        [d.Z],
        () => {
            let e = {};
            for (let r of m) {
                var n;
                e[r] = null !== (n = d.Z.getPricesForSku(r)) && void 0 !== n ? n : void 0;
            }
            return e;
        },
        [m]
    );
    return (
        a.useEffect(() => {
            for (let e of m)
                !d.Z.isFetchingSKU(e) &&
                    (0, o.x2)(n, e, i, { isGift: p }).catch((n) => {
                        n instanceof l.HF && (n.code === u.SM.BILLING_BUNDLE_ALREADY_PURCHASED || n.code === u.SM.BILLING_BUNDLE_PARTIALLY_OWNED) && v(e, n);
                    });
        }, [n, m, i, p, v]),
        {
            hasFetchedSkus: g,
            skusById: I,
            skuPricePreviewsById: b,
            previewErrorsById: E
        }
    );
}
