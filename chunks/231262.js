a.d(t, { h: () => p });
var n = a(200651),
    s = a(192379),
    r = a(120356),
    l = a.n(r),
    i = a(794010),
    o = a(653371),
    c = a(388755),
    d = a(330711),
    u = a(316202);
let _ = null;
class p extends s.PureComponent {
    render() {
        let { token: e, className: t, onChangeLocale: a, mainContentId: r, mobileClassName: i, avoidRouter: d, authRedirectTo: p, openNavAriaLabel: h, hideNavAriaLabel: m, skipToContentLabel: N } = this.props;
        return null == _
            ? null
            : (0, n.jsxs)(s.Fragment, {
                  children: [
                      (0, n.jsx)(o.a, {
                          className: l()(u.desktopHeader, t),
                          TrackClick: _,
                          token: e,
                          avoidRouter: d,
                          authRedirectTo: p,
                          onChangeLocale: a,
                          mainContentId: r,
                          skipToContentLabel: N
                      }),
                      (0, n.jsx)(c.D, {
                          className: l()(u.mobileHeader, i),
                          token: e,
                          avoidRouter: d,
                          TrackClick: _,
                          onChangeLocale: a,
                          openNavAriaLabel: h,
                          hideNavAriaLabel: m
                      })
                  ]
              });
    }
    constructor(e) {
        super(e),
            null != e.locale && d.Z.setLocale(e.locale),
            (_ = (t) =>
                (0, n.jsx)(
                    i.Z,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(a);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = a[t]),
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
                    })(
                        {
                            track: e.track,
                            trackOutboundLink: e.trackOutboundLink
                        },
                        t
                    )
                ));
    }
}
