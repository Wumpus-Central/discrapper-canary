n.d(t, {
    G7: () => en,
    MV: () => et,
    iP: () => er,
    mG: () => ea,
    sX: () => ei,
}),
    n(896048),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(110259),
    l = n(311907),
    c = n(305866),
    u = n(3026),
    d = n(990078),
    f = n(421380),
    p = n(397927),
    _ = n(686956),
    h = n(565645),
    m = n(793574),
    g = n(688810),
    E = n(139286),
    b = n(235986),
    y = n(573435),
    O = n(836039),
    A = n(695282),
    v = n(624793),
    S = n(731383),
    I = n(263063),
    T = n(714991),
    C = n(492494),
    N = n(384684),
    R = n(985242),
    w = n(87719),
    P = n(465794),
    D = n(976860),
    x = n(309010),
    L = n(967198),
    j = n(287809),
    M = n(954571),
    k = n(486020),
    U = n(449054),
    G = n(927578),
    V = n(450707),
    F = n(252061),
    B = n(652176),
    H = n(652215),
    Y = n(746080),
    W = n(788868),
    K = n(985018),
    z = n(767419);

function q(e, t, n) {
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

function X(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}

function Z(e, t) {
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
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let $ = 32,
    J = 12,
    ee = () => ({
        page: null != (0, l.bG)([L.A], () => L.A.getGuildId()) ? H.liQ.GUILD_CHANNEL : H.liQ.DM_CHANNEL,
        section: H.JJy.EMOJI_UPSELL_POPOUT,
    }),
    et = (e) => {
        let { node: t } = e;
        (0, S.i)({
            emojiId: t.emojiId,
            currentGuildId: L.A.getGuildId(),
        });
        let n = (0, F.A)(t.name),
            i = n !== t.name;
        return (0, r.jsx)(c.l, {
            children: (0, r.jsx)(B.Uq, {
                children: (0, r.jsxs)(b.A, {
                    className: z.gH,
                    children: [
                        (0, r.jsx)(h.A, {
                            emojiName: t.name,
                            className: z.P$,
                            src: t.src,
                            animated: !1,
                            size: "jumbo",
                        }),
                        (0, r.jsxs)(b.A, {
                            direction: b.A.Direction.VERTICAL,
                            justify: b.A.Justify.CENTER,
                            className: z.bM,
                            children: [
                                (0, r.jsx)(p.Text, {
                                    className: z.__invalid_emojiName,
                                    variant: "text-md/semibold",
                                    children: i
                                        ? (0, r.jsx)("div", {
                                              className: z.Gl,
                                              children: n,
                                          })
                                        : (0, r.jsx)(u.A, {
                                              children: n,
                                          }),
                                }),
                                (0, r.jsx)(p.Text, {
                                    variant: "text-sm/normal",
                                    children: K.intl.string(K.t.sXdH8c),
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
            { id: a, icon: o, name: l } = t,
            c = $,
            d = k.Ay.getGuildIconURL({
                id: a,
                icon: o,
                size: c,
                canAnimate: !0,
            }),
            f = (n = null == n || n) || t.isDiscoverable(),
            _ = () => {
                t.isDiscoverable() ? (0, U.Z2)(a, {}) : n && (0, D.pX)(H.BVt.CHANNEL(a, x.A.getChannelId(a)));
            },
            h = () =>
                null != d && f
                    ? (0, r.jsxs)(p.DUT, {
                          "aria-label": l,
                          onClick: _,
                          children: [
                              (0, r.jsx)("img", {
                                  src: d,
                                  alt: "",
                                  className: z.$f,
                              }),
                              " :",
                          ],
                      })
                    : (0, r.jsx)(I.A, {
                          size: I.A.Sizes.SMALL,
                          className: z.oi,
                          guild: t,
                      }),
            m = () =>
                f
                    ? (0, r.jsx)(p.DUT, {
                          onClick: _,
                          className: z.bM,
                          children: (0, r.jsx)(p.Heading, {
                              className: z.J5,
                              variant: "heading-md/semibold",
                              children: (0, r.jsx)(u.A, {
                                  children: l,
                              }),
                          }),
                      })
                    : (0, r.jsx)(p.Heading, {
                          variant: "heading-md/semibold",
                          children: (0, r.jsx)(u.A, {
                              children: l,
                          }),
                      }),
            g = t.isDiscoverable() && null != t.presenceCount,
            E = () => {
                let e = !i && !n;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: K.intl.format(K.t["LC+S+m"], {
                                membersOnline: t.presenceCount,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: z.zk,
                        }),
                        e
                            ? (0, r.jsx)(p.DUT, {
                                  className: z.Ki,
                                  onClick: _,
                                  children: (0, r.jsx)(p.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-link",
                                      children: K.intl.string(K.t.riu2R5),
                                  }),
                              })
                            : (0, r.jsx)(p.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: K.intl.string(K.t.inyJqO),
                              }),
                    ],
                });
            },
            O = () =>
                g
                    ? E()
                    : (0, r.jsx)(p.Text, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: K.intl.string(K.t.H29mx4),
                      });
        return (0, r.jsxs)(b.A, {
            align: b.A.Align.CENTER,
            children: [
                (0, r.jsx)(y.Ay, {
                    mask: y.Ay.Masks.SQUIRCLE,
                    width: c,
                    height: c,
                    className: z.__invalid_guildIconContainer,
                    children: h(),
                }),
                (0, r.jsxs)(b.A, {
                    direction: b.A.Direction.VERTICAL,
                    className: s()(z.__invalid_guildInformation, z.bM),
                    children: [
                        (0, r.jsxs)(b.A, {
                            align: b.A.Align.CENTER,
                            children: [
                                (0, r.jsx)(T.A, {
                                    guild: t,
                                    className: z.n2,
                                }),
                                m(),
                            ],
                        }),
                        (0, r.jsx)(b.A, {
                            align: b.A.Align.CENTER,
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
                expressionSourceGuild: s,
                expressionSourceApplication: o,
                sourceType: l,
                joinedEmojiSourceGuildRecord: u,
                emoji: d,
                isFetching: f,
            } = (0, A.y)({
                emojiId: t.emojiId,
                refreshPositionKey: i,
            });
        return f
            ? (0, r.jsx)(B.Y0, {})
            : (0, r.jsx)(c.l, {
                  "aria-label": t.name,
                  children: (0, r.jsx)(ei, {
                      node: t,
                      sourceType: l,
                      expressionSourceApplication: o,
                      guildEmoji: null != d ? d : void 0,
                      expressionSourceGuild: s,
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
                expressionSourceGuild: A,
                joinedEmojiSourceGuildRecord: I,
                closePopout: T,
                onToggleShowMoreEmojis: D,
                guildEmoji: x,
                demoMode: k = !1,
                nonce: U,
            } = e,
            F = (0, l.bG)([j.default], () => j.default.getCurrentUser()),
            q = (0, l.bG)([L.A], () => L.A.getGuildId()),
            X = G.Ay.isPremium(F),
            Z = null != q && (q === (null == A ? void 0 : A.id) || q === (null == I ? void 0 : I.id)),
            Q = null != I,
            $ = null != (t = null == A ? void 0 : A.isDiscoverable()) && t;
        k && ((X = !0), ($ = !0), (Q = !1), (Z = !1));
        let J = ee(),
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
                              isRoleSubscriptionEmoji: C.kT(x),
                              isUnusableRoleSubscriptionEmoji: C.JN(x, null != q ? q : void 0),
                              userIsRoleSubscriber: N.A.getUserSubscriptionRoles(x.guildId).size > 0,
                          },
                [x, q],
            ),
            es = !!er && (0, O.tE)(null == x ? void 0 : x.guildId),
            { analyticsLocations: eo } = (0, g.Ay)(m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, E.A)(
            {
                type: o.ImpressionTypes.MODAL,
                name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: eo,
                    emoji_guild_id: null != (n = null == x ? void 0 : x.guildId) ? n : null,
                    emoji_id: null != (a = null == x ? void 0 : x.id) ? a : null,
                },
            },
            {
                disableTrack: !et,
            },
        );
        let el = L.A.getGuildId(),
            ec = (0, V.O)({
                sourceType: d,
                expressionSourceApplication: y,
                isPremium: X,
                hasJoinedEmojiSourceGuild: Q,
                isRoleSubscriptionEmoji: et,
                isUnusableRoleSubscriptionEmoji: er,
                userIsRoleSubscriber: ei,
                emojiComesFromCurrentGuild: Z,
                isDiscoverable: $,
                shouldHideRoleSubscriptionCTA: es,
                onOpenPremiumSettings: () => {
                    T(),
                        M.default.track(H.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_page: J.page,
                            location_section: J.section,
                        }),
                        (0, w.Z)();
                },
            }),
            eu = Q && er && !es && ((X && et) || !X),
            ed = ec.emojiDescription,
            ef = (0, S.i)({
                emojiId: c.emojiId,
                currentGuildId: el,
                popoutData: ec,
                emojiSourceGuildId: null == A ? void 0 : A.id,
                nonce: U,
                demoMode: k,
            }),
            ep = ec.type === V.u.JOIN_GUILD,
            e_ = ec.type === V.u.GET_PREMIUM,
            eh = () => {
                let e = async () => {
                        if (k || null == A || Q) return;
                        T();
                        let e = A.id;
                        try {
                            await _.A.joinGuild(e), _.A.transitionToGuildSync(e);
                        } catch (e) {}
                    },
                    t = () => {
                        T(),
                            (null == I ? void 0 : I.id) != null &&
                                _.A.transitionToGuildSync(
                                    I.id,
                                    {
                                        sourceLocationStack: [m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL],
                                    },
                                    Y.VV.ROLE_SUBSCRIPTIONS,
                                );
                    },
                    n = !Q && $,
                    i = () =>
                        e_
                            ? (0, r.jsx)(P.A, {
                                  className: z.lI,
                                  subscriptionTier: W.pe.TIER_2,
                                  size: f.$n.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: {
                                      textOverride: ec.text,
                                  },
                                  onSubscribeModalClose: (t) => (t ? e() : T()),
                                  postSuccessGuild: n && null != A ? A : void 0,
                                  premiumModalAnalyticsLocation: J,
                              })
                            : ep
                              ? (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: z.lI,
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
                    className: z.gH,
                    children: [
                        (0, r.jsxs)(b.A, {
                            children: [
                                (0, r.jsx)(h.A, {
                                    className: z.P$,
                                    emojiId: c.emojiId,
                                    emojiName: c.name,
                                    animated: c.animated,
                                    size: "jumbo",
                                }),
                                (0, r.jsxs)(b.A, {
                                    direction: b.A.Direction.VERTICAL,
                                    justify: b.A.Justify.CENTER,
                                    className: z.bM,
                                    children: [
                                        (0, r.jsx)(p.Text, {
                                            variant: "text-md/semibold",
                                            children: (0, r.jsx)(u.A, {
                                                children: c.name,
                                            }),
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
                            (0, r.jsx)(R.A, {
                                text: ei ? K.intl.string(K.t.yma8Vp) : K.intl.string(K.t.nN2DIo),
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
                        null != A &&
                        !Q &&
                        $ &&
                        (null != (e = null == A || null == (t = A.emojis) ? void 0 : t.length) ? e : 0) > 1,
                    i = () => {
                        n &&
                            (null == D || D(),
                            em || k || M.default.track(H.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ef),
                            eg(!em));
                    },
                    a = () => {
                        let e = K.intl.string(K.t.pnsAS2);
                        return (0, r.jsx)(p.DUT, {
                            onClick: i,
                            className: z.wK,
                            children: (0, r.jsxs)(b.A, {
                                children: [
                                    (0, r.jsx)(p.Text, {
                                        className: z.__invalid_showMoreEmojisLabel,
                                        "aria-label": e,
                                        variant: "text-xs/normal",
                                        color: "none",
                                        children: e,
                                    }),
                                    (0, r.jsx)(p.abt, {
                                        size: "md",
                                        color: "currentColor",
                                        className: s()(z.ZB, {
                                            [z.cP]: !em,
                                        }),
                                    }),
                                ],
                            }),
                        });
                    };
                return (0, r.jsxs)("div", {
                    className: z.tl,
                    children: [
                        (0, r.jsx)(p.Text, {
                            className: z.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: Q ? K.intl.string(K.t.ohTzZH) : K.intl.string(K.t["eLfh+a"]),
                        }),
                        (0, r.jsx)(en, {
                            expressionSourceGuild: null != A ? A : v.GO.createFromGuildRecord(I),
                            hasJoinedExpressionSourceGuild: Q,
                            isDisplayingJoinGuildButtonInPopout: ep,
                        }),
                        n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    a(),
                                    null != c.emojiId &&
                                        em &&
                                        (0, r.jsx)(ea, {
                                            emojiId: c.emojiId,
                                            expressionSourceGuild: A,
                                            popoutData: ec,
                                            onClose: T,
                                            hasJoinedEmojiSourceGuild: Q,
                                            isDisplayingButtonInTopSection: ep || e_,
                                        }),
                                ],
                            }),
                    ],
                });
            },
            eb = $ || (Q && !Z) || null != A;
        return (0, r.jsxs)(B.Uq, {
            className: z.Bm,
            children: [eh(), eb && eE()],
        });
    },
    ea = (e) => {
        var t;
        let {
                emojiId: n,
                expressionSourceGuild: i,
                hasJoinedEmojiSourceGuild: a,
                popoutData: s,
                onClose: o,
                isDisplayingButtonInTopSection: l,
            } = e,
            c = (null != (t = null == i ? void 0 : i.emojis) ? t : [])
                .slice(0, J + 1)
                .filter((e) => e.id !== n)
                .slice(0, J),
            u = () =>
                a
                    ? null
                    : c.map((e) =>
                          (0, r.jsx)(
                              d.m,
                              Q(
                                  X(
                                      {
                                          text: e.require_colons ? ":".concat(e.name, ":") : e.name,
                                      },
                                      B.Uk,
                                  ),
                                  {
                                      children: (0, r.jsx)(h.A, {
                                          className: z.Th,
                                          emojiId: e.id,
                                          animated: e.animated,
                                      }),
                                  },
                              ),
                              e.id,
                          ),
                      ),
            { type: f, description: _ } = s,
            m = () =>
                f === V.u.GET_PREMIUM
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(P.A, {
                                  subscriptionTier: W.pe.TIER_2,
                                  textOptions: {
                                      textOverride: s.text,
                                  },
                                  className: z.lI,
                                  fullWidth: !0,
                                  onClick: () => o(),
                              }),
                              null != _ &&
                                  (0, r.jsx)("div", {
                                      className: z.vd,
                                      children: (0, r.jsx)(p.Text, {
                                          variant: "text-sm/medium",
                                          "aria-label": _,
                                          children: _,
                                      }),
                                  }),
                          ],
                      })
                    : f === V.u.JOIN_GUILD
                      ? (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: z.lI,
                            children: (0, r.jsx)(p.Button, {
                                variant: "primary",
                                size: "sm",
                                text: s.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, U.Z2)(i.id, {});
                                },
                            }),
                        })
                      : null;
        return (0, r.jsxs)("div", {
            className: z.LX,
            children: [u(), !l && m()],
        });
    };
