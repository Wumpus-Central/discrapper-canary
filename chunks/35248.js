n.d(t, {
    M: () => N,
    a: () => A
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(266796);
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
    m = n(620824),
    g = n(737143),
    E = n(926841),
    b = n(362755),
    y = n(981631),
    v = n(474936),
    O = n(388032),
    I = n(940667);
let S = 1000;
function T(e, t, n, r, i) {
    let s = y.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n, i),
        l = new URL(f.Z.makeUrl(y.Z5c.BILLING_LOGIN_HANDOFF)),
        c = (0, o.Z)();
    return (
        l.searchParams.append('handoff_key', c),
        l.searchParams.append('redirect_to', s),
        a.tn
            .post({
                url: y.ANM.HANDOFF,
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
let N = (e) => {
        let t,
            n,
            { step: o, onPurchaseComplete: a, onHandoffFailure: u } = e,
            { selectedPlan: d, setSelectedPlanId: f, setSelectedSkuId: N, browserCheckoutState: A, browserCheckoutStateLoadId: C, browserCheckoutStateSkuId: R, browserCheckoutStatePlanId: P, contextMetadata: w } = (0, p.JL)(),
            { isGift: D } = (0, _.wD)(),
            [L, x] = i.useState(!1);
        switch (o) {
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
            i.useEffect(() => {
                let e = setTimeout(
                    () => {
                        var e;
                        L || (x(!0), (0, l.r5)(w.loadId), T(null != (e = null == d ? void 0 : d.id) ? e : v.Xh.PREMIUM_MONTH_TIER_2, D, w.loadId, u, t));
                    },
                    n.delay ? S : 0
                );
                return () => clearTimeout(e);
            }, [d, D, w, u, x, L, t, n.delay]),
            i.useEffect(() => {
                null !== R && (v.YQ.includes(R) && ((0, c.GZ)(R), (0, l.jg)()), N(R)), null !== P && f(P), C === w.loadId && A === b.Y.DONE && a();
            }, [N, f, A, C, R, P, w, a]),
            (0, r.jsxs)('div', {
                className: I.body,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-xl/bold',
                        children: O.NW.string(O.t.C4HYf3)
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        className: I.description,
                        children: O.NW.string(O.t.xfG7Ji)
                    })
                ]
            })
        );
    },
    A = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, r.jsx)('div', {
            children: (0, r.jsxs)(s.mzw, {
                justify: u.Z.Justify.BETWEEN,
                align: u.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(d.y, {
                        onClick: t,
                        children: O.NW.string(O.t['4Qvmmp'])
                    }),
                    (0, r.jsx)(d.Z, { onClick: n })
                ]
            })
        });
    };
