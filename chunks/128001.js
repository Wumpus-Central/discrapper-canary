i.d(e, { A: () => c });
var t = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    a = i(967198),
    d = i(652215),
    u = i(985018);
function c(n) {
    let e = (0, l.bG)([a.A], () => a.A.getGuildId()),
        c = n.type === d.rbe.GUILD_CATEGORY;
    return __OVERLAY__ || e !== d.YYv
        ? null
        : (0, t.jsx)(r.Drp, {
              id: "set-channel-nickname",
              label: c ? u.intl.string(u.t.xXYKiP) : u.intl.string(u.t.dilOF6),
              action: function () {
                  (0, r.mMO)(async () => {
                      let { default: e } = await i.e("83504").then(i.bind(i, 872243));
                      return (i) =>
                          (0, t.jsx)(e, {
                              ...i,
                              channelId: n.id,
                              heading: c ? u.intl.string(u.t.xXYKiP) : u.intl.string(u.t.dilOF6),
                              formTitle: c ? u.intl.string(u.t.OCAkGP) : u.intl.string(u.t["621LJD"]),
                          });
                  });
              },
          });
}
