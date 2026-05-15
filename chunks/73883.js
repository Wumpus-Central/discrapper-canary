n.d(t, { A: () => w });
var l = n(627968);
n(64700);
var i = n(702841),
    a = n(192308),
    r = n(477782),
    A = n(968309),
    o = n(17928),
    s = n(71393),
    d = n(576705),
    c = n(977997),
    f = n(871237),
    u = n(818348),
    g = n(763827),
    p = n(284009),
    y = n.n(p),
    h = n(827343),
    T = n(730852),
    I = n(235058),
    S = n(469802),
    b = n(350701),
    G = n(857253),
    N = n(30370),
    O = n(403362),
    P = n(652215),
    v = n(565787),
    k = n(481606),
    L = n(790381),
    X = n(266080),
    m = n(544105);
function C(e) {
    return null != e ? (0, v.k)(e === m.f$.XBOX ? X.A : L.A) : k.q;
}
var Y = n(375708);
function w(e) {
    let t = (0, i.bG)([g.A], () => g.A.getChannelId() === e.id),
        p = (0, G.A)(),
        v = p?.channelId === e.id,
        k = (0, o.bG)([d.A], () => null == e || !d.A.can(u.xB.CONNECT, e), [e]) && !e.isPrivate(),
        L = (0, o.bG)([c.A, s.A], () => (0, f.Pd)(e, c.A, s.A)),
        X = (!(0, i.bG)([c.A], () => c.A.isInChannel(e.id)) && L) || k,
        m = (0, o.yK)([N.A], () =>
            [
                N.A.getAccount(null, P.fg2.XBOX),
                N.A.getAccount(null, P.fg2.PLAYSTATION),
                N.A.getAccount(null, P.fg2.PLAYSTATION_STAGING),
            ].filter(O.Vq),
        );
    if (!v && 0 === m.length) return null;
    let w = C(void 0);
    return v
        ? (0, l.jsx)(r.Dr, {
              label: Y.intl.string(Y.t.PlwgdU),
              id: "handoff",
              action: () => {
                  let e, t;
                  (e = p.sessionId ?? ""),
                      (0, S.Fc)(e),
                      (0, S.ZG)(),
                      (t = void 0 ?? p.channelId),
                      y()(null != t, "attempted to transfer to unknown channel"),
                      p.selfMute !== I.Ay.isSelfMute() && h.A.toggleSelfMute(),
                      p.selfDeaf !== I.Ay.isSelfDeaf() && h.A.toggleSelfDeaf(),
                      (0, b.A)(t, "discord_client", e),
                      T.default.selectVoiceChannel(t, !1);
              },
              icon: w,
              leadingAccessory: { type: "icon", icon: w },
              disabled: X,
          })
        : m.map((i) => {
              var o, s;
              let d = C(i.type);
              return (0, l.jsx)(
                  r.Dr,
                  {
                      id: `transfer-${i.type}-${i.id}`,
                      label:
                          ((o = i.type),
                          (s = t),
                          o === P.fg2.XBOX
                              ? s
                                  ? Y.intl.string(Y.t["qVE/VF"])
                                  : Y.intl.string(Y.t.E8euSk)
                              : o === P.fg2.PLAYSTATION
                                ? s
                                    ? Y.intl.string(Y.t.vzfxmY)
                                    : Y.intl.string(Y.t.QxEYDj)
                                : o === P.fg2.PLAYSTATION_STAGING
                                  ? s
                                      ? Y.intl.string(Y.t.BDiXtV)
                                      : Y.intl.string(Y.t["bhdB9+"])
                                  : void 0),
                      action: () => {
                          !i.twoWayLink || i.revoked
                              ? (0, A.A)({ platformType: i.type, location: "Console Transfer Item" })
                              : i.type === P.fg2.XBOX
                                ? (0, a.openModalLazy)(async () => {
                                      let { default: t } = await Promise.all([
                                          n.e("54266"),
                                          n.e("76962"),
                                          n.e("95429"),
                                          n.e("98189"),
                                          n.e("48370"),
                                          n.e("24227"),
                                      ]).then(n.bind(n, 832910));
                                      return (n) => (0, l.jsx)(t, { ...n, channel: e });
                                  })
                                : (i.type === P.fg2.PLAYSTATION || i.type === P.fg2.PLAYSTATION_STAGING) &&
                                  (0, a.openModalLazy)(async () => {
                                      let { default: t } = await Promise.all([
                                          n.e("685"),
                                          n.e("25861"),
                                          n.e("71210"),
                                          n.e("38035"),
                                      ]).then(n.bind(n, 14860));
                                      return (n) => (0, l.jsx)(t, { ...n, platform: i.type, channel: e });
                                  });
                      },
                      icon: d,
                      leadingAccessory: { type: "icon", icon: d },
                      disabled: X,
                  },
                  i.id,
              );
          });
}
