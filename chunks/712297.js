n.d(t, { Z: () => g }), n(47120), n(26686);
var r = n(192379),
    i = n(399606),
    o = n(16084),
    a = n(881052),
    s = n(128069),
    l = n(228624),
    c = n(855775),
    u = n(55563),
    d = n(474936);
function f(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
                t((t) => h(_({}, t), { [e]: n }));
            },
            [t]
        )
    };
}
function g(e) {
    let { applicationId: t, skuIDs: n, currentPaymentSourceId: f, isGift: _ } = e,
        p = r.useMemo(() => n.filter((e) => !d.YQ.includes(e)), [JSON.stringify(n)]),
        h = (0, i.e7)([u.Z], () => p.every((e) => !u.Z.isFetching(e) && null != u.Z.get(e))),
        { previewErrorsById: g, setErrorById: E } = m(),
        b = (0, i.cj)(
            [u.Z],
            () => {
                let e = {};
                for (let n of p) {
                    var t;
                    e[n] = null != (t = u.Z.get(n)) ? t : void 0;
                }
                return e;
            },
            [p]
        ),
        y = (0, l.hv)('useSkus');
    r.useEffect(() => {
        for (let e of p) u.Z.isFetching(e) || null != u.Z.get(e) || (0, o.$N)(t, e, y);
    }, [t, p, y]);
    let v = (0, i.cj)(
        [c.Z],
        () => {
            let e = {};
            for (let n of p) {
                var t;
                e[n] = null != (t = c.Z.getPricesForSku(n)) ? t : void 0;
            }
            return e;
        },
        [p]
    );
    return (
        r.useEffect(() => {
            for (let e of p)
                c.Z.isFetchingSKU(e) ||
                    (0, o.x2)(t, e, f, { isGift: _ }).catch((t) => {
                        t instanceof a.HF && (t.code === s.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === s.SM.BILLING_BUNDLE_PARTIALLY_OWNED || t.code === s.SM.INVALID_BILLING_ADDRESS) && E(e, t);
                    });
        }, [t, p, f, _, E]),
        {
            hasFetchedSkus: h,
            skusById: b,
            skuPricePreviewsById: v,
            previewErrorsById: g
        }
    );
}
