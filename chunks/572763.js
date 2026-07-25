n.d(i, { A: () => h });
var e = n(627968);
n(64700);
var l = n(17928),
    a = n(192308),
    r = n(477782),
    s = n(967198),
    d = n(5180),
    c = n(652215),
    u = n(375708);
function h(t) {
    let i = (0, l.bG)([s.A], () => s.A.getGuildId()),
        h = t.type === c.rbe.GUILD_CATEGORY;
    return __OVERLAY__ || !(0, d.ai)(i)
        ? null
        : (0, e.jsx)(r.Dr, {
              id: "set-channel-nickname",
              label: h ? u.intl.string(u.t.xXYKiP) : u.intl.string(u.t.dilOF6),
              action: function () {
                  (0, a.openModalLazy)(async () => {
                      let { default: i } = await Promise.all([n.e("44531"), n.e("83504")]).then(n.bind(n, 872243));
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
}
