n.d(t, { Z: () => j });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(688642),
    o = n(435935),
    c = n(442837),
    d = n(481060),
    u = n(37234),
    m = n(960412),
    p = n(151662),
    g = n(695346),
    h = n(981631),
    f = n(930441),
    b = n(332495),
    _ = n(388032),
    x = n(128607),
    E = n(20493);
let j = () => {
    let e = g.Ex.useSetting(),
        { categories: t, initialized: n } = (0, c.cj)([p.Z], () => p.Z.getEmailSettings());
    return (
        r.useEffect(() => {
            null == n && (0, m.Y7)();
        }, [n]),
        (0, i.jsxs)('div', {
            className: x.container,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: _.intl.string(b.default.USIXU1)
                }),
                (0, i.jsx)(d.j7V, {
                    className: l()(E.marginTop8, E.marginBottom20),
                    value: e,
                    note: _.intl.string(b.default['5MdB3t']),
                    hideBorder: !0,
                    onChange: g.Ex.updateSetting,
                    children: _.intl.string(b.default.zkEceX)
                }),
                e
                    ? (0, i.jsx)(d.Zbd, {
                          className: x.enableCard,
                          type: d.Zbd.Types.CUSTOM,
                          outline: !0,
                          children: (0, i.jsxs)(o.k, {
                              justify: o.k.Justify.END,
                              children: [
                                  (0, i.jsx)(o.k.Child, {
                                      children: (0, i.jsx)(d.Text, {
                                          variant: 'text-sm/semibold',
                                          color: 'text-normal',
                                          children: _.intl.string(b.default.xAVm7O)
                                      })
                                  }),
                                  (0, i.jsx)(d.P3F, {
                                      children: (0, i.jsx)(a.rU, {
                                          onClick: u.xf,
                                          to: {
                                              pathname: h.Z5c.FAMILY_CENTER,
                                              state: { scrollRestoration: !1 }
                                          },
                                          children: _.intl.string(b.default.cUIXFR)
                                      })
                                  }),
                                  (0, i.jsx)(d.G2e, {
                                      icon: d.ZSh,
                                      className: x.arrow,
                                      disableColor: !0
                                  })
                              ]
                          })
                      })
                    : null,
                (0, i.jsx)(d.j7V, {
                    className: l()(E.marginTop20, E.marginBottom20),
                    value: !!t[f.$Z.FAMILY_CENTER_DIGEST],
                    note: _.intl.string(b.default['y34S4+']),
                    hideBorder: !0,
                    onChange: function (e) {
                        (0, m.pR)(f.$Z.FAMILY_CENTER_DIGEST, e);
                    },
                    children: _.intl.string(b.default.irvJKS)
                })
            ]
        })
    );
};
