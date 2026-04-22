n.d(l, { A: () => h });
var r,
    s,
    t = n(627968),
    i = n(64700),
    a = n(503698),
    d = n.n(a),
    c = n(235986),
    o = n(536554),
    u =
        (((r = u || {}).PRIMARY = "primary"),
        (r.SECONDARY = "secondary"),
        (r.WARNING = "warning"),
        (r.ERROR = "error"),
        r),
    p = (((s = p || {}).SMALL = "small"), (s.LARGE = "large"), (s.NONE = "none"), s);
let m = { primary: o.cG, secondary: o.QU, warning: o.SO, error: o._r },
    N = { small: o.EX, large: o.as, none: null };
class A extends i.PureComponent {
    static Colors = u;
    static Sizes = p;
    render() {
        let { icon: e, color: l, children: n, iconSize: r, className: s, iconClassName: i } = this.props;
        return (0, t.jsxs)(c.A, {
            className: d()(o.N4, m[l], s),
            align: c.A.Align.CENTER,
            children: [
                (0, t.jsx)(e, { className: d()(o.Kk, N[r], i), color: "currentColor" }),
                (0, t.jsx)("div", { children: n }),
            ],
        });
    }
}
let h = A;
