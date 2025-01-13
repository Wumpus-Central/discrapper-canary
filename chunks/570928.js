var l,
    r,
    s,
    o,
    i = n(200651),
    a = n(192379),
    c = n(120356),
    u = n.n(c),
    d = n(971139);
class h extends (o = a.PureComponent) {
    render() {
        let { tag: e, children: t, hoverText: n, className: l, forceHover: r, ...s } = this.props;
        return (0, i.jsxs)('div', {
            ...s,
            className: u()(l, d.hoverRoll, {
                [d.disabled]: null == n,
                [d.forceHover]: r
            }),
            children: [
                (0, i.jsx)(e, {
                    className: d.hovered,
                    children: n
                }),
                (0, i.jsx)(e, {
                    className: d.default,
                    children: t
                })
            ]
        });
    }
}
(s = {
    tag: 'div',
    forceHover: !1
}),
    (r = 'defaultProps') in (l = h)
        ? Object.defineProperty(l, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = s),
    (t.Z = h);
