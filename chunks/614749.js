n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    r = n(758879),
    a = n(946015),
    l = n(311907),
    o = n(397927),
    c = n(100406),
    d = n(878460),
    u = n(253932),
    _ = n(12901),
    m = n(652215),
    A = n(431144),
    g = n(842130),
    E = n(985018),
    h = n(753765);
let p = () => {
    let e = u.dm.useSetting(),
        { categories: t, initialized: n } = (0, l.cf)([d.A], () => d.A.getEmailSettings());
    return (
        s.useEffect(() => {
            null == n && (0, c.cR)();
        }, [n]),
        (0, i.jsx)("div", {
            className: h.kL,
            children: (0, i.jsxs)(o.nVY, {
                label: E.intl.string(g.default.USIXU7),
                children: [
                    (0, i.jsx)(o.dOG, {
                        checked: e,
                        description: E.intl.string(g.default["5MdB3j"]),
                        onChange: u.dm.updateSetting,
                        label: E.intl.string(g.default.zkEceS),
                    }),
                    e
                        ? (0, i.jsx)(o.ZpM, {
                              className: h.MT,
                              type: o.ZpM.Types.CUSTOM,
                              outline: !0,
                              children: (0, i.jsxs)(a.s, {
                                  justify: a.s.Justify.END,
                                  children: [
                                      (0, i.jsx)(a.s.Child, {
                                          children: (0, i.jsx)(o.Text, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: E.intl.string(g.default.xAVm7K),
                                          }),
                                      }),
                                      (0, i.jsx)(o.DUT, {
                                          children: (0, i.jsx)(r.N_, {
                                              onClick: _.default,
                                              to: { pathname: m.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: E.intl.string(g.default.cUIXFY),
                                          }),
                                      }),
                                      (0, i.jsx)(o.fkz, { icon: o.EdP, className: h.UE, disableColor: !0 }),
                                  ],
                              }),
                          })
                        : null,
                    (0, i.jsx)(o.dOG, {
                        checked: !!t[A.HO.FAMILY_CENTER_DIGEST],
                        description: E.intl.string(g.default.y34S46),
                        onChange: function (e) {
                            (0, c.CA)(A.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: E.intl.string(g.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
