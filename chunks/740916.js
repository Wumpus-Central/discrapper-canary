n.d(t, {
    A: () => O,
}),
    n(65821);
var r,
    i,
    l,
    a = n(627968),
    s = n(64700),
    o = n(503698),
    c = n.n(o),
    u = n(397927),
    d = n(360560),
    p = n(985018),
    m = n(609946),
    f =
        (((i = f || {})[(i.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (i[(i.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (i[(i.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (i[(i.LISTING = 4)] = "LISTING"),
        (i[(i.EMBED = 5)] = "EMBED"),
        i);
let g = (e) => {
        let { className: t } = e;
        return (0, a.jsxs)("div", {
            className: c()(m.nM, t),
            children: [
                (0, a.jsx)(u._z, {
                    size: "md",
                    color: "currentColor",
                    className: m.Kk,
                }),
                p.intl.string(p.t["7eicAO"]),
            ],
        });
    },
    h = (e) => {
        let { sku: t, className: n } = e;
        return (0, a.jsxs)("div", {
            className: c()(m.nM, n),
            children: [
                (0, a.jsx)(u.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: m.Kk,
                }),
                (0, d.A)(t),
            ],
        });
    },
    _ = (e) => {
        let { sku: t, className: n } = e;
        return (0, a.jsx)("div", {
            className: c()(m.EQ, n),
            children: t.getDisplaySalePercentage(),
        });
    },
    b = (e) => {
        let { sku: t, className: n } = e;
        return (0, a.jsx)("div", {
            className: c()(m.I8, n),
            children: (0, d.A)(t, !1),
        });
    },
    A = (e) => {
        let { sku: t, className: n } = e;
        return (0, a.jsx)("div", {
            className: n,
            children: (0, d.A)(t),
        });
    },
    y = (e) => {
        let { sku: t, className: n } = e;
        return (0, a.jsxs)("div", {
            className: c()(m.nM, n),
            children: [
                (0, a.jsx)(_, {
                    sku: t,
                }),
                (0, a.jsx)(b, {
                    sku: t,
                }),
                (0, a.jsx)(A, {
                    sku: t,
                }),
            ],
        });
    },
    v = (e) => {
        let { className: t } = e;
        return (0, a.jsx)("div", {
            className: t,
            children: p.intl.string(p.t.QQsaCc),
        });
    };
class x extends (r = s.PureComponent) {
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
        let { className: n, sku: r } = this.props;
        switch (e) {
            case 5:
                return (0, a.jsx)(v, {
                    className: c()(t, n),
                });
            case 1:
                return (0, a.jsx)(g, {
                    className: c()(t, n),
                });
            case 3:
                return (0, a.jsx)(h, {
                    sku: r,
                    className: c()(t, n),
                });
            case 2:
                return (0, a.jsx)(y, {
                    sku: r,
                    className: c()(t, n),
                });
            default:
                return (0, a.jsx)(A, {
                    className: c()(t, n),
                    sku: r,
                });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, a.jsx)(v, {
                    className: t,
                });
            case 3:
                return (0, a.jsx)(h, {
                    sku: n,
                    className: c()(m.OB, t),
                });
            case 2:
                return (0, a.jsx)(y, {
                    sku: n,
                    className: c()(m.dk, t),
                });
            default:
                return (0, a.jsx)(A, {
                    className: c()(m.dk, t),
                    sku: n,
                });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: r } = this.props;
        switch (e) {
            case 5:
                t = (0, a.jsx)(v, {});
                break;
            case 2:
                t = (0, a.jsxs)(s.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: m.nM,
                            children: [
                                (0, a.jsx)(A, {
                                    sku: r,
                                }),
                                (0, a.jsx)(_, {
                                    sku: r,
                                }),
                            ],
                        }),
                        (0, a.jsx)(b, {
                            sku: r,
                        }),
                    ],
                });
                break;
            default:
                t = (0, a.jsx)(A, {
                    sku: r,
                });
        }
        return (0, a.jsx)("div", {
            className: c()(m.IH, n),
            children: t,
        });
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
(l = "Types") in x
    ? Object.defineProperty(x, l, {
          value: f,
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (x[l] = f);
let O = x;
