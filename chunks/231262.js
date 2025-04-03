a.d(t, { h: () => _ });
var n = a(200651),
    s = a(192379),
    r = a(557533),
    l = a.n(r),
    i = a(794010),
    o = a(653371),
    c = a(388755),
    d = a(330711),
    u = a(419920);
let p = null;
class _ extends s.PureComponent {
    render() {
        let { token: e, className: t, onChangeLocale: a, mainContentId: r, mobileClassName: i, avoidRouter: d, authRedirectTo: _, openNavAriaLabel: h, hideNavAriaLabel: m, skipToContentLabel: N } = this.props;
        return null == p
            ? null
            : (0, n.jsxs)(s.Fragment, {
                  children: [
                      (0, n.jsx)(o.a, {
                          className: l()(u.desktopHeader, t),
                          TrackClick: p,
                          token: e,
                          avoidRouter: d,
                          authRedirectTo: _,
                          onChangeLocale: a,
                          mainContentId: r,
                          skipToContentLabel: N
                      }),
                      (0, n.jsx)(c.D, {
                          className: l()(u.mobileHeader, i),
                          token: e,
                          avoidRouter: d,
                          TrackClick: p,
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
            (p = (t) =>
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
