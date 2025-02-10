n.d(t, {
    Az: () => q,
    Oe: () => Q,
    UA: () => J,
    n_: () => $,
    vk: () => X
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(990547),
    l = n(442837),
    u = n(507274),
    c = n(481060),
    d = n(749210),
    f = n(596454),
    _ = n(100527),
    p = n(906732),
    h = n(213609),
    m = n(600164),
    g = n(686546),
    E = n(111028),
    v = n(738774),
    y = n(785896),
    I = n(231053),
    T = n(944386),
    b = n(565138),
    S = n(372769),
    A = n(889564),
    N = n(687476),
    C = n(761966),
    R = n(563927),
    O = n(98278),
    D = n(197115),
    L = n(703656),
    x = n(944486),
    w = n(914010),
    P = n(594174),
    M = n(626135),
    k = n(768581),
    U = n(900849),
    G = n(74538),
    B = n(886132),
    Z = n(524444),
    F = n(981631),
    V = n(176505),
    j = n(474936),
    H = n(388032),
    Y = n(702350);
let W = 32,
    K = 12,
    z = () => ({
        page: null != (0, l.e7)([w.Z], () => w.Z.getGuildId()) ? F.ZY5.GUILD_CHANNEL : F.ZY5.DM_CHANNEL,
        section: F.jXE.EMOJI_UPSELL_POPOUT
    }),
    q = (e) => {
        let { node: t } = e;
        (0, T.u)({
            emojiId: t.emojiId,
            currentGuildId: w.Z.getGuildId()
        });
        let n = (0, R.Z)(t.name);
        return (0, i.jsx)(u.V, {
            children: (0, i.jsx)(Z.W_, {
                children: (0, i.jsxs)(m.Z, {
                    className: Y.emojiSection,
                    children: [
                        (0, i.jsx)(f.Z, {
                            emojiName: t.name,
                            className: Y.primaryEmoji,
                            src: t.src,
                            animated: !1,
                            size: 'jumbo'
                        }),
                        (0, i.jsxs)(m.Z, {
                            direction: m.Z.Direction.VERTICAL,
                            justify: m.Z.Justify.CENTER,
                            className: Y.truncatingText,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    className: Y.__invalid_emojiName,
                                    variant: 'text-md/semibold',
                                    children: (0, i.jsx)(E.Z, { children: n })
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    children: H.intl.string(H.t.sXdH8f)
                                })
                            ]
                        })
                    ]
                })
            })
        });
    },
    Q = (e) => {
        let { expressionSourceGuild: t, hasJoinedExpressionSourceGuild: n, isDisplayingJoinGuildButtonInPopout: r } = e,
            { id: a, icon: o, name: l } = t,
            u = W,
            d = k.ZP.getGuildIconURL({
                id: a,
                icon: o,
                size: u,
                canAnimate: !0
            }),
            f = (n = null == n || n) || t.isDiscoverable(),
            _ = () => {
                t.isDiscoverable() ? (0, U.Ub)(a, {}) : n && (0, L.uL)(F.Z5c.CHANNEL(a, x.Z.getChannelId(a)));
            },
            p = () =>
                null != d && f
                    ? (0, i.jsxs)(c.P3F, {
                          'aria-label': l,
                          onClick: _,
                          children: [
                              (0, i.jsx)('img', {
                                  src: d,
                                  alt: '',
                                  className: Y.guildIcon
                              }),
                              ' :'
                          ]
                      })
                    : (0, i.jsx)(b.Z, {
                          size: b.Z.Sizes.SMALL,
                          className: Y.guildIconNotClickable,
                          guild: t
                      }),
            h = () =>
                f
                    ? (0, i.jsx)(c.P3F, {
                          onClick: _,
                          className: Y.truncatingText,
                          children: (0, i.jsx)(c.X6q, {
                              className: Y.guildName,
                              variant: 'heading-md/semibold',
                              children: (0, i.jsx)(E.Z, { children: l })
                          })
                      })
                    : (0, i.jsx)(c.X6q, {
                          variant: 'heading-md/semibold',
                          children: (0, i.jsx)(E.Z, { children: l })
                      }),
            v = t.isDiscoverable() && null != t.presenceCount,
            y = () => {
                let e = !r && !n;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: H.intl.format(H.t['LC+S+v'], { membersOnline: t.presenceCount })
                        }),
                        (0, i.jsx)('div', { className: Y.dotSeparator }),
                        e
                            ? (0, i.jsx)(c.P3F, {
                                  className: Y.joinGuildLink,
                                  onClick: _,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-link',
                                      children: H.intl.string(H.t.riu2R0)
                                  })
                              })
                            : (0, i.jsx)(c.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-secondary',
                                  children: H.intl.string(H.t.inyJqK)
                              })
                    ]
                });
            },
            I = () =>
                v
                    ? y()
                    : (0, i.jsx)(c.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: H.intl.string(H.t.H29mx8)
                      });
        return (0, i.jsxs)(m.Z, {
            align: m.Z.Align.CENTER,
            children: [
                (0, i.jsx)(g.ZP, {
                    mask: g.ZP.Masks.SQUIRCLE,
                    width: u,
                    height: u,
                    className: Y.__invalid_guildIconContainer,
                    children: p()
                }),
                (0, i.jsxs)(m.Z, {
                    direction: m.Z.Direction.VERTICAL,
                    className: s()(Y.__invalid_guildInformation, Y.truncatingText),
                    children: [
                        (0, i.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(S.Z, {
                                    guild: t,
                                    className: Y.guildBadge
                                }),
                                h()
                            ]
                        }),
                        (0, i.jsx)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: I()
                        })
                    ]
                })
            ]
        });
    },
    X = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: r, nonce: a } = e,
            {
                expressionSourceGuild: s,
                expressionSourceApplication: o,
                sourceType: l,
                joinedEmojiSourceGuildRecord: c,
                emoji: d,
                isFetching: f
            } = (0, y.i)({
                emojiId: t.emojiId,
                refreshPositionKey: r
            });
        return f
            ? (0, i.jsx)(Z.SE, {})
            : (0, i.jsx)(u.V, {
                  'aria-label': t.name,
                  children: (0, i.jsx)(J, {
                      node: t,
                      sourceType: l,
                      expressionSourceApplication: o,
                      guildEmoji: null != d ? d : void 0,
                      expressionSourceGuild: s,
                      joinedEmojiSourceGuildRecord: c,
                      closePopout: n,
                      onToggleShowMoreEmojis: r,
                      demoMode: !1,
                      nonce: a
                  })
              });
    },
    J = (e) => {
        var t, n, a;
        let { node: u, sourceType: g, expressionSourceApplication: y, expressionSourceGuild: b, joinedEmojiSourceGuildRecord: S, closePopout: R, onToggleShowMoreEmojis: L, guildEmoji: x, demoMode: k = !1, nonce: U } = e,
            W = (0, l.e7)([P.default], () => P.default.getCurrentUser()),
            K = (0, l.e7)([w.Z], () => w.Z.getGuildId()),
            q = G.ZP.isPremium(W),
            X = null != K && (K === (null == b ? void 0 : b.id) || K === (null == S ? void 0 : S.id)),
            J = null != S,
            ee = null !== (t = null == b ? void 0 : b.isDiscoverable()) && void 0 !== t && t;
        k && ((q = !0), (ee = !0), (J = !1), (X = !1));
        let et = z(),
            {
                isRoleSubscriptionEmoji: en,
                isUnusableRoleSubscriptionEmoji: ei,
                userIsRoleSubscriber: er
            } = r.useMemo(
                () =>
                    null == x
                        ? {
                              isRoleSubscriptionEmoji: !1,
                              isUnusableRoleSubscriptionEmoji: !1,
                              userIsRoleSubscriber: !1
                          }
                        : {
                              isRoleSubscriptionEmoji: A.yH(x),
                              isUnusableRoleSubscriptionEmoji: A.Fv(x, null != K ? K : void 0),
                              userIsRoleSubscriber: N.Z.getUserSubscriptionRoles(x.guildId).size > 0
                          },
                [x, K]
            ),
            ea = !!ei && (0, v.Ol)(null == x ? void 0 : x.guildId),
            { analyticsLocations: es } = (0, p.ZP)(_.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, h.Z)(
            {
                type: o.ImpressionTypes.MODAL,
                name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: es,
                    emoji_guild_id: null !== (n = null == x ? void 0 : x.guildId) && void 0 !== n ? n : null,
                    emoji_id: null !== (a = null == x ? void 0 : x.id) && void 0 !== a ? a : null
                }
            },
            { disableTrack: !en }
        );
        let eo = w.Z.getGuildId(),
            el = (0, B.a)({
                sourceType: g,
                expressionSourceApplication: y,
                isPremium: q,
                hasJoinedEmojiSourceGuild: J,
                isRoleSubscriptionEmoji: en,
                isUnusableRoleSubscriptionEmoji: ei,
                userIsRoleSubscriber: er,
                emojiComesFromCurrentGuild: X,
                isDiscoverable: ee,
                shouldHideRoleSubscriptionCTA: ea,
                onOpenPremiumSettings: () => {
                    R(),
                        M.default.track(F.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_page: et.page,
                            location_section: et.section
                        }),
                        (0, O.z)();
                }
            }),
            eu = J && ei && !ea && ((q && en) || !q),
            ec = el.emojiDescription,
            ed = (0, T.u)({
                emojiId: u.emojiId,
                currentGuildId: eo,
                popoutData: el,
                emojiSourceGuildId: null == b ? void 0 : b.id,
                nonce: U,
                demoMode: k
            }),
            ef = el.type === B.$.JOIN_GUILD,
            e_ = el.type === B.$.GET_PREMIUM,
            ep = () => {
                let e = async () => {
                        if (k || null == b || J) return;
                        R();
                        let e = b.id;
                        try {
                            await d.Z.joinGuild(e), d.Z.transitionToGuildSync(e);
                        } catch {}
                    },
                    t = () => {
                        R(), (null == S ? void 0 : S.id) != null && d.Z.transitionToGuildSync(S.id, { sourceLocationStack: [_.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL] }, V.oC.ROLE_SUBSCRIPTIONS);
                    },
                    n = !J && ee,
                    r = () =>
                        e_
                            ? (0, i.jsx)(D.Z, {
                                  className: Y.ctaButton,
                                  subscriptionTier: j.Si.TIER_2,
                                  size: c.zxk.Sizes.SMALL,
                                  fullWidth: !0,
                                  buttonText: el.text,
                                  onSubscribeModalClose: (t) => (t ? e() : R()),
                                  postSuccessGuild: n && null != b ? b : void 0,
                                  premiumModalAnalyticsLocation: et
                              })
                            : ef
                              ? (0, i.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    className: Y.ctaButton,
                                    color: c.Ttl.BRAND,
                                    fullWidth: !0,
                                    onClick: e,
                                    children: el.text
                                })
                              : void 0;
                return (0, i.jsxs)('div', {
                    className: Y.emojiSection,
                    children: [
                        (0, i.jsxs)(m.Z, {
                            children: [
                                (0, i.jsx)(f.Z, {
                                    className: Y.primaryEmoji,
                                    emojiId: u.emojiId,
                                    emojiName: u.name,
                                    animated: u.animated,
                                    size: 'jumbo'
                                }),
                                (0, i.jsxs)(m.Z, {
                                    direction: m.Z.Direction.VERTICAL,
                                    justify: m.Z.Justify.CENTER,
                                    className: Y.truncatingText,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-md/semibold',
                                            children: (0, i.jsx)(E.Z, { children: u.name })
                                        }),
                                        null != ec &&
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-sm/normal',
                                                children: ec
                                            })
                                    ]
                                })
                            ]
                        }),
                        r(),
                        eu &&
                            (0, i.jsx)(C.Z, {
                                className: Y.ctaButton,
                                size: c.zxk.Sizes.SMALL,
                                fullWidth: !0,
                                onClick: t,
                                children: er ? H.intl.string(H.t.yma8Vl) : H.intl.string(H.t.nN2DIi)
                            })
                    ]
                });
            },
            [eh, em] = r.useState(!1),
            eg = () => {
                var e, t;
                let n = null != b && !J && ee && (null !== (t = null == b ? void 0 : null === (e = b.emojis) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0) > 1,
                    r = () => {
                        n && (null == L || L(), eh || k || M.default.track(F.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ed), em(!eh));
                    },
                    a = () => {
                        let e = H.intl.string(H.t.pnsAS0);
                        return (0, i.jsx)(c.P3F, {
                            onClick: r,
                            className: Y.showMoreEmojis,
                            children: (0, i.jsxs)(m.Z, {
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        className: Y.__invalid_showMoreEmojisLabel,
                                        'aria-label': e,
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: e
                                    }),
                                    (0, i.jsx)(c.CJ0, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: s()(Y.showMoreEmojisArrow, { [Y.showMoreEmojisArrowCollapsed]: !eh })
                                    })
                                ]
                            })
                        });
                    };
                return (0, i.jsxs)('div', {
                    className: Y.guildSection,
                    children: [
                        (0, i.jsx)(c.vwX, {
                            className: Y.guildTitle,
                            children: J ? H.intl.string(H.t.ohTzZG) : H.intl.string(H.t['eLfh+f'])
                        }),
                        (0, i.jsx)(Q, {
                            expressionSourceGuild: null != b ? b : I.JO.createFromGuildRecord(S),
                            hasJoinedExpressionSourceGuild: J,
                            isDisplayingJoinGuildButtonInPopout: ef
                        }),
                        n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    a(),
                                    null != u.emojiId &&
                                        eh &&
                                        (0, i.jsx)($, {
                                            emojiId: u.emojiId,
                                            expressionSourceGuild: b,
                                            popoutData: el,
                                            onClose: R,
                                            hasJoinedEmojiSourceGuild: J,
                                            isDisplayingButtonInTopSection: ef || e_
                                        })
                                ]
                            })
                    ]
                });
            },
            eE = ee || (J && !X) || null != b;
        return (0, i.jsxs)(Z.W_, {
            className: Y.popoutContent,
            children: [ep(), eE && eg()]
        });
    },
    $ = (e) => {
        var t;
        let { emojiId: n, expressionSourceGuild: r, hasJoinedEmojiSourceGuild: a, popoutData: s, onClose: o, isDisplayingButtonInTopSection: l } = e,
            u = (null !== (t = null == r ? void 0 : r.emojis) && void 0 !== t ? t : [])
                .slice(0, K + 1)
                .filter((e) => e.id !== n)
                .slice(0, K),
            d = () =>
                a
                    ? null
                    : u.map((e) =>
                          (0, i.jsx)(
                              c.ua7,
                              {
                                  text: e.require_colons ? ':'.concat(e.name, ':') : e.name,
                                  ...Z.b_,
                                  children: (t) =>
                                      (0, i.jsx)(f.Z, {
                                          className: Y.otherEmoji,
                                          emojiId: e.id,
                                          animated: e.animated,
                                          ...t
                                      })
                              },
                              e.id
                          )
                      ),
            { type: _, description: p } = s,
            h = () =>
                _ === B.$.GET_PREMIUM
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(D.Z, {
                                  subscriptionTier: j.Si.TIER_2,
                                  buttonText: s.text,
                                  className: Y.ctaButton,
                                  fullWidth: !0,
                                  onClick: () => o()
                              }),
                              null != p &&
                                  (0, i.jsx)('div', {
                                      className: Y.ctaDescription,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          'aria-label': p,
                                          children: p
                                      })
                                  })
                          ]
                      })
                    : _ === B.$.JOIN_GUILD
                      ? (0, i.jsx)(c.zxk, {
                            size: c.zxk.Sizes.SMALL,
                            className: Y.ctaButton,
                            color: c.Ttl.BRAND,
                            fullWidth: !0,
                            onClick: () => {
                                (0, U.Ub)(r.id, {});
                            },
                            children: s.text
                        })
                      : null;
        return (0, i.jsxs)('div', {
            className: Y.otherEmojisContainer,
            children: [d(), !l && h()]
        });
    };
