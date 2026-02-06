n.d(t, { A: () => h, g: () => v });
var r = n(627968),
    l = n(64700),
    i = n(512750),
    s = n(311907),
    o = n(397927),
    a = n(997509),
    u = n(645619),
    d = n(128069),
    c = n(363487),
    p = n(915667),
    m = n(568065),
    A = n(652215),
    _ = n(333354),
    g = n(985018),
    f = n(870166),
    x = n(849630);
function v(e, t) {
    let v = (0, c.A)(t) ?? !1,
        h = (0, s.bG)([u.A], () => u.A.getStateForGuild(t)?.allPowerups),
        j = (0, s.bG)([u.A], () => u.A.getStateForGuild(t)?.unlockedPowerups),
        b = (0, d.RA)(t, "usePowerupGroupConfig");
    return l.useMemo(() => {
        let l = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let {
                                  guildId: t,
                                  canUseBoosts: l,
                                  allPowerups: s,
                                  unlockedPowerups: u,
                                  isWaveTwoEnabled: d,
                              } = e,
                              c = g.intl.string(_.default.KC9HRW),
                              v = g.intl.string(_.default.GJiSmP),
                              h = s?.[i.SL],
                              j = u?.[i.SL] != null,
                              b = g.intl.string(_.default["/egwJA"]),
                              E = j ? void 0 : g.intl.string(_.default.W6Vwn3),
                              I = j ? void 0 : g.intl.string(_.default.lvk1Gc),
                              S = j ? g.intl.string(_.default["9CfkLO"]) : g.intl.string(g.t["+7XY31"]),
                              w = j ? "secondary" : "expressive",
                              C = l
                                  ? () => {
                                        j
                                            ? a.A.open(t, A.BEX.TAG, A.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != h && (0, p.A)(t, h),
                                            (0, o.s7G)();
                                    }
                                  : void 0,
                              N = d ? m.m_ : void 0;
                          return {
                              title: c,
                              description: v,
                              openModal: function (e) {
                                  let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, o.mMO)(
                                      async () => {
                                          let { default: i } = await n.e("56065").then(n.bind(n, 534904));
                                          return (n) =>
                                              (0, r.jsx)(i, {
                                                  guildId: t,
                                                  title: c,
                                                  description: g.intl.string(_.default.BBRFRd),
                                                  powerups: e,
                                                  newPowerupSkuIdSet: N,
                                                  forceStaticImages: d,
                                                  footerInfoText: I,
                                                  footerAction:
                                                      l && null != C && null != S
                                                          ? {
                                                                variant: w,
                                                                text: S,
                                                                icon: "expressive" === w ? o._Jp : void 0,
                                                                onClick: C,
                                                            }
                                                          : void 0,
                                                  ...n,
                                              });
                                      },
                                      { onCloseCallback: i?.onModalClose },
                                  );
                              },
                              viewCta: b,
                              viewCtaTooltip: E,
                              badge: d ? "new" : void 0,
                              newPowerupSkuIdSet: N,
                              image: { staticUrl: x.A, animatedUrl: f.A },
                              forceStaticImages: d,
                          };
                      })({ guildId: t, canUseBoosts: v, allPowerups: h, unlockedPowerups: j, isWaveTwoEnabled: b })
                    : void 0,
            s = {};
        for (let t of e) {
            let e = l(t);
            null != e && (s[t] = e);
        }
        return s;
    }, [e, t, v, h, j, b]);
}
function h(e, t) {
    return v([e], t)[e];
}
