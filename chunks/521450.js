var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(568611),
    o = n(435935),
    c = n(442837),
    d = n(481060),
    u = n(37234),
    g = n(960412),
    m = n(151662),
    f = n(695346),
    p = n(981631),
    _ = n(930441),
    h = n(388032),
    x = n(660728),
    E = n(232186);
t.Z = () => {
    let e = f.Ex.useSetting(),
        { categories: t, initialized: n } = (0, c.cj)([m.Z], () => m.Z.getEmailSettings());
    return (
        r.useEffect(() => {
            null == n && (0, g.Y7)();
        }, [n]),
        (0, i.jsxs)('div', {
            className: x.container,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: h.intl.string(h.t.USIXU1)
                }),
                (0, i.jsx)(d.FormSwitch, {
                    className: s()(E.marginTop8, E.marginBottom20),
                    value: e,
                    note: h.intl.string(h.t['5MdB3t']),
                    hideBorder: !0,
                    onChange: f.Ex.updateSetting,
                    children: h.intl.string(h.t.zkEceX)
                }),
                e
                    ? (0, i.jsx)(d.Card, {
                          className: x.enableCard,
                          type: d.Card.Types.CUSTOM,
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
                                  (0, i.jsx)(d.Clickable, {
                                      children: (0, i.jsx)(l.rU, {
                                          onClick: u.xf,
                                          to: {
                                              pathname: p.Z5c.FAMILY_CENTER,
                                              state: { scrollRestoration: !1 }
                                          },
                                          children: h.intl.string(h.t.cUIXFR)
                                      })
                                  }),
                                  (0, i.jsx)(d.IconBadge, {
                                      icon: d.ArrowSmallRightIcon,
                                      className: x.arrow,
                                      disableColor: !0
                                  })
                              ]
                          })
                      })
                    : null,
                (0, i.jsx)(d.FormSwitch, {
                    className: s()(E.marginTop20, E.marginBottom20),
                    value: !!t[_.$Z.FAMILY_CENTER_DIGEST],
                    note: h.intl.string(h.t['y34S4+']),
                    hideBorder: !0,
                    onChange: function (e) {
                        (0, g.pR)(_.$Z.FAMILY_CENTER_DIGEST, e);
                    },
                    children: h.intl.string(h.t.irvJKS)
                })
            ]
        })
    );
};
