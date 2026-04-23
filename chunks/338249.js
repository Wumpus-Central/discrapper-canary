s.r(e), s.d(e, { default: () => v });
var n = s(627968),
    i = s(64700),
    r = s(873263),
    o = s(17928),
    a = s(228366);
function l(t) {
    a.h.wait(() => a.h.dispatch({ type: "APPLICATION_STORE_LOCATION_CHANGE", location: t }));
}
var d = s(820284),
    A = s(490415),
    c = s(803842),
    u = s(337371),
    _ = s(652215);
let h = { ...u.zR, [_.IWg.CAROUSEL_NEXT]: c.FK, [_.IWg.CAROUSEL_PREV]: c.B0 };
var p = s(775121),
    O = s(323082),
    I = s(268218),
    E = s(670735),
    T = s(976860),
    j = s(210714),
    P = s(707606),
    C = s(289873),
    L = s(793574),
    x = s(688810),
    N = s(235986),
    S = s(427541),
    R = s(287809),
    m = s(107834),
    f = s(788868),
    b = s(50596);
let g = o.Ay.connectStores([R.default], () => ({ user: R.default.getCurrentUser() }))(
        (0, A.A)(
            (0, P.A)((t) => {
                let { isAuthenticated: e, user: s } = t,
                    { analyticsLocations: i } = (0, x.Ay)(L.A.HOME_PAGE_PREMIUM_TAB);
                return e
                    ? (0, n.jsxs)("div", {
                          className: b.ql,
                          children: [
                              null == s && (0, n.jsx)(m.A, {}),
                              (0, n.jsx)(x.f5, {
                                  value: i,
                                  children:
                                      null == s
                                          ? (0, n.jsx)(N.A, {
                                                align: N.A.Align.CENTER,
                                                justify: N.A.Justify.CENTER,
                                                children: (0, n.jsx)(C.y, { className: b.u1 }),
                                            })
                                          : (0, n.jsx)(S.A, { entrypoint: f.Mf.ApplicationStoreHome }),
                              }),
                          ],
                      })
                    : (0, n.jsx)(r.rd, { to: _.BVt.LOGIN });
            }),
        ),
    ),
    B = (0, P.A)(function () {
        return (0, n.jsxs)(r.dO, {
            children: [
                (0, n.jsx)(r.qh, { path: _.BVt.APPLICATION_STORE, exact: !0, render: () => (0, n.jsx)(g, {}) }),
                (0, n.jsx)(r.rd, { to: _.BVt.APP }),
            ],
        });
    });
var y = s(985018),
    V = s(212515);
let M = (0, I.Fe)({
    createPromise: () => Promise.all([s.e("19846"), s.e("41031")]).then(s.bind(s, 673809)),
    webpackId: 673809,
});
o.Ay.initialize();
class G extends i.PureComponent {
    stopListeningToHistory;
    componentDidMount() {
        l(this.props.location),
            (this.stopListeningToHistory = (0, T.JK)().listen((t) => {
                t.pathname.startsWith(_.BVt.APPLICATION_STORE) && l(t);
            })),
            this.props.isAuthenticated && (0, O.$o)(),
            p.A.disable(),
            p.A.setLayout(h),
            p.A.enable(),
            (0, j.d)("application_store");
    }
    componentWillUnmount() {
        null != this.stopListeningToHistory && this.stopListeningToHistory(),
            p.A.disable(),
            p.A.setLayout(u.zR),
            p.A.enable();
    }
    renderContent = () =>
        (0, n.jsxs)(r.dO, {
            children: [
                (0, n.jsx)(r.qh, {
                    path: _.BVt.APPLICATION_STORE,
                    exact: !0,
                    render: () =>
                        (0, n.jsx)(d.A, { page: _.liQ.STORE_DIRECTORY_HOME, root: !0, children: (0, n.jsx)(B, {}) }),
                }),
                (0, n.jsx)(r.rd, {
                    from: _.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
                    to: _.BVt.APPLICATION_STORE,
                }),
                (0, n.jsx)(r.rd, {
                    from: _.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
                    to: _.BVt.APPLICATION_STORE,
                }),
                (0, n.jsx)(r.rd, {
                    from: _.BVt.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
                    to: _.BVt.APPLICATION_STORE,
                }),
                (0, n.jsx)(r.rd, { from: _.BVt.APPLICATION_STORE_LISTING_SKU(":skuId"), to: _.BVt.APPLICATION_STORE }),
                (0, n.jsx)(r.rd, { to: _.BVt.APP }),
            ],
        });
    renderCustomErrorMessage() {
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)("p", { children: y.intl.string(y.t["1PZdF7"]) }),
                (0, n.jsx)("p", { children: y.intl.string(y.t.CvQlAH) }),
            ],
        });
    }
    render() {
        let { isAuthenticated: t, location: e } = this.props,
            s = t
                ? (0, n.jsx)("div", { className: V.gE, children: this.renderContent() })
                : (0, n.jsx)(M, { className: V.gE, location: e, render: this.renderContent });
        return (0, n.jsx)(E.A, { renderCustomMessage: this.renderCustomErrorMessage, children: s });
    }
}
let v = (0, A.A)(function (t) {
    let e = (0, r.zy)();
    return (0, n.jsx)(G, { ...t, location: e });
});
