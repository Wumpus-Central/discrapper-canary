t.d(i, { Z: () => v });
var l,
    n,
    a,
    s = t(200651),
    r = t(192379),
    d = t(120356),
    o = t.n(d),
    u = t(971139);
class c extends (a = r.PureComponent) {
    render() {
        let { tag: e, children: i, hoverText: t, className: l, forceHover: n, ...a } = this.props;
        return (0, s.jsxs)('div', {
            ...a,
            className: o()(l, u.hoverRoll, {
                [u.disabled]: null == t,
                [u.forceHover]: n
            }),
            children: [
                (0, s.jsx)(e, {
                    className: u.hovered,
                    children: t
                }),
                (0, s.jsx)(e, {
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
let v = c;
