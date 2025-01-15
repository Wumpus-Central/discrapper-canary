var i,
    r,
    l,
    a,
    s = n(200651),
    o = n(192379),
    u = n(120356),
    d = n.n(u),
    c = n(971139);
class h extends (a = o.PureComponent) {
    render() {
        let { tag: e, children: t, hoverText: n, className: i, forceHover: r, ...l } = this.props;
        return (0, s.jsxs)('div', {
            ...l,
            className: d()(i, c.hoverRoll, {
                [c.disabled]: null == n,
                [c.forceHover]: r
            }),
            children: [
                (0, s.jsx)(e, {
                    className: c.hovered,
                    children: n
                }),
                (0, s.jsx)(e, {
                    className: c.default,
                    children: t
                })
            ]
        });
    }
}
(l = {
    tag: 'div',
    forceHover: !1
}),
    (r = 'defaultProps') in (i = h)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = h);
