n.d(t, { Z: () => g });
var l,
    i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    u = n(481060),
    c = n(388032),
    d = n(593878);
let m = {
    BLOCK: d.block,
    INLINE: d.inline
};
class h extends (i = a.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: l = m.BLOCK, style: i } = this.props;
        return (0, r.jsxs)('div', {
            className: o()(t, l),
            style: i,
            children: [
                (0, r.jsxs)(u.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: d.pro,
                    children: [c.intl.string(c.t['8tvIiI']), ':']
                }),
                (0, r.jsx)(u.Text, {
                    className: o()(d.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(l = 'Types') in h
    ? Object.defineProperty(h, l, {
          value: m,
          enumerable: !0,
          configurable: !0,
          writable: !0
      })
    : (h[l] = m);
let g = h;
