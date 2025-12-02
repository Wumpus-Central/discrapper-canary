n.r(t),
    n.d(t, {
        default: () => x,
        getPageSize: () => j,
    }),
    n(388685),
    n(35282);
var r = n(54381),
    i = n(473749),
    l = n(593473),
    a = n(828700),
    s = n(442837),
    o = n(930118),
    c = n(355467),
    u = n(410575),
    d = n(666743),
    p = n(112724),
    f = n(447269),
    h = n(612226),
    g = n(714338),
    m = n(663993),
    _ = n(248687),
    b = n(703656),
    E = n(108427),
    O = n(911314),
    v = n(429899),
    y = n(843445),
    I = n(981631),
    C = n(388032),
    S = n(430355);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let N = (0, m.Un)({
    createPromise: () => Promise.all([n.e("88473"), n.e("87626")]).then(n.bind(n, 496691)),
    webpackId: 496691,
});
function j(e) {
    return e < y.x ? y.b.SMALL : y.b.LARGE;
}
s.ZP.initialize();
class P extends i.PureComponent {
    componentDidMount() {
        (0, o.Y)(this.props.location),
            (this.stopListeningToHistory = (0, b.s1)().listen((e) => {
                e.pathname.startsWith(I.Z5c.APPLICATION_STORE) && (0, o.Y)(e);
            })),
            this.props.isAuthenticated && (0, c.tZ)(),
            g.Z.disable(),
            g.Z.setLayout(f.r),
            g.Z.enable(),
            (0, E.e)("application_store");
    }
    componentWillUnmount() {
        null != this.stopListeningToHistory && this.stopListeningToHistory(),
            g.Z.disable(),
            g.Z.setLayout(h.oT),
            g.Z.enable();
    }
    renderCustomErrorMessage() {
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("p", { children: C.intl.string(C.t["1PZdF7"]) }),
                (0, r.jsx)("p", { children: C.intl.string(C.t.CvQlAH) }),
            ],
        });
    }
    render() {
        let { isAuthenticated: e, location: t } = this.props,
            n = e
                ? (0, r.jsx)("div", {
                      className: S.applicationStore,
                      children: this.renderContent(),
                  })
                : (0, r.jsx)(N, {
                      className: S.applicationStore,
                      location: t,
                      render: this.renderContent,
                  });
        return (0, r.jsx)(_.Z, {
            renderCustomMessage: this.renderCustomErrorMessage,
            children: n,
        });
    }
    constructor(...e) {
        super(...e),
            T(this, "stopListeningToHistory", void 0),
            T(this, "renderStoreListing", (e) => {
                let {
                        match: {
                            params: { skuId: t, applicationId: n, slug: i },
                        },
                        location: a,
                    } = e,
                    { width: s } = this.props,
                    o = (0, l.parse)(a.search);
                return (0, r.jsx)(u.Z, {
                    page: I.ZY5.STORE_LISTING,
                    root: !0,
                    children: (0, r.jsx)(v.Z, {
                        skuId: t,
                        applicationId: n,
                        slug: i,
                        location: a,
                        storeListingId: o.store_listing_id,
                        pageSize: j(s),
                    }),
                });
            }),
            T(this, "renderContent", () =>
                (0, r.jsxs)(a.rs, {
                    children: [
                        (0, r.jsx)(a.AW, {
                            path: I.Z5c.APPLICATION_STORE,
                            exact: !0,
                            render: () =>
                                (0, r.jsx)(u.Z, {
                                    page: I.ZY5.STORE_DIRECTORY_HOME,
                                    root: !0,
                                    children: (0, r.jsx)(O.Z, {}),
                                }),
                        }),
                        (0, r.jsx)(a.AW, {
                            path: I.Z5c.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
                            render: this.renderStoreListing,
                        }),
                        (0, r.jsx)(a.AW, {
                            path: I.Z5c.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
                            render: this.renderStoreListing,
                        }),
                        (0, r.jsx)(a.AW, {
                            path: I.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
                            render: this.renderStoreListing,
                        }),
                        (0, r.jsx)(a.AW, {
                            path: I.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId"),
                            render: this.renderStoreListing,
                        }),
                        (0, r.jsx)(a.l_, { to: I.Z5c.APP }),
                    ],
                }),
            );
    }
}
let x = (0, a.EN)((0, d.Z)((0, p.Z)(P)));
