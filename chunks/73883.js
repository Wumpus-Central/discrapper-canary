e.d(n, { A: () => O });
var i = e(627968);
e(64700);
var l = e(702841),
    a = e(192308),
    s = e(477782),
    r = e(773952),
    d = e(17928),
    c = e(71393),
    o = e(576705),
    A = e(977997),
    u = e(147036),
    g = e(818348),
    h = e(763827),
    f = e(284009),
    x = e.n(f),
    p = e(827343),
    y = e(956793),
    v = e(969341),
    j = e(108713),
    C = e(350701),
    b = e(857253),
    G = e(30370),
    N = e(403362),
    m = e(652215),
    E = e(565787),
    T = e(481606),
    X = e(790381),
    L = e(266080),
    S = e(544105);
function I(t) {
    return null != t ? (0, E.k)(t === S.f$.XBOX ? L.A : X.A) : T.q;
}
var _ = e(985018);
function O(t) {
    let n = (0, l.bG)([h.A], () => h.A.getChannelId() === t.id),
        f = (0, b.A)(),
        E = f?.channelId === t.id,
        T = (0, d.bG)([o.A], () => null == t || !o.A.can(g.xB.CONNECT, t), [t]) && !t.isPrivate(),
        X = (0, d.bG)([A.A, c.A], () => (0, u.Pd)(t, A.A, c.A)),
        L = (!(0, l.bG)([A.A], () => A.A.isInChannel(t.id)) && X) || T,
        S = (0, d.yK)([G.A], () =>
            [
                G.A.getAccount(null, m.fg2.XBOX),
                G.A.getAccount(null, m.fg2.PLAYSTATION),
                G.A.getAccount(null, m.fg2.PLAYSTATION_STAGING),
            ].filter(N.Vq),
        );
    if (!E && 0 === S.length) return null;
    let O = I(void 0);
    return E
        ? (0, i.jsx)(s.Dr, {
              label: _.intl.string(_.t.PlwgdU),
              id: "handoff",
              action: () => {
                  let t, n;
                  (t = f.sessionId ?? ""),
                      (0, j.Fc)(t),
                      (0, j.ZG)(),
                      (n = void 0 ?? f.channelId),
                      x()(null != n, "attempted to transfer to unknown channel"),
                      f.selfMute !== v.Ay.isSelfMute() && p.A.toggleSelfMute(),
                      f.selfDeaf !== v.Ay.isSelfDeaf() && p.A.toggleSelfDeaf(),
                      (0, C.A)(n, "discord_client", t),
                      y.default.selectVoiceChannel(n, !1);
              },
              icon: O,
              leadingAccessory: { type: "icon", icon: O },
              disabled: L,
          })
        : S.map((l) => {
              var d, c;
              let o = I(l.type);
              return (0, i.jsx)(
                  s.Dr,
                  {
                      id: `transfer-${l.type}-${l.id}`,
                      label:
                          ((d = l.type),
                          (c = n),
                          d === m.fg2.XBOX
                              ? c
                                  ? _.intl.string(_.t["qVE/VF"])
                                  : _.intl.string(_.t.E8euSk)
                              : d === m.fg2.PLAYSTATION
                                ? c
                                    ? _.intl.string(_.t.vzfxmY)
                                    : _.intl.string(_.t.QxEYDj)
                                : d === m.fg2.PLAYSTATION_STAGING
                                  ? c
                                      ? _.intl.string(_.t.BDiXtV)
                                      : _.intl.string(_.t["bhdB9+"])
                                  : void 0),
                      action: () => {
                          !l.twoWayLink || l.revoked
                              ? (0, r.A)({ platformType: l.type, location: "Console Transfer Item" })
                              : l.type === m.fg2.XBOX
                                ? (0, a.openModalLazy)(async () => {
                                      let { default: n } = await Promise.all([e.e("53242"), e.e("54682")]).then(
                                          e.bind(e, 832910),
                                      );
                                      return (e) => (0, i.jsx)(n, { ...e, channel: t });
                                  })
                                : (l.type === m.fg2.PLAYSTATION || l.type === m.fg2.PLAYSTATION_STAGING) &&
                                  (0, a.openModalLazy)(async () => {
                                      let { default: n } = await e.e("38035").then(e.bind(e, 14860));
                                      return (e) => (0, i.jsx)(n, { ...e, platform: l.type, channel: t });
                                  });
                      },
                      icon: o,
                      leadingAccessory: { type: "icon", icon: o },
                      disabled: L,
                  },
                  l.id,
              );
          });
}
