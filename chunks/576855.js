var r,
    i,
    u,
    l,
    o = n(200651),
    s = n(192379),
    a = n(120356),
    c = n.n(a),
    d = n(481060),
    E = n(388032),
    f = n(323822);
let _ = {
    BLOCK: f.block,
    INLINE: f.inline
};
class S extends (l = s.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = _.BLOCK, style: i } = this.props;
        return (0, o.jsxs)('div', {
            className: c()(t, r),
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
                    className: c()(f.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(r = S),
    (i = 'Types'),
    (u = _),
    i in r
        ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = u),
    (t.Z = S);
