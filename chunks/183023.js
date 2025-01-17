r.d(n, {
    Az: function () {
        return X;
    },
    Oe: function () {
        return J;
    },
    UA: function () {
        return ee;
    },
    n_: function () {
        return et;
    },
    vk: function () {
        return $;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(990547),
    c = r(442837),
    d = r(507274),
    f = r(481060),
    _ = r(749210),
    h = r(596454),
    p = r(100527),
    m = r(906732),
    g = r(213609),
    E = r(600164),
    v = r(686546),
    I = r(111028),
    T = r(738774),
    b = r(785896),
    y = r(231053),
    S = r(944386),
    A = r(565138),
    N = r(372769),
    C = r(889564),
    R = r(687476),
    O = r(761966),
    D = r(563927),
    L = r(98278),
    x = r(197115),
    w = r(703656),
    P = r(944486),
    M = r(914010),
    k = r(594174),
    U = r(626135),
    B = r(768581),
    G = r(900849),
    Z = r(74538),
    F = r(886132),
    V = r(524444),
    j = r(981631),
    H = r(176505),
    Y = r(474936),
    W = r(388032),
    K = r(124396);
let z = 32,
    q = 12,
    Q = () => ({
        page: null != (0, c.e7)([M.Z], () => M.Z.getGuildId()) ? j.ZY5.GUILD_CHANNEL : j.ZY5.DM_CHANNEL,
        section: j.jXE.EMOJI_UPSELL_POPOUT
    }),
    X = (e) => {
        let { node: n } = e;
        (0, S.u)({
            emojiId: n.emojiId,
            currentGuildId: M.Z.getGuildId()
        });
        let r = (0, D.Z)(n.name);
        return (0, a.jsx)(d.V, {
            children: (0, a.jsx)(V.W_, {
                children: (0, a.jsxs)(E.Z, {
                    className: K.emojiSection,
                    children: [
                        (0, a.jsx)(h.Z, {
                            emojiName: n.name,
                            className: K.primaryEmoji,
                            src: n.src,
                            animated: !1,
                            size: 'jumbo'
                        }),
                        (0, a.jsxs)(E.Z, {
                            direction: E.Z.Direction.VERTICAL,
                            justify: E.Z.Justify.CENTER,
                            className: K.truncatingText,
                            children: [
                                (0, a.jsx)(f.Text, {
                                    className: K.__invalid_emojiName,
                                    variant: 'text-md/semibold',
                                    children: (0, a.jsx)(I.Z, { children: r })
                                }),
                                (0, a.jsx)(f.Text, {
                                    variant: 'text-sm/normal',
                                    children: W.intl.string(W.t.sXdH8f)
                                })
                            ]
                        })
                    ]
                })
            })
        });
    },
    J = (e) => {
        let { expressionSourceGuild: n, hasJoinedExpressionSourceGuild: r, isDisplayingJoinGuildButtonInPopout: i } = e,
            { id: s, icon: o, name: u } = n,
            c = z,
            d = B.ZP.getGuildIconURL({
                id: s,
                icon: o,
                size: c,
                canAnimate: !0
            }),
            _ = (r = null == r || r) || n.isDiscoverable(),
            h = () => {
                n.isDiscoverable() ? (0, G.Ub)(s, {}) : r && (0, w.uL)(j.Z5c.CHANNEL(s, P.Z.getChannelId(s)));
            },
            p = () =>
                null != d && _
                    ? (0, a.jsxs)(f.Clickable, {
                          'aria-label': u,
                          onClick: h,
                          children: [
                              (0, a.jsx)('img', {
                                  src: d,
                                  alt: '',
                                  className: K.guildIcon
                              }),
                              ' :'
                          ]
                      })
                    : (0, a.jsx)(A.Z, {
                          size: A.Z.Sizes.SMALL,
                          className: K.guildIconNotClickable,
                          guild: n
                      }),
            m = () =>
                _
                    ? (0, a.jsx)(f.Clickable, {
                          onClick: h,
                          className: K.truncatingText,
                          children: (0, a.jsx)(f.Heading, {
                              className: K.guildName,
                              variant: 'heading-md/semibold',
                              children: (0, a.jsx)(I.Z, { children: u })
                          })
                      })
                    : (0, a.jsx)(f.Heading, {
                          variant: 'heading-md/semibold',
                          children: (0, a.jsx)(I.Z, { children: u })
                      }),
            g = n.isDiscoverable() && null != n.presenceCount,
            T = () => {
                let e = !i && !r;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(f.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: W.intl.format(W.t['LC+S+v'], { membersOnline: n.presenceCount })
                        }),
                        (0, a.jsx)('div', { className: K.dotSeparator }),
                        e
                            ? (0, a.jsx)(f.Clickable, {
                                  className: K.joinGuildLink,
                                  onClick: h,
                                  children: (0, a.jsx)(f.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-link',
                                      children: W.intl.string(W.t.riu2R0)
                                  })
                              })
                            : (0, a.jsx)(f.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-secondary',
                                  children: W.intl.string(W.t.inyJqK)
                              })
                    ]
                });
            },
            b = () =>
                g
                    ? T()
                    : (0, a.jsx)(f.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: W.intl.string(W.t.H29mx8)
                      });
        return (0, a.jsxs)(E.Z, {
            align: E.Z.Align.CENTER,
            children: [
                (0, a.jsx)(v.ZP, {
                    mask: v.ZP.Masks.SQUIRCLE,
                    width: c,
                    height: c,
                    className: K.__invalid_guildIconContainer,
                    children: p()
                }),
                (0, a.jsxs)(E.Z, {
                    direction: E.Z.Direction.VERTICAL,
                    className: l()(K.__invalid_guildInformation, K.truncatingText),
                    children: [
                        (0, a.jsxs)(E.Z, {
                            align: E.Z.Align.CENTER,
                            children: [
                                (0, a.jsx)(N.Z, {
                                    guild: n,
                                    className: K.guildBadge
                                }),
                                m()
                            ]
                        }),
                        (0, a.jsx)(E.Z, {
                            align: E.Z.Align.CENTER,
                            children: b()
                        })
                    ]
                })
            ]
        });
    },
    $ = (e) => {
        let { node: n, closePopout: r, refreshPositionKey: i, nonce: s } = e,
            {
                expressionSourceGuild: o,
                expressionSourceApplication: l,
                sourceType: u,
                joinedEmojiSourceGuildRecord: c,
                emoji: f,
                isFetching: _
            } = (0, b.i)({
                emojiId: n.emojiId,
                refreshPositionKey: i
            });
        return _
            ? (0, a.jsx)(V.SE, {})
            : (0, a.jsx)(d.V, {
                  'aria-label': n.name,
                  children: (0, a.jsx)(ee, {
                      node: n,
                      sourceType: u,
                      expressionSourceApplication: l,
                      guildEmoji: null != f ? f : void 0,
                      expressionSourceGuild: o,
                      joinedEmojiSourceGuildRecord: c,
                      closePopout: r,
                      onToggleShowMoreEmojis: i,
                      demoMode: !1,
                      nonce: s
                  })
              });
    },
    ee = (e) => {
        var n, r, i;
        let { node: o, sourceType: d, expressionSourceApplication: v, expressionSourceGuild: b, joinedEmojiSourceGuildRecord: A, closePopout: N, onToggleShowMoreEmojis: D, guildEmoji: w, demoMode: P = !1, nonce: B } = e,
            G = (0, c.e7)([k.default], () => k.default.getCurrentUser()),
            z = (0, c.e7)([M.Z], () => M.Z.getGuildId()),
            q = Z.ZP.isPremium(G),
            X = null != z && (z === (null == b ? void 0 : b.id) || z === (null == A ? void 0 : A.id)),
            $ = null != A,
            ee = null !== (n = null == b ? void 0 : b.isDiscoverable()) && void 0 !== n && n;
        P && ((q = !0), (ee = !0), ($ = !1), (X = !1));
        let en = Q(),
            {
                isRoleSubscriptionEmoji: er,
                isUnusableRoleSubscriptionEmoji: ei,
                userIsRoleSubscriber: ea
            } = s.useMemo(
                () =>
                    null == w
                        ? {
                              isRoleSubscriptionEmoji: !1,
                              isUnusableRoleSubscriptionEmoji: !1,
                              userIsRoleSubscriber: !1
                          }
                        : {
                              isRoleSubscriptionEmoji: C.yH(w),
                              isUnusableRoleSubscriptionEmoji: C.Fv(w, null != z ? z : void 0),
                              userIsRoleSubscriber: R.Z.getUserSubscriptionRoles(w.guildId).size > 0
                          },
                [w, z]
            ),
            es = !!ei && (0, T.Ol)(null == w ? void 0 : w.guildId),
            { analyticsLocations: eo } = (0, m.ZP)(p.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, g.Z)(
            {
                type: u.ImpressionTypes.MODAL,
                name: u.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: eo,
                    emoji_guild_id: null !== (r = null == w ? void 0 : w.guildId) && void 0 !== r ? r : null,
                    emoji_id: null !== (i = null == w ? void 0 : w.id) && void 0 !== i ? i : null
                }
            },
            { disableTrack: !er }
        );
        let el = M.Z.getGuildId(),
            eu = (0, F.a)({
                sourceType: d,
                expressionSourceApplication: v,
                isPremium: q,
                hasJoinedEmojiSourceGuild: $,
                isRoleSubscriptionEmoji: er,
                isUnusableRoleSubscriptionEmoji: ei,
                userIsRoleSubscriber: ea,
                emojiComesFromCurrentGuild: X,
                isDiscoverable: ee,
                shouldHideRoleSubscriptionCTA: es,
                onOpenPremiumSettings: () => {
                    N(),
                        U.default.track(j.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_page: en.page,
                            location_section: en.section
                        }),
                        (0, L.z)();
                }
            }),
            ec = $ && ei && !es && ((q && er) || !q),
            ed = eu.emojiDescription,
            ef = (0, S.u)({
                emojiId: o.emojiId,
                currentGuildId: el,
                popoutData: eu,
                emojiSourceGuildId: null == b ? void 0 : b.id,
                nonce: B,
                demoMode: P
            }),
            e_ = eu.type === F.$.JOIN_GUILD,
            eh = eu.type === F.$.GET_PREMIUM,
            ep = () => {
                let e = async () => {
                        if (P || null == b || $) return;
                        N();
                        let e = b.id;
                        try {
                            await _.Z.joinGuild(e), _.Z.transitionToGuildSync(e);
                        } catch {}
                    },
                    n = () => {
                        N(), (null == A ? void 0 : A.id) != null && _.Z.transitionToGuildSync(A.id, { sourceLocationStack: [p.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL] }, H.oC.ROLE_SUBSCRIPTIONS);
                    },
                    r = !$ && ee,
                    i = () =>
                        eh
                            ? (0, a.jsx)(x.Z, {
                                  className: K.ctaButton,
                                  subscriptionTier: Y.Si.TIER_2,
                                  size: f.Button.Sizes.SMALL,
                                  fullWidth: !0,
                                  buttonText: eu.text,
                                  onSubscribeModalClose: (n) => (n ? e() : N()),
                                  postSuccessGuild: r && null != b ? b : void 0,
                                  premiumModalAnalyticsLocation: en
                              })
                            : e_
                              ? (0, a.jsx)(f.Button, {
                                    size: f.Button.Sizes.SMALL,
                                    className: K.ctaButton,
                                    color: f.ButtonColors.BRAND,
                                    fullWidth: !0,
                                    onClick: e,
                                    children: eu.text
                                })
                              : void 0;
                return (0, a.jsxs)('div', {
                    className: K.emojiSection,
                    children: [
                        (0, a.jsxs)(E.Z, {
                            children: [
                                (0, a.jsx)(h.Z, {
                                    className: K.primaryEmoji,
                                    emojiId: o.emojiId,
                                    emojiName: o.name,
                                    animated: o.animated,
                                    size: 'jumbo'
                                }),
                                (0, a.jsxs)(E.Z, {
                                    direction: E.Z.Direction.VERTICAL,
                                    justify: E.Z.Justify.CENTER,
                                    className: K.truncatingText,
                                    children: [
                                        (0, a.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            children: (0, a.jsx)(I.Z, { children: o.name })
                                        }),
                                        null != ed &&
                                            (0, a.jsx)(f.Text, {
                                                variant: 'text-sm/normal',
                                                children: ed
                                            })
                                    ]
                                })
                            ]
                        }),
                        i(),
                        ec &&
                            (0, a.jsx)(O.Z, {
                                className: K.ctaButton,
                                size: f.Button.Sizes.SMALL,
                                fullWidth: !0,
                                onClick: n,
                                children: ea ? W.intl.string(W.t.yma8Vl) : W.intl.string(W.t.nN2DIi)
                            })
                    ]
                });
            },
            [em, eg] = s.useState(!1),
            eE = () => {
                var e, n;
                let r = null != b && !$ && ee && (null !== (n = null == b ? void 0 : null === (e = b.emojis) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) > 1,
                    i = () => {
                        if (!!r) null == D || D(), !em && !P && U.default.track(j.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ef), eg(!em);
                    },
                    s = () => {
                        let e = W.intl.string(W.t.pnsAS0);
                        return (0, a.jsx)(f.Clickable, {
                            onClick: i,
                            className: K.showMoreEmojis,
                            children: (0, a.jsxs)(E.Z, {
                                children: [
                                    (0, a.jsx)(f.Text, {
                                        className: K.__invalid_showMoreEmojisLabel,
                                        'aria-label': e,
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: e
                                    }),
                                    (0, a.jsx)(f.ChevronSmallDownIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: l()(K.showMoreEmojisArrow, { [K.showMoreEmojisArrowCollapsed]: !em })
                                    })
                                ]
                            })
                        });
                    };
                return (0, a.jsxs)('div', {
                    className: K.guildSection,
                    children: [
                        (0, a.jsx)(f.FormTitle, {
                            className: K.guildTitle,
                            children: $ ? W.intl.string(W.t.ohTzZG) : W.intl.string(W.t['eLfh+f'])
                        }),
                        (0, a.jsx)(J, {
                            expressionSourceGuild: null != b ? b : y.JO.createFromGuildRecord(A),
                            hasJoinedExpressionSourceGuild: $,
                            isDisplayingJoinGuildButtonInPopout: e_
                        }),
                        r &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    s(),
                                    null != o.emojiId &&
                                        em &&
                                        (0, a.jsx)(et, {
                                            emojiId: o.emojiId,
                                            expressionSourceGuild: b,
                                            popoutData: eu,
                                            onClose: N,
                                            hasJoinedEmojiSourceGuild: $,
                                            isDisplayingButtonInTopSection: e_ || eh
                                        })
                                ]
                            })
                    ]
                });
            },
            ev = ee || ($ && !X) || null != b;
        return (0, a.jsxs)(V.W_, {
            className: K.popoutContent,
            children: [ep(), ev && eE()]
        });
    },
    et = (e) => {
        var n;
        let { emojiId: r, expressionSourceGuild: i, hasJoinedEmojiSourceGuild: s, popoutData: o, onClose: l, isDisplayingButtonInTopSection: u } = e,
            c = (null !== (n = null == i ? void 0 : i.emojis) && void 0 !== n ? n : [])
                .slice(0, q + 1)
                .filter((e) => e.id !== r)
                .slice(0, q),
            d = () =>
                s
                    ? null
                    : c.map((e) =>
                          (0, a.jsx)(
                              f.Tooltip,
                              {
                                  text: e.require_colons ? ':'.concat(e.name, ':') : e.name,
                                  ...V.b_,
                                  children: (n) =>
                                      (0, a.jsx)(h.Z, {
                                          className: K.otherEmoji,
                                          emojiId: e.id,
                                          animated: e.animated,
                                          ...n
                                      })
                              },
                              e.id
                          )
                      ),
            { type: _, description: p } = o,
            m = () =>
                _ === F.$.GET_PREMIUM
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(x.Z, {
                                  subscriptionTier: Y.Si.TIER_2,
                                  buttonText: o.text,
                                  className: K.ctaButton,
                                  fullWidth: !0,
                                  onClick: () => l()
                              }),
                              null != p &&
                                  (0, a.jsx)('div', {
                                      className: K.ctaDescription,
                                      children: (0, a.jsx)(f.Text, {
                                          variant: 'text-sm/medium',
                                          'aria-label': p,
                                          children: p
                                      })
                                  })
                          ]
                      })
                    : _ === F.$.JOIN_GUILD
                      ? (0, a.jsx)(f.Button, {
                            size: f.Button.Sizes.SMALL,
                            className: K.ctaButton,
                            color: f.ButtonColors.BRAND,
                            fullWidth: !0,
                            onClick: () => {
                                (0, G.Ub)(i.id, {});
                            },
                            children: o.text
                        })
                      : null;
        return (0, a.jsxs)('div', {
            className: K.otherEmojisContainer,
            children: [d(), !u && m()]
        });
    };
