"use strict";
n.d(t, { G7: () => J, MV: () => Q, iP: () => ee, mG: () => en, sX: () => et });
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
    h = n(686956),
    p = n(565645),
    g = n(793574),
    E = n(688810),
    A = n(139286),
    I = n(235986),
    T = n(573435),
    y = n(836039),
    S = n(695282),
    v = n(624793),
    C = n(731383),
    b = n(263063),
    N = n(714991),
    R = n(492494),
    O = n(384684),
    D = n(985242),
    L = n(87719),
    w = n(465794),
    x = n(976860),
    P = n(309010),
    M = n(967198),
    k = n(287809),
    U = n(954571),
    G = n(486020),
    F = n(449054),
    V = n(927578),
    B = n(450707),
    j = n(252061),
    H = n(652176),
    Y = n(652215),
    W = n(746080),
    K = n(788868),
    $ = n(985018),
    z = n(767419);
let q = 32,
    X = 12,
    Z = () => ({
        page: null != (0, l.bG)([M.A], () => M.A.getGuildId()) ? Y.liQ.GUILD_CHANNEL : Y.liQ.DM_CHANNEL,
        section: Y.JJy.EMOJI_UPSELL_POPOUT,
    }),
    Q = (e) => {
        let { node: t } = e;
        (0, C.i)({ emojiId: t.emojiId, currentGuildId: M.A.getGuildId() });
        let n = (0, j.A)(t.name),
            i = n !== t.name;
        return (0, r.jsx)(u.l, {
            children: (0, r.jsx)(H.Uq, {
                children: (0, r.jsxs)(I.A, {
                    className: z.gH,
                    children: [
                        (0, r.jsx)(p.A, {
                            emojiName: t.name,
                            className: z.P$,
                            src: t.src,
                            animated: !1,
                            size: "jumbo",
                        }),
                        (0, r.jsxs)(I.A, {
                            direction: I.A.Direction.VERTICAL,
                            justify: I.A.Justify.CENTER,
                            className: z.bM,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    className: z.__invalid_emojiName,
                                    variant: "text-md/semibold",
                                    children: i
                                        ? (0, r.jsx)("div", { className: z.Gl, children: n })
                                        : (0, r.jsx)(c.A, { children: n }),
                                }),
                                (0, r.jsx)(f.Text, { variant: "text-sm/normal", children: $.intl.string($.t.sXdH8c) }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    J = (e) => {
        let { expressionSourceGuild: t, hasJoinedExpressionSourceGuild: n, isDisplayingJoinGuildButtonInPopout: i } = e,
            { id: a, icon: o, name: l } = t,
            u = q,
            d = G.Ay.getGuildIconURL({ id: a, icon: o, size: u, canAnimate: !0 }),
            _ = (n = n ?? !0) || t.isDiscoverable(),
            h = () => {
                t.isDiscoverable() ? (0, F.Z2)(a, {}) : n && (0, x.pX)(Y.BVt.CHANNEL(a, P.A.getChannelId(a)));
            },
            p = () =>
                null != d && _
                    ? (0, r.jsxs)(f.DUT, {
                          "aria-label": l,
                          onClick: h,
                          children: [(0, r.jsx)("img", { src: d, alt: "", className: z.$f }), " :"],
                      })
                    : (0, r.jsx)(b.A, { size: b.A.Sizes.SMALL, className: z.oi, guild: t }),
            g = () =>
                _
                    ? (0, r.jsx)(f.DUT, {
                          onClick: h,
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
            A = () => {
                let e = !i && !n;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: $.intl.format($.t["LC+S+m"], { membersOnline: t.presenceCount }),
                        }),
                        (0, r.jsx)("div", { className: z.zk }),
                        e
                            ? (0, r.jsx)(f.DUT, {
                                  className: z.Ki,
                                  onClick: h,
                                  children: (0, r.jsx)(f.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-link",
                                      children: $.intl.string($.t.riu2R5),
                                  }),
                              })
                            : (0, r.jsx)(f.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: $.intl.string($.t.inyJqO),
                              }),
                    ],
                });
            },
            y = () =>
                E
                    ? A()
                    : (0, r.jsx)(f.Text, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: $.intl.string($.t.H29mx4),
                      });
        return (0, r.jsxs)(I.A, {
            align: I.A.Align.CENTER,
            children: [
                (0, r.jsx)(T.Ay, {
                    mask: T.Ay.Masks.SQUIRCLE,
                    width: u,
                    height: u,
                    className: z.__invalid_guildIconContainer,
                    children: p(),
                }),
                (0, r.jsxs)(I.A, {
                    direction: I.A.Direction.VERTICAL,
                    className: s()(z.__invalid_guildInformation, z.bM),
                    children: [
                        (0, r.jsxs)(I.A, {
                            align: I.A.Align.CENTER,
                            children: [(0, r.jsx)(N.A, { guild: t, className: z.n2 }), g()],
                        }),
                        (0, r.jsx)(I.A, { align: I.A.Align.CENTER, children: y() }),
                    ],
                }),
            ],
        });
    },
    ee = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: i, nonce: a } = e,
            {
                expressionSourceGuild: s,
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
                  children: (0, r.jsx)(et, {
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
    et = (e) => {
        let {
                node: t,
                sourceType: n,
                expressionSourceApplication: a,
                expressionSourceGuild: u,
                joinedEmojiSourceGuildRecord: d,
                closePopout: T,
                onToggleShowMoreEmojis: S,
                guildEmoji: b,
                demoMode: N = !1,
                nonce: x,
            } = e,
            P = (0, l.bG)([k.default], () => k.default.getCurrentUser()),
            G = (0, l.bG)([M.A], () => M.A.getGuildId()),
            F = V.Ay.isPremium(P),
            j = null != G && (G === u?.id || G === d?.id),
            q = null != d,
            X = u?.isDiscoverable() ?? !1;
        N && ((F = !0), (X = !0), (q = !1), (j = !1));
        let Q = Z(),
            {
                isRoleSubscriptionEmoji: ee,
                isUnusableRoleSubscriptionEmoji: et,
                userIsRoleSubscriber: er,
            } = i.useMemo(
                () =>
                    null == b
                        ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                        : {
                              isRoleSubscriptionEmoji: R.kT(b),
                              isUnusableRoleSubscriptionEmoji: R.JN(b, G ?? void 0),
                              userIsRoleSubscriber: O.A.getUserSubscriptionRoles(b.guildId).size > 0,
                          },
                [b, G],
            ),
            ei = !!et && (0, y.tE)(b?.guildId),
            { analyticsLocations: ea } = (0, E.Ay)(g.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, A.A)(
            {
                type: o.ImpressionTypes.MODAL,
                name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: { location_stack: ea, emoji_guild_id: b?.guildId ?? null, emoji_id: b?.id ?? null },
            },
            { disableTrack: !ee },
        );
        let es = M.A.getGuildId(),
            eo = (0, B.O)({
                sourceType: n,
                expressionSourceApplication: a,
                isPremium: F,
                hasJoinedEmojiSourceGuild: q,
                isRoleSubscriptionEmoji: ee,
                isUnusableRoleSubscriptionEmoji: et,
                userIsRoleSubscriber: er,
                emojiComesFromCurrentGuild: j,
                isDiscoverable: X,
                shouldHideRoleSubscriptionCTA: ei,
                onOpenPremiumSettings: () => {
                    T(),
                        U.default.track(Y.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_page: Q.page,
                            location_section: Q.section,
                        }),
                        (0, L.e)();
                },
            }),
            el = q && et && !ei && ((F && ee) || !F),
            eu = eo.emojiDescription,
            ec = (0, C.i)({
                emojiId: t.emojiId,
                currentGuildId: es,
                popoutData: eo,
                emojiSourceGuildId: u?.id,
                nonce: x,
                demoMode: N,
            }),
            ed = eo.type === B.u.JOIN_GUILD,
            e_ = eo.type === B.u.GET_PREMIUM,
            ef = () => {
                let e = async () => {
                        if (N || null == u || q) return;
                        T();
                        let e = u.id;
                        try {
                            await h.A.joinGuild(e), h.A.transitionToGuildSync(e);
                        } catch {}
                    },
                    n = () => {
                        T(),
                            d?.id != null &&
                                h.A.transitionToGuildSync(
                                    d.id,
                                    { sourceLocationStack: [g.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL] },
                                    W.VV.ROLE_SUBSCRIPTIONS,
                                );
                    },
                    i = !q && X,
                    a = () =>
                        e_
                            ? (0, r.jsx)(w.A, {
                                  className: z.lI,
                                  subscriptionTier: K.pe.TIER_2,
                                  size: _.$n.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: eo.text },
                                  onSubscribeModalClose: (t) => (t ? e() : T()),
                                  postSuccessGuild: i ? (u ?? void 0) : void 0,
                                  premiumModalAnalyticsLocation: Q,
                              })
                            : ed
                              ? (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: z.lI,
                                    children: (0, r.jsx)(f.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: eo.text,
                                        fullWidth: !0,
                                        onClick: e,
                                    }),
                                })
                              : void 0;
                return (0, r.jsxs)("div", {
                    className: z.gH,
                    children: [
                        (0, r.jsxs)(I.A, {
                            children: [
                                (0, r.jsx)(p.A, {
                                    className: z.P$,
                                    emojiId: t.emojiId,
                                    emojiName: t.name,
                                    animated: t.animated,
                                    size: "jumbo",
                                }),
                                (0, r.jsxs)(I.A, {
                                    direction: I.A.Direction.VERTICAL,
                                    justify: I.A.Justify.CENTER,
                                    className: z.bM,
                                    children: [
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-md/semibold",
                                            children: (0, r.jsx)(c.A, { children: t.name }),
                                        }),
                                        null != eu && (0, r.jsx)(f.Text, { variant: "text-sm/normal", children: eu }),
                                    ],
                                }),
                            ],
                        }),
                        a(),
                        el &&
                            (0, r.jsx)(D.A, {
                                text: er ? $.intl.string($.t.yma8Vp) : $.intl.string($.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: n,
                            }),
                    ],
                });
            },
            [eh, ep] = i.useState(!1),
            em = () => {
                let e = null != u && !q && X && (u?.emojis?.length ?? 0) > 1,
                    n = () => {
                        e &&
                            (S?.(),
                            eh || N || U.default.track(Y.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ec),
                            ep(!eh));
                    },
                    i = () => {
                        let e = $.intl.string($.t.pnsAS2);
                        return (0, r.jsx)(f.DUT, {
                            onClick: n,
                            className: z.wK,
                            children: (0, r.jsxs)(I.A, {
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
                                        className: s()(z.ZB, { [z.cP]: !eh }),
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
                            children: q ? $.intl.string($.t.ohTzZH) : $.intl.string($.t["eLfh+a"]),
                        }),
                        (0, r.jsx)(J, {
                            expressionSourceGuild: u ?? v.GO.createFromGuildRecord(d),
                            hasJoinedExpressionSourceGuild: q,
                            isDisplayingJoinGuildButtonInPopout: ed,
                        }),
                        e &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    i(),
                                    null != t.emojiId &&
                                        eh &&
                                        (0, r.jsx)(en, {
                                            emojiId: t.emojiId,
                                            expressionSourceGuild: u,
                                            popoutData: eo,
                                            onClose: T,
                                            hasJoinedEmojiSourceGuild: q,
                                            isDisplayingButtonInTopSection: ed || e_,
                                        }),
                                ],
                            }),
                    ],
                });
            },
            eg = X || (q && !j) || null != u;
        return (0, r.jsxs)(H.Uq, { className: z.Bm, children: [ef(), eg && em()] });
    },
    en = (e) => {
        let {
                emojiId: t,
                expressionSourceGuild: n,
                hasJoinedEmojiSourceGuild: i,
                popoutData: a,
                onClose: s,
                isDisplayingButtonInTopSection: o,
            } = e,
            l = (n?.emojis ?? [])
                .slice(0, X + 1)
                .filter((e) => e.id !== t)
                .slice(0, X),
            u = () =>
                i
                    ? null
                    : l.map((e) =>
                          (0, r.jsx)(
                              d.m,
                              {
                                  text: e.require_colons ? `:${e.name}:` : e.name,
                                  ...H.Uk,
                                  children: (0, r.jsx)(p.A, { className: z.Th, emojiId: e.id, animated: e.animated }),
                              },
                              e.id,
                          ),
                      ),
            { type: c, description: _ } = a,
            h = () =>
                c === B.u.GET_PREMIUM
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(w.A, {
                                  subscriptionTier: K.pe.TIER_2,
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
                    : c === B.u.JOIN_GUILD
                      ? (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: z.lI,
                            children: (0, r.jsx)(f.Button, {
                                variant: "primary",
                                size: "sm",
                                text: a.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, F.Z2)(n.id, {});
                                },
                            }),
                        })
                      : null;
        return (0, r.jsxs)("div", { className: z.LX, children: [u(), !o && h()] });
    };
