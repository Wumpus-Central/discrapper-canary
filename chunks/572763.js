n.d(i, { A: () => u });
var e = n(627968);
n(64700);
var l = n(17928),
    a = n(192308),
    r = n(477782),
    s = n(967198),
    d = n(652215),
    c = n(375708);
function u(t) {
    let i = (0, l.bG)([s.A], () => s.A.getGuildId()),
        u = t.type === d.rbe.GUILD_CATEGORY;
    return __OVERLAY__ || i !== d.YYv
        ? null
        : (0, e.jsx)(r.Dr, {
              id: "set-channel-nickname",
              label: u ? c.intl.string(c.t.xXYKiP) : c.intl.string(c.t.dilOF6),
              action: function () {
                  (0, a.openModalLazy)(async () => {
                      let { default: i } = await Promise.all([n.e("63787"), n.e("83504")]).then(n.bind(n, 872243));
                      return (n) =>
                          (0, e.jsx)(i, {
                              ...n,
                              channelId: t.id,
                              heading: u ? c.intl.string(c.t.xXYKiP) : c.intl.string(c.t.dilOF6),
                              formTitle: u ? c.intl.string(c.t.OCAkGP) : c.intl.string(c.t["621LJD"]),
                          });
                  });
              },
          });
}
