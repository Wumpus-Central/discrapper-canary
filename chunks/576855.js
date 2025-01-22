var i,
    r,
    l,
    a,
    o = n(200651),
    s = n(192379),
    c = n(120356),
    u = n.n(c),
    d = n(481060),
    m = n(388032),
    h = n(323822);
let f = {
    BLOCK: h.block,
    INLINE: h.inline
};
class p extends (a = s.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: i = f.BLOCK, style: r } = this.props;
        return (0, o.jsxs)('div', {
            className: u()(t, i),
            style: r,
            children: [
                (0, o.jsxs)(d.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: h.pro,
                    children: [m.intl.string(m.t['8tvIiI']), ':']
                }),
                (0, o.jsx)(d.Text, {
                    className: u()(h.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(i = p),
    (r = 'Types'),
    (l = f),
    r in i
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = p);
