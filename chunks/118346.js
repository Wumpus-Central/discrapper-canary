(n.d(t, {
    B: () => f,
    b: () => m
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(755721),
    o = n(481060),
    s = n(893776),
    a = n(489813),
    c = n(388032),
    u = n(667084);
function d() {
    let [e, t] = i.useState(!1),
        [n, l] = i.useState(!1),
        [a, d] = i.useState(!1);
    i.useEffect(() => {
        let e;
        return (
            n &&
                (e = setTimeout(() => {
                    l(!1);
                }, 2000)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [n]);
    let m = async () => {
        if (!e) {
            t(!0);
            try {
                (await s.Z.verifyResend(), l(!0), d(!0));
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return n
        ? (0, r.jsx)(o.Text, {
              className: u.verifyConfirmText,
              variant: 'text-sm/normal',
              color: 'text-feedback-positive',
              children: c.intl.string(c.t.H3Q7U1)
          })
        : (0, r.jsx)(o.zxk, {
              variant: 'primary',
              size: 'sm',
              text: a ? c.intl.string(c.t.WnX4Jy) : c.intl.string(c.t['13ofGh']),
              loading: e,
              onClick: m
          });
}
function m() {
    return (0, r.jsx)(a.PU, {
        className: u.editableRequirementContainer,
        icon: o._XJ,
        text: c.intl.string(c.t.c6EUJC),
        footnote: c.intl.string(c.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, r.jsx)(o.ua7, {
            text: c.intl.string(c.t.mGlP39),
            children: (e) => {
                var t, n;
                return (0, r.jsx)(
                    l.zx,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, e)),
                    (n = n =
                        {
                            size: l.zx.Sizes.SMALL,
                            disabled: !0,
                            children: c.intl.string(c.t['13ofGh'])
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
            }
        })
    });
}
function f(e) {
    let { isUserVerified: t } = e,
        n = t ? c.intl.string(c.t.qY1jHB) : c.intl.string(c.t.c6EUJC);
    return (0, r.jsx)(a.PU, {
        className: u.editableRequirementContainer,
        icon: o._XJ,
        text: n,
        footnote: c.intl.string(c.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, r.jsx)(d, {})
    });
}
