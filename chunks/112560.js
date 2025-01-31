n.d(t, {
    L: () => u,
    Z: () => c
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(600164),
    l = n(432811);
function u(e) {
    return e < 400 ? 'small' : e < 1000 ? 'medium' : 'large';
}
function c(e) {
    let { onCTAClick: t, callToAction: n, header: r, description: u, size: c, className: d, artURL: f, noArt: _ = !1, selected: p = !1 } = e;
    return (0, i.jsxs)(o.Z, {
        className: d,
        justify: o.Z.Justify.CENTER,
        align: o.Z.Align.CENTER,
        direction: o.Z.Direction.VERTICAL,
        style: { padding: 4 },
        children: [
            !_ &&
                null != f &&
                (0, i.jsx)('div', {
                    className: a()(l.art, l[c]),
                    style: { backgroundImage: 'url('.concat(f, ')') }
                }),
            null != r
                ? (0, i.jsx)(s.Text, {
                      color: 'none',
                      variant: 'text-md/semibold',
                      className: l.header,
                      children: r
                  })
                : null,
            null != u
                ? (0, i.jsx)(s.Text, {
                      color: 'none',
                      className: l.description,
                      variant: 'text-sm/medium',
                      children: u
                  })
                : null,
            p || null == n
                ? null
                : (0, i.jsx)(s.zxk, {
                      className: l.outerButton,
                      size: s.zxk.Sizes.NONE,
                      color: s.zxk.Colors.WHITE,
                      look: s.zxk.Looks.BLANK,
                      innerClassName: l.button,
                      onClick: (e) => {
                          e.stopPropagation(), null == t || t(e);
                      },
                      children: n
                  })
        ]
    });
}
