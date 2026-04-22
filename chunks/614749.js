l.d(t, { A: () => S });
var n = l(627968),
    i = l(64700),
    s = l(936504),
    a = l(946015),
    r = l(311907),
    d = l(270003),
    c = l(243721),
    u = l(359778),
    o = l(834730),
    x = l(939249),
    h = l(777666),
    m = l(935286),
    g = l(100406),
    j = l(878460),
    A = l(253932),
    v = l(779733),
    f = l(652215),
    E = l(431144),
    N = l(602339),
    p = l(985018),
    T = l(192280);
let S = () => {
    let e = A.dm.useSetting(),
        { categories: t, initialized: l } = (0, r.cf)([j.A], () => j.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == l && (0, g.cR)();
        }, [l]),
        (0, n.jsx)("div", {
            className: T.kL,
            children: (0, n.jsxs)(d.n, {
                label: p.intl.string(N.default.USIXU7),
                children: [
                    (0, n.jsx)(c.d, {
                        checked: e,
                        description: p.intl.string(N.default["5MdB3j"]),
                        onChange: A.dm.updateSetting,
                        label: p.intl.string(N.default.zkEceS),
                    }),
                    e
                        ? (0, n.jsx)(u.Z, {
                              className: T.MT,
                              type: u.Z.Types.CUSTOM,
                              outline: !0,
                              children: (0, n.jsxs)(a.s, {
                                  justify: a.s.Justify.END,
                                  children: [
                                      (0, n.jsx)(a.s.Child, {
                                          children: (0, n.jsx)(o.E, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: p.intl.string(N.default.xAVm7K),
                                          }),
                                      }),
                                      (0, n.jsx)(x.D, {
                                          children: (0, n.jsx)(s.N_, {
                                              onClick: v.default,
                                              to: { pathname: f.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: p.intl.string(N.default.cUIXFY),
                                          }),
                                      }),
                                      (0, n.jsx)(h.fk, { icon: m.E, className: T.UE, disableColor: !0 }),
                                  ],
                              }),
                          })
                        : null,
                    (0, n.jsx)(c.d, {
                        checked: !!t[E.HO.FAMILY_CENTER_DIGEST],
                        description: p.intl.string(N.default.y34S46),
                        onChange: function (e) {
                            (0, g.CA)(E.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: p.intl.string(N.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
