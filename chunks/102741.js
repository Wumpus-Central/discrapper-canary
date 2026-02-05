"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(235986),
    l = n(634105),
    u = (function (e) {
        return (e.PRIMARY = "primary"), (e.SECONDARY = "secondary"), (e.WARNING = "warning"), (e.ERROR = "error"), e;
    })(u || {}),
    c = (function (e) {
        return (e.SMALL = "small"), (e.LARGE = "large"), (e.NONE = "none"), e;
    })(c || {});
let d = { primary: l.cG, secondary: l.QU, warning: l.SO, error: l._r },
    _ = { small: l.EX, large: l.as, none: null };
class f extends i.PureComponent {
    static Colors = u;
    static Sizes = c;
    render() {
        let { icon: e, color: t, children: n, iconSize: i, className: a, iconClassName: u } = this.props;
        return (0, r.jsxs)(o.A, {
            className: s()(l.N4, d[t], a),
            align: o.A.Align.CENTER,
            children: [
                (0, r.jsx)(e, { className: s()(l.Kk, _[i], u), color: "currentColor" }),
                (0, r.jsx)("div", { children: n }),
            ],
        });
    }
}
let p = f;
