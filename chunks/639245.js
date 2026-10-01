n.d(t, { G7: () => et, iP: () => en, sX: () => el, mG: () => ei, MV: () => ee });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(562708),
    o = n(17928),
    u = n(3026),
    d = n(305866),
    c = n(834730),
    m = n(939249),
    x = n(297264),
    h = n(821609),
    j = n(847374),
    g = n(866665),
    p = n(66834),
    f = n(565645),
    A = n(793574),
    N = n(688810),
    I = n(139286),
    v = n(235986),
    b = n(573435),
    S = n(836039),
    E = n(702841),
    C = n(71393),
    T = n(236285),
    y = n(770335),
    O = n(624793),
    _ = n(652215),
    R = n(731383),
    G = n(548118),
    k = n(714991),
    P = n(492494),
    M = n(384684),
    D = n(985242),
    L = n(87719),
    w = n(465794),
    U = n(976860),
    z = n(309010),
    B = n(967198),
    V = n(287809),
    F = n(174459),
    H = n(486020),
    J = n(449054),
    W = n(158045),
    K = n(450707),
    Y = n(773669),
    $ = n(375708),
    q = n(188645),
    X = n(746080),
    Z = n(202541),
    Q = n(844749);
function ee(e) {
    var t, n;
    let i,
        s,
        { node: a } = e;
    (0, R.i)({ emojiId: a.emojiId, currentGuildId: B.A.getGuildId() });
    let r =
            ((n = t = a.name),
            (i = (0, o.bG)([Y.default], () => Y.default.locale.startsWith("en-"))),
            (s = ":pizza:" === n && i ? $.intl.formatToPlainString($.t["1knDPI"], { emojiName: n }) : n),
            ":pizza:" === t ? s : t),
        m = r !== a.name;
    return (0, l.jsx)(d.l, {
        children: (0, l.jsx)(q.Uq, {
            children: (0, l.jsxs)(v.A, {
                className: Q.gH,
                children: [
                    (0, l.jsx)(f.A, { emojiName: a.name, className: Q.P$, src: a.src, animated: !1, size: "jumbo" }),
                    (0, l.jsxs)(v.A, {
                        direction: v.A.Direction.VERTICAL,
                        justify: v.A.Justify.CENTER,
                        className: Q.bM,
                        children: [
                            (0, l.jsx)(c.E, {
                                className: Q.__invalid_emojiName,
                                variant: "text-md/semibold",
                                children: m
                                    ? (0, l.jsx)("div", { className: Q.Gl, children: r })
                                    : (0, l.jsx)(u.A, { children: r }),
                            }),
                            (0, l.jsx)(c.E, { variant: "text-sm/normal", children: $.intl.string($.t.sXdH8c) }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
let et = (e) => {
    let t,
        {
            expressionSourceGuild: n,
            hasJoinedExpressionSourceGuild: i,
            isDisplayingJoinGuildButtonInPopout: s,
            closePopout: r,
        } = e,
        { id: o, icon: d, name: h } = n,
        j = H.Ay.getGuildIconURL({ id: o, icon: d, size: 32, canAnimate: !0 }),
        g = (i = i ?? !0) || n.isDiscoverable();
    function p() {
        n.isDiscoverable() ? (r(), (0, J.Z2)(o, {})) : i && (r(), (0, U.pX)(_.BVt.CHANNEL(o, z.Ay.getChannelId(o))));
    }
    let f = n.isDiscoverable() && null != n.presenceCount;
    return (0, l.jsxs)(v.A, {
        align: v.A.Align.CENTER,
        children: [
            (0, l.jsx)(b.Ay, {
                mask: b.Ay.Masks.SQUIRCLE,
                width: 32,
                height: 32,
                className: Q.__invalid_guildIconContainer,
                children:
                    null != j && g
                        ? (0, l.jsxs)(m.D, {
                              "aria-label": h,
                              onClick: p,
                              children: [(0, l.jsx)("img", { src: j, alt: "", className: Q.$f }), " :"],
                          })
                        : (0, l.jsx)(G.Ay, { size: G.Ay.Sizes.SMALL, className: Q.oi, guild: n }),
            }),
            (0, l.jsxs)(v.A, {
                direction: v.A.Direction.VERTICAL,
                className: a()(Q.__invalid_guildInformation, Q.bM),
                children: [
                    (0, l.jsxs)(v.A, {
                        align: v.A.Align.CENTER,
                        children: [
                            (0, l.jsx)(k.A, { guild: n, className: Q.n2 }),
                            g
                                ? (0, l.jsx)(m.D, {
                                      onClick: p,
                                      className: Q.bM,
                                      children: (0, l.jsx)(x.D, {
                                          className: Q.J5,
                                          variant: "heading-md/semibold",
                                          children: (0, l.jsx)(u.A, { children: h }),
                                      }),
                                  })
                                : (0, l.jsx)(x.D, {
                                      variant: "heading-md/semibold",
                                      children: (0, l.jsx)(u.A, { children: h }),
                                  }),
                        ],
                    }),
                    (0, l.jsx)(v.A, {
                        align: v.A.Align.CENTER,
                        children: f
                            ? ((t = !s && !i),
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(c.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          children: $.intl.format($.t["LC+S+m"], { membersOnline: n.presenceCount }),
                                      }),
                                      (0, l.jsx)("div", { className: Q.zk }),
                                      t
                                          ? (0, l.jsx)(m.D, {
                                                className: Q.Ki,
                                                onClick: p,
                                                children: (0, l.jsx)(c.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-link",
                                                    children: $.intl.string($.t.riu2R5),
                                                }),
                                            })
                                          : (0, l.jsx)(c.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: $.intl.string($.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, l.jsx)(c.E, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: $.intl.string($.t.H29mx4),
                              }),
                    }),
                ],
            }),
        ],
    });
};
function en(e) {
    let { node: t, closePopout: n, refreshPositionKey: s, nonce: a } = e,
        {
            expressionSourceGuild: r,
            expressionSourceApplication: o,
            sourceType: u,
            joinedEmojiSourceGuildRecord: c,
            emoji: m,
            isFetching: x,
        } = (function (e) {
            let { emojiId: t, refreshPositionKey: n } = e,
                { joinedEmojiSourceGuildRecord: l, emoji: s } = (0, E.cf)([T.Ay, C.A], () => {
                    var e, n;
                    let l;
                    return (
                        (e = T.Ay),
                        (n = C.A),
                        (l = null != t ? e.getCustomEmojiById(t) : null),
                        l?.type === y.i.GUILD
                            ? { emoji: l, joinedEmojiSourceGuildRecord: n.getGuild(l?.guildId) }
                            : { emoji: null, joinedEmojiSourceGuildRecord: null }
                    );
                }),
                a = null != l,
                r = null != l && l.features.has(_.GuildFeatures.DISCOVERABLE),
                o = (!a || r) && null != t,
                [u, d] = i.useState(o),
                [c, m] = i.useState(null),
                x = null != l ? O.GO.createFromGuildRecord(l) : null,
                [h, j] = i.useState(x),
                [g, p] = i.useState(null),
                f = i.useRef(n);
            return (
                i.useEffect(() => {
                    f.current = n;
                }),
                i.useEffect(() => {
                    async function e() {
                        let e = null != t ? await (0, O.g_)(t) : null;
                        if (null != e)
                            switch ((m(e.type), e.type)) {
                                case O.rV.APPLICATION:
                                    p(e.application);
                                    break;
                                case O.rV.GUILD:
                                    j(e.guild);
                            }
                        (d(!1), f.current?.());
                    }
                    (f.current?.(), o) ? e() : f.current?.();
                }, [t, o]),
                {
                    expressionSourceGuild: h,
                    expressionSourceApplication: g,
                    sourceType: c,
                    joinedEmojiSourceGuildRecord: l,
                    hasJoinedEmojiSourceGuild: a,
                    emoji: s,
                    isFetching: u,
                }
            );
        })({ emojiId: t.emojiId, refreshPositionKey: s });
    return x
        ? (0, l.jsx)(q.Y0, {})
        : (0, l.jsx)(d.l, {
              "aria-label": t.name,
              children: (0, l.jsx)(el, {
                  node: t,
                  sourceType: u,
                  expressionSourceApplication: o,
                  guildEmoji: m ?? void 0,
                  expressionSourceGuild: r,
                  joinedEmojiSourceGuildRecord: c,
                  closePopout: n,
                  onToggleShowMoreEmojis: s,
                  demoMode: !1,
                  nonce: a,
              }),
          });
}
function el(e) {
    let t,
        n,
        {
            node: s,
            sourceType: d,
            expressionSourceApplication: x,
            expressionSourceGuild: g,
            joinedEmojiSourceGuildRecord: b,
            closePopout: E,
            onToggleShowMoreEmojis: C,
            guildEmoji: T,
            demoMode: y = !1,
            nonce: G,
        } = e,
        k = (0, o.bG)([V.default], () => V.default.getCurrentUser()),
        U = (0, o.bG)([B.A], () => B.A.getGuildId()),
        z = W.Ay.isPremium(k),
        H = null != U && (U === g?.id || U === b?.id),
        J = null != b,
        Y = g?.isDiscoverable() ?? !1;
    y && ((z = !0), (Y = !0), (J = !1), (H = !1));
    let ee = {
            page: null != (0, o.bG)([B.A], () => B.A.getGuildId()) ? _.liQ.GUILD_CHANNEL : _.liQ.DM_CHANNEL,
            section: _.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: en,
            isUnusableRoleSubscriptionEmoji: el,
            userIsRoleSubscriber: es,
        } = i.useMemo(
            () =>
                null == T
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: P.kT(T),
                          isUnusableRoleSubscriptionEmoji: P.JN(T, U ?? void 0),
                          userIsRoleSubscriber: M.A.getUserSubscriptionRoles(T.guildId).size > 0,
                      },
            [T, U],
        ),
        ea = !!el && (0, S.tE)(T?.guildId),
        { analyticsLocations: er } = (0, N.Ay)(A.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, I.A)(
        {
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: er, emoji_guild_id: T?.guildId ?? null, emoji_id: T?.id ?? null },
        },
        { disableTrack: !en },
    );
    let eo = B.A.getGuildId(),
        eu = (0, K.O)({
            sourceType: d,
            expressionSourceApplication: x,
            isPremium: z,
            hasJoinedEmojiSourceGuild: J,
            isRoleSubscriptionEmoji: en,
            isUnusableRoleSubscriptionEmoji: el,
            userIsRoleSubscriber: es,
            emojiComesFromCurrentGuild: H,
            isDiscoverable: Y,
            shouldHideRoleSubscriptionCTA: ea,
            onOpenPremiumSettings: () => {
                (E(),
                    F.default.track(_.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: ee.page,
                        location_section: ee.section,
                    }),
                    (0, L.e)());
            },
        }),
        ed = J && el && !ea && ((z && en) || !z),
        ec = eu.emojiDescription,
        em = (0, R.i)({
            emojiId: s.emojiId,
            currentGuildId: eo,
            popoutData: eu,
            emojiSourceGuildId: g?.id,
            nonce: G,
            demoMode: y,
        }),
        ex = eu.type === K.u.JOIN_GUILD,
        eh = eu.type === K.u.GET_PREMIUM,
        [ej, eg] = i.useState(!1),
        ep = Y || (J && !H) || null != g;
    return (0, l.jsxs)(q.Uq, {
        className: Q.Bm,
        children: [
            (function () {
                async function e() {
                    if (y || null == g || J) return;
                    E();
                    let e = g.id;
                    try {
                        (await p.A.joinGuild(e), p.A.transitionToGuildSync(e));
                    } catch {}
                }
                let t = !J && Y;
                return (0, l.jsxs)("div", {
                    className: Q.gH,
                    children: [
                        (0, l.jsxs)(v.A, {
                            children: [
                                (0, l.jsx)(f.A, {
                                    className: Q.P$,
                                    emojiId: s.emojiId,
                                    emojiName: s.name,
                                    animated: s.animated,
                                    size: "jumbo",
                                }),
                                (0, l.jsxs)(v.A, {
                                    direction: v.A.Direction.VERTICAL,
                                    justify: v.A.Justify.CENTER,
                                    className: Q.bM,
                                    children: [
                                        (0, l.jsx)(c.E, {
                                            variant: "text-md/semibold",
                                            children: (0, l.jsx)(u.A, { children: s.name }),
                                        }),
                                        null != ec && (0, l.jsx)(c.E, { variant: "text-sm/normal", children: ec }),
                                    ],
                                }),
                            ],
                        }),
                        eh
                            ? (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: Q.lI,
                                  children: (0, l.jsx)(w.A, {
                                      subscriptionTier: Z.pe.TIER_2,
                                      size: "sm",
                                      fullWidth: !0,
                                      buttonTextOverride: eu.text,
                                      onSubscribeModalClose: (t) => (t ? e() : E()),
                                      postSuccessGuild: t ? (g ?? void 0) : void 0,
                                      premiumModalAnalyticsLocation: ee,
                                  }),
                              })
                            : ex
                              ? (0, l.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: Q.lI,
                                    children: (0, l.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: eu.text,
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                })
                              : void 0,
                        ed &&
                            (0, l.jsx)(D.A, {
                                text: es ? $.intl.string($.t.yma8Vp) : $.intl.string($.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: function () {
                                    (E(),
                                        b?.id != null &&
                                            p.A.transitionToGuildSync(
                                                b.id,
                                                {
                                                    sourceLocationStack: [
                                                        A.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                X.VV.ROLE_SUBSCRIPTIONS,
                                            ));
                                },
                            }),
                    ],
                });
            })(),
            ep &&
                ((n = null != g && !J && Y && (g?.emojis?.length ?? 0) > 1),
                (0, l.jsxs)("div", {
                    className: Q.tl,
                    children: [
                        (0, l.jsx)(c.E, {
                            className: Q.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: J ? $.intl.string($.t.ohTzZH) : $.intl.string($.t["eLfh+a"]),
                        }),
                        (0, l.jsx)(et, {
                            expressionSourceGuild: g ?? O.GO.createFromGuildRecord(b),
                            hasJoinedExpressionSourceGuild: J,
                            isDisplayingJoinGuildButtonInPopout: ex,
                            closePopout: E,
                        }),
                        n &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    ((t = $.intl.string($.t.pnsAS2)),
                                    (0, l.jsx)(m.D, {
                                        onClick: function () {
                                            n &&
                                                (C?.(),
                                                ej ||
                                                    y ||
                                                    F.default.track(_.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, em),
                                                eg(!ej));
                                        },
                                        className: Q.wK,
                                        children: (0, l.jsxs)(v.A, {
                                            children: [
                                                (0, l.jsx)(c.E, {
                                                    className: Q.__invalid_showMoreEmojisLabel,
                                                    "aria-label": t,
                                                    variant: "text-xs/normal",
                                                    color: "none",
                                                    children: t,
                                                }),
                                                (0, l.jsx)(j.a, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: a()(Q.ZB, { [Q.cP]: !ej }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != s.emojiId &&
                                        ej &&
                                        (0, l.jsx)(ei, {
                                            emojiId: s.emojiId,
                                            expressionSourceGuild: g,
                                            popoutData: eu,
                                            onClose: E,
                                            hasJoinedEmojiSourceGuild: J,
                                            isDisplayingButtonInTopSection: ex || eh,
                                        }),
                                ],
                            }),
                    ],
                })),
        ],
    });
}
function ei(e) {
    let {
            emojiId: t,
            expressionSourceGuild: n,
            hasJoinedEmojiSourceGuild: i,
            popoutData: s,
            onClose: a,
            isDisplayingButtonInTopSection: r,
        } = e,
        o = (n?.emojis ?? [])
            .slice(0, 13)
            .filter((e) => e.id !== t)
            .slice(0, 12),
        { type: u, description: d } = s;
    return (0, l.jsxs)("div", {
        className: Q.LX,
        children: [
            i
                ? null
                : o.map((e) =>
                      (0, l.jsx)(
                          g.m,
                          {
                              text: e.require_colons ? `:${e.name}:` : e.name,
                              ...q.Uk,
                              children: (0, l.jsx)(f.A, { className: Q.Th, emojiId: e.id, animated: e.animated }),
                          },
                          e.id,
                      ),
                  ),
            !r &&
                (u === K.u.GET_PREMIUM
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: Q.lI,
                                  children: (0, l.jsx)(w.A, {
                                      subscriptionTier: Z.pe.TIER_2,
                                      buttonTextOverride: s.text,
                                      fullWidth: !0,
                                      onClick: () => a(),
                                  }),
                              }),
                              null != d &&
                                  (0, l.jsx)("div", {
                                      className: Q.vd,
                                      children: (0, l.jsx)(c.E, {
                                          variant: "text-sm/medium",
                                          "aria-label": d,
                                          children: d,
                                      }),
                                  }),
                          ],
                      })
                    : u === K.u.JOIN_GUILD
                      ? (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: Q.lI,
                            children: (0, l.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                text: s.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, J.Z2)(n.id, {});
                                },
                            }),
                        })
                      : null),
        ],
    });
}
