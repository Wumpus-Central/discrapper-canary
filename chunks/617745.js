"use strict";
n.d(t, { q: () => S, t: () => T });
var r = n(627968),
    i = n(64700),
    s = n(732955),
    a = n(397927),
    o = n(73825),
    l = n(323082),
    u = n(683433),
    c = n(36167),
    d = n(937008),
    _ = n(156312),
    f = n(166532),
    p = n(970077),
    h = n(814626),
    m = n(652215),
    E = n(788868),
    g = n(985018),
    A = n(761871);
let I = 1e3,
    T = (e) => {
        let t,
            { step: n, onPurchaseComplete: s, onHandoffFailure: u } = e,
            {
                setSelectedPlanId: T,
                setSelectedSkuId: S,
                browserCheckoutState: y,
                browserCheckoutStateLoadId: v,
                browserCheckoutStateSkuId: N,
                browserCheckoutStatePlanId: C,
                contextMetadata: R,
            } = (0, _.P5)(),
            O = (0, p.A)(),
            { isGift: b } = (0, d.Pv)(),
            [D, L] = i.useState(!1);
        switch (n) {
            case f.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = m.do8.GOOGLE_PAY;
                break;
            case f.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = m.do8.APPLE_PAY;
        }
        return (
            i.useEffect(() => {
                let e = setTimeout(() => {
                    D ||
                        (L(!0),
                        (0, l.Ze)(R.loadId),
                        (0, c.my)(
                            {
                                planId: O?.id ?? E.gD.PREMIUM_MONTH_TIER_2,
                                isGift: b,
                                loadId: R.loadId,
                                paymentMethodType: t,
                            },
                            u,
                        ));
                }, I);
                return () => clearTimeout(e);
            }, [O, b, R, u, L, D, t]),
            i.useEffect(() => {
                null !== N && (E.oz.includes(N) && ((0, o.ur)(N), (0, l.hP)()), S(N)),
                    null !== C && T(C),
                    v === R.loadId && y === h.k.DONE && s();
            }, [S, T, y, v, N, C, R, s]),
            (0, r.jsxs)("div", {
                className: A.rf,
                children: [
                    (0, r.jsx)(a.Heading, { variant: "heading-xl/bold", children: g.intl.string(g.t.C4HYfy) }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: A.h_,
                        children: g.intl.string(g.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    S = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, r.jsx)(s.jlY, {
            children: (0, r.jsxs)("div", {
                className: A.kL,
                children: [
                    (0, r.jsx)(u.A, { onClick: n }),
                    (0, r.jsx)(u.F, { onClick: t, children: g.intl.string(g.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
