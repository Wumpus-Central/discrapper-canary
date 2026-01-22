n.d(t, {
    A: () => A,
    l: () => S,
}),
    n(938796);
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(835245),
    o = n(397927),
    l = n(339048),
    c = n(391048),
    u = n(636099),
    d = n(163437),
    f = n(97352),
    p = n(67480),
    _ = n(954571),
    h = n(937008),
    m = n(491057),
    g = n(652215);
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
function A(e) {
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
            guildId: A,
            reviewWarningMessage: v,
            applicationId: S,
            showBenefitsFirst: I,
            onComplete: T,
            forcesTransitionToGuild: C,
        } = e,
        N = (0, s.A)(),
        R = !1;
    (0, o.mMO)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 156312)),
                s = (await n.e("72752").then(n.bind(n, 97491))).default,
                { getApplicationPaymentSteps: o } = await n.e("50243").then(n.bind(n, 107854)),
                c = o({
                    guildId: A,
                    showBenefitsFirst: I,
                });
            return (n) =>
                (0, r.jsx)(e, {
                    loadId: N,
                    applicationId: S,
                    activeSubscription: i,
                    stepConfigs: c,
                    skuIDs: [y],
                    children: (0, r.jsx)(m.Qt, {
                        children: (0, r.jsx)(h.dX, {
                            children: (0, r.jsx)(
                                s,
                                O(b({}, n), {
                                    initialPlanId: t,
                                    skuId: y,
                                    analyticsLocations: d,
                                    analyticsObject: a,
                                    analyticsLocation: l,
                                    analyticsSubscriptionType: f,
                                    renderHeader: p,
                                    planGroup: E,
                                    reviewWarningMessage: v,
                                    applicationId: S,
                                    guildId: null != A ? A : void 0,
                                    onComplete: () => {
                                        (R = !0), null == T || T();
                                    },
                                    forcesTransitionToGuild: C,
                                }),
                            ),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                R ||
                    (_.default.track(g.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: N,
                        payment_type: g.frM[g.VVm.SUBSCRIPTION],
                        location: null != l ? l : a,
                        is_gift: !1,
                        sku_id: y,
                        application_id: S,
                        location_stack: d,
                    }),
                    (0, c.ET)(),
                    (0, u.z)());
            },
            onCloseRequest: g.tEg,
        },
    );
}
let v = async (e, t) => {
    let n = (await (0, l.LM)(e))
        .filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date())
        .find((e) => e.sku_id === t);
    a()(null == n, "User already has an active subscription to this SKU");
};
async function S(e) {
    var t;
    let {
            applicationId: n,
            skuId: r,
            initialPlanId: i,
            analyticsLocationObject: s,
            analyticsLocations: o,
            renderHeader: l,
        } = e,
        c = p.A.get(r),
        u = f.A.getForSKU(r);
    a()(null != c, "Failed to find SKU");
    let _ = (0, d.bg)(c.flags);
    a()(_, "Guild application subscriptions unsupported!"), await v(n, r);
    let h = {
        initialPlanId: null != i ? i : null == (t = u[0]) ? void 0 : t.id,
        activeSubscription: null,
        analyticsLocations: o,
        analyticsLocationObject: s,
        analyticsSubscriptionType: g.rzx.APPLICATION,
        renderHeader: l,
        planGroup: [],
        skuId: r,
        guildId: null,
        showBenefitsFirst: !1,
        applicationId: n,
    };
    A(h);
}
