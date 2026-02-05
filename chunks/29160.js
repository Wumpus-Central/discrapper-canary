i.d(t, { A: () => d });
var n = i(627968),
    a = i(64700),
    l = i(503698),
    r = i.n(l),
    s = i(842642);
class o extends a.PureComponent {
    static defaultProps = { tag: "div", forceHover: !1 };
    render() {
        let { tag: e, children: t, hoverText: i, className: a, forceHover: l, ...o } = this.props;
        return (0, n.jsxs)("div", {
            ...o,
            className: r()(a, s.oM, { [s.r9]: null == i, [s.EE]: l }),
            children: [
                (0, n.jsx)(e, { className: s.yo, children: i }),
                (0, n.jsx)(e, { className: s.Ay, children: t }),
            ],
        });
    }
}
let d = o;
