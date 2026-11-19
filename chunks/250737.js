var e = n(477900);
n(582128);
var l = n(855986),
    r = n(192308),
    a = n(477782),
    s = n(967198),
    d = n(5180),
    c = n(652215),
    u = n(792996);
n.d(
    i,
    {},
    {
        A: function (t) {
            let i = (0, l.bG)([s.A], () => s.A.getGuildId()),
                h = t.type === c.rbe.GUILD_CATEGORY;
            return __OVERLAY__ || !(0, d.ai)(i)
                ? null
                : (0, e.jsx)(a.Dr, {
                      id: "set-channel-nickname",
                      label: h ? u.intl.string(u.t.xXYKiP) : u.intl.string(u.t.dilOF6),
                      action: function () {
                          (0, r.mM)(async () => {
                              let { default: i } = await Promise.all([n.e(164474), n.e(483504)]).then(
                                  n.bind(n, 872243),
                              );
                              return (n) =>
                                  (0, e.jsx)(i, {
                                      ...n,
                                      channelId: t.id,
                                      heading: h ? u.intl.string(u.t.xXYKiP) : u.intl.string(u.t.dilOF6),
                                      formTitle: h ? u.intl.string(u.t.OCAkGP) : u.intl.string(u.t["621LJD"]),
                                  });
                          });
                      },
                  });
        },
    },
);
