n.d(t, { Z: () => h });
var l,
    i,
    r,
    a = n(200651),
    o = n(192379),
    s = n(120356),
    d = n.n(s),
    u = n(971139);
class c extends (r = o.PureComponent) {
    render() {
        let { tag: e, children: t, hoverText: n, className: l, forceHover: i, ...r } = this.props;
        return (0, a.jsxs)('div', {
            ...r,
            className: d()(l, u.hoverRoll, {
                [u.disabled]: null == n,
                [u.forceHover]: i
            }),
            children: [
                (0, a.jsx)(e, {
                    className: u.hovered,
                    children: n
                }),
                (0, a.jsx)(e, {
                    className: u.default,
                    children: t
                })
            ]
        });
    }
}
(i = {
    tag: 'div',
    forceHover: !1
}),
    (l = 'defaultProps') in c
        ? Object.defineProperty(c, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[l] = i);
let h = c;
