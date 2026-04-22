"use strict";
n.d(t, { G7: () => Q, MV: () => X, iP: () => ee, mG: () => en, sX: () => et });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(110259),
    o = n(311907),
    c = n(305866),
    u = n(3026),
    d = n(990078),
    h = n(862482),
    m = n(834730),
    p = n(939249),
    f = n(534514),
    g = n(821609),
    _ = n(847374),
    x = n(686956),
    A = n(565645),
    C = n(793574),
    E = n(688810),
    I = n(139286),
    v = n(235986),
    y = n(573435),
    S = n(836039),
    b = n(695282),
    N = n(624793),
    T = n(731383),
    j = n(263063),
    R = n(714991),
    w = n(492494),
    L = n(384684),
    M = n(985242),
    k = n(87719),
    O = n(725807),
    P = n(976860),
    D = n(309010),
    U = n(967198),
    V = n(287809),
    G = n(954571),
    F = n(486020),
    B = n(449054),
    H = n(927578),
    W = n(450707),
    K = n(252061),
    z = n(652176),
    Z = n(652215),
    q = n(746080),
    Y = n(788868),
    J = n(985018),
    $ = n(979132);
let X = (e) => {
        let { node: t } = e;
        (0, T.i)({ emojiId: t.emojiId, currentGuildId: U.A.getGuildId() });
        let n = (0, K.A)(t.name),
            l = n !== t.name;
        return (0, i.jsx)(c.l, {
            children: (0, i.jsx)(z.Uq, {
                children: (0, i.jsxs)(v.A, {
                    className: $.gH,
                    children: [
                        (0, i.jsx)(A.A, {
                            emojiName: t.name,
                            className: $.P$,
                            src: t.src,
                            animated: !1,
                            size: "jumbo",
                        }),
                        (0, i.jsxs)(v.A, {
                            direction: v.A.Direction.VERTICAL,
                            justify: v.A.Justify.CENTER,
                            className: $.bM,
                            children: [
                                (0, i.jsx)(m.E, {
                                    className: $.__invalid_emojiName,
                                    variant: "text-md/semibold",
                                    children: l
                                        ? (0, i.jsx)("div", { className: $.Gl, children: n })
                                        : (0, i.jsx)(u.A, { children: n }),
                                }),
                                (0, i.jsx)(m.E, { variant: "text-sm/normal", children: J.intl.string(J.t.sXdH8c) }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    Q = (e) => {
        let t,
            { expressionSourceGuild: n, hasJoinedExpressionSourceGuild: l, isDisplayingJoinGuildButtonInPopout: s } = e,
            { id: a, icon: o, name: c } = n,
            d = F.Ay.getGuildIconURL({ id: a, icon: o, size: 32, canAnimate: !0 }),
            h = (l = l ?? !0) || n.isDiscoverable(),
            g = () => {
                n.isDiscoverable() ? (0, B.Z2)(a, {}) : l && (0, P.pX)(Z.BVt.CHANNEL(a, D.A.getChannelId(a)));
            },
            _ = n.isDiscoverable() && null != n.presenceCount;
        return (0, i.jsxs)(v.A, {
            align: v.A.Align.CENTER,
            children: [
                (0, i.jsx)(y.Ay, {
                    mask: y.Ay.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    className: $.__invalid_guildIconContainer,
                    children:
                        null != d && h
                            ? (0, i.jsxs)(p.D, {
                                  "aria-label": c,
                                  onClick: g,
                                  children: [(0, i.jsx)("img", { src: d, alt: "", className: $.$f }), " :"],
                              })
                            : (0, i.jsx)(j.Ay, { size: j.Ay.Sizes.SMALL, className: $.oi, guild: n }),
                }),
                (0, i.jsxs)(v.A, {
                    direction: v.A.Direction.VERTICAL,
                    className: r()($.__invalid_guildInformation, $.bM),
                    children: [
                        (0, i.jsxs)(v.A, {
                            align: v.A.Align.CENTER,
                            children: [
                                (0, i.jsx)(R.A, { guild: n, className: $.n2 }),
                                h
                                    ? (0, i.jsx)(p.D, {
                                          onClick: g,
                                          className: $.bM,
                                          children: (0, i.jsx)(f.D, {
                                              className: $.J5,
                                              variant: "heading-md/semibold",
                                              children: (0, i.jsx)(u.A, { children: c }),
                                          }),
                                      })
                                    : (0, i.jsx)(f.D, {
                                          variant: "heading-md/semibold",
                                          children: (0, i.jsx)(u.A, { children: c }),
                                      }),
                            ],
                        }),
                        (0, i.jsx)(v.A, {
                            align: v.A.Align.CENTER,
                            children: _
                                ? ((t = !s && !l),
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(m.E, {
                                              variant: "text-xs/normal",
                                              color: "text-default",
                                              children: J.intl.format(J.t["LC+S+m"], {
                                                  membersOnline: n.presenceCount,
                                              }),
                                          }),
                                          (0, i.jsx)("div", { className: $.zk }),
                                          t
                                              ? (0, i.jsx)(p.D, {
                                                    className: $.Ki,
                                                    onClick: g,
                                                    children: (0, i.jsx)(m.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-link",
                                                        children: J.intl.string(J.t.riu2R5),
                                                    }),
                                                })
                                              : (0, i.jsx)(m.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: J.intl.string(J.t.inyJqO),
                                                }),
                                      ],
                                  }))
                                : (0, i.jsx)(m.E, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      children: J.intl.string(J.t.H29mx4),
                                  }),
                        }),
                    ],
                }),
            ],
        });
    },
    ee = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: l, nonce: s } = e,
            {
                expressionSourceGuild: r,
                expressionSourceApplication: a,
                sourceType: o,
                joinedEmojiSourceGuildRecord: u,
                emoji: d,
                isFetching: h,
            } = (0, b.y)({ emojiId: t.emojiId, refreshPositionKey: l });
        return h
            ? (0, i.jsx)(z.Y0, {})
            : (0, i.jsx)(c.l, {
                  "aria-label": t.name,
                  children: (0, i.jsx)(et, {
                      node: t,
                      sourceType: o,
                      expressionSourceApplication: a,
                      guildEmoji: d ?? void 0,
                      expressionSourceGuild: r,
                      joinedEmojiSourceGuildRecord: u,
                      closePopout: n,
                      onToggleShowMoreEmojis: l,
                      demoMode: !1,
                      nonce: s,
                  }),
              });
    },
    et = (e) => {
        let t,
            n,
            s,
            c,
            d,
            {
                node: f,
                sourceType: y,
                expressionSourceApplication: b,
                expressionSourceGuild: j,
                joinedEmojiSourceGuildRecord: R,
                closePopout: P,
                onToggleShowMoreEmojis: D,
                guildEmoji: F,
                demoMode: B = !1,
                nonce: K,
            } = e,
            X = (0, o.bG)([V.default], () => V.default.getCurrentUser()),
            ee = (0, o.bG)([U.A], () => U.A.getGuildId()),
            et = H.Ay.isPremium(X),
            ei = null != ee && (ee === j?.id || ee === R?.id),
            el = null != R,
            es = j?.isDiscoverable() ?? !1;
        B && ((et = !0), (es = !0), (el = !1), (ei = !1));
        let er = {
                page: null != (0, o.bG)([U.A], () => U.A.getGuildId()) ? Z.liQ.GUILD_CHANNEL : Z.liQ.DM_CHANNEL,
                section: Z.JJy.EMOJI_UPSELL_POPOUT,
            },
            {
                isRoleSubscriptionEmoji: ea,
                isUnusableRoleSubscriptionEmoji: eo,
                userIsRoleSubscriber: ec,
            } = l.useMemo(
                () =>
                    null == F
                        ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                        : {
                              isRoleSubscriptionEmoji: w.kT(F),
                              isUnusableRoleSubscriptionEmoji: w.JN(F, ee ?? void 0),
                              userIsRoleSubscriber: L.A.getUserSubscriptionRoles(F.guildId).size > 0,
                          },
                [F, ee],
            ),
            eu = !!eo && (0, S.tE)(F?.guildId),
            { analyticsLocations: ed } = (0, E.Ay)(C.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, I.A)(
            {
                type: a.ImpressionTypes.MODAL,
                name: a.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: { location_stack: ed, emoji_guild_id: F?.guildId ?? null, emoji_id: F?.id ?? null },
            },
            { disableTrack: !ea },
        );
        let eh = U.A.getGuildId(),
            em = (0, W.O)({
                sourceType: y,
                expressionSourceApplication: b,
                isPremium: et,
                hasJoinedEmojiSourceGuild: el,
                isRoleSubscriptionEmoji: ea,
                isUnusableRoleSubscriptionEmoji: eo,
                userIsRoleSubscriber: ec,
                emojiComesFromCurrentGuild: ei,
                isDiscoverable: es,
                shouldHideRoleSubscriptionCTA: eu,
                onOpenPremiumSettings: () => {
                    P(),
                        G.default.track(Z.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_page: er.page,
                            location_section: er.section,
                        }),
                        (0, k.e)();
                },
            }),
            ep = el && eo && !eu && ((et && ea) || !et),
            ef = em.emojiDescription,
            eg = (0, T.i)({
                emojiId: f.emojiId,
                currentGuildId: eh,
                popoutData: em,
                emojiSourceGuildId: j?.id,
                nonce: K,
                demoMode: B,
            }),
            e_ = em.type === W.u.JOIN_GUILD,
            ex = em.type === W.u.GET_PREMIUM,
            [eA, eC] = l.useState(!1),
            eE = es || (el && !ei) || null != j;
        return (0, i.jsxs)(z.Uq, {
            className: $.Bm,
            children: [
                ((t = async () => {
                    if (B || null == j || el) return;
                    P();
                    let e = j.id;
                    try {
                        await x.A.joinGuild(e), x.A.transitionToGuildSync(e);
                    } catch {}
                }),
                (n = !el && es),
                (0, i.jsxs)("div", {
                    className: $.gH,
                    children: [
                        (0, i.jsxs)(v.A, {
                            children: [
                                (0, i.jsx)(A.A, {
                                    className: $.P$,
                                    emojiId: f.emojiId,
                                    emojiName: f.name,
                                    animated: f.animated,
                                    size: "jumbo",
                                }),
                                (0, i.jsxs)(v.A, {
                                    direction: v.A.Direction.VERTICAL,
                                    justify: v.A.Justify.CENTER,
                                    className: $.bM,
                                    children: [
                                        (0, i.jsx)(m.E, {
                                            variant: "text-md/semibold",
                                            children: (0, i.jsx)(u.A, { children: f.name }),
                                        }),
                                        null != ef && (0, i.jsx)(m.E, { variant: "text-sm/normal", children: ef }),
                                    ],
                                }),
                            ],
                        }),
                        ex
                            ? (0, i.jsx)(O.A, {
                                  className: $.lI,
                                  subscriptionTier: Y.pe.TIER_2,
                                  size: h.$n.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: em.text },
                                  onSubscribeModalClose: (e) => (e ? t() : P()),
                                  postSuccessGuild: n ? (j ?? void 0) : void 0,
                                  premiumModalAnalyticsLocation: er,
                              })
                            : e_
                              ? (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: $.lI,
                                    children: (0, i.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: em.text,
                                        fullWidth: !0,
                                        onClick: t,
                                    }),
                                })
                              : void 0,
                        ep &&
                            (0, i.jsx)(M.A, {
                                text: ec ? J.intl.string(J.t.yma8Vp) : J.intl.string(J.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: () => {
                                    P(),
                                        R?.id != null &&
                                            x.A.transitionToGuildSync(
                                                R.id,
                                                {
                                                    sourceLocationStack: [
                                                        C.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                q.VV.ROLE_SUBSCRIPTIONS,
                                            );
                                },
                            }),
                    ],
                })),
                eE &&
                    ((s = null != j && !el && es && (j?.emojis?.length ?? 0) > 1),
                    (c = () => {
                        s &&
                            (D?.(),
                            eA || B || G.default.track(Z.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eg),
                            eC(!eA));
                    }),
                    (0, i.jsxs)("div", {
                        className: $.tl,
                        children: [
                            (0, i.jsx)(m.E, {
                                className: $.YW,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: el ? J.intl.string(J.t.ohTzZH) : J.intl.string(J.t["eLfh+a"]),
                            }),
                            (0, i.jsx)(Q, {
                                expressionSourceGuild: j ?? N.GO.createFromGuildRecord(R),
                                hasJoinedExpressionSourceGuild: el,
                                isDisplayingJoinGuildButtonInPopout: e_,
                            }),
                            s &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        ((d = J.intl.string(J.t.pnsAS2)),
                                        (0, i.jsx)(p.D, {
                                            onClick: c,
                                            className: $.wK,
                                            children: (0, i.jsxs)(v.A, {
                                                children: [
                                                    (0, i.jsx)(m.E, {
                                                        className: $.__invalid_showMoreEmojisLabel,
                                                        "aria-label": d,
                                                        variant: "text-xs/normal",
                                                        color: "none",
                                                        children: d,
                                                    }),
                                                    (0, i.jsx)(_.a, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: r()($.ZB, { [$.cP]: !eA }),
                                                    }),
                                                ],
                                            }),
                                        })),
                                        null != f.emojiId &&
                                            eA &&
                                            (0, i.jsx)(en, {
                                                emojiId: f.emojiId,
                                                expressionSourceGuild: j,
                                                popoutData: em,
                                                onClose: P,
                                                hasJoinedEmojiSourceGuild: el,
                                                isDisplayingButtonInTopSection: e_ || ex,
                                            }),
                                    ],
                                }),
                        ],
                    })),
            ],
        });
    },
    en = (e) => {
        let {
                emojiId: t,
                expressionSourceGuild: n,
                hasJoinedEmojiSourceGuild: l,
                popoutData: s,
                onClose: r,
                isDisplayingButtonInTopSection: a,
            } = e,
            o = (n?.emojis ?? [])
                .slice(0, 13)
                .filter((e) => e.id !== t)
                .slice(0, 12),
            { type: c, description: u } = s;
        return (0, i.jsxs)("div", {
            className: $.LX,
            children: [
                l
                    ? null
                    : o.map((e) =>
                          (0, i.jsx)(
                              d.m,
                              {
                                  text: e.require_colons ? `:${e.name}:` : e.name,
                                  ...z.Uk,
                                  children: (0, i.jsx)(A.A, { className: $.Th, emojiId: e.id, animated: e.animated }),
                              },
                              e.id,
                          ),
                      ),
                !a &&
                    (c === W.u.GET_PREMIUM
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(O.A, {
                                      subscriptionTier: Y.pe.TIER_2,
                                      textOptions: { textOverride: s.text },
                                      className: $.lI,
                                      fullWidth: !0,
                                      onClick: () => r(),
                                  }),
                                  null != u &&
                                      (0, i.jsx)("div", {
                                          className: $.vd,
                                          children: (0, i.jsx)(m.E, {
                                              variant: "text-sm/medium",
                                              "aria-label": u,
                                              children: u,
                                          }),
                                      }),
                              ],
                          })
                        : c === W.u.JOIN_GUILD
                          ? (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: $.lI,
                                children: (0, i.jsx)(g.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: s.text,
                                    fullWidth: !0,
                                    onClick: () => {
                                        (0, B.Z2)(n.id, {});
                                    },
                                }),
                            })
                          : null),
            ],
        });
    };
