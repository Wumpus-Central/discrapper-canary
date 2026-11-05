var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(433664);
class o extends r.PureComponent {
    static defaultProps = { tag: "div", forceHover: !1 };
    render() {
        let { tag: e, children: t, hoverText: n, className: r, forceHover: l, ...o } = this.props;
        return (0, i.jsxs)("div", {
            ...o,
            className: s()(r, a.oM, { [a.r9]: null == n, [a.EE]: l }),
            children: [
                (0, i.jsx)(e, { className: a.yo, children: n }),
                (0, i.jsx)(e, { className: a.Ay, children: t }),
            ],
        });
    }
}
n.d(t, {}, { A: o });
