s.r(t), s.d(t, { default: () => m }), s(47120);
var a = s(200651),
    n = s(192379),
    i = s(548668),
    r = s(231262),
    o = s(501522),
    l = s(442837),
    c = s(153867),
    d = s(706454),
    u = s(626135),
    p = s(981631),
    _ = s(388032),
    h = s(912960);
class N extends n.Component {
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
                        (0, a.jsx)(r.h, {
                            avoidRouter: !0,
                            locale: l,
                            authRedirectTo: e.pathname,
                            track: u.default.track,
                            className: h.marketingHeader,
                            onChangeLocale: this.handleHeaderLocaleChange,
                            mobileClassName: h.marketingHeader,
                            openNavAriaLabel: _.intl.string(_.t.Fs9k3N),
                            hideNavAriaLabel: _.intl.string(_.t.AbfyHB),
                            skipToContentLabel: _.intl.string(_.t['18gavL'])
                        }),
                        s(t, o),
                        (0, a.jsx)(i.$, {
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
        var t, s;
        super(...e),
            (t = 'handleHeaderLocaleChange'),
            (s = (e) => {
                e !== this.props.locale && c.ZP.overrideLocale(e);
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = s);
    }
}
let m = l.ZP.connectStores([d.default], () => ({ locale: d.default.locale }))(N);
