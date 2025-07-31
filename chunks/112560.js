(n.d(t, {
    L: () => u,
    Z: () => d
}),
    n(953529));
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(600164),
    c = n(993135);
function u(e) {
    return e < 400 ? 'small' : e < 1000 ? 'medium' : 'large';
}
function d(e) {
    let { onCTAClick: t, callToAction: n, header: i, description: u, errorCodeMessage: d, size: _, className: f, artURL: p, noArt: h = !1, selected: m = !1 } = e;
    return (0, r.jsxs)(l.Z, {
        className: f,
        justify: l.Z.Justify.CENTER,
        align: l.Z.Align.CENTER,
        direction: l.Z.Direction.VERTICAL,
        style: { padding: 4 },
        children: [
            !h &&
                null != p &&
                (0, r.jsx)('div', {
                    className: a()(c.art, c[_]),
                    style: { backgroundImage: 'url('.concat(p, ')') }
                }),
            null != i
                ? (0, r.jsx)(s.Text, {
                      color: 'none',
                      variant: 'text-md/semibold',
                      className: c.header,
                      children: i
                  })
                : null,
            null != d
                ? (0, r.jsx)(s.Text, {
                      className: c.errorCodeMessage,
                      variant: 'text-sm/semibold',
                      color: 'text-muted',
                      selectable: !0,
                      children: d
                  })
                : null,
            null != u && (null == d || 'small' !== _)
                ? (0, r.jsx)(s.Text, {
                      color: 'none',
                      className: c.description,
                      variant: 'text-sm/medium',
                      children: u
                  })
                : null,
            m || null == n
                ? null
                : (0, r.jsx)(o.zx, {
                      className: c.outerButton,
                      size: o.zx.Sizes.NONE,
                      color: o.zx.Colors.WHITE,
                      look: o.zx.Looks.BLANK,
                      innerClassName: c.button,
                      onClick: (e) => {
                          (e.stopPropagation(), null == t || t(e));
                      },
                      children: n
                  })
        ]
    });
}
