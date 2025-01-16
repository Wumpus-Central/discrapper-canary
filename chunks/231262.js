a.d(t, {
    h: function () {
        return h;
    }
});
var n = a(200651),
    s = a(192379),
    i = a(557533),
    r = a.n(i),
    l = a(794010),
    o = a(653371),
    c = a(388755),
    d = a(330711),
    u = a(24579);
let N = null;
class h extends s.PureComponent {
    render() {
        let { token: e, className: t, onChangeLocale: a, mainContentId: i, mobileClassName: l, avoidRouter: d, authRedirectTo: h, openNavAriaLabel: m, hideNavAriaLabel: p, skipToContentLabel: I } = this.props;
        return null == N
            ? null
            : (0, n.jsxs)(s.Fragment, {
                  children: [
                      (0, n.jsx)(o.a, {
                          className: r()(u.desktopHeader, t),
                          TrackClick: N,
                          token: e,
                          avoidRouter: d,
                          authRedirectTo: h,
                          onChangeLocale: a,
                          mainContentId: i,
                          skipToContentLabel: I
                      }),
                      (0, n.jsx)(c.D, {
                          className: r()(u.mobileHeader, l),
                          token: e,
                          avoidRouter: d,
                          TrackClick: N,
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
            (N = (t) =>
                (0, n.jsx)(l.Z, {
                    track: e.track,
                    trackOutboundLink: e.trackOutboundLink,
                    ...t
                }));
    }
}
