n.d(t, { default: () => S });
var r = n(54381);
n(473749);
var o = n(100527),
    c = n(906732),
    l = n(987209),
    i = n(563132),
    u = n(409813),
    a = n(107998),
    s = n(791785),
    f = n(276442),
    d = n(793541),
    b = n(380898),
    p = n(710094),
    O = n(865921),
    y = n(853872),
    j = n(806984),
    g = n(464797),
    P = n(946211),
    h = n(231338);
function v(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
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
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = [
    {
        key: null,
        renderStep: (e) => (0, r.jsx)(O.v, v({}, e)),
    },
    {
        key: u.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(
                f.J,
                m(v({}, e), {
                    onReturn: () => {
                        0 === Object.keys(y.Z.paymentSources).length
                            ? e.handleClose()
                            : e.handleStepChange(u.h8.REVIEW, { trackedFromStep: u.h8.ADD_PAYMENT_STEPS });
                    },
                }),
            ),
    },
    {
        key: u.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(b.Z, {}),
    },
    {
        key: u.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(d.Z, {}),
    },
    {
        key: u.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(p.l, v({}, e)),
    },
    {
        key: u.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(j.Z, v({}, e)),
    },
];
function S(e) {
    var { guildProductContext: t, sourceAnalyticsLocations: n, applicationId: u } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++)
                    (n = c[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["guildProductContext", "sourceAnalyticsLocations", "applicationId"]);
    let { analyticsLocations: d } = (0, c.ZP)(n, o.Z.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, r.jsx)(
        g.R,
        m(v({}, t), {
            children: (0, r.jsx)(c.Gt, {
                value: d,
                children: (0, r.jsx)(i.PaymentContextProvider, {
                    stepConfigs: x,
                    applicationId: u,
                    skuIDs: [f.skuId],
                    activeSubscription: null,
                    purchaseType: h.GZ.ONE_TIME,
                    children: (0, r.jsx)(a.c1, {
                        children: (0, r.jsx)(l.KB, {
                            children: (0, r.jsx)(
                                s.PaymentModal,
                                v(
                                    {
                                        initialPlanId: null,
                                        analyticsLocations: d,
                                        renderHeader: P.L,
                                    },
                                    f,
                                ),
                            ),
                        }),
                    }),
                }),
            }),
        }),
    );
}
