n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(936504),
    a = n(946015),
    r = n(311907),
    o = n(397927),
    d = n(100406),
    c = n(878460),
    u = n(253932),
    m = n(12901),
    g = n(652215),
    _ = n(431144),
    A = n(870236),
    x = n(985018),
    h = n(24771);
let p = () => {
    let e = u.dm.useSetting(),
        { categories: t, initialized: n } = (0, r.cf)([c.A], () => c.A.getEmailSettings());
    return (
        s.useEffect(() => {
            null == n && (0, d.cR)();
        }, [n]),
        (0, i.jsx)("div", {
            className: h.kL,
            children: (0, i.jsxs)(o.nVY, {
                label: x.intl.string(A.default.USIXU7),
                children: [
                    (0, i.jsx)(o.dOG, {
                        checked: e,
                        description: x.intl.string(A.default["5MdB3j"]),
                        onChange: u.dm.updateSetting,
                        label: x.intl.string(A.default.zkEceS),
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
                                              children: x.intl.string(A.default.xAVm7K),
                                          }),
                                      }),
                                      (0, i.jsx)(o.DUT, {
                                          children: (0, i.jsx)(l.N_, {
                                              onClick: m.default,
                                              to: { pathname: g.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: x.intl.string(A.default.cUIXFY),
                                          }),
                                      }),
                                      (0, i.jsx)(o.fkz, { icon: o.EdP, className: h.UE, disableColor: !0 }),
                                  ],
                              }),
                          })
                        : null,
                    (0, i.jsx)(o.dOG, {
                        checked: !!t[_.HO.FAMILY_CENTER_DIGEST],
                        description: x.intl.string(A.default.y34S46),
                        onChange: function (e) {
                            (0, d.CA)(_.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: x.intl.string(A.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
