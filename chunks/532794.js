n.d(t, {
    A: () => C,
});
var r = n(627968);
n(64700);
var i = n(296489),
    a = n.n(i),
    s = n(835245),
    o = n(397927),
    l = n(73153),
    c = n(391048),
    u = n(158032),
    d = n(636099),
    f = n(573359),
    p = n(287809),
    _ = n(954571),
    h = n(203982),
    m = n(927578),
    g = n(925847),
    E = n(639289),
    b = n(652215),
    y = n(788868);

function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}

function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = T(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function C(e) {
    var t;
    let {
            initialPlanId: i,
            followupSKUInfo: O,
            onClose: v,
            onComplete: T,
            onSubscriptionConfirmation: C,
            analyticsLocations: N,
            analyticsObject: R,
            analyticsLocation: w,
            analyticsSourceLocation: P,
            confirmationFooter: D,
            isGift: x = !1,
            giftMessage: L,
            giftStyle: j,
            giftingOrigin: M,
            subscriptionTier: k,
            trialId: U,
            postSuccessGuild: G,
            openInvoiceId: V,
            applicationId: F,
            referralTrialOfferId: B,
            giftRecipient: H,
            returnRef: Y,
            subscription: W,
            skipConfirm: K,
        } = null != e ? e : {},
        z = !1,
        q = null != (t = (0, g.A)()) ? t : (0, s.A)(),
        X = p.default.getCurrentUser(),
        Z = (0, m.YE)(X, y.PremiumTypes.TIER_2),
        Q = a()("payment-modal"),
        $ = (0, m.mH)(k),
        J = !1;
    return (0, o.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("14704"), n.e("29716"), n.e("2824"), n.e("58846")]).then(
                n.bind(n, 674619),
            );
            return (t) => {
                let { onClose: n } = t,
                    a = I(t, ["onClose"]);
                return (0, r.jsx)(
                    e,
                    S(A({}, a), {
                        loadId: q,
                        subscriptionTier: k,
                        skuId: $,
                        isGift: x,
                        giftMessage: L,
                        giftStyle: j,
                        giftingOrigin: M,
                        giftRecipient: H,
                        initialPlanId: i,
                        followupSKUInfo: O,
                        onClose: (e) => {
                            if (J) return;
                            (J = !0), h._.dispatch(b.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED);
                            let t = () => {
                                n(),
                                    null == v || v(e),
                                    e && (null == C || C()),
                                    l.h.dispatch({
                                        type: "PREMIUM_PAYMENT_MODAL_CLOSE",
                                        didSucceed: e,
                                    });
                            };
                            f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated
                                ? setTimeout(() => {
                                      t();
                                  }, E.K)
                                : t();
                        },
                        onComplete: () => {
                            (z = !0), null == T || T();
                        },
                        onSubscriptionConfirmation: C,
                        analyticsLocations: N,
                        analyticsObject: R,
                        analyticsLocation: w,
                        analyticsSourceLocation: P,
                        confirmationFooter: D,
                        trialId: U,
                        postSuccessGuild: G,
                        planGroup: y.LE,
                        openInvoiceId: V,
                        applicationId: F,
                        referralTrialOfferId: B,
                        returnRef: Y,
                        subscription: W,
                        skipConfirm: !!K,
                        wasTier2PremiumBeforePurchase: Z,
                    }),
                );
            };
        },
        {
            onCloseRequest: () => {
                J ||
                    ((J = !0),
                    h._.dispatch(b.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                    f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated
                        ? setTimeout(() => {
                              (0, o.OoC)(Q);
                          }, E.K)
                        : (0, o.OoC)(Q));
            },
            modalKey: Q,
            onCloseCallback: () => {
                z ||
                    _.default.track(b.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: q,
                        payment_type: b.frM[b.VVm.SUBSCRIPTION],
                        location: null != w ? w : R,
                        source: P,
                        subscription_type: b.rzx.PREMIUM,
                        is_gift: x,
                        sku_id: $,
                        eligible_for_trial: null != U,
                        application_id: F,
                        location_stack: N,
                    }),
                    (0, u.ET)(),
                    (0, c.ET)(),
                    (0, d.z)(),
                    null == v || v(z),
                    z && (null == C || C());
            },
        },
    );
}
