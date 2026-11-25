var l = t(477900),
    s = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(613412),
    o = t(855986),
    u = t(3026),
    c = t(305866),
    d = t(834730),
    m = t(939249),
    x = t(534514),
    h = t(821609),
    p = t(847374),
    j = t(866665),
    g = t(778858),
    f = t(565645),
    v = t(793574),
    N = t(688810),
    I = t(139286),
    b = t(235986),
    E = t(573435),
    A = t(836039),
    C = t(490035),
    T = t(433716),
    y = t(695282),
    _ = t(624793),
    S = t(731383),
    O = t(682163),
    R = t(714991),
    M = t(492494),
    k = t(384684),
    G = t(985242),
    P = t(87719),
    D = t(465794),
    w = t(976860),
    L = t(309010),
    U = t(967198),
    B = t(287809),
    z = t(129230),
    V = t(486020),
    W = t(449054),
    F = t(448645),
    H = t(450707),
    J = t(483407),
    K = t(188645),
    $ = t(652215),
    q = t(746080),
    Y = t(682901),
    X = t(792996),
    Z = t(844749);
let Q = (e) => {
    let n,
        {
            expressionSourceGuild: t,
            hasJoinedExpressionSourceGuild: s,
            isDisplayingJoinGuildButtonInPopout: a,
            closePopout: r,
        } = e,
        { id: o, icon: c, name: h } = t,
        p = V.Ay.getGuildIconURL({ id: o, icon: c, size: 32, canAnimate: !0 }),
        j = (s = s ?? !0) || t.isDiscoverable();
    function g() {
        t.isDiscoverable() ? (r(), (0, W.Z2)(o, {})) : s && (r(), (0, w.pX)($.BVt.CHANNEL(o, L.Ay.getChannelId(o))));
    }
    let f = t.isDiscoverable() && null != t.presenceCount;
    return (0, l.jsxs)(b.A, {
        align: b.A.Align.CENTER,
        children: [
            (0, l.jsx)(E.Ay, {
                mask: E.Ay.Masks.SQUIRCLE,
                width: 32,
                height: 32,
                className: Z.__invalid_guildIconContainer,
                children:
                    null != p && j
                        ? (0, l.jsxs)(m.D, {
                              "aria-label": h,
                              onClick: g,
                              children: [(0, l.jsx)("img", { src: p, alt: "", className: Z.$f }), " :"],
                          })
                        : (0, l.jsx)(O.Ay, { size: O.Ay.Sizes.SMALL, className: Z.oi, guild: t }),
            }),
            (0, l.jsxs)(b.A, {
                direction: b.A.Direction.VERTICAL,
                className: i()(Z.__invalid_guildInformation, Z.bM),
                children: [
                    (0, l.jsxs)(b.A, {
                        align: b.A.Align.CENTER,
                        children: [
                            (0, l.jsx)(R.A, { guild: t, className: Z.n2 }),
                            j
                                ? (0, l.jsx)(m.D, {
                                      onClick: g,
                                      className: Z.bM,
                                      children: (0, l.jsx)(x.D, {
                                          className: Z.J5,
                                          variant: "heading-sm/semibold",
                                          children: (0, l.jsx)(u.A, { children: h }),
                                      }),
                                  })
                                : (0, l.jsx)(x.D, {
                                      variant: "heading-sm/semibold",
                                      children: (0, l.jsx)(u.A, { children: h }),
                                  }),
                        ],
                    }),
                    (0, l.jsx)(b.A, {
                        align: b.A.Align.CENTER,
                        children: f
                            ? ((n = !a && !s),
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(d.E, {
                                          variant: "body-xs/normal",
                                          color: "text-default",
                                          children: X.intl.format(X.t["LC+S+m"], { membersOnline: t.presenceCount }),
                                      }),
                                      (0, l.jsx)("div", { className: Z.zk }),
                                      n
                                          ? (0, l.jsx)(m.D, {
                                                className: Z.Ki,
                                                onClick: g,
                                                children: (0, l.jsx)(d.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-link",
                                                    children: X.intl.string(X.t.riu2R5),
                                                }),
                                            })
                                          : (0, l.jsx)(d.E, {
                                                variant: "body-xs/normal",
                                                color: "text-default",
                                                children: X.intl.string(X.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, l.jsx)(d.E, {
                                  variant: "body-xs/normal",
                                  color: "text-default",
                                  children: X.intl.string(X.t.H29mx4),
                              }),
                    }),
                ],
            }),
        ],
    });
};
function ee(e) {
    let n,
        t,
        {
            node: a,
            sourceType: u,
            expressionSourceApplication: c,
            expressionSourcePack: x,
            expressionSourceGuild: j,
            joinedEmojiSourceGuildRecord: E,
            closePopout: y,
            onToggleShowMoreEmojis: O,
            guildEmoji: R,
            demoMode: w = !1,
            nonce: L,
        } = e,
        V = (0, o.bG)([B.default], () => B.default.getCurrentUser()),
        W = (0, C.H)("message_emoji_details"),
        J = (0, o.bG)([U.A], () => U.A.getGuildId()),
        ee = F.Ay.isPremium(V),
        et = null != J && (J === j?.id || J === E?.id),
        el = null != E,
        es = j?.isDiscoverable() ?? !1;
    w && ((ee = !0), (es = !0), (el = !1), (et = !1));
    let ea = {
            page: null != (0, o.bG)([U.A], () => U.A.getGuildId()) ? $.liQ.GUILD_CHANNEL : $.liQ.DM_CHANNEL,
            section: $.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: ei,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: eo,
        } = s.useMemo(
            () =>
                null == R
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: M.kT(R),
                          isUnusableRoleSubscriptionEmoji: M.JN(R, J ?? void 0),
                          userIsRoleSubscriber: k.A.getUserSubscriptionRoles(R.guildId).size > 0,
                      },
            [R, J],
        ),
        eu = !!er && (0, A.tE)(R?.guildId),
        { analyticsLocations: ec } = (0, N.Ay)(v.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, I.A)(
        {
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: ec, emoji_guild_id: R?.guildId ?? null, emoji_id: R?.id ?? null },
        },
        { disableTrack: !ei },
    );
    let ed = U.A.getGuildId(),
        em = (0, H.O)({
            sourceType: u,
            expressionSourceApplication: c,
            isPremium: ee,
            hasJoinedEmojiSourceGuild: el,
            isRoleSubscriptionEmoji: ei,
            isUnusableRoleSubscriptionEmoji: er,
            userIsRoleSubscriber: eo,
            emojiComesFromCurrentGuild: et,
            isDiscoverable: es,
            shouldHideRoleSubscriptionCTA: eu,
            onOpenPremiumSettings: () => {
                (y(),
                    z.default.track($.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: ea.page,
                        location_section: ea.section,
                    }),
                    (0, P.e)());
            },
        }),
        ex = el && er && !eu && ((ee && ei) || !ee),
        eh = W && u === _.rV.PACK && null != x,
        ep = em.emojiDescription,
        ej = (0, S.i)({
            emojiId: a.emojiId,
            currentGuildId: ed,
            popoutData: em,
            emojiSourceGuildId: j?.id,
            nonce: L,
            demoMode: w,
        }),
        eg = em.type === H.u.JOIN_GUILD,
        ef = em.type === H.u.GET_PREMIUM,
        [ev, eN] = s.useState(!1),
        eI = es || (el && !et) || null != j;
    return (0, l.jsxs)(K.Uq, {
        className: i()(Z.Bm, Z.Os, { [Z.x1]: eh }),
        children: [
            (function () {
                async function e() {
                    if (w || null == j || el) return;
                    y();
                    let e = j.id;
                    try {
                        (await g.A.joinGuild(e), g.A.transitionToGuildSync(e));
                    } catch {}
                }
                let n = !el && es;
                return (0, l.jsxs)("div", {
                    className: Z.gH,
                    children: [
                        (0, l.jsxs)(b.A, {
                            children: [
                                (0, l.jsx)(f.A, {
                                    className: Z.P$,
                                    emojiId: a.emojiId,
                                    emojiName: a.name,
                                    animated: a.animated,
                                    size: "jumbo",
                                }),
                                (0, l.jsxs)(b.A, {
                                    direction: b.A.Direction.VERTICAL,
                                    justify: b.A.Justify.CENTER,
                                    className: Z.bM,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            variant: "body-md/semibold",
                                            className: Z.cC,
                                            children: a.name,
                                        }),
                                        !eh &&
                                            null != ep &&
                                            (0, l.jsx)(d.E, {
                                                variant: "body-sm/normal",
                                                className: Z.t,
                                                children: ep,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        ef
                            ? (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: Z.lI,
                                  children: (0, l.jsx)(D.A, {
                                      subscriptionTier: Y.pe.TIER_2,
                                      size: "sm",
                                      fullWidth: !0,
                                      buttonTextOverride: em.text,
                                      onSubscribeModalClose: (n) => (n ? e() : y()),
                                      postSuccessGuild: n ? (j ?? void 0) : void 0,
                                      premiumModalAnalyticsLocation: ea,
                                  }),
                              })
                            : eg
                              ? (0, l.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: Z.lI,
                                    children: (0, l.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: em.text,
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                })
                              : void 0,
                        ex &&
                            (0, l.jsx)(G.A, {
                                text: eo ? X.intl.string(X.t.yma8Vp) : X.intl.string(X.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: function () {
                                    (y(),
                                        E?.id != null &&
                                            g.A.transitionToGuildSync(
                                                E.id,
                                                {
                                                    sourceLocationStack: [
                                                        v.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                q.VV.ROLE_SUBSCRIPTIONS,
                                            ));
                                },
                            }),
                    ],
                });
            })(),
            eh &&
                (0, l.jsx)(T.A, {
                    pack: x,
                    isNitroTier2: F.Ay.isPremium(V, Y.PremiumTypes.TIER_2),
                    surface: "message_emoji_popout",
                    onClose: y,
                }),
            eI &&
                ((t = null != j && !el && es && (j?.emojis?.length ?? 0) > 1),
                (0, l.jsxs)("div", {
                    className: Z.tl,
                    children: [
                        (0, l.jsx)(d.E, {
                            className: Z.YW,
                            variant: "body-sm/medium",
                            color: "text-subtle",
                            children: el ? X.intl.string(X.t.ohTzZH) : X.intl.string(X.t["eLfh+a"]),
                        }),
                        (0, l.jsx)(Q, {
                            expressionSourceGuild: j ?? _.GO.createFromGuildRecord(E),
                            hasJoinedExpressionSourceGuild: el,
                            isDisplayingJoinGuildButtonInPopout: eg,
                            closePopout: y,
                        }),
                        t &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    ((n = X.intl.string(X.t.pnsAS2)),
                                    (0, l.jsx)(m.D, {
                                        onClick: function () {
                                            t &&
                                                (O?.(),
                                                ev ||
                                                    w ||
                                                    z.default.track($.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ej),
                                                eN(!ev));
                                        },
                                        className: Z.wK,
                                        children: (0, l.jsxs)(b.A, {
                                            children: [
                                                (0, l.jsx)(d.E, {
                                                    className: Z.__invalid_showMoreEmojisLabel,
                                                    "aria-label": n,
                                                    variant: "body-xs/normal",
                                                    color: "none",
                                                    children: n,
                                                }),
                                                (0, l.jsx)(p.ChevronSmallDownIcon, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: i()(Z.ZB, { [Z.cP]: !ev }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != a.emojiId &&
                                        ev &&
                                        (0, l.jsx)(en, {
                                            emojiId: a.emojiId,
                                            expressionSourceGuild: j,
                                            popoutData: em,
                                            onClose: y,
                                            hasJoinedEmojiSourceGuild: el,
                                            isDisplayingButtonInTopSection: eg || ef,
                                        }),
                                ],
                            }),
                    ],
                })),
        ],
    });
}
function en(e) {
    let {
            emojiId: n,
            expressionSourceGuild: t,
            hasJoinedEmojiSourceGuild: s,
            popoutData: a,
            onClose: i,
            isDisplayingButtonInTopSection: r,
        } = e,
        o = (t?.emojis ?? [])
            .slice(0, 13)
            .filter((e) => e.id !== n)
            .slice(0, 12),
        { type: u, description: c } = a;
    return (0, l.jsxs)("div", {
        className: Z.LX,
        children: [
            s
                ? null
                : o.map((e) =>
                      (0, l.jsx)(
                          j.m,
                          {
                              text: e.require_colons ? `:${e.name}:` : e.name,
                              ...K.Uk,
                              children: (0, l.jsx)(f.A, { className: Z.Th, emojiId: e.id, animated: e.animated }),
                          },
                          e.id,
                      ),
                  ),
            !r &&
                (u === H.u.GET_PREMIUM
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: Z.lI,
                                  children: (0, l.jsx)(D.A, {
                                      subscriptionTier: Y.pe.TIER_2,
                                      buttonTextOverride: a.text,
                                      fullWidth: !0,
                                      onClick: () => i(),
                                  }),
                              }),
                              null != c &&
                                  (0, l.jsx)("div", {
                                      className: Z.vd,
                                      children: (0, l.jsx)(d.E, {
                                          variant: "body-sm/medium",
                                          "aria-label": c,
                                          children: c,
                                      }),
                                  }),
                          ],
                      })
                    : u === H.u.JOIN_GUILD
                      ? (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: Z.lI,
                            children: (0, l.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                text: a.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, W.Z2)(t.id, {});
                                },
                            }),
                        })
                      : null),
        ],
    });
}
t.d(
    n,
    {},
    {
        G7: Q,
        MV: function (e) {
            let { node: n } = e;
            (0, S.i)({ emojiId: n.emojiId, currentGuildId: U.A.getGuildId() });
            let t = (0, J.A)(n.name),
                s = t !== n.name;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(K.Uq, {
                    className: Z.Os,
                    children: (0, l.jsxs)(b.A, {
                        className: Z.gH,
                        children: [
                            (0, l.jsx)(f.A, {
                                emojiName: n.name,
                                className: Z.P$,
                                src: n.src,
                                animated: !1,
                                size: "jumbo",
                            }),
                            (0, l.jsxs)(b.A, {
                                direction: b.A.Direction.VERTICAL,
                                justify: b.A.Justify.CENTER,
                                className: Z.bM,
                                children: [
                                    (0, l.jsx)(d.E, {
                                        className: Z.cC,
                                        variant: "body-md/semibold",
                                        children: s ? (0, l.jsx)("div", { className: Z.Gl, children: t }) : t,
                                    }),
                                    (0, l.jsx)(d.E, {
                                        variant: "body-sm/normal",
                                        className: Z.t,
                                        children: X.intl.string(X.t.sXdH8c),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            });
        },
        iP: function (e) {
            let { node: n, closePopout: t, refreshPositionKey: s, nonce: a } = e,
                {
                    expressionSourceGuild: i,
                    expressionSourceApplication: r,
                    expressionSourcePack: o,
                    sourceType: u,
                    joinedEmojiSourceGuildRecord: d,
                    emoji: m,
                    isFetching: x,
                } = (0, y.y)({ emojiId: n.emojiId, refreshPositionKey: s });
            return x
                ? (0, l.jsx)(K.Y0, {})
                : (0, l.jsx)(c.l, {
                      "aria-label": n.name,
                      children: (0, l.jsx)(ee, {
                          node: n,
                          sourceType: u,
                          expressionSourceApplication: r,
                          expressionSourcePack: o,
                          guildEmoji: m ?? void 0,
                          expressionSourceGuild: i,
                          joinedEmojiSourceGuildRecord: d,
                          closePopout: t,
                          onToggleShowMoreEmojis: s,
                          demoMode: !1,
                          nonce: a,
                      }),
                  });
        },
        mG: en,
        sX: ee,
    },
);
