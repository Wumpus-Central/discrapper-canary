a.d(t, { h: () => N });
var n = a(255367),
    r = a(73800),
    s = a(120356),
    l = a.n(s),
    i = a(794010),
    o = a(653371),
    c = a(388755),
    d = a(330711),
    u = a(419920);
let _ = null;
class N extends r.PureComponent {
    render() {
        let { token: e, className: t, onChangeLocale: a, mainContentId: s, mobileClassName: i, avoidRouter: d, authRedirectTo: N, openNavAriaLabel: m, hideNavAriaLabel: p, skipToContentLabel: h } = this.props;
        return null == _
            ? null
            : (0, n.jsxs)(r.Fragment, {
                  children: [
                      (0, n.jsx)(o.a, {
                          className: l()(u.desktopHeader, t),
                          TrackClick: _,
                          token: e,
                          avoidRouter: d,
                          authRedirectTo: N,
                          onChangeLocale: a,
                          mainContentId: s,
                          skipToContentLabel: h
                      }),
                      (0, n.jsx)(c.D, {
                          className: l()(u.mobileHeader, i),
                          token: e,
                          avoidRouter: d,
                          TrackClick: _,
                          onChangeLocale: a,
                          openNavAriaLabel: m,
                          hideNavAriaLabel: p
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
