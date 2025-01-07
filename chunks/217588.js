n(724458), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(749210),
    u = n(493773),
    d = n(367907),
    m = n(600164),
    h = n(111028),
    f = n(231053),
    p = n(697568),
    _ = n(183023),
    g = n(524444),
    E = n(98278),
    C = n(197115),
    I = n(430824),
    x = n(594174),
    N = n(626135),
    v = n(74538),
    T = n(453070),
    S = n(926491),
    A = n(378233),
    b = n(419922),
    j = n(688179),
    R = n(981631),
    Z = n(474936),
    P = n(388032),
    L = n(751296),
    y = n(124396);
let O = (e, t) => (t ? P.intl.format(P.t.auckX1, { stickerPackName: e.name }) : P.intl.format(P.t.OzB6e3, { stickerPackName: e.name })),
    M = (e) => {
        let { sticker: t, stickerPack: n } = e;
        return r.useMemo(() => (null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), [])), [t, n]);
    };
function k(e) {
    N.default.track(R.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? R.ZY5.GUILD_CHANNEL : R.ZY5.DM_CHANNEL,
        location_section: R.jXE.STICKER_POPOUT
    }),
        (0, E.z)();
}
function D(e) {
    let { sticker: t, description: n } = e;
    return (0, i.jsxs)(m.Z, {
        children: [
            (0, i.jsx)(b.ZP, {
                sticker: t,
                size: 48,
                isInteracting: !0
            }),
            (0, i.jsxs)(m.Z, {
                direction: m.Z.Direction.VERTICAL,
                justify: m.Z.Justify.CENTER,
                className: y.truncatingText,
                children: [
                    (0, i.jsx)(s.Text, {
                        className: y.__invalid_emojiName,
                        variant: 'text-md/semibold',
                        children: (0, i.jsx)(h.Z, { children: t.name })
                    }),
                    null != n &&
                        (0, i.jsx)(s.Text, {
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
            [c, u, m] = (0, o.Wu)([S.Z], () => [S.Z.getStickerPack(n.pack_id), !S.Z.hasLoadedStickerPacks, S.Z.isPremiumPack(n.pack_id)], [n]),
            h = M({
                sticker: n,
                stickerPack: c
            });
        (0, T.Pq)(n.pack_id);
        let f = (0, T.Sd)(l),
            p = {
                refreshPositionKey: a,
                channel: l
            },
            _ = r.useRef(p);
        return (r.useEffect(() => {
            _.current = p;
        }),
        r.useEffect(() => {
            let { refreshPositionKey: e } = _.current;
            e();
        }, [u]),
        r.useEffect(() => {
            let { channel: e } = _.current;
            N.default.track(R.rMx.OPEN_POPOUT, {
                type: R.jXE.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, d.v_)(e)
            });
        }, [n.pack_id]),
        u || null == c)
            ? (0, i.jsx)(g.SE, { className: L.popoutLoader })
            : (0, i.jsxs)(g.W_, {
                  className: L.popoutContent,
                  children: [
                      (0, i.jsx)(s.Heading, {
                          variant: 'heading-md/semibold',
                          children: n.name
                      }),
                      (0, i.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          children: O(c, m)
                      }),
                      (0, i.jsx)('ul', {
                          className: L.stickersList,
                          children: h.map((e) =>
                              (0, i.jsx)(
                                  b.ZP,
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
                                  s.Button,
                                  {
                                      color: s.Button.Colors.PRIMARY,
                                      size: s.Button.Sizes.SMALL,
                                      onClick: () => {
                                          m &&
                                              (0, j.m)({
                                                  stickerPack: c,
                                                  stickerPickerCategories: f
                                              }),
                                              t();
                                      },
                                      children: P.intl.string(P.t.GPy3Ag)
                                  },
                                  'view-sticker-pack'
                              )
                          })
                  ]
              });
    },
    U = (e) => {
        let t,
            { sticker: n, channel: l, closePopout: h, refreshPositionKey: E } = e,
            [T, S] = r.useState(null),
            [A, j] = r.useState(!1),
            O = x.default.getCurrentUser(),
            M = v.ZP.canUseCustomStickersEverywhere(O),
            B = (0, o.e7)([I.Z], () => I.Z.getGuild(n.guild_id)),
            U = null != B,
            [w, F] = r.useState(!1),
            [G, V] = r.useState(null),
            H = r.useMemo(
                () => ({
                    page: null != l.guild_id ? R.ZY5.GUILD_CHANNEL : R.ZY5.DM_CHANNEL,
                    section: R.jXE.STICKER_POPOUT
                }),
                [l.guild_id]
            ),
            { current: z } = r.useRef({
                guild_id: l.getGuildId(),
                ...(0, d.v_)(l)
            }),
            W = {
                stickerSourceGuild: B,
                refreshPositionKey: E
            },
            K = r.useRef(W);
        r.useEffect(() => {
            K.current = W;
        }),
            r.useEffect(() => {
                let { stickerSourceGuild: e } = K.current;
                (async () => {
                    (null == e || e.hasFeature(R.oNc.DISCOVERABLE)) && S(await (0, p.Z)(n.id)), j(!0);
                })();
            }, [n.id, U]);
        let Y = n.guild_id === l.getGuildId(),
            X = null != T,
            Q = !1,
            q = 'Custom Sticker Popout';
        M
            ? (t = U ? (Y ? P.intl.string(P.t.fZ0DiI) : P.intl.string(P.t['1f6D9v'])) : X ? P.intl.string(P.t.yHmoR0) : P.intl.string(P.t.vZaScH))
            : U
              ? (Y ? (t = P.intl.string(P.t.jNphpq)) : (t = P.intl.string(P.t.lyD5ZW)), (Q = !0), (q = 'Custom Sticker Popout (Upsell)'))
              : X
                ? ((t = P.intl.string(P.t.IuXYcn)), (Q = !0), (q = 'Custom Sticker Popout (Upsell)'))
                : ((t = P.intl.format(P.t.hGWuxc, {
                      openPremiumSettings: () => {
                          k(l), h();
                      }
                  })),
                  (q = 'Custom Sticker Popout (Soft Upsell)'));
        let J = !Q && !U && X && M;
        return (r.useEffect(() => {
            let { refreshPositionKey: e } = K.current;
            e();
        }, [A, T]),
        (0, u.Z)(() => {
            N.default.track(R.rMx.OPEN_POPOUT, {
                type: q,
                ...z
            });
        }),
        A)
            ? (0, i.jsxs)(g.W_, {
                  className: y.popoutContent,
                  children: [
                      (() => {
                          let e = async () => {
                              if (null == T || U) return;
                              h();
                              let e = T.id;
                              try {
                                  await c.Z.joinGuild(e), c.Z.transitionToGuildSync(e);
                              } catch {}
                          };
                          return (0, i.jsxs)('div', {
                              className: y.emojiSection,
                              children: [
                                  (0, i.jsx)(D, {
                                      description: t,
                                      sticker: n
                                  }),
                                  Q &&
                                      (0, i.jsx)(C.Z, {
                                          className: y.ctaButton,
                                          subscriptionTier: Z.Si.TIER_2,
                                          size: s.Button.Sizes.SMALL,
                                          fullWidth: !0,
                                          buttonText: P.intl.string(P.t['gl/XHB']),
                                          onSubscribeModalClose: (t) => (t ? e() : h()),
                                          postSuccessGuild: U || null == T ? void 0 : T,
                                          premiumModalAnalyticsLocation: H
                                      }),
                                  J &&
                                      (0, i.jsx)(s.Button, {
                                          size: s.Button.Sizes.SMALL,
                                          className: y.ctaButton,
                                          fullWidth: !0,
                                          onClick: e,
                                          children: P.intl.string(P.t.riu2R0)
                                      })
                              ]
                          });
                      })(),
                      (null != B || null != T) &&
                          (() => {
                              var e;
                              if (!X && !U) return;
                              let t = (null !== (e = null == T ? void 0 : T.stickers) && void 0 !== e ? e : [])
                                      .slice(0, 13)
                                      .filter((e) => e.id !== n.id)
                                      .slice(0, 12),
                                  r = null != T ? f.JO.createFromDiscoverableGuild(T) : f.JO.createFromGuildRecord(B);
                              return (0, i.jsxs)('div', {
                                  className: y.guildSection,
                                  children: [
                                      (0, i.jsx)(s.FormTitle, {
                                          className: y.guildTitle,
                                          children: U ? P.intl.string(P.t.kx6pEB) : P.intl.string(P.t.pDE7GR)
                                      }),
                                      (0, i.jsx)(_.Oe, {
                                          expressionSourceGuild: r,
                                          hasJoinedExpressionSourceGuild: U,
                                          isDisplayingJoinGuildButtonInPopout: J
                                      }),
                                      !U &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(s.Clickable, {
                                                      onClick: () => {
                                                          E(), F(!w);
                                                      },
                                                      className: y.showMoreEmojis,
                                                      children: (0, i.jsxs)(m.Z, {
                                                          children: [
                                                              (0, i.jsx)(s.Text, {
                                                                  className: y.__invalid_showMoreEmojisLabel,
                                                                  variant: 'text-xs/normal',
                                                                  color: 'none',
                                                                  children: P.intl.string(P.t.vtH5ho)
                                                              }),
                                                              (0, i.jsx)(s.ChevronSmallDownIcon, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: a()(y.showMoreEmojisArrow, { [y.showMoreEmojisArrowCollapsed]: !w })
                                                              })
                                                          ]
                                                      })
                                                  }),
                                                  w &&
                                                      (0, i.jsx)(m.Z, {
                                                          wrap: m.Z.Wrap.WRAP,
                                                          align: m.Z.Align.START,
                                                          justify: m.Z.Justify.START,
                                                          className: y.otherEmojisContainer,
                                                          children: t.map((e) =>
                                                              (0, i.jsx)(
                                                                  s.Tooltip,
                                                                  {
                                                                      text: e.name,
                                                                      ...g.b_,
                                                                      children: (t) => {
                                                                          let { onMouseEnter: n, onMouseLeave: r, ...l } = t;
                                                                          return (0, i.jsx)(
                                                                              'div',
                                                                              {
                                                                                  className: a()(y.otherEmoji, { [L.nonInteractingSticker]: null != G && G !== e.id }),
                                                                                  onMouseEnter: () => {
                                                                                      null == n || n(), V(e.id);
                                                                                  },
                                                                                  onMouseLeave: () => {
                                                                                      null == r || r(), V(null);
                                                                                  },
                                                                                  ...l,
                                                                                  children: (0, i.jsx)(b.ZP, {
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
            : (0, i.jsx)(g.SE, { className: L.popoutLoader });
    };
function w(e) {
    let { channel: t, closePopout: n, sticker: r } = e;
    return (0, i.jsx)(g.W_, {
        className: L.popoutContent,
        children: (0, i.jsx)(D, {
            sticker: r,
            description: P.intl.format(P.t.hGWuxc, {
                openPremiumSettings: () => {
                    n(), k(t);
                }
            })
        })
    });
}
t.Z = (e) => {
    let { renderableSticker: t, channel: n, closePopout: r, refreshPositionKey: l } = e,
        [a, o] = (0, T.XW)(t, !0);
    if (null != a && (0, A.jl)(a))
        return (0, i.jsx)(B, {
            sticker: a,
            closePopout: r,
            channel: n,
            refreshPositionKey: l
        });
    if (null != a && (0, A.J8)(a))
        return (0, i.jsx)(U, {
            sticker: a,
            channel: n,
            closePopout: r,
            refreshPositionKey: l
        });
    if (!o) return (0, i.jsx)(g.SE, {});
    else if (o && null == a)
        return (0, i.jsx)(w, {
            channel: n,
            closePopout: r,
            sticker: t
        });
    return r(), null;
};
