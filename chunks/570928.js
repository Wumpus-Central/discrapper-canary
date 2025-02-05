t.d(i, { Z: () => p });
var l,
    n,
    a,
    r = t(200651),
    s = t(192379),
    d = t(120356),
    o = t.n(d),
    u = t(971139);
class c extends (a = s.PureComponent) {
    render() {
        let { tag: e, children: i, hoverText: t, className: l, forceHover: n, ...a } = this.props;
        return (0, r.jsxs)('div', {
            ...a,
            className: o()(l, u.hoverRoll, {
                [u.disabled]: null == t,
                [u.forceHover]: n
            }),
            children: [
                (0, r.jsx)(e, {
                    className: u.hovered,
                    children: t
                }),
                (0, r.jsx)(e, {
                    className: u.default,
                    children: i
                })
            ]
        });
    }
}
(n = {
    tag: 'div',
    forceHover: !1
}),
    (l = 'defaultProps') in c
        ? Object.defineProperty(c, l, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[l] = n);
let p = c;
