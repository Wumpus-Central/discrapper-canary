s.d(t, { h: () => _ });
var a = s(200651),
    n = s(192379),
    i = s(557533),
    r = s.n(i),
    o = s(794010),
    l = s(653371),
    c = s(388755),
    d = s(330711),
    u = s(695293);
let p = null;
class _ extends n.PureComponent {
    render() {
        let { token: e, className: t, onChangeLocale: s, mainContentId: i, mobileClassName: o, avoidRouter: d, authRedirectTo: _, openNavAriaLabel: h, hideNavAriaLabel: N, skipToContentLabel: m } = this.props;
        return null == p
            ? null
            : (0, a.jsxs)(n.Fragment, {
                  children: [
                      (0, a.jsx)(l.a, {
                          className: r()(u.desktopHeader, t),
                          TrackClick: p,
                          token: e,
                          avoidRouter: d,
                          authRedirectTo: _,
                          onChangeLocale: s,
                          mainContentId: i,
                          skipToContentLabel: m
                      }),
                      (0, a.jsx)(c.D, {
                          className: r()(u.mobileHeader, o),
                          token: e,
                          avoidRouter: d,
                          TrackClick: p,
                          onChangeLocale: s,
                          openNavAriaLabel: h,
                          hideNavAriaLabel: N
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
