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
    u = n(990078),
    _ = n(862482),
    E = n(834730),
    A = n(939249),
    h = n(297264),
    I = n(821609),
    f = n(847374),
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
    D = n(159273),
    y = n(770335),
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
                            (0, i.jsx)(E.E, {
                                className: ee.__invalid_emojiName,
                                variant: "text-md/semibold",
                                children: u
                                    ? (0, i.jsx)("div", { className: ee.Gl, children: l })
                                    : (0, i.jsx)(c.A, { children: l }),
                            }),
                            (0, i.jsx)(E.E, { variant: "text-sm/normal", children: Z.intl.string(Z.t.sXdH8c) }),
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
        _ = Y.Ay.getGuildIconURL({ id: o, icon: d, size: 32, canAnimate: !0 }),
        I = (r = r ?? !0) || n.isDiscoverable();
    function f() {
        n.isDiscoverable() ? (l(), (0, K.Z2)(o, {})) : r && (l(), (0, V.pX)(b.BVt.CHANNEL(o, B.A.getChannelId(o))));
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
                    null != _ && I
                        ? (0, i.jsxs)(A.D, {
                              "aria-label": u,
                              onClick: f,
                              children: [(0, i.jsx)("img", { src: _, alt: "", className: ee.$f }), " :"],
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
                                ? (0, i.jsx)(A.D, {
                                      onClick: f,
                                      className: ee.bM,
                                      children: (0, i.jsx)(h.D, {
                                          className: ee.J5,
                                          variant: "heading-md/semibold",
                                          children: (0, i.jsx)(c.A, { children: u }),
                                      }),
                                  })
                                : (0, i.jsx)(h.D, {
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
                                      (0, i.jsx)(E.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          children: Z.intl.format(Z.t["LC+S+m"], { membersOnline: n.presenceCount }),
                                      }),
                                      (0, i.jsx)("div", { className: ee.zk }),
                                      t
                                          ? (0, i.jsx)(A.D, {
                                                className: ee.Ki,
                                                onClick: f,
                                                children: (0, i.jsx)(E.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-link",
                                                    children: Z.intl.string(Z.t.riu2R5),
                                                }),
                                            })
                                          : (0, i.jsx)(E.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: Z.intl.string(Z.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, i.jsx)(E.E, {
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
                { joinedEmojiSourceGuildRecord: i, emoji: a } = (0, O.cf)([D.Ay, L.A], () => {
                    var e, n;
                    let i;
                    return (
                        (e = D.Ay),
                        (n = L.A),
                        (i = null != t ? e.getCustomEmojiById(t) : null),
                        i?.type === y.i.GUILD
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
                    p.current?.();
                    let e = async () => {
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
                    };
                    o ? e() : p.current?.();
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
        a,
        d,
        {
            node: u,
            sourceType: h,
            expressionSourceApplication: C,
            expressionSourceGuild: O,
            joinedEmojiSourceGuildRecord: L,
            closePopout: D,
            onToggleShowMoreEmojis: y,
            guildEmoji: P,
            demoMode: U = !1,
            nonce: V,
        } = e,
        B = (0, o.bG)([j.default], () => j.default.getCurrentUser()),
        Y = (0, o.bG)([H.A], () => H.A.getGuildId()),
        K = $.Ay.isPremium(B),
        q = null != Y && (Y === O?.id || Y === L?.id),
        et = null != L,
        ei = O?.isDiscoverable() ?? !1;
    U && ((K = !0), (ei = !0), (et = !1), (q = !1));
    let er = {
            page: null != (0, o.bG)([H.A], () => H.A.getGuildId()) ? b.liQ.GUILD_CHANNEL : b.liQ.DM_CHANNEL,
            section: b.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: es,
            isUnusableRoleSubscriptionEmoji: el,
            userIsRoleSubscriber: eo,
        } = r.useMemo(
            () =>
                null == P
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: w.kT(P),
                          isUnusableRoleSubscriptionEmoji: w.JN(P, Y ?? void 0),
                          userIsRoleSubscriber: G.A.getUserSubscriptionRoles(P.guildId).size > 0,
                      },
            [P, Y],
        ),
        ed = !!el && (0, R.tE)(P?.guildId),
        { analyticsLocations: ec } = (0, g.Ay)(m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, S.A)(
        {
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: ec, emoji_guild_id: P?.guildId ?? null, emoji_id: P?.id ?? null },
        },
        { disableTrack: !es },
    );
    let eu = H.A.getGuildId(),
        e_ = (0, z.O)({
            sourceType: h,
            expressionSourceApplication: C,
            isPremium: K,
            hasJoinedEmojiSourceGuild: et,
            isRoleSubscriptionEmoji: es,
            isUnusableRoleSubscriptionEmoji: el,
            userIsRoleSubscriber: eo,
            emojiComesFromCurrentGuild: q,
            isDiscoverable: ei,
            shouldHideRoleSubscriptionCTA: ed,
            onOpenPremiumSettings: () => {
                D(),
                    W.default.track(b.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: er.page,
                        location_section: er.section,
                    }),
                    (0, k.e)();
            },
        }),
        eE = et && el && !ed && ((K && es) || !K),
        eA = e_.emojiDescription,
        eh = (0, M.i)({
            emojiId: u.emojiId,
            currentGuildId: eu,
            popoutData: e_,
            emojiSourceGuildId: O?.id,
            nonce: V,
            demoMode: U,
        }),
        eI = e_.type === z.u.JOIN_GUILD,
        ef = e_.type === z.u.GET_PREMIUM,
        [ep, eT] = r.useState(!1),
        em = ei || (et && !q) || null != O;
    return (0, i.jsxs)(X.Uq, {
        className: ee.Bm,
        children: [
            ((a = async () => {
                if (U || null == O || et) return;
                D();
                let e = O.id;
                try {
                    await p.A.joinGuild(e), p.A.transitionToGuildSync(e);
                } catch {}
            }),
            (d = !et && ei),
            (0, i.jsxs)("div", {
                className: ee.gH,
                children: [
                    (0, i.jsxs)(N.A, {
                        children: [
                            (0, i.jsx)(T.A, {
                                className: ee.P$,
                                emojiId: u.emojiId,
                                emojiName: u.name,
                                animated: u.animated,
                                size: "jumbo",
                            }),
                            (0, i.jsxs)(N.A, {
                                direction: N.A.Direction.VERTICAL,
                                justify: N.A.Justify.CENTER,
                                className: ee.bM,
                                children: [
                                    (0, i.jsx)(E.E, {
                                        variant: "text-md/semibold",
                                        children: (0, i.jsx)(c.A, { children: u.name }),
                                    }),
                                    null != eA && (0, i.jsx)(E.E, { variant: "text-sm/normal", children: eA }),
                                ],
                            }),
                        ],
                    }),
                    ef
                        ? (0, i.jsx)(F.A, {
                              className: ee.lI,
                              subscriptionTier: J.pe.TIER_2,
                              size: _.$n.Sizes.SMALL,
                              fullWidth: !0,
                              textOptions: { textOverride: e_.text },
                              onSubscribeModalClose: (e) => (e ? a() : D()),
                              postSuccessGuild: d ? (O ?? void 0) : void 0,
                              premiumModalAnalyticsLocation: er,
                          })
                        : eI
                          ? (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: ee.lI,
                                children: (0, i.jsx)(I.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: e_.text,
                                    fullWidth: !0,
                                    onClick: a,
                                }),
                            })
                          : void 0,
                    eE &&
                        (0, i.jsx)(x.A, {
                            text: eo ? Z.intl.string(Z.t.yma8Vp) : Z.intl.string(Z.t.nN2DIo),
                            size: "sm",
                            fullWidth: !0,
                            onClick: () => {
                                D(),
                                    L?.id != null &&
                                        p.A.transitionToGuildSync(
                                            L.id,
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
            })),
            em &&
                ((n = null != O && !et && ei && (O?.emojis?.length ?? 0) > 1),
                (0, i.jsxs)("div", {
                    className: ee.tl,
                    children: [
                        (0, i.jsx)(E.E, {
                            className: ee.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: et ? Z.intl.string(Z.t.ohTzZH) : Z.intl.string(Z.t["eLfh+a"]),
                        }),
                        (0, i.jsx)(en, {
                            expressionSourceGuild: O ?? v.GO.createFromGuildRecord(L),
                            hasJoinedExpressionSourceGuild: et,
                            isDisplayingJoinGuildButtonInPopout: eI,
                            closePopout: D,
                        }),
                        n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ((t = Z.intl.string(Z.t.pnsAS2)),
                                    (0, i.jsx)(A.D, {
                                        onClick: function () {
                                            n &&
                                                (y?.(),
                                                ep ||
                                                    U ||
                                                    W.default.track(b.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eh),
                                                eT(!ep));
                                        },
                                        className: ee.wK,
                                        children: (0, i.jsxs)(N.A, {
                                            children: [
                                                (0, i.jsx)(E.E, {
                                                    className: ee.__invalid_showMoreEmojisLabel,
                                                    "aria-label": t,
                                                    variant: "text-xs/normal",
                                                    color: "none",
                                                    children: t,
                                                }),
                                                (0, i.jsx)(f.a, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: s()(ee.ZB, { [ee.cP]: !ep }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != u.emojiId &&
                                        ep &&
                                        (0, i.jsx)(ea, {
                                            emojiId: u.emojiId,
                                            expressionSourceGuild: O,
                                            popoutData: e_,
                                            onClose: D,
                                            hasJoinedEmojiSourceGuild: et,
                                            isDisplayingButtonInTopSection: eI || ef,
                                        }),
                                ],
                            }),
                    ],
                })),
        ],
    });
}
let ea = (e) => {
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
                          u.m,
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
                                      children: (0, i.jsx)(E.E, {
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
                            children: (0, i.jsx)(I.$, {
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
};
