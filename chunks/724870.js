n.d(t, {
    h: () => v,
    m: () => I,
}),
    n(997841);
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(772848),
    s = n(481060),
    l = n(496929),
    c = n(159351),
    u = n(667),
    d = n(171246),
    f = n(509545),
    p = n(55563),
    _ = n(626135),
    m = n(987209),
    h = n(107998),
    g = n(981631);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let {
            initialPlanId: t,
            activeSubscription: i,
            analyticsObject: a,
            analyticsLocation: l,
            analyticsLocations: d,
            analyticsSubscriptionType: f,
            renderHeader: p,
            planGroup: E,
            skuId: y,
            guildId: v,
            reviewWarningMessage: S,
            applicationId: I,
            showBenefitsFirst: T,
            onComplete: C,
            forcesTransitionToGuild: A,
        } = e,
        N = (0, o.Z)(),
        P = !1;
    (0, s.ZDy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                o = (await n.e("7458").then(n.bind(n, 405083))).default,
                { getApplicationPaymentSteps: s } = await n.e("86513").then(n.bind(n, 759386)),
                c = s({
                    guildId: v,
                    showBenefitsFirst: T,
                });
            return (n) =>
                (0, r.jsx)(e, {
                    loadId: N,
                    applicationId: I,
                    activeSubscription: i,
                    stepConfigs: c,
                    skuIDs: [y],
                    children: (0, r.jsx)(h.c1, {
                        children: (0, r.jsx)(m.KB, {
                            children: (0, r.jsx)(
                                o,
                                O(b({}, n), {
                                    initialPlanId: t,
                                    skuId: y,
                                    analyticsLocations: d,
                                    analyticsObject: a,
                                    analyticsLocation: l,
                                    analyticsSubscriptionType: f,
                                    renderHeader: p,
                                    planGroup: E,
                                    reviewWarningMessage: S,
                                    applicationId: I,
                                    guildId: null != v ? v : void 0,
                                    onComplete: () => {
                                        (P = !0), null == C || C();
                                    },
                                    forcesTransitionToGuild: A,
                                }),
                            ),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                P ||
                    (_.default.track(g.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: N,
                        payment_type: g.Zuq[g.GZQ.SUBSCRIPTION],
                        location: null != l ? l : a,
                        is_gift: !1,
                        sku_id: y,
                        application_id: I,
                        location_stack: d,
                    }),
                    (0, c.fw)(),
                    (0, u.p)());
            },
            onCloseRequest: g.dG4,
        },
    );
}
let S = async (e, t) => {
    let n = (await (0, l.yD)(e))
        .filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date())
        .find((e) => e.sku_id === t);
    a()(null == n, "User already has an active subscription to this SKU");
};
async function I(e) {
    var t;
    let {
            applicationId: n,
            skuId: r,
            initialPlanId: i,
            analyticsLocationObject: o,
            analyticsLocations: s,
            renderHeader: l,
        } = e,
        c = p.Z.get(r),
        u = f.Z.getForSKU(r);
    a()(null != c, "Failed to find SKU");
    let _ = (0, d.KW)(c.flags);
    a()(_, "Guild application subscriptions unsupported!"), await S(n, r);
    let m = {
        initialPlanId: null != i ? i : null == (t = u[0]) ? void 0 : t.id,
        activeSubscription: null,
        analyticsLocations: s,
        analyticsLocationObject: o,
        analyticsSubscriptionType: g.NYc.APPLICATION,
        renderHeader: l,
        planGroup: [],
        skuId: r,
        guildId: null,
        showBenefitsFirst: !1,
        applicationId: n,
    };
    v(m);
}
