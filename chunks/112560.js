r.d(n, {
    L: function () {
        return c;
    },
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(600164),
    u = r(432811);
function c(e) {
    return e < 400 ? 'small' : e < 1000 ? 'medium' : 'large';
}
function d(e) {
    let { onCTAClick: n, callToAction: r, header: a, description: c, size: d, className: f, artURL: _, noArt: h = !1, selected: p = !1 } = e;
    return (0, i.jsxs)(l.Z, {
        className: f,
        justify: l.Z.Justify.CENTER,
        align: l.Z.Align.CENTER,
        direction: l.Z.Direction.VERTICAL,
        style: { padding: 4 },
        children: [
            !h &&
                null != _ &&
                (0, i.jsx)('div', {
                    className: s()(u.art, u[d]),
                    style: { backgroundImage: 'url('.concat(_, ')') }
                }),
            null != a
                ? (0, i.jsx)(o.Text, {
                      color: 'none',
                      variant: 'text-md/semibold',
                      className: u.header,
                      children: a
                  })
                : null,
            null != c
                ? (0, i.jsx)(o.Text, {
                      color: 'none',
                      className: u.description,
                      variant: 'text-sm/medium',
                      children: c
                  })
                : null,
            p || null == r
                ? null
                : (0, i.jsx)(o.Button, {
                      className: u.outerButton,
                      size: o.Button.Sizes.NONE,
                      color: o.Button.Colors.WHITE,
                      look: o.Button.Looks.BLANK,
                      innerClassName: u.button,
                      onClick: (e) => {
                          e.stopPropagation(), null == n || n(e);
                      },
                      children: r
                  })
        ]
    });
}
