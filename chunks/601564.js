n.r(t),
    n.d(t, {
        default: () => y,
        getPageSize: () => b
    }),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(593473),
    a = n(512969),
    s = n(442837),
    o = n(930118),
    c = n(355467),
    d = n(410575),
    u = n(666743),
    h = n(112724),
    m = n(447269),
    p = n(612226),
    g = n(714338),
    _ = n(663993),
    f = n(628123),
    E = n(703656),
    I = n(108427),
    C = n(911314),
    N = n(429899),
    v = n(843445),
    T = n(981631),
    S = n(388032),
    Z = n(32304);
function A(e, t, n) {
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
let x = (0, _.Un)({
    createPromise: () => Promise.all([n.e('1868'), n.e('87626')]).then(n.bind(n, 496691)),
    webpackId: 496691
});
function b(e) {
    return e < v.x ? v.b.SMALL : v.b.LARGE;
}
s.ZP.initialize();
class L extends l.PureComponent {
    componentDidMount() {
        (0, o.Y)(this.props.location),
            (this.stopListeningToHistory = (0, E.s1)().listen((e) => {
                e.pathname.startsWith(T.Z5c.APPLICATION_STORE) && (0, o.Y)(e);
            })),
            this.props.isAuthenticated && (0, c.tZ)(),
            g.Z.disable(),
            g.Z.setLayout(m.r),
            g.Z.enable(),
            (0, I.e)('application_store');
    }
    componentWillUnmount() {
        null != this.stopListeningToHistory && this.stopListeningToHistory(), g.Z.disable(), g.Z.setLayout(p.oT), g.Z.enable();
    }
    renderCustomErrorMessage() {
        return (0, i.jsxs)('div', {
            children: [(0, i.jsx)('p', { children: S.intl.string(S.t['1PZdFx']) }), (0, i.jsx)('p', { children: S.intl.string(S.t.CvQlAA) })]
        });
    }
    render() {
        let { isAuthenticated: e, location: t } = this.props,
            n = e
                ? (0, i.jsx)('div', {
                      className: Z.applicationStore,
                      children: this.renderContent()
                  })
                : (0, i.jsx)(x, {
                      className: Z.applicationStore,
                      location: t,
                      render: this.renderContent
                  });
        return (0, i.jsx)(f.Z, {
            renderCustomMessage: this.renderCustomErrorMessage,
            children: n
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'stopListeningToHistory', void 0),
            A(this, 'renderStoreListing', (e) => {
                let {
                        match: {
                            params: { skuId: t, applicationId: n, slug: l }
                        },
                        location: a
                    } = e,
                    { width: s } = this.props,
                    o = (0, r.parse)(a.search);
                return (0, i.jsx)(d.Z, {
                    page: T.ZY5.STORE_LISTING,
                    root: !0,
                    children: (0, i.jsx)(N.Z, {
                        skuId: t,
                        applicationId: n,
                        slug: l,
                        location: a,
                        storeListingId: o.store_listing_id,
                        pageSize: b(s)
                    })
                });
            }),
            A(this, 'renderContent', () =>
                (0, i.jsxs)(a.rs, {
                    children: [
                        (0, i.jsx)(a.AW, {
                            path: T.Z5c.APPLICATION_STORE,
                            exact: !0,
                            render: () =>
                                (0, i.jsx)(d.Z, {
                                    page: T.ZY5.STORE_DIRECTORY_HOME,
                                    root: !0,
                                    children: (0, i.jsx)(C.Z, {})
                                })
                        }),
                        (0, i.jsx)(a.AW, {
                            path: T.Z5c.APPLICATION_STORE_LISTING_APPLICATION(':applicationId', ':slug'),
                            render: this.renderStoreListing
                        }),
                        (0, i.jsx)(a.AW, {
                            path: T.Z5c.APPLICATION_STORE_LISTING_APPLICATION(':applicationId'),
                            render: this.renderStoreListing
                        }),
                        (0, i.jsx)(a.AW, {
                            path: T.Z5c.APPLICATION_STORE_LISTING_SKU(':skuId', ':slug'),
                            render: this.renderStoreListing
                        }),
                        (0, i.jsx)(a.AW, {
                            path: T.Z5c.APPLICATION_STORE_LISTING_SKU(':skuId'),
                            render: this.renderStoreListing
                        }),
                        (0, i.jsx)(a.l_, { to: T.Z5c.APP })
                    ]
                })
            );
    }
}
let y = (0, a.EN)((0, u.Z)((0, h.Z)(L)));
