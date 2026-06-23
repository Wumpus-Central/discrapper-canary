"use strict";
n.d(t, { G7: () => en, iP: () => ei, sX: () => er, mG: () => es, MV: () => et });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(562708),
    l = n(17928),
    u = n(305866),
    c = n(780645),
    d = n(990078),
    _ = n(862482),
    h = n(834730),
    f = n(939249),
    p = n(534514),
    E = n(821609),
    m = n(847374),
    g = n(66834),
    A = n(565645),
    I = n(793574),
    T = n(688810),
    S = n(139286),
    y = n(235986),
    C = n(573435),
    N = n(836039),
    v = n(702841),
    R = n(71393),
    O = n(159273),
    b = n(770335),
    D = n(624793),
    L = n(652215),
    w = n(731383),
    M = n(548118),
    P = n(714991),
    x = n(492494),
    k = n(384684),
    U = n(985242),
    G = n(87719),
    F = n(725807),
    V = n(976860),
    B = n(309010),
    j = n(967198),
    H = n(287809),
    Y = n(174459),
    W = n(486020),
    K = n(385648),
    $ = n(428262),
    z = n(450707),
    q = n(773669),
    Z = n(375708),
    X = n(34337),
    Q = n(746080),
    J = n(788868),
    ee = n(979132);
function et(e) {
    var t, n;
    let r,
        s,
        { node: a } = e;
    (0, w.i)({ emojiId: a.emojiId, currentGuildId: j.A.getGuildId() });
    let o =
            ((n = t = a.name),
            (r = (0, l.bG)([q.default], () => q.default.locale.startsWith("en-"))),
            (s = ":pizza:" === n && r ? Z.intl.formatToPlainString(Z.t["1knDPI"], { emojiName: n }) : n),
            ":pizza:" === t ? s : t),
        d = o !== a.name;
    return (0, i.jsx)(u.l, {
        children: (0, i.jsx)(X.Uq, {
            children: (0, i.jsxs)(y.A, {
                className: ee.gH,
                children: [
                    (0, i.jsx)(A.A, { emojiName: a.name, className: ee.P$, src: a.src, animated: !1, size: "jumbo" }),
                    (0, i.jsxs)(y.A, {
                        direction: y.A.Direction.VERTICAL,
                        justify: y.A.Justify.CENTER,
                        className: ee.bM,
                        children: [
                            (0, i.jsx)(h.E, {
                                className: ee.__invalid_emojiName,
                                variant: "text-md/semibold",
                                children: d
                                    ? (0, i.jsx)("div", { className: ee.Gl, children: o })
                                    : (0, i.jsx)(c.A, { children: o }),
                            }),
                            (0, i.jsx)(h.E, { variant: "text-sm/normal", children: Z.intl.string(Z.t.sXdH8c) }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
let en = (e) => {
    let t,
        { expressionSourceGuild: n, hasJoinedExpressionSourceGuild: r, isDisplayingJoinGuildButtonInPopout: s } = e,
        { id: o, icon: l, name: u } = n,
        d = W.Ay.getGuildIconURL({ id: o, icon: l, size: 32, canAnimate: !0 }),
        _ = (r = r ?? !0) || n.isDiscoverable();
    function E() {
        n.isDiscoverable() ? (0, K.Z2)(o, {}) : r && (0, V.pX)(L.BVt.CHANNEL(o, B.A.getChannelId(o)));
    }
    let m = n.isDiscoverable() && null != n.presenceCount;
    return (0, i.jsxs)(y.A, {
        align: y.A.Align.CENTER,
        children: [
            (0, i.jsx)(C.Ay, {
                mask: C.Ay.Masks.SQUIRCLE,
                width: 32,
                height: 32,
                className: ee.__invalid_guildIconContainer,
                children:
                    null != d && _
                        ? (0, i.jsxs)(f.D, {
                              "aria-label": u,
                              onClick: E,
                              children: [(0, i.jsx)("img", { src: d, alt: "", className: ee.$f }), " :"],
                          })
                        : (0, i.jsx)(M.Ay, { size: M.Ay.Sizes.SMALL, className: ee.oi, guild: n }),
            }),
            (0, i.jsxs)(y.A, {
                direction: y.A.Direction.VERTICAL,
                className: a()(ee.__invalid_guildInformation, ee.bM),
                children: [
                    (0, i.jsxs)(y.A, {
                        align: y.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(P.A, { guild: n, className: ee.n2 }),
                            _
                                ? (0, i.jsx)(f.D, {
                                      onClick: E,
                                      className: ee.bM,
                                      children: (0, i.jsx)(p.D, {
                                          className: ee.J5,
                                          variant: "heading-md/semibold",
                                          children: (0, i.jsx)(c.A, { children: u }),
                                      }),
                                  })
                                : (0, i.jsx)(p.D, {
                                      variant: "heading-md/semibold",
                                      children: (0, i.jsx)(c.A, { children: u }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)(y.A, {
                        align: y.A.Align.CENTER,
                        children: m
                            ? ((t = !s && !r),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(h.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          children: Z.intl.format(Z.t["LC+S+m"], { membersOnline: n.presenceCount }),
                                      }),
                                      (0, i.jsx)("div", { className: ee.zk }),
                                      t
                                          ? (0, i.jsx)(f.D, {
                                                className: ee.Ki,
                                                onClick: E,
                                                children: (0, i.jsx)(h.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-link",
                                                    children: Z.intl.string(Z.t.riu2R5),
                                                }),
                                            })
                                          : (0, i.jsx)(h.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: Z.intl.string(Z.t.inyJqO),
                                            }),
                                  ],
                              }))
                            : (0, i.jsx)(h.E, {
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
    let { node: t, closePopout: n, refreshPositionKey: s, nonce: a } = e,
        {
            expressionSourceGuild: o,
            expressionSourceApplication: l,
            sourceType: c,
            joinedEmojiSourceGuildRecord: d,
            emoji: _,
            isFetching: h,
        } = (function (e) {
            let { emojiId: t, refreshPositionKey: n } = e,
                { joinedEmojiSourceGuildRecord: i, emoji: s } = (0, v.cf)([O.Ay, R.A], () => {
                    var e, n;
                    let i;
                    return (
                        (e = O.Ay),
                        (n = R.A),
                        (i = null != t ? e.getCustomEmojiById(t) : null),
                        i?.type === b.i.GUILD
                            ? { emoji: i, joinedEmojiSourceGuildRecord: n.getGuild(i?.guildId) }
                            : { emoji: null, joinedEmojiSourceGuildRecord: null }
                    );
                }),
                a = null != i,
                o = null != i && i.features.has(L.GuildFeatures.DISCOVERABLE),
                l = (!a || o) && null != t,
                [u, c] = r.useState(l),
                [d, _] = r.useState(null),
                h = null != i ? D.GO.createFromGuildRecord(i) : null,
                [f, p] = r.useState(h),
                [E, m] = r.useState(null),
                g = r.useRef(n);
            return (
                r.useEffect(() => {
                    g.current = n;
                }),
                r.useEffect(() => {
                    g.current?.();
                    let e = async () => {
                        let e = null != t ? await (0, D.g_)(t) : null;
                        if (null != e)
                            switch ((_(e.type), e.type)) {
                                case D.rV.APPLICATION:
                                    m(e.application);
                                    break;
                                case D.rV.GUILD:
                                    p(e.guild);
                            }
                        c(!1), g.current?.();
                    };
                    l ? e() : g.current?.();
                }, [t, l]),
                {
                    expressionSourceGuild: f,
                    expressionSourceApplication: E,
                    sourceType: d,
                    joinedEmojiSourceGuildRecord: i,
                    hasJoinedEmojiSourceGuild: a,
                    emoji: s,
                    isFetching: u,
                }
            );
        })({ emojiId: t.emojiId, refreshPositionKey: s });
    return h
        ? (0, i.jsx)(X.Y0, {})
        : (0, i.jsx)(u.l, {
              "aria-label": t.name,
              children: (0, i.jsx)(er, {
                  node: t,
                  sourceType: c,
                  expressionSourceApplication: l,
                  guildEmoji: _ ?? void 0,
                  expressionSourceGuild: o,
                  joinedEmojiSourceGuildRecord: d,
                  closePopout: n,
                  onToggleShowMoreEmojis: s,
                  demoMode: !1,
                  nonce: a,
              }),
          });
}
function er(e) {
    let t,
        n,
        s,
        u,
        {
            node: d,
            sourceType: p,
            expressionSourceApplication: C,
            expressionSourceGuild: v,
            joinedEmojiSourceGuildRecord: R,
            closePopout: O,
            onToggleShowMoreEmojis: b,
            guildEmoji: M,
            demoMode: P = !1,
            nonce: V,
        } = e,
        B = (0, l.bG)([H.default], () => H.default.getCurrentUser()),
        W = (0, l.bG)([j.A], () => j.A.getGuildId()),
        K = $.Ay.isPremium(B),
        q = null != W && (W === v?.id || W === R?.id),
        et = null != R,
        ei = v?.isDiscoverable() ?? !1;
    P && ((K = !0), (ei = !0), (et = !1), (q = !1));
    let er = {
            page: null != (0, l.bG)([j.A], () => j.A.getGuildId()) ? L.liQ.GUILD_CHANNEL : L.liQ.DM_CHANNEL,
            section: L.JJy.EMOJI_UPSELL_POPOUT,
        },
        {
            isRoleSubscriptionEmoji: ea,
            isUnusableRoleSubscriptionEmoji: eo,
            userIsRoleSubscriber: el,
        } = r.useMemo(
            () =>
                null == M
                    ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                    : {
                          isRoleSubscriptionEmoji: x.kT(M),
                          isUnusableRoleSubscriptionEmoji: x.JN(M, W ?? void 0),
                          userIsRoleSubscriber: k.A.getUserSubscriptionRoles(M.guildId).size > 0,
                      },
            [M, W],
        ),
        eu = !!eo && (0, N.tE)(M?.guildId),
        { analyticsLocations: ec } = (0, T.Ay)(I.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, S.A)(
        {
            type: o.ImpressionTypes.MODAL,
            name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: { location_stack: ec, emoji_guild_id: M?.guildId ?? null, emoji_id: M?.id ?? null },
        },
        { disableTrack: !ea },
    );
    let ed = j.A.getGuildId(),
        e_ = (0, z.O)({
            sourceType: p,
            expressionSourceApplication: C,
            isPremium: K,
            hasJoinedEmojiSourceGuild: et,
            isRoleSubscriptionEmoji: ea,
            isUnusableRoleSubscriptionEmoji: eo,
            userIsRoleSubscriber: el,
            emojiComesFromCurrentGuild: q,
            isDiscoverable: ei,
            shouldHideRoleSubscriptionCTA: eu,
            onOpenPremiumSettings: () => {
                O(),
                    Y.default.track(L.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_page: er.page,
                        location_section: er.section,
                    }),
                    (0, G.e)();
            },
        }),
        eh = et && eo && !eu && ((K && ea) || !K),
        ef = e_.emojiDescription,
        ep = (0, w.i)({
            emojiId: d.emojiId,
            currentGuildId: ed,
            popoutData: e_,
            emojiSourceGuildId: v?.id,
            nonce: V,
            demoMode: P,
        }),
        eE = e_.type === z.u.JOIN_GUILD,
        em = e_.type === z.u.GET_PREMIUM,
        [eg, eA] = r.useState(!1),
        eI = ei || (et && !q) || null != v;
    return (0, i.jsxs)(X.Uq, {
        className: ee.Bm,
        children: [
            ((s = async () => {
                if (P || null == v || et) return;
                O();
                let e = v.id;
                try {
                    await g.A.joinGuild(e), g.A.transitionToGuildSync(e);
                } catch {}
            }),
            (u = !et && ei),
            (0, i.jsxs)("div", {
                className: ee.gH,
                children: [
                    (0, i.jsxs)(y.A, {
                        children: [
                            (0, i.jsx)(A.A, {
                                className: ee.P$,
                                emojiId: d.emojiId,
                                emojiName: d.name,
                                animated: d.animated,
                                size: "jumbo",
                            }),
                            (0, i.jsxs)(y.A, {
                                direction: y.A.Direction.VERTICAL,
                                justify: y.A.Justify.CENTER,
                                className: ee.bM,
                                children: [
                                    (0, i.jsx)(h.E, {
                                        variant: "text-md/semibold",
                                        children: (0, i.jsx)(c.A, { children: d.name }),
                                    }),
                                    null != ef && (0, i.jsx)(h.E, { variant: "text-sm/normal", children: ef }),
                                ],
                            }),
                        ],
                    }),
                    em
                        ? (0, i.jsx)(F.A, {
                              className: ee.lI,
                              subscriptionTier: J.pe.TIER_2,
                              size: _.$n.Sizes.SMALL,
                              fullWidth: !0,
                              textOptions: { textOverride: e_.text },
                              onSubscribeModalClose: (e) => (e ? s() : O()),
                              postSuccessGuild: u ? (v ?? void 0) : void 0,
                              premiumModalAnalyticsLocation: er,
                          })
                        : eE
                          ? (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: ee.lI,
                                children: (0, i.jsx)(E.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: e_.text,
                                    fullWidth: !0,
                                    onClick: s,
                                }),
                            })
                          : void 0,
                    eh &&
                        (0, i.jsx)(U.A, {
                            text: el ? Z.intl.string(Z.t.yma8Vp) : Z.intl.string(Z.t.nN2DIo),
                            size: "sm",
                            fullWidth: !0,
                            onClick: () => {
                                O(),
                                    R?.id != null &&
                                        g.A.transitionToGuildSync(
                                            R.id,
                                            {
                                                sourceLocationStack: [
                                                    I.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                ],
                                            },
                                            Q.VV.ROLE_SUBSCRIPTIONS,
                                        );
                            },
                        }),
                ],
            })),
            eI &&
                ((n = null != v && !et && ei && (v?.emojis?.length ?? 0) > 1),
                (0, i.jsxs)("div", {
                    className: ee.tl,
                    children: [
                        (0, i.jsx)(h.E, {
                            className: ee.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: et ? Z.intl.string(Z.t.ohTzZH) : Z.intl.string(Z.t["eLfh+a"]),
                        }),
                        (0, i.jsx)(en, {
                            expressionSourceGuild: v ?? D.GO.createFromGuildRecord(R),
                            hasJoinedExpressionSourceGuild: et,
                            isDisplayingJoinGuildButtonInPopout: eE,
                        }),
                        n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ((t = Z.intl.string(Z.t.pnsAS2)),
                                    (0, i.jsx)(f.D, {
                                        onClick: function () {
                                            n &&
                                                (b?.(),
                                                eg ||
                                                    P ||
                                                    Y.default.track(L.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ep),
                                                eA(!eg));
                                        },
                                        className: ee.wK,
                                        children: (0, i.jsxs)(y.A, {
                                            children: [
                                                (0, i.jsx)(h.E, {
                                                    className: ee.__invalid_showMoreEmojisLabel,
                                                    "aria-label": t,
                                                    variant: "text-xs/normal",
                                                    color: "none",
                                                    children: t,
                                                }),
                                                (0, i.jsx)(m.a, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: a()(ee.ZB, { [ee.cP]: !eg }),
                                                }),
                                            ],
                                        }),
                                    })),
                                    null != d.emojiId &&
                                        eg &&
                                        (0, i.jsx)(es, {
                                            emojiId: d.emojiId,
                                            expressionSourceGuild: v,
                                            popoutData: e_,
                                            onClose: O,
                                            hasJoinedEmojiSourceGuild: et,
                                            isDisplayingButtonInTopSection: eE || em,
                                        }),
                                ],
                            }),
                    ],
                })),
        ],
    });
}
let es = (e) => {
    let {
            emojiId: t,
            expressionSourceGuild: n,
            hasJoinedEmojiSourceGuild: r,
            popoutData: s,
            onClose: a,
            isDisplayingButtonInTopSection: o,
        } = e,
        l = (n?.emojis ?? [])
            .slice(0, 13)
            .filter((e) => e.id !== t)
            .slice(0, 12),
        { type: u, description: c } = s;
    return (0, i.jsxs)("div", {
        className: ee.LX,
        children: [
            r
                ? null
                : l.map((e) =>
                      (0, i.jsx)(
                          d.m,
                          {
                              text: e.require_colons ? `:${e.name}:` : e.name,
                              ...X.Uk,
                              children: (0, i.jsx)(A.A, { className: ee.Th, emojiId: e.id, animated: e.animated }),
                          },
                          e.id,
                      ),
                  ),
            !o &&
                (u === z.u.GET_PREMIUM
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(F.A, {
                                  subscriptionTier: J.pe.TIER_2,
                                  textOptions: { textOverride: s.text },
                                  className: ee.lI,
                                  fullWidth: !0,
                                  onClick: () => a(),
                              }),
                              null != c &&
                                  (0, i.jsx)("div", {
                                      className: ee.vd,
                                      children: (0, i.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          "aria-label": c,
                                          children: c,
                                      }),
                                  }),
                          ],
                      })
                    : u === z.u.JOIN_GUILD
                      ? (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: ee.lI,
                            children: (0, i.jsx)(E.$, {
                                variant: "primary",
                                size: "sm",
                                text: s.text,
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
