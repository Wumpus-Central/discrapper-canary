t.d(n, { A: () => f });
var l = t(627968);
t(64700);
var i = t(417597),
    a = t(192308),
    s = t(477782),
    r = t(882997),
    o = t(731474),
    c = t(383501),
    u = t(977997),
    d = t(458829),
    A = t(857253),
    h = t(694967),
    p = t(431516),
    m = t(652215),
    g = t(985018);
function f(e) {
    let n = (0, i.bG)([c.A], () => c.A.getChannelId() === e.id),
        f = (0, A.A)(),
        C = f?.channelId === e.id,
        E = (0, o.J)(e) && !e.isPrivate(),
        v = (0, o.A)(e),
        I = (!(0, i.bG)([u.A], () => u.A.isInChannel(e.id)) && v) || E,
        x = (0, h.A)();
    if (!C && 0 === x.length) return null;
    let T = (0, p.A)(void 0);
    return C
        ? (0, l.jsx)(s.Dr, {
              label: g.intl.string(g.t.PlwgdU),
              id: "handoff",
              action: () => {
                  (0, d.x)(f);
              },
              icon: T,
              leadingAccessory: { type: "icon", icon: T },
              disabled: I,
          })
        : x.map((i) => {
              var o, c;
              let u = (0, p.A)(i.type);
              return (0, l.jsx)(
                  s.Dr,
                  {
                      id: `transfer-${i.type}-${i.id}`,
                      label:
                          ((o = i.type),
                          (c = n),
                          o === m.fg2.XBOX
                              ? c
                                  ? g.intl.string(g.t["qVE/VF"])
                                  : g.intl.string(g.t.E8euSk)
                              : o === m.fg2.PLAYSTATION
                                ? c
                                    ? g.intl.string(g.t.vzfxmY)
                                    : g.intl.string(g.t.QxEYDj)
                                : o === m.fg2.PLAYSTATION_STAGING
                                  ? c
                                      ? g.intl.string(g.t.BDiXtV)
                                      : g.intl.string(g.t["bhdB9+"])
                                  : void 0),
                      action: () => {
                          !i.twoWayLink || i.revoked
                              ? (0, r.A)({ platformType: i.type, location: "Console Transfer Item" })
                              : i.type === m.fg2.XBOX
                                ? (0, a.openModalLazy)(async () => {
                                      let { default: n } = await Promise.all([t.e("66535"), t.e("67670")]).then(
                                          t.bind(t, 188072),
                                      );
                                      return (t) => (0, l.jsx)(n, { ...t, channel: e });
                                  })
                                : (i.type === m.fg2.PLAYSTATION || i.type === m.fg2.PLAYSTATION_STAGING) &&
                                  (0, a.openModalLazy)(async () => {
                                      let { default: n } = await t.e("71282").then(t.bind(t, 315337));
                                      return (t) => (0, l.jsx)(n, { ...t, platform: i.type, channel: e });
                                  });
                      },
                      icon: u,
                      leadingAccessory: { type: "icon", icon: u },
                      disabled: I,
                  },
                  i.id,
              );
          });
}
