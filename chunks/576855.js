var r,
    i,
    l,
    a,
    u = n(200651),
    o = n(192379),
    s = n(120356),
    c = n.n(s),
    d = n(481060),
    f = n(388032),
    p = n(323822);
let h = {
    BLOCK: p.block,
    INLINE: p.inline
};
class _ extends (a = o.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = h.BLOCK, style: i } = this.props;
        return (0, u.jsxs)('div', {
            className: c()(t, r),
            style: i,
            children: [
                (0, u.jsxs)(d.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: p.pro,
                    children: [f.intl.string(f.t['8tvIiI']), ':']
                }),
                (0, u.jsx)(d.Text, {
                    className: c()(p.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(r = _),
    (i = 'Types'),
    (l = h),
    i in r
        ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = l),
    (t.Z = _);
