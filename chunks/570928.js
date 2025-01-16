var i,
    r,
    s,
    l,
    o = n(200651),
    a = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(971139);
class h extends (l = a.PureComponent) {
    render() {
        let { tag: e, children: t, hoverText: n, className: i, forceHover: r, ...s } = this.props;
        return (0, o.jsxs)('div', {
            ...s,
            className: d()(i, u.hoverRoll, {
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
(s = {
    tag: 'div',
    forceHover: !1
}),
    (r = 'defaultProps') in (i = h)
        ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = s),
    (t.Z = h);
