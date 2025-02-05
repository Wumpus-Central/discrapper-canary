n.d(t, { Z: () => h });
var l,
    i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(481060),
    u = n(388032),
    d = n(323822);
let m = {
    BLOCK: d.block,
    INLINE: d.inline
};
class p extends (i = a.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: l = m.BLOCK, style: i } = this.props;
        return (0, r.jsxs)('div', {
            className: o()(t, l),
            style: i,
            children: [
                (0, r.jsxs)(c.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: d.pro,
                    children: [u.intl.string(u.t['8tvIiI']), ':']
                }),
                (0, r.jsx)(c.Text, {
                    className: o()(d.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(l = 'Types') in p
    ? Object.defineProperty(p, l, {
          value: m,
          enumerable: !0,
          configurable: !0,
          writable: !0
      })
    : (p[l] = m);
let h = p;
