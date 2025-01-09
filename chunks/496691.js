s.r(t), s(47120);
var a = s(200651),
    n = s(192379),
    r = s(548668),
    i = s(231262),
    o = s(501522),
    l = s(442837),
    c = s(153867),
    d = s(706454),
    u = s(626135),
    p = s(981631),
    N = s(388032),
    h = s(32304);
class m extends n.Component {
    shouldScrollToTop(e) {
        let { location: t } = e;
        return t.pathname.startsWith(p.Z5c.APPLICATION_STORE_LISTING_SKU('')) || t.pathname.startsWith(p.Z5c.APPLICATION_STORE_LISTING_APPLICATION(''));
    }
    render() {
        let { location: e, className: t, render: s, locale: l } = this.props;
        return (0, a.jsx)(o.Z, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, o) =>
                (0, a.jsxs)(n.Fragment, {
                    children: [
                        (0, a.jsx)(i.h, {
                            avoidRouter: !0,
                            locale: l,
                            authRedirectTo: e.pathname,
                            track: u.default.track,
                            className: h.marketingHeader,
                            onChangeLocale: this.handleHeaderLocaleChange,
                            mobileClassName: h.marketingHeader,
                            openNavAriaLabel: N.intl.string(N.t.Fs9k3N),
                            hideNavAriaLabel: N.intl.string(N.t.AbfyHB),
                            skipToContentLabel: N.intl.string(N.t['18gavL'])
                        }),
                        s(t, o),
                        (0, a.jsx)(r.$, {
                            locale: l,
                            authRedirectTo: e.pathname,
                            avoidRouter: !0,
                            track: u.default.track,
                            className: h.marketingFooter
                        })
                    ]
                })
        });
    }
    constructor(...e) {
        var t, s, a;
        super(...e),
            (t = this),
            (s = 'handleHeaderLocaleChange'),
            (a = (e) => {
                e !== this.props.locale && c.ZP.overrideLocale(e);
            }),
            s in t
                ? Object.defineProperty(t, s, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[s] = a);
    }
}
t.default = l.ZP.connectStores([d.default], () => ({ locale: d.default.locale }))(m);
