"use strict";
n.d(t, { G7: () => Q, MV: () => X, iP: () => J, mG: () => et, sX: () => ee });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(688810),
    g = n(139286),
    A = n(235986),
    I = n(573435),
    T = n(836039),
    S = n(695282),
    y = n(624793),
    v = n(731383),
    N = n(263063),
    C = n(714991),
    b = n(492494),
    R = n(384684),
    O = n(985242),
    D = n(87719),
    L = n(465794),
    w = n(976860),
    x = n(309010),
    M = n(967198),
    P = n(287809),
    k = n(954571),
    U = n(486020),
    G = n(449054),
    F = n(927578),
    V = n(450707),
    B = n(252061),
    H = n(652176),
    j = n(652215),
    Y = n(746080),
    W = n(788868),
    K = n(985018),
    z = n(906121);
let $ = 32,
    q = 12,
    Z = () => ({
        page: null != (0, l.bG)([M.A], () => M.A.getGuildId()) ? j.liQ.GUILD_CHANNEL : j.liQ.DM_CHANNEL,
        section: j.JJy.EMOJI_UPSELL_POPOUT,
    }),
    X = (e) => {
        let { node: t } = e;
        (0, v.i)({ emojiId: t.emojiId, currentGuildId: M.A.getGuildId() });
        let n = (0, B.A)(t.name),
            i = n !== t.name;
        return (0, r.jsx)(u.l, {
            children: (0, r.jsx)(H.Uq, {
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
    Q = (e) => {
        let { expressionSourceGuild: t, hasJoinedExpressionSourceGuild: n, isDisplayingJoinGuildButtonInPopout: i } = e,
            { id: s, icon: o, name: l } = t,
            u = $,
            d = U.Ay.getGuildIconURL({ id: s, icon: o, size: u, canAnimate: !0 }),
            _ = (n = n ?? !0) || t.isDiscoverable(),
            p = () => {
                t.isDiscoverable() ? (0, G.Z2)(s, {}) : n && (0, w.pX)(j.BVt.CHANNEL(s, x.A.getChannelId(s)));
            },
            h = () =>
                null != d && _
                    ? (0, r.jsxs)(f.DUT, {
                          "aria-label": l,
                          onClick: p,
                          children: [(0, r.jsx)("img", { src: d, alt: "", className: z.$f }), " :"],
                      })
                    : (0, r.jsx)(N.Ay, { size: N.Ay.Sizes.SMALL, className: z.oi, guild: t }),
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
            E = t.isDiscoverable() && null != t.presenceCount,
            g = () => {
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
                E
                    ? g()
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
                    className: a()(z.__invalid_guildInformation, z.bM),
                    children: [
                        (0, r.jsxs)(A.A, {
                            align: A.A.Align.CENTER,
                            children: [(0, r.jsx)(C.A, { guild: t, className: z.n2 }), m()],
                        }),
                        (0, r.jsx)(A.A, { align: A.A.Align.CENTER, children: T() }),
                    ],
                }),
            ],
        });
    },
    J = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: i, nonce: s } = e,
            {
                expressionSourceGuild: a,
                expressionSourceApplication: o,
                sourceType: l,
                joinedEmojiSourceGuildRecord: c,
                emoji: d,
                isFetching: _,
            } = (0, S.y)({ emojiId: t.emojiId, refreshPositionKey: i });
        return _
            ? (0, r.jsx)(H.Y0, {})
            : (0, r.jsx)(u.l, {
                  "aria-label": t.name,
                  children: (0, r.jsx)(ee, {
                      node: t,
                      sourceType: l,
                      expressionSourceApplication: o,
                      guildEmoji: d ?? void 0,
                      expressionSourceGuild: a,
                      joinedEmojiSourceGuildRecord: c,
                      closePopout: n,
                      onToggleShowMoreEmojis: i,
                      demoMode: !1,
                      nonce: s,
                  }),
              });
    },
    ee = (e) => {
        let {
                node: t,
                sourceType: n,
                expressionSourceApplication: s,
                expressionSourceGuild: u,
                joinedEmojiSourceGuildRecord: d,
                closePopout: I,
                onToggleShowMoreEmojis: S,
                guildEmoji: N,
                demoMode: C = !1,
                nonce: w,
            } = e,
            x = (0, l.bG)([P.default], () => P.default.getCurrentUser()),
            U = (0, l.bG)([M.A], () => M.A.getGuildId()),
            G = F.Ay.isPremium(x),
            B = null != U && (U === u?.id || U === d?.id),
            $ = null != d,
            q = u?.isDiscoverable() ?? !1;
        C && ((G = !0), (q = !0), ($ = !1), (B = !1));
        let X = Z(),
            {
                isRoleSubscriptionEmoji: J,
                isUnusableRoleSubscriptionEmoji: ee,
                userIsRoleSubscriber: en,
            } = i.useMemo(
                () =>
                    null == N
                        ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                        : {
                              isRoleSubscriptionEmoji: b.kT(N),
                              isUnusableRoleSubscriptionEmoji: b.JN(N, U ?? void 0),
                              userIsRoleSubscriber: R.A.getUserSubscriptionRoles(N.guildId).size > 0,
                          },
                [N, U],
            ),
            er = !!ee && (0, T.tE)(N?.guildId),
            { analyticsLocations: ei } = (0, E.Ay)(m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, g.A)(
            {
                type: o.ImpressionTypes.MODAL,
                name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: { location_stack: ei, emoji_guild_id: N?.guildId ?? null, emoji_id: N?.id ?? null },
            },
            { disableTrack: !J },
        );
        let es = M.A.getGuildId(),
            ea = (0, V.O)({
                sourceType: n,
                expressionSourceApplication: s,
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
                        k.default.track(j.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_page: X.page,
                            location_section: X.section,
                        }),
                        (0, D.e)();
                },
            }),
            eo = $ && ee && !er && ((G && J) || !G),
            el = ea.emojiDescription,
            eu = (0, v.i)({
                emojiId: t.emojiId,
                currentGuildId: es,
                popoutData: ea,
                emojiSourceGuildId: u?.id,
                nonce: w,
                demoMode: C,
            }),
            ec = ea.type === V.u.JOIN_GUILD,
            ed = ea.type === V.u.GET_PREMIUM,
            e_ = () => {
                let e = async () => {
                        if (C || null == u || $) return;
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
                    s = () =>
                        ed
                            ? (0, r.jsx)(L.A, {
                                  className: z.lI,
                                  subscriptionTier: W.pe.TIER_2,
                                  size: _.$n.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: ea.text },
                                  onSubscribeModalClose: (t) => (t ? e() : I()),
                                  postSuccessGuild: i ? (u ?? void 0) : void 0,
                                  premiumModalAnalyticsLocation: X,
                              })
                            : ec
                              ? (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: z.lI,
                                    children: (0, r.jsx)(f.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ea.text,
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
                        s(),
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
                            (S?.(),
                            ef || C || k.default.track(j.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eu),
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
                                        className: a()(z.ZB, { [z.cP]: !ef }),
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
                        (0, r.jsx)(Q, {
                            expressionSourceGuild: u ?? y.GO.createFromGuildRecord(d),
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
                                            popoutData: ea,
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
        return (0, r.jsxs)(H.Uq, { className: z.Bm, children: [e_(), em && eh()] });
    },
    et = (e) => {
        let {
                emojiId: t,
                expressionSourceGuild: n,
                hasJoinedEmojiSourceGuild: i,
                popoutData: s,
                onClose: a,
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
                                  ...H.Uk,
                                  children: (0, r.jsx)(h.A, { className: z.Th, emojiId: e.id, animated: e.animated }),
                              },
                              e.id,
                          ),
                      ),
            { type: c, description: _ } = s,
            p = () =>
                c === V.u.GET_PREMIUM
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(L.A, {
                                  subscriptionTier: W.pe.TIER_2,
                                  textOptions: { textOverride: s.text },
                                  className: z.lI,
                                  fullWidth: !0,
                                  onClick: () => a(),
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
                    : c === V.u.JOIN_GUILD
                      ? (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: z.lI,
                            children: (0, r.jsx)(f.Button, {
                                variant: "primary",
                                size: "sm",
                                text: s.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, G.Z2)(n.id, {});
                                },
                            }),
                        })
                      : null;
        return (0, r.jsxs)("div", { className: z.LX, children: [u(), !o && p()] });
    };
