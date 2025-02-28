r.d(t, { default: () => S });
var n = r(200651);
r(192379);
var o = r(100527),
    c = r(906732),
    l = r(987209),
    i = r(563132),
    u = r(409813),
    a = r(107998),
    s = r(791785),
    f = r(276442),
    b = r(793541),
    d = r(380898),
    p = r(710094),
    O = r(865921),
    y = r(853872),
    j = r(806984),
    g = r(464797),
    P = r(946211),
    h = r(231338);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function m(e, t) {
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
        renderStep: (e) => (0, n.jsx)(O.v, v({}, e))
    },
    {
        key: u.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, n.jsx)(
                f.J,
                m(v({}, e), {
                    onReturn: () => {
                        0 === Object.keys(y.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(u.h8.REVIEW, { trackedFromStep: u.h8.ADD_PAYMENT_STEPS });
                    }
                })
            )
    },
    {
        key: u.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, n.jsx)(d.Z, {})
    },
    {
        key: u.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, n.jsx)(b.Z, {})
    },
    {
        key: u.h8.REVIEW,
        renderStep: (e) => (0, n.jsx)(p.l, v({}, e))
    },
    {
        key: u.h8.CONFIRM,
        renderStep: (e) => (0, n.jsx)(j.Z, v({}, e))
    }
];
function S(e) {
    var { guildProductContext: t, sourceAnalyticsLocations: r, applicationId: u } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++) (r = c[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['guildProductContext', 'sourceAnalyticsLocations', 'applicationId']);
    let { analyticsLocations: b } = (0, c.ZP)(r, o.Z.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, n.jsx)(
        g.R,
        m(v({}, t), {
            children: (0, n.jsx)(c.Gt, {
                value: b,
                children: (0, n.jsx)(i.PaymentContextProvider, {
                    stepConfigs: x,
                    applicationId: u,
                    skuIDs: [f.skuId],
                    activeSubscription: null,
                    purchaseType: h.GZ.ONE_TIME,
                    children: (0, n.jsx)(a.c1, {
                        children: (0, n.jsx)(l.KB, {
                            children: (0, n.jsx)(
                                s.PaymentModal,
                                v(
                                    {
                                        initialPlanId: null,
                                        analyticsLocations: b,
                                        renderHeader: P.L
                                    },
                                    f
                                )
                            )
                        })
                    })
                })
            })
        })
    );
}
