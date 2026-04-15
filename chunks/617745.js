"use strict";
n.d(t, { q: () => y, t: () => S });
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
    h = n(970077),
    m = n(814626),
    E = n(652215),
    g = n(788868),
    A = n(985018),
    I = n(900006);
let T = 1e3,
    S = (e) => {
        let t,
            { step: n, onPurchaseComplete: s, onHandoffFailure: u } = e,
            { setSelectedSkuId: S, setSelectedPlanId: y } = (0, d.t4)((e) => ({
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                browserCheckoutState: v,
                browserCheckoutStateLoadId: N,
                browserCheckoutStateSkuId: C,
                browserCheckoutStatePlanId: R,
                contextMetadata: O,
            } = (0, f.P5)(),
            b = (0, h.A)(),
            { isGift: D } = (0, _.Pv)(),
            [L, w] = i.useState(!1);
        switch (n) {
            case p.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = E.do8.GOOGLE_PAY;
                break;
            case p.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = E.do8.APPLE_PAY;
        }
        return (
            i.useEffect(() => {
                let e = setTimeout(() => {
                    L ||
                        (w(!0),
                        (0, l.Ze)(O.loadId),
                        (0, c.my)(
                            {
                                planId: b?.id ?? g.gD.PREMIUM_MONTH_TIER_2,
                                isGift: D,
                                loadId: O.loadId,
                                paymentMethodType: t,
                            },
                            u,
                        ));
                }, T);
                return () => clearTimeout(e);
            }, [b, D, O, u, w, L, t]),
            i.useEffect(() => {
                null !== C && (g.oz.includes(C) && ((0, o.ur)(C), (0, l.hP)()), S(C)),
                    null !== R && y(R),
                    N === O.loadId && v === m.k.DONE && s();
            }, [S, y, v, N, C, R, O, s]),
            (0, r.jsxs)("div", {
                className: I.rf,
                children: [
                    (0, r.jsx)(a.Heading, { variant: "heading-xl/bold", children: A.intl.string(A.t.C4HYfy) }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: I.h_,
                        children: A.intl.string(A.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    y = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, r.jsx)(s.jlY, {
            children: (0, r.jsxs)("div", {
                className: I.kL,
                children: [
                    (0, r.jsx)(u.A, { onClick: n }),
                    (0, r.jsx)(u.F, { onClick: t, children: A.intl.string(A.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
