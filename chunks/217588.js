n.d(t, { Z: () => B }), n(724458), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(749210),
    d = n(493773),
    u = n(367907),
    m = n(600164),
    h = n(111028),
    _ = n(231053),
    p = n(697568),
    g = n(183023),
    f = n(524444),
    x = n(98278),
    E = n(197115),
    C = n(430824),
    v = n(594174),
    I = n(626135),
    N = n(74538),
    S = n(453070),
    T = n(926491),
    b = n(378233),
    A = n(419922),
    j = n(688179),
    y = n(981631),
    Z = n(474936),
    R = n(388032),
    L = n(751296),
    P = n(124396);
let k = (e, t) => (t ? R.intl.format(R.t.auckX1, { stickerPackName: e.name }) : R.intl.format(R.t.OzB6e3, { stickerPackName: e.name })),
    M = (e) => {
        let { sticker: t, stickerPack: n } = e;
        return l.useMemo(() => (null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), [])), [t, n]);
    };
function O(e) {
    I.default.track(y.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? y.ZY5.GUILD_CHANNEL : y.ZY5.DM_CHANNEL,
        location_section: y.jXE.STICKER_POPOUT
    }),
        (0, x.z)();
}
function D(e) {
    let { sticker: t, description: n } = e;
    return (0, i.jsxs)(m.Z, {
        children: [
            (0, i.jsx)(A.ZP, {
                sticker: t,
                size: 48,
                isInteracting: !0
            }),
            (0, i.jsxs)(m.Z, {
                direction: m.Z.Direction.VERTICAL,
                justify: m.Z.Justify.CENTER,
                className: P.truncatingText,
                children: [
                    (0, i.jsx)(o.Text, {
                        className: P.__invalid_emojiName,
                        variant: 'text-md/semibold',
                        children: (0, i.jsx)(h.Z, { children: t.name })
                    }),
                    null != n &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: n
                        })
                ]
            })
        ]
    });
}
let w = (e) => {
        let { closePopout: t, sticker: n, channel: a, refreshPositionKey: r } = e,
            [c, d, m] = (0, s.Wu)([T.Z], () => [T.Z.getStickerPack(n.pack_id), !T.Z.hasLoadedStickerPacks, T.Z.isPremiumPack(n.pack_id)], [n]),
            h = M({
                sticker: n,
                stickerPack: c
            });
        (0, S.Pq)(n.pack_id);
        let _ = (0, S.Sd)(a),
            p = {
                refreshPositionKey: r,
                channel: a
            },
            g = l.useRef(p);
        return (l.useEffect(() => {
            g.current = p;
        }),
        l.useEffect(() => {
            let { refreshPositionKey: e } = g.current;
            e();
        }, [d]),
        l.useEffect(() => {
            let { channel: e } = g.current;
            I.default.track(y.rMx.OPEN_POPOUT, {
                type: y.jXE.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, u.v_)(e)
            });
        }, [n.pack_id]),
        d || null == c)
            ? (0, i.jsx)(f.SE, { className: L.popoutLoader })
            : (0, i.jsxs)(f.W_, {
                  className: L.popoutContent,
                  children: [
                      (0, i.jsx)(o.X6q, {
                          variant: 'heading-md/semibold',
                          children: n.name
                      }),
                      (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          children: k(c, m)
                      }),
                      (0, i.jsx)('ul', {
                          className: L.stickersList,
                          children: h.map((e) =>
                              (0, i.jsx)(
                                  A.ZP,
                                  {
                                      isInteracting: !0,
                                      size: 80,
                                      sticker: e
                                  },
                                  e.id
                              )
                          )
                      }),
                      m &&
                          (0, i.jsx)('div', {
                              className: L.packActions,
                              children: (0, i.jsx)(
                                  o.zxk,
                                  {
                                      color: o.zxk.Colors.PRIMARY,
                                      size: o.zxk.Sizes.SMALL,
                                      onClick: () => {
                                          m &&
                                              (0, j.m)({
                                                  stickerPack: c,
                                                  stickerPickerCategories: _
                                              }),
                                              t();
                                      },
                                      children: R.intl.string(R.t.GPy3Ag)
                                  },
                                  'view-sticker-pack'
                              )
                          })
                  ]
              });
    },
    F = (e) => {
        let t,
            { sticker: n, channel: a, closePopout: h, refreshPositionKey: x } = e,
            [S, T] = l.useState(null),
            [b, j] = l.useState(!1),
            k = v.default.getCurrentUser(),
            M = N.ZP.canUseCustomStickersEverywhere(k),
            w = (0, s.e7)([C.Z], () => C.Z.getGuild(n.guild_id)),
            F = null != w,
            [U, B] = l.useState(!1),
            [G, H] = l.useState(null),
            V = l.useMemo(
                () => ({
                    page: null != a.guild_id ? y.ZY5.GUILD_CHANNEL : y.ZY5.DM_CHANNEL,
                    section: y.jXE.STICKER_POPOUT
                }),
                [a.guild_id]
            ),
            { current: z } = l.useRef({
                guild_id: a.getGuildId(),
                ...(0, u.v_)(a)
            }),
            W = {
                stickerSourceGuild: w,
                refreshPositionKey: x
            },
            K = l.useRef(W);
        l.useEffect(() => {
            K.current = W;
        }),
            l.useEffect(() => {
                let { stickerSourceGuild: e } = K.current;
                (async () => {
                    (null == e || e.hasFeature(y.oNc.DISCOVERABLE)) && T(await (0, p.Z)(n.id)), j(!0);
                })();
            }, [n.id, F]);
        let Y = n.guild_id === a.getGuildId(),
            X = null != S,
            q = !1,
            Q = 'Custom Sticker Popout';
        M
            ? (t = F ? (Y ? R.intl.string(R.t.fZ0DiI) : R.intl.string(R.t['1f6D9v'])) : X ? R.intl.string(R.t.yHmoR0) : R.intl.string(R.t.vZaScH))
            : F
              ? ((t = Y ? R.intl.string(R.t.jNphpq) : R.intl.string(R.t.lyD5ZW)), (q = !0), (Q = 'Custom Sticker Popout (Upsell)'))
              : X
                ? ((t = R.intl.string(R.t.IuXYcn)), (q = !0), (Q = 'Custom Sticker Popout (Upsell)'))
                : ((t = R.intl.format(R.t.hGWuxc, {
                      openPremiumSettings: () => {
                          O(a), h();
                      }
                  })),
                  (Q = 'Custom Sticker Popout (Soft Upsell)'));
        let J = !q && !F && X && M;
        return (l.useEffect(() => {
            let { refreshPositionKey: e } = K.current;
            e();
        }, [b, S]),
        (0, d.ZP)(() => {
            I.default.track(y.rMx.OPEN_POPOUT, {
                type: Q,
                ...z
            });
        }),
        b)
            ? (0, i.jsxs)(f.W_, {
                  className: P.popoutContent,
                  children: [
                      (() => {
                          let e = async () => {
                              if (null == S || F) return;
                              h();
                              let e = S.id;
                              try {
                                  await c.Z.joinGuild(e), c.Z.transitionToGuildSync(e);
                              } catch {}
                          };
                          return (0, i.jsxs)('div', {
                              className: P.emojiSection,
                              children: [
                                  (0, i.jsx)(D, {
                                      description: t,
                                      sticker: n
                                  }),
                                  q &&
                                      (0, i.jsx)(E.Z, {
                                          className: P.ctaButton,
                                          subscriptionTier: Z.Si.TIER_2,
                                          size: o.zxk.Sizes.SMALL,
                                          fullWidth: !0,
                                          buttonText: R.intl.string(R.t['gl/XHB']),
                                          onSubscribeModalClose: (t) => (t ? e() : h()),
                                          postSuccessGuild: F || null == S ? void 0 : S,
                                          premiumModalAnalyticsLocation: V
                                      }),
                                  J &&
                                      (0, i.jsx)(o.zxk, {
                                          size: o.zxk.Sizes.SMALL,
                                          className: P.ctaButton,
                                          fullWidth: !0,
                                          onClick: e,
                                          children: R.intl.string(R.t.riu2R0)
                                      })
                              ]
                          });
                      })(),
                      (null != w || null != S) &&
                          (() => {
                              var e;
                              if (!X && !F) return;
                              let t = (null !== (e = null == S ? void 0 : S.stickers) && void 0 !== e ? e : [])
                                      .slice(0, 13)
                                      .filter((e) => e.id !== n.id)
                                      .slice(0, 12),
                                  l = null != S ? _.JO.createFromDiscoverableGuild(S) : _.JO.createFromGuildRecord(w);
                              return (0, i.jsxs)('div', {
                                  className: P.guildSection,
                                  children: [
                                      (0, i.jsx)(o.vwX, {
                                          className: P.guildTitle,
                                          children: F ? R.intl.string(R.t.kx6pEB) : R.intl.string(R.t.pDE7GR)
                                      }),
                                      (0, i.jsx)(g.Oe, {
                                          expressionSourceGuild: l,
                                          hasJoinedExpressionSourceGuild: F,
                                          isDisplayingJoinGuildButtonInPopout: J
                                      }),
                                      !F &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(o.P3F, {
                                                      onClick: () => {
                                                          x(), B(!U);
                                                      },
                                                      className: P.showMoreEmojis,
                                                      children: (0, i.jsxs)(m.Z, {
                                                          children: [
                                                              (0, i.jsx)(o.Text, {
                                                                  className: P.__invalid_showMoreEmojisLabel,
                                                                  variant: 'text-xs/normal',
                                                                  color: 'none',
                                                                  children: R.intl.string(R.t.vtH5ho)
                                                              }),
                                                              (0, i.jsx)(o.CJ0, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: r()(P.showMoreEmojisArrow, { [P.showMoreEmojisArrowCollapsed]: !U })
                                                              })
                                                          ]
                                                      })
                                                  }),
                                                  U &&
                                                      (0, i.jsx)(m.Z, {
                                                          wrap: m.Z.Wrap.WRAP,
                                                          align: m.Z.Align.START,
                                                          justify: m.Z.Justify.START,
                                                          className: P.otherEmojisContainer,
                                                          children: t.map((e) =>
                                                              (0, i.jsx)(
                                                                  o.ua7,
                                                                  {
                                                                      text: e.name,
                                                                      ...f.b_,
                                                                      children: (t) => {
                                                                          let { onMouseEnter: n, onMouseLeave: l, ...a } = t;
                                                                          return (0, i.jsx)(
                                                                              'div',
                                                                              {
                                                                                  className: r()(P.otherEmoji, { [L.nonInteractingSticker]: null != G && G !== e.id }),
                                                                                  onMouseEnter: () => {
                                                                                      null == n || n(), H(e.id);
                                                                                  },
                                                                                  onMouseLeave: () => {
                                                                                      null == l || l(), H(null);
                                                                                  },
                                                                                  ...a,
                                                                                  children: (0, i.jsx)(A.ZP, {
                                                                                      size: 32,
                                                                                      enlargeOnInteraction: !0,
                                                                                      enlargeWithName: !1,
                                                                                      enlargeScaleFactor: 2,
                                                                                      isInteracting: G === e.id,
                                                                                      sticker: e
                                                                                  })
                                                                              },
                                                                              e.id
                                                                          );
                                                                      }
                                                                  },
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
            : (0, i.jsx)(f.SE, { className: L.popoutLoader });
    };
function U(e) {
    let { channel: t, closePopout: n, sticker: l } = e;
    return (0, i.jsx)(f.W_, {
        className: L.popoutContent,
        children: (0, i.jsx)(D, {
            sticker: l,
            description: R.intl.format(R.t.hGWuxc, {
                openPremiumSettings: () => {
                    n(), O(t);
                }
            })
        })
    });
}
let B = (e) => {
    let { renderableSticker: t, channel: n, closePopout: l, refreshPositionKey: a } = e,
        [r, s] = (0, S.XW)(t, !0);
    return null != r && (0, b.jl)(r)
        ? (0, i.jsx)(w, {
              sticker: r,
              closePopout: l,
              channel: n,
              refreshPositionKey: a
          })
        : null != r && (0, b.J8)(r)
          ? (0, i.jsx)(F, {
                sticker: r,
                channel: n,
                closePopout: l,
                refreshPositionKey: a
            })
          : s
            ? s && null == r
                ? (0, i.jsx)(U, {
                      channel: n,
                      closePopout: l,
                      sticker: t
                  })
                : (l(), null)
            : (0, i.jsx)(f.SE, {});
};
