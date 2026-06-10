"use strict";
n.d(t, { G7: () => en, iP: () => ei, sX: () => er, mG: () => es, MV: () => et });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(562708),
    l = n(17928),
    u = n(305866),
    c = n(3026),
    d = n(990078),
    _ = n(862482),
    h = n(834730),
    f = n(939249),
    p = n(534514),
    E = n(821609),
    m = n(847374),
    g = n(66834),
    A = n(565645),
    I = n(793574),
    T = n(688810),
    S = n(139286),
    y = n(235986),
    N = n(573435),
    v = n(836039),
    C = n(702841),
    R = n(71393),
    O = n(159273),
    b = n(770335),
    D = n(624793),
    L = n(652215),
    w = n(731383),
    M = n(548118),
    P = n(714991),
    x = n(492494),
    k = n(384684),
    U = n(985242),
    G = n(87719),
    F = n(725807),
    V = n(976860),
    B = n(309010),
    H = n(967198),
    j = n(287809),
    Y = n(174459),
    W = n(486020),
    K = n(385648),
    $ = n(428262),
    z = n(450707),
    q = n(773669),
    X = n(375708),
    Z = n(34337),
    Q = n(746080),
    J = n(788868),
    ee = n(979132);
let et = (e) => {
        var t, n;
        let r,
            s,
            { node: a } = e;
        (0, w.i)({ emojiId: a.emojiId, currentGuildId: H.A.getGuildId() });
        let o =
                ((n = t = a.name),
                (r = (0, l.bG)([q.default], () => q.default.locale.startsWith("en-"))),
                (s = ":pizza:" === n && r ? X.intl.formatToPlainString(X.t["1knDPI"], { emojiName: n }) : n),
                ":pizza:" === t ? s : t),
            d = o !== a.name;
        return (0, i.jsx)(u.l, {
            children: (0, i.jsx)(Z.Uq, {
                children: (0, i.jsxs)(y.A, {
                    className: ee.gH,
                    children: [
                        (0, i.jsx)(A.A, {
                            emojiName: a.name,
                            className: ee.P$,
                            src: a.src,
                            animated: !1,
                            size: "jumbo",
                        }),
                        (0, i.jsxs)(y.A, {
                            direction: y.A.Direction.VERTICAL,
                            justify: y.A.Justify.CENTER,
                            className: ee.bM,
                            children: [
                                (0, i.jsx)(h.E, {
                                    className: ee.__invalid_emojiName,
                                    variant: "text-md/semibold",
                                    children: d
                                        ? (0, i.jsx)("div", { className: ee.Gl, children: o })
                                        : (0, i.jsx)(c.A, { children: o }),
                                }),
                                (0, i.jsx)(h.E, { variant: "text-sm/normal", children: X.intl.string(X.t.sXdH8c) }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    en = (e) => {
        let t,
            { expressionSourceGuild: n, hasJoinedExpressionSourceGuild: r, isDisplayingJoinGuildButtonInPopout: s } = e,
            { id: o, icon: l, name: u } = n,
            d = W.Ay.getGuildIconURL({ id: o, icon: l, size: 32, canAnimate: !0 }),
            _ = (r = r ?? !0) || n.isDiscoverable(),
            E = () => {
                n.isDiscoverable() ? (0, K.Z2)(o, {}) : r && (0, V.pX)(L.BVt.CHANNEL(o, B.A.getChannelId(o)));
            },
            m = n.isDiscoverable() && null != n.presenceCount;
        return (0, i.jsxs)(y.A, {
            align: y.A.Align.CENTER,
            children: [
                (0, i.jsx)(N.Ay, {
                    mask: N.Ay.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    className: ee.__invalid_guildIconContainer,
                    children:
                        null != d && _
                            ? (0, i.jsxs)(f.D, {
                                  "aria-label": u,
                                  onClick: E,
                                  children: [(0, i.jsx)("img", { src: d, alt: "", className: ee.$f }), " :"],
                              })
                            : (0, i.jsx)(M.Ay, { size: M.Ay.Sizes.SMALL, className: ee.oi, guild: n }),
                }),
                (0, i.jsxs)(y.A, {
                    direction: y.A.Direction.VERTICAL,
                    className: a()(ee.__invalid_guildInformation, ee.bM),
                    children: [
                        (0, i.jsxs)(y.A, {
                            align: y.A.Align.CENTER,
                            children: [
                                (0, i.jsx)(P.A, { guild: n, className: ee.n2 }),
                                _
                                    ? (0, i.jsx)(f.D, {
                                          onClick: E,
                                          className: ee.bM,
                                          children: (0, i.jsx)(p.D, {
                                              className: ee.J5,
                                              variant: "heading-md/semibold",
                                              children: (0, i.jsx)(c.A, { children: u }),
                                          }),
                                      })
                                    : (0, i.jsx)(p.D, {
                                          variant: "heading-md/semibold",
                                          children: (0, i.jsx)(c.A, { children: u }),
                                      }),
                            ],
                        }),
                        (0, i.jsx)(y.A, {
                            align: y.A.Align.CENTER,
                            children: m
                                ? ((t = !s && !r),
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(h.E, {
                                              variant: "text-xs/normal",
                                              color: "text-default",
                                              children: X.intl.format(X.t["LC+S+m"], {
                                                  membersOnline: n.presenceCount,
                                              }),
                                          }),
                                          (0, i.jsx)("div", { className: ee.zk }),
                                          t
                                              ? (0, i.jsx)(f.D, {
                                                    className: ee.Ki,
                                                    onClick: E,
                                                    children: (0, i.jsx)(h.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-link",
                                                        children: X.intl.string(X.t.riu2R5),
                                                    }),
                                                })
                                              : (0, i.jsx)(h.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: X.intl.string(X.t.inyJqO),
                                                }),
                                      ],
                                  }))
                                : (0, i.jsx)(h.E, {
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
    ei = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: s, nonce: a } = e,
            {
                expressionSourceGuild: o,
                expressionSourceApplication: l,
                sourceType: c,
                joinedEmojiSourceGuildRecord: d,
                emoji: _,
                isFetching: h,
            } = ((e) => {
                let { emojiId: t, refreshPositionKey: n } = e,
                    { joinedEmojiSourceGuildRecord: i, emoji: s } = (0, C.cf)([O.Ay, R.A], () => {
                        var e, n;
                        let i;
                        return (
                            (e = O.Ay),
                            (n = R.A),
                            (i = null != t ? e.getCustomEmojiById(t) : null),
                            i?.type === b.i.GUILD
                                ? { emoji: i, joinedEmojiSourceGuildRecord: n.getGuild(i?.guildId) }
                                : { emoji: null, joinedEmojiSourceGuildRecord: null }
                        );
                    }),
                    a = null != i,
                    o = null != i && i.features.has(L.GuildFeatures.DISCOVERABLE),
                    l = (!a || o) && null != t,
                    [u, c] = r.useState(l),
                    [d, _] = r.useState(null),
                    h = null != i ? D.GO.createFromGuildRecord(i) : null,
                    [f, p] = r.useState(h),
                    [E, m] = r.useState(null),
                    g = r.useRef(n);
                return (
                    r.useEffect(() => {
                        g.current = n;
                    }),
                    r.useEffect(() => {
                        g.current?.();
                        let e = async () => {
                            let e = null != t ? await (0, D.g_)(t) : null;
                            if (null != e)
                                switch ((_(e.type), e.type)) {
                                    case D.rV.APPLICATION:
                                        m(e.application);
                                        break;
                                    case D.rV.GUILD:
                                        p(e.guild);
                                }
                            c(!1), g.current?.();
                        };
                        l ? e() : g.current?.();
                    }, [t, l]),
                    {
                        expressionSourceGuild: f,
                        expressionSourceApplication: E,
                        sourceType: d,
                        joinedEmojiSourceGuildRecord: i,
                        hasJoinedEmojiSourceGuild: a,
                        emoji: s,
                        isFetching: u,
                    }
                );
            })({ emojiId: t.emojiId, refreshPositionKey: s });
        return h
            ? (0, i.jsx)(Z.Y0, {})
            : (0, i.jsx)(u.l, {
                  "aria-label": t.name,
                  children: (0, i.jsx)(er, {
                      node: t,
                      sourceType: c,
                      expressionSourceApplication: l,
                      guildEmoji: _ ?? void 0,
                      expressionSourceGuild: o,
                      joinedEmojiSourceGuildRecord: d,
                      closePopout: n,
                      onToggleShowMoreEmojis: s,
                      demoMode: !1,
                      nonce: a,
                  }),
              });
    },
    er = (e) => {
        let t,
            n,
            s,
            u,
            d,
            {
                node: p,
                sourceType: N,
                expressionSourceApplication: C,
                expressionSourceGuild: R,
                joinedEmojiSourceGuildRecord: O,
                closePopout: b,
                onToggleShowMoreEmojis: M,
                guildEmoji: P,
                demoMode: V = !1,
                nonce: B,
            } = e,
            W = (0, l.bG)([j.default], () => j.default.getCurrentUser()),
            K = (0, l.bG)([H.A], () => H.A.getGuildId()),
            q = $.Ay.isPremium(W),
            et = null != K && (K === R?.id || K === O?.id),
            ei = null != O,
            er = R?.isDiscoverable() ?? !1;
        V && ((q = !0), (er = !0), (ei = !1), (et = !1));
        let ea = {
                page: null != (0, l.bG)([H.A], () => H.A.getGuildId()) ? L.liQ.GUILD_CHANNEL : L.liQ.DM_CHANNEL,
                section: L.JJy.EMOJI_UPSELL_POPOUT,
            },
            {
                isRoleSubscriptionEmoji: eo,
                isUnusableRoleSubscriptionEmoji: el,
                userIsRoleSubscriber: eu,
            } = r.useMemo(
                () =>
                    null == P
                        ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                        : {
                              isRoleSubscriptionEmoji: x.kT(P),
                              isUnusableRoleSubscriptionEmoji: x.JN(P, K ?? void 0),
                              userIsRoleSubscriber: k.A.getUserSubscriptionRoles(P.guildId).size > 0,
                          },
                [P, K],
            ),
            ec = !!el && (0, v.tE)(P?.guildId),
            { analyticsLocations: ed } = (0, T.Ay)(I.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, S.A)(
            {
                type: o.ImpressionTypes.MODAL,
                name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: { location_stack: ed, emoji_guild_id: P?.guildId ?? null, emoji_id: P?.id ?? null },
            },
            { disableTrack: !eo },
        );
        let e_ = H.A.getGuildId(),
            eh = (0, z.O)({
                sourceType: N,
                expressionSourceApplication: C,
                isPremium: q,
                hasJoinedEmojiSourceGuild: ei,
                isRoleSubscriptionEmoji: eo,
                isUnusableRoleSubscriptionEmoji: el,
                userIsRoleSubscriber: eu,
                emojiComesFromCurrentGuild: et,
                isDiscoverable: er,
                shouldHideRoleSubscriptionCTA: ec,
                onOpenPremiumSettings: () => {
                    b(),
                        Y.default.track(L.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_page: ea.page,
                            location_section: ea.section,
                        }),
                        (0, G.e)();
                },
            }),
            ef = ei && el && !ec && ((q && eo) || !q),
            ep = eh.emojiDescription,
            eE = (0, w.i)({
                emojiId: p.emojiId,
                currentGuildId: e_,
                popoutData: eh,
                emojiSourceGuildId: R?.id,
                nonce: B,
                demoMode: V,
            }),
            em = eh.type === z.u.JOIN_GUILD,
            eg = eh.type === z.u.GET_PREMIUM,
            [eA, eI] = r.useState(!1),
            eT = er || (ei && !et) || null != R;
        return (0, i.jsxs)(Z.Uq, {
            className: ee.Bm,
            children: [
                ((t = async () => {
                    if (V || null == R || ei) return;
                    b();
                    let e = R.id;
                    try {
                        await g.A.joinGuild(e), g.A.transitionToGuildSync(e);
                    } catch {}
                }),
                (n = !ei && er),
                (0, i.jsxs)("div", {
                    className: ee.gH,
                    children: [
                        (0, i.jsxs)(y.A, {
                            children: [
                                (0, i.jsx)(A.A, {
                                    className: ee.P$,
                                    emojiId: p.emojiId,
                                    emojiName: p.name,
                                    animated: p.animated,
                                    size: "jumbo",
                                }),
                                (0, i.jsxs)(y.A, {
                                    direction: y.A.Direction.VERTICAL,
                                    justify: y.A.Justify.CENTER,
                                    className: ee.bM,
                                    children: [
                                        (0, i.jsx)(h.E, {
                                            variant: "text-md/semibold",
                                            children: (0, i.jsx)(c.A, { children: p.name }),
                                        }),
                                        null != ep && (0, i.jsx)(h.E, { variant: "text-sm/normal", children: ep }),
                                    ],
                                }),
                            ],
                        }),
                        eg
                            ? (0, i.jsx)(F.A, {
                                  className: ee.lI,
                                  subscriptionTier: J.pe.TIER_2,
                                  size: _.$n.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: eh.text },
                                  onSubscribeModalClose: (e) => (e ? t() : b()),
                                  postSuccessGuild: n ? (R ?? void 0) : void 0,
                                  premiumModalAnalyticsLocation: ea,
                              })
                            : em
                              ? (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: ee.lI,
                                    children: (0, i.jsx)(E.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: eh.text,
                                        fullWidth: !0,
                                        onClick: t,
                                    }),
                                })
                              : void 0,
                        ef &&
                            (0, i.jsx)(U.A, {
                                text: eu ? X.intl.string(X.t.yma8Vp) : X.intl.string(X.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: () => {
                                    b(),
                                        O?.id != null &&
                                            g.A.transitionToGuildSync(
                                                O.id,
                                                {
                                                    sourceLocationStack: [
                                                        I.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                Q.VV.ROLE_SUBSCRIPTIONS,
                                            );
                                },
                            }),
                    ],
                })),
                eT &&
                    ((s = null != R && !ei && er && (R?.emojis?.length ?? 0) > 1),
                    (u = () => {
                        s &&
                            (M?.(),
                            eA || V || Y.default.track(L.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eE),
                            eI(!eA));
                    }),
                    (0, i.jsxs)("div", {
                        className: ee.tl,
                        children: [
                            (0, i.jsx)(h.E, {
                                className: ee.YW,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: ei ? X.intl.string(X.t.ohTzZH) : X.intl.string(X.t["eLfh+a"]),
                            }),
                            (0, i.jsx)(en, {
                                expressionSourceGuild: R ?? D.GO.createFromGuildRecord(O),
                                hasJoinedExpressionSourceGuild: ei,
                                isDisplayingJoinGuildButtonInPopout: em,
                            }),
                            s &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        ((d = X.intl.string(X.t.pnsAS2)),
                                        (0, i.jsx)(f.D, {
                                            onClick: u,
                                            className: ee.wK,
                                            children: (0, i.jsxs)(y.A, {
                                                children: [
                                                    (0, i.jsx)(h.E, {
                                                        className: ee.__invalid_showMoreEmojisLabel,
                                                        "aria-label": d,
                                                        variant: "text-xs/normal",
                                                        color: "none",
                                                        children: d,
                                                    }),
                                                    (0, i.jsx)(m.a, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: a()(ee.ZB, { [ee.cP]: !eA }),
                                                    }),
                                                ],
                                            }),
                                        })),
                                        null != p.emojiId &&
                                            eA &&
                                            (0, i.jsx)(es, {
                                                emojiId: p.emojiId,
                                                expressionSourceGuild: R,
                                                popoutData: eh,
                                                onClose: b,
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
    es = (e) => {
        let {
                emojiId: t,
                expressionSourceGuild: n,
                hasJoinedEmojiSourceGuild: r,
                popoutData: s,
                onClose: a,
                isDisplayingButtonInTopSection: o,
            } = e,
            l = (n?.emojis ?? [])
                .slice(0, 13)
                .filter((e) => e.id !== t)
                .slice(0, 12),
            { type: u, description: c } = s;
        return (0, i.jsxs)("div", {
            className: ee.LX,
            children: [
                r
                    ? null
                    : l.map((e) =>
                          (0, i.jsx)(
                              d.m,
                              {
                                  text: e.require_colons ? `:${e.name}:` : e.name,
                                  ...Z.Uk,
                                  children: (0, i.jsx)(A.A, { className: ee.Th, emojiId: e.id, animated: e.animated }),
                              },
                              e.id,
                          ),
                      ),
                !o &&
                    (u === z.u.GET_PREMIUM
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(F.A, {
                                      subscriptionTier: J.pe.TIER_2,
                                      textOptions: { textOverride: s.text },
                                      className: ee.lI,
                                      fullWidth: !0,
                                      onClick: () => a(),
                                  }),
                                  null != c &&
                                      (0, i.jsx)("div", {
                                          className: ee.vd,
                                          children: (0, i.jsx)(h.E, {
                                              variant: "text-sm/medium",
                                              "aria-label": c,
                                              children: c,
                                          }),
                                      }),
                              ],
                          })
                        : u === z.u.JOIN_GUILD
                          ? (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: ee.lI,
                                children: (0, i.jsx)(E.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: s.text,
                                    fullWidth: !0,
                                    onClick: () => {
                                        (0, K.Z2)(n.id, {});
                                    },
                                }),
                            })
                          : null),
            ],
        });
    };
