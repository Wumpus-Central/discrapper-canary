n.d(t, { Z: () => _ });
var i,
    l,
    a = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(481060),
    d = n(388032),
    u = n(323822);
let m = {
    BLOCK: u.block,
    INLINE: u.inline
};
class h extends (l = r.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: i = m.BLOCK, style: l } = this.props;
        return (0, a.jsxs)('div', {
            className: o()(t, i),
            style: l,
            children: [
                (0, a.jsxs)(c.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: u.pro,
                    children: [d.intl.string(d.t['8tvIiI']), ':']
                }),
                (0, a.jsx)(c.Text, {
                    className: o()(u.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(i = 'Types') in h
    ? Object.defineProperty(h, i, {
          value: m,
          enumerable: !0,
          configurable: !0,
          writable: !0
      })
    : (h[i] = m);
let _ = h;
