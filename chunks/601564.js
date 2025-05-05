n.r(t),
    n.d(t, {
        default: () => A,
        getPageSize: () => P
    }),
    n(388685),
    n(35282);
var r = n(255367),
    i = n(73800),
    l = n(593473),
    a = n(114858),
    o = n(442837),
    s = n(930118),
    c = n(355467),
    u = n(410575),
    d = n(666743),
    p = n(112724),
    h = n(447269),
    f = n(612226),
    g = n(714338),
    m = n(663993),
    b = n(628123),
    _ = n(703656),
    E = n(108427),
    O = n(911314),
    y = n(429899),
    I = n(843445),
    v = n(981631),
    C = n(388032),
    S = n(681205);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let T = (0, m.Un)({
    createPromise: () => Promise.all([n.e('15274'), n.e('87626')]).then(n.bind(n, 496691)),
    webpackId: 496691
});
function P(e) {
    return e < I.x ? I.b.SMALL : I.b.LARGE;
}
o.ZP.initialize();
class j extends i.PureComponent {
    componentDidMount() {
        (0, s.Y)(this.props.location),
            (this.stopListeningToHistory = (0, _.s1)().listen((e) => {
                e.pathname.startsWith(v.Z5c.APPLICATION_STORE) && (0, s.Y)(e);
            })),
            this.props.isAuthenticated && (0, c.tZ)(),
            g.Z.disable(),
            g.Z.setLayout(h.r),
            g.Z.enable(),
            (0, E.e)('application_store');
    }
    componentWillUnmount() {
        null != this.stopListeningToHistory && this.stopListeningToHistory(), g.Z.disable(), g.Z.setLayout(f.oT), g.Z.enable();
    }
    renderCustomErrorMessage() {
        return (0, r.jsxs)('div', {
            children: [(0, r.jsx)('p', { children: C.intl.string(C.t['1PZdFx']) }), (0, r.jsx)('p', { children: C.intl.string(C.t.CvQlAA) })]
        });
    }
    render() {
        let { isAuthenticated: e, location: t } = this.props,
            n = e
                ? (0, r.jsx)('div', {
                      className: S.applicationStore,
                      children: this.renderContent()
                  })
                : (0, r.jsx)(T, {
                      className: S.applicationStore,
                      location: t,
                      render: this.renderContent
                  });
        return (0, r.jsx)(b.Z, {
            renderCustomMessage: this.renderCustomErrorMessage,
            children: n
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'stopListeningToHistory', void 0),
            N(this, 'renderStoreListing', (e) => {
                let {
                        match: {
                            params: { skuId: t, applicationId: n, slug: i }
                        },
                        location: a
                    } = e,
                    { width: o } = this.props,
                    s = (0, l.parse)(a.search);
                return (0, r.jsx)(u.Z, {
                    page: v.ZY5.STORE_LISTING,
                    root: !0,
                    children: (0, r.jsx)(y.Z, {
                        skuId: t,
                        applicationId: n,
                        slug: i,
                        location: a,
                        storeListingId: s.store_listing_id,
                        pageSize: P(o)
                    })
                });
            }),
            N(this, 'renderContent', () =>
                (0, r.jsxs)(a.rs, {
                    children: [
                        (0, r.jsx)(a.AW, {
                            path: v.Z5c.APPLICATION_STORE,
                            exact: !0,
                            render: () =>
                                (0, r.jsx)(u.Z, {
                                    page: v.ZY5.STORE_DIRECTORY_HOME,
                                    root: !0,
                                    children: (0, r.jsx)(O.Z, {})
                                })
                        }),
                        (0, r.jsx)(a.AW, {
                            path: v.Z5c.APPLICATION_STORE_LISTING_APPLICATION(':applicationId', ':slug'),
                            render: this.renderStoreListing
                        }),
                        (0, r.jsx)(a.AW, {
                            path: v.Z5c.APPLICATION_STORE_LISTING_APPLICATION(':applicationId'),
                            render: this.renderStoreListing
                        }),
                        (0, r.jsx)(a.AW, {
                            path: v.Z5c.APPLICATION_STORE_LISTING_SKU(':skuId', ':slug'),
                            render: this.renderStoreListing
                        }),
                        (0, r.jsx)(a.AW, {
                            path: v.Z5c.APPLICATION_STORE_LISTING_SKU(':skuId'),
                            render: this.renderStoreListing
                        }),
                        (0, r.jsx)(a.l_, { to: v.Z5c.APP })
                    ]
                })
            );
    }
}
let A = (0, a.EN)((0, d.Z)((0, p.Z)(j)));
