n.d(t, { Z: () => d });
var a,
    i,
    r,
    o = n(200651),
    l = n(192379),
    s = n(120356),
    c = n.n(s),
    _ = n(964109);
class u extends (r = l.PureComponent) {
    render() {
        let { tag: e, children: t, hoverText: n, className: a, forceHover: i, ...r } = this.props;
        return (0, o.jsxs)('div', {
            ...r,
            className: c()(a, _.hoverRoll, {
                [_.disabled]: null == n,
                [_.forceHover]: i
            }),
            children: [
                (0, o.jsx)(e, {
                    className: _.hovered,
                    children: n
                }),
                (0, o.jsx)(e, {
                    className: _.default,
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
    (a = 'defaultProps') in u
        ? Object.defineProperty(u, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[a] = i);
let d = u;
