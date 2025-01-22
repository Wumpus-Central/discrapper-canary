r.d(n, {
    M: function () {
        return w;
    },
    a: function () {
        return P;
    }
});
var i = r(315314);
var a = r(610138);
var o = r(216116);
var s = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(200651),
    d = r(192379),
    f = r(772848),
    p = r(544891),
    h = r(481060),
    _ = r(355467),
    m = r(821849),
    g = r(600164),
    E = r(311821),
    v = r(591759),
    y = r(987209),
    b = r(563132),
    I = r(409813),
    T = r(620824),
    S = r(737143),
    A = r(926841),
    C = r(362755),
    N = r(981631),
    R = r(474936),
    O = r(388032),
    D = r(13926);
let L = 1000;
function x(e, n, r, i, a) {
    let o = N.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, n, r, a),
        s = new URL(v.Z.makeUrl(N.Z5c.BILLING_LOGIN_HANDOFF)),
        l = (0, f.Z)();
    return (
        s.searchParams.append('handoff_key', l),
        s.searchParams.append('redirect_to', o),
        p.tn
            .post({
                url: N.ANM.HANDOFF,
                body: { key: l },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    s.searchParams.append('handoff_token', e.body.handoff_token), window.open(s.href);
                },
                () => {
                    i();
                }
            )
    );
}
let w = (e) => {
        let n,
            r,
            { step: i, onPurchaseComplete: a, onHandoffFailure: o } = e,
            { selectedPlan: s, setSelectedPlanId: l, setSelectedSkuId: u, browserCheckoutState: f, browserCheckoutStateLoadId: p, browserCheckoutStateSkuId: g, browserCheckoutStatePlanId: E, contextMetadata: v } = (0, b.usePaymentContext)(),
            { isGift: w } = (0, y.wD)(),
            [P, M] = d.useState(!1);
        switch (i) {
            case I.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                (n = N.i$l.GOOGLE_PAY), (r = (0, A.a)());
                break;
            case I.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                (n = N.i$l.APPLE_PAY), (r = (0, T.b)());
                break;
            default:
                r = (0, S.q1)();
        }
        return (
            d.useEffect(() => {
                let e = setTimeout(
                    () => {
                        var e;
                        if (!P) M(!0), (0, _.r5)(v.loadId), x(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : R.Xh.PREMIUM_MONTH_TIER_2, w, v.loadId, o, n);
                    },
                    r.delay ? L : 0
                );
                return () => clearTimeout(e);
            }, [s, w, v, o, M, P, n, r.delay]),
            d.useEffect(() => {
                null !== g && (R.YQ.includes(g) && ((0, m.GZ)(g), (0, _.jg)()), u(g)), null !== E && l(E), p === v.loadId && f === C.Y.DONE && a();
            }, [u, l, f, p, g, E, v, a]),
            (0, c.jsxs)('div', {
                className: D.body,
                children: [
                    (0, c.jsx)(h.Heading, {
                        variant: 'heading-xl/bold',
                        children: O.intl.string(O.t.C4HYf3)
                    }),
                    (0, c.jsx)(h.Text, {
                        variant: 'text-md/normal',
                        className: D.description,
                        children: O.intl.string(O.t.xfG7Ji)
                    })
                ]
            })
        );
    },
    P = (e) => {
        let { onPrimaryClick: n, onBackClick: r } = e;
        return (0, c.jsx)('div', {
            children: (0, c.jsxs)(h.ModalFooter, {
                justify: g.Z.Justify.BETWEEN,
                align: g.Z.Align.CENTER,
                children: [
                    (0, c.jsx)(E.y, {
                        onClick: n,
                        children: O.intl.string(O.t['4Qvmmp'])
                    }),
                    (0, c.jsx)(E.Z, { onClick: r })
                ]
            })
        });
    };
