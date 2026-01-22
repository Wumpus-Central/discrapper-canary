n.d(t, { A: () => m });
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(235986),
    c = n(634105);
function u(e, t, n) {
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
var d = (function (e) {
        return (e.PRIMARY = "primary"), (e.SECONDARY = "secondary"), (e.WARNING = "warning"), (e.ERROR = "error"), e;
    })(d || {}),
    f = (function (e) {
        return (e.SMALL = "small"), (e.LARGE = "large"), (e.NONE = "none"), e;
    })(f || {});
let p = {
        primary: c.cG,
        secondary: c.QU,
        warning: c.SO,
        error: c._r,
    },
    _ = {
        small: c.EX,
        large: c.as,
        none: null,
    };
class h extends (r = a.PureComponent) {
    render() {
        let { icon: e, color: t, children: n, iconSize: r, className: a, iconClassName: s } = this.props;
        return (0, i.jsxs)(l.A, {
            className: o()(c.N4, p[t], a),
            align: l.A.Align.CENTER,
            children: [
                (0, i.jsx)(e, {
                    className: o()(c.Kk, _[r], s),
                    color: "currentColor",
                }),
                (0, i.jsx)("div", { children: n }),
            ],
        });
    }
}
u(h, "Colors", d), u(h, "Sizes", f);
let m = h;
