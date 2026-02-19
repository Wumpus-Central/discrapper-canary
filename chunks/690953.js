"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(397927),
    r = n(882997),
    a = n(731474),
    o = n(383501),
    c = n(977997),
    d = n(458829),
    u = n(857253),
    h = n(694967),
    A = n(431516),
    p = n(652215),
    g = n(985018);
function m(e) {
    let t = (0, s.bG)([o.A], () => o.A.getChannelId() === e.id),
        m = (0, u.A)(),
        _ = m?.channelId === e.id,
        f = (0, a.J)(e) && !e.isPrivate(),
        x = (0, a.A)(e),
        C = (!(0, s.bG)([c.A], () => c.A.isInChannel(e.id)) && x) || f,
        E = (0, h.A)();
    if (!_ && 0 === E.length) return null;
    let I = (0, A.A)(void 0);
    return _
        ? (0, i.jsx)(l.Drp, {
              label: g.intl.string(g.t.PlwgdU),
              id: "handoff",
              action: () => {
                  (0, d.x)(m);
              },
              icon: I,
              leadingAccessory: { type: "icon", icon: I },
              disabled: C,
          })
        : E.map((s) => {
              var a, o;
              let c = (0, A.A)(s.type);
              return (0, i.jsx)(
                  l.Drp,
                  {
                      id: `transfer-${s.type}-${s.id}`,
                      label:
                          ((a = s.type),
                          (o = t),
                          a === p.fg2.XBOX
                              ? o
                                  ? g.intl.string(g.t["qVE/VF"])
                                  : g.intl.string(g.t.E8euSk)
                              : a === p.fg2.PLAYSTATION
                                ? o
                                    ? g.intl.string(g.t.vzfxmY)
                                    : g.intl.string(g.t.QxEYDj)
                                : a === p.fg2.PLAYSTATION_STAGING
                                  ? o
                                      ? g.intl.string(g.t.BDiXtV)
                                      : g.intl.string(g.t["bhdB9+"])
                                  : void 0),
                      action: () => {
                          !s.twoWayLink || s.revoked
                              ? (0, r.A)({ platformType: s.type, location: "Console Transfer Item" })
                              : s.type === p.fg2.XBOX
                                ? (0, l.mMO)(async () => {
                                      let { default: t } = await Promise.all([n.e("97484"), n.e("67670")]).then(
                                          n.bind(n, 188072),
                                      );
                                      return (n) => (0, i.jsx)(t, { ...n, channel: e });
                                  })
                                : (s.type === p.fg2.PLAYSTATION || s.type === p.fg2.PLAYSTATION_STAGING) &&
                                  (0, l.mMO)(async () => {
                                      let { default: t } = await n.e("71282").then(n.bind(n, 315337));
                                      return (n) => (0, i.jsx)(t, { ...n, platform: s.type, channel: e });
                                  });
                      },
                      icon: c,
                      leadingAccessory: { type: "icon", icon: c },
                      disabled: C,
                  },
                  s.id,
              );
          });
}
