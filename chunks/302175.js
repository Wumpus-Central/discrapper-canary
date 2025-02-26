n.d(t, { Z: () => g }), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(793030),
    a = n(442837),
    s = n(245004),
    l = n(713081),
    c = n(905128),
    u = n(50101),
    d = n(535396),
    f = n(783684),
    _ = n(388032),
    p = n(597282),
    h = n(952567);
function g(e) {
    var t;
    let { guild: n } = e,
        g = (0, u.Ek)(n, 'GuildPowerupsMarketingPowerupCards');
    i.useEffect(() => {
        g && (0, l.T7)(n.id);
    }, [g, n.id]);
    let m = (0, a.e7)(
        [c.Z],
        () => {
            var e;
            return null === (e = c.Z.getStateForGuild(n.id)) || void 0 === e ? void 0 : e.catalog;
        },
        [n.id]
    );
    return g && null != m
        ? (0, r.jsxs)('div', {
              className: p.container,
              children: [
                  (0, r.jsx)(o.X6, {
                      variant: 'heading-xxl/extrabold',
                      children: _.NW.string(f.Z.p6HUDQ)
                  }),
                  (0, r.jsx)(o.xv, {
                      variant: 'text-lg/medium',
                      children: _.NW.string(f.Z.MYYPa2)
                  }),
                  (0, r.jsx)('div', {
                      className: p.powerupsContainer,
                      children:
                          null === (t = m[d.U.PERK]) || void 0 === t
                              ? void 0
                              : t.map((e, t) =>
                                    (0, r.jsx)(
                                        s.Q,
                                        {
                                            animatedCard: !0,
                                            heading: e.title,
                                            description: e.description,
                                            imgSrc: h,
                                            label: _.NW.formatToPlainString(f.Z.QOacIS, { quantity: e.cost }),
                                            isNewPerk: !0
                                        },
                                        t
                                    )
                                )
                  })
              ]
          })
        : null;
}
