n.d(t, { Z: () => _ }), n(47120);
var i = n(192379),
    r = n(399606),
    a = n(16084),
    s = n(881052),
    o = n(128069),
    l = n(228624),
    u = n(855775),
    c = n(55563),
    d = n(474936);
function f() {
    let [e, t] = i.useState({});
    return {
        previewErrorsById: e,
        setErrorById: i.useCallback(
            (e, n) => {
                t((t) => ({
                    ...t,
                    [e]: n
                }));
            },
            [t]
        )
    };
}
function _(e) {
    let { applicationId: t, skuIDs: n, currentPaymentSourceId: _, isGift: p } = e,
        h = i.useMemo(() => n.filter((e) => !d.YQ.includes(e)), [JSON.stringify(n)]),
        m = (0, r.e7)([c.Z], () => h.every((e) => !c.Z.isFetching(e) && null != c.Z.get(e))),
        { previewErrorsById: g, setErrorById: E } = f(),
        v = (0, r.cj)(
            [c.Z],
            () => {
                let e = {};
                for (let n of h) {
                    var t;
                    e[n] = null !== (t = c.Z.get(n)) && void 0 !== t ? t : void 0;
                }
                return e;
            },
            [h]
        ),
        y = (0, l.hv)('useSkus');
    i.useEffect(() => {
        for (let e of h) c.Z.isFetching(e) || null != c.Z.get(e) || (0, a.$N)(t, e, y);
    }, [t, h, y]);
    let I = (0, r.cj)(
        [u.Z],
        () => {
            let e = {};
            for (let n of h) {
                var t;
                e[n] = null !== (t = u.Z.getPricesForSku(n)) && void 0 !== t ? t : void 0;
            }
            return e;
        },
        [h]
    );
    return (
        i.useEffect(() => {
            for (let e of h)
                u.Z.isFetchingSKU(e) ||
                    (0, a.x2)(t, e, _, { isGift: p }).catch((t) => {
                        t instanceof s.HF && (t.code === o.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === o.SM.BILLING_BUNDLE_PARTIALLY_OWNED || t.code === o.SM.INVALID_BILLING_ADDRESS) && E(e, t);
                    });
        }, [t, h, _, p, E]),
        {
            hasFetchedSkus: m,
            skusById: v,
            skuPricePreviewsById: I,
            previewErrorsById: g
        }
    );
}
