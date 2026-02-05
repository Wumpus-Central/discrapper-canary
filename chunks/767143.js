"use strict";
n.d(t, { G7: () => X, MV: () => Q, iP: () => J, mG: () => et, sX: () => ee });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(110259),
    l = n(311907),
    u = n(305866),
    c = n(3026),
    d = n(990078),
    _ = n(421380),
    f = n(397927),
    p = n(686956),
    h = n(565645),
    m = n(793574),
    g = n(688810),
    E = n(139286),
    A = n(235986),
    I = n(573435),
    T = n(836039),
    y = n(695282),
    S = n(624793),
    v = n(731383),
    C = n(263063),
    b = n(714991),
    N = n(492494),
    R = n(384684),
    O = n(985242),
    D = n(87719),
    L = n(465794),
    w = n(976860),
    x = n(309010),
    P = n(967198),
    M = n(287809),
    k = n(954571),
    U = n(486020),
    G = n(449054),
    V = n(927578),
    F = n(450707),
    B = n(252061),
    j = n(652176),
    H = n(652215),
    Y = n(746080),
    W = n(788868),
    K = n(985018),
    z = n(767419);
let $ = 32,
    q = 12,
    Z = () => ({
        page: null != (0, l.bG)([P.A], () => P.A.getGuildId()) ? H.liQ.GUILD_CHANNEL : H.liQ.DM_CHANNEL,
        section: H.JJy.EMOJI_UPSELL_POPOUT,
    }),
    Q = (e) => {
        let { node: t } = e;
        (0, v.i)({ emojiId: t.emojiId, currentGuildId: P.A.getGuildId() });
        let n = (0, B.A)(t.name),
            i = n !== t.name;
        return (0, r.jsx)(u.l, {
            children: (0, r.jsx)(j.Uq, {
                children: (0, r.jsxs)(A.A, {
                    className: z.gH,
                    children: [
                        (0, r.jsx)(h.A, {
                            emojiName: t.name,
                            className: z.P$,
                            src: t.src,
                            animated: !1,
                            size: "jumbo",
                        }),
                        (0, r.jsxs)(A.A, {
                            direction: A.A.Direction.VERTICAL,
                            justify: A.A.Justify.CENTER,
                            className: z.bM,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    className: z.__invalid_emojiName,
                                    variant: "text-md/semibold",
                                    children: i
                                        ? (0, r.jsx)("div", { className: z.Gl, children: n })
                                        : (0, r.jsx)(c.A, { children: n }),
                                }),
                                (0, r.jsx)(f.Text, { variant: "text-sm/normal", children: K.intl.string(K.t.sXdH8c) }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    X = (e) => {
        let { expressionSourceGuild: t, hasJoinedExpressionSourceGuild: n, isDisplayingJoinGuildButtonInPopout: i } = e,
            { id: a, icon: o, name: l } = t,
            u = $,
            d = U.Ay.getGuildIconURL({ id: a, icon: o, size: u, canAnimate: !0 }),
            _ = (n = n ?? !0) || t.isDiscoverable(),
            p = () => {
                t.isDiscoverable() ? (0, G.Z2)(a, {}) : n && (0, w.pX)(H.BVt.CHANNEL(a, x.A.getChannelId(a)));
            },
            h = () =>
                null != d && _
                    ? (0, r.jsxs)(f.DUT, {
                          "aria-label": l,
                          onClick: p,
                          children: [(0, r.jsx)("img", { src: d, alt: "", className: z.$f }), " :"],
                      })
                    : (0, r.jsx)(C.A, { size: C.A.Sizes.SMALL, className: z.oi, guild: t }),
            m = () =>
                _
                    ? (0, r.jsx)(f.DUT, {
                          onClick: p,
                          className: z.bM,
                          children: (0, r.jsx)(f.Heading, {
                              className: z.J5,
                              variant: "heading-md/semibold",
                              children: (0, r.jsx)(c.A, { children: l }),
                          }),
                      })
                    : (0, r.jsx)(f.Heading, {
                          variant: "heading-md/semibold",
                          children: (0, r.jsx)(c.A, { children: l }),
                      }),
            g = t.isDiscoverable() && null != t.presenceCount,
            E = () => {
                let e = !i && !n;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: K.intl.format(K.t["LC+S+m"], { membersOnline: t.presenceCount }),
                        }),
                        (0, r.jsx)("div", { className: z.zk }),
                        e
                            ? (0, r.jsx)(f.DUT, {
                                  className: z.Ki,
                                  onClick: p,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-link",
                                      children: K.intl.string(K.t.riu2R5),
                                  }),
                              })
                            : (0, r.jsx)(f.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: K.intl.string(K.t.inyJqO),
                              }),
                    ],
                });
            },
            T = () =>
                g
                    ? E()
                    : (0, r.jsx)(f.Text, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: K.intl.string(K.t.H29mx4),
                      });
        return (0, r.jsxs)(A.A, {
            align: A.A.Align.CENTER,
            children: [
                (0, r.jsx)(I.Ay, {
                    mask: I.Ay.Masks.SQUIRCLE,
                    width: u,
                    height: u,
                    className: z.__invalid_guildIconContainer,
                    children: h(),
                }),
                (0, r.jsxs)(A.A, {
                    direction: A.A.Direction.VERTICAL,
                    className: s()(z.__invalid_guildInformation, z.bM),
                    children: [
                        (0, r.jsxs)(A.A, {
                            align: A.A.Align.CENTER,
                            children: [(0, r.jsx)(b.A, { guild: t, className: z.n2 }), m()],
                        }),
                        (0, r.jsx)(A.A, { align: A.A.Align.CENTER, children: T() }),
                    ],
                }),
            ],
        });
    },
    J = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: i, nonce: a } = e,
            {
                expressionSourceGuild: s,
                expressionSourceApplication: o,
                sourceType: l,
                joinedEmojiSourceGuildRecord: c,
                emoji: d,
                isFetching: _,
            } = (0, y.y)({ emojiId: t.emojiId, refreshPositionKey: i });
        return _
            ? (0, r.jsx)(j.Y0, {})
            : (0, r.jsx)(u.l, {
                  "aria-label": t.name,
                  children: (0, r.jsx)(ee, {
                      node: t,
                      sourceType: l,
                      expressionSourceApplication: o,
                      guildEmoji: d ?? void 0,
                      expressionSourceGuild: s,
                      joinedEmojiSourceGuildRecord: c,
                      closePopout: n,
                      onToggleShowMoreEmojis: i,
                      demoMode: !1,
                      nonce: a,
                  }),
              });
    },
    ee = (e) => {
        let {
                node: t,
                sourceType: n,
                expressionSourceApplication: a,
                expressionSourceGuild: u,
                joinedEmojiSourceGuildRecord: d,
                closePopout: I,
                onToggleShowMoreEmojis: y,
                guildEmoji: C,
                demoMode: b = !1,
                nonce: w,
            } = e,
            x = (0, l.bG)([M.default], () => M.default.getCurrentUser()),
            U = (0, l.bG)([P.A], () => P.A.getGuildId()),
            G = V.Ay.isPremium(x),
            B = null != U && (U === u?.id || U === d?.id),
            $ = null != d,
            q = u?.isDiscoverable() ?? !1;
        b && ((G = !0), (q = !0), ($ = !1), (B = !1));
        let Q = Z(),
            {
                isRoleSubscriptionEmoji: J,
                isUnusableRoleSubscriptionEmoji: ee,
                userIsRoleSubscriber: en,
            } = i.useMemo(
                () =>
                    null == C
                        ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                        : {
                              isRoleSubscriptionEmoji: N.kT(C),
                              isUnusableRoleSubscriptionEmoji: N.JN(C, U ?? void 0),
                              userIsRoleSubscriber: R.A.getUserSubscriptionRoles(C.guildId).size > 0,
                          },
                [C, U],
            ),
            er = !!ee && (0, T.tE)(C?.guildId),
            { analyticsLocations: ei } = (0, g.Ay)(m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, E.A)(
            {
                type: o.ImpressionTypes.MODAL,
                name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: { location_stack: ei, emoji_guild_id: C?.guildId ?? null, emoji_id: C?.id ?? null },
            },
            { disableTrack: !J },
        );
        let ea = P.A.getGuildId(),
            es = (0, F.O)({
                sourceType: n,
                expressionSourceApplication: a,
                isPremium: G,
                hasJoinedEmojiSourceGuild: $,
                isRoleSubscriptionEmoji: J,
                isUnusableRoleSubscriptionEmoji: ee,
                userIsRoleSubscriber: en,
                emojiComesFromCurrentGuild: B,
                isDiscoverable: q,
                shouldHideRoleSubscriptionCTA: er,
                onOpenPremiumSettings: () => {
                    I(),
                        k.default.track(H.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_page: Q.page,
                            location_section: Q.section,
                        }),
                        (0, D.e)();
                },
            }),
            eo = $ && ee && !er && ((G && J) || !G),
            el = es.emojiDescription,
            eu = (0, v.i)({
                emojiId: t.emojiId,
                currentGuildId: ea,
                popoutData: es,
                emojiSourceGuildId: u?.id,
                nonce: w,
                demoMode: b,
            }),
            ec = es.type === F.u.JOIN_GUILD,
            ed = es.type === F.u.GET_PREMIUM,
            e_ = () => {
                let e = async () => {
                        if (b || null == u || $) return;
                        I();
                        let e = u.id;
                        try {
                            await p.A.joinGuild(e), p.A.transitionToGuildSync(e);
                        } catch {}
                    },
                    n = () => {
                        I(),
                            d?.id != null &&
                                p.A.transitionToGuildSync(
                                    d.id,
                                    { sourceLocationStack: [m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL] },
                                    Y.VV.ROLE_SUBSCRIPTIONS,
                                );
                    },
                    i = !$ && q,
                    a = () =>
                        ed
                            ? (0, r.jsx)(L.A, {
                                  className: z.lI,
                                  subscriptionTier: W.pe.TIER_2,
                                  size: _.$n.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: es.text },
                                  onSubscribeModalClose: (t) => (t ? e() : I()),
                                  postSuccessGuild: i ? (u ?? void 0) : void 0,
                                  premiumModalAnalyticsLocation: Q,
                              })
                            : ec
                              ? (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: z.lI,
                                    children: (0, r.jsx)(f.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: es.text,
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                })
                              : void 0;
                return (0, r.jsxs)("div", {
                    className: z.gH,
                    children: [
                        (0, r.jsxs)(A.A, {
                            children: [
                                (0, r.jsx)(h.A, {
                                    className: z.P$,
                                    emojiId: t.emojiId,
                                    emojiName: t.name,
                                    animated: t.animated,
                                    size: "jumbo",
                                }),
                                (0, r.jsxs)(A.A, {
                                    direction: A.A.Direction.VERTICAL,
                                    justify: A.A.Justify.CENTER,
                                    className: z.bM,
                                    children: [
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-md/semibold",
                                            children: (0, r.jsx)(c.A, { children: t.name }),
                                        }),
                                        null != el && (0, r.jsx)(f.Text, { variant: "text-sm/normal", children: el }),
                                    ],
                                }),
                            ],
                        }),
                        a(),
                        eo &&
                            (0, r.jsx)(O.A, {
                                text: en ? K.intl.string(K.t.yma8Vp) : K.intl.string(K.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: n,
                            }),
                    ],
                });
            },
            [ef, ep] = i.useState(!1),
            eh = () => {
                let e = null != u && !$ && q && (u?.emojis?.length ?? 0) > 1,
                    n = () => {
                        e &&
                            (y?.(),
                            ef || b || k.default.track(H.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eu),
                            ep(!ef));
                    },
                    i = () => {
                        let e = K.intl.string(K.t.pnsAS2);
                        return (0, r.jsx)(f.DUT, {
                            onClick: n,
                            className: z.wK,
                            children: (0, r.jsxs)(A.A, {
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        className: z.__invalid_showMoreEmojisLabel,
                                        "aria-label": e,
                                        variant: "text-xs/normal",
                                        color: "none",
                                        children: e,
                                    }),
                                    (0, r.jsx)(f.abt, {
                                        size: "md",
                                        color: "currentColor",
                                        className: s()(z.ZB, { [z.cP]: !ef }),
                                    }),
                                ],
                            }),
                        });
                    };
                return (0, r.jsxs)("div", {
                    className: z.tl,
                    children: [
                        (0, r.jsx)(f.Text, {
                            className: z.YW,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: $ ? K.intl.string(K.t.ohTzZH) : K.intl.string(K.t["eLfh+a"]),
                        }),
                        (0, r.jsx)(X, {
                            expressionSourceGuild: u ?? S.GO.createFromGuildRecord(d),
                            hasJoinedExpressionSourceGuild: $,
                            isDisplayingJoinGuildButtonInPopout: ec,
                        }),
                        e &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    i(),
                                    null != t.emojiId &&
                                        ef &&
                                        (0, r.jsx)(et, {
                                            emojiId: t.emojiId,
                                            expressionSourceGuild: u,
                                            popoutData: es,
                                            onClose: I,
                                            hasJoinedEmojiSourceGuild: $,
                                            isDisplayingButtonInTopSection: ec || ed,
                                        }),
                                ],
                            }),
                    ],
                });
            },
            em = q || ($ && !B) || null != u;
        return (0, r.jsxs)(j.Uq, { className: z.Bm, children: [e_(), em && eh()] });
    },
    et = (e) => {
        let {
                emojiId: t,
                expressionSourceGuild: n,
                hasJoinedEmojiSourceGuild: i,
                popoutData: a,
                onClose: s,
                isDisplayingButtonInTopSection: o,
            } = e,
            l = (n?.emojis ?? [])
                .slice(0, q + 1)
                .filter((e) => e.id !== t)
                .slice(0, q),
            u = () =>
                i
                    ? null
                    : l.map((e) =>
                          (0, r.jsx)(
                              d.m,
                              {
                                  text: e.require_colons ? `:${e.name}:` : e.name,
                                  ...j.Uk,
                                  children: (0, r.jsx)(h.A, { className: z.Th, emojiId: e.id, animated: e.animated }),
                              },
                              e.id,
                          ),
                      ),
            { type: c, description: _ } = a,
            p = () =>
                c === F.u.GET_PREMIUM
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(L.A, {
                                  subscriptionTier: W.pe.TIER_2,
                                  textOptions: { textOverride: a.text },
                                  className: z.lI,
                                  fullWidth: !0,
                                  onClick: () => s(),
                              }),
                              null != _ &&
                                  (0, r.jsx)("div", {
                                      className: z.vd,
                                      children: (0, r.jsx)(f.Text, {
                                          variant: "text-sm/medium",
                                          "aria-label": _,
                                          children: _,
                                      }),
                                  }),
                          ],
                      })
                    : c === F.u.JOIN_GUILD
                      ? (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: z.lI,
                            children: (0, r.jsx)(f.Button, {
                                variant: "primary",
                                size: "sm",
                                text: a.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, G.Z2)(n.id, {});
                                },
                            }),
                        })
                      : null;
        return (0, r.jsxs)("div", { className: z.LX, children: [u(), !o && p()] });
    };
