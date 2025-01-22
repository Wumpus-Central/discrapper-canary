r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(399606),
    s = r(16084),
    l = r(881052),
    u = r(128069),
    c = r(228624),
    d = r(855775),
    f = r(55563),
    p = r(474936);
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
function _(e) {
    let { applicationId: n, skuIDs: r, currentPaymentSourceId: i, isGift: _ } = e,
        m = a.useMemo(() => r.filter((e) => !p.YQ.includes(e)), [JSON.stringify(r)]),
        g = (0, o.e7)([f.Z], () => m.every((e) => !f.Z.isFetching(e) && null != f.Z.get(e))),
        { previewErrorsById: E, setErrorById: v } = h(),
        y = (0, o.cj)(
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
        b = (0, c.hv)('useSkus');
    a.useEffect(() => {
        for (let e of m) !f.Z.isFetching(e) && null == f.Z.get(e) && (0, s.$N)(n, e, b);
    }, [n, m, b]);
    let I = (0, o.cj)(
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
                    (0, s.x2)(n, e, i, { isGift: _ }).catch((n) => {
                        n instanceof l.HF && (n.code === u.SM.BILLING_BUNDLE_ALREADY_PURCHASED || n.code === u.SM.BILLING_BUNDLE_PARTIALLY_OWNED) && v(e, n);
                    });
        }, [n, m, i, _, v]),
        {
            hasFetchedSkus: g,
            skusById: y,
            skuPricePreviewsById: I,
            previewErrorsById: E
        }
    );
}
