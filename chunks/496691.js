a.r(t), a.d(t, { default: () => h }), a(388685);
var n = a(54381),
    r = a(473749),
    s = a(548668),
    l = a(231262),
    i = a(501522),
    o = a(442837),
    c = a(153867),
    d = a(706454),
    u = a(626135),
    N = a(981631),
    m = a(388032),
    f = a(456235);
class p extends r.Component {
    shouldScrollToTop(e) {
        let { location: t } = e;
        return (
            t.pathname.startsWith(N.Z5c.APPLICATION_STORE_LISTING_SKU("")) ||
            t.pathname.startsWith(N.Z5c.APPLICATION_STORE_LISTING_APPLICATION(""))
        );
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
                            className: f.marketingHeader,
                            onChangeLocale: this.handleHeaderLocaleChange,
                            mobileClassName: f.marketingHeader,
                            openNavAriaLabel: m.intl.string(m.t.Fs9k3K),
                            hideNavAriaLabel: m.intl.string(m.t.AbfyHI),
                            skipToContentLabel: m.intl.string(m.t["18gavA"]),
                        }),
                        a(t, i),
                        (0, n.jsx)(s.$, {
                            locale: o,
                            authRedirectTo: e.pathname,
                            avoidRouter: !0,
                            track: u.default.track,
                            className: f.marketingFooter,
                        }),
                    ],
                }),
        });
    }
    constructor(...e) {
        super(...e),
            (function (e, t, a) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: a,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = a);
            })(this, "handleHeaderLocaleChange", (e) => {
                e !== this.props.locale && c.ZP.overrideLocale(e);
            });
    }
}
let h = o.ZP.connectStores([d.default], () => ({ locale: d.default.locale }))(p);
