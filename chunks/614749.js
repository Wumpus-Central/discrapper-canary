n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    l = n(758879),
    s = n(946015),
    a = n(311907),
    o = n(397927),
    c = n(100406),
    d = n(878460),
    u = n(253932),
    _ = n(12901),
    p = n(652215),
    m = n(431144),
    g = n(842130),
    A = n(985018),
    f = n(753765);
let h = () => {
    let e = u.dm.useSetting(),
        { categories: t, initialized: n } = (0, a.cf)([d.A], () => d.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == n && (0, c.cR)();
        }, [n]),
        (0, r.jsx)("div", {
            className: f.kL,
            children: (0, r.jsxs)(o.nVY, {
                label: A.intl.string(g.default.USIXU7),
                children: [
                    (0, r.jsx)(o.dOG, {
                        checked: e,
                        description: A.intl.string(g.default["5MdB3j"]),
                        onChange: u.dm.updateSetting,
                        label: A.intl.string(g.default.zkEceS),
                    }),
                    e
                        ? (0, r.jsx)(o.ZpM, {
                              className: f.MT,
                              type: o.ZpM.Types.CUSTOM,
                              outline: !0,
                              children: (0, r.jsxs)(s.s, {
                                  justify: s.s.Justify.END,
                                  children: [
                                      (0, r.jsx)(s.s.Child, {
                                          children: (0, r.jsx)(o.Text, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: A.intl.string(g.default.xAVm7K),
                                          }),
                                      }),
                                      (0, r.jsx)(o.DUT, {
                                          children: (0, r.jsx)(l.N_, {
                                              onClick: _.default,
                                              to: {
                                                  pathname: p.BVt.FAMILY_CENTER,
                                                  state: {
                                                      scrollRestoration: !1,
                                                  },
                                              },
                                              children: A.intl.string(g.default.cUIXFY),
                                          }),
                                      }),
                                      (0, r.jsx)(o.fkz, {
                                          icon: o.EdP,
                                          className: f.UE,
                                          disableColor: !0,
                                      }),
                                  ],
                              }),
                          })
                        : null,
                    (0, r.jsx)(o.dOG, {
                        checked: !!t[m.HO.FAMILY_CENTER_DIGEST],
                        description: A.intl.string(g.default.y34S46),
                        onChange: function (e) {
                            (0, c.CA)(m.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: A.intl.string(g.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
