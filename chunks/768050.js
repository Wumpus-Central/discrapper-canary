"use strict";
n.d(t, { P5: () => k, Qv: () => x, PaymentContextProvider: () => G });
var i = n(627968),
    r = n(64700),
    s = n(342393),
    a = n(989349),
    o = n.n(a),
    l = n(688810),
    u = n(531260),
    c = n(120700),
    d = n(626584),
    _ = n(174459),
    h = n(38405),
    f = n(652215);
let p = new d.A("CheckoutErrorBoundary.tsx");
class E extends r.PureComponent {
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
        h.A.captureException(e, d), p.error("Checkout error occurred:", { error: e, additionalErrorContext: c });
        let E = "string" == typeof e ? e : e.message;
        if (
            (_.default.track(f.HAw.PAYMENT_FLOW_ERROR, {
                load_id: n,
                crashed: u,
                error_message: E,
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
var m = n(426398),
    g = n(566980),
    A = n(830382),
    I = n(543767),
    T = n(570221),
    S = n(666646),
    y = n(722847);
let N = () => {
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
            setPurchasePreviewError: c,
        } = (0, y.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        { applicationId: d, isGift: _ } = k(),
        h = o === g.h.PURCHASING || o === g.h.COMPLETED,
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
                let s = await (0, A.NY)(r);
                return null != s ? T.A.createFromOTPPreview(s) : null;
            }, [i])),
            (0, I.$n)(e, s, void 0));
    return (
        (0, S.F0)(f, p),
        r.useEffect(() => {
            c(p);
        }, [p, c]),
        null
    );
};
var v = n(905220),
    C = n(786300),
    R = n(795791),
    O = n(120992),
    b = n(615310),
    D = n(87952),
    L = n(624210),
    w = n(573582),
    M = n(818348),
    P = n(788868);
let [x, k, U] = (0, C.A)();
function G(e) {
    let {
            stepConfigs: t,
            breadcrumbs: n,
            loadId: s,
            discoverySessionId: a,
            purchaseType: o = f.VVm.SUBSCRIPTION,
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
    return (0, i.jsx)(b.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(v.P, {
            loadId: s,
            discoverySessionId: a,
            checkoutInitParameters: c,
            children: (0, i.jsx)(F, { ...l, purchaseType: o }),
        }),
    });
}
function F(e) {
    let {
            activeSubscription: t,
            unifiedCheckoutFlow: n,
            shouldCrashOnUnhandledError: a = !0,
            onUnhandledError: d,
            isGift: _ = !1,
            children: h,
            defaultPlanId: p,
            purchaseType: g = f.VVm.SUBSCRIPTION,
            applicationId: A,
            referralCode: I,
            paymentGateway: T,
            skuIDs: S,
        } = e,
        v = (0, D.A)(),
        { paymentSources: C, hasPaymentSources: b } = (0, m.jm)(),
        k = r.useRef(b),
        {
            contextMetadata: U,
            selectedSkuId: G,
            selectedPlanId: F,
            paymentSourceId: V,
        } = (0, y.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
        })),
        { purchaseErrorBlockRef: B } = (function () {
            let e = r.useRef(null),
                { purchaseError: t, setPurchaseError: n } = (0, y.t4)((e) => ({
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
        [H, j] = r.useState(null),
        [Y, W] = r.useState(null),
        [K, $] = r.useState(null),
        z = r.useRef(null != t ? t.planId : null);
    r.useEffect(() => {
        null == z.current && null != t && (z.current = t.planId);
    }, [t]);
    let { endsAt: q } = (0, u.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        X = r.useRef(q.isSame(o()(0)) ? null : q);
    r.useEffect(() => {
        null != X.current || q.isSame(o()(0)) || (X.current = q);
    }, [q]),
        (function (e) {
            let t = w.A.useConfig({ location: "payment_modal" }).enabled,
                { order: n, setOrder: i } = (0, y.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
            (0, r.useEffect)(() => {
                if (!t || null == e.paymentSourceId) return;
                let r = e.paymentSourceId;
                async function s() {
                    if (null == n || n?.billing_facet?.payment_gateway === M.kM.VIRTUAL_CURRENCY) return;
                    let t = await (0, L.iY)({ orderId: n.id, updates: e });
                    null != t && i(t);
                }
                n?.billing_facet?.payment_source_id !== r && s();
            }, [n, i, e.paymentSourceId, t]);
        })(r.useMemo(() => ({ paymentSourceId: V, paymentGateway: T, loadId: U.loadId }), [V, T, U.loadId]));
    let Z = A ?? P.tv;
    (0, O.c)({ applicationId: Z, skuIDs: S });
    let Q = (0, R.$w)(),
        J = null != V && null != C[V] ? C[V]?.type : null,
        ee = r.useMemo(
            () => ({ payment_source_id: V, payment_gateway: T, payment_source_type: J, checkout_flow: n }),
            [V, T, J, n],
        ),
        et = (0, l.Db)(),
        en = r.useMemo(() => (g === f.VVm.ONE_TIME && n !== c.C.ORB_CHECKOUT ? (0, i.jsx)(N, {}) : null), [g, n]);
    return (0, i.jsx)(x.Provider, {
        value: {
            stripe: v,
            unifiedCheckoutFlow: n,
            activeSubscription: t,
            purchaseErrorBlockRef: B,
            bodyNode: H,
            setBodyNode: j,
            footerNode: Y,
            setFooterNode: W,
            modalOverlayNode: K,
            setModalOverlayNode: $,
            defaultPlanId: p,
            isGift: _,
            startingFractionalPremiumEndsAtRef: X,
            startedPaymentFlowWithPaymentSourcesRef: k,
            startingPremiumSubscriptionPlanIdRef: z,
            applicationId: Z,
            purchaseType: g,
            referralCode: I,
            customCheckoutFlow: Q,
        },
        children: (0, i.jsx)(s.Elements, {
            options: f.XL8,
            stripe: v,
            children: (0, i.jsxs)(E, {
                shouldRethrowError: a,
                locationStack: et,
                onUnhandledError: d,
                loadId: U.loadId,
                selectedSkuId: G ?? null,
                selectedPlanId: F ?? null,
                isGift: _,
                purchaseType: g,
                additionalAnalyticsData: ee,
                children: [g === f.VVm.ONE_TIME && en, h],
            }),
        }),
    });
}
