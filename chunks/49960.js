"use strict";
n.d(t, { P5: () => el, Qv: () => eo, PaymentContextProvider: () => ec });
var i = n(627968),
    r = n(64700),
    s = n(342393),
    a = n(989349),
    o = n.n(a),
    l = n(17928),
    u = n(10716),
    c = n(795816),
    d = n(933958),
    _ = n(688810),
    f = n(627363),
    h = n(20015),
    p = n(86379),
    E = n(531260),
    m = n(885180),
    g = n(626584),
    A = n(174459),
    I = n(38405),
    T = n(652215);
let S = new g.A("CheckoutErrorBoundary.tsx");
class N extends r.PureComponent {
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
        I.A.captureException(e, d), S.error("Checkout error occurred:", { error: e, additionalErrorContext: c });
        let _ = "string" == typeof e ? e : e.message;
        if (
            (A.default.track(T.HAw.PAYMENT_FLOW_ERROR, {
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
var y = n(830382),
    C = n(543767),
    v = n(570221),
    O = n(666646),
    R = n(94420);
let b = () => {
    var e;
    let t,
        n,
        i,
        s,
        a = (0, R.t4)((e) => e.selectedSkuId),
        { setPurchasePreviewError: o, applicationId: l, paymentSourceId: u, isGift: c, priceOptions: d } = el(),
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
                let s = await (0, y.NY)(r);
                return null != s ? v.A.createFromOTPPreview(s) : null;
            }, [i])),
            (0, C.$n)(e, s, void 0));
    return (
        (0, O.F0)(_, f),
        r.useEffect(() => {
            o(f);
        }, [f, o]),
        null
    );
};
var D = n(460495),
    L = n(881489),
    w = n(573359),
    M = n(422936),
    P = n(234419),
    x = n(885386),
    U = n(71319),
    k = n(67480),
    G = n(328968),
    F = n(786300),
    V = n(927578),
    B = n(795791),
    H = n(211287),
    j = n(158317),
    Y = n(123633),
    W = n(624210);
let K = (0, n(945810).mj)({
    name: "2026-03-orders-dual-write",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var z = n(818348),
    $ = n(853398),
    q = n(120992),
    Z = n(753390),
    X = n(166403),
    Q = n(369827),
    J = n(251913),
    ee = n(825755),
    et = n(153084),
    en = n(997101),
    ei = n(615405),
    er = n(615310),
    es = n(87952),
    ea = n(788868);
let [eo, el, eu] = (0, F.A)();
function ec(e) {
    let { stepConfigs: t, breadcrumbs: n, loadId: r, discoverySessionId: s, ...a } = e;
    return (0, i.jsx)(er.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(D.P, { loadId: r, discoverySessionId: s, children: (0, i.jsx)(ed, { ...a }) }),
    });
}
function ed(e) {
    var t;
    let n,
        a,
        g,
        A,
        I,
        S,
        y,
        C,
        v,
        O,
        D,
        F,
        er,
        {
            activeSubscription: el,
            unifiedCheckoutFlow: eu,
            shouldCrashOnUnhandledError: ec = !0,
            onUnhandledError: ed,
            skuIDs: e_,
            isGift: ef = !1,
            children: eh,
            defaultPlanId: ep,
            purchaseType: eE = T.VVm.SUBSCRIPTION,
            applicationId: em,
            referralCode: eg,
            paymentGateway: eA,
            excludeSubscriptionPlansBySKU: eI = !1,
            wasTier2PremiumBeforePurchase: eT = !1,
            referralTrialOfferId: eS,
        } = e,
        eN = (0, es.A)(),
        ey = (0, p.Hp)(),
        eC =
            ((n = (0, l.bG)([X.A], () => X.A.hasFetchedSubscriptions())),
            r.useEffect(() => {
                n || (0, Z.hP)();
            }, [n]),
            n),
        ev = e_[0],
        eO = (0, l.bG)([k.A], () => k.A.get(ev), [ev]),
        eR = eO?.eligiblePaymentGateways,
        {
            paymentSources: eb,
            hasPaymentSources: eD,
            paymentSourceId: eL,
            setPaymentSourceId: ew,
            hasFetchedPaymentSources: eM,
        } = (0, Q.A)({ isGift: ef, activeSubscription: el, eligiblePaymentGateways: eR }),
        eP = r.useRef(eD),
        {
            contextMetadata: ex,
            checkoutInvoicePreview: eU,
            selectedSkuId: ek,
            selectedPlanId: eG,
        } = (0, R.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
        })),
        {
            hasFetchedSubscriptionPlans: eF,
            priceOptions: eV,
            setCurrency: eB,
            currencyLoading: eH,
            currencies: ej,
            displayCurrency: eY,
        } = (0, $.A)({
            activeSubscription: el,
            skuIDs: e_,
            paymentSourceId: eL,
            isGift: ef,
            excludeSubscriptionPlansBySKU: eI,
            checkoutInvoicePreview: eU,
        }),
        eW = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                s = (0, l.bG)([ei.A], () => en.M.EEA_COUNTRIES.has(ei.A.ipCountryCodeWithFallback));
            return {
                hasViewedPurchaseTerms: e,
                setHasViewedPurchaseTerms: t,
                showWithdrawalWaiver: s,
                hasAcceptedWithdrawalWaiver: !s || n,
                setHasAcceptedWithdrawalWaiver: i,
            };
        })(),
        { paymentError: eK, paymentAuthenticationState: ez } = (function () {
            let e = (0, l.bG)([ee.A], () => ee.A.error),
                [t, n] = (0, l.yK)([et.A], () => [et.A.error, et.A.isAwaitingAuthentication]);
            return {
                paymentError: null != t ? t : e,
                paymentAuthenticationState: n ? J.oc.PENDING : null != t ? J.oc.ERROR : J.oc.NONE,
            };
        })(),
        {
            purchaseError: e$,
            purchaseErrorBlockRef: eq,
            setPurchaseError: eZ,
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
        [eX, eQ] = (0, l.yK)([U.A], () => [U.A.purchaseTokenAuthState, U.A.purchaseTokenHash]),
        [eJ, e0] = r.useState(null),
        [e1, e2] = r.useState(null),
        [e3, e6] = r.useState(null),
        [e4, e5] = r.useState(null),
        [e7, e8] = r.useState(null),
        [e9, te] = r.useState(void 0),
        tt = r.useMemo(() => null == eG || (0, V.ys)(eG), [eG]),
        tn = r.useRef(null != el ? el.planId : null);
    r.useEffect(() => {
        null == tn.current && null != el && (tn.current = el.planId);
    }, [el]);
    let { endsAt: ti } = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        tr = r.useRef(ti.isSame(o()(0)) ? null : ti);
    r.useEffect(() => {
        null != tr.current || ti.isSame(o()(0)) || (tr.current = ti);
    }, [ti]);
    let ts = r.useMemo(() => ({ paymentSourceId: eL, paymentGateway: eA, loadId: ex.loadId }), [eL, eA, ex.loadId]);
    (a = (0, l.bG)([Y.A], () => Y.A.currentOrder)),
        (g = (0, l.bG)([Y.A], () => Y.A.currentOrderId)),
        (A = (0, l.bG)([Y.A], () => Y.A.isCreatingOrder)),
        (I = K.useConfig({ location: "payment_modal" }).enabled),
        (S = H.A.useConfig({ location: "payment_modal" }).enabled),
        (C = (y = ts.paymentGateway === z.kM.VIRTUAL_CURRENCY) ? S : I),
        (v = (0, r.useRef)(null)),
        (O = (0, r.useRef)("")),
        (D = (0, r.useRef)(!1)),
        (F = (0, r.useRef)(!1)),
        (er = (0, r.useRef)(null)),
        (0, r.useEffect)(() => {
            if (!I || null == g || null == ts.paymentSourceId) return;
            let e = ts.paymentSourceId;
            async function t() {
                var t;
                let n = a ?? (await (0, j.r)(g)),
                    i = n?.billing_facet;
                if (i?.payment_source_id === ts.paymentSourceId) {
                    (v.current = g), (O.current = e);
                    return;
                }
                (t = n),
                    t?.billing_facet?.payment_gateway !== z.kM.VIRTUAL_CURRENCY &&
                        (await (0, W.iY)({ orderId: g, updates: ts }), (v.current = g), (O.current = e));
            }
            (v.current !== g || O.current !== e) && t();
        }, [g, a, ts.paymentSourceId, I]),
        (0, r.useEffect)(() => {
            let e = er.current;
            (er.current = g),
                null == g && null != e
                    ? ((F.current = !0), (v.current = null), (O.current = ""), (D.current = !1))
                    : null != g && (F.current = !1);
        }, [g]),
        (0, r.useEffect)(() => {
            if (null != g) {
                (D.current = !1), (F.current = !1);
                return;
            }
            !F.current &&
                (!C ||
                    A ||
                    D.current ||
                    null == ev ||
                    (null == ts.paymentSourceId && null == ts.paymentGateway) ||
                    ((D.current = !0),
                    (0, W.fS)({
                        skuId: ev,
                        paymentSourceId: y ? void 0 : (ts.paymentSourceId ?? void 0),
                        paymentGateway: ts.paymentGateway,
                        loadId: ts.loadId,
                    })));
        }, [g, A, ev, ts, C, y]);
    let ta = r.useMemo(() => e_.filter((e) => !ea.oz.includes(e)), [JSON.stringify(e_)]),
        to = em ?? ea.tv;
    (0, q.A)({ applicationId: to, skuIDs: ta });
    let [tl, tu] = r.useState(null),
        { data: tc } = (0, f.YY)(em),
        td = x.Q_.useSetting(),
        t_ = (0, l.bG)([u.A], () => u.A.getFetchState());
    r.useEffect(() => {
        null != tc && (0, h.n)(tc, T.gfo.EMBEDDED) && td && null == t_ && (0, c.SE)();
    }, [tc, td, t_]);
    let tf = null != tc && (0, h.n)(tc, T.gfo.EMBEDDED) && (0, h.n)(tc, T.gfo.EMBEDDED_IAP),
        th = (0, l.bG)([d.Ay], () =>
            Array.from(d.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === em;
            }),
        ),
        tp = th?.compositeInstanceId,
        tE = (0, l.bG)([G.A], () => (null != ek ? G.A.getForSKU(ek) : null), [ek]),
        tm = (0, L.ds)() && !ef,
        { isDisplayingWowMomentConfirmation: tg } = (0, l.cf)([w.A], () => ({
            isDisplayingWowMomentConfirmation: w.A.isDisplayingWowMomentConfirmation,
        })),
        { enabled: tA } = ((t = { location: "PaymentContext" }), { enabled: m.A.getConfig(t).enabled }),
        tI = (0, B.$w)(),
        tT = r.useMemo(() => null != eG && eG === ea.gD.PREMIUM_GROUP_MONTH, [eG]),
        tS = (0, P.V)(eS ?? void 0),
        tN = !tT && !ef && null != tS && null != ek && ea.TP[tS.trial_id].skus.includes(ek),
        ty = (0, M.O)(),
        tC = ty?.discount?.plan_ids.some((e) => ea.hd[e].skuId === ek),
        tv = !!(!tT && !ef && null != ty && null != ek && tC),
        tO = null != eL && null != eb[eL] ? eb[eL]?.type : null,
        tR = r.useMemo(
            () => ({ payment_source_id: eL, payment_gateway: eA, payment_source_type: tO, checkout_flow: eu }),
            [eL, eA, tO, eu],
        ),
        tb = (0, _.Db)(),
        tD = r.useMemo(() => (eE === T.VVm.ONE_TIME ? (0, i.jsx)(b, {}) : null), [eE]);
    return (0, i.jsx)(eo.Provider, {
        value: {
            stripe: eN,
            unifiedCheckoutFlow: eu,
            paymentElementsEnabled: tA,
            blockedPayments: ey,
            activeSubscription: el,
            hasFetchedSubscriptions: eC,
            hasFetchedSubscriptionPlans: eF,
            updatedSubscription: e4,
            setUpdatedSubscription: e5,
            subscriptionMetadataRequest: e7,
            setSubscriptionMetadataRequest: e8,
            hasFetchedPaymentSources: eM,
            paymentSources: eb,
            hasPaymentSources: eD,
            paymentSourceId: eL,
            setPaymentSourceId: ew,
            priceOptions: eV,
            setCurrency: eB,
            currencyLoading: eH,
            currencies: ej,
            displayCurrency: eY,
            ...eW,
            paymentAuthenticationState: ez,
            paymentError: eK,
            purchaseError: e$,
            setPurchaseError: eZ,
            purchasePreviewError: tl,
            setPurchasePreviewError: tu,
            purchaseErrorBlockRef: eq,
            purchaseTokenAuthState: eX,
            purchaseTokenHash: eQ,
            bodyNode: eJ,
            setBodyNode: e0,
            footerNode: e1,
            setFooterNode: e2,
            modalOverlayNode: e3,
            setModalOverlayNode: e6,
            selectedStoreListing: tE,
            readySlideId: e9,
            setReadySlideId: te,
            defaultPlanId: ep,
            isPremium: tt,
            isGift: ef,
            startingFractionalPremiumEndsAtRef: tr,
            startedPaymentFlowWithPaymentSourcesRef: eP,
            startingPremiumSubscriptionPlanIdRef: tn,
            defaultFetchableSkuIds: ta,
            application: tc,
            applicationId: to,
            purchaseType: eE,
            isEmbeddedIAP: tf,
            activitySessionId: tp,
            devShelfFetchState: t_,
            referralCode: eg,
            inReverseTrial: tm,
            isDisplayingWowMomentConfirmation: tg,
            wasTier2PremiumBeforePurchase: eT,
            customCheckoutFlow: tI,
            isPremiumGroupPurchase: tT,
            isEligibleForTrial: tN,
            isEligibleForDiscount: tv,
            userTrialOffer: tS,
            referralTrialOfferId: eS,
            discountOffer: ty,
        },
        children: (0, i.jsx)(s.Elements, {
            options: T.XL8,
            stripe: eN,
            children: (0, i.jsxs)(N, {
                shouldRethrowError: ec,
                locationStack: tb,
                onUnhandledError: ed,
                loadId: ex.loadId,
                selectedSkuId: ek ?? null,
                selectedPlanId: eG ?? null,
                isGift: ef,
                purchaseType: eE,
                additionalAnalyticsData: tR,
                children: [eE === T.VVm.ONE_TIME && tD, eh],
            }),
        }),
    });
}
