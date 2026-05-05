"use strict";
n.d(t, { P5: () => ec, Qv: () => eu, PaymentContextProvider: () => e_ });
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
        { setPurchasePreviewError: o, applicationId: l, paymentSourceId: u, isGift: c, priceOptions: d } = ec(),
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
var D = n(181447),
    L = n(881489),
    w = n(573359),
    M = n(422936),
    P = n(234419),
    x = n(885386),
    U = n(293700),
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
    en = n(166532),
    ei = n(566980),
    er = n(997101),
    es = n(615405),
    ea = n(615310),
    eo = n(87952),
    el = n(788868);
let [eu, ec, ed] = (0, F.A)();
function e_(e) {
    let { stepConfigs: t, breadcrumbs: n, loadId: r, discoverySessionId: s, ...a } = e;
    return (0, i.jsx)(ea.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(D.P, { loadId: r, discoverySessionId: s, children: (0, i.jsx)(ef, { ...a }) }),
    });
}
function ef(e) {
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
        ec,
        {
            activeSubscription: ed,
            unifiedCheckoutFlow: e_,
            shouldCrashOnUnhandledError: ef = !0,
            onUnhandledError: eh,
            skuIDs: ep,
            isGift: eE = !1,
            children: em,
            defaultPlanId: eg,
            purchaseType: eA = T.VVm.SUBSCRIPTION,
            applicationId: eI,
            referralCode: eT,
            paymentGateway: eS,
            excludeSubscriptionPlansBySKU: eN = !1,
            wasTier2PremiumBeforePurchase: ey = !1,
            referralTrialOfferId: eC,
        } = e,
        ev = (0, eo.A)(),
        eO = (0, p.Hp)(),
        eR =
            ((n = (0, l.bG)([X.A], () => X.A.hasFetchedSubscriptions())),
            r.useEffect(() => {
                n || (0, Z.hP)();
            }, [n]),
            n),
        eb = ep[0],
        eD = (0, l.bG)([k.A], () => k.A.get(eb), [eb]),
        eL = eD?.eligiblePaymentGateways,
        {
            paymentSources: ew,
            hasPaymentSources: eM,
            paymentSourceId: eP,
            setPaymentSourceId: ex,
            hasFetchedPaymentSources: eU,
        } = (0, Q.A)({ isGift: eE, activeSubscription: ed, eligiblePaymentGateways: eL }),
        ek = r.useRef(eM),
        {
            contextMetadata: eG,
            checkoutInvoicePreview: eF,
            selectedSkuId: eV,
            selectedPlanId: eB,
        } = (0, R.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
        })),
        {
            hasFetchedSubscriptionPlans: eH,
            priceOptions: ej,
            setCurrency: eY,
            currencyLoading: eW,
            currencies: eK,
            displayCurrency: ez,
        } = (0, $.A)({
            activeSubscription: ed,
            skuIDs: ep,
            paymentSourceId: eP,
            isGift: eE,
            excludeSubscriptionPlansBySKU: eN,
            checkoutInvoicePreview: eF,
        }),
        e$ = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                s = (0, l.bG)([es.A], () => er.M.EEA_COUNTRIES.has(es.A.ipCountryCodeWithFallback));
            return {
                hasViewedPurchaseTerms: e,
                setHasViewedPurchaseTerms: t,
                showWithdrawalWaiver: s,
                hasAcceptedWithdrawalWaiver: !s || n,
                setHasAcceptedWithdrawalWaiver: i,
            };
        })();
    !(function (e) {
        let { purchaseState: t, setPurchaseState: n } = (0, R.t4)((e) => ({
            purchaseState: e.purchaseState,
            setPurchaseState: e.setPurchaseState,
        }));
        r.useEffect(() => {
            null != e && e !== en.pn.REVIEW && t !== ei.h.WAITING && t !== ei.h.COMPLETED && n(ei.h.WAITING);
        }, [e, t, n]);
    })((0, ea.bB)());
    let { paymentError: eq, paymentAuthenticationState: eZ } = (function () {
            let e = (0, l.bG)([ee.A], () => ee.A.error),
                [t, n] = (0, l.yK)([et.A], () => [et.A.error, et.A.isAwaitingAuthentication]);
            return {
                paymentError: null != t ? t : e,
                paymentAuthenticationState: n ? J.oc.PENDING : null != t ? J.oc.ERROR : J.oc.NONE,
            };
        })(),
        {
            purchaseError: eX,
            purchaseErrorBlockRef: eQ,
            setPurchaseError: eJ,
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
        [e0, e1] = (0, l.yK)([U.A], () => [U.A.purchaseTokenAuthState, U.A.purchaseTokenHash]),
        [e2, e3] = r.useState(null),
        [e6, e4] = r.useState(null),
        [e5, e7] = r.useState(null),
        [e8, e9] = r.useState(null),
        [te, tt] = r.useState(null),
        [tn, ti] = r.useState(void 0),
        tr = r.useMemo(() => null == eB || (0, V.ys)(eB), [eB]),
        ts = r.useRef(null != ed ? ed.planId : null);
    r.useEffect(() => {
        null == ts.current && null != ed && (ts.current = ed.planId);
    }, [ed]);
    let { endsAt: ta } = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        to = r.useRef(ta.isSame(o()(0)) ? null : ta);
    r.useEffect(() => {
        null != to.current || ta.isSame(o()(0)) || (to.current = ta);
    }, [ta]);
    let tl = r.useMemo(() => ({ paymentSourceId: eP, paymentGateway: eS, loadId: eG.loadId }), [eP, eS, eG.loadId]);
    (a = (0, l.bG)([Y.A], () => Y.A.currentOrder)),
        (g = (0, l.bG)([Y.A], () => Y.A.currentOrderId)),
        (A = (0, l.bG)([Y.A], () => Y.A.isCreatingOrder)),
        (I = K.useConfig({ location: "payment_modal" }).enabled),
        (S = H.A.useConfig({ location: "payment_modal" }).enabled),
        (C = (y = tl.paymentGateway === z.kM.VIRTUAL_CURRENCY) ? S : I),
        (v = (0, r.useRef)(null)),
        (O = (0, r.useRef)("")),
        (D = (0, r.useRef)(!1)),
        (F = (0, r.useRef)(!1)),
        (ec = (0, r.useRef)(null)),
        (0, r.useEffect)(() => {
            if (!I || null == g || null == tl.paymentSourceId) return;
            let e = tl.paymentSourceId;
            async function t() {
                var t;
                let n = a ?? (await (0, j.r)(g)),
                    i = n?.billing_facet;
                if (i?.payment_source_id === tl.paymentSourceId) {
                    (v.current = g), (O.current = e);
                    return;
                }
                (t = n),
                    t?.billing_facet?.payment_gateway !== z.kM.VIRTUAL_CURRENCY &&
                        (await (0, W.iY)({ orderId: g, updates: tl }), (v.current = g), (O.current = e));
            }
            (v.current !== g || O.current !== e) && t();
        }, [g, a, tl.paymentSourceId, I]),
        (0, r.useEffect)(() => {
            let e = ec.current;
            (ec.current = g),
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
                    null == eb ||
                    (null == tl.paymentSourceId && null == tl.paymentGateway) ||
                    ((D.current = !0),
                    (0, W.fS)({
                        skuId: eb,
                        paymentSourceId: y ? void 0 : (tl.paymentSourceId ?? void 0),
                        paymentGateway: tl.paymentGateway,
                        loadId: tl.loadId,
                    })));
        }, [g, A, eb, tl, C, y]);
    let tu = r.useMemo(() => ep.filter((e) => !el.oz.includes(e)), [JSON.stringify(ep)]),
        tc = eI ?? el.tv;
    (0, q.A)({ applicationId: tc, skuIDs: tu });
    let [td, t_] = r.useState(null),
        { data: tf } = (0, f.YY)(eI),
        th = x.Q_.useSetting(),
        tp = (0, l.bG)([u.A], () => u.A.getFetchState());
    r.useEffect(() => {
        null != tf && (0, h.n)(tf, T.gfo.EMBEDDED) && th && null == tp && (0, c.SE)();
    }, [tf, th, tp]);
    let tE = null != tf && (0, h.n)(tf, T.gfo.EMBEDDED) && (0, h.n)(tf, T.gfo.EMBEDDED_IAP),
        tm = (0, l.bG)([d.Ay], () =>
            Array.from(d.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === eI;
            }),
        ),
        tg = tm?.compositeInstanceId,
        tA = (0, l.bG)([G.A], () => (null != eV ? G.A.getForSKU(eV) : null), [eV]),
        tI = (0, L.ds)() && !eE,
        { isDisplayingWowMomentConfirmation: tT } = (0, l.cf)([w.A], () => ({
            isDisplayingWowMomentConfirmation: w.A.isDisplayingWowMomentConfirmation,
        })),
        { enabled: tS } = ((t = { location: "PaymentContext" }), { enabled: m.A.getConfig(t).enabled }),
        tN = (0, B.$w)(),
        ty = r.useMemo(() => null != eB && eB === el.gD.PREMIUM_GROUP_MONTH, [eB]),
        tC = (0, P.V)(eC ?? void 0),
        tv = !ty && !eE && null != tC && null != eV && el.TP[tC.trial_id].skus.includes(eV),
        tO = (0, M.O)(),
        tR = tO?.discount?.plan_ids.some((e) => el.hd[e].skuId === eV),
        tb = !!(!ty && !eE && null != tO && null != eV && tR),
        tD = null != eP && null != ew[eP] ? ew[eP]?.type : null,
        tL = r.useMemo(
            () => ({ payment_source_id: eP, payment_gateway: eS, payment_source_type: tD, checkout_flow: e_ }),
            [eP, eS, tD, e_],
        ),
        tw = (0, _.Db)(),
        tM = r.useMemo(() => (eA === T.VVm.ONE_TIME ? (0, i.jsx)(b, {}) : null), [eA]);
    return (0, i.jsx)(eu.Provider, {
        value: {
            stripe: ev,
            unifiedCheckoutFlow: e_,
            paymentElementsEnabled: tS,
            blockedPayments: eO,
            activeSubscription: ed,
            hasFetchedSubscriptions: eR,
            hasFetchedSubscriptionPlans: eH,
            updatedSubscription: e8,
            setUpdatedSubscription: e9,
            subscriptionMetadataRequest: te,
            setSubscriptionMetadataRequest: tt,
            hasFetchedPaymentSources: eU,
            paymentSources: ew,
            hasPaymentSources: eM,
            paymentSourceId: eP,
            setPaymentSourceId: ex,
            priceOptions: ej,
            setCurrency: eY,
            currencyLoading: eW,
            currencies: eK,
            displayCurrency: ez,
            ...e$,
            paymentAuthenticationState: eZ,
            paymentError: eq,
            purchaseError: eX,
            setPurchaseError: eJ,
            purchasePreviewError: td,
            setPurchasePreviewError: t_,
            purchaseErrorBlockRef: eQ,
            purchaseTokenAuthState: e0,
            purchaseTokenHash: e1,
            bodyNode: e2,
            setBodyNode: e3,
            footerNode: e6,
            setFooterNode: e4,
            modalOverlayNode: e5,
            setModalOverlayNode: e7,
            selectedStoreListing: tA,
            readySlideId: tn,
            setReadySlideId: ti,
            defaultPlanId: eg,
            isPremium: tr,
            isGift: eE,
            startingFractionalPremiumEndsAtRef: to,
            startedPaymentFlowWithPaymentSourcesRef: ek,
            startingPremiumSubscriptionPlanIdRef: ts,
            defaultFetchableSkuIds: tu,
            application: tf,
            applicationId: tc,
            purchaseType: eA,
            isEmbeddedIAP: tE,
            activitySessionId: tg,
            devShelfFetchState: tp,
            referralCode: eT,
            inReverseTrial: tI,
            isDisplayingWowMomentConfirmation: tT,
            wasTier2PremiumBeforePurchase: ey,
            customCheckoutFlow: tN,
            isPremiumGroupPurchase: ty,
            isEligibleForTrial: tv,
            isEligibleForDiscount: tb,
            userTrialOffer: tC,
            referralTrialOfferId: eC,
            discountOffer: tO,
        },
        children: (0, i.jsx)(s.Elements, {
            options: T.XL8,
            stripe: ev,
            children: (0, i.jsxs)(N, {
                shouldRethrowError: ef,
                locationStack: tw,
                onUnhandledError: eh,
                loadId: eG.loadId,
                selectedSkuId: eV ?? null,
                selectedPlanId: eB ?? null,
                isGift: eE,
                purchaseType: eA,
                additionalAnalyticsData: tL,
                children: [eA === T.VVm.ONE_TIME && tM, em],
            }),
        }),
    });
}
