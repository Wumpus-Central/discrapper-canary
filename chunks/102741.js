n.d(t, { A: () => f });
var l,
    i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    o = n.n(s),
    u = n(235986),
    c = n(164503),
    d =
        (((l = d || {}).PRIMARY = "primary"),
        (l.SECONDARY = "secondary"),
        (l.WARNING = "warning"),
        (l.ERROR = "error"),
        l),
    m = (((i = m || {}).SMALL = "small"), (i.LARGE = "large"), (i.NONE = "none"), i);
let p = { primary: c.cG, secondary: c.QU, warning: c.SO, error: c._r },
    C = { small: c.EX, large: c.as, none: null };
class h extends a.PureComponent {
    static Colors = d;
    static Sizes = m;
    render() {
        let { icon: e, color: t, children: n, iconSize: l, className: i, iconClassName: a } = this.props;
        return (0, r.jsxs)(u.A, {
            className: o()(c.N4, p[t], i),
            align: u.A.Align.CENTER,
            children: [
                (0, r.jsx)(e, { className: o()(c.Kk, C[l], a), color: "currentColor" }),
                (0, r.jsx)("div", { children: n }),
            ],
        });
    }
}
let f = h;
