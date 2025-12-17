n.d(t, {
    M: () => y,
    a: () => O,
}),
    n(388685),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(355467),
    s = n(821849),
    l = n(600164),
    c = n(311821),
    u = n(357189),
    d = n(987209),
    f = n(563132),
    p = n(409813),
    _ = n(362755),
    m = n(981631),
    h = n(474936),
    g = n(388032),
    E = n(104894);
let b = 1000,
    y = (e) => {
        let t,
            { step: n, onPurchaseComplete: l, onHandoffFailure: c } = e,
            {
                selectedPlan: y,
                setSelectedPlanId: O,
                setSelectedSkuId: v,
                browserCheckoutState: S,
                browserCheckoutStateLoadId: I,
                browserCheckoutStateSkuId: T,
                browserCheckoutStatePlanId: C,
                contextMetadata: A,
            } = (0, f.JL)(),
            { isGift: N } = (0, d.wD)(),
            [P, R] = i.useState(!1);
        switch (n) {
            case p.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = m.i$l.GOOGLE_PAY;
                break;
            case p.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = m.i$l.APPLE_PAY;
        }
        return (
            i.useEffect(() => {
                let e = setTimeout(() => {
                    var e;
                    P ||
                        (R(!0),
                        (0, o.r5)(A.loadId),
                        (0, u.ko)(
                            {
                                planId: null != (e = null == y ? void 0 : y.id) ? e : h.Xh.PREMIUM_MONTH_TIER_2,
                                isGift: N,
                                loadId: A.loadId,
                                paymentMethodType: t,
                            },
                            c,
                        ));
                }, b);
                return () => clearTimeout(e);
            }, [y, N, A, c, R, P, t]),
            i.useEffect(() => {
                null !== T && (h.YQ.includes(T) && ((0, s.GZ)(T), (0, o.jg)()), v(T)),
                    null !== C && O(C),
                    I === A.loadId && S === _.Y.DONE && l();
            }, [v, O, S, I, T, C, A, l]),
            (0, r.jsxs)("div", {
                className: E.body,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-xl/bold",
                        children: g.intl.string(g.t.C4HYfy),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: E.description,
                        children: g.intl.string(g.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    O = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, r.jsx)("div", {
            children: (0, r.jsxs)(a.mzw, {
                justify: l.Z.Justify.BETWEEN,
                align: l.Z.Align.CENTER,
                "data-migration-pending": !0,
                children: [
                    (0, r.jsx)(c.y, {
                        onClick: t,
                        children: g.intl.string(g.t["4Qvmmj"]),
                    }),
                    (0, r.jsx)(c.Z, { onClick: n }),
                ],
            }),
        });
    };
