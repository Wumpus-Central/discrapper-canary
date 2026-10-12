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
    T = n(770335),
    y = n(624793),
    k = n(652215),
    P = n(731383),
    _ = n(548118),
    G = n(714991),
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
    q = n(660183),
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
        m = a !== r.name;
    return (0, i.jsx)(d.l, {
        children: (0, i.jsx)(Y.Uq, {
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
                                className: $.__invalid_emojiName,
                                variant: "text-md/semibold",
                                children: m
                                    ? (0, i.jsx)("div", { className: $.Gl, children: a })
                                    : (0, i.jsx)(c.A, { children: a }),
                            }),
                            (0, i.jsx)(u.E, { variant: "text-sm/normal", children: q.intl.string(q.t.sXdH8c) }),
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
                        : (0, i.jsx)(_.Ay, { size: _.Ay.Sizes.SMALL, className: $.oi, guild: n }),
            }),
            (0, i.jsxs)(A.A, {
                direction: A.A.Direction.VERTICAL,
                className: r()($.__invalid_guildInformation, $.bM),
                children: [
                    (0, i.jsxs)(A.A, {
                        align: A.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(G.A, { guild: n, className: $.n2 }),
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
            let { emojiId: t, refreshPositionKey: n } = e,
                { joinedEmojiSourceGuildRecord: i, emoji: l } = (0, C.cf)([O.Ay, S.A], () => {
                    var e, n;
                    let i;
                    return (
                        (e = O.Ay),
                        (n = S.A),
                        (i = null != t ? e.getCustomEmojiById(t) : null),
                        i?.type === T.i.GUILD
                            ? { emoji: i, joinedEmojiSourceGuildRecord: n.getGuild(i?.guildId) }
                            : { emoji: null, joinedEmojiSourceGuildRecord: null }
                    );
                }),
                r = null != i,
                a = null != i && i.features.has(k.GuildFeatures.DISCOVERABLE),
                o = (!r || a) && null != t,
                [c, d] = s.useState(o),
                [u, m] = s.useState(null),
                x = null != i ? y.GO.createFromGuildRecord(i) : null,
                [h, j] = s.useState(x),
                [g, p] = s.useState(null),
                I = s.useRef(n);
            return (
                s.useEffect(() => {
                    I.current = n;
                }),
                s.useEffect(() => {
                    async function e() {
                        let e = null != t ? await (0, y.g_)(t) : null;
                        if (null != e)
                            switch ((m(e.type), e.type)) {
                                case y.rV.APPLICATION:
                                    p(e.application);
                                    break;
                                case y.rV.GUILD:
                                    j(e.guild);
                            }
                        (d(!1), I.current?.());
                    }
                    (I.current?.(), o) ? e() : I.current?.();
                }, [t, o]),
                {
                    expressionSourceGuild: h,
                    expressionSourceApplication: g,
                    sourceType: u,
                    joinedEmojiSourceGuildRecord: i,
                    hasJoinedEmojiSourceGuild: r,
                    emoji: l,
                    isFetching: c,
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
            sourceType: d,
            expressionSourceApplication: x,
            expressionSourceGuild: g,
            joinedEmojiSourceGuildRecord: E,
            closePopout: C,
            onToggleShowMoreEmojis: S,
            guildEmoji: O,
            demoMode: T = !1,
            nonce: _,
        } = e,
        G = (0, o.bG)([B.default], () => B.default.getCurrentUser()),
        U = (0, o.bG)([J.A], () => J.A.getGuildId()),
        z = F.Ay.isPremium(G),
        K = null != U && (U === g?.id || U === E?.id),
        H = null != E,
        X = g?.isDiscoverable() ?? !1;
    T && ((z = !0), (X = !0), (H = !1), (K = !1));
    let ee = {
            page: null != (0, o.bG)([J.A], () => J.A.getGuildId()) ? k.liQ.GUILD_CHANNEL : k.liQ.DM_CHANNEL,
            section: k.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: en,
            isUnusableRoleSubscriptionEmoji: ei,
            userIsRoleSubscriber: el,
        } = s.useMemo(
            () =>
                null == O
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: R.kT(O),
                          isUnusableRoleSubscriptionEmoji: R.JN(O, U ?? void 0),
                          userIsRoleSubscriber: L.A.getUserSubscriptionRoles(O.guildId).size > 0,
                      },
            [O, U],
        ),
        er = !!ei && (0, v.tE)(O?.guildId),
        { analyticsLocations: ea } = (0, b.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, f.A)(
        {
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: ea, emoji_guild_id: O?.guildId ?? null, emoji_id: O?.id ?? null },
        },
        { disableTrack: !en },
    );
    let eo = J.A.getGuildId(),
        ec = (0, W.O)({
            sourceType: d,
            expressionSourceApplication: x,
            isPremium: z,
            hasJoinedEmojiSourceGuild: H,
            isRoleSubscriptionEmoji: en,
            isUnusableRoleSubscriptionEmoji: ei,
            userIsRoleSubscriber: el,
            emojiComesFromCurrentGuild: K,
            isDiscoverable: X,
            shouldHideRoleSubscriptionCTA: er,
            onOpenPremiumSettings: () => {
                (C(),
                    V.default.track(k.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: ee.page,
                        location_section: ee.section,
                    }),
                    (0, M.e)());
            },
        }),
        ed = H && ei && !er && ((z && en) || !z),
        eu = ec.emojiDescription,
        em = (0, P.i)({
            emojiId: l.emojiId,
            currentGuildId: eo,
            popoutData: ec,
            emojiSourceGuildId: g?.id,
            nonce: _,
            demoMode: T,
        }),
        ex = ec.type === W.u.JOIN_GUILD,
        eh = ec.type === W.u.GET_PREMIUM,
        [ej, eg] = s.useState(!1),
        ep = X || (H && !K) || null != g;
    return (0, i.jsxs)(Y.Uq, {
        className: $.Bm,
        children: [
            (function () {
                async function e() {
                    if (T || null == g || H) return;
                    C();
                    let e = g.id;
                    try {
                        (await p.A.joinGuild(e), p.A.transitionToGuildSync(e));
                    } catch {}
                }
                let t = !H && X;
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
                                            children: (0, i.jsx)(c.A, { children: l.name }),
                                        }),
                                        null != eu && (0, i.jsx)(u.E, { variant: "text-sm/normal", children: eu }),
                                    ],
                                }),
                            ],
                        }),
                        eh
                            ? (0, i.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: $.lI,
                                  children: (0, i.jsx)(w.A, {
                                      subscriptionTier: Z.pe.TIER_2,
                                      size: "sm",
                                      fullWidth: !0,
                                      buttonTextOverride: ec.text,
                                      onSubscribeModalClose: (t) => (t ? e() : C()),
                                      postSuccessGuild: t ? (g ?? void 0) : void 0,
                                      premiumModalAnalyticsLocation: ee,
                                  }),
                              })
                            : ex
                              ? (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: $.lI,
                                    children: (0, i.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ec.text,
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                })
                              : void 0,
                        ed &&
                            (0, i.jsx)(D.A, {
                                text: el ? q.intl.string(q.t.yma8Vp) : q.intl.string(q.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: function () {
                                    (C(),
                                        E?.id != null &&
                                            p.A.transitionToGuildSync(
                                                E.id,
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
            ep &&
                ((n = null != g && !H && X && (g?.emojis?.length ?? 0) > 1),
                (0, i.jsxs)("div", {
                    className: $.tl,
                    children: [
                        (0, i.jsx)(u.E, {
                            className: $.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: H ? q.intl.string(q.t.ohTzZH) : q.intl.string(q.t["eLfh+a"]),
                        }),
                        (0, i.jsx)(et, {
                            expressionSourceGuild: g ?? y.GO.createFromGuildRecord(E),
                            hasJoinedExpressionSourceGuild: H,
                            isDisplayingJoinGuildButtonInPopout: ex,
                            closePopout: C,
                        }),
                        n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ((t = q.intl.string(q.t.pnsAS2)),
                                    (0, i.jsx)(m.D, {
                                        onClick: function () {
                                            n &&
                                                (S?.(),
                                                ej ||
                                                    T ||
                                                    V.default.track(k.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, em),
                                                eg(!ej));
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
                                                    className: r()($.ZB, { [$.cP]: !ej }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != l.emojiId &&
                                        ej &&
                                        (0, i.jsx)(es, {
                                            emojiId: l.emojiId,
                                            expressionSourceGuild: g,
                                            popoutData: ec,
                                            onClose: C,
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
