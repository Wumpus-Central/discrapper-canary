a.r(t), a.d(t, { default: () => p }), a(47120);
var n = a(200651),
    s = a(192379),
    l = a(548668),
    i = a(231262),
    r = a(501522),
    o = a(442837),
    c = a(153867),
    d = a(706454),
    u = a(626135),
    _ = a(981631),
    N = a(388032),
    h = a(285085);
class m extends s.Component {
    shouldScrollToTop(e) {
        let { location: t } = e;
        return t.pathname.startsWith(_.Z5c.APPLICATION_STORE_LISTING_SKU('')) || t.pathname.startsWith(_.Z5c.APPLICATION_STORE_LISTING_APPLICATION(''));
    }
    render() {
        let { location: e, className: t, render: a, locale: o } = this.props;
        return (0, n.jsx)(r.Z, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, r) =>
                (0, n.jsxs)(s.Fragment, {
                    children: [
                        (0, n.jsx)(i.h, {
                            avoidRouter: !0,
                            locale: o,
                            authRedirectTo: e.pathname,
                            track: u.default.track,
                            className: h.marketingHeader,
                            onChangeLocale: this.handleHeaderLocaleChange,
                            mobileClassName: h.marketingHeader,
                            openNavAriaLabel: N.intl.string(N.t.Fs9k3N),
                            hideNavAriaLabel: N.intl.string(N.t.AbfyHB),
                            skipToContentLabel: N.intl.string(N.t['18gavL'])
                        }),
                        a(t, r),
                        (0, n.jsx)(l.$, {
                            locale: o,
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
        var t, a;
        super(...e),
            (t = 'handleHeaderLocaleChange'),
            (a = (e) => {
                e !== this.props.locale && c.ZP.overrideLocale(e);
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = a);
    }
}
let p = o.ZP.connectStores([d.default], () => ({ locale: d.default.locale }))(m);
