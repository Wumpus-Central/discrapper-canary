n.d(t, { Z: () => E });
var r = n(951288),
    i = n(647438),
    a = n(799899),
    o = n(435935),
    s = n(442837),
    l = n(481060),
    c = n(960412),
    u = n(151662),
    d = n(695346),
    f = n(342386),
    _ = n(981631),
    p = n(930441),
    h = n(597754),
    m = n(388032),
    g = n(286661);
let E = () => {
    let e = d.Ex.useSetting(),
        { categories: t, initialized: n } = (0, s.cj)([u.Z], () => u.Z.getEmailSettings());
    function E(e) {
        (0, c.pR)(p.$Z.FAMILY_CENTER_DIGEST, e);
    }
    return (
        i.useEffect(() => {
            null == n && (0, c.Y7)();
        }, [n]),
        (0, r.jsx)("div", {
            className: g.container,
            children: (0, r.jsxs)(l.C3N, {
                label: m.intl.string(h.default.USIXU7),
                children: [
                    (0, r.jsx)(l.rsf, {
                        checked: e,
                        description: m.intl.string(h.default["5MdB3j"]),
                        onChange: d.Ex.updateSetting,
                        label: m.intl.string(h.default.zkEceS),
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
                                              children: m.intl.string(h.default.xAVm7K),
                                          }),
                                      }),
                                      (0, r.jsx)(l.P3F, {
                                          children: (0, r.jsx)(a.rU, {
                                              onClick: f.default,
                                              to: {
                                                  pathname: _.Z5c.FAMILY_CENTER,
                                                  state: { scrollRestoration: !1 },
                                              },
                                              children: m.intl.string(h.default.cUIXFY),
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
                        checked: !!t[p.$Z.FAMILY_CENTER_DIGEST],
                        description: m.intl.string(h.default.y34S46),
                        onChange: E,
                        label: m.intl.string(h.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
