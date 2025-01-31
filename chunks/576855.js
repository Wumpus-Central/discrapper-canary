n.d(t, { Z: () => p });
var r,
    i,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    u = n.n(o),
    s = n(481060),
    c = n(388032),
    d = n(323822);
let f = {
    BLOCK: d.block,
    INLINE: d.inline
};
class _ extends (i = a.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = f.BLOCK, style: i } = this.props;
        return (0, l.jsxs)('div', {
            className: u()(t, r),
            style: i,
            children: [
                (0, l.jsxs)(s.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: d.pro,
                    children: [c.intl.string(c.t['8tvIiI']), ':']
                }),
                (0, l.jsx)(s.Text, {
                    className: u()(d.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(r = 'Types') in _
    ? Object.defineProperty(_, r, {
          value: f,
          enumerable: !0,
          configurable: !0,
          writable: !0
      })
    : (_[r] = f);
let p = _;
