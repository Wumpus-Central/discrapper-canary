a.r(t),
    a.d(t, {
        default: () => b,
    }),
    a(896048);
var s = a(627968),
    l = a(64700),
    r = a(341856),
    n = a(955874),
    i = a(560958),
    o = a(311907),
    c = a(817281),
    d = a(773669),
    u = a(954571),
    N = a(652215),
    A = a(985018),
    p = a(58682);
class h extends l.Component {
    shouldScrollToTop(e) {
        let { location: t } = e;
        return (
            t.pathname.startsWith(N.BVt.APPLICATION_STORE_LISTING_SKU("")) ||
            t.pathname.startsWith(N.BVt.APPLICATION_STORE_LISTING_APPLICATION(""))
        );
    }
    render() {
        let { location: e, className: t, render: a, locale: o } = this.props;
        return (0, s.jsx)(i.A, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, i) =>
                (0, s.jsxs)(l.Fragment, {
                    children: [
                        (0, s.jsx)(n.Y, {
                            avoidRouter: !0,
                            locale: o,
                            authRedirectTo: e.pathname,
                            track: u.default.track,
                            className: p.Kn,
                            onChangeLocale: this.handleHeaderLocaleChange,
                            mobileClassName: p.Kn,
                            openNavAriaLabel: A.intl.string(A.t.Fs9k3K),
                            hideNavAriaLabel: A.intl.string(A.t.AbfyHI),
                            skipToContentLabel: A.intl.string(A.t["18gavA"]),
                        }),
                        a(t, i),
                        (0, s.jsx)(r.w, {
                            locale: o,
                            authRedirectTo: e.pathname,
                            avoidRouter: !0,
                            track: u.default.track,
                            className: p.wn,
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
                e !== this.props.locale && c.Ay.overrideLocale(e);
            });
    }
}
let b = o.Ay.connectStores([d.default], () => ({
    locale: d.default.locale,
}))(h);
