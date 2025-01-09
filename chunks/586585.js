t.d(e, {
    g: function () {
        return r;
    }
});
var i,
    r,
    l = t(200651);
t(192379);
var a = t(481060),
    s = t(600164),
    o = t(612853),
    c = t(388032),
    d = t(659915);
((i = r || (r = {}))[(i.CONTINUE = 0)] = 'CONTINUE'), (i[(i.UPGRADE = 1)] = 'UPGRADE'), (i[(i.PURCHASE = 2)] = 'PURCHASE');
let u = (n) => {
    let { onBack: e, backText: t, primaryIcon: i, primaryCTA: r, primaryType: u, primaryText: m, primaryTooltip: x, primaryDisabled: f, primarySubmitting: h, onPrimary: j, secondaryText: v, onSecondary: N } = n;
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
                          children: (t) =>
                              (0, l.jsxs)(n, {
                                  ...t,
                                  ...e,
                                  children: [
                                      null == i
                                          ? null
                                          : (0, l.jsx)(i, {
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
                              null == i
                                  ? null
                                  : (0, l.jsx)(i, {
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
                      children: null != t ? t : c.intl.string(c.t['13/7kZ'])
                  })
        ]
    });
};
(u.CTAType = r), (e.Z = u);
