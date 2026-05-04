"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(80477);
class l extends r.PureComponent {
    static defaultProps = { tag: "div", forceHover: !1 };
    render() {
        let { tag: e, children: t, hoverText: n, className: r, forceHover: s, ...l } = this.props;
        return (0, i.jsxs)("div", {
            ...l,
            className: a()(r, o.oM, { [o.r9]: null == n, [o.EE]: s }),
            children: [
                (0, i.jsx)(e, { className: o.yo, children: n }),
                (0, i.jsx)(e, { className: o.Ay, children: t }),
            ],
        });
    }
}
let u = l;
