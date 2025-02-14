i.d(l, { Z: () => p });
var t,
    n,
    r,
    d = i(200651),
    a = i(192379),
    s = i(120356),
    o = i.n(s),
    u = i(790081);
class c extends (r = a.PureComponent) {
    render() {
        let { tag: e, children: l, hoverText: i, className: t, forceHover: n, ...r } = this.props;
        return (0, d.jsxs)('div', {
            ...r,
            className: o()(t, u.hoverRoll, {
                [u.disabled]: null == i,
                [u.forceHover]: n
            }),
            children: [
                (0, d.jsx)(e, {
                    className: u.hovered,
                    children: i
                }),
                (0, d.jsx)(e, {
                    className: u.default,
                    children: l
                })
            ]
        });
    }
}
(n = {
    tag: 'div',
    forceHover: !1
}),
    (t = 'defaultProps') in c
        ? Object.defineProperty(c, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[t] = n);
let p = c;
