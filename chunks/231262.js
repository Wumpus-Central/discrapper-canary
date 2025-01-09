s.d(t, {
    h: function () {
        return N;
    }
});
var a = s(200651),
    n = s(192379),
    r = s(557533),
    i = s.n(r),
    o = s(794010),
    l = s(653371),
    c = s(388755),
    d = s(330711),
    u = s(24579);
let p = null;
class N extends n.PureComponent {
    render() {
        let { token: e, className: t, onChangeLocale: s, mainContentId: r, mobileClassName: o, avoidRouter: d, authRedirectTo: N, openNavAriaLabel: h, hideNavAriaLabel: m, skipToContentLabel: f } = this.props;
        return null == p
            ? null
            : (0, a.jsxs)(n.Fragment, {
                  children: [
                      (0, a.jsx)(l.a, {
                          className: i()(u.desktopHeader, t),
                          TrackClick: p,
                          token: e,
                          avoidRouter: d,
                          authRedirectTo: N,
                          onChangeLocale: s,
                          mainContentId: r,
                          skipToContentLabel: f
                      }),
                      (0, a.jsx)(c.D, {
                          className: i()(u.mobileHeader, o),
                          token: e,
                          avoidRouter: d,
                          TrackClick: p,
                          onChangeLocale: s,
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
                (0, a.jsx)(o.Z, {
                    track: e.track,
                    trackOutboundLink: e.trackOutboundLink,
                    ...t
                }));
    }
}
