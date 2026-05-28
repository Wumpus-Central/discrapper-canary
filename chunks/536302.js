"use strict";
n.d(t, { P5: () => J, Qv: () => Q, PaymentContextProvider: () => et });
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
        { setPurchasePreviewError: c, applicationId: d, isGift: _ } = J(),
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
    U = n(328968),
    G = n(786300),
    F = n(795791),
    V = n(120992),
    B = n(753390),
    H = n(166403),
    j = n(251913),
    Y = n(825755),
    W = n(153084),
    K = n(615310),
    $ = n(87952),
    z = n(624210),
    q = n(573582),
    X = n(818348),
    Z = n(788868);
let [Q, J, ee] = (0, G.A)();
function et(e) {
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
            }),
            [u, l.isGift, l.referralTrialOfferId, l.activeSubscription, l.excludeSubscriptionPlansBySKU, o],
        );
    return (0, i.jsx)(K.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(M.P, {
            loadId: s,
            discoverySessionId: a,
            checkoutInitParameters: c,
            children: (0, i.jsx)(en, { ...l, purchaseType: o }),
        }),
    });
}
function en(e) {
    var t;
    let n,
        {
            activeSubscription: a,
            unifiedCheckoutFlow: A,
            shouldCrashOnUnhandledError: I = !0,
            onUnhandledError: T,
            skuIDs: y,
            isGift: C = !1,
            children: R,
            defaultPlanId: O,
            purchaseType: b = S.VVm.SUBSCRIPTION,
            applicationId: D,
            referralCode: M,
            paymentGateway: G,
        } = e,
        K = (0, $.A)(),
        J = (0, p.Hp)(),
        ee =
            ((n = (0, l.bG)([H.A], () => H.A.hasFetchedSubscriptions())),
            r.useEffect(() => {
                n || (0, B.hP)();
            }, [n]),
            n),
        { paymentSources: et, hasPaymentSources: en } = (0, v.jm)(),
        ei = r.useRef(en),
        {
            contextMetadata: er,
            selectedSkuId: es,
            selectedPlanId: ea,
            paymentSourceId: eo,
        } = (0, L.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
        })),
        { paymentError: el, paymentAuthenticationState: eu } = (function () {
            let e = (0, l.bG)([Y.A], () => Y.A.error),
                [t, n] = (0, l.yK)([W.A], () => [W.A.error, W.A.isAwaitingAuthentication]);
            return {
                paymentError: null != t ? t : e,
                paymentAuthenticationState: n ? j.oc.PENDING : null != t ? j.oc.ERROR : j.oc.NONE,
            };
        })(),
        { purchaseErrorBlockRef: ec } = (function () {
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
        [ed, e_] = (0, l.yK)([k.A], () => [k.A.purchaseTokenAuthState, k.A.purchaseTokenHash]),
        [eh, ef] = r.useState(null),
        [ep, eE] = r.useState(null),
        [em, eg] = r.useState(null),
        [eA, eI] = r.useState(null),
        eT = r.useRef(null != a ? a.planId : null);
    r.useEffect(() => {
        null == eT.current && null != a && (eT.current = a.planId);
    }, [a]);
    let { endsAt: eS } = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        ey = r.useRef(eS.isSame(o()(0)) ? null : eS);
    r.useEffect(() => {
        null != ey.current || eS.isSame(o()(0)) || (ey.current = eS);
    }, [eS]),
        (function (e) {
            let t = q.A.useConfig({ location: "payment_modal" }).enabled,
                { order: n, setOrder: i } = (0, L.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
            (0, r.useEffect)(() => {
                if (!t || null == e.paymentSourceId) return;
                let r = e.paymentSourceId;
                async function s() {
                    if (null == n || n?.billing_facet?.payment_gateway === X.kM.VIRTUAL_CURRENCY) return;
                    let t = await (0, z.iY)({ orderId: n.id, updates: e });
                    null != t && i(t);
                }
                n?.billing_facet?.payment_source_id !== r && s();
            }, [n, i, e.paymentSourceId, t]);
        })(r.useMemo(() => ({ paymentSourceId: eo, paymentGateway: G, loadId: er.loadId }), [eo, G, er.loadId]));
    let eN = r.useMemo(() => y.filter((e) => !Z.oz.includes(e)), [JSON.stringify(y)]),
        ev = D ?? Z.tv;
    (0, V.A)({ applicationId: ev, skuIDs: eN });
    let [eC, eR] = r.useState(null),
        { data: eO } = (0, h.YY)(D),
        eb = x.Q_.useSetting(),
        eD = (0, l.bG)([u.A], () => u.A.getFetchState());
    r.useEffect(() => {
        null != eO && (0, f.n)(eO, S.gfo.EMBEDDED) && eb && null == eD && (0, c.SE)();
    }, [eO, eb, eD]);
    let eL = null != eO && (0, f.n)(eO, S.gfo.EMBEDDED) && (0, f.n)(eO, S.gfo.EMBEDDED_IAP),
        ew = (0, l.bG)([d.Ay], () =>
            Array.from(d.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === D;
            }),
        ),
        eM = ew?.compositeInstanceId,
        eP = (0, l.bG)([U.A], () => (null != es ? U.A.getForSKU(es) : null), [es]),
        { isDisplayingWowMomentConfirmation: ex } = (0, l.cf)([P.A], () => ({
            isDisplayingWowMomentConfirmation: P.A.isDisplayingWowMomentConfirmation,
        })),
        { enabled: ek } = ((t = { location: "PaymentContext" }), { enabled: m.A.getConfig(t).enabled }),
        eU = (0, F.$w)(),
        eG = null != eo && null != et[eo] ? et[eo]?.type : null,
        eF = r.useMemo(
            () => ({ payment_source_id: eo, payment_gateway: G, payment_source_type: eG, checkout_flow: A }),
            [eo, G, eG, A],
        ),
        eV = (0, _.Db)(),
        eB = r.useMemo(() => (b === S.VVm.ONE_TIME && A !== g.C.ORB_CHECKOUT ? (0, i.jsx)(w, {}) : null), [b, A]);
    return (0, i.jsx)(Q.Provider, {
        value: {
            stripe: K,
            unifiedCheckoutFlow: A,
            paymentElementsEnabled: ek,
            blockedPayments: J,
            activeSubscription: a,
            hasFetchedSubscriptions: ee,
            subscriptionMetadataRequest: eA,
            setSubscriptionMetadataRequest: eI,
            paymentAuthenticationState: eu,
            paymentError: el,
            purchasePreviewError: eC,
            setPurchasePreviewError: eR,
            purchaseErrorBlockRef: ec,
            purchaseTokenAuthState: ed,
            purchaseTokenHash: e_,
            bodyNode: eh,
            setBodyNode: ef,
            footerNode: ep,
            setFooterNode: eE,
            modalOverlayNode: em,
            setModalOverlayNode: eg,
            selectedStoreListing: eP,
            defaultPlanId: O,
            isGift: C,
            startingFractionalPremiumEndsAtRef: ey,
            startedPaymentFlowWithPaymentSourcesRef: ei,
            startingPremiumSubscriptionPlanIdRef: eT,
            defaultFetchableSkuIds: eN,
            application: eO,
            applicationId: ev,
            purchaseType: b,
            isEmbeddedIAP: eL,
            activitySessionId: eM,
            devShelfFetchState: eD,
            referralCode: M,
            isDisplayingWowMomentConfirmation: ex,
            customCheckoutFlow: eU,
        },
        children: (0, i.jsx)(s.Elements, {
            options: S.XL8,
            stripe: K,
            children: (0, i.jsxs)(N, {
                shouldRethrowError: I,
                locationStack: eV,
                onUnhandledError: T,
                loadId: er.loadId,
                selectedSkuId: es ?? null,
                selectedPlanId: ea ?? null,
                isGift: C,
                purchaseType: b,
                additionalAnalyticsData: eF,
                children: [b === S.VVm.ONE_TIME && eB, R],
            }),
        }),
    });
}
