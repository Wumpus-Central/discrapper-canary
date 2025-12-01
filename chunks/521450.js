n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    a = n(319498),
    o = n(435935),
    s = n(442837),
    l = n(481060),
    c = n(960412),
    u = n(151662),
    d = n(695346),
    f = n(342386),
    p = n(981631),
    _ = n(930441),
    m = n(744038),
    h = n(388032),
    g = n(286661);
let E = () => {
    let e = d.Ex.useSetting(),
        { categories: t, initialized: n } = (0, s.cj)([u.Z], () => u.Z.getEmailSettings());
    function E(e) {
        (0, c.pR)(_.$Z.FAMILY_CENTER_DIGEST, e);
    }
    return (
        i.useEffect(() => {
            null == n && (0, c.Y7)();
        }, [n]),
        (0, r.jsx)("div", {
            className: g.container,
            children: (0, r.jsxs)(l.C3N, {
                label: h.intl.string(m.default.USIXU7),
                children: [
                    (0, r.jsx)(l.rsf, {
                        checked: e,
                        description: h.intl.string(m.default["5MdB3j"]),
                        onChange: d.Ex.updateSetting,
                        label: h.intl.string(m.default.zkEceS),
                    }),
                    e
                        ? (0, r.jsx)(l.Zbd, {
                              className: g.enableCard,
                              type: l.Zbd.Types.CUSTOM,
                              outline: !0,
                              children: (0, r.jsxs)(o.k, {
                                  justify: o.k.Justify.END,
                                  children: [
                                      (0, r.jsx)(o.k.Child, {
                                          children: (0, r.jsx)(l.Text, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: h.intl.string(m.default.xAVm7K),
                                          }),
                                      }),
                                      (0, r.jsx)(l.P3F, {
                                          children: (0, r.jsx)(a.rU, {
                                              onClick: f.default,
                                              to: {
                                                  pathname: p.Z5c.FAMILY_CENTER,
                                                  state: { scrollRestoration: !1 },
                                              },
                                              children: h.intl.string(m.default.cUIXFY),
                                          }),
                                      }),
                                      (0, r.jsx)(l.G2e, {
                                          icon: l.ZSh,
                                          className: g.arrow,
                                          disableColor: !0,
                                      }),
                                  ],
                              }),
                          })
                        : null,
                    (0, r.jsx)(l.rsf, {
                        checked: !!t[_.$Z.FAMILY_CENTER_DIGEST],
                        description: h.intl.string(m.default.y34S46),
                        onChange: E,
                        label: h.intl.string(m.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
