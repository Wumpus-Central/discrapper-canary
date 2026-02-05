"use strict";
n.d(t, { q: () => T, t: () => I });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(384904),
    o = n(73825),
    l = n(235986),
    u = n(683433),
    c = n(36167),
    d = n(937008),
    _ = n(156312),
    f = n(166532),
    p = n(814626),
    h = n(652215),
    m = n(788868),
    g = n(985018),
    E = n(926701);
let A = 1e3,
    I = (e) => {
        let t,
            { step: n, onPurchaseComplete: l, onHandoffFailure: u } = e,
            {
                selectedPlan: I,
                setSelectedPlanId: T,
                setSelectedSkuId: y,
                browserCheckoutState: S,
                browserCheckoutStateLoadId: v,
                browserCheckoutStateSkuId: C,
                browserCheckoutStatePlanId: b,
                contextMetadata: N,
            } = (0, _.P5)(),
            { isGift: R } = (0, d.Pv)(),
            [O, D] = i.useState(!1);
        switch (n) {
            case f.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = h.do8.GOOGLE_PAY;
                break;
            case f.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = h.do8.APPLE_PAY;
        }
        return (
            i.useEffect(() => {
                let e = setTimeout(() => {
                    O ||
                        (D(!0),
                        (0, s.Ze)(N.loadId),
                        (0, c.my)(
                            {
                                planId: I?.id ?? m.gD.PREMIUM_MONTH_TIER_2,
                                isGift: R,
                                loadId: N.loadId,
                                paymentMethodType: t,
                            },
                            u,
                        ));
                }, A);
                return () => clearTimeout(e);
            }, [I, R, N, u, D, O, t]),
            i.useEffect(() => {
                null !== C && (m.oz.includes(C) && ((0, o.ur)(C), (0, s.hP)()), y(C)),
                    null !== b && T(b),
                    v === N.loadId && S === p.k.DONE && l();
            }, [y, T, S, v, C, b, N, l]),
            (0, r.jsxs)("div", {
                className: E.r,
                children: [
                    (0, r.jsx)(a.Heading, { variant: "heading-xl/bold", children: g.intl.string(g.t.C4HYfy) }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: E.h,
                        children: g.intl.string(g.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    T = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, r.jsx)("div", {
            children: (0, r.jsxs)(a.jlY, {
                justify: l.A.Justify.BETWEEN,
                align: l.A.Align.CENTER,
                "data-migration-pending": !0,
                children: [
                    (0, r.jsx)(u.F, { onClick: t, children: g.intl.string(g.t["4Qvmmj"]) }),
                    (0, r.jsx)(u.A, { onClick: n }),
                ],
            }),
        });
    };
