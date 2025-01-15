var r,
    a,
    l,
    i,
    o = n(200651),
    s = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(764660);
class m extends (i = s.PureComponent) {
    render() {
        let { tag: e, children: t, hoverText: n, className: r, forceHover: a, ...l } = this.props;
        return (0, o.jsxs)('div', {
            ...l,
            className: d()(r, u.hoverRoll, {
                [u.disabled]: null == n,
                [u.forceHover]: a
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
    (a = 'defaultProps') in (r = m)
        ? Object.defineProperty(r, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[a] = l),
    (t.Z = m);
