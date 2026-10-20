n.d(t, { G7: () => ei, iP: () => es, sX: () => el, mG: () => ea, MV: () => en });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(562708),
    o = n(17928),
    d = n(3026),
    c = n(305866),
    u = n(834730),
    m = n(939249),
    x = n(297264),
    j = n(821609),
    h = n(847374),
    g = n(866665),
    p = n(66834),
    I = n(565645),
    N = n(793574),
    b = n(688810),
    f = n(139286),
    v = n(235986),
    A = n(573435),
    E = n(836039),
    C = n(490035),
    S = n(433716),
    O = n(702841),
    T = n(71393),
    y = n(236285),
    k = n(770335),
    P = n(624793),
    _ = n(652215),
    G = n(731383),
    R = n(548118),
    L = n(714991),
    D = n(492494),
    M = n(384684),
    w = n(985242),
    U = n(87719),
    z = n(465794),
    J = n(976860),
    B = n(309010),
    V = n(967198),
    K = n(287809),
    H = n(174459),
    F = n(486020),
    W = n(449054),
    X = n(158045),
    q = n(450707),
    Y = n(773669),
    Z = n(105292),
    $ = n(188645),
    Q = n(746080),
    ee = n(202541),
    et = n(844749);
function en(e) {
    var t, n;
    let s,
        l,
        { node: a } = e;
    (0, G.i)({ emojiId: a.emojiId, currentGuildId: V.A.getGuildId() });
    let r =
            ((n = t = a.name),
            (s = (0, o.bG)([Y.default], () => Y.default.locale.startsWith("en-"))),
            (l = ":pizza:" === n && s ? Z.intl.formatToPlainString(Z.t["1knDPI"], { emojiName: n }) : n),
            ":pizza:" === t ? l : t),
        d = r !== a.name;
    return (0, i.jsx)(c.l, {
        children: (0, i.jsx)($.Uq, {
            className: et.Os,
            children: (0, i.jsxs)(v.A, {
                className: et.gH,
                children: [
                    (0, i.jsx)(I.A, { emojiName: a.name, className: et.P$, src: a.src, animated: !1, size: "jumbo" }),
                    (0, i.jsxs)(v.A, {
                        direction: v.A.Direction.VERTICAL,
                        justify: v.A.Justify.CENTER,
                        className: et.bM,
                        children: [
                            (0, i.jsx)(u.E, {
                                className: et.cC,
                                variant: "text-md/semibold",
                                children: d ? (0, i.jsx)("div", { className: et.Gl, children: r }) : r,
                            }),
                            (0, i.jsx)(u.E, {
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
            hasJoinedExpressionSourceGuild: s,
            isDisplayingJoinGuildButtonInPopout: l,
            closePopout: r,
        } = e,
        { id: o, icon: c, name: j } = n,
        h = F.Ay.getGuildIconURL({ id: o, icon: c, size: 32, canAnimate: !0 }),
        g = (s = s ?? !0) || n.isDiscoverable();
    function p() {
        n.isDiscoverable() ? (r(), (0, W.Z2)(o, {})) : s && (r(), (0, J.pX)(_.BVt.CHANNEL(o, B.Ay.getChannelId(o))));
    }
    let I = n.isDiscoverable() && null != n.presenceCount;
    return (0, i.jsxs)(v.A, {
        align: v.A.Align.CENTER,
        children: [
            (0, i.jsx)(A.Ay, {
                mask: A.Ay.Masks.SQUIRCLE,
                width: 32,
                height: 32,
                className: et.__invalid_guildIconContainer,
                children:
                    null != h && g
                        ? (0, i.jsxs)(m.D, {
                              "aria-label": j,
                              onClick: p,
                              children: [(0, i.jsx)("img", { src: h, alt: "", className: et.$f }), " :"],
                          })
                        : (0, i.jsx)(R.Ay, { size: R.Ay.Sizes.SMALL, className: et.oi, guild: n }),
            }),
            (0, i.jsxs)(v.A, {
                direction: v.A.Direction.VERTICAL,
                className: a()(et.__invalid_guildInformation, et.bM),
                children: [
                    (0, i.jsxs)(v.A, {
                        align: v.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(L.A, { guild: n, className: et.n2 }),
                            g
                                ? (0, i.jsx)(m.D, {
                                      onClick: p,
                                      className: et.bM,
                                      children: (0, i.jsx)(x.D, {
                                          className: et.J5,
                                          variant: "heading-md/semibold",
                                          children: (0, i.jsx)(d.A, { children: j }),
                                      }),
                                  })
                                : (0, i.jsx)(x.D, {
                                      variant: "heading-md/semibold",
                                      children: (0, i.jsx)(d.A, { children: j }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)(v.A, {
                        align: v.A.Align.CENTER,
                        children: I
                            ? ((t = !l && !s),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(u.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          children: Z.intl.format(Z.t["LC+S+m"], { membersOnline: n.presenceCount }),
                                      }),
                                      (0, i.jsx)("div", { className: et.zk }),
                                      t
                                          ? (0, i.jsx)(m.D, {
                                                className: et.Ki,
                                                onClick: p,
                                                children: (0, i.jsx)(u.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-link",
                                                    children: Z.intl.string(Z.t.riu2R5),
                                                }),
                                            })
                                          : (0, i.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: Z.intl.string(Z.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, i.jsx)(u.E, {
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
function es(e) {
    let { node: t, closePopout: n, refreshPositionKey: l, nonce: a } = e,
        {
            expressionSourceGuild: r,
            expressionSourceApplication: o,
            expressionSourcePack: d,
            sourceType: u,
            joinedEmojiSourceGuildRecord: m,
            emoji: x,
            isFetching: j,
        } = (function (e) {
            let { emojiId: t, refreshPositionKey: n, skipKnownGuildEmojiFetch: i = !1 } = e,
                { joinedEmojiSourceGuildRecord: l, emoji: a } = (0, O.cf)([y.Ay, T.A], () => {
                    var e, n;
                    let i;
                    return (
                        (e = y.Ay),
                        (n = T.A),
                        (i = null != t ? e.getCustomEmojiById(t) : null),
                        i?.type === k.i.GUILD
                            ? { emoji: i, joinedEmojiSourceGuildRecord: n.getGuild(i?.guildId) }
                            : { emoji: null, joinedEmojiSourceGuildRecord: null }
                    );
                }),
                r = null != l,
                o = null != l && l.features.has(_.GuildFeatures.DISCOVERABLE),
                d = null != t && !(i && null != a) && (!r || o),
                [c, u] = s.useState(d),
                [m, x] = s.useState(null),
                j = null != l ? P.GO.createFromGuildRecord(l) : null,
                [h, g] = s.useState(j),
                [p, I] = s.useState(null),
                [N, b] = s.useState(null),
                f = s.useRef(n);
            return (
                s.useEffect(() => {
                    f.current = n;
                }),
                s.useEffect(() => {
                    async function e() {
                        let e = null != t ? await (0, P.g_)(t) : null;
                        if (null != e)
                            switch ((x(e.type), e.type)) {
                                case P.rV.APPLICATION:
                                    I(e.application);
                                    break;
                                case P.rV.GUILD:
                                    g(e.guild);
                                    break;
                                case P.rV.PACK:
                                    b(e.pack);
                            }
                        (u(!1), f.current?.());
                    }
                    (f.current?.(), d) ? e() : f.current?.();
                }, [t, d]),
                {
                    expressionSourceGuild: h,
                    expressionSourceApplication: p,
                    expressionSourcePack: N,
                    sourceType: m,
                    joinedEmojiSourceGuildRecord: l,
                    hasJoinedEmojiSourceGuild: r,
                    emoji: a,
                    isFetching: c,
                }
            );
        })({ emojiId: t.emojiId, refreshPositionKey: l });
    return j
        ? (0, i.jsx)($.Y0, {})
        : (0, i.jsx)(c.l, {
              "aria-label": t.name,
              children: (0, i.jsx)(el, {
                  node: t,
                  sourceType: u,
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
            expressionSourceApplication: c,
            expressionSourcePack: x,
            expressionSourceGuild: g,
            joinedEmojiSourceGuildRecord: A,
            closePopout: O,
            onToggleShowMoreEmojis: T,
            guildEmoji: y,
            demoMode: k = !1,
            nonce: R,
        } = e,
        L = (0, o.bG)([K.default], () => K.default.getCurrentUser()),
        J = (0, C.H)("message_emoji_details"),
        B = (0, o.bG)([V.A], () => V.A.getGuildId()),
        F = X.Ay.isPremium(L),
        W = null != B && (B === g?.id || B === A?.id),
        Y = null != A,
        en = g?.isDiscoverable() ?? !1;
    k && ((F = !0), (en = !0), (Y = !1), (W = !1));
    let es = {
            page: null != (0, o.bG)([V.A], () => V.A.getGuildId()) ? _.liQ.GUILD_CHANNEL : _.liQ.DM_CHANNEL,
            section: _.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: el,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: eo,
        } = s.useMemo(
            () =>
                null == y
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: D.kT(y),
                          isUnusableRoleSubscriptionEmoji: D.JN(y, B ?? void 0),
                          userIsRoleSubscriber: M.A.getUserSubscriptionRoles(y.guildId).size > 0,
                      },
            [y, B],
        ),
        ed = !!er && (0, E.tE)(y?.guildId),
        { analyticsLocations: ec } = (0, b.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, f.A)(
        {
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: ec, emoji_guild_id: y?.guildId ?? null, emoji_id: y?.id ?? null },
        },
        { disableTrack: !el },
    );
    let eu = V.A.getGuildId(),
        em = (0, q.O)({
            sourceType: d,
            expressionSourceApplication: c,
            isPremium: F,
            hasJoinedEmojiSourceGuild: Y,
            isRoleSubscriptionEmoji: el,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: eo,
            emojiComesFromCurrentGuild: W,
            isDiscoverable: en,
            shouldHideRoleSubscriptionCTA: ed,
            onOpenPremiumSettings: () => {
                (O(),
                    H.default.track(_.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: es.page,
                        location_section: es.section,
                    }),
                    (0, U.e)());
            },
        }),
        ex = Y && er && !ed && ((F && el) || !F),
        ej = J && d === P.rV.PACK && null != x,
        eh = em.emojiDescription,
        eg = (0, G.i)({
            emojiId: l.emojiId,
            currentGuildId: eu,
            popoutData: em,
            emojiSourceGuildId: g?.id,
            nonce: R,
            demoMode: k,
        }),
        ep = em.type === q.u.JOIN_GUILD,
        eI = em.type === q.u.GET_PREMIUM,
        [eN, eb] = s.useState(!1),
        ef = en || (Y && !W) || null != g;
    return (0, i.jsxs)($.Uq, {
        className: a()(et.Bm, et.Os, { [et.x1]: ej }),
        children: [
            (function () {
                async function e() {
                    if (k || null == g || Y) return;
                    O();
                    let e = g.id;
                    try {
                        (await p.A.joinGuild(e), p.A.transitionToGuildSync(e));
                    } catch {}
                }
                let t = !Y && en;
                return (0, i.jsxs)("div", {
                    className: et.gH,
                    children: [
                        (0, i.jsxs)(v.A, {
                            children: [
                                (0, i.jsx)(I.A, {
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
                                        (0, i.jsx)(u.E, {
                                            variant: "text-md/semibold",
                                            className: et.cC,
                                            children: ej ? `:${l.name}:` : l.name,
                                        }),
                                        !ej &&
                                            null != eh &&
                                            (0, i.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                className: et.t,
                                                children: eh,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        eI
                            ? (0, i.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: et.lI,
                                  children: (0, i.jsx)(z.A, {
                                      subscriptionTier: ee.pe.TIER_2,
                                      size: "sm",
                                      fullWidth: !0,
                                      buttonTextOverride: em.text,
                                      onSubscribeModalClose: (t) => (t ? e() : O()),
                                      postSuccessGuild: t ? (g ?? void 0) : void 0,
                                      premiumModalAnalyticsLocation: es,
                                  }),
                              })
                            : ep
                              ? (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: et.lI,
                                    children: (0, i.jsx)(j.$, {
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
                                    (O(),
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
            ej && (0, i.jsx)(S.A, { pack: x, isNitroTier2: X.Ay.isPremium(L, ee.PremiumTypes.TIER_2), onClose: O }),
            ef &&
                ((n = null != g && !Y && en && (g?.emojis?.length ?? 0) > 1),
                (0, i.jsxs)("div", {
                    className: et.tl,
                    children: [
                        (0, i.jsx)(u.E, {
                            className: et.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: Y ? Z.intl.string(Z.t.ohTzZH) : Z.intl.string(Z.t["eLfh+a"]),
                        }),
                        (0, i.jsx)(ei, {
                            expressionSourceGuild: g ?? P.GO.createFromGuildRecord(A),
                            hasJoinedExpressionSourceGuild: Y,
                            isDisplayingJoinGuildButtonInPopout: ep,
                            closePopout: O,
                        }),
                        n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ((t = Z.intl.string(Z.t.pnsAS2)),
                                    (0, i.jsx)(m.D, {
                                        onClick: function () {
                                            n &&
                                                (T?.(),
                                                eN ||
                                                    k ||
                                                    H.default.track(_.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eg),
                                                eb(!eN));
                                        },
                                        className: et.wK,
                                        children: (0, i.jsxs)(v.A, {
                                            children: [
                                                (0, i.jsx)(u.E, {
                                                    className: et.__invalid_showMoreEmojisLabel,
                                                    "aria-label": t,
                                                    variant: "text-xs/normal",
                                                    color: "none",
                                                    children: t,
                                                }),
                                                (0, i.jsx)(h.a, {
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
                                            onClose: O,
                                            hasJoinedEmojiSourceGuild: Y,
                                            isDisplayingButtonInTopSection: ep || eI,
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
        { type: d, description: c } = l;
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
                              ...$.Uk,
                              children: (0, i.jsx)(I.A, { className: et.Th, emojiId: e.id, animated: e.animated }),
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
                              null != c &&
                                  (0, i.jsx)("div", {
                                      className: et.vd,
                                      children: (0, i.jsx)(u.E, {
                                          variant: "text-sm/medium",
                                          "aria-label": c,
                                          children: c,
                                      }),
                                  }),
                          ],
                      })
                    : d === q.u.JOIN_GUILD
                      ? (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: et.lI,
                            children: (0, i.jsx)(j.$, {
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
