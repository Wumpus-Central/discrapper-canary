n.d(t, { Z: () => p });
var r,
    o,
    a = n(255367),
    i = n(73800),
    l = n(120356),
    c = n.n(l),
    u = n(481060),
    s = n(388032),
    d = n(108921);
let f = {
    BLOCK: d.block,
    INLINE: d.inline
};
class _ extends (o = i.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = f.BLOCK, style: o } = this.props;
        return (0, a.jsxs)('div', {
            className: c()(t, r),
            style: o,
            children: [
                (0, a.jsxs)(u.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-feedback-positive',
                    className: d.pro,
                    children: [s.intl.string(s.t['8tvIiI']), ':']
                }),
                (0, a.jsx)(u.Text, {
                    className: c()(d.tip, n),
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
