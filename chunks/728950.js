n.d(t, {
    A: () => _,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(937008),
    o = n(491057),
    s = n(652215);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function _(e) {
    let {
        initialPlanId: t,
        activeSubscription: l,
        trialId: u,
        trialFooterMessageOverride: p,
        onClose: _,
        analyticsObject: h,
        analyticsLocation: m,
        analyticsLocations: g,
        analyticsSubscriptionType: E,
        renderHeader: y,
        renderPurchaseConfirmation: b,
        planGroup: O,
        reviewWarningMessage: v,
        skuId: A,
    } = e;
    (0, i.mMO)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 156312)),
                { PaymentModal: i } = await Promise.resolve().then(n.bind(n, 546042)),
                { STEPS: s } = await Promise.all([
                    n.e("62175"),
                    n.e("2292"),
                    n.e("14704"),
                    n.e("29716"),
                    n.e("2824"),
                    n.e("96126"),
                ]).then(n.bind(n, 674619));
            return (n) => {
                let { onClose: I } = n,
                    S = f(n, ["onClose"]);
                return (0, r.jsx)(e, {
                    activeSubscription: l,
                    stepConfigs: s,
                    skuIDs: [A],
                    children: (0, r.jsx)(o.Qt, {
                        children: (0, r.jsx)(a.dX, {
                            children: (0, r.jsx)(
                                i,
                                d(c({}, S), {
                                    initialPlanId: t,
                                    onClose: (e) => {
                                        I(), null == _ || _(e);
                                    },
                                    analyticsLocations: g,
                                    analyticsObject: h,
                                    analyticsLocation: m,
                                    analyticsSubscriptionType: E,
                                    skuId: A,
                                    renderHeader: y,
                                    renderPurchaseConfirmation: b,
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
            onCloseRequest: s.tEg,
        },
    );
}
