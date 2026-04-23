n.d(t, { A: () => v, g: () => h });
var r = n(627968),
    i = n(64700),
    l = n(512750),
    s = n(311907),
    a = n(192308),
    o = n(104510),
    d = n(997509),
    u = n(645619),
    c = n(363487),
    _ = n(915667),
    m = n(568065),
    p = n(652215),
    A = n(853513),
    x = n(985018),
    g = n(870166),
    f = n(627249);
function h(e, t) {
    let h = (0, c.A)(t) ?? !1,
        v = (0, s.bG)([u.A], () => u.A.getStateForGuild(t)?.allPowerups),
        E = (0, s.bG)([u.A], () => u.A.getStateForGuild(t)?.unlockedPowerups);
    return i.useMemo(() => {
        let i = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: i, allPowerups: s, unlockedPowerups: u } = e,
                              c = x.intl.string(A.default.KC9HRW),
                              h = x.intl.string(A.default.GJiSmP),
                              v = s?.[l.SL],
                              E = u?.[l.SL] != null,
                              S = x.intl.string(A.default["/egwJA"]),
                              I = E ? void 0 : x.intl.string(A.default.W6Vwn3),
                              b = E ? void 0 : x.intl.string(A.default.lvk1Gc),
                              j = E ? x.intl.string(A.default["9CfkLO"]) : x.intl.string(x.t["+7XY31"]),
                              C = E ? "secondary" : "expressive",
                              w = i
                                  ? () => {
                                        E
                                            ? d.A.open(t, p.BEX.TAG, p.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != v && (0, _.A)(t, v),
                                            (0, a.closeAllModals)();
                                    }
                                  : void 0,
                              L = m.m_;
                          return {
                              title: c,
                              description: h,
                              openModal: function (e) {
                                  let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, a.openModalLazy)(
                                      async () => {
                                          let { default: l } = await n.e("56065").then(n.bind(n, 534904));
                                          return (n) =>
                                              (0, r.jsx)(l, {
                                                  guildId: t,
                                                  title: c,
                                                  description: x.intl.string(A.default.BBRFRd),
                                                  powerups: e,
                                                  newPowerupSkuIdSet: L,
                                                  forceStaticImages: !0,
                                                  footerInfoText: b,
                                                  footerAction:
                                                      i && null != w && null != j
                                                          ? {
                                                                variant: C,
                                                                text: j,
                                                                icon: "expressive" === C ? o._ : void 0,
                                                                onClick: w,
                                                            }
                                                          : void 0,
                                                  ...n,
                                              });
                                      },
                                      { onCloseCallback: l?.onModalClose },
                                  );
                              },
                              viewCta: S,
                              viewCtaTooltip: I,
                              badge: "new",
                              newPowerupSkuIdSet: L,
                              image: { staticUrl: f.A, animatedUrl: g.A },
                              forceStaticImages: !0,
                          };
                      })({ guildId: t, canUseBoosts: h, allPowerups: v, unlockedPowerups: E })
                    : void 0,
            s = {};
        for (let t of e) {
            let e = i(t);
            null != e && (s[t] = e);
        }
        return s;
    }, [e, t, h, v, E]);
}
function v(e, t) {
    return h([e], t)[e];
}
