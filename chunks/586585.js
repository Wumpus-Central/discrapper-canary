n.d(t, {
    Z: () => d,
    g: () => u
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(600164),
    s = n(612853),
    o = n(388032),
    l = n(305042),
    u = (function (e) {
        return (e[(e.CONTINUE = 0)] = 'CONTINUE'), (e[(e.UPGRADE = 1)] = 'UPGRADE'), (e[(e.PURCHASE = 2)] = 'PURCHASE'), e;
    })({});
let c = (e) => {
    let { onBack: t, backText: n, primaryIcon: u, primaryCTA: c, primaryType: d, primaryText: f, primaryTooltip: _, primaryDisabled: p, primarySubmitting: h, onPrimary: m, secondaryText: g, onSecondary: E } = e,
        v = () => {
            if (null == c || null == f) return null;
            let e = 2 === c ? r.gtL : r.zxk,
                t = {
                    innerClassName: l.button,
                    type: d,
                    disabled: p,
                    submitting: h,
                    color: 0 === c ? r.zxk.Colors.BRAND : r.zxk.Colors.GREEN,
                    onClick: m
                };
            return null != _
                ? (0, i.jsx)(r.ua7, {
                      text: _,
                      children: (n) =>
                          (0, i.jsxs)(e, {
                              ...n,
                              ...t,
                              children: [
                                  null == u
                                      ? null
                                      : (0, i.jsx)(u, {
                                            color: 'currentColor',
                                            className: l.primaryIcon
                                        }),
                                  f
                              ]
                          })
                  })
                : (0, i.jsxs)(e, {
                      ...t,
                      children: [
                          null == u
                              ? null
                              : (0, i.jsx)(u, {
                                    color: 'currentColor',
                                    className: l.primaryIcon
                                }),
                          f
                      ]
                  });
        },
        y = () =>
            null == g
                ? null
                : (0, i.jsx)(r.zxk, {
                      color: r.zxk.Colors.PRIMARY,
                      look: r.zxk.Looks.LINK,
                      onClick: E,
                      children: g
                  }),
        I = () =>
            null == t
                ? null
                : (0, i.jsx)(r.zxk, {
                      className: l.back,
                      color: r.zxk.Colors.PRIMARY,
                      look: r.zxk.Looks.LINK,
                      onClick: t,
                      children: null != n ? n : o.intl.string(o.t['13/7kZ'])
                  });
    return (0, i.jsxs)(r.mzw, {
        justify: a.Z.Justify.BETWEEN,
        align: a.Z.Align.CENTER,
        children: [v(), y(), (0, i.jsx)(s.Z, {}), I()]
    });
};
c.CTAType = u;
let d = c;
