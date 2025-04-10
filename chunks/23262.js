r.d(t, {
    B: () => f,
    b: () => d
}),
    r(388685);
var n = r(200651),
    i = r(192379),
    o = r(481060),
    l = r(893776),
    s = r(476770),
    a = r(388032),
    c = r(641198);
function u() {
    let [e, t] = i.useState(!1),
        [r, s] = i.useState(!1),
        [u, d] = i.useState(!1);
    i.useEffect(() => {
        let e;
        return (
            r &&
                (e = setTimeout(() => {
                    s(!1);
                }, 2000)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [r]);
    let f = async () => {
        if (!e) {
            t(!0);
            try {
                await l.Z.verifyResend(), s(!0), d(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return r
        ? (0, n.jsx)(o.Text, {
              className: c.verifyConfirmText,
              variant: 'text-sm/normal',
              color: 'text-positive',
              children: a.NW.string(a.t.H3Q7U1)
          })
        : (0, n.jsx)(o.zxk, {
              size: o.zxk.Sizes.SMALL,
              submitting: e,
              onClick: f,
              children: u ? a.NW.string(a.t.WnX4Jy) : a.NW.string(a.t['13ofGh'])
          });
}
function d() {
    return (0, n.jsx)(s.PU, {
        className: c.editableRequirementContainer,
        icon: o._XJ,
        text: a.NW.string(a.t.c6EUJC),
        footnote: a.NW.string(a.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, n.jsx)(o.ua7, {
            text: a.NW.string(a.t.mGlP39),
            children: (e) => {
                var t, r;
                return (0, n.jsx)(
                    o.zxk,
                    ((t = (function (e) {
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
                    })({}, e)),
                    (r = r =
                        {
                            size: o.zxk.Sizes.SMALL,
                            disabled: !0,
                            children: a.NW.string(a.t['13ofGh'])
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t)
                );
            }
        })
    });
}
function f(e) {
    let { isUserVerified: t } = e,
        r = t ? a.NW.string(a.t.qY1jHB) : a.NW.string(a.t.c6EUJC);
    return (0, n.jsx)(s.PU, {
        className: c.editableRequirementContainer,
        icon: o._XJ,
        text: r,
        footnote: a.NW.string(a.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, n.jsx)(u, {})
    });
}
