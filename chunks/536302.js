"use strict";
n.d(t, { P5: () => Q, Qv: () => Z, PaymentContextProvider: () => ee });
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
    h = n(627363),
    f = n(20015),
    p = n(86379),
    E = n(531260),
    m = n(885180),
    g = n(120700),
    A = n(626584),
    I = n(174459),
    T = n(38405),
    S = n(652215);
let y = new A.A("CheckoutErrorBoundary.tsx");
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
        T.A.captureException(e, d), y.error("Checkout error occurred:", { error: e, additionalErrorContext: c });
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
var v = n(426398),
    C = n(566980),
    R = n(830382),
    O = n(543767),
    b = n(570221),
    D = n(666646),
    L = n(722847);
let w = () => {
    var e;
    let t,
        n,
        i,
        s,
        {
            selectedSkuId: a,
            purchaseState: o,
            paymentSourceId: l,
            priceOptions: u,
        } = (0, L.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { setPurchasePreviewError: c, applicationId: d, isGift: _ } = Q(),
        h = o === C.h.PURCHASING || o === C.h.COMPLETED,
        [f, p] =
            ((e = r.useMemo(
                () => ({
                    applicationId: d,
                    skuId: a,
                    paymentSourceId: l,
                    isGift: _,
                    currency: u.loaded ? u.currency : void 0,
                    preventFetch: h,
                }),
                [d, a, l, _, u, h],
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
                let s = await (0, R.NY)(r);
                return null != s ? b.A.createFromOTPPreview(s) : null;
            }, [i])),
            (0, O.$n)(e, s, void 0));
    return (
        (0, D.F0)(f, p),
        r.useEffect(() => {
            c(p);
        }, [p, c]),
        null
    );
};
var M = n(799606),
    P = n(573359),
    x = n(885386),
    k = n(71319),
    U = n(786300),
    G = n(795791),
    F = n(120992),
    V = n(753390),
    B = n(166403),
    H = n(251913),
    j = n(825755),
    Y = n(153084),
    W = n(615310),
    K = n(87952),
    $ = n(624210),
    z = n(573582),
    q = n(818348),
    X = n(788868);
let [Z, Q, J] = (0, U.A)();
function ee(e) {
    let {
            stepConfigs: t,
            breadcrumbs: n,
            loadId: s,
            discoverySessionId: a,
            purchaseType: o = S.VVm.SUBSCRIPTION,
            ...l
        } = e,
        u = JSON.stringify(l.skuIDs),
        c = r.useMemo(
            () => ({
                skuIds: l.skuIDs,
                isGift: l.isGift ?? !1,
                referralTrialOfferId: l.referralTrialOfferId ?? null,
                activeSubscription: l.activeSubscription ?? null,
                excludeSubscriptionPlansBySKU: l.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: o,
                applicationId: l.applicationId,
            }),
            [
                u,
                l.isGift,
                l.referralTrialOfferId,
                l.activeSubscription,
                l.excludeSubscriptionPlansBySKU,
                l.applicationId,
                o,
            ],
        );
    return (0, i.jsx)(W.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(M.P, {
            loadId: s,
            discoverySessionId: a,
            checkoutInitParameters: c,
            children: (0, i.jsx)(et, { ...l, purchaseType: o }),
        }),
    });
}
function et(e) {
    var t;
    let n,
        {
            activeSubscription: a,
            unifiedCheckoutFlow: A,
            shouldCrashOnUnhandledError: I = !0,
            onUnhandledError: T,
            isGift: y = !1,
            children: C,
            defaultPlanId: R,
            purchaseType: O = S.VVm.SUBSCRIPTION,
            applicationId: b,
            referralCode: D,
            paymentGateway: M,
            skuIDs: U,
        } = e,
        W = (0, K.A)(),
        Q = (0, p.Hp)(),
        J =
            ((n = (0, l.bG)([B.A], () => B.A.hasFetchedSubscriptions())),
            r.useEffect(() => {
                n || (0, V.hP)();
            }, [n]),
            n),
        { paymentSources: ee, hasPaymentSources: et } = (0, v.jm)(),
        en = r.useRef(et),
        {
            contextMetadata: ei,
            selectedSkuId: er,
            selectedPlanId: es,
            paymentSourceId: ea,
        } = (0, L.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
        })),
        { paymentError: eo, paymentAuthenticationState: el } = (function () {
            let e = (0, l.bG)([j.A], () => j.A.error),
                [t, n] = (0, l.yK)([Y.A], () => [Y.A.error, Y.A.isAwaitingAuthentication]);
            return {
                paymentError: null != t ? t : e,
                paymentAuthenticationState: n ? H.oc.PENDING : null != t ? H.oc.ERROR : H.oc.NONE,
            };
        })(),
        { purchaseErrorBlockRef: eu } = (function () {
            let e = r.useRef(null),
                { purchaseError: t, setPurchaseError: n } = (0, L.t4)((e) => ({
                    purchaseError: e.purchaseError,
                    setPurchaseError: e.setPurchaseError,
                }));
            return (
                r.useEffect(() => {
                    null != t && null != e.current && e.current.scrollIntoView({ behavior: "smooth" });
                }, [t]),
                { purchaseError: t, setPurchaseError: n, purchaseErrorBlockRef: e }
            );
        })(),
        [ec, ed] = (0, l.yK)([k.A], () => [k.A.purchaseTokenAuthState, k.A.purchaseTokenHash]),
        [e_, eh] = r.useState(null),
        [ef, ep] = r.useState(null),
        [eE, em] = r.useState(null),
        [eg, eA] = r.useState(null),
        eI = r.useRef(null != a ? a.planId : null);
    r.useEffect(() => {
        null == eI.current && null != a && (eI.current = a.planId);
    }, [a]);
    let { endsAt: eT } = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        eS = r.useRef(eT.isSame(o()(0)) ? null : eT);
    r.useEffect(() => {
        null != eS.current || eT.isSame(o()(0)) || (eS.current = eT);
    }, [eT]),
        (function (e) {
            let t = z.A.useConfig({ location: "payment_modal" }).enabled,
                { order: n, setOrder: i } = (0, L.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
            (0, r.useEffect)(() => {
                if (!t || null == e.paymentSourceId) return;
                let r = e.paymentSourceId;
                async function s() {
                    if (null == n || n?.billing_facet?.payment_gateway === q.kM.VIRTUAL_CURRENCY) return;
                    let t = await (0, $.iY)({ orderId: n.id, updates: e });
                    null != t && i(t);
                }
                n?.billing_facet?.payment_source_id !== r && s();
            }, [n, i, e.paymentSourceId, t]);
        })(r.useMemo(() => ({ paymentSourceId: ea, paymentGateway: M, loadId: ei.loadId }), [ea, M, ei.loadId]));
    let ey = b ?? X.tv;
    (0, F.c)({ applicationId: ey, skuIDs: U });
    let [eN, ev] = r.useState(null),
        { data: eC } = (0, h.YY)(b),
        eR = x.Q_.useSetting(),
        eO = (0, l.bG)([u.A], () => u.A.getFetchState());
    r.useEffect(() => {
        null != eC && (0, f.n)(eC, S.gfo.EMBEDDED) && eR && null == eO && (0, c.SE)();
    }, [eC, eR, eO]);
    let eb = null != eC && (0, f.n)(eC, S.gfo.EMBEDDED) && (0, f.n)(eC, S.gfo.EMBEDDED_IAP),
        eD = (0, l.bG)([d.Ay], () =>
            Array.from(d.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === b;
            }),
        ),
        eL = eD?.compositeInstanceId,
        { isDisplayingWowMomentConfirmation: ew } = (0, l.cf)([P.A], () => ({
            isDisplayingWowMomentConfirmation: P.A.isDisplayingWowMomentConfirmation,
        })),
        { enabled: eM } = ((t = { location: "PaymentContext" }), { enabled: m.A.getConfig(t).enabled }),
        eP = (0, G.$w)(),
        ex = null != ea && null != ee[ea] ? ee[ea]?.type : null,
        ek = r.useMemo(
            () => ({ payment_source_id: ea, payment_gateway: M, payment_source_type: ex, checkout_flow: A }),
            [ea, M, ex, A],
        ),
        eU = (0, _.Db)(),
        eG = r.useMemo(() => (O === S.VVm.ONE_TIME && A !== g.C.ORB_CHECKOUT ? (0, i.jsx)(w, {}) : null), [O, A]);
    return (0, i.jsx)(Z.Provider, {
        value: {
            stripe: W,
            unifiedCheckoutFlow: A,
            paymentElementsEnabled: eM,
            blockedPayments: Q,
            activeSubscription: a,
            hasFetchedSubscriptions: J,
            subscriptionMetadataRequest: eg,
            setSubscriptionMetadataRequest: eA,
            paymentAuthenticationState: el,
            paymentError: eo,
            purchasePreviewError: eN,
            setPurchasePreviewError: ev,
            purchaseErrorBlockRef: eu,
            purchaseTokenAuthState: ec,
            purchaseTokenHash: ed,
            bodyNode: e_,
            setBodyNode: eh,
            footerNode: ef,
            setFooterNode: ep,
            modalOverlayNode: eE,
            setModalOverlayNode: em,
            defaultPlanId: R,
            isGift: y,
            startingFractionalPremiumEndsAtRef: eS,
            startedPaymentFlowWithPaymentSourcesRef: en,
            startingPremiumSubscriptionPlanIdRef: eI,
            application: eC,
            applicationId: ey,
            purchaseType: O,
            isEmbeddedIAP: eb,
            activitySessionId: eL,
            devShelfFetchState: eO,
            referralCode: D,
            isDisplayingWowMomentConfirmation: ew,
            customCheckoutFlow: eP,
        },
        children: (0, i.jsx)(s.Elements, {
            options: S.XL8,
            stripe: W,
            children: (0, i.jsxs)(N, {
                shouldRethrowError: I,
                locationStack: eU,
                onUnhandledError: T,
                loadId: ei.loadId,
                selectedSkuId: er ?? null,
                selectedPlanId: es ?? null,
                isGift: y,
                purchaseType: O,
                additionalAnalyticsData: ek,
                children: [O === S.VVm.ONE_TIME && eG, C],
            }),
        }),
    });
}
