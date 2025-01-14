i.d(e, {
    g: function () {
        return r;
    }
});
var t,
    r,
    l = i(200651);
i(192379);
var a = i(481060),
    s = i(600164),
    o = i(612853),
    c = i(388032),
    d = i(659915);
((t = r || (r = {}))[(t.CONTINUE = 0)] = 'CONTINUE'), (t[(t.UPGRADE = 1)] = 'UPGRADE'), (t[(t.PURCHASE = 2)] = 'PURCHASE');
let u = (n) => {
    let { onBack: e, backText: i, primaryIcon: t, primaryCTA: r, primaryType: u, primaryText: m, primaryTooltip: x, primaryDisabled: f, primarySubmitting: h, onPrimary: j, secondaryText: v, onSecondary: N } = n;
    return (0, l.jsxs)(a.ModalFooter, {
        justify: s.Z.Justify.BETWEEN,
        align: s.Z.Align.CENTER,
        children: [
            (() => {
                if (null == r || null == m) return null;
                let n = 2 === r ? a.ShinyButton : a.Button,
                    e = {
                        innerClassName: d.button,
                        type: u,
                        disabled: f,
                        submitting: h,
                        color: 0 === r ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
                        onClick: j
                    };
                return null != x
                    ? (0, l.jsx)(a.Tooltip, {
                          text: x,
                          children: (i) =>
                              (0, l.jsxs)(n, {
                                  ...i,
                                  ...e,
                                  children: [
                                      null == t
                                          ? null
                                          : (0, l.jsx)(t, {
                                                color: 'currentColor',
                                                className: d.primaryIcon
                                            }),
                                      m
                                  ]
                              })
                      })
                    : (0, l.jsxs)(n, {
                          ...e,
                          children: [
                              null == t
                                  ? null
                                  : (0, l.jsx)(t, {
                                        color: 'currentColor',
                                        className: d.primaryIcon
                                    }),
                              m
                          ]
                      });
            })(),
            null == v
                ? null
                : (0, l.jsx)(a.Button, {
                      color: a.Button.Colors.PRIMARY,
                      look: a.Button.Looks.LINK,
                      onClick: N,
                      children: v
                  }),
            (0, l.jsx)(o.Z, {}),
            null == e
                ? null
                : (0, l.jsx)(a.Button, {
                      className: d.back,
                      color: a.Button.Colors.PRIMARY,
                      look: a.Button.Looks.LINK,
                      onClick: e,
                      children: null != i ? i : c.intl.string(c.t['13/7kZ'])
                  })
        ]
    });
};
(u.CTAType = r), (e.Z = u);
