(n.d(t, { Z: () => g }), n(388685), n(49124));
var r = n(73800),
    i = n(399606),
    a = n(16084),
    o = n(881052),
    s = n(128069),
    l = n(228624),
    c = n(855775),
    u = n(55563),
    d = n(474936);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m() {
    let [e, t] = r.useState({});
    return {
        previewErrorsById: e,
        setErrorById: r.useCallback(
            (e, n) => {
                t((t) => h(f({}, t), { [e]: n }));
            },
            [t]
        )
    };
}
function g(e) {
    let { applicationId: t, skuIDs: n, currentPaymentSourceId: _, isGift: f, excludeSKUPurchasePreviews: p = !1 } = e,
        h = r.useMemo(() => n.filter((e) => !d.YQ.includes(e)), [JSON.stringify(n)]),
        g = (0, i.e7)([u.Z], () => h.every((e) => !u.Z.isFetching(e) && null != u.Z.get(e))),
        { previewErrorsById: E, setErrorById: b } = m(),
        y = (0, i.cj)(
            [u.Z],
            () => {
                let e = {};
                for (let n of h) {
                    var t;
                    e[n] = null != (t = u.Z.get(n)) ? t : void 0;
                }
                return e;
            },
            [h]
        ),
        O = (0, l.hv)('useSkus');
    r.useEffect(() => {
        for (let e of h) u.Z.isFetching(e) || null != u.Z.get(e) || (0, a.$N)(t, e, O);
    }, [t, h, O]);
    let v = (0, i.cj)(
        [c.Z],
        () => {
            let e = {};
            for (let n of h) {
                var t;
                e[n] = null != (t = c.Z.getPricesForSku(n)) ? t : void 0;
            }
            return e;
        },
        [h]
    );
    return (
        r.useEffect(() => {
            if (!p)
                for (let e of h)
                    c.Z.isFetchingSKU(e) ||
                        (0, a.x2)(t, e, _, { isGift: f }).catch((t) => {
                            t instanceof o.HF && (t.code === s.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === s.SM.BILLING_BUNDLE_PARTIALLY_OWNED || t.code === s.SM.INVALID_BILLING_ADDRESS) && b(e, t);
                        });
        }, [t, h, _, f, b, p]),
        {
            hasFetchedSkus: g,
            skusById: y,
            skuPricePreviewsById: v,
            previewErrorsById: E
        }
    );
}
