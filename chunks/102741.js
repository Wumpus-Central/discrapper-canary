"use strict";
n.d(t, { A: () => E });
var r,
    i,
    s = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o),
    u = n(235986),
    c = n(536554),
    d =
        (((r = d || {}).PRIMARY = "primary"),
        (r.SECONDARY = "secondary"),
        (r.WARNING = "warning"),
        (r.ERROR = "error"),
        r),
    _ = (((i = _ || {}).SMALL = "small"), (i.LARGE = "large"), (i.NONE = "none"), i);
let f = { primary: c.cG, secondary: c.QU, warning: c.SO, error: c._r },
    p = { small: c.EX, large: c.as, none: null };
class h extends a.PureComponent {
    static Colors = d;
    static Sizes = _;
    render() {
        let { icon: e, color: t, children: n, iconSize: r, className: i, iconClassName: a } = this.props;
        return (0, s.jsxs)(u.A, {
            className: l()(c.N4, f[t], i),
            align: u.A.Align.CENTER,
            children: [
                (0, s.jsx)(e, { className: l()(c.Kk, p[r], a), color: "currentColor" }),
                (0, s.jsx)("div", { children: n }),
            ],
        });
    }
}
let E = h;
