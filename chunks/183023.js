n.d(t, {
    Az: () => et,
    Oe: () => en,
    UA: () => ei,
    n_: () => ea,
    vk: () => er,
}),
    n(388685),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    l = n(442837),
    c = n(507274),
    u = n(194983),
    d = n(28664),
    f = n(755721),
    _ = n(481060),
    p = n(749210),
    h = n(596454),
    m = n(100527),
    g = n(906732),
    E = n(213609),
    b = n(600164),
    y = n(686546),
    O = n(738774),
    v = n(785896),
    I = n(231053),
    T = n(944386),
    S = n(565138),
    A = n(372769),
    C = n(889564),
    N = n(687476),
    R = n(761966),
    P = n(563927),
    D = n(98278),
    w = n(767714),
    x = n(703656),
    L = n(944486),
    M = n(914010),
    k = n(594174),
    j = n(626135),
    U = n(768581),
    G = n(900849),
    B = n(74538),
    Z = n(886132),
    F = n(524444),
    V = n(981631),
    H = n(176505),
    Y = n(474936),
    W = n(388032),
    K = n(975900);
function z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                z(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = 32,
    $ = 12,
    ee = () => ({
        page: null != (0, l.e7)([M.Z], () => M.Z.getGuildId()) ? V.ZY5.GUILD_CHANNEL : V.ZY5.DM_CHANNEL,
        section: V.jXE.EMOJI_UPSELL_POPOUT,
    }),
    et = (e) => {
        let { node: t } = e;
        (0, T.u)({
            emojiId: t.emojiId,
            currentGuildId: M.Z.getGuildId(),
        });
        let n = (0, P.Z)(t.name);
        return (0, r.jsx)(c.V, {
            children: (0, r.jsx)(F.W_, {
                children: (0, r.jsxs)(b.Z, {
                    className: K.emojiSection,
                    children: [
                        (0, r.jsx)(h.Z, {
                            emojiName: t.name,
                            className: K.primaryEmoji,
                            src: t.src,
                            animated: !1,
                            size: "jumbo",
                        }),
                        (0, r.jsxs)(b.Z, {
                            direction: b.Z.Direction.VERTICAL,
                            justify: b.Z.Justify.CENTER,
                            className: K.truncatingText,
                            children: [
                                (0, r.jsx)(_.Text, {
                                    className: K.__invalid_emojiName,
                                    variant: "text-md/semibold",
                                    children: (0, r.jsx)(u.Z, { children: n }),
                                }),
                                (0, r.jsx)(_.Text, {
                                    variant: "text-sm/normal",
                                    children: W.intl.string(W.t.sXdH8c),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    en = (e) => {
        let { expressionSourceGuild: t, hasJoinedExpressionSourceGuild: n, isDisplayingJoinGuildButtonInPopout: i } = e,
            { id: a, icon: s, name: l } = t,
            c = J,
            d = U.ZP.getGuildIconURL({
                id: a,
                icon: s,
                size: c,
                canAnimate: !0,
            }),
            f = (n = null == n || n) || t.isDiscoverable(),
            p = () => {
                t.isDiscoverable() ? (0, G.Ub)(a, {}) : n && (0, x.uL)(V.Z5c.CHANNEL(a, L.Z.getChannelId(a)));
            },
            h = () =>
                null != d && f
                    ? (0, r.jsxs)(_.P3F, {
                          "aria-label": l,
                          onClick: p,
                          children: [
                              (0, r.jsx)("img", {
                                  src: d,
                                  alt: "",
                                  className: K.guildIcon,
                              }),
                              " :",
                          ],
                      })
                    : (0, r.jsx)(S.Z, {
                          size: S.Z.Sizes.SMALL,
                          className: K.guildIconNotClickable,
                          guild: t,
                      }),
            m = () =>
                f
                    ? (0, r.jsx)(_.P3F, {
                          onClick: p,
                          className: K.truncatingText,
                          children: (0, r.jsx)(_.Heading, {
                              className: K.guildName,
                              variant: "heading-md/semibold",
                              children: (0, r.jsx)(u.Z, { children: l }),
                          }),
                      })
                    : (0, r.jsx)(_.Heading, {
                          variant: "heading-md/semibold",
                          children: (0, r.jsx)(u.Z, { children: l }),
                      }),
            g = t.isDiscoverable() && null != t.presenceCount,
            E = () => {
                let e = !i && !n;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(_.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: W.intl.format(W.t["LC+S+m"], { membersOnline: t.presenceCount }),
                        }),
                        (0, r.jsx)("div", { className: K.dotSeparator }),
                        e
                            ? (0, r.jsx)(_.P3F, {
                                  className: K.joinGuildLink,
                                  onClick: p,
                                  children: (0, r.jsx)(_.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-link",
                                      children: W.intl.string(W.t.riu2R5),
                                  }),
                              })
                            : (0, r.jsx)(_.Text, {
                                  variant: "text-xs/normal",
                                  color: "header-secondary",
                                  children: W.intl.string(W.t.inyJqO),
                              }),
                    ],
                });
            },
            O = () =>
                g
                    ? E()
                    : (0, r.jsx)(_.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: W.intl.string(W.t.H29mx4),
                      });
        return (0, r.jsxs)(b.Z, {
            align: b.Z.Align.CENTER,
            children: [
                (0, r.jsx)(y.ZP, {
                    mask: y.ZP.Masks.SQUIRCLE,
                    width: c,
                    height: c,
                    className: K.__invalid_guildIconContainer,
                    children: h(),
                }),
                (0, r.jsxs)(b.Z, {
                    direction: b.Z.Direction.VERTICAL,
                    className: o()(K.__invalid_guildInformation, K.truncatingText),
                    children: [
                        (0, r.jsxs)(b.Z, {
                            align: b.Z.Align.CENTER,
                            children: [
                                (0, r.jsx)(A.Z, {
                                    guild: t,
                                    className: K.guildBadge,
                                }),
                                m(),
                            ],
                        }),
                        (0, r.jsx)(b.Z, {
                            align: b.Z.Align.CENTER,
                            children: O(),
                        }),
                    ],
                }),
            ],
        });
    },
    er = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: i, nonce: a } = e,
            {
                expressionSourceGuild: o,
                expressionSourceApplication: s,
                sourceType: l,
                joinedEmojiSourceGuildRecord: u,
                emoji: d,
                isFetching: f,
            } = (0, v.i)({
                emojiId: t.emojiId,
                refreshPositionKey: i,
            });
        return f
            ? (0, r.jsx)(F.SE, {})
            : (0, r.jsx)(c.V, {
                  "aria-label": t.name,
                  children: (0, r.jsx)(ei, {
                      node: t,
                      sourceType: l,
                      expressionSourceApplication: s,
                      guildEmoji: null != d ? d : void 0,
                      expressionSourceGuild: o,
                      joinedEmojiSourceGuildRecord: u,
                      closePopout: n,
                      onToggleShowMoreEmojis: i,
                      demoMode: !1,
                      nonce: a,
                  }),
              });
    },
    ei = (e) => {
        var t, n, a;
        let {
                node: c,
                sourceType: d,
                expressionSourceApplication: y,
                expressionSourceGuild: v,
                joinedEmojiSourceGuildRecord: S,
                closePopout: A,
                onToggleShowMoreEmojis: P,
                guildEmoji: x,
                demoMode: L = !1,
                nonce: U,
            } = e,
            G = (0, l.e7)([k.default], () => k.default.getCurrentUser()),
            z = (0, l.e7)([M.Z], () => M.Z.getGuildId()),
            q = B.ZP.isPremium(G),
            X = null != z && (z === (null == v ? void 0 : v.id) || z === (null == S ? void 0 : S.id)),
            Q = null != S,
            J = null != (t = null == v ? void 0 : v.isDiscoverable()) && t;
        L && ((q = !0), (J = !0), (Q = !1), (X = !1));
        let $ = ee(),
            {
                isRoleSubscriptionEmoji: et,
                isUnusableRoleSubscriptionEmoji: er,
                userIsRoleSubscriber: ei,
            } = i.useMemo(
                () =>
                    null == x
                        ? {
                              isRoleSubscriptionEmoji: !1,
                              isUnusableRoleSubscriptionEmoji: !1,
                              userIsRoleSubscriber: !1,
                          }
                        : {
                              isRoleSubscriptionEmoji: C.yH(x),
                              isUnusableRoleSubscriptionEmoji: C.Fv(x, null != z ? z : void 0),
                              userIsRoleSubscriber: N.Z.getUserSubscriptionRoles(x.guildId).size > 0,
                          },
                [x, z],
            ),
            eo = !!er && (0, O.Ol)(null == x ? void 0 : x.guildId),
            { analyticsLocations: es } = (0, g.ZP)(m.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, E.Z)(
            {
                type: s.ImpressionTypes.MODAL,
                name: s.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: es,
                    emoji_guild_id: null != (n = null == x ? void 0 : x.guildId) ? n : null,
                    emoji_id: null != (a = null == x ? void 0 : x.id) ? a : null,
                },
            },
            { disableTrack: !et },
        );
        let el = M.Z.getGuildId(),
            ec = (0, Z.a)({
                sourceType: d,
                expressionSourceApplication: y,
                isPremium: q,
                hasJoinedEmojiSourceGuild: Q,
                isRoleSubscriptionEmoji: et,
                isUnusableRoleSubscriptionEmoji: er,
                userIsRoleSubscriber: ei,
                emojiComesFromCurrentGuild: X,
                isDiscoverable: J,
                shouldHideRoleSubscriptionCTA: eo,
                onOpenPremiumSettings: () => {
                    A(),
                        j.default.track(V.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_page: $.page,
                            location_section: $.section,
                        }),
                        (0, D.z)();
                },
            }),
            eu = Q && er && !eo && ((q && et) || !q),
            ed = ec.emojiDescription,
            ef = (0, T.u)({
                emojiId: c.emojiId,
                currentGuildId: el,
                popoutData: ec,
                emojiSourceGuildId: null == v ? void 0 : v.id,
                nonce: U,
                demoMode: L,
            }),
            e_ = ec.type === Z.$.JOIN_GUILD,
            ep = ec.type === Z.$.GET_PREMIUM,
            eh = () => {
                let e = async () => {
                        if (L || null == v || Q) return;
                        A();
                        let e = v.id;
                        try {
                            await p.Z.joinGuild(e), p.Z.transitionToGuildSync(e);
                        } catch (e) {}
                    },
                    t = () => {
                        A(),
                            (null == S ? void 0 : S.id) != null &&
                                p.Z.transitionToGuildSync(
                                    S.id,
                                    { sourceLocationStack: [m.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL] },
                                    H.oC.ROLE_SUBSCRIPTIONS,
                                );
                    },
                    n = !Q && J,
                    i = () =>
                        ep
                            ? (0, r.jsx)(w.Z, {
                                  className: K.ctaButton,
                                  subscriptionTier: Y.Si.TIER_2,
                                  size: f.zx.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: ec.text },
                                  onSubscribeModalClose: (t) => (t ? e() : A()),
                                  postSuccessGuild: n && null != v ? v : void 0,
                                  premiumModalAnalyticsLocation: $,
                              })
                            : e_
                              ? (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: K.ctaButton,
                                    children: (0, r.jsx)(_.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ec.text,
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                })
                              : void 0;
                return (0, r.jsxs)("div", {
                    className: K.emojiSection,
                    children: [
                        (0, r.jsxs)(b.Z, {
                            children: [
                                (0, r.jsx)(h.Z, {
                                    className: K.primaryEmoji,
                                    emojiId: c.emojiId,
                                    emojiName: c.name,
                                    animated: c.animated,
                                    size: "jumbo",
                                }),
                                (0, r.jsxs)(b.Z, {
                                    direction: b.Z.Direction.VERTICAL,
                                    justify: b.Z.Justify.CENTER,
                                    className: K.truncatingText,
                                    children: [
                                        (0, r.jsx)(_.Text, {
                                            variant: "text-md/semibold",
                                            children: (0, r.jsx)(u.Z, { children: c.name }),
                                        }),
                                        null != ed &&
                                            (0, r.jsx)(_.Text, {
                                                variant: "text-sm/normal",
                                                children: ed,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        i(),
                        eu &&
                            (0, r.jsx)(R.Z, {
                                text: ei ? W.intl.string(W.t.yma8Vp) : W.intl.string(W.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: t,
                            }),
                    ],
                });
            },
            [em, eg] = i.useState(!1),
            eE = () => {
                var e, t;
                let n =
                        null != v &&
                        !Q &&
                        J &&
                        (null != (t = null == v || null == (e = v.emojis) ? void 0 : e.length) ? t : 0) > 1,
                    i = () => {
                        n &&
                            (null == P || P(),
                            em || L || j.default.track(V.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ef),
                            eg(!em));
                    },
                    a = () => {
                        let e = W.intl.string(W.t.pnsAS2);
                        return (0, r.jsx)(_.P3F, {
                            onClick: i,
                            className: K.showMoreEmojis,
                            children: (0, r.jsxs)(b.Z, {
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        className: K.__invalid_showMoreEmojisLabel,
                                        "aria-label": e,
                                        variant: "text-xs/normal",
                                        color: "none",
                                        children: e,
                                    }),
                                    (0, r.jsx)(_.CJ0, {
                                        size: "md",
                                        color: "currentColor",
                                        className: o()(K.showMoreEmojisArrow, {
                                            [K.showMoreEmojisArrowCollapsed]: !em,
                                        }),
                                    }),
                                ],
                            }),
                        });
                    };
                return (0, r.jsxs)("div", {
                    className: K.guildSection,
                    children: [
                        (0, r.jsx)(_.Text, {
                            className: K.guildTitle,
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: Q ? W.intl.string(W.t.ohTzZH) : W.intl.string(W.t["eLfh+a"]),
                        }),
                        (0, r.jsx)(en, {
                            expressionSourceGuild: null != v ? v : I.JO.createFromGuildRecord(S),
                            hasJoinedExpressionSourceGuild: Q,
                            isDisplayingJoinGuildButtonInPopout: e_,
                        }),
                        n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    a(),
                                    null != c.emojiId &&
                                        em &&
                                        (0, r.jsx)(ea, {
                                            emojiId: c.emojiId,
                                            expressionSourceGuild: v,
                                            popoutData: ec,
                                            onClose: A,
                                            hasJoinedEmojiSourceGuild: Q,
                                            isDisplayingButtonInTopSection: e_ || ep,
                                        }),
                                ],
                            }),
                    ],
                });
            },
            eb = J || (Q && !X) || null != v;
        return (0, r.jsxs)(F.W_, {
            className: K.popoutContent,
            children: [eh(), eb && eE()],
        });
    },
    ea = (e) => {
        var t;
        let {
                emojiId: n,
                expressionSourceGuild: i,
                hasJoinedEmojiSourceGuild: a,
                popoutData: o,
                onClose: s,
                isDisplayingButtonInTopSection: l,
            } = e,
            c = (null != (t = null == i ? void 0 : i.emojis) ? t : [])
                .slice(0, $ + 1)
                .filter((e) => e.id !== n)
                .slice(0, $),
            u = () =>
                a
                    ? null
                    : c.map((e) =>
                          (0, r.jsx)(
                              d.u,
                              Q(q({ text: e.require_colons ? ":".concat(e.name, ":") : e.name }, F.b_), {
                                  children: (0, r.jsx)(h.Z, {
                                      className: K.otherEmoji,
                                      emojiId: e.id,
                                      animated: e.animated,
                                  }),
                              }),
                              e.id,
                          ),
                      ),
            { type: f, description: p } = o,
            m = () =>
                f === Z.$.GET_PREMIUM
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(w.Z, {
                                  subscriptionTier: Y.Si.TIER_2,
                                  textOptions: { textOverride: o.text },
                                  className: K.ctaButton,
                                  fullWidth: !0,
                                  onClick: () => s(),
                              }),
                              null != p &&
                                  (0, r.jsx)("div", {
                                      className: K.ctaDescription,
                                      children: (0, r.jsx)(_.Text, {
                                          variant: "text-sm/medium",
                                          "aria-label": p,
                                          children: p,
                                      }),
                                  }),
                          ],
                      })
                    : f === Z.$.JOIN_GUILD
                      ? (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: K.ctaButton,
                            children: (0, r.jsx)(_.Button, {
                                variant: "primary",
                                size: "sm",
                                text: o.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, G.Ub)(i.id, {});
                                },
                            }),
                        })
                      : null;
        return (0, r.jsxs)("div", {
            className: K.otherEmojisContainer,
            children: [u(), !l && m()],
        });
    };
