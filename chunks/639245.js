n.d(t, { G7: () => et, iP: () => en, sX: () => el, mG: () => es, MV: () => ee });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(562708),
    o = n(17928),
    u = n(3026),
    c = n(305866),
    d = n(834730),
    m = n(939249),
    x = n(297264),
    h = n(821609),
    j = n(847374),
    p = n(866665),
    g = n(66834),
    f = n(565645),
    N = n(793574),
    I = n(688810),
    A = n(139286),
    v = n(235986),
    b = n(573435),
    S = n(836039),
    E = n(702841),
    C = n(71393),
    T = n(236285),
    y = n(770335),
    O = n(624793),
    k = n(652215),
    G = n(731383),
    _ = n(548118),
    R = n(714991),
    P = n(492494),
    M = n(384684),
    L = n(985242),
    D = n(87719),
    U = n(465794),
    w = n(976860),
    z = n(309010),
    V = n(967198),
    B = n(287809),
    F = n(174459),
    J = n(486020),
    H = n(449054),
    K = n(158045),
    W = n(450707),
    $ = n(773669),
    X = n(660183),
    Y = n(188645),
    q = n(746080),
    Z = n(202541),
    Q = n(844749);
function ee(e) {
    var t, n;
    let s,
        i,
        { node: a } = e;
    (0, G.i)({ emojiId: a.emojiId, currentGuildId: V.A.getGuildId() });
    let r =
            ((n = t = a.name),
            (s = (0, o.bG)([$.default], () => $.default.locale.startsWith("en-"))),
            (i = ":pizza:" === n && s ? X.intl.formatToPlainString(X.t["1knDPI"], { emojiName: n }) : n),
            ":pizza:" === t ? i : t),
        m = r !== a.name;
    return (0, l.jsx)(c.l, {
        children: (0, l.jsx)(Y.Uq, {
            children: (0, l.jsxs)(v.A, {
                className: Q.gH,
                children: [
                    (0, l.jsx)(f.A, { emojiName: a.name, className: Q.P$, src: a.src, animated: !1, size: "jumbo" }),
                    (0, l.jsxs)(v.A, {
                        direction: v.A.Direction.VERTICAL,
                        justify: v.A.Justify.CENTER,
                        className: Q.bM,
                        children: [
                            (0, l.jsx)(d.E, {
                                className: Q.__invalid_emojiName,
                                variant: "text-md/semibold",
                                children: m
                                    ? (0, l.jsx)("div", { className: Q.Gl, children: r })
                                    : (0, l.jsx)(u.A, { children: r }),
                            }),
                            (0, l.jsx)(d.E, { variant: "text-sm/normal", children: X.intl.string(X.t.sXdH8c) }),
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
            isDisplayingJoinGuildButtonInPopout: i,
            closePopout: r,
        } = e,
        { id: o, icon: c, name: h } = n,
        j = J.Ay.getGuildIconURL({ id: o, icon: c, size: 32, canAnimate: !0 }),
        p = (s = s ?? !0) || n.isDiscoverable();
    function g() {
        n.isDiscoverable() ? (r(), (0, H.Z2)(o, {})) : s && (r(), (0, w.pX)(k.BVt.CHANNEL(o, z.Ay.getChannelId(o))));
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
                    null != j && p
                        ? (0, l.jsxs)(m.D, {
                              "aria-label": h,
                              onClick: g,
                              children: [(0, l.jsx)("img", { src: j, alt: "", className: Q.$f }), " :"],
                          })
                        : (0, l.jsx)(_.Ay, { size: _.Ay.Sizes.SMALL, className: Q.oi, guild: n }),
            }),
            (0, l.jsxs)(v.A, {
                direction: v.A.Direction.VERTICAL,
                className: a()(Q.__invalid_guildInformation, Q.bM),
                children: [
                    (0, l.jsxs)(v.A, {
                        align: v.A.Align.CENTER,
                        children: [
                            (0, l.jsx)(R.A, { guild: n, className: Q.n2 }),
                            p
                                ? (0, l.jsx)(m.D, {
                                      onClick: g,
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
                            ? ((t = !i && !s),
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          children: X.intl.format(X.t["LC+S+m"], { membersOnline: n.presenceCount }),
                                      }),
                                      (0, l.jsx)("div", { className: Q.zk }),
                                      t
                                          ? (0, l.jsx)(m.D, {
                                                className: Q.Ki,
                                                onClick: g,
                                                children: (0, l.jsx)(d.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-link",
                                                    children: X.intl.string(X.t.riu2R5),
                                                }),
                                            })
                                          : (0, l.jsx)(d.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: X.intl.string(X.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, l.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: X.intl.string(X.t.H29mx4),
                              }),
                    }),
                ],
            }),
        ],
    });
};
function en(e) {
    let { node: t, closePopout: n, refreshPositionKey: i, nonce: a } = e,
        {
            expressionSourceGuild: r,
            expressionSourceApplication: o,
            sourceType: u,
            joinedEmojiSourceGuildRecord: d,
            emoji: m,
            isFetching: x,
        } = (function (e) {
            let { emojiId: t, refreshPositionKey: n } = e,
                { joinedEmojiSourceGuildRecord: l, emoji: i } = (0, E.cf)([T.Ay, C.A], () => {
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
                r = null != l && l.features.has(k.GuildFeatures.DISCOVERABLE),
                o = (!a || r) && null != t,
                [u, c] = s.useState(o),
                [d, m] = s.useState(null),
                x = null != l ? O.GO.createFromGuildRecord(l) : null,
                [h, j] = s.useState(x),
                [p, g] = s.useState(null),
                f = s.useRef(n);
            return (
                s.useEffect(() => {
                    f.current = n;
                }),
                s.useEffect(() => {
                    async function e() {
                        let e = null != t ? await (0, O.g_)(t) : null;
                        if (null != e)
                            switch ((m(e.type), e.type)) {
                                case O.rV.APPLICATION:
                                    g(e.application);
                                    break;
                                case O.rV.GUILD:
                                    j(e.guild);
                            }
                        (c(!1), f.current?.());
                    }
                    (f.current?.(), o) ? e() : f.current?.();
                }, [t, o]),
                {
                    expressionSourceGuild: h,
                    expressionSourceApplication: p,
                    sourceType: d,
                    joinedEmojiSourceGuildRecord: l,
                    hasJoinedEmojiSourceGuild: a,
                    emoji: i,
                    isFetching: u,
                }
            );
        })({ emojiId: t.emojiId, refreshPositionKey: i });
    return x
        ? (0, l.jsx)(Y.Y0, {})
        : (0, l.jsx)(c.l, {
              "aria-label": t.name,
              children: (0, l.jsx)(el, {
                  node: t,
                  sourceType: u,
                  expressionSourceApplication: o,
                  guildEmoji: m ?? void 0,
                  expressionSourceGuild: r,
                  joinedEmojiSourceGuildRecord: d,
                  closePopout: n,
                  onToggleShowMoreEmojis: i,
                  demoMode: !1,
                  nonce: a,
              }),
          });
}
function el(e) {
    let t,
        n,
        {
            node: i,
            sourceType: c,
            expressionSourceApplication: x,
            expressionSourceGuild: p,
            joinedEmojiSourceGuildRecord: b,
            closePopout: E,
            onToggleShowMoreEmojis: C,
            guildEmoji: T,
            demoMode: y = !1,
            nonce: _,
        } = e,
        R = (0, o.bG)([B.default], () => B.default.getCurrentUser()),
        w = (0, o.bG)([V.A], () => V.A.getGuildId()),
        z = K.Ay.isPremium(R),
        J = null != w && (w === p?.id || w === b?.id),
        H = null != b,
        $ = p?.isDiscoverable() ?? !1;
    y && ((z = !0), ($ = !0), (H = !1), (J = !1));
    let ee = {
            page: null != (0, o.bG)([V.A], () => V.A.getGuildId()) ? k.liQ.GUILD_CHANNEL : k.liQ.DM_CHANNEL,
            section: k.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: en,
            isUnusableRoleSubscriptionEmoji: el,
            userIsRoleSubscriber: ei,
        } = s.useMemo(
            () =>
                null == T
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: P.kT(T),
                          isUnusableRoleSubscriptionEmoji: P.JN(T, w ?? void 0),
                          userIsRoleSubscriber: M.A.getUserSubscriptionRoles(T.guildId).size > 0,
                      },
            [T, w],
        ),
        ea = !!el && (0, S.tE)(T?.guildId),
        { analyticsLocations: er } = (0, I.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, A.A)(
        {
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: er, emoji_guild_id: T?.guildId ?? null, emoji_id: T?.id ?? null },
        },
        { disableTrack: !en },
    );
    let eo = V.A.getGuildId(),
        eu = (0, W.O)({
            sourceType: c,
            expressionSourceApplication: x,
            isPremium: z,
            hasJoinedEmojiSourceGuild: H,
            isRoleSubscriptionEmoji: en,
            isUnusableRoleSubscriptionEmoji: el,
            userIsRoleSubscriber: ei,
            emojiComesFromCurrentGuild: J,
            isDiscoverable: $,
            shouldHideRoleSubscriptionCTA: ea,
            onOpenPremiumSettings: () => {
                (E(),
                    F.default.track(k.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: ee.page,
                        location_section: ee.section,
                    }),
                    (0, D.e)());
            },
        }),
        ec = H && el && !ea && ((z && en) || !z),
        ed = eu.emojiDescription,
        em = (0, G.i)({
            emojiId: i.emojiId,
            currentGuildId: eo,
            popoutData: eu,
            emojiSourceGuildId: p?.id,
            nonce: _,
            demoMode: y,
        }),
        ex = eu.type === W.u.JOIN_GUILD,
        eh = eu.type === W.u.GET_PREMIUM,
        [ej, ep] = s.useState(!1),
        eg = $ || (H && !J) || null != p;
    return (0, l.jsxs)(Y.Uq, {
        className: Q.Bm,
        children: [
            (function () {
                async function e() {
                    if (y || null == p || H) return;
                    E();
                    let e = p.id;
                    try {
                        (await g.A.joinGuild(e), g.A.transitionToGuildSync(e));
                    } catch {}
                }
                let t = !H && $;
                return (0, l.jsxs)("div", {
                    className: Q.gH,
                    children: [
                        (0, l.jsxs)(v.A, {
                            children: [
                                (0, l.jsx)(f.A, {
                                    className: Q.P$,
                                    emojiId: i.emojiId,
                                    emojiName: i.name,
                                    animated: i.animated,
                                    size: "jumbo",
                                }),
                                (0, l.jsxs)(v.A, {
                                    direction: v.A.Direction.VERTICAL,
                                    justify: v.A.Justify.CENTER,
                                    className: Q.bM,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            variant: "text-md/semibold",
                                            children: (0, l.jsx)(u.A, { children: i.name }),
                                        }),
                                        null != ed && (0, l.jsx)(d.E, { variant: "text-sm/normal", children: ed }),
                                    ],
                                }),
                            ],
                        }),
                        eh
                            ? (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: Q.lI,
                                  children: (0, l.jsx)(U.A, {
                                      subscriptionTier: Z.pe.TIER_2,
                                      size: "sm",
                                      fullWidth: !0,
                                      buttonTextOverride: eu.text,
                                      onSubscribeModalClose: (t) => (t ? e() : E()),
                                      postSuccessGuild: t ? (p ?? void 0) : void 0,
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
                        ec &&
                            (0, l.jsx)(L.A, {
                                text: ei ? X.intl.string(X.t.yma8Vp) : X.intl.string(X.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: function () {
                                    (E(),
                                        b?.id != null &&
                                            g.A.transitionToGuildSync(
                                                b.id,
                                                {
                                                    sourceLocationStack: [
                                                        N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                q.VV.ROLE_SUBSCRIPTIONS,
                                            ));
                                },
                            }),
                    ],
                });
            })(),
            eg &&
                ((n = null != p && !H && $ && (p?.emojis?.length ?? 0) > 1),
                (0, l.jsxs)("div", {
                    className: Q.tl,
                    children: [
                        (0, l.jsx)(d.E, {
                            className: Q.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: H ? X.intl.string(X.t.ohTzZH) : X.intl.string(X.t["eLfh+a"]),
                        }),
                        (0, l.jsx)(et, {
                            expressionSourceGuild: p ?? O.GO.createFromGuildRecord(b),
                            hasJoinedExpressionSourceGuild: H,
                            isDisplayingJoinGuildButtonInPopout: ex,
                            closePopout: E,
                        }),
                        n &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    ((t = X.intl.string(X.t.pnsAS2)),
                                    (0, l.jsx)(m.D, {
                                        onClick: function () {
                                            n &&
                                                (C?.(),
                                                ej ||
                                                    y ||
                                                    F.default.track(k.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, em),
                                                ep(!ej));
                                        },
                                        className: Q.wK,
                                        children: (0, l.jsxs)(v.A, {
                                            children: [
                                                (0, l.jsx)(d.E, {
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
                                    null != i.emojiId &&
                                        ej &&
                                        (0, l.jsx)(es, {
                                            emojiId: i.emojiId,
                                            expressionSourceGuild: p,
                                            popoutData: eu,
                                            onClose: E,
                                            hasJoinedEmojiSourceGuild: H,
                                            isDisplayingButtonInTopSection: ex || eh,
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
            popoutData: i,
            onClose: a,
            isDisplayingButtonInTopSection: r,
        } = e,
        o = (n?.emojis ?? [])
            .slice(0, 13)
            .filter((e) => e.id !== t)
            .slice(0, 12),
        { type: u, description: c } = i;
    return (0, l.jsxs)("div", {
        className: Q.LX,
        children: [
            s
                ? null
                : o.map((e) =>
                      (0, l.jsx)(
                          p.m,
                          {
                              text: e.require_colons ? `:${e.name}:` : e.name,
                              ...Y.Uk,
                              children: (0, l.jsx)(f.A, { className: Q.Th, emojiId: e.id, animated: e.animated }),
                          },
                          e.id,
                      ),
                  ),
            !r &&
                (u === W.u.GET_PREMIUM
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: Q.lI,
                                  children: (0, l.jsx)(U.A, {
                                      subscriptionTier: Z.pe.TIER_2,
                                      buttonTextOverride: i.text,
                                      fullWidth: !0,
                                      onClick: () => a(),
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
                    : u === W.u.JOIN_GUILD
                      ? (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: Q.lI,
                            children: (0, l.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                text: i.text,
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
