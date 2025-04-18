n.d(t, {
    M: () => I,
    a: () => S
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(953529);
var r = n(200651),
    i = n(192379),
    o = n(772848),
    a = n(544891),
    s = n(481060),
    l = n(355467),
    c = n(821849),
    u = n(600164),
    d = n(311821),
    f = n(591759),
    _ = n(987209),
    p = n(563132),
    h = n(409813),
    m = n(362755),
    g = n(981631),
    E = n(474936),
    b = n(388032),
    y = n(631031);
let v = 1000;
function O(e, t, n, r, i) {
    let s = g.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n, i),
        l = new URL(f.Z.makeUrl(g.Z5c.BILLING_LOGIN_HANDOFF)),
        c = (0, o.Z)();
    return (
        l.searchParams.append('handoff_key', c),
        l.searchParams.append('redirect_to', s),
        a.tn
            .post({
                url: g.ANM.HANDOFF,
                body: { key: c },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    l.searchParams.append('handoff_token', e.body.handoff_token), window.open(l.href);
                },
                () => {
                    r();
                }
            )
    );
}
let I = (e) => {
        let t,
            { step: n, onPurchaseComplete: o, onHandoffFailure: a } = e,
            { selectedPlan: u, setSelectedPlanId: d, setSelectedSkuId: f, browserCheckoutState: I, browserCheckoutStateLoadId: S, browserCheckoutStateSkuId: T, browserCheckoutStatePlanId: N, contextMetadata: A } = (0, p.JL)(),
            { isGift: C } = (0, _.wD)(),
            [R, P] = i.useState(!1);
        switch (n) {
            case h.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = g.i$l.GOOGLE_PAY;
                break;
            case h.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = g.i$l.APPLE_PAY;
        }
        return (
            i.useEffect(() => {
                let e = setTimeout(() => {
                    var e;
                    R || (P(!0), (0, l.r5)(A.loadId), O(null != (e = null == u ? void 0 : u.id) ? e : E.Xh.PREMIUM_MONTH_TIER_2, C, A.loadId, a, t));
                }, v);
                return () => clearTimeout(e);
            }, [u, C, A, a, P, R, t]),
            i.useEffect(() => {
                null !== T && (E.YQ.includes(T) && ((0, c.GZ)(T), (0, l.jg)()), f(T)), null !== N && d(N), S === A.loadId && I === m.Y.DONE && o();
            }, [f, d, I, S, T, N, A, o]),
            (0, r.jsxs)('div', {
                className: y.body,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-xl/bold',
                        children: b.NW.string(b.t.C4HYf3)
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        className: y.description,
                        children: b.NW.string(b.t.xfG7Ji)
                    })
                ]
            })
        );
    },
    S = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, r.jsx)('div', {
            children: (0, r.jsxs)(s.mzw, {
                justify: u.Z.Justify.BETWEEN,
                align: u.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(d.y, {
                        onClick: t,
                        children: b.NW.string(b.t['4Qvmmp'])
                    }),
                    (0, r.jsx)(d.Z, { onClick: n })
                ]
            })
        });
    };
