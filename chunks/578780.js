r.d(t, { default: () => x });
var n = r(200651);
r(192379);
var o = r(100527),
    c = r(906732),
    l = r(987209),
    u = r(563132),
    i = r(409813),
    a = r(791785),
    s = r(276442),
    f = r(793541),
    b = r(380898),
    p = r(710094),
    d = r(865921),
    O = r(853872),
    y = r(806984),
    j = r(464797),
    g = r(946211),
    P = r(231338);
function h(e) {
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
let m = [
    {
        key: null,
        renderStep: (e) => (0, n.jsx)(d.v, h({}, e))
    },
    {
        key: i.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, n.jsx)(
                s.J,
                v(h({}, e), {
                    onReturn: () => {
                        0 === Object.keys(O.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(i.h8.REVIEW, { trackedFromStep: i.h8.ADD_PAYMENT_STEPS });
                    }
                })
            )
    },
    {
        key: i.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, n.jsx)(b.Z, {})
    },
    {
        key: i.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, n.jsx)(f.Z, {})
    },
    {
        key: i.h8.REVIEW,
        renderStep: (e) => (0, n.jsx)(p.l, h({}, e))
    },
    {
        key: i.h8.CONFIRM,
        renderStep: (e) => (0, n.jsx)(y.Z, h({}, e))
    }
];
function x(e) {
    var { guildProductContext: t, sourceAnalyticsLocations: r, applicationId: i } = e,
        s = (function (e, t) {
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
    let { analyticsLocations: f } = (0, c.ZP)(r, o.Z.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, n.jsx)(
        j.R,
        v(h({}, t), {
            children: (0, n.jsx)(c.Gt, {
                value: f,
                children: (0, n.jsx)(u.PaymentContextProvider, {
                    stepConfigs: m,
                    applicationId: i,
                    skuIDs: [s.skuId],
                    activeSubscription: null,
                    purchaseType: P.GZ.ONE_TIME,
                    children: (0, n.jsx)(l.KB, {
                        children: (0, n.jsx)(
                            a.PaymentModal,
                            h(
                                {
                                    initialPlanId: null,
                                    analyticsLocations: f,
                                    renderHeader: g.L
                                },
                                s
                            )
                        )
                    })
                })
            })
        })
    );
}
