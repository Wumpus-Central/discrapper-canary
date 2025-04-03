r.d(t, {
    B: () => d,
    b: () => f
}),
    r(47120);
var n = r(200651),
    i = r(192379),
    o = r(481060),
    l = r(893776),
    s = r(476770),
    c = r(388032),
    u = r(641198);
function a() {
    let [e, t] = i.useState(!1),
        [r, s] = i.useState(!1),
        [a, f] = i.useState(!1);
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
    let d = async () => {
        if (!e) {
            t(!0);
            try {
                await l.Z.verifyResend(), s(!0), f(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return r
        ? (0, n.jsx)(o.Text, {
              className: u.verifyConfirmText,
              variant: 'text-sm/normal',
              color: 'text-positive',
              children: c.NW.string(c.t.H3Q7U1)
          })
        : (0, n.jsx)(o.zxk, {
              size: o.zxk.Sizes.SMALL,
              submitting: e,
              onClick: d,
              children: a ? c.NW.string(c.t.WnX4Jy) : c.NW.string(c.t['13ofGh'])
          });
}
function f() {
    return (0, n.jsx)(s.PU, {
        className: u.editableRequirementContainer,
        icon: o._XJ,
        text: c.NW.string(c.t.c6EUJC),
        footnote: c.NW.string(c.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, n.jsx)(o.ua7, {
            text: c.NW.string(c.t.mGlP39),
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
                            children: c.NW.string(c.t['13ofGh'])
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
function d(e) {
    let { isUserVerified: t } = e,
        r = t ? c.NW.string(c.t.qY1jHB) : c.NW.string(c.t.c6EUJC);
    return (0, n.jsx)(s.PU, {
        className: u.editableRequirementContainer,
        icon: o._XJ,
        text: r,
        footnote: c.NW.string(c.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, n.jsx)(a, {})
    });
}
