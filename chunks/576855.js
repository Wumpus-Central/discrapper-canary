n.d(t, { Z: () => f });
var r,
    l,
    a = n(200651),
    i = n(192379),
    o = n(120356),
    u = n.n(o),
    s = n(481060),
    c = n(388032),
    p = n(108921);
let m = {
    BLOCK: p.block,
    INLINE: p.inline
};
class d extends (l = i.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = m.BLOCK, style: l } = this.props;
        return (0, a.jsxs)('div', {
            className: u()(t, r),
            style: l,
            children: [
                (0, a.jsxs)(s.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: p.pro,
                    children: [c.intl.string(c.t['8tvIiI']), ':']
                }),
                (0, a.jsx)(s.Text, {
                    className: u()(p.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(r = 'Types') in d
    ? Object.defineProperty(d, r, {
          value: m,
          enumerable: !0,
          configurable: !0,
          writable: !0
      })
    : (d[r] = m);
let f = d;
