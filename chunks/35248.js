n.d(t, {
    M: () => N,
    a: () => C
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(772848),
    s = n(544891),
    o = n(481060),
    l = n(355467),
    u = n(821849),
    c = n(600164),
    d = n(311821),
    f = n(591759),
    _ = n(987209),
    p = n(563132),
    h = n(409813),
    m = n(620824),
    g = n(737143),
    E = n(926841),
    v = n(362755),
    y = n(981631),
    I = n(474936),
    T = n(388032),
    b = n(501388);
let S = 1000;
function A(e, t, n, i, r) {
    let o = y.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n, r),
        l = new URL(f.Z.makeUrl(y.Z5c.BILLING_LOGIN_HANDOFF)),
        u = (0, a.Z)();
    return (
        l.searchParams.append('handoff_key', u),
        l.searchParams.append('redirect_to', o),
        s.tn
            .post({
                url: y.ANM.HANDOFF,
                body: { key: u },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    l.searchParams.append('handoff_token', e.body.handoff_token), window.open(l.href);
                },
                () => {
                    i();
                }
            )
    );
}
let N = (e) => {
        let t,
            n,
            { step: a, onPurchaseComplete: s, onHandoffFailure: c } = e,
            { selectedPlan: d, setSelectedPlanId: f, setSelectedSkuId: N, browserCheckoutState: C, browserCheckoutStateLoadId: R, browserCheckoutStateSkuId: O, browserCheckoutStatePlanId: D, contextMetadata: L } = (0, p.JL)(),
            { isGift: x } = (0, _.wD)(),
            [P, w] = r.useState(!1);
        switch (a) {
            case h.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                (t = y.i$l.GOOGLE_PAY), (n = (0, E.a)());
                break;
            case h.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                (t = y.i$l.APPLE_PAY), (n = (0, m.b)());
                break;
            default:
                n = (0, g.q1)();
        }
        return (
            r.useEffect(() => {
                let e = setTimeout(
                    () => {
                        var e;
                        !P && (w(!0), (0, l.r5)(L.loadId), A(null !== (e = null == d ? void 0 : d.id) && void 0 !== e ? e : I.Xh.PREMIUM_MONTH_TIER_2, x, L.loadId, c, t));
                    },
                    n.delay ? S : 0
                );
                return () => clearTimeout(e);
            }, [d, x, L, c, w, P, t, n.delay]),
            r.useEffect(() => {
                null !== O && (I.YQ.includes(O) && ((0, u.GZ)(O), (0, l.jg)()), N(O)), null !== D && f(D), R === L.loadId && C === v.Y.DONE && s();
            }, [N, f, C, R, O, D, L, s]),
            (0, i.jsxs)('div', {
                className: b.body,
                children: [
                    (0, i.jsx)(o.X6q, {
                        variant: 'heading-xl/bold',
                        children: T.intl.string(T.t.C4HYf3)
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        className: b.description,
                        children: T.intl.string(T.t.xfG7Ji)
                    })
                ]
            })
        );
    },
    C = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, i.jsx)('div', {
            children: (0, i.jsxs)(o.mzw, {
                justify: c.Z.Justify.BETWEEN,
                align: c.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(d.y, {
                        onClick: t,
                        children: T.intl.string(T.t['4Qvmmp'])
                    }),
                    (0, i.jsx)(d.Z, { onClick: n })
                ]
            })
        });
    };
