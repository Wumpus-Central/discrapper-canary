"use strict";
n.d(t, { G7: () => en, iP: () => ei, sX: () => er, mG: () => ea, MV: () => et });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(562708),
    o = n(17928),
    d = n(305866),
    c = n(3026),
    u = n(862482),
    _ = n(834730),
    E = n(939249),
    A = n(297264),
    h = n(821609),
    I = n(847374),
    f = n(866665),
    p = n(66834),
    T = n(565645),
    m = n(793574),
    g = n(688810),
    S = n(139286),
    N = n(235986),
    C = n(573435),
    R = n(836039),
    O = n(702841),
    L = n(71393),
    y = n(159273),
    D = n(770335),
    v = n(624793),
    b = n(652215),
    M = n(731383),
    P = n(548118),
    U = n(714991),
    w = n(492494),
    G = n(384684),
    x = n(985242),
    k = n(87719),
    F = n(725807),
    V = n(976860),
    B = n(309010),
    H = n(967198),
    j = n(287809),
    W = n(174459),
    Y = n(486020),
    K = n(385648),
    $ = n(428262),
    z = n(450707),
    q = n(773669),
    Z = n(375708),
    X = n(34337),
    Q = n(746080),
    J = n(202541),
    ee = n(979132);
function et(e) {
    var t, n;
    let r,
        a,
        { node: s } = e;
    (0, M.i)({ emojiId: s.emojiId, currentGuildId: H.A.getGuildId() });
    let l =
            ((n = t = s.name),
            (r = (0, o.bG)([q.default], () => q.default.locale.startsWith("en-"))),
            (a = ":pizza:" === n && r ? Z.intl.formatToPlainString(Z.t["1knDPI"], { emojiName: n }) : n),
            ":pizza:" === t ? a : t),
        u = l !== s.name;
    return (0, i.jsx)(d.l, {
        children: (0, i.jsx)(X.Uq, {
            children: (0, i.jsxs)(N.A, {
                className: ee.gH,
                children: [
                    (0, i.jsx)(T.A, { emojiName: s.name, className: ee.P$, src: s.src, animated: !1, size: "jumbo" }),
                    (0, i.jsxs)(N.A, {
                        direction: N.A.Direction.VERTICAL,
                        justify: N.A.Justify.CENTER,
                        className: ee.bM,
                        children: [
                            (0, i.jsx)(_.E, {
                                className: ee.__invalid_emojiName,
                                variant: "text-md/semibold",
                                children: u
                                    ? (0, i.jsx)("div", { className: ee.Gl, children: l })
                                    : (0, i.jsx)(c.A, { children: l }),
                            }),
                            (0, i.jsx)(_.E, { variant: "text-sm/normal", children: Z.intl.string(Z.t.sXdH8c) }),
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
            hasJoinedExpressionSourceGuild: r,
            isDisplayingJoinGuildButtonInPopout: a,
            closePopout: l,
        } = e,
        { id: o, icon: d, name: u } = n,
        h = Y.Ay.getGuildIconURL({ id: o, icon: d, size: 32, canAnimate: !0 }),
        I = (r = r ?? !0) || n.isDiscoverable();
    function f() {
        n.isDiscoverable() ? (l(), (0, K.Z2)(o, {})) : r && (l(), (0, V.pX)(b.BVt.CHANNEL(o, B.Ay.getChannelId(o))));
    }
    let p = n.isDiscoverable() && null != n.presenceCount;
    return (0, i.jsxs)(N.A, {
        align: N.A.Align.CENTER,
        children: [
            (0, i.jsx)(C.Ay, {
                mask: C.Ay.Masks.SQUIRCLE,
                width: 32,
                height: 32,
                className: ee.__invalid_guildIconContainer,
                children:
                    null != h && I
                        ? (0, i.jsxs)(E.D, {
                              "aria-label": u,
                              onClick: f,
                              children: [(0, i.jsx)("img", { src: h, alt: "", className: ee.$f }), " :"],
                          })
                        : (0, i.jsx)(P.Ay, { size: P.Ay.Sizes.SMALL, className: ee.oi, guild: n }),
            }),
            (0, i.jsxs)(N.A, {
                direction: N.A.Direction.VERTICAL,
                className: s()(ee.__invalid_guildInformation, ee.bM),
                children: [
                    (0, i.jsxs)(N.A, {
                        align: N.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(U.A, { guild: n, className: ee.n2 }),
                            I
                                ? (0, i.jsx)(E.D, {
                                      onClick: f,
                                      className: ee.bM,
                                      children: (0, i.jsx)(A.D, {
                                          className: ee.J5,
                                          variant: "heading-md/semibold",
                                          children: (0, i.jsx)(c.A, { children: u }),
                                      }),
                                  })
                                : (0, i.jsx)(A.D, {
                                      variant: "heading-md/semibold",
                                      children: (0, i.jsx)(c.A, { children: u }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)(N.A, {
                        align: N.A.Align.CENTER,
                        children: p
                            ? ((t = !a && !r),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(_.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          children: Z.intl.format(Z.t["LC+S+m"], { membersOnline: n.presenceCount }),
                                      }),
                                      (0, i.jsx)("div", { className: ee.zk }),
                                      t
                                          ? (0, i.jsx)(E.D, {
                                                className: ee.Ki,
                                                onClick: f,
                                                children: (0, i.jsx)(_.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-link",
                                                    children: Z.intl.string(Z.t.riu2R5),
                                                }),
                                            })
                                          : (0, i.jsx)(_.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: Z.intl.string(Z.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, i.jsx)(_.E, {
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
function ei(e) {
    let { node: t, closePopout: n, refreshPositionKey: a, nonce: s } = e,
        {
            expressionSourceGuild: l,
            expressionSourceApplication: o,
            sourceType: c,
            joinedEmojiSourceGuildRecord: u,
            emoji: _,
            isFetching: E,
        } = (function (e) {
            let { emojiId: t, refreshPositionKey: n } = e,
                { joinedEmojiSourceGuildRecord: i, emoji: a } = (0, O.cf)([y.Ay, L.A], () => {
                    var e, n;
                    let i;
                    return (
                        (e = y.Ay),
                        (n = L.A),
                        (i = null != t ? e.getCustomEmojiById(t) : null),
                        i?.type === D.i.GUILD
                            ? { emoji: i, joinedEmojiSourceGuildRecord: n.getGuild(i?.guildId) }
                            : { emoji: null, joinedEmojiSourceGuildRecord: null }
                    );
                }),
                s = null != i,
                l = null != i && i.features.has(b.GuildFeatures.DISCOVERABLE),
                o = (!s || l) && null != t,
                [d, c] = r.useState(o),
                [u, _] = r.useState(null),
                E = null != i ? v.GO.createFromGuildRecord(i) : null,
                [A, h] = r.useState(E),
                [I, f] = r.useState(null),
                p = r.useRef(n);
            return (
                r.useEffect(() => {
                    p.current = n;
                }),
                r.useEffect(() => {
                    async function e() {
                        let e = null != t ? await (0, v.g_)(t) : null;
                        if (null != e)
                            switch ((_(e.type), e.type)) {
                                case v.rV.APPLICATION:
                                    f(e.application);
                                    break;
                                case v.rV.GUILD:
                                    h(e.guild);
                            }
                        c(!1), p.current?.();
                    }
                    (p.current?.(), o) ? e() : p.current?.();
                }, [t, o]),
                {
                    expressionSourceGuild: A,
                    expressionSourceApplication: I,
                    sourceType: u,
                    joinedEmojiSourceGuildRecord: i,
                    hasJoinedEmojiSourceGuild: s,
                    emoji: a,
                    isFetching: d,
                }
            );
        })({ emojiId: t.emojiId, refreshPositionKey: a });
    return E
        ? (0, i.jsx)(X.Y0, {})
        : (0, i.jsx)(d.l, {
              "aria-label": t.name,
              children: (0, i.jsx)(er, {
                  node: t,
                  sourceType: c,
                  expressionSourceApplication: o,
                  guildEmoji: _ ?? void 0,
                  expressionSourceGuild: l,
                  joinedEmojiSourceGuildRecord: u,
                  closePopout: n,
                  onToggleShowMoreEmojis: a,
                  demoMode: !1,
                  nonce: s,
              }),
          });
}
function er(e) {
    let t,
        n,
        {
            node: a,
            sourceType: d,
            expressionSourceApplication: A,
            expressionSourceGuild: f,
            joinedEmojiSourceGuildRecord: C,
            closePopout: O,
            onToggleShowMoreEmojis: L,
            guildEmoji: y,
            demoMode: D = !1,
            nonce: P,
        } = e,
        U = (0, o.bG)([j.default], () => j.default.getCurrentUser()),
        V = (0, o.bG)([H.A], () => H.A.getGuildId()),
        B = $.Ay.isPremium(U),
        Y = null != V && (V === f?.id || V === C?.id),
        K = null != C,
        q = f?.isDiscoverable() ?? !1;
    D && ((B = !0), (q = !0), (K = !1), (Y = !1));
    let et = {
            page: null != (0, o.bG)([H.A], () => H.A.getGuildId()) ? b.liQ.GUILD_CHANNEL : b.liQ.DM_CHANNEL,
            section: b.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: ei,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: es,
        } = r.useMemo(
            () =>
                null == y
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: w.kT(y),
                          isUnusableRoleSubscriptionEmoji: w.JN(y, V ?? void 0),
                          userIsRoleSubscriber: G.A.getUserSubscriptionRoles(y.guildId).size > 0,
                      },
            [y, V],
        ),
        el = !!er && (0, R.tE)(y?.guildId),
        { analyticsLocations: eo } = (0, g.Ay)(m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, S.A)(
        {
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: eo, emoji_guild_id: y?.guildId ?? null, emoji_id: y?.id ?? null },
        },
        { disableTrack: !ei },
    );
    let ed = H.A.getGuildId(),
        ec = (0, z.O)({
            sourceType: d,
            expressionSourceApplication: A,
            isPremium: B,
            hasJoinedEmojiSourceGuild: K,
            isRoleSubscriptionEmoji: ei,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: es,
            emojiComesFromCurrentGuild: Y,
            isDiscoverable: q,
            shouldHideRoleSubscriptionCTA: el,
            onOpenPremiumSettings: () => {
                O(),
                    W.default.track(b.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: et.page,
                        location_section: et.section,
                    }),
                    (0, k.e)();
            },
        }),
        eu = K && er && !el && ((B && ei) || !B),
        e_ = ec.emojiDescription,
        eE = (0, M.i)({
            emojiId: a.emojiId,
            currentGuildId: ed,
            popoutData: ec,
            emojiSourceGuildId: f?.id,
            nonce: P,
            demoMode: D,
        }),
        eA = ec.type === z.u.JOIN_GUILD,
        eh = ec.type === z.u.GET_PREMIUM,
        [eI, ef] = r.useState(!1),
        ep = q || (K && !Y) || null != f;
    return (0, i.jsxs)(X.Uq, {
        className: ee.Bm,
        children: [
            (function () {
                async function e() {
                    if (D || null == f || K) return;
                    O();
                    let e = f.id;
                    try {
                        await p.A.joinGuild(e), p.A.transitionToGuildSync(e);
                    } catch {}
                }
                let t = !K && q;
                return (0, i.jsxs)("div", {
                    className: ee.gH,
                    children: [
                        (0, i.jsxs)(N.A, {
                            children: [
                                (0, i.jsx)(T.A, {
                                    className: ee.P$,
                                    emojiId: a.emojiId,
                                    emojiName: a.name,
                                    animated: a.animated,
                                    size: "jumbo",
                                }),
                                (0, i.jsxs)(N.A, {
                                    direction: N.A.Direction.VERTICAL,
                                    justify: N.A.Justify.CENTER,
                                    className: ee.bM,
                                    children: [
                                        (0, i.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            children: (0, i.jsx)(c.A, { children: a.name }),
                                        }),
                                        null != e_ && (0, i.jsx)(_.E, { variant: "text-sm/normal", children: e_ }),
                                    ],
                                }),
                            ],
                        }),
                        eh
                            ? (0, i.jsx)(F.A, {
                                  className: ee.lI,
                                  subscriptionTier: J.pe.TIER_2,
                                  size: u.$n.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: ec.text },
                                  onSubscribeModalClose: (t) => (t ? e() : O()),
                                  postSuccessGuild: t ? (f ?? void 0) : void 0,
                                  premiumModalAnalyticsLocation: et,
                              })
                            : eA
                              ? (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: ee.lI,
                                    children: (0, i.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ec.text,
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                })
                              : void 0,
                        eu &&
                            (0, i.jsx)(x.A, {
                                text: es ? Z.intl.string(Z.t.yma8Vp) : Z.intl.string(Z.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: function () {
                                    O(),
                                        C?.id != null &&
                                            p.A.transitionToGuildSync(
                                                C.id,
                                                {
                                                    sourceLocationStack: [
                                                        m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                Q.VV.ROLE_SUBSCRIPTIONS,
                                            );
                                },
                            }),
                    ],
                });
            })(),
            ep &&
                ((n = null != f && !K && q && (f?.emojis?.length ?? 0) > 1),
                (0, i.jsxs)("div", {
                    className: ee.tl,
                    children: [
                        (0, i.jsx)(_.E, {
                            className: ee.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: K ? Z.intl.string(Z.t.ohTzZH) : Z.intl.string(Z.t["eLfh+a"]),
                        }),
                        (0, i.jsx)(en, {
                            expressionSourceGuild: f ?? v.GO.createFromGuildRecord(C),
                            hasJoinedExpressionSourceGuild: K,
                            isDisplayingJoinGuildButtonInPopout: eA,
                            closePopout: O,
                        }),
                        n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ((t = Z.intl.string(Z.t.pnsAS2)),
                                    (0, i.jsx)(E.D, {
                                        onClick: function () {
                                            n &&
                                                (L?.(),
                                                eI ||
                                                    D ||
                                                    W.default.track(b.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eE),
                                                ef(!eI));
                                        },
                                        className: ee.wK,
                                        children: (0, i.jsxs)(N.A, {
                                            children: [
                                                (0, i.jsx)(_.E, {
                                                    className: ee.__invalid_showMoreEmojisLabel,
                                                    "aria-label": t,
                                                    variant: "text-xs/normal",
                                                    color: "none",
                                                    children: t,
                                                }),
                                                (0, i.jsx)(I.a, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: s()(ee.ZB, { [ee.cP]: !eI }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != a.emojiId &&
                                        eI &&
                                        (0, i.jsx)(ea, {
                                            emojiId: a.emojiId,
                                            expressionSourceGuild: f,
                                            popoutData: ec,
                                            onClose: O,
                                            hasJoinedEmojiSourceGuild: K,
                                            isDisplayingButtonInTopSection: eA || eh,
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
            hasJoinedEmojiSourceGuild: r,
            popoutData: a,
            onClose: s,
            isDisplayingButtonInTopSection: l,
        } = e,
        o = (n?.emojis ?? [])
            .slice(0, 13)
            .filter((e) => e.id !== t)
            .slice(0, 12),
        { type: d, description: c } = a;
    return (0, i.jsxs)("div", {
        className: ee.LX,
        children: [
            r
                ? null
                : o.map((e) =>
                      (0, i.jsx)(
                          f.m,
                          {
                              text: e.require_colons ? `:${e.name}:` : e.name,
                              ...X.Uk,
                              children: (0, i.jsx)(T.A, { className: ee.Th, emojiId: e.id, animated: e.animated }),
                          },
                          e.id,
                      ),
                  ),
            !l &&
                (d === z.u.GET_PREMIUM
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(F.A, {
                                  subscriptionTier: J.pe.TIER_2,
                                  textOptions: { textOverride: a.text },
                                  className: ee.lI,
                                  fullWidth: !0,
                                  onClick: () => s(),
                              }),
                              null != c &&
                                  (0, i.jsx)("div", {
                                      className: ee.vd,
                                      children: (0, i.jsx)(_.E, {
                                          variant: "text-sm/medium",
                                          "aria-label": c,
                                          children: c,
                                      }),
                                  }),
                          ],
                      })
                    : d === z.u.JOIN_GUILD
                      ? (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: ee.lI,
                            children: (0, i.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                text: a.text,
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
