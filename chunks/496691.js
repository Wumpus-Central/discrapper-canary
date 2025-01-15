a.r(t), a(47120);
var n = a(200651),
    s = a(192379),
    i = a(548668),
    r = a(231262),
    l = a(501522),
    o = a(442837),
    c = a(153867),
    d = a(706454),
    u = a(626135),
    N = a(981631),
    h = a(388032),
    m = a(32304);
class p extends s.Component {
    shouldScrollToTop(e) {
        let { location: t } = e;
        return t.pathname.startsWith(N.Z5c.APPLICATION_STORE_LISTING_SKU('')) || t.pathname.startsWith(N.Z5c.APPLICATION_STORE_LISTING_APPLICATION(''));
    }
    render() {
        let { location: e, className: t, render: a, locale: o } = this.props;
        return (0, n.jsx)(l.Z, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, l) =>
                (0, n.jsxs)(s.Fragment, {
                    children: [
                        (0, n.jsx)(r.h, {
                            avoidRouter: !0,
                            locale: o,
                            authRedirectTo: e.pathname,
                            track: u.default.track,
                            className: m.marketingHeader,
                            onChangeLocale: this.handleHeaderLocaleChange,
                            mobileClassName: m.marketingHeader,
                            openNavAriaLabel: h.intl.string(h.t.Fs9k3N),
                            hideNavAriaLabel: h.intl.string(h.t.AbfyHB),
                            skipToContentLabel: h.intl.string(h.t['18gavL'])
                        }),
                        a(t, l),
                        (0, n.jsx)(i.$, {
                            locale: o,
                            authRedirectTo: e.pathname,
                            avoidRouter: !0,
                            track: u.default.track,
                            className: m.marketingFooter
                        })
                    ]
                })
        });
    }
    constructor(...e) {
        var t, a, n;
        super(...e),
            (t = this),
            (a = 'handleHeaderLocaleChange'),
            (n = (e) => {
                e !== this.props.locale && c.ZP.overrideLocale(e);
            }),
            a in t
                ? Object.defineProperty(t, a, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[a] = n);
    }
}
t.default = o.ZP.connectStores([d.default], () => ({ locale: d.default.locale }))(p);
