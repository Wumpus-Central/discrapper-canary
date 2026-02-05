n.d(t, { A: () => C });
var i,
    l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(397927),
    d = n(360560),
    c = n(985018),
    u = n(609946),
    m =
        (((i = m || {})[(i.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (i[(i.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (i[(i.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (i[(i.LISTING = 4)] = "LISTING"),
        (i[(i.EMBED = 5)] = "EMBED"),
        i);
let _ = (e) => {
        let { className: t } = e;
        return (0, l.jsxs)("div", {
            className: s()(u.nM, t),
            children: [
                (0, l.jsx)(o._z, { size: "md", color: "currentColor", className: u.Kk }),
                c.intl.string(c.t["7eicAO"]),
            ],
        });
    },
    h = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsxs)("div", {
            className: s()(u.nM, n),
            children: [(0, l.jsx)(o.tvc, { size: "md", color: "currentColor", className: u.Kk }), (0, d.A)(t)],
        });
    },
    p = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsx)("div", { className: s()(u.EQ, n), children: t.getDisplaySalePercentage() });
    },
    g = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsx)("div", { className: s()(u.I8, n), children: (0, d.A)(t, !1) });
    },
    A = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsx)("div", { className: n, children: (0, d.A)(t) });
    },
    f = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsxs)("div", {
            className: s()(u.nM, n),
            children: [(0, l.jsx)(p, { sku: t }), (0, l.jsx)(g, { sku: t }), (0, l.jsx)(A, { sku: t })],
        });
    },
    x = (e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", { className: t, children: c.intl.string(c.t.QQsaCc) });
    };
class E extends a.PureComponent {
    static Types = m;
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
                return (0, l.jsx)(x, { className: s()(t, n) });
            case 1:
                return (0, l.jsx)(_, { className: s()(t, n) });
            case 3:
                return (0, l.jsx)(h, { sku: i, className: s()(t, n) });
            case 2:
                return (0, l.jsx)(f, { sku: i, className: s()(t, n) });
            default:
                return (0, l.jsx)(A, { className: s()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, l.jsx)(x, { className: t });
            case 3:
                return (0, l.jsx)(h, { sku: n, className: s()(u.OB, t) });
            case 2:
                return (0, l.jsx)(f, { sku: n, className: s()(u.dk, t) });
            default:
                return (0, l.jsx)(A, { className: s()(u.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, l.jsx)(x, {});
                break;
            case 2:
                t = (0, l.jsxs)(a.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: u.nM,
                            children: [(0, l.jsx)(A, { sku: i }), (0, l.jsx)(p, { sku: i })],
                        }),
                        (0, l.jsx)(g, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, l.jsx)(A, { sku: i });
        }
        return (0, l.jsx)("div", { className: s()(u.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, u.Pl);
            case 3:
                return this.renderGeneric(e, u.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, u.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
let C = E;
