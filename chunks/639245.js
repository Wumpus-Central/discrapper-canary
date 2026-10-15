n.d(t, { G7: () => et, iP: () => en, sX: () => ei, mG: () => es, MV: () => ee });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(562708),
    o = n(17928),
    c = n(3026),
    d = n(305866),
    u = n(834730),
    m = n(939249),
    x = n(297264),
    h = n(821609),
    j = n(847374),
    g = n(866665),
    p = n(66834),
    I = n(565645),
    N = n(793574),
    b = n(688810),
    f = n(139286),
    A = n(235986),
    E = n(573435),
    v = n(836039),
    C = n(702841),
    S = n(71393),
    O = n(236285),
    y = n(770335),
    T = n(624793),
    k = n(652215),
    P = n(731383),
    G = n(548118),
    _ = n(714991),
    R = n(492494),
    L = n(384684),
    D = n(985242),
    M = n(87719),
    w = n(465794),
    U = n(976860),
    z = n(309010),
    J = n(967198),
    B = n(287809),
    V = n(174459),
    K = n(486020),
    H = n(449054),
    F = n(158045),
    W = n(450707),
    X = n(773669),
    q = n(105292),
    Y = n(188645),
    Q = n(746080),
    Z = n(202541),
    $ = n(844749);
function ee(e) {
    var t, n;
    let s,
        l,
        { node: r } = e;
    (0, P.i)({ emojiId: r.emojiId, currentGuildId: J.A.getGuildId() });
    let a =
            ((n = t = r.name),
            (s = (0, o.bG)([X.default], () => X.default.locale.startsWith("en-"))),
            (l = ":pizza:" === n && s ? q.intl.formatToPlainString(q.t["1knDPI"], { emojiName: n }) : n),
            ":pizza:" === t ? l : t),
        c = a !== r.name;
    return (0, i.jsx)(d.l, {
        children: (0, i.jsx)(Y.Uq, {
            className: $.Os,
            children: (0, i.jsxs)(A.A, {
                className: $.gH,
                children: [
                    (0, i.jsx)(I.A, { emojiName: r.name, className: $.P$, src: r.src, animated: !1, size: "jumbo" }),
                    (0, i.jsxs)(A.A, {
                        direction: A.A.Direction.VERTICAL,
                        justify: A.A.Justify.CENTER,
                        className: $.bM,
                        children: [
                            (0, i.jsx)(u.E, {
                                className: $.cC,
                                variant: "text-md/semibold",
                                children: c ? (0, i.jsx)("div", { className: $.Gl, children: a }) : a,
                            }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/normal",
                                className: $.t,
                                children: q.intl.string(q.t.sXdH8c),
                            }),
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
            hasJoinedExpressionSourceGuild: s,
            isDisplayingJoinGuildButtonInPopout: l,
            closePopout: a,
        } = e,
        { id: o, icon: d, name: h } = n,
        j = K.Ay.getGuildIconURL({ id: o, icon: d, size: 32, canAnimate: !0 }),
        g = (s = s ?? !0) || n.isDiscoverable();
    function p() {
        n.isDiscoverable() ? (a(), (0, H.Z2)(o, {})) : s && (a(), (0, U.pX)(k.BVt.CHANNEL(o, z.Ay.getChannelId(o))));
    }
    let I = n.isDiscoverable() && null != n.presenceCount;
    return (0, i.jsxs)(A.A, {
        align: A.A.Align.CENTER,
        children: [
            (0, i.jsx)(E.Ay, {
                mask: E.Ay.Masks.SQUIRCLE,
                width: 32,
                height: 32,
                className: $.__invalid_guildIconContainer,
                children:
                    null != j && g
                        ? (0, i.jsxs)(m.D, {
                              "aria-label": h,
                              onClick: p,
                              children: [(0, i.jsx)("img", { src: j, alt: "", className: $.$f }), " :"],
                          })
                        : (0, i.jsx)(G.Ay, { size: G.Ay.Sizes.SMALL, className: $.oi, guild: n }),
            }),
            (0, i.jsxs)(A.A, {
                direction: A.A.Direction.VERTICAL,
                className: r()($.__invalid_guildInformation, $.bM),
                children: [
                    (0, i.jsxs)(A.A, {
                        align: A.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(_.A, { guild: n, className: $.n2 }),
                            g
                                ? (0, i.jsx)(m.D, {
                                      onClick: p,
                                      className: $.bM,
                                      children: (0, i.jsx)(x.D, {
                                          className: $.J5,
                                          variant: "heading-md/semibold",
                                          children: (0, i.jsx)(c.A, { children: h }),
                                      }),
                                  })
                                : (0, i.jsx)(x.D, {
                                      variant: "heading-md/semibold",
                                      children: (0, i.jsx)(c.A, { children: h }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)(A.A, {
                        align: A.A.Align.CENTER,
                        children: I
                            ? ((t = !l && !s),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(u.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          children: q.intl.format(q.t["LC+S+m"], { membersOnline: n.presenceCount }),
                                      }),
                                      (0, i.jsx)("div", { className: $.zk }),
                                      t
                                          ? (0, i.jsx)(m.D, {
                                                className: $.Ki,
                                                onClick: p,
                                                children: (0, i.jsx)(u.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-link",
                                                    children: q.intl.string(q.t.riu2R5),
                                                }),
                                            })
                                          : (0, i.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: q.intl.string(q.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, i.jsx)(u.E, {
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
    let { node: t, closePopout: n, refreshPositionKey: l, nonce: r } = e,
        {
            expressionSourceGuild: a,
            expressionSourceApplication: o,
            sourceType: c,
            joinedEmojiSourceGuildRecord: u,
            emoji: m,
            isFetching: x,
        } = (function (e) {
            let { emojiId: t, refreshPositionKey: n, skipKnownGuildEmojiFetch: i = !1 } = e,
                { joinedEmojiSourceGuildRecord: l, emoji: r } = (0, C.cf)([O.Ay, S.A], () => {
                    var e, n;
                    let i;
                    return (
                        (e = O.Ay),
                        (n = S.A),
                        (i = null != t ? e.getCustomEmojiById(t) : null),
                        i?.type === y.i.GUILD
                            ? { emoji: i, joinedEmojiSourceGuildRecord: n.getGuild(i?.guildId) }
                            : { emoji: null, joinedEmojiSourceGuildRecord: null }
                    );
                }),
                a = null != l,
                o = null != l && l.features.has(k.GuildFeatures.DISCOVERABLE),
                c = null != t && !(i && null != r) && (!a || o),
                [d, u] = s.useState(c),
                [m, x] = s.useState(null),
                h = null != l ? T.GO.createFromGuildRecord(l) : null,
                [j, g] = s.useState(h),
                [p, I] = s.useState(null),
                N = s.useRef(n);
            return (
                s.useEffect(() => {
                    N.current = n;
                }),
                s.useEffect(() => {
                    async function e() {
                        let e = null != t ? await (0, T.g_)(t) : null;
                        if (null != e)
                            switch ((x(e.type), e.type)) {
                                case T.rV.APPLICATION:
                                    I(e.application);
                                    break;
                                case T.rV.GUILD:
                                    g(e.guild);
                            }
                        (u(!1), N.current?.());
                    }
                    (N.current?.(), c) ? e() : N.current?.();
                }, [t, c]),
                {
                    expressionSourceGuild: j,
                    expressionSourceApplication: p,
                    sourceType: m,
                    joinedEmojiSourceGuildRecord: l,
                    hasJoinedEmojiSourceGuild: a,
                    emoji: r,
                    isFetching: d,
                }
            );
        })({ emojiId: t.emojiId, refreshPositionKey: l });
    return x
        ? (0, i.jsx)(Y.Y0, {})
        : (0, i.jsx)(d.l, {
              "aria-label": t.name,
              children: (0, i.jsx)(ei, {
                  node: t,
                  sourceType: c,
                  expressionSourceApplication: o,
                  guildEmoji: m ?? void 0,
                  expressionSourceGuild: a,
                  joinedEmojiSourceGuildRecord: u,
                  closePopout: n,
                  onToggleShowMoreEmojis: l,
                  demoMode: !1,
                  nonce: r,
              }),
          });
}
function ei(e) {
    let t,
        n,
        {
            node: l,
            sourceType: c,
            expressionSourceApplication: d,
            expressionSourceGuild: x,
            joinedEmojiSourceGuildRecord: g,
            closePopout: E,
            onToggleShowMoreEmojis: C,
            guildEmoji: S,
            demoMode: O = !1,
            nonce: y,
        } = e,
        G = (0, o.bG)([B.default], () => B.default.getCurrentUser()),
        _ = (0, o.bG)([J.A], () => J.A.getGuildId()),
        U = F.Ay.isPremium(G),
        z = null != _ && (_ === x?.id || _ === g?.id),
        K = null != g,
        H = x?.isDiscoverable() ?? !1;
    O && ((U = !0), (H = !0), (K = !1), (z = !1));
    let X = {
            page: null != (0, o.bG)([J.A], () => J.A.getGuildId()) ? k.liQ.GUILD_CHANNEL : k.liQ.DM_CHANNEL,
            section: k.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: ee,
            isUnusableRoleSubscriptionEmoji: en,
            userIsRoleSubscriber: ei,
        } = s.useMemo(
            () =>
                null == S
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: R.kT(S),
                          isUnusableRoleSubscriptionEmoji: R.JN(S, _ ?? void 0),
                          userIsRoleSubscriber: L.A.getUserSubscriptionRoles(S.guildId).size > 0,
                      },
            [S, _],
        ),
        el = !!en && (0, v.tE)(S?.guildId),
        { analyticsLocations: er } = (0, b.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, f.A)(
        {
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: er, emoji_guild_id: S?.guildId ?? null, emoji_id: S?.id ?? null },
        },
        { disableTrack: !ee },
    );
    let ea = J.A.getGuildId(),
        eo = (0, W.O)({
            sourceType: c,
            expressionSourceApplication: d,
            isPremium: U,
            hasJoinedEmojiSourceGuild: K,
            isRoleSubscriptionEmoji: ee,
            isUnusableRoleSubscriptionEmoji: en,
            userIsRoleSubscriber: ei,
            emojiComesFromCurrentGuild: z,
            isDiscoverable: H,
            shouldHideRoleSubscriptionCTA: el,
            onOpenPremiumSettings: () => {
                (E(),
                    V.default.track(k.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: X.page,
                        location_section: X.section,
                    }),
                    (0, M.e)());
            },
        }),
        ec = K && en && !el && ((U && ee) || !U),
        ed = eo.emojiDescription,
        eu = (0, P.i)({
            emojiId: l.emojiId,
            currentGuildId: ea,
            popoutData: eo,
            emojiSourceGuildId: x?.id,
            nonce: y,
            demoMode: O,
        }),
        em = eo.type === W.u.JOIN_GUILD,
        ex = eo.type === W.u.GET_PREMIUM,
        [eh, ej] = s.useState(!1),
        eg = H || (K && !z) || null != x;
    return (0, i.jsxs)(Y.Uq, {
        className: r()($.Bm, $.Os),
        children: [
            (function () {
                async function e() {
                    if (O || null == x || K) return;
                    E();
                    let e = x.id;
                    try {
                        (await p.A.joinGuild(e), p.A.transitionToGuildSync(e));
                    } catch {}
                }
                let t = !K && H;
                return (0, i.jsxs)("div", {
                    className: $.gH,
                    children: [
                        (0, i.jsxs)(A.A, {
                            children: [
                                (0, i.jsx)(I.A, {
                                    className: $.P$,
                                    emojiId: l.emojiId,
                                    emojiName: l.name,
                                    animated: l.animated,
                                    size: "jumbo",
                                }),
                                (0, i.jsxs)(A.A, {
                                    direction: A.A.Direction.VERTICAL,
                                    justify: A.A.Justify.CENTER,
                                    className: $.bM,
                                    children: [
                                        (0, i.jsx)(u.E, {
                                            variant: "text-md/semibold",
                                            className: $.cC,
                                            children: l.name,
                                        }),
                                        null != ed &&
                                            (0, i.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                className: $.t,
                                                children: ed,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        ex
                            ? (0, i.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: $.lI,
                                  children: (0, i.jsx)(w.A, {
                                      subscriptionTier: Z.pe.TIER_2,
                                      size: "sm",
                                      fullWidth: !0,
                                      buttonTextOverride: eo.text,
                                      onSubscribeModalClose: (t) => (t ? e() : E()),
                                      postSuccessGuild: t ? (x ?? void 0) : void 0,
                                      premiumModalAnalyticsLocation: X,
                                  }),
                              })
                            : em
                              ? (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: $.lI,
                                    children: (0, i.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: eo.text,
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                })
                              : void 0,
                        ec &&
                            (0, i.jsx)(D.A, {
                                text: ei ? q.intl.string(q.t.yma8Vp) : q.intl.string(q.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: function () {
                                    (E(),
                                        g?.id != null &&
                                            p.A.transitionToGuildSync(
                                                g.id,
                                                {
                                                    sourceLocationStack: [
                                                        N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                Q.VV.ROLE_SUBSCRIPTIONS,
                                            ));
                                },
                            }),
                    ],
                });
            })(),
            eg &&
                ((n = null != x && !K && H && (x?.emojis?.length ?? 0) > 1),
                (0, i.jsxs)("div", {
                    className: $.tl,
                    children: [
                        (0, i.jsx)(u.E, {
                            className: $.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: K ? q.intl.string(q.t.ohTzZH) : q.intl.string(q.t["eLfh+a"]),
                        }),
                        (0, i.jsx)(et, {
                            expressionSourceGuild: x ?? T.GO.createFromGuildRecord(g),
                            hasJoinedExpressionSourceGuild: K,
                            isDisplayingJoinGuildButtonInPopout: em,
                            closePopout: E,
                        }),
                        n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ((t = q.intl.string(q.t.pnsAS2)),
                                    (0, i.jsx)(m.D, {
                                        onClick: function () {
                                            n &&
                                                (C?.(),
                                                eh ||
                                                    O ||
                                                    V.default.track(k.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eu),
                                                ej(!eh));
                                        },
                                        className: $.wK,
                                        children: (0, i.jsxs)(A.A, {
                                            children: [
                                                (0, i.jsx)(u.E, {
                                                    className: $.__invalid_showMoreEmojisLabel,
                                                    "aria-label": t,
                                                    variant: "text-xs/normal",
                                                    color: "none",
                                                    children: t,
                                                }),
                                                (0, i.jsx)(j.a, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: r()($.ZB, { [$.cP]: !eh }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != l.emojiId &&
                                        eh &&
                                        (0, i.jsx)(es, {
                                            emojiId: l.emojiId,
                                            expressionSourceGuild: x,
                                            popoutData: eo,
                                            onClose: E,
                                            hasJoinedEmojiSourceGuild: K,
                                            isDisplayingButtonInTopSection: em || ex,
                                        }),
                                ],
                            }),
                    ],
                })),
        ],
    });
}
function es(e) {
    let {
            emojiId: t,
            expressionSourceGuild: n,
            hasJoinedEmojiSourceGuild: s,
            popoutData: l,
            onClose: r,
            isDisplayingButtonInTopSection: a,
        } = e,
        o = (n?.emojis ?? [])
            .slice(0, 13)
            .filter((e) => e.id !== t)
            .slice(0, 12),
        { type: c, description: d } = l;
    return (0, i.jsxs)("div", {
        className: $.LX,
        children: [
            s
                ? null
                : o.map((e) =>
                      (0, i.jsx)(
                          g.m,
                          {
                              text: e.require_colons ? `:${e.name}:` : e.name,
                              ...Y.Uk,
                              children: (0, i.jsx)(I.A, { className: $.Th, emojiId: e.id, animated: e.animated }),
                          },
                          e.id,
                      ),
                  ),
            !a &&
                (c === W.u.GET_PREMIUM
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: $.lI,
                                  children: (0, i.jsx)(w.A, {
                                      subscriptionTier: Z.pe.TIER_2,
                                      buttonTextOverride: l.text,
                                      fullWidth: !0,
                                      onClick: () => r(),
                                  }),
                              }),
                              null != d &&
                                  (0, i.jsx)("div", {
                                      className: $.vd,
                                      children: (0, i.jsx)(u.E, {
                                          variant: "text-sm/medium",
                                          "aria-label": d,
                                          children: d,
                                      }),
                                  }),
                          ],
                      })
                    : c === W.u.JOIN_GUILD
                      ? (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: $.lI,
                            children: (0, i.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                text: l.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, H.Z2)(n.id, {});
                                },
                            }),
                        })
                      : null),
        ],
    });
}
