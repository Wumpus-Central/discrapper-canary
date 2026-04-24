s.d(t, { A: () => A });
var i,
    n,
    a = s(627968),
    l = s(64700),
    r = s(503698),
    o = s.n(r),
    p = s(235986),
    d = s(536554),
    c =
        (((i = c || {}).PRIMARY = "primary"),
        (i.SECONDARY = "secondary"),
        (i.WARNING = "warning"),
        (i.ERROR = "error"),
        i),
    h = (((n = h || {}).SMALL = "small"), (n.LARGE = "large"), (n.NONE = "none"), n);
let u = { primary: d.cG, secondary: d.QU, warning: d.SO, error: d._r },
    m = { small: d.EX, large: d.as, none: null };
class g extends l.PureComponent {
    static Colors = c;
    static Sizes = h;
    render() {
        let { icon: e, color: t, children: s, iconSize: i, className: n, iconClassName: l } = this.props;
        return (0, a.jsxs)(p.A, {
            className: o()(d.N4, u[t], n),
            align: p.A.Align.CENTER,
            children: [
                (0, a.jsx)(e, { className: o()(d.Kk, m[i], l), color: "currentColor" }),
                (0, a.jsx)("div", { children: s }),
            ],
        });
    }
}
let A = g;
