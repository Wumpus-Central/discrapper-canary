n.d(t, { Z: () => C });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(568611),
    o = n(435935),
    c = n(442837),
    d = n(481060),
    u = n(37234),
    m = n(960412),
    g = n(151662),
    _ = n(695346),
    p = n(981631),
    f = n(930441),
    h = n(388032),
    x = n(469006),
    E = n(483938);
let C = () => {
    let e = _.Ex.useSetting(),
        { categories: t, initialized: n } = (0, c.cj)([g.Z], () => g.Z.getEmailSettings());
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
                    children: h.intl.string(h.t.USIXU1)
                }),
                (0, i.jsx)(d.j7V, {
                    className: s()(E.marginTop8, E.marginBottom20),
                    value: e,
                    note: h.intl.string(h.t['5MdB3t']),
                    hideBorder: !0,
                    onChange: _.Ex.updateSetting,
                    children: h.intl.string(h.t.zkEceX)
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
                                          children: h.intl.string(h.t.xAVm7O)
                                      })
                                  }),
                                  (0, i.jsx)(d.P3F, {
                                      children: (0, i.jsx)(l.rU, {
                                          onClick: u.xf,
                                          to: {
                                              pathname: p.Z5c.FAMILY_CENTER,
                                              state: { scrollRestoration: !1 }
                                          },
                                          children: h.intl.string(h.t.cUIXFR)
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
                    className: s()(E.marginTop20, E.marginBottom20),
                    value: !!t[f.$Z.FAMILY_CENTER_DIGEST],
                    note: h.intl.string(h.t['y34S4+']),
                    hideBorder: !0,
                    onChange: function (e) {
                        (0, m.pR)(f.$Z.FAMILY_CENTER_DIGEST, e);
                    },
                    children: h.intl.string(h.t.irvJKS)
                })
            ]
        })
    );
};
