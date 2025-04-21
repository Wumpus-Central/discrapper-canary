n.d(t, { getApplicationPaymentSteps: () => f }), n(388685);
var i = n(200651);
n(192379);
var r = n(409813),
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
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
                (0, i.jsx)(
                    c.Z,
                    m(
                        {
                            initialStep: n ? r.h8.BENEFITS : r.h8.REVIEW,
                            guildId: t
                        },
                        e
                    )
                )
        },
        {
            key: r.h8.BENEFITS,
            renderStep: (e) => (0, i.jsx)(o.Z, m({}, e)),
            options: { useBreadcrumbLabel: () => d.intl.string(d.t['5LD2+P']) }
        },
        {
            key: r.h8.ADD_PAYMENT_STEPS,
            renderStep: (e) => {
                var t, n;
                return (0, i.jsx)(
                    l.J,
                    ((t = m({}, e)),
                    (n = n =
                        {
                            breadcrumbSteps: [r.h8.ADD_PAYMENT_STEPS, r.h8.REVIEW, r.h8.CONFIRM]
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
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
            key: r.h8.REVIEW,
            renderStep: (e) =>
                (0, i.jsx)(
                    u.Z,
                    m(
                        {
                            backButtonEligible: !!n || void 0,
                            prevStep: n ? r.h8.BENEFITS : void 0
                        },
                        e
                    )
                ),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: () => d.intl.string(d.t.QBnNHh)
            }
        },
        {
            key: r.h8.CONFIRM,
            renderStep: (e) => (0, i.jsx)(s.Z, m({ showBenefits: !n }, e))
        }
    ];
}
