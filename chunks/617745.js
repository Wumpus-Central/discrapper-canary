n.d(t, { q: () => T, t: () => x });
var l = n(627968),
    i = n(64700),
    a = n(364840),
    r = n(534514),
    s = n(834730),
    o = n(73825),
    u = n(323082),
    c = n(558620),
    d = n(94420),
    p = n(683433),
    m = n(36167),
    h = n(937008),
    A = n(156312),
    _ = n(166532),
    C = n(413869),
    E = n(814626),
    y = n(652215),
    f = n(788868),
    P = n(985018),
    S = n(647926);
let x = (e) => {
        let t,
            { step: n, onPurchaseComplete: a, onHandoffFailure: p } = e,
            { setSelectedSkuId: x, setSelectedPlanId: T } = (0, d.t4)((e) => ({
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                browserCheckoutState: N,
                browserCheckoutStateLoadId: g,
                browserCheckoutStateSkuId: I,
                browserCheckoutStatePlanId: v,
            } = (0, C.c)(),
            { contextMetadata: b } = (0, A.P5)(),
            R = (0, c.A)(),
            { isGift: M } = (0, h.Pv)(),
            [j, L] = i.useState(!1);
        switch (n) {
            case _.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = y.do8.GOOGLE_PAY;
                break;
            case _.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = y.do8.APPLE_PAY;
        }
        return (
            i.useEffect(() => {
                let e = setTimeout(() => {
                    j ||
                        (L(!0),
                        (0, u.Ze)(b.loadId),
                        (0, m.my)(
                            {
                                planId: R?.id ?? f.gD.PREMIUM_MONTH_TIER_2,
                                isGift: M,
                                loadId: b.loadId,
                                paymentMethodType: t,
                            },
                            p,
                        ));
                }, 1e3);
                return () => clearTimeout(e);
            }, [R, M, b, p, L, j, t]),
            i.useEffect(() => {
                null !== I && (f.oz.includes(I) && ((0, o.ur)(I), (0, u.hP)()), x(I)),
                    null !== v && T(v),
                    g === b.loadId && N === E.k.DONE && a();
            }, [x, T, N, g, I, v, b, a]),
            (0, l.jsxs)("div", {
                className: S.rf,
                children: [
                    (0, l.jsx)(r.D, { variant: "heading-xl/bold", children: P.intl.string(P.t.C4HYfy) }),
                    (0, l.jsx)(s.E, {
                        variant: "text-md/normal",
                        className: S.h_,
                        children: P.intl.string(P.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    T = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, l.jsx)(a.j, {
            children: (0, l.jsxs)("div", {
                className: S.kL,
                children: [
                    (0, l.jsx)(p.A, { onClick: n }),
                    (0, l.jsx)(p.F, { onClick: t, children: P.intl.string(P.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
