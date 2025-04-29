n.d(t, { Z: () => H }), n(953529), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(749210),
    u = n(493773),
    d = n(367907),
    p = n(600164),
    m = n(111028),
    f = n(231053),
    h = n(697568),
    g = n(183023),
    _ = n(524444),
    b = n(98278),
    x = n(197115),
    y = n(430824),
    E = n(594174),
    v = n(626135),
    O = n(74538),
    j = n(453070),
    C = n(926491),
    S = n(378233),
    I = n(419922),
    N = n(688179),
    T = n(981631),
    P = n(474936),
    A = n(388032),
    w = n(673206),
    Z = n(239594);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = (e, t) => (t ? A.intl.format(A.t.auckX1, { stickerPackName: e.name }) : A.intl.format(A.t.OzB6e3, { stickerPackName: e.name })),
    L = (e) => {
        let { sticker: t, stickerPack: n } = e;
        return i.useMemo(() => (null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), [])), [t, n]);
    };
function M(e) {
    v.default.track(T.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? T.ZY5.GUILD_CHANNEL : T.ZY5.DM_CHANNEL,
        location_section: T.jXE.STICKER_POPOUT
    }),
        (0, b.z)();
}
function U(e) {
    let { sticker: t, description: n } = e;
    return (0, r.jsxs)(p.Z, {
        children: [
            (0, r.jsx)(I.Z, {
                sticker: t,
                size: 48,
                isInteracting: !0
            }),
            (0, r.jsxs)(p.Z, {
                direction: p.Z.Direction.VERTICAL,
                justify: p.Z.Justify.CENTER,
                className: Z.truncatingText,
                children: [
                    (0, r.jsx)(s.Text, {
                        className: Z.__invalid_emojiName,
                        variant: 'text-md/semibold',
                        children: (0, r.jsx)(m.Z, { children: t.name })
                    }),
                    null != n &&
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: n
                        })
                ]
            })
        ]
    });
}
let F = (e) => {
        let { closePopout: t, sticker: n, channel: l, refreshPositionKey: a } = e,
            [c, u, p] = (0, o.Wu)([C.Z], () => [C.Z.getStickerPack(n.pack_id), !C.Z.hasLoadedStickerPacks, C.Z.isPremiumPack(n.pack_id)], [n]),
            m = L({
                sticker: n,
                stickerPack: c
            });
        (0, j.Pq)(n.pack_id);
        let f = (0, j.Sd)(l),
            h = {
                refreshPositionKey: a,
                channel: l
            },
            g = i.useRef(h);
        return (i.useEffect(() => {
            g.current = h;
        }),
        i.useEffect(() => {
            let { refreshPositionKey: e } = g.current;
            e();
        }, [u]),
        i.useEffect(() => {
            let { channel: e } = g.current;
            v.default.track(
                T.rMx.OPEN_POPOUT,
                R(
                    {
                        type: T.jXE.STICKER_POPOUT,
                        guild_id: e.getGuildId(),
                        sticker_pack_id: n.pack_id
                    },
                    (0, d.v_)(e)
                )
            );
        }, [n.pack_id]),
        u || null == c)
            ? (0, r.jsx)(_.SE, { className: w.popoutLoader })
            : (0, r.jsxs)(_.W_, {
                  className: w.popoutContent,
                  children: [
                      (0, r.jsx)(s.X6q, {
                          variant: 'heading-md/semibold',
                          children: n.name
                      }),
                      (0, r.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          children: D(c, p)
                      }),
                      (0, r.jsx)('ul', {
                          className: w.stickersList,
                          children: m.map((e) =>
                              (0, r.jsx)(
                                  I.Z,
                                  {
                                      isInteracting: !0,
                                      size: 80,
                                      sticker: e
                                  },
                                  e.id
                              )
                          )
                      }),
                      p &&
                          (0, r.jsx)('div', {
                              className: w.packActions,
                              children: (0, r.jsx)(
                                  s.zxk,
                                  {
                                      color: s.zxk.Colors.PRIMARY,
                                      size: s.zxk.Sizes.SMALL,
                                      onClick: () => {
                                          p &&
                                              (0, N.m)({
                                                  stickerPack: c,
                                                  stickerPickerCategories: f
                                              }),
                                              t();
                                      },
                                      children: A.intl.string(A.t.GPy3Ag)
                                  },
                                  'view-sticker-pack'
                              )
                          })
                  ]
              });
    },
    B = (e) => {
        let t,
            { sticker: n, channel: l, closePopout: m, refreshPositionKey: b } = e,
            [j, C] = i.useState(null),
            [S, N] = i.useState(!1),
            D = E.default.getCurrentUser(),
            L = O.ZP.canUseCustomStickersEverywhere(D),
            F = (0, o.e7)([y.Z], () => y.Z.getGuild(n.guild_id)),
            B = null != F,
            [G, H] = i.useState(!1),
            [V, z] = i.useState(null),
            W = i.useMemo(
                () => ({
                    page: null != l.guild_id ? T.ZY5.GUILD_CHANNEL : T.ZY5.DM_CHANNEL,
                    section: T.jXE.STICKER_POPOUT
                }),
                [l.guild_id]
            ),
            { current: K } = i.useRef(R({ guild_id: l.getGuildId() }, (0, d.v_)(l))),
            Y = {
                stickerSourceGuild: F,
                refreshPositionKey: b
            },
            X = i.useRef(Y);
        i.useEffect(() => {
            X.current = Y;
        }),
            i.useEffect(() => {
                let { stickerSourceGuild: e } = X.current;
                (async () => {
                    (null == e || e.hasFeature(T.oNc.DISCOVERABLE)) && C(await (0, h.Z)(n.id)), N(!0);
                })();
            }, [n.id, B]);
        let q = n.guild_id === l.getGuildId(),
            Q = null != j,
            J = !1,
            $ = 'Custom Sticker Popout';
        L
            ? (t = B ? (q ? A.intl.string(A.t.fZ0DiI) : A.intl.string(A.t['1f6D9v'])) : Q ? A.intl.string(A.t.yHmoR0) : A.intl.string(A.t.vZaScH))
            : B
              ? ((t = q ? A.intl.string(A.t.jNphpq) : A.intl.string(A.t.lyD5ZW)), (J = !0), ($ = 'Custom Sticker Popout (Upsell)'))
              : Q
                ? ((t = A.intl.string(A.t.IuXYcn)), (J = !0), ($ = 'Custom Sticker Popout (Upsell)'))
                : ((t = A.intl.format(A.t.hGWuxc, {
                      openPremiumSettings: () => {
                          M(l), m();
                      }
                  })),
                  ($ = 'Custom Sticker Popout (Soft Upsell)'));
        let ee = !J && !B && Q && L;
        return (i.useEffect(() => {
            let { refreshPositionKey: e } = X.current;
            e();
        }, [S, j]),
        (0, u.ZP)(() => {
            v.default.track(T.rMx.OPEN_POPOUT, R({ type: $ }, K));
        }),
        S)
            ? (0, r.jsxs)(_.W_, {
                  className: Z.popoutContent,
                  children: [
                      (() => {
                          let e = async () => {
                              if (null == j || B) return;
                              m();
                              let e = j.id;
                              try {
                                  await c.Z.joinGuild(e), c.Z.transitionToGuildSync(e);
                              } catch (e) {}
                          };
                          return (0, r.jsxs)('div', {
                              className: Z.emojiSection,
                              children: [
                                  (0, r.jsx)(U, {
                                      description: t,
                                      sticker: n
                                  }),
                                  J &&
                                      (0, r.jsx)(x.Z, {
                                          className: Z.ctaButton,
                                          subscriptionTier: P.Si.TIER_2,
                                          size: s.zxk.Sizes.SMALL,
                                          fullWidth: !0,
                                          buttonText: A.intl.string(A.t['gl/XHB']),
                                          onSubscribeModalClose: (t) => (t ? e() : m()),
                                          postSuccessGuild: B || null == j ? void 0 : j,
                                          premiumModalAnalyticsLocation: W
                                      }),
                                  ee &&
                                      (0, r.jsx)(s.zxk, {
                                          size: s.zxk.Sizes.SMALL,
                                          className: Z.ctaButton,
                                          fullWidth: !0,
                                          onClick: e,
                                          children: A.intl.string(A.t.riu2R0)
                                      })
                              ]
                          });
                      })(),
                      (null != F || null != j) &&
                          (() => {
                              var e;
                              if (!Q && !B) return;
                              let t = (null != (e = null == j ? void 0 : j.stickers) ? e : [])
                                      .slice(0, 13)
                                      .filter((e) => e.id !== n.id)
                                      .slice(0, 12),
                                  i = null != j ? f.JO.createFromDiscoverableGuild(j) : f.JO.createFromGuildRecord(F);
                              return (0, r.jsxs)('div', {
                                  className: Z.guildSection,
                                  children: [
                                      (0, r.jsx)(s.vwX, {
                                          className: Z.guildTitle,
                                          children: B ? A.intl.string(A.t.kx6pEB) : A.intl.string(A.t.pDE7GR)
                                      }),
                                      (0, r.jsx)(g.Oe, {
                                          expressionSourceGuild: i,
                                          hasJoinedExpressionSourceGuild: B,
                                          isDisplayingJoinGuildButtonInPopout: ee
                                      }),
                                      !B &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(s.P3F, {
                                                      onClick: () => {
                                                          b(), H(!G);
                                                      },
                                                      className: Z.showMoreEmojis,
                                                      children: (0, r.jsxs)(p.Z, {
                                                          children: [
                                                              (0, r.jsx)(s.Text, {
                                                                  className: Z.__invalid_showMoreEmojisLabel,
                                                                  variant: 'text-xs/normal',
                                                                  color: 'none',
                                                                  children: A.intl.string(A.t.vtH5ho)
                                                              }),
                                                              (0, r.jsx)(s.CJ0, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: a()(Z.showMoreEmojisArrow, { [Z.showMoreEmojisArrowCollapsed]: !G })
                                                              })
                                                          ]
                                                      })
                                                  }),
                                                  G &&
                                                      (0, r.jsx)(p.Z, {
                                                          wrap: p.Z.Wrap.WRAP,
                                                          align: p.Z.Align.START,
                                                          justify: p.Z.Justify.START,
                                                          className: Z.otherEmojisContainer,
                                                          children: t.map((e) =>
                                                              (0, r.jsx)(
                                                                  s.ua7,
                                                                  k(R({ text: e.name }, _.b_), {
                                                                      children: (t) => {
                                                                          var { onMouseEnter: n, onMouseLeave: i } = t,
                                                                              l = (function (e, t) {
                                                                                  if (null == e) return {};
                                                                                  var n,
                                                                                      r,
                                                                                      i = (function (e, t) {
                                                                                          if (null == e) return {};
                                                                                          var n,
                                                                                              r,
                                                                                              i = {},
                                                                                              l = Object.keys(e);
                                                                                          for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                                                          return i;
                                                                                      })(e, t);
                                                                                  if (Object.getOwnPropertySymbols) {
                                                                                      var l = Object.getOwnPropertySymbols(e);
                                                                                      for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                                                                  }
                                                                                  return i;
                                                                              })(t, ['onMouseEnter', 'onMouseLeave']);
                                                                          return (0, r.jsx)(
                                                                              'div',
                                                                              k(
                                                                                  R(
                                                                                      {
                                                                                          className: a()(Z.otherEmoji, { [w.nonInteractingSticker]: null != V && V !== e.id }),
                                                                                          onMouseEnter: () => {
                                                                                              null == n || n(), z(e.id);
                                                                                          },
                                                                                          onMouseLeave: () => {
                                                                                              null == i || i(), z(null);
                                                                                          }
                                                                                      },
                                                                                      l
                                                                                  ),
                                                                                  {
                                                                                      children: (0, r.jsx)(I.Z, {
                                                                                          size: 32,
                                                                                          enlargeOnInteraction: !0,
                                                                                          enlargeWithName: !1,
                                                                                          enlargeScaleFactor: 2,
                                                                                          isInteracting: V === e.id,
                                                                                          sticker: e
                                                                                      })
                                                                                  }
                                                                              ),
                                                                              e.id
                                                                          );
                                                                      }
                                                                  }),
                                                                  e.id
                                                              )
                                                          )
                                                      })
                                              ]
                                          })
                                  ]
                              });
                          })()
                  ]
              })
            : (0, r.jsx)(_.SE, { className: w.popoutLoader });
    };
function G(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, r.jsx)(_.W_, {
        className: w.popoutContent,
        children: (0, r.jsx)(U, {
            sticker: i,
            description: A.intl.format(A.t.hGWuxc, {
                openPremiumSettings: () => {
                    n(), M(t);
                }
            })
        })
    });
}
let H = (e) => {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [a, o] = (0, j.XW)(t, !0);
    return null != a && (0, S.jl)(a)
        ? (0, r.jsx)(F, {
              sticker: a,
              closePopout: i,
              channel: n,
              refreshPositionKey: l
          })
        : null != a && (0, S.J8)(a)
          ? (0, r.jsx)(B, {
                sticker: a,
                channel: n,
                closePopout: i,
                refreshPositionKey: l
            })
          : o
            ? o && null == a
                ? (0, r.jsx)(G, {
                      channel: n,
                      closePopout: i,
                      sticker: t
                  })
                : (i(), null)
            : (0, r.jsx)(_.SE, {});
};
