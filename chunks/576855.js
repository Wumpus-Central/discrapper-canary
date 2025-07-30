n.d(t, { Z: () => p });
var r,
    i,
    l = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    c = n(481060),
    u = n(388032),
    d = n(108921);
let _ = {
    BLOCK: d.block,
    INLINE: d.inline
};
class E extends (i = a.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = _.BLOCK, style: i } = this.props;
        return (0, l.jsxs)('div', {
            className: s()(t, r),
            style: i,
            children: [
                (0, l.jsxs)(c.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-feedback-positive',
                    className: d.pro,
                    children: [u.intl.string(u.t['8tvIiI']), ':']
                }),
                (0, l.jsx)(c.Text, {
                    className: s()(d.tip, n),
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
let p = E;
