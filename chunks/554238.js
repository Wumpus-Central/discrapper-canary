a.r(t), a.d(t, { default: () => k });
var s = a(627968),
    l = a(64700),
    i = a(341856),
    r = a(955874),
    n = a(560958),
    o = a(311907),
    c = a(817281),
    d = a(773669),
    _ = a(954571),
    N = a(652215),
    A = a(985018),
    u = a(881640);
class I extends l.Component {
    shouldScrollToTop(e) {
        let { location: t } = e;
        return (
            t.pathname.startsWith(N.BVt.APPLICATION_STORE_LISTING_SKU("")) ||
            t.pathname.startsWith(N.BVt.APPLICATION_STORE_LISTING_APPLICATION(""))
        );
    }
    handleHeaderLocaleChange = (e) => {
        e !== this.props.locale && c.Ay.overrideLocale(e);
    };
    render() {
        let { location: e, className: t, render: a, locale: o } = this.props;
        return (0, s.jsx)(n.A, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, n) =>
                (0, s.jsxs)(l.Fragment, {
                    children: [
                        (0, s.jsx)(r.Y, {
                            avoidRouter: !0,
                            locale: o,
                            authRedirectTo: e.pathname,
                            track: _.default.track,
                            className: u.Kn,
                            onChangeLocale: this.handleHeaderLocaleChange,
                            mobileClassName: u.Kn,
                            openNavAriaLabel: A.intl.string(A.t.Fs9k3K),
                            hideNavAriaLabel: A.intl.string(A.t.AbfyHI),
                            skipToContentLabel: A.intl.string(A.t["18gavA"]),
                        }),
                        a(t, n),
                        (0, s.jsx)(i.w, {
                            locale: o,
                            authRedirectTo: e.pathname,
                            avoidRouter: !0,
                            track: _.default.track,
                            className: u.wn,
                        }),
                    ],
                }),
        });
    }
}
let k = o.Ay.connectStores([d.default], () => ({ locale: d.default.locale }))(I);
