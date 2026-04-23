n.d(t, { A: () => I });
var i,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(657044),
    d = n(403581),
    c = n(360560),
    u = n(985018),
    m = n(257727),
    _ =
        (((i = _ || {})[(i.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (i[(i.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (i[(i.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (i[(i.LISTING = 4)] = "LISTING"),
        (i[(i.EMBED = 5)] = "EMBED"),
        i);
let h = (e) => {
        let { className: t } = e;
        return (0, l.jsxs)("div", {
            className: r()(m.nM, t),
            children: [
                (0, l.jsx)(o._, { size: "md", color: "currentColor", className: m.Kk }),
                u.intl.string(u.t["7eicAO"]),
            ],
        });
    },
    p = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsxs)("div", {
            className: r()(m.nM, n),
            children: [(0, l.jsx)(d.t, { size: "md", color: "currentColor", className: m.Kk }), (0, c.A)(t)],
        });
    },
    g = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsx)("div", { className: r()(m.EQ, n), children: t.getDisplaySalePercentage() });
    },
    A = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsx)("div", { className: r()(m.I8, n), children: (0, c.A)(t, !1) });
    },
    f = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsx)("div", { className: n, children: (0, c.A)(t) });
    },
    x = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsxs)("div", {
            className: r()(m.nM, n),
            children: [(0, l.jsx)(g, { sku: t }), (0, l.jsx)(A, { sku: t }), (0, l.jsx)(f, { sku: t })],
        });
    },
    C = (e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", { className: t, children: u.intl.string(u.t.QQsaCc) });
    };
class E extends a.PureComponent {
    static Types = _;
    getState() {
        let { inLibrary: e, sku: t, hasEntitlementBranch: n } = this.props;
        if (n) return 5;
        if (e) return 1;
        if (!t.available) return 4;
        if (t.premium) return 3;
        if (t.isOnSale) return 2;
        else if (null != t.getPrice()) return 4;
        return null;
    }
    renderGeneric(e, t) {
        let { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                return (0, l.jsx)(C, { className: r()(t, n) });
            case 1:
                return (0, l.jsx)(h, { className: r()(t, n) });
            case 3:
                return (0, l.jsx)(p, { sku: i, className: r()(t, n) });
            case 2:
                return (0, l.jsx)(x, { sku: i, className: r()(t, n) });
            default:
                return (0, l.jsx)(f, { className: r()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, l.jsx)(C, { className: t });
            case 3:
                return (0, l.jsx)(p, { sku: n, className: r()(m.OB, t) });
            case 2:
                return (0, l.jsx)(x, { sku: n, className: r()(m.dk, t) });
            default:
                return (0, l.jsx)(f, { className: r()(m.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, l.jsx)(C, {});
                break;
            case 2:
                t = (0, l.jsxs)(a.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: m.nM,
                            children: [(0, l.jsx)(f, { sku: i }), (0, l.jsx)(g, { sku: i })],
                        }),
                        (0, l.jsx)(A, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, l.jsx)(f, { sku: i });
        }
        return (0, l.jsx)("div", { className: r()(m.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, m.Pl);
            case 3:
                return this.renderGeneric(e, m.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, m.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
let I = E;
