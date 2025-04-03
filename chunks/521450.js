n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(568611),
    o = n(435935),
    c = n(442837),
    d = n(481060),
    u = n(37234),
    m = n(960412),
    g = n(151662),
    p = n(695346),
    h = n(981631),
    f = n(930441),
    b = n(332495),
    N = n(388032),
    x = n(128607),
    _ = n(20493);
let E = () => {
    let e = p.Ex.useSetting(),
        { categories: t, initialized: n } = (0, c.cj)([g.Z], () => g.Z.getEmailSettings());
    return (
        i.useEffect(() => {
            null == n && (0, m.Y7)();
        }, [n]),
        (0, r.jsxs)('div', {
            className: x.container,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: N.NW.string(b.Z.USIXU1)
                }),
                (0, r.jsx)(d.j7V, {
                    className: a()(_.marginTop8, _.marginBottom20),
                    value: e,
                    note: N.NW.string(b.Z['5MdB3t']),
                    hideBorder: !0,
                    onChange: p.Ex.updateSetting,
                    children: N.NW.string(b.Z.zkEceX)
                }),
                e
                    ? (0, r.jsx)(d.Zbd, {
                          className: x.enableCard,
                          type: d.Zbd.Types.CUSTOM,
                          outline: !0,
                          children: (0, r.jsxs)(o.k, {
                              justify: o.k.Justify.END,
                              children: [
                                  (0, r.jsx)(o.k.Child, {
                                      children: (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/semibold',
                                          color: 'text-normal',
                                          children: N.NW.string(b.Z.xAVm7O)
                                      })
                                  }),
                                  (0, r.jsx)(d.P3F, {
                                      children: (0, r.jsx)(l.rU, {
                                          onClick: u.xf,
                                          to: {
                                              pathname: h.Z5c.FAMILY_CENTER,
                                              state: { scrollRestoration: !1 }
                                          },
                                          children: N.NW.string(b.Z.cUIXFR)
                                      })
                                  }),
                                  (0, r.jsx)(d.G2e, {
                                      icon: d.ZSh,
                                      className: x.arrow,
                                      disableColor: !0
                                  })
                              ]
                          })
                      })
                    : null,
                (0, r.jsx)(d.j7V, {
                    className: a()(_.marginTop20, _.marginBottom20),
                    value: !!t[f.$Z.FAMILY_CENTER_DIGEST],
                    note: N.NW.string(b.Z['y34S4+']),
                    hideBorder: !0,
                    onChange: function (e) {
                        (0, m.pR)(f.$Z.FAMILY_CENTER_DIGEST, e);
                    },
                    children: N.NW.string(b.Z.irvJKS)
                })
            ]
        })
    );
};
