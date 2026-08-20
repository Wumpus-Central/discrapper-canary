n.d(t, { A: () => u });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(433664);
class o extends l.PureComponent {
    static defaultProps = { tag: "div", forceHover: !1 };
    render() {
        let { tag: e, children: t, hoverText: n, className: l, forceHover: s, ...o } = this.props;
        return (0, i.jsxs)("div", {
            ...o,
            className: r()(l, a.oM, { [a.r9]: null == n, [a.EE]: s }),
            children: [
                (0, i.jsx)(e, { className: a.yo, children: n }),
                (0, i.jsx)(e, { className: a.Ay, children: t }),
            ],
        });
    }
}
let u = o;
