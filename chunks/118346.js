n.d(t, {
    B: () => m,
    b: () => d
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(893776),
    s = n(489813),
    a = n(388032),
    c = n(667084);
function u() {
    let [e, t] = i.useState(!1),
        [n, s] = i.useState(!1),
        [u, d] = i.useState(!1);
    i.useEffect(() => {
        let e;
        return (
            n &&
                (e = setTimeout(() => {
                    s(!1);
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
                await o.Z.verifyResend(), s(!0), d(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return n
        ? (0, r.jsx)(l.Text, {
              className: c.verifyConfirmText,
              variant: 'text-sm/normal',
              color: 'text-positive',
              children: a.NW.string(a.t.H3Q7U1)
          })
        : (0, r.jsx)(l.zxk, {
              size: l.zxk.Sizes.SMALL,
              submitting: e,
              onClick: m,
              children: u ? a.NW.string(a.t.WnX4Jy) : a.NW.string(a.t['13ofGh'])
          });
}
function d() {
    return (0, r.jsx)(s.PU, {
        className: c.editableRequirementContainer,
        icon: l._XJ,
        text: a.NW.string(a.t.c6EUJC),
        footnote: a.NW.string(a.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, r.jsx)(l.ua7, {
            text: a.NW.string(a.t.mGlP39),
            children: (e) => {
                var t, n;
                return (0, r.jsx)(
                    l.zxk,
                    ((t = (function (e) {
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
                    })({}, e)),
                    (n = n =
                        {
                            size: l.zxk.Sizes.SMALL,
                            disabled: !0,
                            children: a.NW.string(a.t['13ofGh'])
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
function m(e) {
    let { isUserVerified: t } = e,
        n = t ? a.NW.string(a.t.qY1jHB) : a.NW.string(a.t.c6EUJC);
    return (0, r.jsx)(s.PU, {
        className: c.editableRequirementContainer,
        icon: l._XJ,
        text: n,
        footnote: a.NW.string(a.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, r.jsx)(u, {})
    });
}
