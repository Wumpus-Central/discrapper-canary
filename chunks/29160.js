n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(80477);
class o extends l.PureComponent {
    static defaultProps = { tag: "div", forceHover: !1 };
    render() {
        let { tag: e, children: t, hoverText: n, className: l, forceHover: a, ...o } = this.props;
        return (0, i.jsxs)("div", {
            ...o,
            className: s()(l, r.oM, { [r.r9]: null == n, [r.EE]: a }),
            children: [
                (0, i.jsx)(e, { className: r.yo, children: n }),
                (0, i.jsx)(e, { className: r.Ay, children: t }),
            ],
        });
    }
}
let c = o;
