var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(568611),
    o = n(435935),
    c = n(442837),
    d = n(481060),
    u = n(37234),
    m = n(960412),
    g = n(151662),
    h = n(695346),
    p = n(981631),
    x = n(930441),
    f = n(388032),
    _ = n(288204),
    E = n(275477);
t.Z = () => {
    let e = h.Ex.useSetting(),
        { categories: t, initialized: n } = (0, c.cj)([g.Z], () => g.Z.getEmailSettings());
    return (
        r.useEffect(() => {
            null == n && (0, m.Y7)();
        }, [n]),
        (0, i.jsxs)('div', {
            className: _.container,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: f.intl.string(f.t.USIXU1)
                }),
                (0, i.jsx)(d.FormSwitch, {
                    className: a()(E.marginTop8, E.marginBottom20),
                    value: e,
                    note: f.intl.string(f.t['5MdB3t']),
                    hideBorder: !0,
                    onChange: h.Ex.updateSetting,
                    children: f.intl.string(f.t.zkEceX)
                }),
                e
                    ? (0, i.jsx)(d.Card, {
                          className: _.enableCard,
                          type: d.Card.Types.CUSTOM,
                          outline: !0,
                          children: (0, i.jsxs)(o.k, {
                              justify: o.k.Justify.END,
                              children: [
                                  (0, i.jsx)(o.k.Child, {
                                      children: (0, i.jsx)(d.Text, {
                                          variant: 'text-sm/semibold',
                                          color: 'text-normal',
                                          children: f.intl.string(f.t.xAVm7O)
                                      })
                                  }),
                                  (0, i.jsx)(d.Clickable, {
                                      children: (0, i.jsx)(l.rU, {
                                          onClick: u.xf,
                                          to: {
                                              pathname: p.Z5c.FAMILY_CENTER,
                                              state: { scrollRestoration: !1 }
                                          },
                                          children: f.intl.string(f.t.cUIXFR)
                                      })
                                  }),
                                  (0, i.jsx)(d.IconBadge, {
                                      icon: d.ArrowSmallRightIcon,
                                      className: _.arrow,
                                      disableColor: !0
                                  })
                              ]
                          })
                      })
                    : null,
                (0, i.jsx)(d.FormSwitch, {
                    className: a()(E.marginTop20, E.marginBottom20),
                    value: !!t[x.$Z.FAMILY_CENTER_DIGEST],
                    note: f.intl.string(f.t['y34S4+']),
                    hideBorder: !0,
                    onChange: function (e) {
                        (0, m.pR)(x.$Z.FAMILY_CENTER_DIGEST, e);
                    },
                    children: f.intl.string(f.t.irvJKS)
                })
            ]
        })
    );
};
