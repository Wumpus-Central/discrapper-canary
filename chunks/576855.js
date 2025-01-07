var r,
    i,
    u,
    l,
    s = n(200651),
    o = n(192379),
    d = n(120356),
    a = n.n(d),
    c = n(481060),
    E = n(388032),
    f = n(323822);
let S = {
    BLOCK: f.block,
    INLINE: f.inline
};
class _ extends (l = o.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = S.BLOCK, style: i } = this.props;
        return (0, s.jsxs)('div', {
            className: a()(t, r),
            style: i,
            children: [
                (0, s.jsxs)(c.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: f.pro,
                    children: [E.intl.string(E.t['8tvIiI']), ':']
                }),
                (0, s.jsx)(c.Text, {
                    className: a()(f.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(r = _),
    (i = 'Types'),
    (u = S),
    i in r
        ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = u),
    (t.Z = _);
