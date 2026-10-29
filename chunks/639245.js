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
    h = n(821609),
    j = n(847374),
    g = n(866665),
    p = n(66834),
    N = n(788026),
    I = n(793574),
    b = n(688810),
    f = n(139286),
    v = n(235986),
    A = n(573435),
    E = n(836039),
    C = n(490035),
    S = n(433716),
    O = n(702841),
    y = n(71393),
    T = n(236285),
    k = n(770335),
    P = n(624793),
    _ = n(652215),
    R = n(731383),
    L = n(548118),
    G = n(714991),
    M = n(492494),
    w = n(384684),
    D = n(985242),
    U = n(87719),
    z = n(465794),
    J = n(976860),
    V = n(309010),
    B = n(967198),
    K = n(287809),
    F = n(174459),
    H = n(486020),
    W = n(449054),
    X = n(24482),
    q = n(450707),
    Z = n(773669),
    Y = n(105292),
    $ = n(188645),
    Q = n(746080),
    ee = n(202541),
    et = n(844749);
function en(e) {
    var t, n;
    let s,
        l,
        { node: a } = e;
    (0, R.i)({ emojiId: a.emojiId, currentGuildId: B.A.getGuildId() });
    let r =
            ((n = t = a.name),
            (s = (0, o.bG)([Z.default], () => Z.default.locale.startsWith("en-"))),
            (l = ":pizza:" === n && s ? Y.intl.formatToPlainString(Y.t["1knDPI"], { emojiName: n }) : n),
            ":pizza:" === t ? l : t),
        d = r !== a.name;
    return (0, i.jsx)(c.l, {
        children: (0, i.jsx)($.Uq, {
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
                            (0, i.jsx)(u.E, {
                                className: et.cC,
                                variant: "text-md/semibold",
                                children: d ? (0, i.jsx)("div", { className: et.Gl, children: r }) : r,
                            }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/normal",
                                className: et.t,
                                children: Y.intl.string(Y.t.sXdH8c),
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
        { id: o, icon: c, name: h } = n,
        j = H.Ay.getGuildIconURL({ id: o, icon: c, size: 32, canAnimate: !0 }),
        g = (s = s ?? !0) || n.isDiscoverable();
    function p() {
        n.isDiscoverable() ? (r(), (0, W.Z2)(o, {})) : s && (r(), (0, J.pX)(_.BVt.CHANNEL(o, V.Ay.getChannelId(o))));
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
                        : (0, i.jsx)(L.Ay, { size: L.Ay.Sizes.SMALL, className: et.oi, guild: n }),
            }),
            (0, i.jsxs)(v.A, {
                direction: v.A.Direction.VERTICAL,
                className: a()(et.__invalid_guildInformation, et.bM),
                children: [
                    (0, i.jsxs)(v.A, {
                        align: v.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(G.A, { guild: n, className: et.n2 }),
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
                            ? ((t = !l && !s),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(u.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          children: Y.intl.format(Y.t["LC+S+m"], { membersOnline: n.presenceCount }),
                                      }),
                                      (0, i.jsx)("div", { className: et.zk }),
                                      t
                                          ? (0, i.jsx)(m.D, {
                                                className: et.Ki,
                                                onClick: p,
                                                children: (0, i.jsx)(u.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-link",
                                                    children: Y.intl.string(Y.t.riu2R5),
                                                }),
                                            })
                                          : (0, i.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: Y.intl.string(Y.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, i.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: Y.intl.string(Y.t.H29mx4),
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
            isFetching: h,
        } = (function (e) {
            let { emojiId: t, refreshPositionKey: n, skipKnownGuildEmojiFetch: i = !1 } = e,
                { joinedEmojiSourceGuildRecord: l, emoji: a } = (0, O.cf)([T.Ay, y.A], () => {
                    var e, n;
                    let i;
                    return (
                        (e = T.Ay),
                        (n = y.A),
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
                h = null != l ? P.GO.createFromGuildRecord(l) : null,
                [j, g] = s.useState(h),
                [p, N] = s.useState(null),
                [I, b] = s.useState(null),
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
                                    N(e.application);
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
                    expressionSourceGuild: j,
                    expressionSourceApplication: p,
                    expressionSourcePack: I,
                    sourceType: m,
                    joinedEmojiSourceGuildRecord: l,
                    hasJoinedEmojiSourceGuild: r,
                    emoji: a,
                    isFetching: c,
                }
            );
        })({ emojiId: t.emojiId, refreshPositionKey: l });
    return h
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
            onToggleShowMoreEmojis: y,
            guildEmoji: T,
            demoMode: k = !1,
            nonce: L,
        } = e,
        G = (0, o.bG)([K.default], () => K.default.getCurrentUser()),
        J = (0, C.H)("message_emoji_details"),
        V = (0, o.bG)([B.A], () => B.A.getGuildId()),
        H = X.Ay.isPremium(G),
        W = null != V && (V === g?.id || V === A?.id),
        Z = null != A,
        en = g?.isDiscoverable() ?? !1;
    k && ((H = !0), (en = !0), (Z = !1), (W = !1));
    let es = {
            page: null != (0, o.bG)([B.A], () => B.A.getGuildId()) ? _.liQ.GUILD_CHANNEL : _.liQ.DM_CHANNEL,
            section: _.JJy.EMOJI_UPSELL_POPOUT,
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
                          isUnusableRoleSubscriptionEmoji: M.JN(T, V ?? void 0),
                          userIsRoleSubscriber: w.A.getUserSubscriptionRoles(T.guildId).size > 0,
                      },
            [T, V],
        ),
        ed = !!er && (0, E.tE)(T?.guildId),
        { analyticsLocations: ec } = (0, b.Ay)(I.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, f.A)(
        {
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: ec, emoji_guild_id: T?.guildId ?? null, emoji_id: T?.id ?? null },
        },
        { disableTrack: !el },
    );
    let eu = B.A.getGuildId(),
        em = (0, q.O)({
            sourceType: d,
            expressionSourceApplication: c,
            isPremium: H,
            hasJoinedEmojiSourceGuild: Z,
            isRoleSubscriptionEmoji: el,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: eo,
            emojiComesFromCurrentGuild: W,
            isDiscoverable: en,
            shouldHideRoleSubscriptionCTA: ed,
            onOpenPremiumSettings: () => {
                (O(),
                    F.default.track(_.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: es.page,
                        location_section: es.section,
                    }),
                    (0, U.e)());
            },
        }),
        ex = Z && er && !ed && ((H && el) || !H),
        eh = J && d === P.rV.PACK && null != x,
        ej = em.emojiDescription,
        eg = (0, R.i)({
            emojiId: l.emojiId,
            currentGuildId: eu,
            popoutData: em,
            emojiSourceGuildId: g?.id,
            nonce: L,
            demoMode: k,
        }),
        ep = em.type === q.u.JOIN_GUILD,
        eN = em.type === q.u.GET_PREMIUM,
        [eI, eb] = s.useState(!1),
        ef = en || (Z && !W) || null != g;
    return (0, i.jsxs)($.Uq, {
        className: a()(et.Bm, et.Os, { [et.x1]: eh }),
        children: [
            (function () {
                async function e() {
                    if (k || null == g || Z) return;
                    O();
                    let e = g.id;
                    try {
                        (await p.A.joinGuild(e), p.A.transitionToGuildSync(e));
                    } catch {}
                }
                let t = !Z && en;
                return (0, i.jsxs)("div", {
                    className: et.gH,
                    children: [
                        (0, i.jsxs)(v.A, {
                            children: [
                                (0, i.jsx)(N.A, {
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
                                            children: l.name,
                                        }),
                                        !eh &&
                                            null != ej &&
                                            (0, i.jsx)(u.E, {
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
                                      onSubscribeModalClose: (t) => (t ? e() : O()),
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
                            (0, i.jsx)(D.A, {
                                text: eo ? Y.intl.string(Y.t.yma8Vp) : Y.intl.string(Y.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: function () {
                                    (O(),
                                        A?.id != null &&
                                            p.A.transitionToGuildSync(
                                                A.id,
                                                {
                                                    sourceLocationStack: [
                                                        I.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                Q.VV.ROLE_SUBSCRIPTIONS,
                                            ));
                                },
                            }),
                    ],
                });
            })(),
            eh && (0, i.jsx)(S.A, { pack: x, isNitroTier2: X.Ay.isPremium(G, ee.PremiumTypes.TIER_2), onClose: O }),
            ef &&
                ((n = null != g && !Z && en && (g?.emojis?.length ?? 0) > 1),
                (0, i.jsxs)("div", {
                    className: et.tl,
                    children: [
                        (0, i.jsx)(u.E, {
                            className: et.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: Z ? Y.intl.string(Y.t.ohTzZH) : Y.intl.string(Y.t["eLfh+a"]),
                        }),
                        (0, i.jsx)(ei, {
                            expressionSourceGuild: g ?? P.GO.createFromGuildRecord(A),
                            hasJoinedExpressionSourceGuild: Z,
                            isDisplayingJoinGuildButtonInPopout: ep,
                            closePopout: O,
                        }),
                        n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ((t = Y.intl.string(Y.t.pnsAS2)),
                                    (0, i.jsx)(m.D, {
                                        onClick: function () {
                                            n &&
                                                (y?.(),
                                                eI ||
                                                    k ||
                                                    F.default.track(_.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eg),
                                                eb(!eI));
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
                                                (0, i.jsx)(j.a, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: a()(et.ZB, { [et.cP]: !eI }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != l.emojiId &&
                                        eI &&
                                        (0, i.jsx)(ea, {
                                            emojiId: l.emojiId,
                                            expressionSourceGuild: g,
                                            popoutData: em,
                                            onClose: O,
                                            hasJoinedEmojiSourceGuild: Z,
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
