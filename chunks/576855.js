var r,
    i,
    u,
    l,
    o = n(200651),
    s = n(192379),
    a = n(120356),
    E = n.n(a),
    c = n(481060),
    d = n(388032),
    _ = n(323822);
let f = {
    BLOCK: _.block,
    INLINE: _.inline
};
class S extends (l = s.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = f.BLOCK, style: i } = this.props;
        return (0, o.jsxs)('div', {
            className: E()(t, r),
            style: i,
            children: [
                (0, o.jsxs)(c.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: _.pro,
                    children: [d.intl.string(d.t['8tvIiI']), ':']
                }),
                (0, o.jsx)(c.Text, {
                    className: E()(_.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(r = S),
    (i = 'Types'),
    (u = f),
    i in r
        ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = u),
    (t.Z = S);
