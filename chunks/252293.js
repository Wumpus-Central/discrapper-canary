n.d(t, {
    A: () => g,
}),
    n(896048),
    n(457529);
var r = n(64700),
    i = n(635358),
    a = n(417597),
    o = n(830382),
    s = n(198982),
    l = n(136857),
    c = n(79387),
    u = n(67480),
    d = n(788868);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
                t((t) =>
                    h(p({}, t), {
                        [e]: n,
                    }),
                );
            },
            [t],
        ),
    };
}

function g(e) {
    let {
            applicationId: t,
            skuIDs: n,
            currentPaymentSourceId: f,
            isGift: p,
            excludeSKUPurchasePreviews: _ = !1,
            loadId: h,
        } = e,
        g = r.useMemo(() => n.filter((e) => !d.oz.includes(e)), [JSON.stringify(n)]),
        E = (0, a.bG)([u.A], () => g.every((e) => !u.A.isFetching(e) && null != u.A.get(e))),
        { previewErrorsById: y, setErrorById: b } = m(),
        O = (0, a.cf)([u.A], () => {
            let e = {};
            for (let n of g) {
                var t;
                e[n] = null != (t = u.A.get(n)) ? t : void 0;
            }
            return e;
        }, [g]);
    r.useEffect(() => {
        for (let e of g) u.A.isFetching(e) || null != u.A.get(e) || (0, o.EX)(t, e, i.g.VARIANTS_GROUP);
    }, [t, g]);
    let v = (0, a.cf)([c.A], () => {
            let e = {};
            for (let n of g) {
                var t;
                e[n] = null != (t = c.A.getPricesForSku(n)) ? t : void 0;
            }
            return e;
        }, [g]),
        A = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (!_) {
                for (let e of g)
                    if (!c.A.isFetchingSKU(e)) {
                        let n = A.current ? f : null;
                        (0, o.QX)(t, e, n, {
                            isGift: p,
                            loadId: h,
                        }).catch((t) => {
                            t instanceof s.Ey &&
                                (t.code === l.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
                                    t.code === l.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
                                    t.code === l.tG.INVALID_BILLING_ADDRESS) &&
                                b(e, t);
                        });
                    }
                A.current = !0;
            }
        }, [t, g, f, p, b, _, h]),
        {
            hasFetchedSkus: E,
            skusById: O,
            skuPricePreviewsById: v,
            previewErrorsById: y,
        }
    );
}
