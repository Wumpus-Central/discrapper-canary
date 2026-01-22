r.d(t, { default: () => h });
var n = r(627968);
r(64700);
var o = r(793574),
    l = r(688810),
    c = r(937008),
    i = r(156312),
    u = r(166532),
    a = r(491057),
    s = r(546042),
    p = r(735305),
    f = r(343834),
    y = r(467122),
    b = r(623020),
    O = r(881677),
    d = r(295405),
    j = r(304186),
    g = r(920241),
    P = r(316464),
    m = r(818348);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let x = [
    {
        key: null,
        renderStep: (e) => (0, n.jsx)(O.B, w({}, e)),
    },
    {
        key: u.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, n.jsx)(
                p.x,
                v(w({}, e), {
                    onReturn: () => {
                        0 === Object.keys(d.A.paymentSources).length
                            ? e.handleClose()
                            : e.handleStepChange(u.pn.REVIEW, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS });
                    },
                }),
            ),
    },
    {
        key: u.pn.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, n.jsx)(y.A, {}),
    },
    {
        key: u.pn.AWAITING_AUTHENTICATION,
        renderStep: () => (0, n.jsx)(f.A, {}),
    },
    {
        key: u.pn.REVIEW,
        renderStep: (e) => (0, n.jsx)(b._M, w({}, e)),
    },
    {
        key: u.pn.CONFIRM,
        renderStep: (e) => (0, n.jsx)(j.A, w({}, e)),
    },
];
function h(e) {
    let { guildProductContext: t, sourceAnalyticsLocations: r, applicationId: u } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.getOwnPropertyNames(e);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, ["guildProductContext", "sourceAnalyticsLocations", "applicationId"]),
        { analyticsLocations: f } = (0, l.Ay)(r, o.A.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, n.jsx)(
        g.u,
        v(w({}, t), {
            children: (0, n.jsx)(l.f5, {
                value: f,
                children: (0, n.jsx)(i.PaymentContextProvider, {
                    stepConfigs: x,
                    applicationId: u,
                    skuIDs: [p.skuId],
                    activeSubscription: null,
                    purchaseType: m.VV.ONE_TIME,
                    children: (0, n.jsx)(a.Qt, {
                        children: (0, n.jsx)(c.dX, {
                            children: (0, n.jsx)(
                                s.PaymentModal,
                                w(
                                    {
                                        initialPlanId: null,
                                        analyticsLocations: f,
                                        renderHeader: P.j,
                                    },
                                    p,
                                ),
                            ),
                        }),
                    }),
                }),
            }),
        }),
    );
}
