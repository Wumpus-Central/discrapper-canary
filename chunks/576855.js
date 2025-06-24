n.d(t, { Z: () => I });
var r,
    i,
    l = n(255367),
    o = n(73800),
    a = n(120356),
    c = n.n(a),
    s = n(481060),
    u = n(388032),
    d = n(108921);
let _ = {
    BLOCK: d.block,
    INLINE: d.inline
};
class E extends (i = o.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = _.BLOCK, style: i } = this.props;
        return (0, l.jsxs)('div', {
            className: c()(t, r),
            style: i,
            children: [
                (0, l.jsxs)(s.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: d.pro,
                    children: [u.intl.string(u.t['8tvIiI']), ':']
                }),
                (0, l.jsx)(s.Text, {
                    className: c()(d.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(r = 'Types') in E
    ? Object.defineProperty(E, r, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0
      })
    : (E[r] = _);
let I = E;
