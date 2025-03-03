n.d(t, { Z: () => h }), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(793030),
    a = n(245004),
    s = n(713081),
    l = n(50101),
    c = n(111360),
    u = n(535396),
    d = n(730621),
    f = n(388032),
    _ = n(840987),
    p = n(952567);
function h(e) {
    var t;
    let { guild: n } = e,
        h = (0, l.Ek)(n, 'GuildPowerupsMarketingPowerupCards');
    i.useEffect(() => {
        h && (0, s.T7)(n.id);
    }, [h, n.id]);
    let g = (0, c.Z)(n.id);
    return h && null != g
        ? (0, r.jsxs)('div', {
              className: _.container,
              children: [
                  (0, r.jsx)(o.X6, {
                      variant: 'heading-xxl/extrabold',
                      children: f.NW.string(d.Z.p6HUDQ)
                  }),
                  (0, r.jsx)(o.xv, {
                      variant: 'text-lg/medium',
                      children: f.NW.string(d.Z.MYYPa2)
                  }),
                  (0, r.jsx)('div', {
                      className: _.powerupsContainer,
                      children:
                          null === (t = g[u.U.PERK]) || void 0 === t
                              ? void 0
                              : t.map((e, t) =>
                                    (0, r.jsx)(
                                        a.Q,
                                        {
                                            animatedCard: !0,
                                            heading: e.title,
                                            description: e.description,
                                            imgSrc: p,
                                            label: f.NW.formatToPlainString(d.Z.QOacIS, { quantity: e.cost }),
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
