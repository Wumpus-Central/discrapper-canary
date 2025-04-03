n.d(t, { getApplicationPaymentSteps: () => f }), n(47120);
var r = n(200651);
n(192379);
var i = n(409813),
    l = n(276442),
    a = n(961830),
    o = n(721165),
    s = n(519801),
    c = n(589771),
    u = n(883419),
    d = n(388032);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e) {
    let { guildId: t, showBenefitsFirst: n } = e;
    return [
        {
            key: null,
            renderStep: (e) =>
                (0, r.jsx)(
                    c.Z,
                    m(
                        {
                            initialStep: n ? i.h8.BENEFITS : i.h8.REVIEW,
                            guildId: t
                        },
                        e
                    )
                )
        },
        {
            key: i.h8.BENEFITS,
            renderStep: (e) => (0, r.jsx)(o.Z, m({}, e)),
            options: { useBreadcrumbLabel: () => d.NW.string(d.t['5LD2+P']) }
        },
        {
            key: i.h8.ADD_PAYMENT_STEPS,
            renderStep: (e) => {
                var t, n;
                return (0, r.jsx)(
                    l.J,
                    ((t = m({}, e)),
                    (n = n =
                        {
                            breadcrumbSteps: [i.h8.ADD_PAYMENT_STEPS, i.h8.REVIEW, i.h8.CONFIRM]
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            },
            options: { renderHeader: !0 }
        },
        ...a.yp,
        {
            key: i.h8.REVIEW,
            renderStep: (e) =>
                (0, r.jsx)(
                    u.Z,
                    m(
                        {
                            backButtonEligible: !!n || void 0,
                            prevStep: n ? i.h8.BENEFITS : void 0
                        },
                        e
                    )
                ),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: () => d.NW.string(d.t.QBnNHh)
            }
        },
        {
            key: i.h8.CONFIRM,
            renderStep: (e) => (0, r.jsx)(s.Z, m({ showBenefits: !n }, e))
        }
    ];
}
