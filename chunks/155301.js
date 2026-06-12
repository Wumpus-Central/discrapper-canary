n.d(t, { A: () => T });
var l = n(627968),
    r = n(64700),
    i = n(86379),
    a = n(545075),
    s = n(655857),
    o = n(211159),
    u = n(97352),
    c = n(428262),
    d = n(937008),
    C = n(166532),
    p = n(534479),
    m = n(121005),
    _ = n(615310),
    E = n(975965);
function T(e) {
    let { initialPlanId: t, setAnalyticsData: n } = e,
        {
            selectedSkuId: T,
            setSelectedSkuId: I,
            setSelectedPlanId: S,
            priceOptions: h,
        } = (0, o.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { hasFetchedRelatedSubscriptionPlans: A, subscriptionPriceOptionsLoading: O, displayCurrency: f } = (0, s.Jn)(),
        { setSubscriptionMetadataRequest: x, guildId: P, showBenefitsFirst: g } = (0, E.l)(),
        N = (0, i.Hp)(),
        R = (0, m.A)(),
        v = (0, _.l)(),
        { isGift: y } = (0, d.Pv)(),
        U = g ? C.pn.BENEFITS : C.pn.REVIEW,
        [j, M] = r.useState(!R || !A || O);
    return (r.useEffect(() => {
        M(!R || !A || O);
    }, [O, A, R]),
    r.useEffect(() => {
        null != P && x({ guild_id: P });
    }, [P, x]),
    r.useEffect(() => {
        S(t);
        let e = null != t ? u.A.get(t) : null;
        j ||
            N ||
            (n((t) => {
                let n = null != e ? (0, c.y8)(e.id, !1, y, { paymentSourceId: h.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: f };
            }),
            null != e && (I(e?.skuId), v(U)));
    }, [N, t, y, j, h, f, T, n, S, I, v, U]),
    j)
        ? (0, l.jsx)(p.A, {})
        : N
          ? (0, l.jsx)(a.oO, {})
          : null;
}
