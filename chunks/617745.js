"use strict";
n.d(t, { q: () => y, t: () => T });
var r = n(627968),
    i = n(64700),
    a = n(732955),
    s = n(397927),
    o = n(384904),
    l = n(73825),
    u = n(683433),
    c = n(36167),
    d = n(937008),
    _ = n(156312),
    f = n(166532),
    h = n(814626),
    p = n(652215),
    g = n(788868),
    E = n(985018),
    A = n(926701);
let I = 1e3,
    T = (e) => {
        let t,
            { step: n, onPurchaseComplete: a, onHandoffFailure: u } = e,
            {
                selectedPlan: T,
                setSelectedPlanId: y,
                setSelectedSkuId: S,
                browserCheckoutState: v,
                browserCheckoutStateLoadId: C,
                browserCheckoutStateSkuId: b,
                browserCheckoutStatePlanId: N,
                contextMetadata: R,
            } = (0, _.P5)(),
            { isGift: O } = (0, d.Pv)(),
            [D, L] = i.useState(!1);
        switch (n) {
            case f.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = p.do8.GOOGLE_PAY;
                break;
            case f.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = p.do8.APPLE_PAY;
        }
        return (
            i.useEffect(() => {
                let e = setTimeout(() => {
                    D ||
                        (L(!0),
                        (0, o.Ze)(R.loadId),
                        (0, c.my)(
                            {
                                planId: T?.id ?? g.gD.PREMIUM_MONTH_TIER_2,
                                isGift: O,
                                loadId: R.loadId,
                                paymentMethodType: t,
                            },
                            u,
                        ));
                }, I);
                return () => clearTimeout(e);
            }, [T, O, R, u, L, D, t]),
            i.useEffect(() => {
                null !== b && (g.oz.includes(b) && ((0, l.ur)(b), (0, o.hP)()), S(b)),
                    null !== N && y(N),
                    C === R.loadId && v === h.k.DONE && a();
            }, [S, y, v, C, b, N, R, a]),
            (0, r.jsxs)("div", {
                className: A.rf,
                children: [
                    (0, r.jsx)(s.Heading, { variant: "heading-xl/bold", children: E.intl.string(E.t.C4HYfy) }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        className: A.h_,
                        children: E.intl.string(E.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    y = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, r.jsx)(a.jlY, {
            children: (0, r.jsxs)("div", {
                className: A.kL,
                children: [
                    (0, r.jsx)(u.A, { onClick: n }),
                    (0, r.jsx)(u.F, { onClick: t, children: E.intl.string(E.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
