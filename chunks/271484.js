l.d(t, {
    A: () => x,
    g: () => g,
}),
    l(896048);
var r = l(627968),
    n = l(64700),
    i = l(512750),
    s = l(311907),
    o = l(397927),
    a = l(997509),
    u = l(645619),
    d = l(363487),
    c = l(915667),
    f = l(652215),
    p = l(333354),
    m = l(985018),
    v = l(870166),
    A = l(849630);

function g(e, t) {
    var g;
    let x = null != (g = (0, d.A)(t)) && g,
        b = (0, s.bG)([u.A], () => {
            var e;
            return null == (e = u.A.getStateForGuild(t)) ? void 0 : e.allPowerups;
        }),
        h = (0, s.bG)([u.A], () => {
            var e;
            return null == (e = u.A.getStateForGuild(t)) ? void 0 : e.unlockedPowerups;
        });
    return n.useMemo(() => {
        let n = (e) =>
                "guildTagsBadgePacks" === e
                    ? (function (e) {
                          let { guildId: t, canUseBoosts: n, allPowerups: s, unlockedPowerups: u } = e,
                              d = m.intl.string(p.default.KC9HRW),
                              g = m.intl.string(p.default.GJiSmP),
                              x = null == s ? void 0 : s[i.SL],
                              b = (null == u ? void 0 : u[i.SL]) != null,
                              h = m.intl.string(p.default["/egwJA"]),
                              j = b ? void 0 : m.intl.string(p.default.W6Vwn3),
                              _ = b ? void 0 : m.intl.string(p.default.lvk1Gc),
                              E = b ? m.intl.string(p.default["9CfkLO"]) : m.intl.string(m.t["+7XY31"]),
                              y = b ? "secondary" : "expressive",
                              I = n
                                  ? () => {
                                        b
                                            ? a.A.open(t, f.BEX.TAG, f.JJy.GUILD_POWERUPS_OVERVIEW_CARD)
                                            : null != x && (0, c.A)(t, x),
                                            (0, o.s7G)();
                                    }
                                  : void 0;
                          return {
                              title: d,
                              description: g,
                              openModal: function (e) {
                                  let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                  (0, o.mMO)(
                                      async () => {
                                          let { default: i } = await l.e("56065").then(l.bind(l, 534904));
                                          return (l) =>
                                              (0, r.jsx)(
                                                  i,
                                                  (function (e) {
                                                      for (var t = 1; t < arguments.length; t++) {
                                                          var l = null != arguments[t] ? arguments[t] : {},
                                                              r = Object.keys(l);
                                                          "function" == typeof Object.getOwnPropertySymbols &&
                                                              (r = r.concat(
                                                                  Object.getOwnPropertySymbols(l).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(l, e)
                                                                          .enumerable;
                                                                  }),
                                                              )),
                                                              r.forEach(function (t) {
                                                                  var r;
                                                                  (r = l[t]),
                                                                      t in e
                                                                          ? Object.defineProperty(e, t, {
                                                                                value: r,
                                                                                enumerable: !0,
                                                                                configurable: !0,
                                                                                writable: !0,
                                                                            })
                                                                          : (e[t] = r);
                                                              });
                                                      }
                                                      return e;
                                                  })(
                                                      {
                                                          guildId: t,
                                                          title: d,
                                                          description: m.intl.string(p.default.BBRFRd),
                                                          powerups: e,
                                                          footerInfoText: _,
                                                          footerAction:
                                                              n && null != I && null != E
                                                                  ? {
                                                                        variant: y,
                                                                        text: E,
                                                                        icon: "expressive" === y ? o._Jp : void 0,
                                                                        onClick: I,
                                                                    }
                                                                  : void 0,
                                                      },
                                                      l,
                                                  ),
                                              );
                                      },
                                      {
                                          onCloseCallback: null == i ? void 0 : i.onModalClose,
                                      },
                                  );
                              },
                              viewCta: h,
                              viewCtaTooltip: j,
                              image: {
                                  staticUrl: A.A,
                                  animatedUrl: v.A,
                              },
                          };
                      })({
                          guildId: t,
                          canUseBoosts: x,
                          allPowerups: b,
                          unlockedPowerups: h,
                      })
                    : void 0,
            s = {};
        for (let t of e) {
            let e = n(t);
            null != e && (s[t] = e);
        }
        return s;
    }, [e, t, x, b, h]);
}

function x(e, t) {
    return g([e], t)[e];
}
