s.r(e), s.d(e, { default: () => H });
var n = s(627968),
    r = s(64700),
    i = s(873263),
    o = s(17928),
    a = s(228366);
function l(t) {
    a.h.wait(() => a.h.dispatch({ type: "APPLICATION_STORE_LOCATION_CHANGE", location: t }));
}
var d = s(820284),
    A = s(803842),
    I = s(337371),
    c = s(652215);
let u = { ...I.zR, [c.IWg.CAROUSEL_NEXT]: A.FK, [c.IWg.CAROUSEL_PREV]: A.B0 };
var T = s(775121),
    h = s(753390),
    P = s(268218),
    p = s(670735),
    O = s(976860),
    C = s(210714),
    _ = s(495544),
    E = s(707606),
    x = s(289873),
    j = s(793574),
    L = s(688810),
    N = s(235986),
    R = s(741046),
    S = s(287809),
    g = s(107834),
    m = s(788868),
    f = s(50596);
let B = o.Ay.connectStores([S.default], () => ({ user: S.default.getCurrentUser() }))(
        (0, E.A)((t) => {
            let { user: e } = t,
                s = (0, o.bG)([_.default], () => _.default.isAuthenticated()),
                { analyticsLocations: r } = (0, L.Ay)(j.A.HOME_PAGE_PREMIUM_TAB);
            return s
                ? (0, n.jsxs)("div", {
                      className: f.ql,
                      children: [
                          null == e && (0, n.jsx)(g.A, {}),
                          (0, n.jsx)(L.f5, {
                              value: r,
                              children:
                                  null == e
                                      ? (0, n.jsx)(N.A, {
                                            align: N.A.Align.CENTER,
                                            justify: N.A.Justify.CENTER,
                                            children: (0, n.jsx)(x.y, { className: f.u1 }),
                                        })
                                      : (0, n.jsx)(R.A, { entrypoint: m.Mf.ApplicationStoreHome }),
                          }),
                      ],
                  })
                : (0, n.jsx)(i.rd, { to: c.BVt.LOGIN });
        }),
    ),
    y = (0, E.A)(function () {
        return (0, n.jsxs)(i.dO, {
            children: [
                (0, n.jsx)(i.qh, { path: c.BVt.APPLICATION_STORE, exact: !0, render: () => (0, n.jsx)(B, {}) }),
                (0, n.jsx)(i.rd, { to: c.BVt.APP }),
            ],
        });
    });
var V = s(375708),
    b = s(212515);
let v = (0, P.Fe)({
    createPromise: () =>
        Promise.all([
            s.e("22805"),
            s.e("56843"),
            s.e("74093"),
            s.e("46196"),
            s.e("19846"),
            s.e("58273"),
            s.e("75284"),
            s.e("41031"),
        ]).then(s.bind(s, 673809)),
    webpackId: 673809,
});
o.Ay.initialize();
class G extends r.PureComponent {
    stopListeningToHistory;
    componentDidMount() {
        l(this.props.location),
            (this.stopListeningToHistory = (0, O.JK)().listen((t) => {
                t.pathname.startsWith(c.BVt.APPLICATION_STORE) && l(t);
            })),
            this.props.isAuthenticated && (0, h.$o)(),
            T.A.disable(),
            T.A.setLayout(u),
            T.A.enable(),
            (0, C.d)("application_store");
    }
    componentWillUnmount() {
        null != this.stopListeningToHistory && this.stopListeningToHistory(),
            T.A.disable(),
            T.A.setLayout(I.zR),
            T.A.enable();
    }
    renderContent = () =>
        (0, n.jsxs)(i.dO, {
            children: [
                (0, n.jsx)(i.qh, {
                    path: c.BVt.APPLICATION_STORE,
                    exact: !0,
                    render: () =>
                        (0, n.jsx)(d.A, { page: c.liQ.STORE_DIRECTORY_HOME, root: !0, children: (0, n.jsx)(y, {}) }),
                }),
                (0, n.jsx)(i.rd, {
                    from: c.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
                    to: c.BVt.APPLICATION_STORE,
                }),
                (0, n.jsx)(i.rd, {
                    from: c.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
                    to: c.BVt.APPLICATION_STORE,
                }),
                (0, n.jsx)(i.rd, {
                    from: c.BVt.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
                    to: c.BVt.APPLICATION_STORE,
                }),
                (0, n.jsx)(i.rd, { from: c.BVt.APPLICATION_STORE_LISTING_SKU(":skuId"), to: c.BVt.APPLICATION_STORE }),
                (0, n.jsx)(i.rd, { to: c.BVt.APP }),
            ],
        });
    renderCustomErrorMessage() {
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)("p", { children: V.intl.string(V.t["1PZdF7"]) }),
                (0, n.jsx)("p", { children: V.intl.string(V.t.CvQlAH) }),
            ],
        });
    }
    render() {
        let { isAuthenticated: t, location: e } = this.props,
            s = t
                ? (0, n.jsx)("div", { className: b.gE, children: this.renderContent() })
                : (0, n.jsx)(v, { className: b.gE, location: e, render: this.renderContent });
        return (0, n.jsx)(p.A, { renderCustomMessage: this.renderCustomErrorMessage, children: s });
    }
}
let H = function (t) {
    let e = (0, i.zy)(),
        s = (0, o.bG)([_.default], () => _.default.isAuthenticated());
    return (0, n.jsx)(G, { ...t, location: e, isAuthenticated: s });
};
