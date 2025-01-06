var i,
    r,
    l,
    u,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    h = n.n(o),
    d = n(971139);
class c extends (u = s.PureComponent) {
    render() {
        let { tag: e, children: t, hoverText: n, className: i, forceHover: r, ...l } = this.props;
        return (0, a.jsxs)('div', {
            ...l,
            className: h()(i, d.hoverRoll, {
                [d.disabled]: null == n,
                [d.forceHover]: r
            }),
            children: [
                (0, a.jsx)(e, {
                    className: d.hovered,
                    children: n
                }),
                (0, a.jsx)(e, {
                    className: d.default,
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
    (r = 'defaultProps') in (i = c)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = c);
