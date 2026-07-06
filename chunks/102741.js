n.d(l, { A: () => E });
var r,
    t,
    s = n(627968),
    i = n(64700),
    a = n(503698),
    d = n.n(a),
    o = n(235986),
    c = n(536554),
    u =
        (((r = u || {}).PRIMARY = "primary"),
        (r.SECONDARY = "secondary"),
        (r.WARNING = "warning"),
        (r.ERROR = "error"),
        r),
    m = (((t = m || {}).SMALL = "small"), (t.LARGE = "large"), (t.NONE = "none"), t);
let p = { primary: c.cG, secondary: c.QU, warning: c.SO, error: c._r },
    N = { small: c.EX, large: c.as, none: null };
class A extends i.PureComponent {
    static Colors = u;
    static Sizes = m;
    render() {
        let { icon: e, color: l, children: n, iconSize: r, className: t, iconClassName: i } = this.props;
        return (0, s.jsxs)(o.A, {
            className: d()(c.N4, p[l], t),
            align: o.A.Align.CENTER,
            children: [
                (0, s.jsx)(e, { className: d()(c.Kk, N[r], i), color: "currentColor" }),
                (0, s.jsx)("div", { children: n }),
            ],
        });
    }
}
let E = A;
