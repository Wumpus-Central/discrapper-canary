var a,
    r,
    l,
    i,
    o = n(200651),
    s = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(971139);
class h extends (i = s.PureComponent) {
    render() {
        let { tag: e, children: t, hoverText: n, className: a, forceHover: r, ...l } = this.props;
        return (0, o.jsxs)('div', {
            ...l,
            className: d()(a, u.hoverRoll, {
                [u.disabled]: null == n,
                [u.forceHover]: r
            }),
            children: [
                (0, o.jsx)(e, {
                    className: u.hovered,
                    children: n
                }),
                (0, o.jsx)(e, {
                    className: u.default,
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
    (r = 'defaultProps') in (a = h)
        ? Object.defineProperty(a, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[r] = l),
    (t.Z = h);
