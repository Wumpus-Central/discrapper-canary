n.d(t, {
    M: function () {
        return C;
    },
    a: function () {
        return T;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var a = n(200651),
    r = n(192379),
    l = n(772848),
    s = n(544891),
    i = n(481060),
    o = n(355467),
    c = n(821849),
    u = n(600164),
    d = n(311821),
    p = n(591759),
    m = n(987209),
    h = n(563132),
    A = n(409813),
    E = n(620824),
    y = n(737143),
    f = n(926841),
    N = n(362755),
    P = n(981631),
    _ = n(474936),
    b = n(388032),
    g = n(13926);
let C = (e) => {
        let t,
            n,
            { step: u, onPurchaseComplete: d, onHandoffFailure: C } = e,
            { selectedPlan: T, setSelectedPlanId: I, setSelectedSkuId: S, browserCheckoutState: v, browserCheckoutStateLoadId: R, browserCheckoutStateSkuId: x, browserCheckoutStatePlanId: L, contextMetadata: M } = (0, h.usePaymentContext)(),
            { isGift: O } = (0, m.wD)(),
            [D, w] = r.useState(!1);
        switch (u) {
            case A.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                (t = P.i$l.GOOGLE_PAY), (n = (0, f.a)());
                break;
            case A.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                (t = P.i$l.APPLE_PAY), (n = (0, E.b)());
                break;
            default:
                n = (0, y.q1)();
        }
        return (
            r.useEffect(() => {
                let e = setTimeout(
                    () => {
                        var e;
                        if (!D)
                            w(!0),
                                (0, o.r5)(M.loadId),
                                !(function (e, t, n, a, r) {
                                    let i = P.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n, r),
                                        o = new URL(p.Z.makeUrl(P.Z5c.BILLING_LOGIN_HANDOFF)),
                                        c = (0, l.Z)();
                                    o.searchParams.append('handoff_key', c),
                                        o.searchParams.append('redirect_to', i),
                                        s.tn
                                            .post({
                                                url: P.ANM.HANDOFF,
                                                body: { key: c },
                                                oldFormErrors: !0,
                                                rejectWithError: !1
                                            })
                                            .then(
                                                (e) => {
                                                    o.searchParams.append('handoff_token', e.body.handoff_token), window.open(o.href);
                                                },
                                                () => {
                                                    a();
                                                }
                                            );
                                })(null !== (e = null == T ? void 0 : T.id) && void 0 !== e ? e : _.Xh.PREMIUM_MONTH_TIER_2, O, M.loadId, C, t);
                    },
                    n.delay ? 1000 : 0
                );
                return () => clearTimeout(e);
            }, [T, O, M, C, w, D, t, n.delay]),
            r.useEffect(() => {
                null !== x && (_.YQ.includes(x) && ((0, c.GZ)(x), (0, o.jg)()), S(x)), null !== L && I(L), R === M.loadId && v === N.Y.DONE && d();
            }, [S, I, v, R, x, L, M, d]),
            (0, a.jsxs)('div', {
                className: g.body,
                children: [
                    (0, a.jsx)(i.Heading, {
                        variant: 'heading-xl/bold',
                        children: b.intl.string(b.t.C4HYf3)
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        className: g.description,
                        children: b.intl.string(b.t.xfG7Ji)
                    })
                ]
            })
        );
    },
    T = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, a.jsx)('div', {
            children: (0, a.jsxs)(i.ModalFooter, {
                justify: u.Z.Justify.BETWEEN,
                align: u.Z.Align.CENTER,
                children: [
                    (0, a.jsx)(d.y, {
                        onClick: t,
                        children: b.intl.string(b.t['4Qvmmp'])
                    }),
                    (0, a.jsx)(d.Z, { onClick: n })
                ]
            })
        });
    };
