n.d(t, { G7: () => ei, iP: () => el, sX: () => es, mG: () => ea, MV: () => en });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(131937),
    o = n(17928),
    d = n(3026),
    u = n(305866),
    c = n(834730),
    m = n(939249),
    x = n(534514),
    h = n(821609),
    j = n(847374),
    g = n(866665),
    p = n(66834),
    N = n(788026),
    f = n(793574),
    b = n(688810),
    I = n(139286),
    v = n(235986),
    A = n(573435),
    E = n(836039),
    C = n(490035),
    S = n(11184),
    y = n(702841),
    O = n(71393),
    T = n(236285),
    k = n(770335),
    P = n(624793),
    L = n(652215),
    _ = n(731383),
    G = n(548118),
    R = n(714991),
    M = n(492494),
    D = n(384684),
    w = n(985242),
    U = n(87719),
    z = n(465794),
    V = n(976860),
    J = n(309010),
    K = n(967198),
    B = n(287809),
    H = n(174459),
    F = n(486020),
    W = n(449054),
    X = n(24482),
    q = n(450707),
    $ = n(773669),
    Z = n(105292),
    Y = n(188645),
    Q = n(746080),
    ee = n(202541),
    et = n(844749);
function en(e) {
    var t, n;
    let l,
        s,
        { node: a } = e;
    (0, _.i)({ emojiId: a.emojiId, currentGuildId: K.A.getGuildId() });
    let r =
            ((n = t = a.name),
            (l = (0, o.bG)([$.default], () => $.default.locale.startsWith("en-"))),
            (s = ":pizza:" === n && l ? Z.intl.formatToPlainString(Z.t["1knDPI"], { emojiName: n }) : n),
            ":pizza:" === t ? s : t),
        d = r !== a.name;
    return (0, i.jsx)(u.l, {
        children: (0, i.jsx)(Y.Uq, {
            className: et.Os,
            children: (0, i.jsxs)(v.A, {
                className: et.gH,
                children: [
                    (0, i.jsx)(N.A, { emojiName: a.name, className: et.P$, src: a.src, animated: !1, size: "jumbo" }),
                    (0, i.jsxs)(v.A, {
                        direction: v.A.Direction.VERTICAL,
                        justify: v.A.Justify.CENTER,
                        className: et.bM,
                        children: [
                            (0, i.jsx)(c.E, {
                                className: et.cC,
                                variant: "text-md/semibold",
                                children: d ? (0, i.jsx)("div", { className: et.Gl, children: r }) : r,
                            }),
                            (0, i.jsx)(c.E, {
                                variant: "text-sm/normal",
                                className: et.t,
                                children: Z.intl.string(Z.t.sXdH8c),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
let ei = (e) => {
    let t,
        {
            expressionSourceGuild: n,
            hasJoinedExpressionSourceGuild: l,
            isDisplayingJoinGuildButtonInPopout: s,
            closePopout: r,
        } = e,
        { id: o, icon: u, name: h } = n,
        j = F.Ay.getGuildIconURL({ id: o, icon: u, size: 32, canAnimate: !0 }),
        g = (l = l ?? !0) || n.isDiscoverable();
    function p() {
        n.isDiscoverable() ? (r(), (0, W.Z2)(o, {})) : l && (r(), (0, V.pX)(L.BVt.CHANNEL(o, J.Ay.getChannelId(o))));
    }
    let N = n.isDiscoverable() && null != n.presenceCount;
    return (0, i.jsxs)(v.A, {
        align: v.A.Align.CENTER,
        children: [
            (0, i.jsx)(A.Ay, {
                mask: A.Ay.Masks.SQUIRCLE,
                width: 32,
                height: 32,
                className: et.__invalid_guildIconContainer,
                children:
                    null != j && g
                        ? (0, i.jsxs)(m.D, {
                              "aria-label": h,
                              onClick: p,
                              children: [(0, i.jsx)("img", { src: j, alt: "", className: et.$f }), " :"],
                          })
                        : (0, i.jsx)(G.Ay, { size: G.Ay.Sizes.SMALL, className: et.oi, guild: n }),
            }),
            (0, i.jsxs)(v.A, {
                direction: v.A.Direction.VERTICAL,
                className: a()(et.__invalid_guildInformation, et.bM),
                children: [
                    (0, i.jsxs)(v.A, {
                        align: v.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(R.A, { guild: n, className: et.n2 }),
                            g
                                ? (0, i.jsx)(m.D, {
                                      onClick: p,
                                      className: et.bM,
                                      children: (0, i.jsx)(x.D, {
                                          className: et.J5,
                                          variant: "heading-md/semibold",
                                          children: (0, i.jsx)(d.A, { children: h }),
                                      }),
                                  })
                                : (0, i.jsx)(x.D, {
                                      variant: "heading-md/semibold",
                                      children: (0, i.jsx)(d.A, { children: h }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)(v.A, {
                        align: v.A.Align.CENTER,
                        children: N
                            ? ((t = !s && !l),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          children: Z.intl.format(Z.t["LC+S+m"], { membersOnline: n.presenceCount }),
                                      }),
                                      (0, i.jsx)("div", { className: et.zk }),
                                      t
                                          ? (0, i.jsx)(m.D, {
                                                className: et.Ki,
                                                onClick: p,
                                                children: (0, i.jsx)(c.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-link",
                                                    children: Z.intl.string(Z.t.riu2R5),
                                                }),
                                            })
                                          : (0, i.jsx)(c.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: Z.intl.string(Z.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, i.jsx)(c.E, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: Z.intl.string(Z.t.H29mx4),
                              }),
                    }),
                ],
            }),
        ],
    });
};
function el(e) {
    let { node: t, closePopout: n, refreshPositionKey: s, nonce: a } = e,
        {
            expressionSourceGuild: r,
            expressionSourceApplication: o,
            expressionSourcePack: d,
            sourceType: c,
            joinedEmojiSourceGuildRecord: m,
            emoji: x,
            isFetching: h,
        } = (function (e) {
            let { emojiId: t, refreshPositionKey: n, skipKnownGuildEmojiFetch: i = !1 } = e,
                { joinedEmojiSourceGuildRecord: s, emoji: a } = (0, y.cf)([T.Ay, O.A], () => {
                    var e, n;
                    let i;
                    return (
                        (e = T.Ay),
                        (n = O.A),
                        (i = null != t ? e.getCustomEmojiById(t) : null),
                        i?.type === k.i.GUILD
                            ? { emoji: i, joinedEmojiSourceGuildRecord: n.getGuild(i?.guildId) }
                            : { emoji: null, joinedEmojiSourceGuildRecord: null }
                    );
                }),
                r = null != s,
                o = null != s && s.features.has(L.GuildFeatures.DISCOVERABLE),
                d = null != t && !(i && null != a) && (!r || o),
                [u, c] = l.useState(d),
                [m, x] = l.useState(null),
                h = null != s ? P.GO.createFromGuildRecord(s) : null,
                [j, g] = l.useState(h),
                [p, N] = l.useState(null),
                [f, b] = l.useState(null),
                I = l.useRef(n);
            return (
                l.useEffect(() => {
                    I.current = n;
                }),
                l.useEffect(() => {
                    async function e() {
                        let e = null != t ? await (0, P.g_)(t) : null;
                        if (null != e)
                            switch ((x(e.type), e.type)) {
                                case P.rV.APPLICATION:
                                    N(e.application);
                                    break;
                                case P.rV.GUILD:
                                    g(e.guild);
                                    break;
                                case P.rV.PACK:
                                    b(e.pack);
                            }
                        (c(!1), I.current?.());
                    }
                    (I.current?.(), d) ? e() : I.current?.();
                }, [t, d]),
                {
                    expressionSourceGuild: j,
                    expressionSourceApplication: p,
                    expressionSourcePack: f,
                    sourceType: m,
                    joinedEmojiSourceGuildRecord: s,
                    hasJoinedEmojiSourceGuild: r,
                    emoji: a,
                    isFetching: u,
                }
            );
        })({ emojiId: t.emojiId, refreshPositionKey: s });
    return h
        ? (0, i.jsx)(Y.Y0, {})
        : (0, i.jsx)(u.l, {
              "aria-label": t.name,
              children: (0, i.jsx)(es, {
                  node: t,
                  sourceType: c,
                  expressionSourceApplication: o,
                  expressionSourcePack: d,
                  guildEmoji: x ?? void 0,
                  expressionSourceGuild: r,
                  joinedEmojiSourceGuildRecord: m,
                  closePopout: n,
                  onToggleShowMoreEmojis: s,
                  demoMode: !1,
                  nonce: a,
              }),
          });
}
function es(e) {
    let t,
        n,
        {
            node: s,
            sourceType: d,
            expressionSourceApplication: u,
            expressionSourcePack: x,
            expressionSourceGuild: g,
            joinedEmojiSourceGuildRecord: A,
            closePopout: y,
            onToggleShowMoreEmojis: O,
            guildEmoji: T,
            demoMode: k = !1,
            nonce: G,
        } = e,
        R = (0, o.bG)([B.default], () => B.default.getCurrentUser()),
        V = (0, C.H)("message_emoji_details"),
        J = (0, o.bG)([K.A], () => K.A.getGuildId()),
        F = X.Ay.isPremium(R),
        W = null != J && (J === g?.id || J === A?.id),
        $ = null != A,
        en = g?.isDiscoverable() ?? !1;
    k && ((F = !0), (en = !0), ($ = !1), (W = !1));
    let el = {
            page: null != (0, o.bG)([K.A], () => K.A.getGuildId()) ? L.liQ.GUILD_CHANNEL : L.liQ.DM_CHANNEL,
            section: L.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: es,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: eo,
        } = l.useMemo(
            () =>
                null == T
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: M.kT(T),
                          isUnusableRoleSubscriptionEmoji: M.JN(T, J ?? void 0),
                          userIsRoleSubscriber: D.A.getUserSubscriptionRoles(T.guildId).size > 0,
                      },
            [T, J],
        ),
        ed = !!er && (0, E.tE)(T?.guildId),
        { analyticsLocations: eu } = (0, b.Ay)(f.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, I.A)(
        {
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: eu, emoji_guild_id: T?.guildId ?? null, emoji_id: T?.id ?? null },
        },
        { disableTrack: !es },
    );
    let ec = K.A.getGuildId(),
        em = (0, q.O)({
            sourceType: d,
            expressionSourceApplication: u,
            isPremium: F,
            hasJoinedEmojiSourceGuild: $,
            isRoleSubscriptionEmoji: es,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: eo,
            emojiComesFromCurrentGuild: W,
            isDiscoverable: en,
            shouldHideRoleSubscriptionCTA: ed,
            onOpenPremiumSettings: () => {
                (y(),
                    H.default.track(L.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: el.page,
                        location_section: el.section,
                    }),
                    (0, U.e)());
            },
        }),
        ex = $ && er && !ed && ((F && es) || !F),
        eh = V && d === P.rV.PACK && null != x,
        ej = em.emojiDescription,
        eg = (0, _.i)({
            emojiId: s.emojiId,
            currentGuildId: ec,
            popoutData: em,
            emojiSourceGuildId: g?.id,
            nonce: G,
            demoMode: k,
        }),
        ep = em.type === q.u.JOIN_GUILD,
        eN = em.type === q.u.GET_PREMIUM,
        [ef, eb] = l.useState(!1),
        eI = en || ($ && !W) || null != g;
    return (0, i.jsxs)(Y.Uq, {
        className: a()(et.Bm, et.Os, { [et.x1]: eh }),
        children: [
            (function () {
                async function e() {
                    if (k || null == g || $) return;
                    y();
                    let e = g.id;
                    try {
                        (await p.A.joinGuild(e), p.A.transitionToGuildSync(e));
                    } catch {}
                }
                let t = !$ && en;
                return (0, i.jsxs)("div", {
                    className: et.gH,
                    children: [
                        (0, i.jsxs)(v.A, {
                            children: [
                                (0, i.jsx)(N.A, {
                                    className: et.P$,
                                    emojiId: s.emojiId,
                                    emojiName: s.name,
                                    animated: s.animated,
                                    size: "jumbo",
                                }),
                                (0, i.jsxs)(v.A, {
                                    direction: v.A.Direction.VERTICAL,
                                    justify: v.A.Justify.CENTER,
                                    className: et.bM,
                                    children: [
                                        (0, i.jsx)(c.E, {
                                            variant: "text-md/semibold",
                                            className: et.cC,
                                            children: s.name,
                                        }),
                                        !eh &&
                                            null != ej &&
                                            (0, i.jsx)(c.E, {
                                                variant: "text-sm/normal",
                                                className: et.t,
                                                children: ej,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        eN
                            ? (0, i.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: et.lI,
                                  children: (0, i.jsx)(z.A, {
                                      subscriptionTier: ee.pe.TIER_2,
                                      size: "sm",
                                      fullWidth: !0,
                                      buttonTextOverride: em.text,
                                      onSubscribeModalClose: (t) => (t ? e() : y()),
                                      postSuccessGuild: t ? (g ?? void 0) : void 0,
                                      premiumModalAnalyticsLocation: el,
                                  }),
                              })
                            : ep
                              ? (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: et.lI,
                                    children: (0, i.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: em.text,
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                })
                              : void 0,
                        ex &&
                            (0, i.jsx)(w.A, {
                                text: eo ? Z.intl.string(Z.t.yma8Vp) : Z.intl.string(Z.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: function () {
                                    (y(),
                                        A?.id != null &&
                                            p.A.transitionToGuildSync(
                                                A.id,
                                                {
                                                    sourceLocationStack: [
                                                        f.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                Q.VV.ROLE_SUBSCRIPTIONS,
                                            ));
                                },
                            }),
                    ],
                });
            })(),
            eh &&
                (0, i.jsx)(S.A, {
                    pack: x,
                    isNitroTier2: X.Ay.isPremium(R, ee.PremiumTypes.TIER_2),
                    surface: "message_emoji_popout",
                    onClose: y,
                }),
            eI &&
                ((n = null != g && !$ && en && (g?.emojis?.length ?? 0) > 1),
                (0, i.jsxs)("div", {
                    className: et.tl,
                    children: [
                        (0, i.jsx)(c.E, {
                            className: et.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: $ ? Z.intl.string(Z.t.ohTzZH) : Z.intl.string(Z.t["eLfh+a"]),
                        }),
                        (0, i.jsx)(ei, {
                            expressionSourceGuild: g ?? P.GO.createFromGuildRecord(A),
                            hasJoinedExpressionSourceGuild: $,
                            isDisplayingJoinGuildButtonInPopout: ep,
                            closePopout: y,
                        }),
                        n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ((t = Z.intl.string(Z.t.pnsAS2)),
                                    (0, i.jsx)(m.D, {
                                        onClick: function () {
                                            n &&
                                                (O?.(),
                                                ef ||
                                                    k ||
                                                    H.default.track(L.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eg),
                                                eb(!ef));
                                        },
                                        className: et.wK,
                                        children: (0, i.jsxs)(v.A, {
                                            children: [
                                                (0, i.jsx)(c.E, {
                                                    className: et.__invalid_showMoreEmojisLabel,
                                                    "aria-label": t,
                                                    variant: "text-xs/normal",
                                                    color: "none",
                                                    children: t,
                                                }),
                                                (0, i.jsx)(j.a, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: a()(et.ZB, { [et.cP]: !ef }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != s.emojiId &&
                                        ef &&
                                        (0, i.jsx)(ea, {
                                            emojiId: s.emojiId,
                                            expressionSourceGuild: g,
                                            popoutData: em,
                                            onClose: y,
                                            hasJoinedEmojiSourceGuild: $,
                                            isDisplayingButtonInTopSection: ep || eN,
                                        }),
                                ],
                            }),
                    ],
                })),
        ],
    });
}
function ea(e) {
    let {
            emojiId: t,
            expressionSourceGuild: n,
            hasJoinedEmojiSourceGuild: l,
            popoutData: s,
            onClose: a,
            isDisplayingButtonInTopSection: r,
        } = e,
        o = (n?.emojis ?? [])
            .slice(0, 13)
            .filter((e) => e.id !== t)
            .slice(0, 12),
        { type: d, description: u } = s;
    return (0, i.jsxs)("div", {
        className: et.LX,
        children: [
            l
                ? null
                : o.map((e) =>
                      (0, i.jsx)(
                          g.m,
                          {
                              text: e.require_colons ? `:${e.name}:` : e.name,
                              ...Y.Uk,
                              children: (0, i.jsx)(N.A, { className: et.Th, emojiId: e.id, animated: e.animated }),
                          },
                          e.id,
                      ),
                  ),
            !r &&
                (d === q.u.GET_PREMIUM
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: et.lI,
                                  children: (0, i.jsx)(z.A, {
                                      subscriptionTier: ee.pe.TIER_2,
                                      buttonTextOverride: s.text,
                                      fullWidth: !0,
                                      onClick: () => a(),
                                  }),
                              }),
                              null != u &&
                                  (0, i.jsx)("div", {
                                      className: et.vd,
                                      children: (0, i.jsx)(c.E, {
                                          variant: "text-sm/medium",
                                          "aria-label": u,
                                          children: u,
                                      }),
                                  }),
                          ],
                      })
                    : d === q.u.JOIN_GUILD
                      ? (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: et.lI,
                            children: (0, i.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                text: s.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, W.Z2)(n.id, {});
                                },
                            }),
                        })
                      : null),
        ],
    });
}
