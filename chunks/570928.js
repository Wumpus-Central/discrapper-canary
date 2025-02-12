n.d(t, { Z: () => E });
var l,
    i,
    a,
    r = n(200651),
    s = n(192379),
    o = n(120356),
    u = n.n(o),
    d = n(964109);
class c extends (a = s.PureComponent) {
    render() {
        let { tag: e, children: t, hoverText: n, className: l, forceHover: i, ...a } = this.props;
        return (0, r.jsxs)('div', {
            ...a,
            className: u()(l, d.hoverRoll, {
                [d.disabled]: null == n,
                [d.forceHover]: i
            }),
            children: [
                (0, r.jsx)(e, {
                    className: d.hovered,
                    children: n
                }),
                (0, r.jsx)(e, {
                    className: d.default,
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
let E = c;
