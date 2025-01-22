r.d(n, {
    g: function () {
        return i;
    }
});
var i,
    a = r(200651);
r(192379);
var o = r(481060),
    s = r(600164),
    l = r(612853),
    u = r(388032),
    c = r(659915);
!(function (e) {
    (e[(e.CONTINUE = 0)] = 'CONTINUE'), (e[(e.UPGRADE = 1)] = 'UPGRADE'), (e[(e.PURCHASE = 2)] = 'PURCHASE');
})(i || (i = {}));
let d = (e) => {
    let { onBack: n, backText: r, primaryIcon: i, primaryCTA: d, primaryType: f, primaryText: p, primaryTooltip: h, primaryDisabled: _, primarySubmitting: m, onPrimary: g, secondaryText: E, onSecondary: v } = e,
        y = () => {
            if (null == d || null == p) return null;
            let e = 2 === d ? o.ShinyButton : o.Button,
                n = {
                    innerClassName: c.button,
                    type: f,
                    disabled: _,
                    submitting: m,
                    color: 0 === d ? o.Button.Colors.BRAND : o.Button.Colors.GREEN,
                    onClick: g
                };
            return null != h
                ? (0, a.jsx)(o.Tooltip, {
                      text: h,
                      children: (r) =>
                          (0, a.jsxs)(e, {
                              ...r,
                              ...n,
                              children: [
                                  null == i
                                      ? null
                                      : (0, a.jsx)(i, {
                                            color: 'currentColor',
                                            className: c.primaryIcon
                                        }),
                                  p
                              ]
                          })
                  })
                : (0, a.jsxs)(e, {
                      ...n,
                      children: [
                          null == i
                              ? null
                              : (0, a.jsx)(i, {
                                    color: 'currentColor',
                                    className: c.primaryIcon
                                }),
                          p
                      ]
                  });
        },
        b = () =>
            null == E
                ? null
                : (0, a.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      look: o.Button.Looks.LINK,
                      onClick: v,
                      children: E
                  }),
        I = () =>
            null == n
                ? null
                : (0, a.jsx)(o.Button, {
                      className: c.back,
                      color: o.Button.Colors.PRIMARY,
                      look: o.Button.Looks.LINK,
                      onClick: n,
                      children: null != r ? r : u.intl.string(u.t['13/7kZ'])
                  });
    return (0, a.jsxs)(o.ModalFooter, {
        justify: s.Z.Justify.BETWEEN,
        align: s.Z.Align.CENTER,
        children: [y(), b(), (0, a.jsx)(l.Z, {}), I()]
    });
};
(d.CTAType = i), (n.Z = d);
