"use strict";
n.d(t, { q: () => v, t: () => y });
var r = n(627968),
    i = n(64700),
    s = n(732955),
    a = n(397927),
    o = n(73825),
    l = n(323082),
    u = n(683433),
    c = n(36167),
    d = n(413748),
    _ = n(937008),
    f = n(156312),
    p = n(166532),
    h = n(413869),
    m = n(970077),
    E = n(814626),
    g = n(652215),
    A = n(788868),
    I = n(985018),
    T = n(647926);
let S = 1e3,
    y = (e) => {
        let t,
            { step: n, onPurchaseComplete: s, onHandoffFailure: u } = e,
            { setSelectedSkuId: y, setSelectedPlanId: v } = (0, d.t4)((e) => ({
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                browserCheckoutState: N,
                browserCheckoutStateLoadId: C,
                browserCheckoutStateSkuId: R,
                browserCheckoutStatePlanId: O,
            } = (0, h.c)(),
            { contextMetadata: b } = (0, f.P5)(),
            D = (0, m.A)(),
            { isGift: L } = (0, _.Pv)(),
            [w, M] = i.useState(!1);
        switch (n) {
            case p.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = g.do8.GOOGLE_PAY;
                break;
            case p.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = g.do8.APPLE_PAY;
        }
        return (
            i.useEffect(() => {
                let e = setTimeout(() => {
                    w ||
                        (M(!0),
                        (0, l.Ze)(b.loadId),
                        (0, c.my)(
                            {
                                planId: D?.id ?? A.gD.PREMIUM_MONTH_TIER_2,
                                isGift: L,
                                loadId: b.loadId,
                                paymentMethodType: t,
                            },
                            u,
                        ));
                }, S);
                return () => clearTimeout(e);
            }, [D, L, b, u, M, w, t]),
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
                    (0, r.jsx)(u.A, { onClick: n }),
                    (0, r.jsx)(u.F, { onClick: t, children: I.intl.string(I.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
