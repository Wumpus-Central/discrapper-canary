n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(758879),
    s = n(946015),
    o = n(311907),
    l = n(397927),
    c = n(100406),
    u = n(878460),
    d = n(253932),
    f = n(12901),
    p = n(652215),
    _ = n(431144),
    h = n(842130),
    m = n(985018),
    g = n(753765);
let E = () => {
    let e = d.dm.useSetting(),
        { categories: t, initialized: n } = (0, o.cf)([u.A], () => u.A.getEmailSettings());
    function E(e) {
        (0, c.CA)(_.HO.FAMILY_CENTER_DIGEST, e);
    }
    return (
        i.useEffect(() => {
            null == n && (0, c.cR)();
        }, [n]),
        (0, r.jsx)("div", {
            className: g.kL,
            children: (0, r.jsxs)(l.nVY, {
                label: m.intl.string(h.default.USIXU7),
                children: [
                    (0, r.jsx)(l.dOG, {
                        checked: e,
                        description: m.intl.string(h.default["5MdB3j"]),
                        onChange: d.dm.updateSetting,
                        label: m.intl.string(h.default.zkEceS),
                    }),
                    e
                        ? (0, r.jsx)(l.ZpM, {
                              className: g.MT,
                              type: l.ZpM.Types.CUSTOM,
                              outline: !0,
                              children: (0, r.jsxs)(s.s, {
                                  justify: s.s.Justify.END,
                                  children: [
                                      (0, r.jsx)(s.s.Child, {
                                          children: (0, r.jsx)(l.Text, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: m.intl.string(h.default.xAVm7K),
                                          }),
                                      }),
                                      (0, r.jsx)(l.DUT, {
                                          children: (0, r.jsx)(a.N_, {
                                              onClick: f.default,
                                              to: {
                                                  pathname: p.BVt.FAMILY_CENTER,
                                                  state: { scrollRestoration: !1 },
                                              },
                                              children: m.intl.string(h.default.cUIXFY),
                                          }),
                                      }),
                                      (0, r.jsx)(l.fkz, {
                                          icon: l.EdP,
                                          className: g.UE,
                                          disableColor: !0,
                                      }),
                                  ],
                              }),
                          })
                        : null,
                    (0, r.jsx)(l.dOG, {
                        checked: !!t[_.HO.FAMILY_CENTER_DIGEST],
                        description: m.intl.string(h.default.y34S46),
                        onChange: E,
                        label: m.intl.string(h.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
