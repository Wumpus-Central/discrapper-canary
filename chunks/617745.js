"use strict";
n.d(t, { q: () => v, t: () => y });
var r = n(627968),
    i = n(64700),
    s = n(732955),
    a = n(397927),
    o = n(73825),
    l = n(323082),
    u = n(558620),
    c = n(94420),
    d = n(683433),
    _ = n(36167),
    f = n(937008),
    p = n(156312),
    h = n(166532),
    m = n(413869),
    E = n(814626),
    g = n(652215),
    A = n(788868),
    I = n(985018),
    T = n(647926);
let S = 1e3,
    y = (e) => {
        let t,
            { step: n, onPurchaseComplete: s, onHandoffFailure: d } = e,
            { setSelectedSkuId: y, setSelectedPlanId: v } = (0, c.t4)((e) => ({
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                browserCheckoutState: N,
                browserCheckoutStateLoadId: C,
                browserCheckoutStateSkuId: R,
                browserCheckoutStatePlanId: O,
            } = (0, m.c)(),
            { contextMetadata: b } = (0, p.P5)(),
            D = (0, u.A)(),
            { isGift: L } = (0, f.Pv)(),
            [w, M] = i.useState(!1);
        switch (n) {
            case h.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = g.do8.GOOGLE_PAY;
                break;
            case h.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = g.do8.APPLE_PAY;
        }
        return (
            i.useEffect(() => {
                let e = setTimeout(() => {
                    w ||
                        (M(!0),
                        (0, l.Ze)(b.loadId),
                        (0, _.my)(
                            {
                                planId: D?.id ?? A.gD.PREMIUM_MONTH_TIER_2,
                                isGift: L,
                                loadId: b.loadId,
                                paymentMethodType: t,
                            },
                            d,
                        ));
                }, S);
                return () => clearTimeout(e);
            }, [D, L, b, d, M, w, t]),
            i.useEffect(() => {
                null !== R && (A.oz.includes(R) && ((0, o.ur)(R), (0, l.hP)()), y(R)),
                    null !== O && v(O),
                    C === b.loadId && N === E.k.DONE && s();
            }, [y, v, N, C, R, O, b, s]),
            (0, r.jsxs)("div", {
                className: T.rf,
                children: [
                    (0, r.jsx)(a.Heading, { variant: "heading-xl/bold", children: I.intl.string(I.t.C4HYfy) }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: T.h_,
                        children: I.intl.string(I.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    v = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, r.jsx)(s.jlY, {
            children: (0, r.jsxs)("div", {
                className: T.kL,
                children: [
                    (0, r.jsx)(d.A, { onClick: n }),
                    (0, r.jsx)(d.F, { onClick: t, children: I.intl.string(I.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
