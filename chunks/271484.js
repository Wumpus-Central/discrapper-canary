n.d(t, { A: () => v, g: () => A });
var r = n(627968),
    i = n(64700),
    s = n(512750),
    l = n(311907),
    o = n(397927),
    a = n(997509),
    d = n(645619),
    u = n(363487),
    c = n(915667),
    m = n(568065),
    p = n(652215),
    _ = n(333354),
    f = n(985018),
    g = n(870166),
    x = n(849630);
function A(e, t) {
    let A = (0, u.A)(t) ?? !1,
        v = (0, l.bG)([d.A], () => d.A.getStateForGuild(t)?.allPowerups),
        h = (0, l.bG)([d.A], () => d.A.getStateForGuild(t)?.unlockedPowerups);
    return i.useMemo(() => {
        let i = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: l, unlockedPowerups: d } = e,
                              u = f.intl.string(_.default.KC9HRW),
                              A = f.intl.string(_.default.GJiSmP),
                              v = l?.[s.SL],
                              h = d?.[s.SL] != null,
                              E = f.intl.string(_.default["/egwJA"]),
                              j = h ? void 0 : f.intl.string(_.default.W6Vwn3),
                              b = h ? void 0 : f.intl.string(_.default.lvk1Gc),
                              I = h ? f.intl.string(_.default["9CfkLO"]) : f.intl.string(f.t["+7XY31"]),
                              S = h ? "secondary" : "expressive",
                              C = i
                                  ? () => {
                                        h
                                            ? a.A.open(t, p.BEX.TAG, p.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != v && (0, c.A)(t, v),
                                            (0, o.s7G)();
                                    }
                                  : void 0,
                              w = m.m_;
                          return {
                              title: u,
                              description: A,
                              openModal: function (e) {
                                  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, o.mMO)(
                                      async () => {
                                          let { default: s } = await n.e("56065").then(n.bind(n, 534904));
                                          return (n) =>
                                              (0, r.jsx)(s, {
                                                  guildId: t,
                                                  title: u,
                                                  description: f.intl.string(_.default.BBRFRd),
                                                  powerups: e,
                                                  newPowerupSkuIdSet: w,
                                                  forceStaticImages: !0,
                                                  footerInfoText: b,
                                                  footerAction:
                                                      i && null != C && null != I
                                                          ? {
                                                                variant: S,
                                                                text: I,
                                                                icon: "expressive" === S ? o._Jp : void 0,
                                                                onClick: C,
                                                            }
                                                          : void 0,
                                                  ...n,
                                              });
                                      },
                                      { onCloseCallback: s?.onModalClose },
                                  );
                              },
                              viewCta: E,
                              viewCtaTooltip: j,
                              badge: "new",
                              newPowerupSkuIdSet: w,
                              image: { staticUrl: x.A, animatedUrl: g.A },
                              forceStaticImages: !0,
                          };
                      })({ guildId: t, canUseBoosts: A, allPowerups: v, unlockedPowerups: h })
                    : void 0,
            l = {};
        for (let t of e) {
            let e = i(t);
            null != e && (l[t] = e);
        }
        return l;
    }, [e, t, A, v, h]);
}
function v(e, t) {
    return A([e], t)[e];
}
