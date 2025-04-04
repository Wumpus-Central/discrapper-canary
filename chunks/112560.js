n.d(t, {
    L: () => c,
    Z: () => u
}),
    n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(600164),
    l = n(993135);
function c(e) {
    return e < 400 ? 'small' : e < 1000 ? 'medium' : 'large';
}
function u(e) {
    let { onCTAClick: t, callToAction: n, header: i, description: c, errorCodeMessage: u, size: d, className: f, artURL: _, noArt: p = !1, selected: h = !1 } = e;
    return (0, r.jsxs)(s.Z, {
        className: f,
        justify: s.Z.Justify.CENTER,
        align: s.Z.Align.CENTER,
        direction: s.Z.Direction.VERTICAL,
        style: { padding: 4 },
        children: [
            !p &&
                null != _ &&
                (0, r.jsx)('div', {
                    className: o()(l.art, l[d]),
                    style: { backgroundImage: 'url('.concat(_, ')') }
                }),
            null != i
                ? (0, r.jsx)(a.Text, {
                      color: 'none',
                      variant: 'text-md/semibold',
                      className: l.header,
                      children: i
                  })
                : null,
            null != u
                ? (0, r.jsx)(a.Text, {
                      variant: 'text-sm/semibold',
                      color: 'text-muted',
                      selectable: !0,
                      children: u
                  })
                : null,
            null != c && (null == u || 'small' !== d)
                ? (0, r.jsx)(a.Text, {
                      color: 'none',
                      className: l.description,
                      variant: 'text-sm/medium',
                      children: c
                  })
                : null,
            h || null == n
                ? null
                : (0, r.jsx)(a.zxk, {
                      className: l.outerButton,
                      size: a.zxk.Sizes.NONE,
                      color: a.zxk.Colors.WHITE,
                      look: a.zxk.Looks.BLANK,
                      innerClassName: l.button,
                      onClick: (e) => {
                          e.stopPropagation(), null == t || t(e);
                      },
                      children: n
                  })
        ]
    });
}
