"use strict";
n.d(t, { P5: () => e_, Qv: () => ed, PaymentContextProvider: () => eh });
var i = n(627968),
    r = n(64700),
    s = n(342393),
    a = n(989349),
    o = n.n(a),
    l = n(835245),
    u = n(17928),
    c = n(444927),
    d = n(10716),
    _ = n(795816),
    f = n(933958),
    h = n(688810),
    p = n(627363),
    E = n(20015),
    m = n(86379),
    g = n(531260),
    A = n(885180),
    I = n(626584),
    T = n(174459),
    S = n(38405),
    N = n(652215);
let y = new I.A("CheckoutErrorBoundary.tsx");
class C extends r.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let {
                loadId: n,
                selectedSkuId: i,
                selectedPlanId: r,
                isGift: s,
                purchaseType: a,
                locationStack: o,
                additionalAnalyticsData: l,
            } = this.props,
            u = this.props.shouldRethrowError,
            c = { loadId: n, selectedSkuId: i, selectedPlanId: r, isGift: s, purchaseType: a, locationStack: o },
            d = {
                tags: {
                    app_context: "billing",
                    checkout_error: "true",
                    billing_context: "checkout",
                    ...(u ? { crashed: "true" } : {}),
                },
                extra: { ...c, ...(l ?? {}), ...(t ?? {}) },
            };
        S.A.captureException(e, d), y.error("Checkout error occurred:", { error: e, additionalErrorContext: c });
        let _ = "string" == typeof e ? e : e.message;
        if (
            (T.default.track(N.HAw.PAYMENT_FLOW_ERROR, {
                load_id: n,
                crashed: u,
                error_message: _,
                location_stack: o ?? [],
                ...l,
            }),
            this.setState({ error: e, info: t }),
            null != this.props.onUnhandledError && this.props.onUnhandledError(e, t, d),
            this.props.shouldRethrowError)
        )
            throw e;
    }
    render() {
        return null != this.state.error
            ? null != this.props.renderCustomErrorComponent
                ? this.props.renderCustomErrorComponent(this.state.error, this.state.info)
                : null
            : this.props.children;
    }
}
var v = n(830382),
    O = n(543767),
    R = n(570221),
    b = n(666646),
    D = n(94420);
let L = () => {
    var e;
    let t,
        n,
        i,
        s,
        a = (0, D.t4)((e) => e.selectedSkuId),
        { setPurchasePreviewError: o, applicationId: l, paymentSourceId: u, isGift: c, priceOptions: d } = e_(),
        [_, f] =
            ((e = r.useMemo(
                () => ({
                    applicationId: l,
                    skuId: a,
                    paymentSourceId: u,
                    isGift: c,
                    currency: d.loaded ? d.currency : void 0,
                }),
                [l, a, u, c, d],
            )),
            (t = (0, r.useRef)(e)),
            (n = (0, r.useRef)(!1)),
            (0, r.useEffect)(() => {
                t.current = e;
            }),
            (i = JSON.stringify(e)),
            (s = (0, r.useCallback)(async () => {
                let e = t.current;
                if (null == e.skuId) return null;
                let i = {
                        applicationId: e.applicationId,
                        skuId: e.skuId,
                        paymentSourceId: e.paymentSourceId,
                        isGift: e.isGift,
                        currency: e.currency,
                    },
                    r = n.current ? i : { ...i, paymentSourceId: null };
                n.current = !0;
                let s = await (0, v.NY)(r);
                return null != s ? R.A.createFromOTPPreview(s) : null;
            }, [i])),
            (0, O.$n)(e, s, void 0));
    return (
        (0, b.F0)(_, f),
        r.useEffect(() => {
            o(f);
        }, [f, o]),
        null
    );
};
var w = n(181447),
    M = n(881489),
    P = n(573359),
    x = n(422936),
    U = n(234419),
    k = n(885386),
    G = n(293700),
    F = n(67480),
    V = n(328968),
    B = n(786300),
    H = n(927578),
    j = n(795791),
    Y = n(211287),
    W = n(158317),
    K = n(123633),
    z = n(624210);
let $ = (0, n(945810).mj)({
    name: "2026-03-orders-dual-write",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var q = n(818348),
    Z = n(853398),
    X = n(120992),
    Q = n(753390),
    J = n(166403),
    ee = n(369827),
    et = n(251913),
    en = n(825755),
    ei = n(153084),
    er = n(166532),
    es = n(566980),
    ea = n(997101),
    eo = n(615405),
    el = n(615310),
    eu = n(87952),
    ec = n(788868);
let [ed, e_, ef] = (0, B.A)();
function eh(e) {
    let { stepConfigs: t, breadcrumbs: n, ...r } = e;
    return (0, i.jsx)(el.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(w.P, { children: (0, i.jsx)(ep, { ...r }) }),
    });
}
function ep(e) {
    var t;
    let n,
        a,
        I,
        T,
        y,
        v,
        O,
        R,
        b,
        w,
        B,
        e_,
        ef,
        {
            loadId: eh,
            discoverySessionId: ep,
            activeSubscription: eE,
            unifiedCheckoutFlow: em,
            shouldCrashOnUnhandledError: eg = !0,
            onUnhandledError: eA,
            skuIDs: eI,
            isGift: eT = !1,
            children: eS,
            defaultPlanId: eN,
            purchaseType: ey = N.VVm.SUBSCRIPTION,
            applicationId: eC,
            referralCode: ev,
            paymentGateway: eO,
            excludeSubscriptionPlansBySKU: eR = !1,
            wasTier2PremiumBeforePurchase: eb = !1,
            referralTrialOfferId: eD,
        } = e,
        eL = (0, eu.A)(),
        ew = (0, m.Hp)(),
        eM =
            ((n = (0, u.bG)([J.A], () => J.A.hasFetchedSubscriptions())),
            r.useEffect(() => {
                n || (0, Q.hP)();
            }, [n]),
            n),
        eP = eI[0],
        ex = (0, u.bG)([F.A], () => F.A.get(eP), [eP]),
        eU = ex?.eligiblePaymentGateways,
        {
            paymentSources: ek,
            hasPaymentSources: eG,
            paymentSourceId: eF,
            setPaymentSourceId: eV,
            hasFetchedPaymentSources: eB,
        } = (0, ee.A)({ isGift: eT, activeSubscription: eE, eligiblePaymentGateways: eU }),
        eH = r.useRef(eG),
        {
            checkoutInvoicePreview: ej,
            selectedSkuId: eY,
            selectedPlanId: eW,
        } = (0, D.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
        })),
        {
            hasFetchedSubscriptionPlans: eK,
            priceOptions: ez,
            setCurrency: e$,
            currencyLoading: eq,
            currencies: eZ,
            displayCurrency: eX,
        } = (0, Z.A)({
            activeSubscription: eE,
            skuIDs: eI,
            paymentSourceId: eF,
            isGift: eT,
            excludeSubscriptionPlansBySKU: eR,
            checkoutInvoicePreview: ej,
        }),
        eQ = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                s = (0, u.bG)([eo.A], () => ea.M.EEA_COUNTRIES.has(eo.A.ipCountryCodeWithFallback));
            return {
                hasViewedPurchaseTerms: e,
                setHasViewedPurchaseTerms: t,
                showWithdrawalWaiver: s,
                hasAcceptedWithdrawalWaiver: !s || n,
                setHasAcceptedWithdrawalWaiver: i,
            };
        })();
    !(function (e) {
        let { purchaseState: t, setPurchaseState: n } = (0, D.t4)((e) => ({
            purchaseState: e.purchaseState,
            setPurchaseState: e.setPurchaseState,
        }));
        r.useEffect(() => {
            null != e && e !== er.pn.REVIEW && t !== es.h.WAITING && t !== es.h.COMPLETED && n(es.h.WAITING);
        }, [e, t, n]);
    })((0, el.bB)());
    let { paymentError: eJ, paymentAuthenticationState: e0 } = (function () {
            let e = (0, u.bG)([en.A], () => en.A.error),
                [t, n] = (0, u.yK)([ei.A], () => [ei.A.error, ei.A.isAwaitingAuthentication]);
            return {
                paymentError: null != t ? t : e,
                paymentAuthenticationState: n ? et.oc.PENDING : null != t ? et.oc.ERROR : et.oc.NONE,
            };
        })(),
        {
            purchaseError: e1,
            purchaseErrorBlockRef: e2,
            setPurchaseError: e3,
        } = (function () {
            let [e, t] = r.useState(null),
                n = r.useRef(null);
            return (
                r.useEffect(() => {
                    null != e && null != n.current && n.current.scrollIntoView({ behavior: "smooth" });
                }, [e]),
                { purchaseError: e, setPurchaseError: t, purchaseErrorBlockRef: n }
            );
        })(),
        e6 = (0, c.A)(() => {
            let e = eh ?? (0, l.A)();
            return (
                S.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: ep, startTime: Date.now() }
            );
        }),
        [e4, e5] = (0, u.yK)([G.A], () => [G.A.purchaseTokenAuthState, G.A.purchaseTokenHash]),
        [e7, e8] = r.useState(null),
        [e9, te] = r.useState(null),
        [tt, tn] = r.useState(null),
        [ti, tr] = r.useState(null),
        [ts, ta] = r.useState(null),
        [to, tl] = r.useState(void 0),
        tu = r.useMemo(() => null == eW || (0, H.ys)(eW), [eW]),
        tc = r.useRef(null != eE ? eE.planId : null);
    r.useEffect(() => {
        null == tc.current && null != eE && (tc.current = eE.planId);
    }, [eE]);
    let { endsAt: td } = (0, g.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        t_ = r.useRef(td.isSame(o()(0)) ? null : td);
    r.useEffect(() => {
        null != t_.current || td.isSame(o()(0)) || (t_.current = td);
    }, [td]);
    let tf = r.useMemo(() => ({ paymentSourceId: eF, paymentGateway: eO, loadId: eh }), [eF, eO, eh]);
    (a = (0, u.bG)([K.A], () => K.A.currentOrder)),
        (I = (0, u.bG)([K.A], () => K.A.currentOrderId)),
        (T = (0, u.bG)([K.A], () => K.A.isCreatingOrder)),
        (y = $.useConfig({ location: "payment_modal" }).enabled),
        (v = Y.A.useConfig({ location: "payment_modal" }).enabled),
        (R = (O = tf.paymentGateway === q.kM.VIRTUAL_CURRENCY) ? v : y),
        (b = (0, r.useRef)(null)),
        (w = (0, r.useRef)("")),
        (B = (0, r.useRef)(!1)),
        (e_ = (0, r.useRef)(!1)),
        (ef = (0, r.useRef)(null)),
        (0, r.useEffect)(() => {
            if (!y || null == I || null == tf.paymentSourceId) return;
            let e = tf.paymentSourceId;
            async function t() {
                var t;
                let n = a ?? (await (0, W.r)(I)),
                    i = n?.billing_facet;
                if (i?.payment_source_id === tf.paymentSourceId) {
                    (b.current = I), (w.current = e);
                    return;
                }
                (t = n),
                    t?.billing_facet?.payment_gateway !== q.kM.VIRTUAL_CURRENCY &&
                        (await (0, z.iY)({ orderId: I, updates: tf }), (b.current = I), (w.current = e));
            }
            (b.current !== I || w.current !== e) && t();
        }, [I, a, tf.paymentSourceId, y]),
        (0, r.useEffect)(() => {
            let e = ef.current;
            (ef.current = I),
                null == I && null != e
                    ? ((e_.current = !0), (b.current = null), (w.current = ""), (B.current = !1))
                    : null != I && (e_.current = !1);
        }, [I]),
        (0, r.useEffect)(() => {
            if (null != I) {
                (B.current = !1), (e_.current = !1);
                return;
            }
            !e_.current &&
                (!R ||
                    T ||
                    B.current ||
                    null == eP ||
                    (null == tf.paymentSourceId && null == tf.paymentGateway) ||
                    ((B.current = !0),
                    (0, z.fS)({
                        skuId: eP,
                        paymentSourceId: O ? void 0 : (tf.paymentSourceId ?? void 0),
                        paymentGateway: tf.paymentGateway,
                        loadId: tf.loadId,
                    })));
        }, [I, T, eP, tf, R, O]);
    let th = r.useMemo(() => eI.filter((e) => !ec.oz.includes(e)), [JSON.stringify(eI)]),
        tp = eC ?? ec.tv;
    (0, X.A)({ applicationId: tp, skuIDs: th });
    let [tE, tm] = r.useState(null),
        { data: tg } = (0, p.YY)(eC),
        tA = k.Q_.useSetting(),
        tI = (0, u.bG)([d.A], () => d.A.getFetchState());
    r.useEffect(() => {
        null != tg && (0, E.n)(tg, N.gfo.EMBEDDED) && tA && null == tI && (0, _.SE)();
    }, [tg, tA, tI]);
    let tT = null != tg && (0, E.n)(tg, N.gfo.EMBEDDED) && (0, E.n)(tg, N.gfo.EMBEDDED_IAP),
        tS = (0, u.bG)([f.Ay], () =>
            Array.from(f.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === eC;
            }),
        ),
        tN = tS?.compositeInstanceId,
        ty = (0, u.bG)([V.A], () => (null != eY ? V.A.getForSKU(eY) : null), [eY]),
        tC = (0, M.ds)() && !eT,
        { isDisplayingWowMomentConfirmation: tv } = (0, u.cf)([P.A], () => ({
            isDisplayingWowMomentConfirmation: P.A.isDisplayingWowMomentConfirmation,
        })),
        { enabled: tO } = ((t = { location: "PaymentContext" }), { enabled: A.A.getConfig(t).enabled }),
        tR = (0, j.$w)(),
        tb = r.useMemo(() => null != eW && eW === ec.gD.PREMIUM_GROUP_MONTH, [eW]),
        tD = (0, U.V)(eD ?? void 0),
        tL = !tb && !eT && null != tD && null != eY && ec.TP[tD.trial_id].skus.includes(eY),
        tw = (0, x.O)(),
        tM = tw?.discount?.plan_ids.some((e) => ec.hd[e].skuId === eY),
        tP = !!(!tb && !eT && null != tw && null != eY && tM),
        tx = null != eF && null != ek[eF] ? ek[eF]?.type : null,
        tU = r.useMemo(
            () => ({ payment_source_id: eF, payment_gateway: eO, payment_source_type: tx, checkout_flow: em }),
            [eF, eO, tx, em],
        ),
        tk = (0, h.Db)(),
        tG = r.useMemo(() => (ey === N.VVm.ONE_TIME ? (0, i.jsx)(L, {}) : null), [ey]);
    return (0, i.jsx)(ed.Provider, {
        value: {
            stripe: eL,
            unifiedCheckoutFlow: em,
            paymentElementsEnabled: tO,
            contextMetadata: e6,
            blockedPayments: ew,
            activeSubscription: eE,
            hasFetchedSubscriptions: eM,
            hasFetchedSubscriptionPlans: eK,
            updatedSubscription: ti,
            setUpdatedSubscription: tr,
            subscriptionMetadataRequest: ts,
            setSubscriptionMetadataRequest: ta,
            hasFetchedPaymentSources: eB,
            paymentSources: ek,
            hasPaymentSources: eG,
            paymentSourceId: eF,
            setPaymentSourceId: eV,
            priceOptions: ez,
            setCurrency: e$,
            currencyLoading: eq,
            currencies: eZ,
            displayCurrency: eX,
            ...eQ,
            paymentAuthenticationState: e0,
            paymentError: eJ,
            purchaseError: e1,
            setPurchaseError: e3,
            purchasePreviewError: tE,
            setPurchasePreviewError: tm,
            purchaseErrorBlockRef: e2,
            purchaseTokenAuthState: e4,
            purchaseTokenHash: e5,
            bodyNode: e7,
            setBodyNode: e8,
            footerNode: e9,
            setFooterNode: te,
            modalOverlayNode: tt,
            setModalOverlayNode: tn,
            selectedStoreListing: ty,
            readySlideId: to,
            setReadySlideId: tl,
            defaultPlanId: eN,
            isPremium: tu,
            isGift: eT,
            startingFractionalPremiumEndsAtRef: t_,
            startedPaymentFlowWithPaymentSourcesRef: eH,
            startingPremiumSubscriptionPlanIdRef: tc,
            defaultFetchableSkuIds: th,
            application: tg,
            applicationId: tp,
            purchaseType: ey,
            isEmbeddedIAP: tT,
            activitySessionId: tN,
            devShelfFetchState: tI,
            referralCode: ev,
            inReverseTrial: tC,
            enablePremiumBrandRefresh: tu,
            isDisplayingWowMomentConfirmation: tv,
            wasTier2PremiumBeforePurchase: eb,
            customCheckoutFlow: tR,
            isPremiumGroupPurchase: tb,
            isEligibleForTrial: tL,
            isEligibleForDiscount: tP,
            userTrialOffer: tD,
            referralTrialOfferId: eD,
            discountOffer: tw,
        },
        children: (0, i.jsx)(s.Elements, {
            options: N.XL8,
            stripe: eL,
            children: (0, i.jsxs)(C, {
                shouldRethrowError: eg,
                locationStack: tk,
                onUnhandledError: eA,
                loadId: e6.loadId,
                selectedSkuId: eY ?? null,
                selectedPlanId: eW ?? null,
                isGift: eT,
                purchaseType: ey,
                additionalAnalyticsData: tU,
                children: [ey === N.VVm.ONE_TIME && tG, eS],
            }),
        }),
    });
}
