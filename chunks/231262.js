a.d(t, { h: () => m });
var n = a(54381),
    r = a(473749),
    s = a(120356),
    l = a.n(s),
    i = a(794010),
    o = a(653371),
    c = a(388755),
    d = a(330711),
    u = a(61450);
let N = null;
class m extends r.PureComponent {
    render() {
        let {
            token: e,
            className: t,
            onChangeLocale: a,
            mainContentId: s,
            mobileClassName: i,
            avoidRouter: d,
            authRedirectTo: m,
            openNavAriaLabel: f,
            hideNavAriaLabel: p,
            skipToContentLabel: h,
        } = this.props;
        return null == N
            ? null
            : (0, n.jsxs)(r.Fragment, {
                  children: [
                      (0, n.jsx)(o.a, {
                          className: l()(u.desktopHeader, t),
                          TrackClick: N,
                          token: e,
                          avoidRouter: d,
                          authRedirectTo: m,
                          onChangeLocale: a,
                          mainContentId: s,
                          skipToContentLabel: h,
                      }),
                      (0, n.jsx)(c.D, {
                          className: l()(u.mobileHeader, i),
                          token: e,
                          avoidRouter: d,
                          TrackClick: N,
                          onChangeLocale: a,
                          openNavAriaLabel: f,
                          hideNavAriaLabel: p,
                      }),
                  ],
              });
    }
    constructor(e) {
        super(e),
            null != e.locale && d.Z.setLocale(e.locale),
            (N = (t) =>
                (0, n.jsx)(
                    i.Z,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(a);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = a[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })(
                        {
                            track: e.track,
                            trackOutboundLink: e.trackOutboundLink,
                        },
                        t,
                    ),
                ));
    }
}
