n.d(t, { getApplicationPaymentSteps: () => m }), n(896048);
var r = n(627968);
n(64700);
var i = n(166532),
    l = n(735305),
    a = n(721252),
    s = n(924076),
    o = n(984742),
    c = n(155301),
    u = n(758655),
    d = n(985018);
function p(e) {
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
function m(e) {
    let { guildId: t, showBenefitsFirst: n } = e;
    return [
        {
            key: null,
            renderStep: (e) =>
                (0, r.jsx)(
                    c.A,
                    p(
                        {
                            initialStep: n ? i.pn.BENEFITS : i.pn.REVIEW,
                            guildId: t,
                        },
                        e,
                    ),
                ),
        },
        {
            key: i.pn.BENEFITS,
            renderStep: (e) => (0, r.jsx)(s.A, p({}, e)),
            options: { useBreadcrumbLabel: () => d.intl.string(d.t["5LD2+B"]) },
        },
        {
            key: i.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => {
                var t, n;
                return (0, r.jsx)(
                    l.x,
                    ((t = p({}, e)),
                    (n = n =
                        {
                            breadcrumbSteps: [i.pn.ADD_PAYMENT_STEPS, i.pn.REVIEW, i.pn.CONFIRM],
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
                    t),
                );
            },
            options: { renderHeader: !0 },
        },
        ...a.hh,
        {
            key: i.pn.REVIEW,
            renderStep: (e) =>
                (0, r.jsx)(
                    u.A,
                    p(
                        {
                            backButtonEligible: !!n || void 0,
                            prevStep: n ? i.pn.BENEFITS : void 0,
                        },
                        e,
                    ),
                ),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: () => d.intl.string(d.t.QBnNHq),
            },
        },
        {
            key: i.pn.CONFIRM,
            renderStep: (e) => (0, r.jsx)(o.A, p({ showBenefits: !n }, e)),
        },
    ];
}
