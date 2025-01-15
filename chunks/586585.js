t.d(n, {
    g: function () {
        return l;
    }
});
var o,
    l,
    i = t(200651);
t(192379);
var r = t(481060),
    a = t(600164),
    s = t(612853),
    c = t(388032),
    u = t(404246);
((o = l || (l = {}))[(o.CONTINUE = 0)] = 'CONTINUE'), (o[(o.UPGRADE = 1)] = 'UPGRADE'), (o[(o.PURCHASE = 2)] = 'PURCHASE');
let d = (e) => {
    let { onBack: n, backText: t, primaryIcon: o, primaryCTA: l, primaryType: d, primaryText: p, primaryTooltip: f, primaryDisabled: m, primarySubmitting: _, onPrimary: S, secondaryText: E, onSecondary: g } = e;
    return (0, i.jsxs)(r.ModalFooter, {
        justify: a.Z.Justify.BETWEEN,
        align: a.Z.Align.CENTER,
        children: [
            (() => {
                if (null == l || null == p) return null;
                let e = 2 === l ? r.ShinyButton : r.Button,
                    n = {
                        innerClassName: u.button,
                        type: d,
                        disabled: m,
                        submitting: _,
                        color: 0 === l ? r.Button.Colors.BRAND : r.Button.Colors.GREEN,
                        onClick: S
                    };
                return null != f
                    ? (0, i.jsx)(r.Tooltip, {
                          text: f,
                          children: (t) =>
                              (0, i.jsxs)(e, {
                                  ...t,
                                  ...n,
                                  children: [
                                      null == o
                                          ? null
                                          : (0, i.jsx)(o, {
                                                color: 'currentColor',
                                                className: u.primaryIcon
                                            }),
                                      p
                                  ]
                              })
                      })
                    : (0, i.jsxs)(e, {
                          ...n,
                          children: [
                              null == o
                                  ? null
                                  : (0, i.jsx)(o, {
                                        color: 'currentColor',
                                        className: u.primaryIcon
                                    }),
                              p
                          ]
                      });
            })(),
            null == E
                ? null
                : (0, i.jsx)(r.Button, {
                      color: r.Button.Colors.PRIMARY,
                      look: r.Button.Looks.LINK,
                      onClick: g,
                      children: E
                  }),
            (0, i.jsx)(s.Z, {}),
            null == n
                ? null
                : (0, i.jsx)(r.Button, {
                      className: u.back,
                      color: r.Button.Colors.PRIMARY,
                      look: r.Button.Looks.LINK,
                      onClick: n,
                      children: null != t ? t : c.intl.string(c.t['13/7kZ'])
                  })
        ]
    });
};
(d.CTAType = l), (n.Z = d);
