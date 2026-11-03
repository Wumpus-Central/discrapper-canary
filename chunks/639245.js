n.d(t, { G7: () => ei, iP: () => es, sX: () => el, mG: () => ea, MV: () => en });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
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
    b = n(788026),
    N = n(793574),
    f = n(688810),
    I = n(139286),
    v = n(235986),
    A = n(573435),
    E = n(836039),
    C = n(490035),
    y = n(11184),
    S = n(702841),
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
    let s,
        l,
        { node: a } = e;
    (0, _.i)({ emojiId: a.emojiId, currentGuildId: K.A.getGuildId() });
    let r =
            ((n = t = a.name),
            (s = (0, o.bG)([$.default], () => $.default.locale.startsWith("en-"))),
            (l = ":pizza:" === n && s ? Z.intl.formatToPlainString(Z.t["1knDPI"], { emojiName: n }) : n),
            ":pizza:" === t ? l : t),
        d = r !== a.name;
    return (0, i.jsx)(u.l, {
        children: (0, i.jsx)(Y.Uq, {
            className: et.Os,
            children: (0, i.jsxs)(v.A, {
                className: et.gH,
                children: [
                    (0, i.jsx)(b.A, { emojiName: a.name, className: et.P$, src: a.src, animated: !1, size: "jumbo" }),
                    (0, i.jsxs)(v.A, {
                        direction: v.A.Direction.VERTICAL,
                        justify: v.A.Justify.CENTER,
                        className: et.bM,
                        children: [
                            (0, i.jsx)(c.E, {
                                className: et.cC,
                                variant: "body-md/semibold",
                                children: d ? (0, i.jsx)("div", { className: et.Gl, children: r }) : r,
                            }),
                            (0, i.jsx)(c.E, {
                                variant: "body-sm/normal",
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
            hasJoinedExpressionSourceGuild: s,
            isDisplayingJoinGuildButtonInPopout: l,
            closePopout: r,
        } = e,
        { id: o, icon: u, name: h } = n,
        j = F.Ay.getGuildIconURL({ id: o, icon: u, size: 32, canAnimate: !0 }),
        g = (s = s ?? !0) || n.isDiscoverable();
    function p() {
        n.isDiscoverable() ? (r(), (0, W.Z2)(o, {})) : s && (r(), (0, V.pX)(L.BVt.CHANNEL(o, J.Ay.getChannelId(o))));
    }
    let b = n.isDiscoverable() && null != n.presenceCount;
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
                                          variant: "heading-sm/semibold",
                                          children: (0, i.jsx)(d.A, { children: h }),
                                      }),
                                  })
                                : (0, i.jsx)(x.D, {
                                      variant: "heading-sm/semibold",
                                      children: (0, i.jsx)(d.A, { children: h }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)(v.A, {
                        align: v.A.Align.CENTER,
                        children: b
                            ? ((t = !l && !s),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.E, {
                                          variant: "body-xs/normal",
                                          color: "text-default",
                                          children: Z.intl.format(Z.t["LC+S+m"], { membersOnline: n.presenceCount }),
                                      }),
                                      (0, i.jsx)("div", { className: et.zk }),
                                      t
                                          ? (0, i.jsx)(m.D, {
                                                className: et.Ki,
                                                onClick: p,
                                                children: (0, i.jsx)(c.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-link",
                                                    children: Z.intl.string(Z.t.riu2R5),
                                                }),
                                            })
                                          : (0, i.jsx)(c.E, {
                                                variant: "body-xs/normal",
                                                color: "text-default",
                                                children: Z.intl.string(Z.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, i.jsx)(c.E, {
                                  variant: "body-xs/normal",
                                  color: "text-default",
                                  children: Z.intl.string(Z.t.H29mx4),
                              }),
                    }),
                ],
            }),
        ],
    });
};
function es(e) {
    let { node: t, closePopout: n, refreshPositionKey: l, nonce: a } = e,
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
                { joinedEmojiSourceGuildRecord: l, emoji: a } = (0, S.cf)([T.Ay, O.A], () => {
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
                r = null != l,
                o = null != l && l.features.has(L.GuildFeatures.DISCOVERABLE),
                d = null != t && !(i && null != a) && (!r || o),
                [u, c] = s.useState(d),
                [m, x] = s.useState(null),
                h = null != l ? P.GO.createFromGuildRecord(l) : null,
                [j, g] = s.useState(h),
                [p, b] = s.useState(null),
                [N, f] = s.useState(null),
                I = s.useRef(n);
            return (
                s.useEffect(() => {
                    I.current = n;
                }),
                s.useEffect(() => {
                    async function e() {
                        let e = null != t ? await (0, P.g_)(t) : null;
                        if (null != e)
                            switch ((x(e.type), e.type)) {
                                case P.rV.APPLICATION:
                                    b(e.application);
                                    break;
                                case P.rV.GUILD:
                                    g(e.guild);
                                    break;
                                case P.rV.PACK:
                                    f(e.pack);
                            }
                        (c(!1), I.current?.());
                    }
                    (I.current?.(), d) ? e() : I.current?.();
                }, [t, d]),
                {
                    expressionSourceGuild: j,
                    expressionSourceApplication: p,
                    expressionSourcePack: N,
                    sourceType: m,
                    joinedEmojiSourceGuildRecord: l,
                    hasJoinedEmojiSourceGuild: r,
                    emoji: a,
                    isFetching: u,
                }
            );
        })({ emojiId: t.emojiId, refreshPositionKey: l });
    return h
        ? (0, i.jsx)(Y.Y0, {})
        : (0, i.jsx)(u.l, {
              "aria-label": t.name,
              children: (0, i.jsx)(el, {
                  node: t,
                  sourceType: c,
                  expressionSourceApplication: o,
                  expressionSourcePack: d,
                  guildEmoji: x ?? void 0,
                  expressionSourceGuild: r,
                  joinedEmojiSourceGuildRecord: m,
                  closePopout: n,
                  onToggleShowMoreEmojis: l,
                  demoMode: !1,
                  nonce: a,
              }),
          });
}
function el(e) {
    let t,
        n,
        {
            node: l,
            sourceType: d,
            expressionSourceApplication: u,
            expressionSourcePack: x,
            expressionSourceGuild: g,
            joinedEmojiSourceGuildRecord: A,
            closePopout: S,
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
    let es = {
            page: null != (0, o.bG)([K.A], () => K.A.getGuildId()) ? L.liQ.GUILD_CHANNEL : L.liQ.DM_CHANNEL,
            section: L.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: el,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: eo,
        } = s.useMemo(
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
        { analyticsLocations: eu } = (0, f.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, I.A)(
        {
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: eu, emoji_guild_id: T?.guildId ?? null, emoji_id: T?.id ?? null },
        },
        { disableTrack: !el },
    );
    let ec = K.A.getGuildId(),
        em = (0, q.O)({
            sourceType: d,
            expressionSourceApplication: u,
            isPremium: F,
            hasJoinedEmojiSourceGuild: $,
            isRoleSubscriptionEmoji: el,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: eo,
            emojiComesFromCurrentGuild: W,
            isDiscoverable: en,
            shouldHideRoleSubscriptionCTA: ed,
            onOpenPremiumSettings: () => {
                (S(),
                    H.default.track(L.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: es.page,
                        location_section: es.section,
                    }),
                    (0, U.e)());
            },
        }),
        ex = $ && er && !ed && ((F && el) || !F),
        eh = V && d === P.rV.PACK && null != x,
        ej = em.emojiDescription,
        eg = (0, _.i)({
            emojiId: l.emojiId,
            currentGuildId: ec,
            popoutData: em,
            emojiSourceGuildId: g?.id,
            nonce: G,
            demoMode: k,
        }),
        ep = em.type === q.u.JOIN_GUILD,
        eb = em.type === q.u.GET_PREMIUM,
        [eN, ef] = s.useState(!1),
        eI = en || ($ && !W) || null != g;
    return (0, i.jsxs)(Y.Uq, {
        className: a()(et.Bm, et.Os, { [et.x1]: eh }),
        children: [
            (function () {
                async function e() {
                    if (k || null == g || $) return;
                    S();
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
                                (0, i.jsx)(b.A, {
                                    className: et.P$,
                                    emojiId: l.emojiId,
                                    emojiName: l.name,
                                    animated: l.animated,
                                    size: "jumbo",
                                }),
                                (0, i.jsxs)(v.A, {
                                    direction: v.A.Direction.VERTICAL,
                                    justify: v.A.Justify.CENTER,
                                    className: et.bM,
                                    children: [
                                        (0, i.jsx)(c.E, {
                                            variant: "body-md/semibold",
                                            className: et.cC,
                                            children: l.name,
                                        }),
                                        !eh &&
                                            null != ej &&
                                            (0, i.jsx)(c.E, {
                                                variant: "body-sm/normal",
                                                className: et.t,
                                                children: ej,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        eb
                            ? (0, i.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: et.lI,
                                  children: (0, i.jsx)(z.A, {
                                      subscriptionTier: ee.pe.TIER_2,
                                      size: "sm",
                                      fullWidth: !0,
                                      buttonTextOverride: em.text,
                                      onSubscribeModalClose: (t) => (t ? e() : S()),
                                      postSuccessGuild: t ? (g ?? void 0) : void 0,
                                      premiumModalAnalyticsLocation: es,
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
                                    (S(),
                                        A?.id != null &&
                                            p.A.transitionToGuildSync(
                                                A.id,
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
            eh &&
                (0, i.jsx)(y.A, {
                    pack: x,
                    isNitroTier2: X.Ay.isPremium(R, ee.PremiumTypes.TIER_2),
                    surface: "message_emoji_popout",
                    onClose: S,
                }),
            eI &&
                ((n = null != g && !$ && en && (g?.emojis?.length ?? 0) > 1),
                (0, i.jsxs)("div", {
                    className: et.tl,
                    children: [
                        (0, i.jsx)(c.E, {
                            className: et.YW,
                            variant: "body-sm/medium",
                            color: "text-subtle",
                            children: $ ? Z.intl.string(Z.t.ohTzZH) : Z.intl.string(Z.t["eLfh+a"]),
                        }),
                        (0, i.jsx)(ei, {
                            expressionSourceGuild: g ?? P.GO.createFromGuildRecord(A),
                            hasJoinedExpressionSourceGuild: $,
                            isDisplayingJoinGuildButtonInPopout: ep,
                            closePopout: S,
                        }),
                        n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ((t = Z.intl.string(Z.t.pnsAS2)),
                                    (0, i.jsx)(m.D, {
                                        onClick: function () {
                                            n &&
                                                (O?.(),
                                                eN ||
                                                    k ||
                                                    H.default.track(L.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eg),
                                                ef(!eN));
                                        },
                                        className: et.wK,
                                        children: (0, i.jsxs)(v.A, {
                                            children: [
                                                (0, i.jsx)(c.E, {
                                                    className: et.__invalid_showMoreEmojisLabel,
                                                    "aria-label": t,
                                                    variant: "body-xs/normal",
                                                    color: "none",
                                                    children: t,
                                                }),
                                                (0, i.jsx)(j.a, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: a()(et.ZB, { [et.cP]: !eN }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != l.emojiId &&
                                        eN &&
                                        (0, i.jsx)(ea, {
                                            emojiId: l.emojiId,
                                            expressionSourceGuild: g,
                                            popoutData: em,
                                            onClose: S,
                                            hasJoinedEmojiSourceGuild: $,
                                            isDisplayingButtonInTopSection: ep || eb,
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
            hasJoinedEmojiSourceGuild: s,
            popoutData: l,
            onClose: a,
            isDisplayingButtonInTopSection: r,
        } = e,
        o = (n?.emojis ?? [])
            .slice(0, 13)
            .filter((e) => e.id !== t)
            .slice(0, 12),
        { type: d, description: u } = l;
    return (0, i.jsxs)("div", {
        className: et.LX,
        children: [
            s
                ? null
                : o.map((e) =>
                      (0, i.jsx)(
                          g.m,
                          {
                              text: e.require_colons ? `:${e.name}:` : e.name,
                              ...Y.Uk,
                              children: (0, i.jsx)(b.A, { className: et.Th, emojiId: e.id, animated: e.animated }),
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
                                      buttonTextOverride: l.text,
                                      fullWidth: !0,
                                      onClick: () => a(),
                                  }),
                              }),
                              null != u &&
                                  (0, i.jsx)("div", {
                                      className: et.vd,
                                      children: (0, i.jsx)(c.E, {
                                          variant: "body-sm/medium",
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
                                text: l.text,
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
