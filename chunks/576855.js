var r,
    i,
    u,
    l,
    o = n(200651),
    a = n(192379),
    c = n(120356),
    s = n.n(c),
    d = n(481060),
    E = n(388032),
    f = n(323822);
let p = {
    BLOCK: f.block,
    INLINE: f.inline
};
class _ extends (l = a.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = p.BLOCK, style: i } = this.props;
        return (0, o.jsxs)('div', {
            className: s()(t, r),
            style: i,
            children: [
                (0, o.jsxs)(d.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: f.pro,
                    children: [E.intl.string(E.t['8tvIiI']), ':']
                }),
                (0, o.jsx)(d.Text, {
                    className: s()(f.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(r = _),
    (i = 'Types'),
    (u = p),
    i in r
        ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = u),
    (t.Z = _);
