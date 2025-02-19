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
    p = n(987209),
    _ = n(563132),
    h = n(409813),
    m = n(620824),
    g = n(737143),
    E = n(926841),
    v = n(362755),
    b = n(981631),
    y = n(474936),
    O = n(388032),
    S = n(744300);
let I = 1000;
function T(e, t, n, r, i) {
    let s = b.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n, i),
        l = new URL(f.Z.makeUrl(b.Z5c.BILLING_LOGIN_HANDOFF)),
        c = (0, o.Z)();
    return (
        l.searchParams.append('handoff_key', c),
        l.searchParams.append('redirect_to', s),
        a.tn
            .post({
                url: b.ANM.HANDOFF,
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
            { selectedPlan: d, setSelectedPlanId: f, setSelectedSkuId: N, browserCheckoutState: A, browserCheckoutStateLoadId: C, browserCheckoutStateSkuId: R, browserCheckoutStatePlanId: P, contextMetadata: w } = (0, _.JL)(),
            { isGift: D } = (0, p.wD)(),
            [x, L] = i.useState(!1);
        switch (o) {
            case h.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                (t = b.i$l.GOOGLE_PAY), (n = (0, E.a)());
                break;
            case h.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                (t = b.i$l.APPLE_PAY), (n = (0, m.b)());
                break;
            default:
                n = (0, g.q1)();
        }
        return (
            i.useEffect(() => {
                let e = setTimeout(
                    () => {
                        var e;
                        !x && (L(!0), (0, l.r5)(w.loadId), T(null !== (e = null == d ? void 0 : d.id) && void 0 !== e ? e : y.Xh.PREMIUM_MONTH_TIER_2, D, w.loadId, u, t));
                    },
                    n.delay ? I : 0
                );
                return () => clearTimeout(e);
            }, [d, D, w, u, L, x, t, n.delay]),
            i.useEffect(() => {
                null !== R && (y.YQ.includes(R) && ((0, c.GZ)(R), (0, l.jg)()), N(R)), null !== P && f(P), C === w.loadId && A === v.Y.DONE && a();
            }, [N, f, A, C, R, P, w, a]),
            (0, r.jsxs)('div', {
                className: S.body,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-xl/bold',
                        children: O.NW.string(O.t.C4HYf3)
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        className: S.description,
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
