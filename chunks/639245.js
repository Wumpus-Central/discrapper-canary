"use strict";
n.d(t, { G7: () => en, iP: () => el, sX: () => ei, mG: () => es, MV: () => et });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(562708),
    o = n(17928),
    u = n(305866),
    c = n(3026),
    d = n(862482),
    h = n(834730),
    m = n(939249),
    f = n(297264),
    p = n(821609),
    g = n(847374),
    x = n(866665),
    A = n(66834),
    C = n(565645),
    E = n(793574),
    I = n(688810),
    y = n(139286),
    v = n(235986),
    S = n(573435),
    N = n(836039),
    _ = n(702841),
    T = n(71393),
    j = n(236285),
    b = n(770335),
    R = n(624793),
    O = n(652215),
    M = n(731383),
    L = n(548118),
    w = n(714991),
    k = n(492494),
    P = n(384684),
    D = n(985242),
    U = n(87719),
    G = n(725807),
    V = n(976860),
    F = n(309010),
    H = n(967198),
    B = n(287809),
    W = n(174459),
    K = n(486020),
    z = n(449054),
    Z = n(158045),
    Y = n(450707),
    q = n(773669),
    J = n(375708),
    $ = n(966245),
    X = n(746080),
    Q = n(202541),
    ee = n(844749);
function et(e) {
    var t, n;
    let i,
        s,
        { node: r } = e;
    (0, M.i)({ emojiId: r.emojiId, currentGuildId: H.A.getGuildId() });
    let a =
            ((n = t = r.name),
            (i = (0, o.bG)([q.default], () => q.default.locale.startsWith("en-"))),
            (s = ":pizza:" === n && i ? J.intl.formatToPlainString(J.t["1knDPI"], { emojiName: n }) : n),
            ":pizza:" === t ? s : t),
        d = a !== r.name;
    return (0, l.jsx)(u.l, {
        children: (0, l.jsx)($.Uq, {
            children: (0, l.jsxs)(v.A, {
                className: ee.gH,
                children: [
                    (0, l.jsx)(C.A, { emojiName: r.name, className: ee.P$, src: r.src, animated: !1, size: "jumbo" }),
                    (0, l.jsxs)(v.A, {
                        direction: v.A.Direction.VERTICAL,
                        justify: v.A.Justify.CENTER,
                        className: ee.bM,
                        children: [
                            (0, l.jsx)(h.E, {
                                className: ee.__invalid_emojiName,
                                variant: "text-md/semibold",
                                children: d
                                    ? (0, l.jsx)("div", { className: ee.Gl, children: a })
                                    : (0, l.jsx)(c.A, { children: a }),
                            }),
                            (0, l.jsx)(h.E, { variant: "text-sm/normal", children: J.intl.string(J.t.sXdH8c) }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
let en = (e) => {
    let t,
        {
            expressionSourceGuild: n,
            hasJoinedExpressionSourceGuild: i,
            isDisplayingJoinGuildButtonInPopout: s,
            closePopout: a,
        } = e,
        { id: o, icon: u, name: d } = n,
        p = K.Ay.getGuildIconURL({ id: o, icon: u, size: 32, canAnimate: !0 }),
        g = (i = i ?? !0) || n.isDiscoverable();
    function x() {
        n.isDiscoverable() ? (a(), (0, z.Z2)(o, {})) : i && (a(), (0, V.pX)(O.BVt.CHANNEL(o, F.Ay.getChannelId(o))));
    }
    let A = n.isDiscoverable() && null != n.presenceCount;
    return (0, l.jsxs)(v.A, {
        align: v.A.Align.CENTER,
        children: [
            (0, l.jsx)(S.Ay, {
                mask: S.Ay.Masks.SQUIRCLE,
                width: 32,
                height: 32,
                className: ee.__invalid_guildIconContainer,
                children:
                    null != p && g
                        ? (0, l.jsxs)(m.D, {
                              "aria-label": d,
                              onClick: x,
                              children: [(0, l.jsx)("img", { src: p, alt: "", className: ee.$f }), " :"],
                          })
                        : (0, l.jsx)(L.Ay, { size: L.Ay.Sizes.SMALL, className: ee.oi, guild: n }),
            }),
            (0, l.jsxs)(v.A, {
                direction: v.A.Direction.VERTICAL,
                className: r()(ee.__invalid_guildInformation, ee.bM),
                children: [
                    (0, l.jsxs)(v.A, {
                        align: v.A.Align.CENTER,
                        children: [
                            (0, l.jsx)(w.A, { guild: n, className: ee.n2 }),
                            g
                                ? (0, l.jsx)(m.D, {
                                      onClick: x,
                                      className: ee.bM,
                                      children: (0, l.jsx)(f.D, {
                                          className: ee.J5,
                                          variant: "heading-md/semibold",
                                          children: (0, l.jsx)(c.A, { children: d }),
                                      }),
                                  })
                                : (0, l.jsx)(f.D, {
                                      variant: "heading-md/semibold",
                                      children: (0, l.jsx)(c.A, { children: d }),
                                  }),
                        ],
                    }),
                    (0, l.jsx)(v.A, {
                        align: v.A.Align.CENTER,
                        children: A
                            ? ((t = !s && !i),
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(h.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          children: J.intl.format(J.t["LC+S+m"], { membersOnline: n.presenceCount }),
                                      }),
                                      (0, l.jsx)("div", { className: ee.zk }),
                                      t
                                          ? (0, l.jsx)(m.D, {
                                                className: ee.Ki,
                                                onClick: x,
                                                children: (0, l.jsx)(h.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-link",
                                                    children: J.intl.string(J.t.riu2R5),
                                                }),
                                            })
                                          : (0, l.jsx)(h.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: J.intl.string(J.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, l.jsx)(h.E, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: J.intl.string(J.t.H29mx4),
                              }),
                    }),
                ],
            }),
        ],
    });
};
function el(e) {
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
                { joinedEmojiSourceGuildRecord: l, emoji: s } = (0, _.cf)([j.Ay, T.A], () => {
                    var e, n;
                    let l;
                    return (
                        (e = j.Ay),
                        (n = T.A),
                        (l = null != t ? e.getCustomEmojiById(t) : null),
                        l?.type === b.i.GUILD
                            ? { emoji: l, joinedEmojiSourceGuildRecord: n.getGuild(l?.guildId) }
                            : { emoji: null, joinedEmojiSourceGuildRecord: null }
                    );
                }),
                r = null != l,
                a = null != l && l.features.has(O.GuildFeatures.DISCOVERABLE),
                o = (!r || a) && null != t,
                [u, c] = i.useState(o),
                [d, h] = i.useState(null),
                m = null != l ? R.GO.createFromGuildRecord(l) : null,
                [f, p] = i.useState(m),
                [g, x] = i.useState(null),
                A = i.useRef(n);
            return (
                i.useEffect(() => {
                    A.current = n;
                }),
                i.useEffect(() => {
                    async function e() {
                        let e = null != t ? await (0, R.g_)(t) : null;
                        if (null != e)
                            switch ((h(e.type), e.type)) {
                                case R.rV.APPLICATION:
                                    x(e.application);
                                    break;
                                case R.rV.GUILD:
                                    p(e.guild);
                            }
                        c(!1), A.current?.();
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
        ? (0, l.jsx)($.Y0, {})
        : (0, l.jsx)(u.l, {
              "aria-label": t.name,
              children: (0, l.jsx)(ei, {
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
function ei(e) {
    let t,
        n,
        {
            node: s,
            sourceType: u,
            expressionSourceApplication: f,
            expressionSourceGuild: x,
            joinedEmojiSourceGuildRecord: S,
            closePopout: _,
            onToggleShowMoreEmojis: T,
            guildEmoji: j,
            demoMode: b = !1,
            nonce: L,
        } = e,
        w = (0, o.bG)([B.default], () => B.default.getCurrentUser()),
        V = (0, o.bG)([H.A], () => H.A.getGuildId()),
        F = Z.Ay.isPremium(w),
        K = null != V && (V === x?.id || V === S?.id),
        z = null != S,
        q = x?.isDiscoverable() ?? !1;
    b && ((F = !0), (q = !0), (z = !1), (K = !1));
    let et = {
            page: null != (0, o.bG)([H.A], () => H.A.getGuildId()) ? O.liQ.GUILD_CHANNEL : O.liQ.DM_CHANNEL,
            section: O.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: el,
            isUnusableRoleSubscriptionEmoji: ei,
            userIsRoleSubscriber: er,
        } = i.useMemo(
            () =>
                null == j
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: k.kT(j),
                          isUnusableRoleSubscriptionEmoji: k.JN(j, V ?? void 0),
                          userIsRoleSubscriber: P.A.getUserSubscriptionRoles(j.guildId).size > 0,
                      },
            [j, V],
        ),
        ea = !!ei && (0, N.tE)(j?.guildId),
        { analyticsLocations: eo } = (0, I.Ay)(E.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, y.A)(
        {
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: eo, emoji_guild_id: j?.guildId ?? null, emoji_id: j?.id ?? null },
        },
        { disableTrack: !el },
    );
    let eu = H.A.getGuildId(),
        ec = (0, Y.O)({
            sourceType: u,
            expressionSourceApplication: f,
            isPremium: F,
            hasJoinedEmojiSourceGuild: z,
            isRoleSubscriptionEmoji: el,
            isUnusableRoleSubscriptionEmoji: ei,
            userIsRoleSubscriber: er,
            emojiComesFromCurrentGuild: K,
            isDiscoverable: q,
            shouldHideRoleSubscriptionCTA: ea,
            onOpenPremiumSettings: () => {
                _(),
                    W.default.track(O.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: et.page,
                        location_section: et.section,
                    }),
                    (0, U.e)();
            },
        }),
        ed = z && ei && !ea && ((F && el) || !F),
        eh = ec.emojiDescription,
        em = (0, M.i)({
            emojiId: s.emojiId,
            currentGuildId: eu,
            popoutData: ec,
            emojiSourceGuildId: x?.id,
            nonce: L,
            demoMode: b,
        }),
        ef = ec.type === Y.u.JOIN_GUILD,
        ep = ec.type === Y.u.GET_PREMIUM,
        [eg, ex] = i.useState(!1),
        eA = q || (z && !K) || null != x;
    return (0, l.jsxs)($.Uq, {
        className: ee.Bm,
        children: [
            (function () {
                async function e() {
                    if (b || null == x || z) return;
                    _();
                    let e = x.id;
                    try {
                        await A.A.joinGuild(e), A.A.transitionToGuildSync(e);
                    } catch {}
                }
                let t = !z && q;
                return (0, l.jsxs)("div", {
                    className: ee.gH,
                    children: [
                        (0, l.jsxs)(v.A, {
                            children: [
                                (0, l.jsx)(C.A, {
                                    className: ee.P$,
                                    emojiId: s.emojiId,
                                    emojiName: s.name,
                                    animated: s.animated,
                                    size: "jumbo",
                                }),
                                (0, l.jsxs)(v.A, {
                                    direction: v.A.Direction.VERTICAL,
                                    justify: v.A.Justify.CENTER,
                                    className: ee.bM,
                                    children: [
                                        (0, l.jsx)(h.E, {
                                            variant: "text-md/semibold",
                                            children: (0, l.jsx)(c.A, { children: s.name }),
                                        }),
                                        null != eh && (0, l.jsx)(h.E, { variant: "text-sm/normal", children: eh }),
                                    ],
                                }),
                            ],
                        }),
                        ep
                            ? (0, l.jsx)(G.A, {
                                  className: ee.lI,
                                  subscriptionTier: Q.pe.TIER_2,
                                  size: d.$n.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: ec.text },
                                  onSubscribeModalClose: (t) => (t ? e() : _()),
                                  postSuccessGuild: t ? (x ?? void 0) : void 0,
                                  premiumModalAnalyticsLocation: et,
                              })
                            : ef
                              ? (0, l.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: ee.lI,
                                    children: (0, l.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ec.text,
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                })
                              : void 0,
                        ed &&
                            (0, l.jsx)(D.A, {
                                text: er ? J.intl.string(J.t.yma8Vp) : J.intl.string(J.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: function () {
                                    _(),
                                        S?.id != null &&
                                            A.A.transitionToGuildSync(
                                                S.id,
                                                {
                                                    sourceLocationStack: [
                                                        E.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                X.VV.ROLE_SUBSCRIPTIONS,
                                            );
                                },
                            }),
                    ],
                });
            })(),
            eA &&
                ((n = null != x && !z && q && (x?.emojis?.length ?? 0) > 1),
                (0, l.jsxs)("div", {
                    className: ee.tl,
                    children: [
                        (0, l.jsx)(h.E, {
                            className: ee.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: z ? J.intl.string(J.t.ohTzZH) : J.intl.string(J.t["eLfh+a"]),
                        }),
                        (0, l.jsx)(en, {
                            expressionSourceGuild: x ?? R.GO.createFromGuildRecord(S),
                            hasJoinedExpressionSourceGuild: z,
                            isDisplayingJoinGuildButtonInPopout: ef,
                            closePopout: _,
                        }),
                        n &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    ((t = J.intl.string(J.t.pnsAS2)),
                                    (0, l.jsx)(m.D, {
                                        onClick: function () {
                                            n &&
                                                (T?.(),
                                                eg ||
                                                    b ||
                                                    W.default.track(O.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, em),
                                                ex(!eg));
                                        },
                                        className: ee.wK,
                                        children: (0, l.jsxs)(v.A, {
                                            children: [
                                                (0, l.jsx)(h.E, {
                                                    className: ee.__invalid_showMoreEmojisLabel,
                                                    "aria-label": t,
                                                    variant: "text-xs/normal",
                                                    color: "none",
                                                    children: t,
                                                }),
                                                (0, l.jsx)(g.a, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: r()(ee.ZB, { [ee.cP]: !eg }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != s.emojiId &&
                                        eg &&
                                        (0, l.jsx)(es, {
                                            emojiId: s.emojiId,
                                            expressionSourceGuild: x,
                                            popoutData: ec,
                                            onClose: _,
                                            hasJoinedEmojiSourceGuild: z,
                                            isDisplayingButtonInTopSection: ef || ep,
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
        className: ee.LX,
        children: [
            i
                ? null
                : o.map((e) =>
                      (0, l.jsx)(
                          x.m,
                          {
                              text: e.require_colons ? `:${e.name}:` : e.name,
                              ...$.Uk,
                              children: (0, l.jsx)(C.A, { className: ee.Th, emojiId: e.id, animated: e.animated }),
                          },
                          e.id,
                      ),
                  ),
            !a &&
                (u === Y.u.GET_PREMIUM
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(G.A, {
                                  subscriptionTier: Q.pe.TIER_2,
                                  textOptions: { textOverride: s.text },
                                  className: ee.lI,
                                  fullWidth: !0,
                                  onClick: () => r(),
                              }),
                              null != c &&
                                  (0, l.jsx)("div", {
                                      className: ee.vd,
                                      children: (0, l.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          "aria-label": c,
                                          children: c,
                                      }),
                                  }),
                          ],
                      })
                    : u === Y.u.JOIN_GUILD
                      ? (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: ee.lI,
                            children: (0, l.jsx)(p.$, {
                                variant: "primary",
                                size: "sm",
                                text: s.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, z.Z2)(n.id, {});
                                },
                            }),
                        })
                      : null),
        ],
    });
}
