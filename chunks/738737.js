n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(987209),
    o = n(107998),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function _(e) {
    let {
        initialPlanId: t,
        activeSubscription: l,
        trialId: u,
        trialFooterMessageOverride: p,
        onClose: _,
        analyticsObject: m,
        analyticsLocation: h,
        analyticsLocations: g,
        analyticsSubscriptionType: E,
        renderHeader: b,
        renderPurchaseConfirmation: y,
        planGroup: O,
        reviewWarningMessage: v,
        skuId: S,
    } = e;
    (0, i.ZDy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 563132)),
                { PaymentModal: i } = await Promise.resolve().then(n.bind(n, 791785)),
                { STEPS: s } = await Promise.all([n.e("84992"), n.e("16"), n.e("54400")]).then(n.bind(n, 7305));
            return (n) => {
                var { onClose: I } = n,
                    T = f(n, ["onClose"]);
                return (0, r.jsx)(e, {
                    activeSubscription: l,
                    stepConfigs: s,
                    skuIDs: [S],
                    children: (0, r.jsx)(o.c1, {
                        children: (0, r.jsx)(a.KB, {
                            children: (0, r.jsx)(
                                i,
                                d(c({}, T), {
                                    initialPlanId: t,
                                    onClose: (e) => {
                                        I(), null == _ || _(e);
                                    },
                                    analyticsLocations: g,
                                    analyticsObject: m,
                                    analyticsLocation: h,
                                    analyticsSubscriptionType: E,
                                    skuId: S,
                                    renderHeader: b,
                                    renderPurchaseConfirmation: y,
                                    planGroup: O,
                                    trialId: u,
                                    trialFooterMessageOverride: p,
                                    reviewWarningMessage: v,
                                }),
                            ),
                        }),
                    }),
                });
            };
        },
        {
            onCloseCallback: () => {
                null == _ || _(!1);
            },
            onCloseRequest: s.dG4,
        },
    );
}
