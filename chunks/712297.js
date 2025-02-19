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
function p(e) {
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
function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
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
                t((t) => h(p({}, t), { [e]: n }));
            },
            [t]
        )
    };
}
function g(e) {
    let { applicationId: t, skuIDs: n, currentPaymentSourceId: f, isGift: p } = e,
        _ = r.useMemo(() => n.filter((e) => !d.YQ.includes(e)), [JSON.stringify(n)]),
        h = (0, i.e7)([u.Z], () => _.every((e) => !u.Z.isFetching(e) && null != u.Z.get(e))),
        { previewErrorsById: g, setErrorById: E } = m(),
        v = (0, i.cj)(
            [u.Z],
            () => {
                let e = {};
                for (let n of _) {
                    var t;
                    e[n] = null !== (t = u.Z.get(n)) && void 0 !== t ? t : void 0;
                }
                return e;
            },
            [_]
        ),
        b = (0, l.hv)('useSkus');
    r.useEffect(() => {
        for (let e of _) u.Z.isFetching(e) || null != u.Z.get(e) || (0, o.$N)(t, e, b);
    }, [t, _, b]);
    let y = (0, i.cj)(
        [c.Z],
        () => {
            let e = {};
            for (let n of _) {
                var t;
                e[n] = null !== (t = c.Z.getPricesForSku(n)) && void 0 !== t ? t : void 0;
            }
            return e;
        },
        [_]
    );
    return (
        r.useEffect(() => {
            for (let e of _)
                c.Z.isFetchingSKU(e) ||
                    (0, o.x2)(t, e, f, { isGift: p }).catch((t) => {
                        t instanceof a.HF && (t.code === s.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === s.SM.BILLING_BUNDLE_PARTIALLY_OWNED || t.code === s.SM.INVALID_BILLING_ADDRESS) && E(e, t);
                    });
        }, [t, _, f, p, E]),
        {
            hasFetchedSkus: h,
            skusById: v,
            skuPricePreviewsById: y,
            previewErrorsById: g
        }
    );
}
