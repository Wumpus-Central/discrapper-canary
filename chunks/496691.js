a.r(t), a.d(t, { default: () => h }), a(388685);
var n = a(200651),
    r = a(192379),
    s = a(548668),
    l = a(231262),
    i = a(501522),
    o = a(442837),
    c = a(153867),
    d = a(706454),
    u = a(626135),
    _ = a(981631),
    N = a(388032),
    m = a(681205);
class p extends r.Component {
    shouldScrollToTop(e) {
        let { location: t } = e;
        return t.pathname.startsWith(_.Z5c.APPLICATION_STORE_LISTING_SKU('')) || t.pathname.startsWith(_.Z5c.APPLICATION_STORE_LISTING_APPLICATION(''));
    }
    render() {
        let { location: e, className: t, render: a, locale: o } = this.props;
        return (0, n.jsx)(i.Z, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, i) =>
                (0, n.jsxs)(r.Fragment, {
                    children: [
                        (0, n.jsx)(l.h, {
                            avoidRouter: !0,
                            locale: o,
                            authRedirectTo: e.pathname,
                            track: u.default.track,
                            className: m.marketingHeader,
                            onChangeLocale: this.handleHeaderLocaleChange,
                            mobileClassName: m.marketingHeader,
                            openNavAriaLabel: N.NW.string(N.t.Fs9k3N),
                            hideNavAriaLabel: N.NW.string(N.t.AbfyHB),
                            skipToContentLabel: N.NW.string(N.t['18gavL'])
                        }),
                        a(t, i),
                        (0, n.jsx)(s.$, {
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
let h = o.ZP.connectStores([d.default], () => ({ locale: d.default.locale }))(p);
