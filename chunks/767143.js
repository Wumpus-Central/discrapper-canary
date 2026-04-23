"use strict";
n.d(t, { G7: () => J, MV: () => Z, iP: () => ee, mG: () => en, sX: () => et });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(110259),
    l = n(311907),
    u = n(305866),
    c = n(3026),
    d = n(990078),
    _ = n(862482),
    f = n(834730),
    p = n(939249),
    h = n(534514),
    E = n(821609),
    m = n(847374),
    g = n(686956),
    A = n(565645),
    I = n(793574),
    T = n(688810),
    S = n(139286),
    y = n(235986),
    N = n(573435),
    v = n(836039),
    C = n(695282),
    O = n(624793),
    R = n(731383),
    b = n(263063),
    D = n(714991),
    L = n(492494),
    w = n(384684),
    M = n(985242),
    P = n(87719),
    x = n(725807),
    k = n(976860),
    U = n(309010),
    G = n(967198),
    F = n(287809),
    V = n(954571),
    B = n(486020),
    H = n(449054),
    j = n(927578),
    Y = n(450707),
    W = n(252061),
    K = n(652176),
    $ = n(652215),
    z = n(746080),
    q = n(788868),
    X = n(985018),
    Q = n(979132);
let Z = (e) => {
        let { node: t } = e;
        (0, R.i)({ emojiId: t.emojiId, currentGuildId: G.A.getGuildId() });
        let n = (0, W.A)(t.name),
            i = n !== t.name;
        return (0, r.jsx)(u.l, {
            children: (0, r.jsx)(K.Uq, {
                children: (0, r.jsxs)(y.A, {
                    className: Q.gH,
                    children: [
                        (0, r.jsx)(A.A, {
                            emojiName: t.name,
                            className: Q.P$,
                            src: t.src,
                            animated: !1,
                            size: "jumbo",
                        }),
                        (0, r.jsxs)(y.A, {
                            direction: y.A.Direction.VERTICAL,
                            justify: y.A.Justify.CENTER,
                            className: Q.bM,
                            children: [
                                (0, r.jsx)(f.E, {
                                    className: Q.__invalid_emojiName,
                                    variant: "text-md/semibold",
                                    children: i
                                        ? (0, r.jsx)("div", { className: Q.Gl, children: n })
                                        : (0, r.jsx)(c.A, { children: n }),
                                }),
                                (0, r.jsx)(f.E, { variant: "text-sm/normal", children: X.intl.string(X.t.sXdH8c) }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    J = (e) => {
        let t,
            { expressionSourceGuild: n, hasJoinedExpressionSourceGuild: i, isDisplayingJoinGuildButtonInPopout: s } = e,
            { id: o, icon: l, name: u } = n,
            d = B.Ay.getGuildIconURL({ id: o, icon: l, size: 32, canAnimate: !0 }),
            _ = (i = i ?? !0) || n.isDiscoverable(),
            E = () => {
                n.isDiscoverable() ? (0, H.Z2)(o, {}) : i && (0, k.pX)($.BVt.CHANNEL(o, U.A.getChannelId(o)));
            },
            m = n.isDiscoverable() && null != n.presenceCount;
        return (0, r.jsxs)(y.A, {
            align: y.A.Align.CENTER,
            children: [
                (0, r.jsx)(N.Ay, {
                    mask: N.Ay.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    className: Q.__invalid_guildIconContainer,
                    children:
                        null != d && _
                            ? (0, r.jsxs)(p.D, {
                                  "aria-label": u,
                                  onClick: E,
                                  children: [(0, r.jsx)("img", { src: d, alt: "", className: Q.$f }), " :"],
                              })
                            : (0, r.jsx)(b.Ay, { size: b.Ay.Sizes.SMALL, className: Q.oi, guild: n }),
                }),
                (0, r.jsxs)(y.A, {
                    direction: y.A.Direction.VERTICAL,
                    className: a()(Q.__invalid_guildInformation, Q.bM),
                    children: [
                        (0, r.jsxs)(y.A, {
                            align: y.A.Align.CENTER,
                            children: [
                                (0, r.jsx)(D.A, { guild: n, className: Q.n2 }),
                                _
                                    ? (0, r.jsx)(p.D, {
                                          onClick: E,
                                          className: Q.bM,
                                          children: (0, r.jsx)(h.D, {
                                              className: Q.J5,
                                              variant: "heading-md/semibold",
                                              children: (0, r.jsx)(c.A, { children: u }),
                                          }),
                                      })
                                    : (0, r.jsx)(h.D, {
                                          variant: "heading-md/semibold",
                                          children: (0, r.jsx)(c.A, { children: u }),
                                      }),
                            ],
                        }),
                        (0, r.jsx)(y.A, {
                            align: y.A.Align.CENTER,
                            children: m
                                ? ((t = !s && !i),
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(f.E, {
                                              variant: "text-xs/normal",
                                              color: "text-default",
                                              children: X.intl.format(X.t["LC+S+m"], {
                                                  membersOnline: n.presenceCount,
                                              }),
                                          }),
                                          (0, r.jsx)("div", { className: Q.zk }),
                                          t
                                              ? (0, r.jsx)(p.D, {
                                                    className: Q.Ki,
                                                    onClick: E,
                                                    children: (0, r.jsx)(f.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-link",
                                                        children: X.intl.string(X.t.riu2R5),
                                                    }),
                                                })
                                              : (0, r.jsx)(f.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: X.intl.string(X.t.inyJqO),
                                                }),
                                      ],
                                  }))
                                : (0, r.jsx)(f.E, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      children: X.intl.string(X.t.H29mx4),
                                  }),
                        }),
                    ],
                }),
            ],
        });
    },
    ee = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: i, nonce: s } = e,
            {
                expressionSourceGuild: a,
                expressionSourceApplication: o,
                sourceType: l,
                joinedEmojiSourceGuildRecord: c,
                emoji: d,
                isFetching: _,
            } = (0, C.y)({ emojiId: t.emojiId, refreshPositionKey: i });
        return _
            ? (0, r.jsx)(K.Y0, {})
            : (0, r.jsx)(u.l, {
                  "aria-label": t.name,
                  children: (0, r.jsx)(et, {
                      node: t,
                      sourceType: l,
                      expressionSourceApplication: o,
                      guildEmoji: d ?? void 0,
                      expressionSourceGuild: a,
                      joinedEmojiSourceGuildRecord: c,
                      closePopout: n,
                      onToggleShowMoreEmojis: i,
                      demoMode: !1,
                      nonce: s,
                  }),
              });
    },
    et = (e) => {
        let t,
            n,
            s,
            u,
            d,
            {
                node: h,
                sourceType: N,
                expressionSourceApplication: C,
                expressionSourceGuild: b,
                joinedEmojiSourceGuildRecord: D,
                closePopout: k,
                onToggleShowMoreEmojis: U,
                guildEmoji: B,
                demoMode: H = !1,
                nonce: W,
            } = e,
            Z = (0, l.bG)([F.default], () => F.default.getCurrentUser()),
            ee = (0, l.bG)([G.A], () => G.A.getGuildId()),
            et = j.Ay.isPremium(Z),
            er = null != ee && (ee === b?.id || ee === D?.id),
            ei = null != D,
            es = b?.isDiscoverable() ?? !1;
        H && ((et = !0), (es = !0), (ei = !1), (er = !1));
        let ea = {
                page: null != (0, l.bG)([G.A], () => G.A.getGuildId()) ? $.liQ.GUILD_CHANNEL : $.liQ.DM_CHANNEL,
                section: $.JJy.EMOJI_UPSELL_POPOUT,
            },
            {
                isRoleSubscriptionEmoji: eo,
                isUnusableRoleSubscriptionEmoji: el,
                userIsRoleSubscriber: eu,
            } = i.useMemo(
                () =>
                    null == B
                        ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                        : {
                              isRoleSubscriptionEmoji: L.kT(B),
                              isUnusableRoleSubscriptionEmoji: L.JN(B, ee ?? void 0),
                              userIsRoleSubscriber: w.A.getUserSubscriptionRoles(B.guildId).size > 0,
                          },
                [B, ee],
            ),
            ec = !!el && (0, v.tE)(B?.guildId),
            { analyticsLocations: ed } = (0, T.Ay)(I.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, S.A)(
            {
                type: o.ImpressionTypes.MODAL,
                name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: { location_stack: ed, emoji_guild_id: B?.guildId ?? null, emoji_id: B?.id ?? null },
            },
            { disableTrack: !eo },
        );
        let e_ = G.A.getGuildId(),
            ef = (0, Y.O)({
                sourceType: N,
                expressionSourceApplication: C,
                isPremium: et,
                hasJoinedEmojiSourceGuild: ei,
                isRoleSubscriptionEmoji: eo,
                isUnusableRoleSubscriptionEmoji: el,
                userIsRoleSubscriber: eu,
                emojiComesFromCurrentGuild: er,
                isDiscoverable: es,
                shouldHideRoleSubscriptionCTA: ec,
                onOpenPremiumSettings: () => {
                    k(),
                        V.default.track($.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_page: ea.page,
                            location_section: ea.section,
                        }),
                        (0, P.e)();
                },
            }),
            ep = ei && el && !ec && ((et && eo) || !et),
            eh = ef.emojiDescription,
            eE = (0, R.i)({
                emojiId: h.emojiId,
                currentGuildId: e_,
                popoutData: ef,
                emojiSourceGuildId: b?.id,
                nonce: W,
                demoMode: H,
            }),
            em = ef.type === Y.u.JOIN_GUILD,
            eg = ef.type === Y.u.GET_PREMIUM,
            [eA, eI] = i.useState(!1),
            eT = es || (ei && !er) || null != b;
        return (0, r.jsxs)(K.Uq, {
            className: Q.Bm,
            children: [
                ((t = async () => {
                    if (H || null == b || ei) return;
                    k();
                    let e = b.id;
                    try {
                        await g.A.joinGuild(e), g.A.transitionToGuildSync(e);
                    } catch {}
                }),
                (n = !ei && es),
                (0, r.jsxs)("div", {
                    className: Q.gH,
                    children: [
                        (0, r.jsxs)(y.A, {
                            children: [
                                (0, r.jsx)(A.A, {
                                    className: Q.P$,
                                    emojiId: h.emojiId,
                                    emojiName: h.name,
                                    animated: h.animated,
                                    size: "jumbo",
                                }),
                                (0, r.jsxs)(y.A, {
                                    direction: y.A.Direction.VERTICAL,
                                    justify: y.A.Justify.CENTER,
                                    className: Q.bM,
                                    children: [
                                        (0, r.jsx)(f.E, {
                                            variant: "text-md/semibold",
                                            children: (0, r.jsx)(c.A, { children: h.name }),
                                        }),
                                        null != eh && (0, r.jsx)(f.E, { variant: "text-sm/normal", children: eh }),
                                    ],
                                }),
                            ],
                        }),
                        eg
                            ? (0, r.jsx)(x.A, {
                                  className: Q.lI,
                                  subscriptionTier: q.pe.TIER_2,
                                  size: _.$n.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: ef.text },
                                  onSubscribeModalClose: (e) => (e ? t() : k()),
                                  postSuccessGuild: n ? (b ?? void 0) : void 0,
                                  premiumModalAnalyticsLocation: ea,
                              })
                            : em
                              ? (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: Q.lI,
                                    children: (0, r.jsx)(E.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ef.text,
                                        fullWidth: !0,
                                        onClick: t,
                                    }),
                                })
                              : void 0,
                        ep &&
                            (0, r.jsx)(M.A, {
                                text: eu ? X.intl.string(X.t.yma8Vp) : X.intl.string(X.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: () => {
                                    k(),
                                        D?.id != null &&
                                            g.A.transitionToGuildSync(
                                                D.id,
                                                {
                                                    sourceLocationStack: [
                                                        I.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                z.VV.ROLE_SUBSCRIPTIONS,
                                            );
                                },
                            }),
                    ],
                })),
                eT &&
                    ((s = null != b && !ei && es && (b?.emojis?.length ?? 0) > 1),
                    (u = () => {
                        s &&
                            (U?.(),
                            eA || H || V.default.track($.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eE),
                            eI(!eA));
                    }),
                    (0, r.jsxs)("div", {
                        className: Q.tl,
                        children: [
                            (0, r.jsx)(f.E, {
                                className: Q.YW,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: ei ? X.intl.string(X.t.ohTzZH) : X.intl.string(X.t["eLfh+a"]),
                            }),
                            (0, r.jsx)(J, {
                                expressionSourceGuild: b ?? O.GO.createFromGuildRecord(D),
                                hasJoinedExpressionSourceGuild: ei,
                                isDisplayingJoinGuildButtonInPopout: em,
                            }),
                            s &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        ((d = X.intl.string(X.t.pnsAS2)),
                                        (0, r.jsx)(p.D, {
                                            onClick: u,
                                            className: Q.wK,
                                            children: (0, r.jsxs)(y.A, {
                                                children: [
                                                    (0, r.jsx)(f.E, {
                                                        className: Q.__invalid_showMoreEmojisLabel,
                                                        "aria-label": d,
                                                        variant: "text-xs/normal",
                                                        color: "none",
                                                        children: d,
                                                    }),
                                                    (0, r.jsx)(m.a, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: a()(Q.ZB, { [Q.cP]: !eA }),
                                                    }),
                                                ],
                                            }),
                                        })),
                                        null != h.emojiId &&
                                            eA &&
                                            (0, r.jsx)(en, {
                                                emojiId: h.emojiId,
                                                expressionSourceGuild: b,
                                                popoutData: ef,
                                                onClose: k,
                                                hasJoinedEmojiSourceGuild: ei,
                                                isDisplayingButtonInTopSection: em || eg,
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
                hasJoinedEmojiSourceGuild: i,
                popoutData: s,
                onClose: a,
                isDisplayingButtonInTopSection: o,
            } = e,
            l = (n?.emojis ?? [])
                .slice(0, 13)
                .filter((e) => e.id !== t)
                .slice(0, 12),
            { type: u, description: c } = s;
        return (0, r.jsxs)("div", {
            className: Q.LX,
            children: [
                i
                    ? null
                    : l.map((e) =>
                          (0, r.jsx)(
                              d.m,
                              {
                                  text: e.require_colons ? `:${e.name}:` : e.name,
                                  ...K.Uk,
                                  children: (0, r.jsx)(A.A, { className: Q.Th, emojiId: e.id, animated: e.animated }),
                              },
                              e.id,
                          ),
                      ),
                !o &&
                    (u === Y.u.GET_PREMIUM
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(x.A, {
                                      subscriptionTier: q.pe.TIER_2,
                                      textOptions: { textOverride: s.text },
                                      className: Q.lI,
                                      fullWidth: !0,
                                      onClick: () => a(),
                                  }),
                                  null != c &&
                                      (0, r.jsx)("div", {
                                          className: Q.vd,
                                          children: (0, r.jsx)(f.E, {
                                              variant: "text-sm/medium",
                                              "aria-label": c,
                                              children: c,
                                          }),
                                      }),
                              ],
                          })
                        : u === Y.u.JOIN_GUILD
                          ? (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: Q.lI,
                                children: (0, r.jsx)(E.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: s.text,
                                    fullWidth: !0,
                                    onClick: () => {
                                        (0, H.Z2)(n.id, {});
                                    },
                                }),
                            })
                          : null),
            ],
        });
    };
