a.r(t), a.d(t, { default: () => N }), a(47120);
var n = a(200651),
    s = a(192379),
    r = a(548668),
    l = a(231262),
    i = a(501522),
    o = a(442837),
    c = a(153867),
    d = a(706454),
    u = a(626135),
    p = a(981631),
    _ = a(388032),
    h = a(681205);
class m extends s.Component {
    shouldScrollToTop(e) {
        let { location: t } = e;
        return t.pathname.startsWith(p.Z5c.APPLICATION_STORE_LISTING_SKU('')) || t.pathname.startsWith(p.Z5c.APPLICATION_STORE_LISTING_APPLICATION(''));
    }
    render() {
        let { location: e, className: t, render: a, locale: o } = this.props;
        return (0, n.jsx)(i.Z, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, i) =>
                (0, n.jsxs)(s.Fragment, {
                    children: [
                        (0, n.jsx)(l.h, {
                            avoidRouter: !0,
                            locale: o,
                            authRedirectTo: e.pathname,
                            track: u.default.track,
                            className: h.marketingHeader,
                            onChangeLocale: this.handleHeaderLocaleChange,
                            mobileClassName: h.marketingHeader,
                            openNavAriaLabel: _.NW.string(_.t.Fs9k3N),
                            hideNavAriaLabel: _.NW.string(_.t.AbfyHB),
                            skipToContentLabel: _.NW.string(_.t['18gavL'])
                        }),
                        a(t, i),
                        (0, n.jsx)(r.$, {
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
let N = o.ZP.connectStores([d.default], () => ({ locale: d.default.locale }))(m);
