"use strict";
n.d(t, { B: () => S });
var i = n(64700),
    r = n(17928),
    s = n(688810),
    a = n(753390),
    o = n(120700),
    l = n(211159),
    u = n(166532),
    c = n(566980),
    d = n(615310),
    _ = n(216641),
    h = n(825755),
    f = n(174459),
    p = n(428262),
    E = n(526151),
    m = n(20654),
    g = n(303557),
    A = n(652215),
    I = n(788868),
    T = n(818348);
function S(e) {
    let { onComplete: t } = e,
        {
            guildId: n,
            intent: S,
            onSubscribeComplete: y,
            flowStartTime: C,
            numGuildBoostsToPurchase: N,
            analyticsLocation: v,
            analyticsSourceLocation: R,
            paymentModalArgs: O,
        } = (0, E.Oe)(),
        { setIsSubmittingCurrentStep: b, paymentSources: D } = O,
        { premiumGuildSubscriptionPlanId: L } = (0, g.l)(),
        {
            paymentSourceId: w,
            setPurchaseState: M,
            setPurchaseError: P,
            loadId: x,
            startTime: k,
        } = (0, l.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            loadId: e.contextMetadata.loadId,
            startTime: e.contextMetadata.startTime,
        })),
        U = (0, d.l)(),
        G = (0, s.Db)(),
        F = (0, r.bG)([h.A], () => h.A.popupCallbackCalled),
        V = {
            baseAnalyticsData: i.useMemo(
                () => ({
                    load_id: x,
                    payment_type: T.fr[T.VV.SUBSCRIPTION],
                    subscription_type: A.rzx.PREMIUM,
                    subscription_plan_id: L,
                    sku_id: (0, p.mH)(I.pe.GUILD),
                    quantity: N,
                    location: v,
                    source: R,
                    location_stack: G,
                    checkout_flow: o.C.GUILD_BOOST_CHECKOUT,
                    is_gift: !1,
                    eligible_for_trial: !1,
                    guild_id: n ?? void 0,
                }),
                [x, L, N, v, R, G, n],
            ),
            flowStartTime: C,
            startTime: k,
            guildId: n,
            onComplete: t,
            onSubscribeComplete: y,
            paymentSourceId: w,
            paymentSources: D,
            setIsSubmittingCurrentStep: b,
            setPurchaseError: P,
            setPurchaseState: M,
            setStep: U,
        },
        B = i.useRef(V);
    return (
        i.useEffect(() => {
            B.current = V;
        }),
        i.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: t,
                startTime: n,
                guildId: i,
                onComplete: r,
                onSubscribeComplete: s,
                paymentSourceId: o,
                paymentSources: l,
                setIsSubmittingCurrentStep: d,
                setPurchaseError: p,
                setPurchaseState: E,
                setStep: g,
            } = B.current;
            (async () => {
                if (!0 === F)
                    try {
                        if (null == h.A.redirectedPaymentId) return;
                        await (0, a.tn)(h.A.redirectedPaymentId),
                            f.default.track(A.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                ...e,
                                duration_ms: Date.now() - n,
                                payment_source_type: (0, _.g)(l, o) ?? void 0,
                            }),
                            p(null),
                            g(u.pn.CONFIRM),
                            E(c.h.COMPLETED),
                            null != i && (await (0, m.a)(i, null != S)),
                            s?.(),
                            null != r && r();
                    } catch (r) {
                        E(c.h.FAIL), p(r);
                        let { guild_id: n, ...i } = e;
                        f.default.track(A.HAw.PAYMENT_FLOW_FAILED, {
                            ...i,
                            payment_error_code: r?.code,
                            payment_gateway: A.kM_.STRIPE,
                            payment_source_id: o,
                            duration_ms: Date.now() - t,
                        });
                    } finally {
                        d(!1), (0, a.bl)();
                    }
            })();
        }, [F, S]),
        null
    );
}
