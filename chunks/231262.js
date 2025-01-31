a.d(t, { h: () => N });
var n = a(200651),
    s = a(192379),
    l = a(557533),
    i = a.n(l),
    r = a(794010),
    o = a(653371),
    c = a(388755),
    d = a(330711),
    u = a(24579);
let _ = null;
class N extends s.PureComponent {
    render() {
        let { token: e, className: t, onChangeLocale: a, mainContentId: l, mobileClassName: r, avoidRouter: d, authRedirectTo: N, openNavAriaLabel: h, hideNavAriaLabel: m, skipToContentLabel: p } = this.props;
        return null == _
            ? null
            : (0, n.jsxs)(s.Fragment, {
                  children: [
                      (0, n.jsx)(o.a, {
                          className: i()(u.desktopHeader, t),
                          TrackClick: _,
                          token: e,
                          avoidRouter: d,
                          authRedirectTo: N,
                          onChangeLocale: a,
                          mainContentId: l,
                          skipToContentLabel: p
                      }),
                      (0, n.jsx)(c.D, {
                          className: i()(u.mobileHeader, r),
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
                (0, n.jsx)(r.Z, {
                    track: e.track,
                    trackOutboundLink: e.trackOutboundLink,
                    ...t
                }));
    }
}
