n.d(t, { Z: () => f });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(568611),
    o = n(435935),
    c = n(442837),
    d = n(481060),
    u = n(37234),
    m = n(960412),
    h = n(151662),
    g = n(695346),
    _ = n(981631),
    x = n(930441),
    p = n(388032),
    E = n(660728),
    C = n(232186);
let f = () => {
    let e = g.Ex.useSetting(),
        { categories: t, initialized: n } = (0, c.cj)([h.Z], () => h.Z.getEmailSettings());
    return (
        s.useEffect(() => {
            null == n && (0, m.Y7)();
        }, [n]),
        (0, i.jsxs)('div', {
            className: E.container,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: p.intl.string(p.t.USIXU1)
                }),
                (0, i.jsx)(d.j7V, {
                    className: l()(C.marginTop8, C.marginBottom20),
                    value: e,
                    note: p.intl.string(p.t['5MdB3t']),
                    hideBorder: !0,
                    onChange: g.Ex.updateSetting,
                    children: p.intl.string(p.t.zkEceX)
                }),
                e
                    ? (0, i.jsx)(d.Zbd, {
                          className: E.enableCard,
                          type: d.Zbd.Types.CUSTOM,
                          outline: !0,
                          children: (0, i.jsxs)(o.k, {
                              justify: o.k.Justify.END,
                              children: [
                                  (0, i.jsx)(o.k.Child, {
                                      children: (0, i.jsx)(d.Text, {
                                          variant: 'text-sm/semibold',
                                          color: 'text-normal',
                                          children: p.intl.string(p.t.xAVm7O)
                                      })
                                  }),
                                  (0, i.jsx)(d.P3F, {
                                      children: (0, i.jsx)(a.rU, {
                                          onClick: u.xf,
                                          to: {
                                              pathname: _.Z5c.FAMILY_CENTER,
                                              state: { scrollRestoration: !1 }
                                          },
                                          children: p.intl.string(p.t.cUIXFR)
                                      })
                                  }),
                                  (0, i.jsx)(d.G2e, {
                                      icon: d.ZSh,
                                      className: E.arrow,
                                      disableColor: !0
                                  })
                              ]
                          })
                      })
                    : null,
                (0, i.jsx)(d.j7V, {
                    className: l()(C.marginTop20, C.marginBottom20),
                    value: !!t[x.$Z.FAMILY_CENTER_DIGEST],
                    note: p.intl.string(p.t['y34S4+']),
                    hideBorder: !0,
                    onChange: function (e) {
                        (0, m.pR)(x.$Z.FAMILY_CENTER_DIGEST, e);
                    },
                    children: p.intl.string(p.t.irvJKS)
                })
            ]
        })
    );
};
