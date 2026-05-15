s.r(e), s.d(e, { default: () => b });
var r = s(627968),
    n = s(64700),
    i = s(873263),
    o = s(17928),
    A = s(228366);
function l(t) {
    A.h.wait(() => A.h.dispatch({ type: "APPLICATION_STORE_LOCATION_CHANGE", location: t }));
}
var a = s(820284),
    d = s(490415),
    I = s(803842),
    c = s(337371),
    T = s(652215);
let P = { ...c.zR, [T.IWg.CAROUSEL_NEXT]: I.FK, [T.IWg.CAROUSEL_PREV]: I.B0 };
var p = s(775121),
    u = s(753390),
    O = s(268218),
    h = s(670735),
    C = s(976860),
    _ = s(210714),
    E = s(707606),
    x = s(289873),
    j = s(793574),
    L = s(688810),
    N = s(235986),
    R = s(102581),
    S = s(287809),
    g = s(107834),
    m = s(788868),
    B = s(50596);
let y = o.Ay.connectStores([S.default], () => ({ user: S.default.getCurrentUser() }))(
        (0, d.A)(
            (0, E.A)((t) => {
                let { isAuthenticated: e, user: s } = t,
                    { analyticsLocations: n } = (0, L.Ay)(j.A.HOME_PAGE_PREMIUM_TAB);
                return e
                    ? (0, r.jsxs)("div", {
                          className: B.ql,
                          children: [
                              null == s && (0, r.jsx)(g.A, {}),
                              (0, r.jsx)(L.f5, {
                                  value: n,
                                  children:
                                      null == s
                                          ? (0, r.jsx)(N.A, {
                                                align: N.A.Align.CENTER,
                                                justify: N.A.Justify.CENTER,
                                                children: (0, r.jsx)(x.y, { className: B.u1 }),
                                            })
                                          : (0, r.jsx)(R.A, { entrypoint: m.Mf.ApplicationStoreHome }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(i.rd, { to: T.BVt.LOGIN });
            }),
        ),
    ),
    V = (0, E.A)(function () {
        return (0, r.jsxs)(i.dO, {
            children: [
                (0, r.jsx)(i.qh, { path: T.BVt.APPLICATION_STORE, exact: !0, render: () => (0, r.jsx)(y, {}) }),
                (0, r.jsx)(i.rd, { to: T.BVt.APP }),
            ],
        });
    });
var f = s(375708),
    v = s(212515);
let H = (0, O.Fe)({
    createPromise: () =>
        Promise.all([s.e("74389"), s.e("46196"), s.e("19846"), s.e("58273"), s.e("75284"), s.e("41031")]).then(
            s.bind(s, 673809),
        ),
    webpackId: 673809,
});
o.Ay.initialize();
class M extends n.PureComponent {
    stopListeningToHistory;
    componentDidMount() {
        l(this.props.location),
            (this.stopListeningToHistory = (0, C.JK)().listen((t) => {
                t.pathname.startsWith(T.BVt.APPLICATION_STORE) && l(t);
            })),
            this.props.isAuthenticated && (0, u.$o)(),
            p.A.disable(),
            p.A.setLayout(P),
            p.A.enable(),
            (0, _.d)("application_store");
    }
    componentWillUnmount() {
        null != this.stopListeningToHistory && this.stopListeningToHistory(),
            p.A.disable(),
            p.A.setLayout(c.zR),
            p.A.enable();
    }
    renderContent = () =>
        (0, r.jsxs)(i.dO, {
            children: [
                (0, r.jsx)(i.qh, {
                    path: T.BVt.APPLICATION_STORE,
                    exact: !0,
                    render: () =>
                        (0, r.jsx)(a.A, { page: T.liQ.STORE_DIRECTORY_HOME, root: !0, children: (0, r.jsx)(V, {}) }),
                }),
                (0, r.jsx)(i.rd, {
                    from: T.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
                    to: T.BVt.APPLICATION_STORE,
                }),
                (0, r.jsx)(i.rd, {
                    from: T.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
                    to: T.BVt.APPLICATION_STORE,
                }),
                (0, r.jsx)(i.rd, {
                    from: T.BVt.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
                    to: T.BVt.APPLICATION_STORE,
                }),
                (0, r.jsx)(i.rd, { from: T.BVt.APPLICATION_STORE_LISTING_SKU(":skuId"), to: T.BVt.APPLICATION_STORE }),
                (0, r.jsx)(i.rd, { to: T.BVt.APP }),
            ],
        });
    renderCustomErrorMessage() {
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("p", { children: f.intl.string(f.t["1PZdF7"]) }),
                (0, r.jsx)("p", { children: f.intl.string(f.t.CvQlAH) }),
            ],
        });
    }
    render() {
        let { isAuthenticated: t, location: e } = this.props,
            s = t
                ? (0, r.jsx)("div", { className: v.gE, children: this.renderContent() })
                : (0, r.jsx)(H, { className: v.gE, location: e, render: this.renderContent });
        return (0, r.jsx)(h.A, { renderCustomMessage: this.renderCustomErrorMessage, children: s });
    }
}
let b = (0, d.A)(function (t) {
    let e = (0, i.zy)();
    return (0, r.jsx)(M, { ...t, location: e });
});
