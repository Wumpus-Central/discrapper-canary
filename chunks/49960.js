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
    g = n(120700),
    A = n(626584),
    I = n(174459),
    T = n(38405),
    S = n(652215);
let N = new A.A("CheckoutErrorBoundary.tsx");
class y extends r.PureComponent {
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
        T.A.captureException(e, d), N.error("Checkout error occurred:", { error: e, additionalErrorContext: c });
        let _ = "string" == typeof e ? e : e.message;
        if (
            (I.default.track(S.HAw.PAYMENT_FLOW_ERROR, {
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
var C = n(566980),
    v = n(830382),
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
        { selectedSkuId: a, purchaseState: o } = (0, D.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        { setPurchasePreviewError: l, applicationId: u, paymentSourceId: c, isGift: d, priceOptions: _ } = ec(),
        f = o === C.h.PURCHASING || o === C.h.COMPLETED,
        [h, p] =
            ((e = r.useMemo(
                () => ({
                    applicationId: u,
                    skuId: a,
                    paymentSourceId: c,
                    isGift: d,
                    currency: _.loaded ? _.currency : void 0,
                    preventFetch: f,
                }),
                [u, a, c, d, _, f],
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
        (0, b.F0)(h, p),
        r.useEffect(() => {
            l(p);
        }, [p, l]),
        null
    );
};
var w = n(460495),
    M = n(881489),
    P = n(573359),
    x = n(422936),
    U = n(234419),
    k = n(885386),
    G = n(71319),
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
    er = n(997101),
    es = n(615405),
    ea = n(615310),
    eo = n(87952),
    el = n(788868);
let [eu, ec, ed] = (0, B.A)();
function e_(e) {
    let { stepConfigs: t, breadcrumbs: n, loadId: r, discoverySessionId: s, ...a } = e;
    return (0, i.jsx)(ea.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(w.P, { loadId: r, discoverySessionId: s, children: (0, i.jsx)(ef, { ...a }) }),
    });
}
function ef(e) {
    var t;
    let n,
        a,
        A,
        I,
        T,
        N,
        C,
        v,
        O,
        R,
        b,
        w,
        B,
        {
            activeSubscription: ea,
            unifiedCheckoutFlow: ec,
            shouldCrashOnUnhandledError: ed = !0,
            onUnhandledError: e_,
            skuIDs: ef,
            isGift: eh = !1,
            children: ep,
            defaultPlanId: eE,
            purchaseType: em = S.VVm.SUBSCRIPTION,
            applicationId: eg,
            referralCode: eA,
            paymentGateway: eI,
            excludeSubscriptionPlansBySKU: eT = !1,
            wasTier2PremiumBeforePurchase: eS = !1,
            referralTrialOfferId: eN,
        } = e,
        ey = (0, eo.A)(),
        eC = (0, p.Hp)(),
        ev =
            ((n = (0, l.bG)([J.A], () => J.A.hasFetchedSubscriptions())),
            r.useEffect(() => {
                n || (0, Q.hP)();
            }, [n]),
            n),
        eO = ef[0],
        eR = (0, l.bG)([F.A], () => F.A.get(eO), [eO]),
        eb = eR?.eligiblePaymentGateways,
        {
            paymentSources: eD,
            hasPaymentSources: eL,
            paymentSourceId: ew,
            setPaymentSourceId: eM,
            hasFetchedPaymentSources: eP,
        } = (0, ee.A)({ isGift: eh, activeSubscription: ea, eligiblePaymentGateways: eb }),
        ex = r.useRef(eL),
        {
            contextMetadata: eU,
            checkoutInvoicePreview: ek,
            selectedSkuId: eG,
            selectedPlanId: eF,
        } = (0, D.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
        })),
        {
            hasFetchedSubscriptionPlans: eV,
            priceOptions: eB,
            setCurrency: eH,
            currencyLoading: ej,
            currencies: eY,
            displayCurrency: eW,
        } = (0, Z.A)({
            activeSubscription: ea,
            skuIDs: ef,
            paymentSourceId: ew,
            isGift: eh,
            excludeSubscriptionPlansBySKU: eT,
            checkoutInvoicePreview: ek,
        }),
        eK = (function () {
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
        })(),
        { paymentError: ez, paymentAuthenticationState: e$ } = (function () {
            let e = (0, l.bG)([en.A], () => en.A.error),
                [t, n] = (0, l.yK)([ei.A], () => [ei.A.error, ei.A.isAwaitingAuthentication]);
            return {
                paymentError: null != t ? t : e,
                paymentAuthenticationState: n ? et.oc.PENDING : null != t ? et.oc.ERROR : et.oc.NONE,
            };
        })(),
        {
            purchaseError: eq,
            purchaseErrorBlockRef: eZ,
            setPurchaseError: eX,
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
        [eQ, eJ] = (0, l.yK)([G.A], () => [G.A.purchaseTokenAuthState, G.A.purchaseTokenHash]),
        [e0, e1] = r.useState(null),
        [e2, e3] = r.useState(null),
        [e6, e4] = r.useState(null),
        [e5, e7] = r.useState(null),
        [e8, e9] = r.useState(null),
        [te, tt] = r.useState(void 0),
        tn = r.useMemo(() => null == eF || (0, H.ys)(eF), [eF]),
        ti = r.useRef(null != ea ? ea.planId : null);
    r.useEffect(() => {
        null == ti.current && null != ea && (ti.current = ea.planId);
    }, [ea]);
    let { endsAt: tr } = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        ts = r.useRef(tr.isSame(o()(0)) ? null : tr);
    r.useEffect(() => {
        null != ts.current || tr.isSame(o()(0)) || (ts.current = tr);
    }, [tr]);
    let ta = r.useMemo(() => ({ paymentSourceId: ew, paymentGateway: eI, loadId: eU.loadId }), [ew, eI, eU.loadId]);
    (a = (0, l.bG)([K.A], () => K.A.currentOrder)),
        (A = (0, l.bG)([K.A], () => K.A.currentOrderId)),
        (I = (0, l.bG)([K.A], () => K.A.isCreatingOrder)),
        (T = $.useConfig({ location: "payment_modal" }).enabled),
        (N = Y.A.useConfig({ location: "payment_modal" }).enabled),
        (v = (C = ta.paymentGateway === q.kM.VIRTUAL_CURRENCY) ? N : T),
        (O = (0, r.useRef)(null)),
        (R = (0, r.useRef)("")),
        (b = (0, r.useRef)(!1)),
        (w = (0, r.useRef)(!1)),
        (B = (0, r.useRef)(null)),
        (0, r.useEffect)(() => {
            if (!T || null == A || null == ta.paymentSourceId) return;
            let e = ta.paymentSourceId;
            async function t() {
                var t;
                let n = a ?? (await (0, W.r)(A)),
                    i = n?.billing_facet;
                if (i?.payment_source_id === ta.paymentSourceId) {
                    (O.current = A), (R.current = e);
                    return;
                }
                (t = n),
                    t?.billing_facet?.payment_gateway !== q.kM.VIRTUAL_CURRENCY &&
                        (await (0, z.iY)({ orderId: A, updates: ta }), (O.current = A), (R.current = e));
            }
            (O.current !== A || R.current !== e) && t();
        }, [A, a, ta.paymentSourceId, T]),
        (0, r.useEffect)(() => {
            let e = B.current;
            (B.current = A),
                null == A && null != e
                    ? ((w.current = !0), (O.current = null), (R.current = ""), (b.current = !1))
                    : null != A && (w.current = !1);
        }, [A]),
        (0, r.useEffect)(() => {
            if (null != A) {
                (b.current = !1), (w.current = !1);
                return;
            }
            !w.current &&
                (!v ||
                    I ||
                    b.current ||
                    null == eO ||
                    (null == ta.paymentSourceId && null == ta.paymentGateway) ||
                    ((b.current = !0),
                    (0, z.fS)({
                        skuId: eO,
                        paymentSourceId: C ? void 0 : (ta.paymentSourceId ?? void 0),
                        paymentGateway: ta.paymentGateway,
                        loadId: ta.loadId,
                    })));
        }, [A, I, eO, ta, v, C]);
    let to = r.useMemo(() => ef.filter((e) => !el.oz.includes(e)), [JSON.stringify(ef)]),
        tl = eg ?? el.tv;
    (0, X.A)({ applicationId: tl, skuIDs: to });
    let [tu, tc] = r.useState(null),
        { data: td } = (0, f.YY)(eg),
        t_ = k.Q_.useSetting(),
        tf = (0, l.bG)([u.A], () => u.A.getFetchState());
    r.useEffect(() => {
        null != td && (0, h.n)(td, S.gfo.EMBEDDED) && t_ && null == tf && (0, c.SE)();
    }, [td, t_, tf]);
    let th = null != td && (0, h.n)(td, S.gfo.EMBEDDED) && (0, h.n)(td, S.gfo.EMBEDDED_IAP),
        tp = (0, l.bG)([d.Ay], () =>
            Array.from(d.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === eg;
            }),
        ),
        tE = tp?.compositeInstanceId,
        tm = (0, l.bG)([V.A], () => (null != eG ? V.A.getForSKU(eG) : null), [eG]),
        tg = (0, M.ds)() && !eh,
        { isDisplayingWowMomentConfirmation: tA } = (0, l.cf)([P.A], () => ({
            isDisplayingWowMomentConfirmation: P.A.isDisplayingWowMomentConfirmation,
        })),
        { enabled: tI } = ((t = { location: "PaymentContext" }), { enabled: m.A.getConfig(t).enabled }),
        tT = (0, j.$w)(),
        tS = r.useMemo(() => null != eF && eF === el.gD.PREMIUM_GROUP_MONTH, [eF]),
        tN = (0, U.V)(eN ?? void 0),
        ty = !tS && !eh && null != tN && null != eG && el.TP[tN.trial_id].skus.includes(eG),
        tC = (0, x.O)(),
        tv = tC?.discount?.planIds.some((e) => el.hd[e].skuId === eG),
        tO = !!(!tS && !eh && null != tC && null != eG && tv),
        tR = null != ew && null != eD[ew] ? eD[ew]?.type : null,
        tb = r.useMemo(
            () => ({ payment_source_id: ew, payment_gateway: eI, payment_source_type: tR, checkout_flow: ec }),
            [ew, eI, tR, ec],
        ),
        tD = (0, _.Db)(),
        tL = r.useMemo(() => (em === S.VVm.ONE_TIME && ec !== g.C.ORB_CHECKOUT ? (0, i.jsx)(L, {}) : null), [em, ec]);
    return (0, i.jsx)(eu.Provider, {
        value: {
            stripe: ey,
            unifiedCheckoutFlow: ec,
            paymentElementsEnabled: tI,
            blockedPayments: eC,
            activeSubscription: ea,
            hasFetchedSubscriptions: ev,
            hasFetchedSubscriptionPlans: eV,
            updatedSubscription: e5,
            setUpdatedSubscription: e7,
            subscriptionMetadataRequest: e8,
            setSubscriptionMetadataRequest: e9,
            hasFetchedPaymentSources: eP,
            paymentSources: eD,
            hasPaymentSources: eL,
            paymentSourceId: ew,
            setPaymentSourceId: eM,
            priceOptions: eB,
            setCurrency: eH,
            currencyLoading: ej,
            currencies: eY,
            displayCurrency: eW,
            ...eK,
            paymentAuthenticationState: e$,
            paymentError: ez,
            purchaseError: eq,
            setPurchaseError: eX,
            purchasePreviewError: tu,
            setPurchasePreviewError: tc,
            purchaseErrorBlockRef: eZ,
            purchaseTokenAuthState: eQ,
            purchaseTokenHash: eJ,
            bodyNode: e0,
            setBodyNode: e1,
            footerNode: e2,
            setFooterNode: e3,
            modalOverlayNode: e6,
            setModalOverlayNode: e4,
            selectedStoreListing: tm,
            readySlideId: te,
            setReadySlideId: tt,
            defaultPlanId: eE,
            isPremium: tn,
            isGift: eh,
            startingFractionalPremiumEndsAtRef: ts,
            startedPaymentFlowWithPaymentSourcesRef: ex,
            startingPremiumSubscriptionPlanIdRef: ti,
            defaultFetchableSkuIds: to,
            application: td,
            applicationId: tl,
            purchaseType: em,
            isEmbeddedIAP: th,
            activitySessionId: tE,
            devShelfFetchState: tf,
            referralCode: eA,
            inReverseTrial: tg,
            isDisplayingWowMomentConfirmation: tA,
            wasTier2PremiumBeforePurchase: eS,
            customCheckoutFlow: tT,
            isPremiumGroupPurchase: tS,
            isEligibleForTrial: ty,
            isEligibleForDiscount: tO,
            userTrialOffer: tN,
            referralTrialOfferId: eN,
            discountOffer: tC,
        },
        children: (0, i.jsx)(s.Elements, {
            options: S.XL8,
            stripe: ey,
            children: (0, i.jsxs)(y, {
                shouldRethrowError: ed,
                locationStack: tD,
                onUnhandledError: e_,
                loadId: eU.loadId,
                selectedSkuId: eG ?? null,
                selectedPlanId: eF ?? null,
                isGift: eh,
                purchaseType: em,
                additionalAnalyticsData: tb,
                children: [em === S.VVm.ONE_TIME && tL, ep],
            }),
        }),
    });
}
