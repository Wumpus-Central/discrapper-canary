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
    p = n(481060),
    _ = n(749210),
    m = n(596454),
    h = n(100527),
    g = n(906732),
    E = n(213609),
    b = n(600164),
    y = n(686546),
    O = n(738774),
    v = n(785896),
    S = n(231053),
    I = n(944386),
    T = n(565138),
    A = n(372769),
    C = n(889564),
    N = n(687476),
    P = n(761966),
    R = n(563927),
    w = n(98278),
    D = n(767714),
    x = n(703656),
    L = n(944486),
    j = n(914010),
    M = n(594174),
    k = n(626135),
    U = n(768581),
    G = n(900849),
    Z = n(74538),
    B = n(886132),
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
function Q(e, t) {
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
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = 32,
    $ = 12,
    ee = () => ({
        page: null != (0, l.e7)([j.Z], () => j.Z.getGuildId()) ? V.ZY5.GUILD_CHANNEL : V.ZY5.DM_CHANNEL,
        section: V.jXE.EMOJI_UPSELL_POPOUT,
    }),
    et = (e) => {
        let { node: t } = e;
        (0, I.u)({
            emojiId: t.emojiId,
            currentGuildId: j.Z.getGuildId(),
        });
        let n = (0, R.Z)(t.name);
        return (0, r.jsx)(c.V, {
            children: (0, r.jsx)(F.W_, {
                children: (0, r.jsxs)(b.Z, {
                    className: K.emojiSection,
                    children: [
                        (0, r.jsx)(m.Z, {
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
                                (0, r.jsx)(p.Text, {
                                    className: K.__invalid_emojiName,
                                    variant: "text-md/semibold",
                                    children: (0, r.jsx)(u.Z, { children: n }),
                                }),
                                (0, r.jsx)(p.Text, {
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
            _ = () => {
                t.isDiscoverable() ? (0, G.Ub)(a, {}) : n && (0, x.uL)(V.Z5c.CHANNEL(a, L.Z.getChannelId(a)));
            },
            m = () =>
                null != d && f
                    ? (0, r.jsxs)(p.P3F, {
                          "aria-label": l,
                          onClick: _,
                          children: [
                              (0, r.jsx)("img", {
                                  src: d,
                                  alt: "",
                                  className: K.guildIcon,
                              }),
                              " :",
                          ],
                      })
                    : (0, r.jsx)(T.Z, {
                          size: T.Z.Sizes.SMALL,
                          className: K.guildIconNotClickable,
                          guild: t,
                      }),
            h = () =>
                f
                    ? (0, r.jsx)(p.P3F, {
                          onClick: _,
                          className: K.truncatingText,
                          children: (0, r.jsx)(p.Heading, {
                              className: K.guildName,
                              variant: "heading-md/semibold",
                              children: (0, r.jsx)(u.Z, { children: l }),
                          }),
                      })
                    : (0, r.jsx)(p.Heading, {
                          variant: "heading-md/semibold",
                          children: (0, r.jsx)(u.Z, { children: l }),
                      }),
            g = t.isDiscoverable() && null != t.presenceCount,
            E = () => {
                let e = !i && !n;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: W.intl.format(W.t["LC+S+m"], { membersOnline: t.presenceCount }),
                        }),
                        (0, r.jsx)("div", { className: K.dotSeparator }),
                        e
                            ? (0, r.jsx)(p.P3F, {
                                  className: K.joinGuildLink,
                                  onClick: _,
                                  children: (0, r.jsx)(p.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-link",
                                      children: W.intl.string(W.t.riu2R5),
                                  }),
                              })
                            : (0, r.jsx)(p.Text, {
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
                    : (0, r.jsx)(p.Text, {
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
                    children: m(),
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
                                h(),
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
                joinedEmojiSourceGuildRecord: T,
                closePopout: A,
                onToggleShowMoreEmojis: R,
                guildEmoji: x,
                demoMode: L = !1,
                nonce: U,
            } = e,
            G = (0, l.e7)([M.default], () => M.default.getCurrentUser()),
            z = (0, l.e7)([j.Z], () => j.Z.getGuildId()),
            q = Z.ZP.isPremium(G),
            Q = null != z && (z === (null == v ? void 0 : v.id) || z === (null == T ? void 0 : T.id)),
            X = null != T,
            J = null != (t = null == v ? void 0 : v.isDiscoverable()) && t;
        L && ((q = !0), (J = !0), (X = !1), (Q = !1));
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
            { analyticsLocations: es } = (0, g.ZP)(h.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
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
        let el = j.Z.getGuildId(),
            ec = (0, B.a)({
                sourceType: d,
                expressionSourceApplication: y,
                isPremium: q,
                hasJoinedEmojiSourceGuild: X,
                isRoleSubscriptionEmoji: et,
                isUnusableRoleSubscriptionEmoji: er,
                userIsRoleSubscriber: ei,
                emojiComesFromCurrentGuild: Q,
                isDiscoverable: J,
                shouldHideRoleSubscriptionCTA: eo,
                onOpenPremiumSettings: () => {
                    A(),
                        k.default.track(V.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_page: $.page,
                            location_section: $.section,
                        }),
                        (0, w.z)();
                },
            }),
            eu = X && er && !eo && ((q && et) || !q),
            ed = ec.emojiDescription,
            ef = (0, I.u)({
                emojiId: c.emojiId,
                currentGuildId: el,
                popoutData: ec,
                emojiSourceGuildId: null == v ? void 0 : v.id,
                nonce: U,
                demoMode: L,
            }),
            ep = ec.type === B.$.JOIN_GUILD,
            e_ = ec.type === B.$.GET_PREMIUM,
            em = () => {
                let e = async () => {
                        if (L || null == v || X) return;
                        A();
                        let e = v.id;
                        try {
                            await _.Z.joinGuild(e), _.Z.transitionToGuildSync(e);
                        } catch (e) {}
                    },
                    t = () => {
                        A(),
                            (null == T ? void 0 : T.id) != null &&
                                _.Z.transitionToGuildSync(
                                    T.id,
                                    { sourceLocationStack: [h.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL] },
                                    H.oC.ROLE_SUBSCRIPTIONS,
                                );
                    },
                    n = !X && J,
                    i = () =>
                        e_
                            ? (0, r.jsx)(D.Z, {
                                  className: K.ctaButton,
                                  subscriptionTier: Y.Si.TIER_2,
                                  size: f.zx.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: ec.text },
                                  onSubscribeModalClose: (t) => (t ? e() : A()),
                                  postSuccessGuild: n && null != v ? v : void 0,
                                  premiumModalAnalyticsLocation: $,
                              })
                            : ep
                              ? (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: K.ctaButton,
                                    children: (0, r.jsx)(p.Button, {
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
                                (0, r.jsx)(m.Z, {
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
                                        (0, r.jsx)(p.Text, {
                                            variant: "text-md/semibold",
                                            children: (0, r.jsx)(u.Z, { children: c.name }),
                                        }),
                                        null != ed &&
                                            (0, r.jsx)(p.Text, {
                                                variant: "text-sm/normal",
                                                children: ed,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        i(),
                        eu &&
                            (0, r.jsx)(P.Z, {
                                text: ei ? W.intl.string(W.t.yma8Vp) : W.intl.string(W.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: t,
                            }),
                    ],
                });
            },
            [eh, eg] = i.useState(!1),
            eE = () => {
                var e, t;
                let n =
                        null != v &&
                        !X &&
                        J &&
                        (null != (t = null == v || null == (e = v.emojis) ? void 0 : e.length) ? t : 0) > 1,
                    i = () => {
                        n &&
                            (null == R || R(),
                            eh || L || k.default.track(V.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ef),
                            eg(!eh));
                    },
                    a = () => {
                        let e = W.intl.string(W.t.pnsAS2);
                        return (0, r.jsx)(p.P3F, {
                            onClick: i,
                            className: K.showMoreEmojis,
                            children: (0, r.jsxs)(b.Z, {
                                children: [
                                    (0, r.jsx)(p.Text, {
                                        className: K.__invalid_showMoreEmojisLabel,
                                        "aria-label": e,
                                        variant: "text-xs/normal",
                                        color: "none",
                                        children: e,
                                    }),
                                    (0, r.jsx)(p.CJ0, {
                                        size: "md",
                                        color: "currentColor",
                                        className: o()(K.showMoreEmojisArrow, {
                                            [K.showMoreEmojisArrowCollapsed]: !eh,
                                        }),
                                    }),
                                ],
                            }),
                        });
                    };
                return (0, r.jsxs)("div", {
                    className: K.guildSection,
                    children: [
                        (0, r.jsx)(p.Text, {
                            className: K.guildTitle,
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: X ? W.intl.string(W.t.ohTzZH) : W.intl.string(W.t["eLfh+a"]),
                        }),
                        (0, r.jsx)(en, {
                            expressionSourceGuild: null != v ? v : S.JO.createFromGuildRecord(T),
                            hasJoinedExpressionSourceGuild: X,
                            isDisplayingJoinGuildButtonInPopout: ep,
                        }),
                        n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    a(),
                                    null != c.emojiId &&
                                        eh &&
                                        (0, r.jsx)(ea, {
                                            emojiId: c.emojiId,
                                            expressionSourceGuild: v,
                                            popoutData: ec,
                                            onClose: A,
                                            hasJoinedEmojiSourceGuild: X,
                                            isDisplayingButtonInTopSection: ep || e_,
                                        }),
                                ],
                            }),
                    ],
                });
            },
            eb = J || (X && !Q) || null != v;
        return (0, r.jsxs)(F.W_, {
            className: K.popoutContent,
            children: [em(), eb && eE()],
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
                              X(q({ text: e.require_colons ? ":".concat(e.name, ":") : e.name }, F.b_), {
                                  children: (0, r.jsx)(m.Z, {
                                      className: K.otherEmoji,
                                      emojiId: e.id,
                                      animated: e.animated,
                                  }),
                              }),
                              e.id,
                          ),
                      ),
            { type: f, description: _ } = o,
            h = () =>
                f === B.$.GET_PREMIUM
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(D.Z, {
                                  subscriptionTier: Y.Si.TIER_2,
                                  textOptions: { textOverride: o.text },
                                  className: K.ctaButton,
                                  fullWidth: !0,
                                  onClick: () => s(),
                              }),
                              null != _ &&
                                  (0, r.jsx)("div", {
                                      className: K.ctaDescription,
                                      children: (0, r.jsx)(p.Text, {
                                          variant: "text-sm/medium",
                                          "aria-label": _,
                                          children: _,
                                      }),
                                  }),
                          ],
                      })
                    : f === B.$.JOIN_GUILD
                      ? (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: K.ctaButton,
                            children: (0, r.jsx)(p.Button, {
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
            children: [u(), !l && h()],
        });
    };
