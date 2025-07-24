(n.d(t, { Z: () => V }), n(953529), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(749210),
    d = n(493773),
    p = n(367907),
    m = n(600164),
    f = n(111028),
    g = n(231053),
    _ = n(697568),
    h = n(183023),
    b = n(524444),
    E = n(98278),
    C = n(767714),
    x = n(430824),
    v = n(594174),
    O = n(626135),
    y = n(74538),
    j = n(453070),
    I = n(926491),
    S = n(378233),
    T = n(419922),
    N = n(688179),
    P = n(981631),
    A = n(474936),
    w = n(388032),
    Z = n(673206),
    R = n(239594);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function D(e, t) {
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
let k = (e, t) => (t ? w.intl.format(w.t.auckX1, { stickerPackName: e.name }) : w.intl.format(w.t.OzB6e3, { stickerPackName: e.name })),
    M = (e) => {
        let { sticker: t, stickerPack: n } = e;
        return i.useMemo(() => (null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), [])), [t, n]);
    };
function U(e) {
    (O.default.track(P.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? P.ZY5.GUILD_CHANNEL : P.ZY5.DM_CHANNEL,
        location_section: P.jXE.STICKER_POPOUT
    }),
        (0, E.z)());
}
function F(e) {
    let { sticker: t, description: n } = e;
    return (0, r.jsxs)(m.Z, {
        children: [
            (0, r.jsx)(T.Z, {
                sticker: t,
                size: 48,
                isInteracting: !0
            }),
            (0, r.jsxs)(m.Z, {
                direction: m.Z.Direction.VERTICAL,
                justify: m.Z.Justify.CENTER,
                className: R.truncatingText,
                children: [
                    (0, r.jsx)(c.Text, {
                        className: R.__invalid_emojiName,
                        variant: 'text-md/semibold',
                        children: (0, r.jsx)(f.Z, { children: t.name })
                    }),
                    null != n &&
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            children: n
                        })
                ]
            })
        ]
    });
}
let B = (e) => {
        let { closePopout: t, sticker: n, channel: l, refreshPositionKey: a } = e,
            [s, u, d] = (0, o.Wu)([I.Z], () => [I.Z.getStickerPack(n.pack_id), !I.Z.hasLoadedStickerPacks, I.Z.isPremiumPack(n.pack_id)], [n]),
            m = M({
                sticker: n,
                stickerPack: s
            });
        (0, j.Pq)(n.pack_id);
        let f = (0, j.Sd)(l),
            g = {
                refreshPositionKey: a,
                channel: l
            },
            _ = i.useRef(g);
        return (i.useEffect(() => {
            _.current = g;
        }),
        i.useEffect(() => {
            let { refreshPositionKey: e } = _.current;
            e();
        }, [u]),
        i.useEffect(() => {
            let { channel: e } = _.current;
            O.default.track(
                P.rMx.OPEN_POPOUT,
                L(
                    {
                        type: P.jXE.STICKER_POPOUT,
                        guild_id: e.getGuildId(),
                        sticker_pack_id: n.pack_id
                    },
                    (0, p.v_)(e)
                )
            );
        }, [n.pack_id]),
        u || null == s)
            ? (0, r.jsx)(b.SE, { className: Z.popoutLoader })
            : (0, r.jsxs)(b.W_, {
                  className: Z.popoutContent,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: 'heading-md/semibold',
                          children: n.name
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          children: k(s, d)
                      }),
                      (0, r.jsx)('ul', {
                          className: Z.stickersList,
                          children: m.map((e) =>
                              (0, r.jsx)(
                                  T.Z,
                                  {
                                      isInteracting: !0,
                                      size: 80,
                                      sticker: e
                                  },
                                  e.id
                              )
                          )
                      }),
                      d &&
                          (0, r.jsx)('div', {
                              className: Z.packActions,
                              children: (0, r.jsx)(
                                  c.zxk,
                                  {
                                      variant: 'secondary',
                                      size: 'sm',
                                      text: w.intl.string(w.t.GPy3Ag),
                                      onClick: () => {
                                          (d &&
                                              (0, N.m)({
                                                  stickerPack: s,
                                                  stickerPickerCategories: f
                                              }),
                                              t());
                                      }
                                  },
                                  'view-sticker-pack'
                              )
                          })
                  ]
              });
    },
    G = (e) => {
        let t,
            { sticker: n, channel: l, closePopout: f, refreshPositionKey: E } = e,
            [j, I] = i.useState(null),
            [S, N] = i.useState(!1),
            k = v.default.getCurrentUser(),
            M = y.ZP.canUseCustomStickersEverywhere(k),
            B = (0, o.e7)([x.Z], () => x.Z.getGuild(n.guild_id)),
            G = null != B,
            [H, V] = i.useState(!1),
            [z, W] = i.useState(null),
            K = i.useMemo(
                () => ({
                    page: null != l.guild_id ? P.ZY5.GUILD_CHANNEL : P.ZY5.DM_CHANNEL,
                    section: P.jXE.STICKER_POPOUT
                }),
                [l.guild_id]
            ),
            { current: Y } = i.useRef(L({ guild_id: l.getGuildId() }, (0, p.v_)(l))),
            X = {
                stickerSourceGuild: B,
                refreshPositionKey: E
            },
            q = i.useRef(X);
        (i.useEffect(() => {
            q.current = X;
        }),
            i.useEffect(() => {
                let { stickerSourceGuild: e } = q.current;
                (async () => {
                    ((null == e || e.features.has(P.oNc.DISCOVERABLE)) && I(await (0, _.Z)(n.id)), N(!0));
                })();
            }, [n.id, G]));
        let Q = n.guild_id === l.getGuildId(),
            J = null != j,
            $ = !1,
            ee = 'Custom Sticker Popout';
        M
            ? (t = G ? (Q ? w.intl.string(w.t.fZ0DiI) : w.intl.string(w.t['1f6D9v'])) : J ? w.intl.string(w.t.yHmoR0) : w.intl.string(w.t.vZaScH))
            : G
              ? ((t = Q ? w.intl.string(w.t.jNphpq) : w.intl.string(w.t.lyD5ZW)), ($ = !0), (ee = 'Custom Sticker Popout (Upsell)'))
              : J
                ? ((t = w.intl.string(w.t.IuXYcn)), ($ = !0), (ee = 'Custom Sticker Popout (Upsell)'))
                : ((t = w.intl.format(w.t.hGWuxc, {
                      openPremiumSettings: () => {
                          (U(l), f());
                      }
                  })),
                  (ee = 'Custom Sticker Popout (Soft Upsell)'));
        let et = !$ && !G && J && M;
        return (i.useEffect(() => {
            let { refreshPositionKey: e } = q.current;
            e();
        }, [S, j]),
        (0, d.ZP)(() => {
            O.default.track(P.rMx.OPEN_POPOUT, L({ type: ee }, Y));
        }),
        S)
            ? (0, r.jsxs)(b.W_, {
                  className: R.popoutContent,
                  children: [
                      (() => {
                          let e = async () => {
                              if (null == j || G) return;
                              f();
                              let e = j.id;
                              try {
                                  (await u.Z.joinGuild(e), u.Z.transitionToGuildSync(e));
                              } catch (e) {}
                          };
                          return (0, r.jsxs)('div', {
                              className: R.emojiSection,
                              children: [
                                  (0, r.jsx)(F, {
                                      description: t,
                                      sticker: n
                                  }),
                                  $ &&
                                      (0, r.jsx)(C.Z, {
                                          className: R.ctaButton,
                                          subscriptionTier: A.Si.TIER_2,
                                          size: s.zx.Sizes.SMALL,
                                          fullWidth: !0,
                                          textOptions: { textOverride: w.intl.string(w.t['gl/XHB']) },
                                          onSubscribeModalClose: (t) => (t ? e() : f()),
                                          postSuccessGuild: G || null == j ? void 0 : j,
                                          premiumModalAnalyticsLocation: K
                                      }),
                                  et &&
                                      (0, r.jsx)('div', {
                                          'data-button-hoisted-classname-wrapper': !0,
                                          className: R.ctaButton,
                                          children: (0, r.jsx)(c.zxk, {
                                              variant: 'primary',
                                              size: 'sm',
                                              text: w.intl.string(w.t.riu2R0),
                                              fullWidth: !0,
                                              onClick: e
                                          })
                                      })
                              ]
                          });
                      })(),
                      (null != B || null != j) &&
                          (() => {
                              var e;
                              if (!J && !G) return;
                              let t = (null != (e = null == j ? void 0 : j.stickers) ? e : [])
                                      .slice(0, 13)
                                      .filter((e) => e.id !== n.id)
                                      .slice(0, 12),
                                  i = null != j ? g.JO.createFromDiscoverableGuild(j) : g.JO.createFromGuildRecord(B);
                              return (0, r.jsxs)('div', {
                                  className: R.guildSection,
                                  children: [
                                      (0, r.jsx)(c.vwX, {
                                          className: R.guildTitle,
                                          children: G ? w.intl.string(w.t.kx6pEB) : w.intl.string(w.t.pDE7GR)
                                      }),
                                      (0, r.jsx)(h.Oe, {
                                          expressionSourceGuild: i,
                                          hasJoinedExpressionSourceGuild: G,
                                          isDisplayingJoinGuildButtonInPopout: et
                                      }),
                                      !G &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(c.P3F, {
                                                      onClick: () => {
                                                          (E(), V(!H));
                                                      },
                                                      className: R.showMoreEmojis,
                                                      children: (0, r.jsxs)(m.Z, {
                                                          children: [
                                                              (0, r.jsx)(c.Text, {
                                                                  className: R.__invalid_showMoreEmojisLabel,
                                                                  variant: 'text-xs/normal',
                                                                  color: 'none',
                                                                  children: w.intl.string(w.t.vtH5ho)
                                                              }),
                                                              (0, r.jsx)(c.CJ0, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: a()(R.showMoreEmojisArrow, { [R.showMoreEmojisArrowCollapsed]: !H })
                                                              })
                                                          ]
                                                      })
                                                  }),
                                                  H &&
                                                      (0, r.jsx)(m.Z, {
                                                          wrap: m.Z.Wrap.WRAP,
                                                          align: m.Z.Align.START,
                                                          justify: m.Z.Justify.START,
                                                          className: R.otherEmojisContainer,
                                                          children: t.map((e) =>
                                                              (0, r.jsx)(
                                                                  c.ua7,
                                                                  D(L({ text: e.name }, b.b_), {
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
                                                                                          for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                                                                          return i;
                                                                                      })(e, t);
                                                                                  if (Object.getOwnPropertySymbols) {
                                                                                      var l = Object.getOwnPropertySymbols(e);
                                                                                      for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                                                                                  }
                                                                                  return i;
                                                                              })(t, ['onMouseEnter', 'onMouseLeave']);
                                                                          return (0, r.jsx)(
                                                                              'div',
                                                                              D(
                                                                                  L(
                                                                                      {
                                                                                          className: a()(R.otherEmoji, { [Z.nonInteractingSticker]: null != z && z !== e.id }),
                                                                                          onMouseEnter: () => {
                                                                                              (null == n || n(), W(e.id));
                                                                                          },
                                                                                          onMouseLeave: () => {
                                                                                              (null == i || i(), W(null));
                                                                                          }
                                                                                      },
                                                                                      l
                                                                                  ),
                                                                                  {
                                                                                      children: (0, r.jsx)(T.Z, {
                                                                                          size: 32,
                                                                                          enlargeOnInteraction: !0,
                                                                                          enlargeWithName: !1,
                                                                                          enlargeScaleFactor: 2,
                                                                                          isInteracting: z === e.id,
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
            : (0, r.jsx)(b.SE, { className: Z.popoutLoader });
    };
function H(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, r.jsx)(b.W_, {
        className: Z.popoutContent,
        children: (0, r.jsx)(F, {
            sticker: i,
            description: w.intl.format(w.t.hGWuxc, {
                openPremiumSettings: () => {
                    (n(), U(t));
                }
            })
        })
    });
}
let V = (e) => {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [a, o] = (0, j.XW)(t, !0);
    return null != a && (0, S.jl)(a)
        ? (0, r.jsx)(B, {
              sticker: a,
              closePopout: i,
              channel: n,
              refreshPositionKey: l
          })
        : null != a && (0, S.J8)(a)
          ? (0, r.jsx)(G, {
                sticker: a,
                channel: n,
                closePopout: i,
                refreshPositionKey: l
            })
          : o
            ? o && null == a
                ? (0, r.jsx)(H, {
                      channel: n,
                      closePopout: i,
                      sticker: t
                  })
                : (i(), null)
            : (0, r.jsx)(b.SE, {});
};
