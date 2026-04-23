"use strict";
n.d(t, { q: () => N, t: () => y });
var r = n(627968),
    i = n(64700),
    s = n(364840),
    a = n(534514),
    o = n(834730),
    l = n(73825),
    u = n(323082),
    c = n(558620),
    d = n(94420),
    _ = n(683433),
    f = n(36167),
    p = n(937008),
    h = n(156312),
    E = n(166532),
    m = n(413869),
    g = n(814626),
    A = n(652215),
    I = n(788868),
    T = n(985018),
    S = n(647926);
let y = (e) => {
        let t,
            { step: n, onPurchaseComplete: s, onHandoffFailure: _ } = e,
            { setSelectedSkuId: y, setSelectedPlanId: N } = (0, d.t4)((e) => ({
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                browserCheckoutState: v,
                browserCheckoutStateLoadId: C,
                browserCheckoutStateSkuId: O,
                browserCheckoutStatePlanId: R,
            } = (0, m.c)(),
            { contextMetadata: b } = (0, h.P5)(),
            D = (0, c.A)(),
            { isGift: L } = (0, p.Pv)(),
            [w, M] = i.useState(!1);
        switch (n) {
            case E.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = A.do8.GOOGLE_PAY;
                break;
            case E.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = A.do8.APPLE_PAY;
        }
        return (
            i.useEffect(() => {
                let e = setTimeout(() => {
                    w ||
                        (M(!0),
                        (0, u.Ze)(b.loadId),
                        (0, f.my)(
                            {
                                planId: D?.id ?? I.gD.PREMIUM_MONTH_TIER_2,
                                isGift: L,
                                loadId: b.loadId,
                                paymentMethodType: t,
                            },
                            _,
                        ));
                }, 1e3);
                return () => clearTimeout(e);
            }, [D, L, b, _, M, w, t]),
            i.useEffect(() => {
                null !== O && (I.oz.includes(O) && ((0, l.ur)(O), (0, u.hP)()), y(O)),
                    null !== R && N(R),
                    C === b.loadId && v === g.k.DONE && s();
            }, [y, N, v, C, O, R, b, s]),
            (0, r.jsxs)("div", {
                className: S.rf,
                children: [
                    (0, r.jsx)(a.D, { variant: "heading-xl/bold", children: T.intl.string(T.t.C4HYfy) }),
                    (0, r.jsx)(o.E, {
                        variant: "text-md/normal",
                        className: S.h_,
                        children: T.intl.string(T.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    N = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, r.jsx)(s.j, {
            children: (0, r.jsxs)("div", {
                className: S.kL,
                children: [
                    (0, r.jsx)(_.A, { onClick: n }),
                    (0, r.jsx)(_.F, { onClick: t, children: T.intl.string(T.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
