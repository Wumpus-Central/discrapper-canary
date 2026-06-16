"use strict";
n.d(t, { A: () => E });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o),
    u = n(235986),
    c = n(536554),
    d =
        (((i = d || {}).PRIMARY = "primary"),
        (i.SECONDARY = "secondary"),
        (i.WARNING = "warning"),
        (i.ERROR = "error"),
        i),
    _ = (((r = _ || {}).SMALL = "small"), (r.LARGE = "large"), (r.NONE = "none"), r);
let h = { primary: c.cG, secondary: c.QU, warning: c.SO, error: c._r },
    f = { small: c.EX, large: c.as, none: null };
class p extends a.PureComponent {
    static Colors = d;
    static Sizes = _;
    render() {
        let { icon: e, color: t, children: n, iconSize: i, className: r, iconClassName: a } = this.props;
        return (0, s.jsxs)(u.A, {
            className: l()(c.N4, h[t], r),
            align: u.A.Align.CENTER,
            children: [
                (0, s.jsx)(e, { className: l()(c.Kk, f[i], a), color: "currentColor" }),
                (0, s.jsx)("div", { children: n }),
            ],
        });
    }
}
let E = p;
