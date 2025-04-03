n.d(t, { Z: () => G }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
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
    N = n(453070),
    j = n(926491),
    C = n(378233),
    I = n(419922),
    S = n(688179),
    T = n(981631),
    P = n(474936),
    A = n(388032),
    w = n(673206),
    Z = n(239594);
function k(e) {
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
function R(e, t) {
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
let D = (e, t) => (t ? A.NW.format(A.t.auckX1, { stickerPackName: e.name }) : A.NW.format(A.t.OzB6e3, { stickerPackName: e.name })),
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
function W(e) {
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
let U = (e) => {
        let { closePopout: t, sticker: n, channel: a, refreshPositionKey: l } = e,
            [c, u, p] = (0, o.Wu)([j.Z], () => [j.Z.getStickerPack(n.pack_id), !j.Z.hasLoadedStickerPacks, j.Z.isPremiumPack(n.pack_id)], [n]),
            m = L({
                sticker: n,
                stickerPack: c
            });
        (0, N.Pq)(n.pack_id);
        let f = (0, N.Sd)(a),
            h = {
                refreshPositionKey: l,
                channel: a
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
                k(
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
                                              (0, S.m)({
                                                  stickerPack: c,
                                                  stickerPickerCategories: f
                                              }),
                                              t();
                                      },
                                      children: A.NW.string(A.t.GPy3Ag)
                                  },
                                  'view-sticker-pack'
                              )
                          })
                  ]
              });
    },
    F = (e) => {
        let t,
            { sticker: n, channel: a, closePopout: m, refreshPositionKey: b } = e,
            [N, j] = i.useState(null),
            [C, S] = i.useState(!1),
            D = E.default.getCurrentUser(),
            L = O.ZP.canUseCustomStickersEverywhere(D),
            U = (0, o.e7)([y.Z], () => y.Z.getGuild(n.guild_id)),
            F = null != U,
            [B, G] = i.useState(!1),
            [H, V] = i.useState(null),
            z = i.useMemo(
                () => ({
                    page: null != a.guild_id ? T.ZY5.GUILD_CHANNEL : T.ZY5.DM_CHANNEL,
                    section: T.jXE.STICKER_POPOUT
                }),
                [a.guild_id]
            ),
            { current: K } = i.useRef(k({ guild_id: a.getGuildId() }, (0, d.v_)(a))),
            Y = {
                stickerSourceGuild: U,
                refreshPositionKey: b
            },
            X = i.useRef(Y);
        i.useEffect(() => {
            X.current = Y;
        }),
            i.useEffect(() => {
                let { stickerSourceGuild: e } = X.current;
                (async () => {
                    (null == e || e.hasFeature(T.oNc.DISCOVERABLE)) && j(await (0, h.Z)(n.id)), S(!0);
                })();
            }, [n.id, F]);
        let q = n.guild_id === a.getGuildId(),
            Q = null != N,
            J = !1,
            $ = 'Custom Sticker Popout';
        L
            ? (t = F ? (q ? A.NW.string(A.t.fZ0DiI) : A.NW.string(A.t['1f6D9v'])) : Q ? A.NW.string(A.t.yHmoR0) : A.NW.string(A.t.vZaScH))
            : F
              ? ((t = q ? A.NW.string(A.t.jNphpq) : A.NW.string(A.t.lyD5ZW)), (J = !0), ($ = 'Custom Sticker Popout (Upsell)'))
              : Q
                ? ((t = A.NW.string(A.t.IuXYcn)), (J = !0), ($ = 'Custom Sticker Popout (Upsell)'))
                : ((t = A.NW.format(A.t.hGWuxc, {
                      openPremiumSettings: () => {
                          M(a), m();
                      }
                  })),
                  ($ = 'Custom Sticker Popout (Soft Upsell)'));
        let ee = !J && !F && Q && L;
        return (i.useEffect(() => {
            let { refreshPositionKey: e } = X.current;
            e();
        }, [C, N]),
        (0, u.ZP)(() => {
            v.default.track(T.rMx.OPEN_POPOUT, k({ type: $ }, K));
        }),
        C)
            ? (0, r.jsxs)(_.W_, {
                  className: Z.popoutContent,
                  children: [
                      (() => {
                          let e = async () => {
                              if (null == N || F) return;
                              m();
                              let e = N.id;
                              try {
                                  await c.Z.joinGuild(e), c.Z.transitionToGuildSync(e);
                              } catch (e) {}
                          };
                          return (0, r.jsxs)('div', {
                              className: Z.emojiSection,
                              children: [
                                  (0, r.jsx)(W, {
                                      description: t,
                                      sticker: n
                                  }),
                                  J &&
                                      (0, r.jsx)(x.Z, {
                                          className: Z.ctaButton,
                                          subscriptionTier: P.Si.TIER_2,
                                          size: s.zxk.Sizes.SMALL,
                                          fullWidth: !0,
                                          buttonText: A.NW.string(A.t['gl/XHB']),
                                          onSubscribeModalClose: (t) => (t ? e() : m()),
                                          postSuccessGuild: F || null == N ? void 0 : N,
                                          premiumModalAnalyticsLocation: z
                                      }),
                                  ee &&
                                      (0, r.jsx)(s.zxk, {
                                          size: s.zxk.Sizes.SMALL,
                                          className: Z.ctaButton,
                                          fullWidth: !0,
                                          onClick: e,
                                          children: A.NW.string(A.t.riu2R0)
                                      })
                              ]
                          });
                      })(),
                      (null != U || null != N) &&
                          (() => {
                              var e;
                              if (!Q && !F) return;
                              let t = (null != (e = null == N ? void 0 : N.stickers) ? e : [])
                                      .slice(0, 13)
                                      .filter((e) => e.id !== n.id)
                                      .slice(0, 12),
                                  i = null != N ? f.JO.createFromDiscoverableGuild(N) : f.JO.createFromGuildRecord(U);
                              return (0, r.jsxs)('div', {
                                  className: Z.guildSection,
                                  children: [
                                      (0, r.jsx)(s.vwX, {
                                          className: Z.guildTitle,
                                          children: F ? A.NW.string(A.t.kx6pEB) : A.NW.string(A.t.pDE7GR)
                                      }),
                                      (0, r.jsx)(g.Oe, {
                                          expressionSourceGuild: i,
                                          hasJoinedExpressionSourceGuild: F,
                                          isDisplayingJoinGuildButtonInPopout: ee
                                      }),
                                      !F &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(s.P3F, {
                                                      onClick: () => {
                                                          b(), G(!B);
                                                      },
                                                      className: Z.showMoreEmojis,
                                                      children: (0, r.jsxs)(p.Z, {
                                                          children: [
                                                              (0, r.jsx)(s.Text, {
                                                                  className: Z.__invalid_showMoreEmojisLabel,
                                                                  variant: 'text-xs/normal',
                                                                  color: 'none',
                                                                  children: A.NW.string(A.t.vtH5ho)
                                                              }),
                                                              (0, r.jsx)(s.CJ0, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: l()(Z.showMoreEmojisArrow, { [Z.showMoreEmojisArrowCollapsed]: !B })
                                                              })
                                                          ]
                                                      })
                                                  }),
                                                  B &&
                                                      (0, r.jsx)(p.Z, {
                                                          wrap: p.Z.Wrap.WRAP,
                                                          align: p.Z.Align.START,
                                                          justify: p.Z.Justify.START,
                                                          className: Z.otherEmojisContainer,
                                                          children: t.map((e) =>
                                                              (0, r.jsx)(
                                                                  s.ua7,
                                                                  R(k({ text: e.name }, _.b_), {
                                                                      children: (t) => {
                                                                          var { onMouseEnter: n, onMouseLeave: i } = t,
                                                                              a = (function (e, t) {
                                                                                  if (null == e) return {};
                                                                                  var n,
                                                                                      r,
                                                                                      i = (function (e, t) {
                                                                                          if (null == e) return {};
                                                                                          var n,
                                                                                              r,
                                                                                              i = {},
                                                                                              a = Object.keys(e);
                                                                                          for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                                                          return i;
                                                                                      })(e, t);
                                                                                  if (Object.getOwnPropertySymbols) {
                                                                                      var a = Object.getOwnPropertySymbols(e);
                                                                                      for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                                                                  }
                                                                                  return i;
                                                                              })(t, ['onMouseEnter', 'onMouseLeave']);
                                                                          return (0, r.jsx)(
                                                                              'div',
                                                                              R(
                                                                                  k(
                                                                                      {
                                                                                          className: l()(Z.otherEmoji, { [w.nonInteractingSticker]: null != H && H !== e.id }),
                                                                                          onMouseEnter: () => {
                                                                                              null == n || n(), V(e.id);
                                                                                          },
                                                                                          onMouseLeave: () => {
                                                                                              null == i || i(), V(null);
                                                                                          }
                                                                                      },
                                                                                      a
                                                                                  ),
                                                                                  {
                                                                                      children: (0, r.jsx)(I.Z, {
                                                                                          size: 32,
                                                                                          enlargeOnInteraction: !0,
                                                                                          enlargeWithName: !1,
                                                                                          enlargeScaleFactor: 2,
                                                                                          isInteracting: H === e.id,
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
function B(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, r.jsx)(_.W_, {
        className: w.popoutContent,
        children: (0, r.jsx)(W, {
            sticker: i,
            description: A.NW.format(A.t.hGWuxc, {
                openPremiumSettings: () => {
                    n(), M(t);
                }
            })
        })
    });
}
let G = (e) => {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: a } = e,
        [l, o] = (0, N.XW)(t, !0);
    return null != l && (0, C.jl)(l)
        ? (0, r.jsx)(U, {
              sticker: l,
              closePopout: i,
              channel: n,
              refreshPositionKey: a
          })
        : null != l && (0, C.J8)(l)
          ? (0, r.jsx)(F, {
                sticker: l,
                channel: n,
                closePopout: i,
                refreshPositionKey: a
            })
          : o
            ? o && null == l
                ? (0, r.jsx)(B, {
                      channel: n,
                      closePopout: i,
                      sticker: t
                  })
                : (i(), null)
            : (0, r.jsx)(_.SE, {});
};
