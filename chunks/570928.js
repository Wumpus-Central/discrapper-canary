var r,
    i,
    l,
    a,
    u = n(200651),
    o = n(192379),
    s = n(120356),
    c = n.n(s),
    d = n(971139);
class f extends (a = o.PureComponent) {
    render() {
        let { tag: e, children: t, hoverText: n, className: r, forceHover: i, ...l } = this.props;
        return (0, u.jsxs)('div', {
            ...l,
            className: c()(r, d.hoverRoll, {
                [d.disabled]: null == n,
                [d.forceHover]: i
            }),
            children: [
                (0, u.jsx)(e, {
                    className: d.hovered,
                    children: n
                }),
                (0, u.jsx)(e, {
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
    (i = 'defaultProps') in (r = f)
        ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = l),
    (t.Z = f);
