n.d(t, { G7: () => et, iP: () => en, sX: () => el, mG: () => ei, MV: () => ee });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(562708),
    o = n(17928),
    u = n(305866),
    c = n(3026),
    d = n(834730),
    h = n(939249),
    m = n(297264),
    f = n(821609),
    p = n(847374),
    g = n(866665),
    x = n(66834),
    A = n(565645),
    C = n(793574),
    E = n(688810),
    I = n(139286),
    y = n(235986),
    S = n(573435),
    v = n(836039),
    N = n(702841),
    _ = n(71393),
    j = n(236285),
    b = n(770335),
    T = n(624793),
    R = n(652215),
    O = n(731383),
    M = n(548118),
    L = n(714991),
    k = n(492494),
    w = n(384684),
    P = n(985242),
    D = n(87719),
    U = n(465794),
    V = n(976860),
    G = n(309010),
    F = n(967198),
    H = n(287809),
    B = n(174459),
    W = n(486020),
    K = n(449054),
    z = n(158045),
    Z = n(450707),
    Y = n(773669),
    q = n(375708),
    J = n(85935),
    $ = n(746080),
    X = n(202541),
    Q = n(844749);
function ee(e) {
    var t, n;
    let i,
        s,
        { node: r } = e;
    (0, O.i)({ emojiId: r.emojiId, currentGuildId: F.A.getGuildId() });
    let a =
            ((n = t = r.name),
            (i = (0, o.bG)([Y.default], () => Y.default.locale.startsWith("en-"))),
            (s = ":pizza:" === n && i ? q.intl.formatToPlainString(q.t["1knDPI"], { emojiName: n }) : n),
            ":pizza:" === t ? s : t),
        h = a !== r.name;
    return (0, l.jsx)(u.l, {
        children: (0, l.jsx)(J.Uq, {
            children: (0, l.jsxs)(y.A, {
                className: Q.gH,
                children: [
                    (0, l.jsx)(A.A, { emojiName: r.name, className: Q.P$, src: r.src, animated: !1, size: "jumbo" }),
                    (0, l.jsxs)(y.A, {
                        direction: y.A.Direction.VERTICAL,
                        justify: y.A.Justify.CENTER,
                        className: Q.bM,
                        children: [
                            (0, l.jsx)(d.E, {
                                className: Q.__invalid_emojiName,
                                variant: "text-md/semibold",
                                children: h
                                    ? (0, l.jsx)("div", { className: Q.Gl, children: a })
                                    : (0, l.jsx)(c.A, { children: a }),
                            }),
                            (0, l.jsx)(d.E, { variant: "text-sm/normal", children: q.intl.string(q.t.sXdH8c) }),
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
            closePopout: a,
        } = e,
        { id: o, icon: u, name: f } = n,
        p = W.Ay.getGuildIconURL({ id: o, icon: u, size: 32, canAnimate: !0 }),
        g = (i = i ?? !0) || n.isDiscoverable();
    function x() {
        n.isDiscoverable() ? (a(), (0, K.Z2)(o, {})) : i && (a(), (0, V.pX)(R.BVt.CHANNEL(o, G.Ay.getChannelId(o))));
    }
    let A = n.isDiscoverable() && null != n.presenceCount;
    return (0, l.jsxs)(y.A, {
        align: y.A.Align.CENTER,
        children: [
            (0, l.jsx)(S.Ay, {
                mask: S.Ay.Masks.SQUIRCLE,
                width: 32,
                height: 32,
                className: Q.__invalid_guildIconContainer,
                children:
                    null != p && g
                        ? (0, l.jsxs)(h.D, {
                              "aria-label": f,
                              onClick: x,
                              children: [(0, l.jsx)("img", { src: p, alt: "", className: Q.$f }), " :"],
                          })
                        : (0, l.jsx)(M.Ay, { size: M.Ay.Sizes.SMALL, className: Q.oi, guild: n }),
            }),
            (0, l.jsxs)(y.A, {
                direction: y.A.Direction.VERTICAL,
                className: r()(Q.__invalid_guildInformation, Q.bM),
                children: [
                    (0, l.jsxs)(y.A, {
                        align: y.A.Align.CENTER,
                        children: [
                            (0, l.jsx)(L.A, { guild: n, className: Q.n2 }),
                            g
                                ? (0, l.jsx)(h.D, {
                                      onClick: x,
                                      className: Q.bM,
                                      children: (0, l.jsx)(m.D, {
                                          className: Q.J5,
                                          variant: "heading-md/semibold",
                                          children: (0, l.jsx)(c.A, { children: f }),
                                      }),
                                  })
                                : (0, l.jsx)(m.D, {
                                      variant: "heading-md/semibold",
                                      children: (0, l.jsx)(c.A, { children: f }),
                                  }),
                        ],
                    }),
                    (0, l.jsx)(y.A, {
                        align: y.A.Align.CENTER,
                        children: A
                            ? ((t = !s && !i),
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          children: q.intl.format(q.t["LC+S+m"], { membersOnline: n.presenceCount }),
                                      }),
                                      (0, l.jsx)("div", { className: Q.zk }),
                                      t
                                          ? (0, l.jsx)(h.D, {
                                                className: Q.Ki,
                                                onClick: x,
                                                children: (0, l.jsx)(d.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-link",
                                                    children: q.intl.string(q.t.riu2R5),
                                                }),
                                            })
                                          : (0, l.jsx)(d.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: q.intl.string(q.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, l.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: q.intl.string(q.t.H29mx4),
                              }),
                    }),
                ],
            }),
        ],
    });
};
function en(e) {
    let { node: t, closePopout: n, refreshPositionKey: s, nonce: r } = e,
        {
            expressionSourceGuild: a,
            expressionSourceApplication: o,
            sourceType: c,
            joinedEmojiSourceGuildRecord: d,
            emoji: h,
            isFetching: m,
        } = (function (e) {
            let { emojiId: t, refreshPositionKey: n } = e,
                { joinedEmojiSourceGuildRecord: l, emoji: s } = (0, N.cf)([j.Ay, _.A], () => {
                    var e, n;
                    let l;
                    return (
                        (e = j.Ay),
                        (n = _.A),
                        (l = null != t ? e.getCustomEmojiById(t) : null),
                        l?.type === b.i.GUILD
                            ? { emoji: l, joinedEmojiSourceGuildRecord: n.getGuild(l?.guildId) }
                            : { emoji: null, joinedEmojiSourceGuildRecord: null }
                    );
                }),
                r = null != l,
                a = null != l && l.features.has(R.GuildFeatures.DISCOVERABLE),
                o = (!r || a) && null != t,
                [u, c] = i.useState(o),
                [d, h] = i.useState(null),
                m = null != l ? T.GO.createFromGuildRecord(l) : null,
                [f, p] = i.useState(m),
                [g, x] = i.useState(null),
                A = i.useRef(n);
            return (
                i.useEffect(() => {
                    A.current = n;
                }),
                i.useEffect(() => {
                    async function e() {
                        let e = null != t ? await (0, T.g_)(t) : null;
                        if (null != e)
                            switch ((h(e.type), e.type)) {
                                case T.rV.APPLICATION:
                                    x(e.application);
                                    break;
                                case T.rV.GUILD:
                                    p(e.guild);
                            }
                        (c(!1), A.current?.());
                    }
                    (A.current?.(), o) ? e() : A.current?.();
                }, [t, o]),
                {
                    expressionSourceGuild: f,
                    expressionSourceApplication: g,
                    sourceType: d,
                    joinedEmojiSourceGuildRecord: l,
                    hasJoinedEmojiSourceGuild: r,
                    emoji: s,
                    isFetching: u,
                }
            );
        })({ emojiId: t.emojiId, refreshPositionKey: s });
    return m
        ? (0, l.jsx)(J.Y0, {})
        : (0, l.jsx)(u.l, {
              "aria-label": t.name,
              children: (0, l.jsx)(el, {
                  node: t,
                  sourceType: c,
                  expressionSourceApplication: o,
                  guildEmoji: h ?? void 0,
                  expressionSourceGuild: a,
                  joinedEmojiSourceGuildRecord: d,
                  closePopout: n,
                  onToggleShowMoreEmojis: s,
                  demoMode: !1,
                  nonce: r,
              }),
          });
}
function el(e) {
    let t,
        n,
        {
            node: s,
            sourceType: u,
            expressionSourceApplication: m,
            expressionSourceGuild: g,
            joinedEmojiSourceGuildRecord: S,
            closePopout: N,
            onToggleShowMoreEmojis: _,
            guildEmoji: j,
            demoMode: b = !1,
            nonce: M,
        } = e,
        L = (0, o.bG)([H.default], () => H.default.getCurrentUser()),
        V = (0, o.bG)([F.A], () => F.A.getGuildId()),
        G = z.Ay.isPremium(L),
        W = null != V && (V === g?.id || V === S?.id),
        K = null != S,
        Y = g?.isDiscoverable() ?? !1;
    b && ((G = !0), (Y = !0), (K = !1), (W = !1));
    let ee = {
            page: null != (0, o.bG)([F.A], () => F.A.getGuildId()) ? R.liQ.GUILD_CHANNEL : R.liQ.DM_CHANNEL,
            section: R.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: en,
            isUnusableRoleSubscriptionEmoji: el,
            userIsRoleSubscriber: es,
        } = i.useMemo(
            () =>
                null == j
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: k.kT(j),
                          isUnusableRoleSubscriptionEmoji: k.JN(j, V ?? void 0),
                          userIsRoleSubscriber: w.A.getUserSubscriptionRoles(j.guildId).size > 0,
                      },
            [j, V],
        ),
        er = !!el && (0, v.tE)(j?.guildId),
        { analyticsLocations: ea } = (0, E.Ay)(C.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, I.A)(
        {
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: ea, emoji_guild_id: j?.guildId ?? null, emoji_id: j?.id ?? null },
        },
        { disableTrack: !en },
    );
    let eo = F.A.getGuildId(),
        eu = (0, Z.O)({
            sourceType: u,
            expressionSourceApplication: m,
            isPremium: G,
            hasJoinedEmojiSourceGuild: K,
            isRoleSubscriptionEmoji: en,
            isUnusableRoleSubscriptionEmoji: el,
            userIsRoleSubscriber: es,
            emojiComesFromCurrentGuild: W,
            isDiscoverable: Y,
            shouldHideRoleSubscriptionCTA: er,
            onOpenPremiumSettings: () => {
                (N(),
                    B.default.track(R.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: ee.page,
                        location_section: ee.section,
                    }),
                    (0, D.e)());
            },
        }),
        ec = K && el && !er && ((G && en) || !G),
        ed = eu.emojiDescription,
        eh = (0, O.i)({
            emojiId: s.emojiId,
            currentGuildId: eo,
            popoutData: eu,
            emojiSourceGuildId: g?.id,
            nonce: M,
            demoMode: b,
        }),
        em = eu.type === Z.u.JOIN_GUILD,
        ef = eu.type === Z.u.GET_PREMIUM,
        [ep, eg] = i.useState(!1),
        ex = Y || (K && !W) || null != g;
    return (0, l.jsxs)(J.Uq, {
        className: Q.Bm,
        children: [
            (function () {
                async function e() {
                    if (b || null == g || K) return;
                    N();
                    let e = g.id;
                    try {
                        (await x.A.joinGuild(e), x.A.transitionToGuildSync(e));
                    } catch {}
                }
                let t = !K && Y;
                return (0, l.jsxs)("div", {
                    className: Q.gH,
                    children: [
                        (0, l.jsxs)(y.A, {
                            children: [
                                (0, l.jsx)(A.A, {
                                    className: Q.P$,
                                    emojiId: s.emojiId,
                                    emojiName: s.name,
                                    animated: s.animated,
                                    size: "jumbo",
                                }),
                                (0, l.jsxs)(y.A, {
                                    direction: y.A.Direction.VERTICAL,
                                    justify: y.A.Justify.CENTER,
                                    className: Q.bM,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            variant: "text-md/semibold",
                                            children: (0, l.jsx)(c.A, { children: s.name }),
                                        }),
                                        null != ed && (0, l.jsx)(d.E, { variant: "text-sm/normal", children: ed }),
                                    ],
                                }),
                            ],
                        }),
                        ef
                            ? (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: Q.lI,
                                  children: (0, l.jsx)(U.A, {
                                      subscriptionTier: X.pe.TIER_2,
                                      size: "sm",
                                      fullWidth: !0,
                                      buttonTextOverride: eu.text,
                                      onSubscribeModalClose: (t) => (t ? e() : N()),
                                      postSuccessGuild: t ? (g ?? void 0) : void 0,
                                      premiumModalAnalyticsLocation: ee,
                                  }),
                              })
                            : em
                              ? (0, l.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: Q.lI,
                                    children: (0, l.jsx)(f.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: eu.text,
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                })
                              : void 0,
                        ec &&
                            (0, l.jsx)(P.A, {
                                text: es ? q.intl.string(q.t.yma8Vp) : q.intl.string(q.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: function () {
                                    (N(),
                                        S?.id != null &&
                                            x.A.transitionToGuildSync(
                                                S.id,
                                                {
                                                    sourceLocationStack: [
                                                        C.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                $.VV.ROLE_SUBSCRIPTIONS,
                                            ));
                                },
                            }),
                    ],
                });
            })(),
            ex &&
                ((n = null != g && !K && Y && (g?.emojis?.length ?? 0) > 1),
                (0, l.jsxs)("div", {
                    className: Q.tl,
                    children: [
                        (0, l.jsx)(d.E, {
                            className: Q.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: K ? q.intl.string(q.t.ohTzZH) : q.intl.string(q.t["eLfh+a"]),
                        }),
                        (0, l.jsx)(et, {
                            expressionSourceGuild: g ?? T.GO.createFromGuildRecord(S),
                            hasJoinedExpressionSourceGuild: K,
                            isDisplayingJoinGuildButtonInPopout: em,
                            closePopout: N,
                        }),
                        n &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    ((t = q.intl.string(q.t.pnsAS2)),
                                    (0, l.jsx)(h.D, {
                                        onClick: function () {
                                            n &&
                                                (_?.(),
                                                ep ||
                                                    b ||
                                                    B.default.track(R.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eh),
                                                eg(!ep));
                                        },
                                        className: Q.wK,
                                        children: (0, l.jsxs)(y.A, {
                                            children: [
                                                (0, l.jsx)(d.E, {
                                                    className: Q.__invalid_showMoreEmojisLabel,
                                                    "aria-label": t,
                                                    variant: "text-xs/normal",
                                                    color: "none",
                                                    children: t,
                                                }),
                                                (0, l.jsx)(p.a, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: r()(Q.ZB, { [Q.cP]: !ep }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != s.emojiId &&
                                        ep &&
                                        (0, l.jsx)(ei, {
                                            emojiId: s.emojiId,
                                            expressionSourceGuild: g,
                                            popoutData: eu,
                                            onClose: N,
                                            hasJoinedEmojiSourceGuild: K,
                                            isDisplayingButtonInTopSection: em || ef,
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
            onClose: r,
            isDisplayingButtonInTopSection: a,
        } = e,
        o = (n?.emojis ?? [])
            .slice(0, 13)
            .filter((e) => e.id !== t)
            .slice(0, 12),
        { type: u, description: c } = s;
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
                              ...J.Uk,
                              children: (0, l.jsx)(A.A, { className: Q.Th, emojiId: e.id, animated: e.animated }),
                          },
                          e.id,
                      ),
                  ),
            !a &&
                (u === Z.u.GET_PREMIUM
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: Q.lI,
                                  children: (0, l.jsx)(U.A, {
                                      subscriptionTier: X.pe.TIER_2,
                                      buttonTextOverride: s.text,
                                      fullWidth: !0,
                                      onClick: () => r(),
                                  }),
                              }),
                              null != c &&
                                  (0, l.jsx)("div", {
                                      className: Q.vd,
                                      children: (0, l.jsx)(d.E, {
                                          variant: "text-sm/medium",
                                          "aria-label": c,
                                          children: c,
                                      }),
                                  }),
                          ],
                      })
                    : u === Z.u.JOIN_GUILD
                      ? (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: Q.lI,
                            children: (0, l.jsx)(f.$, {
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
}
