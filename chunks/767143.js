var s = t(477900),
    i = t(582128),
    l = t(503698),
    a = t.n(l),
    r = t(613412),
    o = t(855986),
    d = t(3026),
    c = t(305866),
    u = t(834730),
    m = t(939249),
    h = t(534514),
    x = t(821609),
    j = t(847374),
    g = t(866665),
    p = t(778858),
    b = t(565645),
    N = t(793574),
    f = t(688810),
    I = t(139286),
    v = t(235986),
    C = t(573435),
    A = t(836039),
    E = t(490035),
    y = t(137133),
    S = t(695282),
    O = t(624793),
    T = t(731383),
    k = t(682163),
    _ = t(714991),
    R = t(492494),
    L = t(384684),
    G = t(985242),
    P = t(87719),
    M = t(465794),
    w = t(976860),
    D = t(309010),
    U = t(967198),
    z = t(287809),
    B = t(129230),
    K = t(486020),
    J = t(449054),
    V = t(722178),
    H = t(450707),
    W = t(483407),
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
        { id: o, icon: c, name: x } = t,
        j = K.Ay.getGuildIconURL({ id: o, icon: c, size: 32, canAnimate: !0 }),
        g = (i = i ?? !0) || t.isDiscoverable();
    function p() {
        t.isDiscoverable() ? (r(), (0, J.Z2)(o, {})) : i && (r(), (0, w.pX)(q.BVt.CHANNEL(o, D.Ay.getChannelId(o))));
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
                                          children: (0, s.jsx)(d.A, { children: x }),
                                      }),
                                  })
                                : (0, s.jsx)(h.D, {
                                      variant: "heading-sm/semibold",
                                      children: (0, s.jsx)(d.A, { children: x }),
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
            sourceType: d,
            expressionSourceApplication: c,
            expressionSourcePack: h,
            expressionSourceGuild: g,
            joinedEmojiSourceGuildRecord: C,
            closePopout: S,
            onToggleShowMoreEmojis: k,
            guildEmoji: _,
            demoMode: w = !1,
            nonce: D,
        } = e,
        K = (0, o.bG)([z.default], () => z.default.getCurrentUser()),
        J = (0, E.H)("message_emoji_details"),
        W = (0, o.bG)([U.A], () => U.A.getGuildId()),
        ee = V.Ay.isPremium(K),
        et = null != W && (W === g?.id || W === C?.id),
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
                          isUnusableRoleSubscriptionEmoji: R.JN(_, W ?? void 0),
                          userIsRoleSubscriber: L.A.getUserSubscriptionRoles(_.guildId).size > 0,
                      },
            [_, W],
        ),
        ed = !!er && (0, A.tE)(_?.guildId),
        { analyticsLocations: ec } = (0, f.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, I.A)(
        {
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: ec, emoji_guild_id: _?.guildId ?? null, emoji_id: _?.id ?? null },
        },
        { disableTrack: !ea },
    );
    let eu = U.A.getGuildId(),
        em = (0, H.O)({
            sourceType: d,
            expressionSourceApplication: c,
            isPremium: ee,
            hasJoinedEmojiSourceGuild: es,
            isRoleSubscriptionEmoji: ea,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: eo,
            emojiComesFromCurrentGuild: et,
            isDiscoverable: ei,
            shouldHideRoleSubscriptionCTA: ed,
            onOpenPremiumSettings: () => {
                (S(),
                    B.default.track(q.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: el.page,
                        location_section: el.section,
                    }),
                    (0, P.e)());
            },
        }),
        eh = es && er && !ed && ((ee && ea) || !ee),
        ex = J && d === O.rV.PACK && null != h,
        ej = em.emojiDescription,
        eg = (0, T.i)({
            emojiId: l.emojiId,
            currentGuildId: eu,
            popoutData: em,
            emojiSourceGuildId: g?.id,
            nonce: D,
            demoMode: w,
        }),
        ep = em.type === H.u.JOIN_GUILD,
        eb = em.type === H.u.GET_PREMIUM,
        [eN, ef] = i.useState(!1),
        eI = ei || (es && !et) || null != g;
    return (0, s.jsxs)(F.Uq, {
        className: a()(Z.Bm, Z.Os, { [Z.x1]: ex }),
        children: [
            (function () {
                async function e() {
                    if (w || null == g || es) return;
                    S();
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
                                      onSubscribeModalClose: (n) => (n ? e() : S()),
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
                            (0, s.jsx)(G.A, {
                                text: eo ? $.intl.string($.t.yma8Vp) : $.intl.string($.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: function () {
                                    (S(),
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
                (0, s.jsx)(y.A, {
                    pack: h,
                    isNitroTier2: V.Ay.isPremium(K, Y.PremiumTypes.TIER_2),
                    surface: "message_emoji_popout",
                    onClose: S,
                }),
            eI &&
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
                            closePopout: S,
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
                                                    B.default.track(q.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eg),
                                                ef(!eN));
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
                                                (0, s.jsx)(j.a, {
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
                                            onClose: S,
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
        { type: d, description: c } = l;
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
                (d === H.u.GET_PREMIUM
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
                              null != c &&
                                  (0, s.jsx)("div", {
                                      className: Z.vd,
                                      children: (0, s.jsx)(u.E, {
                                          variant: "body-sm/medium",
                                          "aria-label": c,
                                          children: c,
                                      }),
                                  }),
                          ],
                      })
                    : d === H.u.JOIN_GUILD
                      ? (0, s.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: Z.lI,
                            children: (0, s.jsx)(x.$, {
                                variant: "primary",
                                size: "sm",
                                text: l.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, J.Z2)(t.id, {});
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
            let t = (0, W.A)(n.name),
                i = t !== n.name;
            return (0, s.jsx)(c.l, {
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
                    sourceType: d,
                    joinedEmojiSourceGuildRecord: u,
                    emoji: m,
                    isFetching: h,
                } = (0, S.y)({ emojiId: n.emojiId, refreshPositionKey: i });
            return h
                ? (0, s.jsx)(F.Y0, {})
                : (0, s.jsx)(c.l, {
                      "aria-label": n.name,
                      children: (0, s.jsx)(ee, {
                          node: n,
                          sourceType: d,
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
