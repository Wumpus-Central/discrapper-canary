n.d(t, { A: () => x, g: () => f });
var r = n(627968),
    l = n(64700),
    i = n(512750),
    s = n(311907),
    o = n(397927),
    a = n(997509),
    u = n(645619),
    d = n(363487),
    c = n(915667),
    p = n(652215),
    m = n(333354),
    A = n(985018),
    _ = n(870166),
    g = n(849630);
function f(e, t) {
    let f = (0, d.A)(t) ?? !1,
        x = (0, s.bG)([u.A], () => u.A.getStateForGuild(t)?.allPowerups),
        h = (0, s.bG)([u.A], () => u.A.getStateForGuild(t)?.unlockedPowerups);
    return l.useMemo(() => {
        let l = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: l, allPowerups: s, unlockedPowerups: u } = e,
                              d = A.intl.string(m.default.KC9HRW),
                              f = A.intl.string(m.default.GJiSmP),
                              x = s?.[i.SL],
                              h = u?.[i.SL] != null,
                              v = A.intl.string(m.default["/egwJA"]),
                              j = h ? void 0 : A.intl.string(m.default.W6Vwn3),
                              b = h ? void 0 : A.intl.string(m.default.lvk1Gc),
                              E = h ? A.intl.string(m.default["9CfkLO"]) : A.intl.string(A.t["+7XY31"]),
                              I = h ? "secondary" : "expressive",
                              S = l
                                  ? () => {
                                        h
                                            ? a.A.open(t, p.BEX.TAG, p.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != x && (0, c.A)(t, x),
                                            (0, o.s7G)();
                                    }
                                  : void 0;
                          return {
                              title: d,
                              description: f,
                              openModal: function (e) {
                                  let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, o.mMO)(
                                      async () => {
                                          let { default: i } = await n.e("56065").then(n.bind(n, 534904));
                                          return (n) =>
                                              (0, r.jsx)(i, {
                                                  guildId: t,
                                                  title: d,
                                                  description: A.intl.string(m.default.BBRFRd),
                                                  powerups: e,
                                                  footerInfoText: b,
                                                  footerAction:
                                                      l && null != S && null != E
                                                          ? {
                                                                variant: I,
                                                                text: E,
                                                                icon: "expressive" === I ? o._Jp : void 0,
                                                                onClick: S,
                                                            }
                                                          : void 0,
                                                  ...n,
                                              });
                                      },
                                      { onCloseCallback: i?.onModalClose },
                                  );
                              },
                              viewCta: v,
                              viewCtaTooltip: j,
                              image: { staticUrl: g.A, animatedUrl: _.A },
                          };
                      })({ guildId: t, canUseBoosts: f, allPowerups: x, unlockedPowerups: h })
                    : void 0,
            s = {};
        for (let t of e) {
            let e = l(t);
            null != e && (s[t] = e);
        }
        return s;
    }, [e, t, f, x, h]);
}
function x(e, t) {
    return f([e], t)[e];
}
