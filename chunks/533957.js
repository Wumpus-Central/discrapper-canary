var t = a(477900);
a(582128);
var i = a(855986),
    c = a(477782),
    d = a(192308),
    l = a(576705),
    r = a(652215),
    s = a(792996);
a.d(
    n,
    {},
    {
        A: function (e, n) {
            let p = (0, i.bG)([l.A], () => l.A.can(r.xBc.MANAGE_CHANNELS, e), [e]);
            return __OVERLAY__ || !p
                ? null
                : (0, t.jsx)(c.Dr, {
                      id: "clone-channel",
                      label: s.intl.string(s.t.dEaPc4),
                      action: () =>
                          (0, d.mM)(async () => {
                              let { default: i } = await Promise.all([
                                  a.e(377476),
                                  a.e(597622),
                                  a.e(746309),
                                  a.e(778799),
                                  a.e(844780),
                                  a.e(470068),
                                  a.e(203589),
                                  a.e(692513),
                                  a.e(460773),
                                  a.e(208018),
                                  a.e(589916),
                                  a.e(298107),
                                  a.e(526778),
                                  a.e(590814),
                                  a.e(258709),
                                  a.e(819193),
                                  a.e(507775),
                                  a.e(102657),
                                  a.e(524521),
                                  a.e(358608),
                                  a.e(637038),
                                  a.e(640317),
                              ]).then(a.bind(a, 410380));
                              return (a) =>
                                  (0, t.jsx)(i, {
                                      ...a,
                                      channelType: e.type,
                                      guildId: n.id,
                                      categoryId: e.parent_id,
                                      cloneChannelId: e.id,
                                  });
                          }),
                  });
        },
    },
);
