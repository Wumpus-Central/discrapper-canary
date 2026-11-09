var s = t(477900),
    i = t(582128),
    l = t(503698),
    a = t.n(l),
    r = t(613412),
    o = t(855986),
    c = t(3026),
    d = t(305866),
    u = t(834730),
    m = t(939249),
    h = t(534514),
    x = t(821609),
    j = t(847374),
    g = t(866665),
    p = t(778858),
    b = t(565645),
    N = t(793574),
    I = t(688810),
    f = t(139286),
    v = t(235986),
    C = t(573435),
    A = t(836039),
    E = t(490035),
    S = t(433716),
    y = t(695282),
    O = t(624793),
    T = t(731383),
    k = t(682163),
    _ = t(714991),
    R = t(492494),
    G = t(384684),
    P = t(985242),
    L = t(87719),
    M = t(465794),
    w = t(976860),
    D = t(309010),
    U = t(967198),
    z = t(287809),
    V = t(129230),
    B = t(486020),
    K = t(449054),
    J = t(722178),
    W = t(450707),
    H = t(483407),
    F = t(188645),
    q = t(652215),
    X = t(746080),
    Y = t(682901),
    $ = t(792996),
    Z = t(844749);
let Q = (e) => {
    let n,
        {
            expressionSourceGuild: t,
            hasJoinedExpressionSourceGuild: i,
            isDisplayingJoinGuildButtonInPopout: l,
            closePopout: r,
        } = e,
        { id: o, icon: d, name: x } = t,
        j = B.Ay.getGuildIconURL({ id: o, icon: d, size: 32, canAnimate: !0 }),
        g = (i = i ?? !0) || t.isDiscoverable();
    function p() {
        t.isDiscoverable() ? (r(), (0, K.Z2)(o, {})) : i && (r(), (0, w.pX)(q.BVt.CHANNEL(o, D.Ay.getChannelId(o))));
    }
    let b = t.isDiscoverable() && null != t.presenceCount;
    return (0, s.jsxs)(v.A, {
        align: v.A.Align.CENTER,
        children: [
            (0, s.jsx)(C.Ay, {
                mask: C.Ay.Masks.SQUIRCLE,
                width: 32,
                height: 32,
                className: Z.__invalid_guildIconContainer,
                children:
                    null != j && g
                        ? (0, s.jsxs)(m.D, {
                              "aria-label": x,
                              onClick: p,
                              children: [(0, s.jsx)("img", { src: j, alt: "", className: Z.$f }), " :"],
                          })
                        : (0, s.jsx)(k.Ay, { size: k.Ay.Sizes.SMALL, className: Z.oi, guild: t }),
            }),
            (0, s.jsxs)(v.A, {
                direction: v.A.Direction.VERTICAL,
                className: a()(Z.__invalid_guildInformation, Z.bM),
                children: [
                    (0, s.jsxs)(v.A, {
                        align: v.A.Align.CENTER,
                        children: [
                            (0, s.jsx)(_.A, { guild: t, className: Z.n2 }),
                            g
                                ? (0, s.jsx)(m.D, {
                                      onClick: p,
                                      className: Z.bM,
                                      children: (0, s.jsx)(h.D, {
                                          className: Z.J5,
                                          variant: "heading-sm/semibold",
                                          children: (0, s.jsx)(c.A, { children: x }),
                                      }),
                                  })
                                : (0, s.jsx)(h.D, {
                                      variant: "heading-sm/semibold",
                                      children: (0, s.jsx)(c.A, { children: x }),
                                  }),
                        ],
                    }),
                    (0, s.jsx)(v.A, {
                        align: v.A.Align.CENTER,
                        children: b
                            ? ((n = !l && !i),
                              (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)(u.E, {
                                          variant: "body-xs/normal",
                                          color: "text-default",
                                          children: $.intl.format($.t["LC+S+m"], { membersOnline: t.presenceCount }),
                                      }),
                                      (0, s.jsx)("div", { className: Z.zk }),
                                      n
                                          ? (0, s.jsx)(m.D, {
                                                className: Z.Ki,
                                                onClick: p,
                                                children: (0, s.jsx)(u.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-link",
                                                    children: $.intl.string($.t.riu2R5),
                                                }),
                                            })
                                          : (0, s.jsx)(u.E, {
                                                variant: "body-xs/normal",
                                                color: "text-default",
                                                children: $.intl.string($.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, s.jsx)(u.E, {
                                  variant: "body-xs/normal",
                                  color: "text-default",
                                  children: $.intl.string($.t.H29mx4),
                              }),
                    }),
                ],
            }),
        ],
    });
};
function ee(e) {
    let n,
        t,
        {
            node: l,
            sourceType: c,
            expressionSourceApplication: d,
            expressionSourcePack: h,
            expressionSourceGuild: g,
            joinedEmojiSourceGuildRecord: C,
            closePopout: y,
            onToggleShowMoreEmojis: k,
            guildEmoji: _,
            demoMode: w = !1,
            nonce: D,
        } = e,
        B = (0, o.bG)([z.default], () => z.default.getCurrentUser()),
        K = (0, E.H)("message_emoji_details"),
        H = (0, o.bG)([U.A], () => U.A.getGuildId()),
        ee = J.Ay.isPremium(B),
        et = null != H && (H === g?.id || H === C?.id),
        es = null != C,
        ei = g?.isDiscoverable() ?? !1;
    w && ((ee = !0), (ei = !0), (es = !1), (et = !1));
    let el = {
            page: null != (0, o.bG)([U.A], () => U.A.getGuildId()) ? q.liQ.GUILD_CHANNEL : q.liQ.DM_CHANNEL,
            section: q.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: ea,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: eo,
        } = i.useMemo(
            () =>
                null == _
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: R.kT(_),
                          isUnusableRoleSubscriptionEmoji: R.JN(_, H ?? void 0),
                          userIsRoleSubscriber: G.A.getUserSubscriptionRoles(_.guildId).size > 0,
                      },
            [_, H],
        ),
        ec = !!er && (0, A.tE)(_?.guildId),
        { analyticsLocations: ed } = (0, I.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, f.A)(
        {
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: ed, emoji_guild_id: _?.guildId ?? null, emoji_id: _?.id ?? null },
        },
        { disableTrack: !ea },
    );
    let eu = U.A.getGuildId(),
        em = (0, W.O)({
            sourceType: c,
            expressionSourceApplication: d,
            isPremium: ee,
            hasJoinedEmojiSourceGuild: es,
            isRoleSubscriptionEmoji: ea,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: eo,
            emojiComesFromCurrentGuild: et,
            isDiscoverable: ei,
            shouldHideRoleSubscriptionCTA: ec,
            onOpenPremiumSettings: () => {
                (y(),
                    V.default.track(q.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: el.page,
                        location_section: el.section,
                    }),
                    (0, L.e)());
            },
        }),
        eh = es && er && !ec && ((ee && ea) || !ee),
        ex = K && c === O.rV.PACK && null != h,
        ej = em.emojiDescription,
        eg = (0, T.i)({
            emojiId: l.emojiId,
            currentGuildId: eu,
            popoutData: em,
            emojiSourceGuildId: g?.id,
            nonce: D,
            demoMode: w,
        }),
        ep = em.type === W.u.JOIN_GUILD,
        eb = em.type === W.u.GET_PREMIUM,
        [eN, eI] = i.useState(!1),
        ef = ei || (es && !et) || null != g;
    return (0, s.jsxs)(F.Uq, {
        className: a()(Z.Bm, Z.Os, { [Z.x1]: ex }),
        children: [
            (function () {
                async function e() {
                    if (w || null == g || es) return;
                    y();
                    let e = g.id;
                    try {
                        (await p.A.joinGuild(e), p.A.transitionToGuildSync(e));
                    } catch {}
                }
                let n = !es && ei;
                return (0, s.jsxs)("div", {
                    className: Z.gH,
                    children: [
                        (0, s.jsxs)(v.A, {
                            children: [
                                (0, s.jsx)(b.A, {
                                    className: Z.P$,
                                    emojiId: l.emojiId,
                                    emojiName: l.name,
                                    animated: l.animated,
                                    size: "jumbo",
                                }),
                                (0, s.jsxs)(v.A, {
                                    direction: v.A.Direction.VERTICAL,
                                    justify: v.A.Justify.CENTER,
                                    className: Z.bM,
                                    children: [
                                        (0, s.jsx)(u.E, {
                                            variant: "body-md/semibold",
                                            className: Z.cC,
                                            children: l.name,
                                        }),
                                        !ex &&
                                            null != ej &&
                                            (0, s.jsx)(u.E, {
                                                variant: "body-sm/normal",
                                                className: Z.t,
                                                children: ej,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        eb
                            ? (0, s.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: Z.lI,
                                  children: (0, s.jsx)(M.A, {
                                      subscriptionTier: Y.pe.TIER_2,
                                      size: "sm",
                                      fullWidth: !0,
                                      buttonTextOverride: em.text,
                                      onSubscribeModalClose: (n) => (n ? e() : y()),
                                      postSuccessGuild: n ? (g ?? void 0) : void 0,
                                      premiumModalAnalyticsLocation: el,
                                  }),
                              })
                            : ep
                              ? (0, s.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: Z.lI,
                                    children: (0, s.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: em.text,
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                })
                              : void 0,
                        eh &&
                            (0, s.jsx)(P.A, {
                                text: eo ? $.intl.string($.t.yma8Vp) : $.intl.string($.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: function () {
                                    (y(),
                                        C?.id != null &&
                                            p.A.transitionToGuildSync(
                                                C.id,
                                                {
                                                    sourceLocationStack: [
                                                        N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                X.VV.ROLE_SUBSCRIPTIONS,
                                            ));
                                },
                            }),
                    ],
                });
            })(),
            ex &&
                (0, s.jsx)(S.A, {
                    pack: h,
                    isNitroTier2: J.Ay.isPremium(B, Y.PremiumTypes.TIER_2),
                    surface: "message_emoji_popout",
                    onClose: y,
                }),
            ef &&
                ((t = null != g && !es && ei && (g?.emojis?.length ?? 0) > 1),
                (0, s.jsxs)("div", {
                    className: Z.tl,
                    children: [
                        (0, s.jsx)(u.E, {
                            className: Z.YW,
                            variant: "body-sm/medium",
                            color: "text-subtle",
                            children: es ? $.intl.string($.t.ohTzZH) : $.intl.string($.t["eLfh+a"]),
                        }),
                        (0, s.jsx)(Q, {
                            expressionSourceGuild: g ?? O.GO.createFromGuildRecord(C),
                            hasJoinedExpressionSourceGuild: es,
                            isDisplayingJoinGuildButtonInPopout: ep,
                            closePopout: y,
                        }),
                        t &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    ((n = $.intl.string($.t.pnsAS2)),
                                    (0, s.jsx)(m.D, {
                                        onClick: function () {
                                            t &&
                                                (k?.(),
                                                eN ||
                                                    w ||
                                                    V.default.track(q.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eg),
                                                eI(!eN));
                                        },
                                        className: Z.wK,
                                        children: (0, s.jsxs)(v.A, {
                                            children: [
                                                (0, s.jsx)(u.E, {
                                                    className: Z.__invalid_showMoreEmojisLabel,
                                                    "aria-label": n,
                                                    variant: "body-xs/normal",
                                                    color: "none",
                                                    children: n,
                                                }),
                                                (0, s.jsx)(j.ChevronSmallDownIcon, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: a()(Z.ZB, { [Z.cP]: !eN }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != l.emojiId &&
                                        eN &&
                                        (0, s.jsx)(en, {
                                            emojiId: l.emojiId,
                                            expressionSourceGuild: g,
                                            popoutData: em,
                                            onClose: y,
                                            hasJoinedEmojiSourceGuild: es,
                                            isDisplayingButtonInTopSection: ep || eb,
                                        }),
                                ],
                            }),
                    ],
                })),
        ],
    });
}
function en(e) {
    let {
            emojiId: n,
            expressionSourceGuild: t,
            hasJoinedEmojiSourceGuild: i,
            popoutData: l,
            onClose: a,
            isDisplayingButtonInTopSection: r,
        } = e,
        o = (t?.emojis ?? [])
            .slice(0, 13)
            .filter((e) => e.id !== n)
            .slice(0, 12),
        { type: c, description: d } = l;
    return (0, s.jsxs)("div", {
        className: Z.LX,
        children: [
            i
                ? null
                : o.map((e) =>
                      (0, s.jsx)(
                          g.m,
                          {
                              text: e.require_colons ? `:${e.name}:` : e.name,
                              ...F.Uk,
                              children: (0, s.jsx)(b.A, { className: Z.Th, emojiId: e.id, animated: e.animated }),
                          },
                          e.id,
                      ),
                  ),
            !r &&
                (c === W.u.GET_PREMIUM
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: Z.lI,
                                  children: (0, s.jsx)(M.A, {
                                      subscriptionTier: Y.pe.TIER_2,
                                      buttonTextOverride: l.text,
                                      fullWidth: !0,
                                      onClick: () => a(),
                                  }),
                              }),
                              null != d &&
                                  (0, s.jsx)("div", {
                                      className: Z.vd,
                                      children: (0, s.jsx)(u.E, {
                                          variant: "body-sm/medium",
                                          "aria-label": d,
                                          children: d,
                                      }),
                                  }),
                          ],
                      })
                    : c === W.u.JOIN_GUILD
                      ? (0, s.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: Z.lI,
                            children: (0, s.jsx)(x.$, {
                                variant: "primary",
                                size: "sm",
                                text: l.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, K.Z2)(t.id, {});
                                },
                            }),
                        })
                      : null),
        ],
    });
}
t.d(
    n,
    {},
    {
        G7: Q,
        MV: function (e) {
            let { node: n } = e;
            (0, T.i)({ emojiId: n.emojiId, currentGuildId: U.A.getGuildId() });
            let t = (0, H.A)(n.name),
                i = t !== n.name;
            return (0, s.jsx)(d.l, {
                children: (0, s.jsx)(F.Uq, {
                    className: Z.Os,
                    children: (0, s.jsxs)(v.A, {
                        className: Z.gH,
                        children: [
                            (0, s.jsx)(b.A, {
                                emojiName: n.name,
                                className: Z.P$,
                                src: n.src,
                                animated: !1,
                                size: "jumbo",
                            }),
                            (0, s.jsxs)(v.A, {
                                direction: v.A.Direction.VERTICAL,
                                justify: v.A.Justify.CENTER,
                                className: Z.bM,
                                children: [
                                    (0, s.jsx)(u.E, {
                                        className: Z.cC,
                                        variant: "body-md/semibold",
                                        children: i ? (0, s.jsx)("div", { className: Z.Gl, children: t }) : t,
                                    }),
                                    (0, s.jsx)(u.E, {
                                        variant: "body-sm/normal",
                                        className: Z.t,
                                        children: $.intl.string($.t.sXdH8c),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            });
        },
        iP: function (e) {
            let { node: n, closePopout: t, refreshPositionKey: i, nonce: l } = e,
                {
                    expressionSourceGuild: a,
                    expressionSourceApplication: r,
                    expressionSourcePack: o,
                    sourceType: c,
                    joinedEmojiSourceGuildRecord: u,
                    emoji: m,
                    isFetching: h,
                } = (0, y.y)({ emojiId: n.emojiId, refreshPositionKey: i });
            return h
                ? (0, s.jsx)(F.Y0, {})
                : (0, s.jsx)(d.l, {
                      "aria-label": n.name,
                      children: (0, s.jsx)(ee, {
                          node: n,
                          sourceType: c,
                          expressionSourceApplication: r,
                          expressionSourcePack: o,
                          guildEmoji: m ?? void 0,
                          expressionSourceGuild: a,
                          joinedEmojiSourceGuildRecord: u,
                          closePopout: t,
                          onToggleShowMoreEmojis: i,
                          demoMode: !1,
                          nonce: l,
                      }),
                  });
        },
        mG: en,
        sX: ee,
    },
);
