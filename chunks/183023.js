n.d(t, {
    Az: () => $,
    Oe: () => ee,
    UA: () => en,
    n_: () => er,
    vk: () => et
}),
    n(47120),
    n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(990547),
    l = n(442837),
    c = n(507274),
    u = n(481060),
    d = n(749210),
    f = n(596454),
    p = n(100527),
    _ = n(906732),
    h = n(213609),
    m = n(600164),
    g = n(686546),
    E = n(111028),
    v = n(738774),
    b = n(785896),
    y = n(231053),
    O = n(944386),
    S = n(565138),
    I = n(372769),
    T = n(889564),
    N = n(687476),
    A = n(761966),
    C = n(563927),
    R = n(98278),
    P = n(197115),
    w = n(703656),
    D = n(944486),
    x = n(914010),
    L = n(594174),
    M = n(626135),
    k = n(768581),
    j = n(900849),
    U = n(74538),
    G = n(886132),
    B = n(524444),
    Z = n(981631),
    F = n(176505),
    V = n(474936),
    H = n(388032),
    W = n(859289);
function Y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                Y(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Q = 32,
    X = 12,
    J = () => ({
        page: null != (0, l.e7)([x.Z], () => x.Z.getGuildId()) ? Z.ZY5.GUILD_CHANNEL : Z.ZY5.DM_CHANNEL,
        section: Z.jXE.EMOJI_UPSELL_POPOUT
    }),
    $ = (e) => {
        let { node: t } = e;
        (0, O.u)({
            emojiId: t.emojiId,
            currentGuildId: x.Z.getGuildId()
        });
        let n = (0, C.Z)(t.name);
        return (0, r.jsx)(c.V, {
            children: (0, r.jsx)(B.W_, {
                children: (0, r.jsxs)(m.Z, {
                    className: W.emojiSection,
                    children: [
                        (0, r.jsx)(f.Z, {
                            emojiName: t.name,
                            className: W.primaryEmoji,
                            src: t.src,
                            animated: !1,
                            size: 'jumbo'
                        }),
                        (0, r.jsxs)(m.Z, {
                            direction: m.Z.Direction.VERTICAL,
                            justify: m.Z.Justify.CENTER,
                            className: W.truncatingText,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    className: W.__invalid_emojiName,
                                    variant: 'text-md/semibold',
                                    children: (0, r.jsx)(E.Z, { children: n })
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-sm/normal',
                                    children: H.NW.string(H.t.sXdH8f)
                                })
                            ]
                        })
                    ]
                })
            })
        });
    },
    ee = (e) => {
        let { expressionSourceGuild: t, hasJoinedExpressionSourceGuild: n, isDisplayingJoinGuildButtonInPopout: i } = e,
            { id: o, icon: s, name: l } = t,
            c = Q,
            d = k.ZP.getGuildIconURL({
                id: o,
                icon: s,
                size: c,
                canAnimate: !0
            }),
            f = (n = null == n || n) || t.isDiscoverable(),
            p = () => {
                t.isDiscoverable() ? (0, j.Ub)(o, {}) : n && (0, w.uL)(Z.Z5c.CHANNEL(o, D.Z.getChannelId(o)));
            },
            _ = () =>
                null != d && f
                    ? (0, r.jsxs)(u.P3F, {
                          'aria-label': l,
                          onClick: p,
                          children: [
                              (0, r.jsx)('img', {
                                  src: d,
                                  alt: '',
                                  className: W.guildIcon
                              }),
                              ' :'
                          ]
                      })
                    : (0, r.jsx)(S.Z, {
                          size: S.Z.Sizes.SMALL,
                          className: W.guildIconNotClickable,
                          guild: t
                      }),
            h = () =>
                f
                    ? (0, r.jsx)(u.P3F, {
                          onClick: p,
                          className: W.truncatingText,
                          children: (0, r.jsx)(u.X6q, {
                              className: W.guildName,
                              variant: 'heading-md/semibold',
                              children: (0, r.jsx)(E.Z, { children: l })
                          })
                      })
                    : (0, r.jsx)(u.X6q, {
                          variant: 'heading-md/semibold',
                          children: (0, r.jsx)(E.Z, { children: l })
                      }),
            v = t.isDiscoverable() && null != t.presenceCount,
            b = () => {
                let e = !i && !n;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: H.NW.format(H.t['LC+S+v'], { membersOnline: t.presenceCount })
                        }),
                        (0, r.jsx)('div', { className: W.dotSeparator }),
                        e
                            ? (0, r.jsx)(u.P3F, {
                                  className: W.joinGuildLink,
                                  onClick: p,
                                  children: (0, r.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-link',
                                      children: H.NW.string(H.t.riu2R0)
                                  })
                              })
                            : (0, r.jsx)(u.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-secondary',
                                  children: H.NW.string(H.t.inyJqK)
                              })
                    ]
                });
            },
            y = () =>
                v
                    ? b()
                    : (0, r.jsx)(u.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: H.NW.string(H.t.H29mx8)
                      });
        return (0, r.jsxs)(m.Z, {
            align: m.Z.Align.CENTER,
            children: [
                (0, r.jsx)(g.ZP, {
                    mask: g.ZP.Masks.SQUIRCLE,
                    width: c,
                    height: c,
                    className: W.__invalid_guildIconContainer,
                    children: _()
                }),
                (0, r.jsxs)(m.Z, {
                    direction: m.Z.Direction.VERTICAL,
                    className: a()(W.__invalid_guildInformation, W.truncatingText),
                    children: [
                        (0, r.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, r.jsx)(I.Z, {
                                    guild: t,
                                    className: W.guildBadge
                                }),
                                h()
                            ]
                        }),
                        (0, r.jsx)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: y()
                        })
                    ]
                })
            ]
        });
    },
    et = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: i, nonce: o } = e,
            {
                expressionSourceGuild: a,
                expressionSourceApplication: s,
                sourceType: l,
                joinedEmojiSourceGuildRecord: u,
                emoji: d,
                isFetching: f
            } = (0, b.i)({
                emojiId: t.emojiId,
                refreshPositionKey: i
            });
        return f
            ? (0, r.jsx)(B.SE, {})
            : (0, r.jsx)(c.V, {
                  'aria-label': t.name,
                  children: (0, r.jsx)(en, {
                      node: t,
                      sourceType: l,
                      expressionSourceApplication: s,
                      guildEmoji: null != d ? d : void 0,
                      expressionSourceGuild: a,
                      joinedEmojiSourceGuildRecord: u,
                      closePopout: n,
                      onToggleShowMoreEmojis: i,
                      demoMode: !1,
                      nonce: o
                  })
              });
    },
    en = (e) => {
        var t, n, o;
        let { node: c, sourceType: g, expressionSourceApplication: b, expressionSourceGuild: S, joinedEmojiSourceGuildRecord: I, closePopout: C, onToggleShowMoreEmojis: w, guildEmoji: D, demoMode: k = !1, nonce: j } = e,
            Y = (0, l.e7)([L.default], () => L.default.getCurrentUser()),
            K = (0, l.e7)([x.Z], () => x.Z.getGuildId()),
            z = U.ZP.isPremium(Y),
            q = null != K && (K === (null == S ? void 0 : S.id) || K === (null == I ? void 0 : I.id)),
            Q = null != I,
            X = null !== (t = null == S ? void 0 : S.isDiscoverable()) && void 0 !== t && t;
        k && ((z = !0), (X = !0), (Q = !1), (q = !1));
        let $ = J(),
            {
                isRoleSubscriptionEmoji: et,
                isUnusableRoleSubscriptionEmoji: en,
                userIsRoleSubscriber: ei
            } = i.useMemo(
                () =>
                    null == D
                        ? {
                              isRoleSubscriptionEmoji: !1,
                              isUnusableRoleSubscriptionEmoji: !1,
                              userIsRoleSubscriber: !1
                          }
                        : {
                              isRoleSubscriptionEmoji: T.yH(D),
                              isUnusableRoleSubscriptionEmoji: T.Fv(D, null != K ? K : void 0),
                              userIsRoleSubscriber: N.Z.getUserSubscriptionRoles(D.guildId).size > 0
                          },
                [D, K]
            ),
            eo = !!en && (0, v.Ol)(null == D ? void 0 : D.guildId),
            { analyticsLocations: ea } = (0, _.ZP)(p.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, h.Z)(
            {
                type: s.ImpressionTypes.MODAL,
                name: s.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: ea,
                    emoji_guild_id: null !== (n = null == D ? void 0 : D.guildId) && void 0 !== n ? n : null,
                    emoji_id: null !== (o = null == D ? void 0 : D.id) && void 0 !== o ? o : null
                }
            },
            { disableTrack: !et }
        );
        let es = x.Z.getGuildId(),
            el = (0, G.a)({
                sourceType: g,
                expressionSourceApplication: b,
                isPremium: z,
                hasJoinedEmojiSourceGuild: Q,
                isRoleSubscriptionEmoji: et,
                isUnusableRoleSubscriptionEmoji: en,
                userIsRoleSubscriber: ei,
                emojiComesFromCurrentGuild: q,
                isDiscoverable: X,
                shouldHideRoleSubscriptionCTA: eo,
                onOpenPremiumSettings: () => {
                    C(),
                        M.default.track(Z.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_page: $.page,
                            location_section: $.section
                        }),
                        (0, R.z)();
                }
            }),
            ec = Q && en && !eo && ((z && et) || !z),
            eu = el.emojiDescription,
            ed = (0, O.u)({
                emojiId: c.emojiId,
                currentGuildId: es,
                popoutData: el,
                emojiSourceGuildId: null == S ? void 0 : S.id,
                nonce: j,
                demoMode: k
            }),
            ef = el.type === G.$.JOIN_GUILD,
            ep = el.type === G.$.GET_PREMIUM,
            e_ = () => {
                let e = async () => {
                        if (k || null == S || Q) return;
                        C();
                        let e = S.id;
                        try {
                            await d.Z.joinGuild(e), d.Z.transitionToGuildSync(e);
                        } catch (e) {}
                    },
                    t = () => {
                        C(), (null == I ? void 0 : I.id) != null && d.Z.transitionToGuildSync(I.id, { sourceLocationStack: [p.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL] }, F.oC.ROLE_SUBSCRIPTIONS);
                    },
                    n = !Q && X,
                    i = () =>
                        ep
                            ? (0, r.jsx)(P.Z, {
                                  className: W.ctaButton,
                                  subscriptionTier: V.Si.TIER_2,
                                  size: u.zxk.Sizes.SMALL,
                                  fullWidth: !0,
                                  buttonText: el.text,
                                  onSubscribeModalClose: (t) => (t ? e() : C()),
                                  postSuccessGuild: n && null != S ? S : void 0,
                                  premiumModalAnalyticsLocation: $
                              })
                            : ef
                              ? (0, r.jsx)(u.zxk, {
                                    size: u.zxk.Sizes.SMALL,
                                    className: W.ctaButton,
                                    color: u.Ttl.BRAND,
                                    fullWidth: !0,
                                    onClick: e,
                                    children: el.text
                                })
                              : void 0;
                return (0, r.jsxs)('div', {
                    className: W.emojiSection,
                    children: [
                        (0, r.jsxs)(m.Z, {
                            children: [
                                (0, r.jsx)(f.Z, {
                                    className: W.primaryEmoji,
                                    emojiId: c.emojiId,
                                    emojiName: c.name,
                                    animated: c.animated,
                                    size: 'jumbo'
                                }),
                                (0, r.jsxs)(m.Z, {
                                    direction: m.Z.Direction.VERTICAL,
                                    justify: m.Z.Justify.CENTER,
                                    className: W.truncatingText,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-md/semibold',
                                            children: (0, r.jsx)(E.Z, { children: c.name })
                                        }),
                                        null != eu &&
                                            (0, r.jsx)(u.Text, {
                                                variant: 'text-sm/normal',
                                                children: eu
                                            })
                                    ]
                                })
                            ]
                        }),
                        i(),
                        ec &&
                            (0, r.jsx)(A.Z, {
                                className: W.ctaButton,
                                size: u.zxk.Sizes.SMALL,
                                fullWidth: !0,
                                onClick: t,
                                children: ei ? H.NW.string(H.t.yma8Vl) : H.NW.string(H.t.nN2DIi)
                            })
                    ]
                });
            },
            [eh, em] = i.useState(!1),
            eg = () => {
                var e, t;
                let n = null != S && !Q && X && (null !== (t = null == S ? void 0 : null === (e = S.emojis) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0) > 1,
                    i = () => {
                        n && (null == w || w(), eh || k || M.default.track(Z.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ed), em(!eh));
                    },
                    o = () => {
                        let e = H.NW.string(H.t.pnsAS0);
                        return (0, r.jsx)(u.P3F, {
                            onClick: i,
                            className: W.showMoreEmojis,
                            children: (0, r.jsxs)(m.Z, {
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        className: W.__invalid_showMoreEmojisLabel,
                                        'aria-label': e,
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: e
                                    }),
                                    (0, r.jsx)(u.CJ0, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: a()(W.showMoreEmojisArrow, { [W.showMoreEmojisArrowCollapsed]: !eh })
                                    })
                                ]
                            })
                        });
                    };
                return (0, r.jsxs)('div', {
                    className: W.guildSection,
                    children: [
                        (0, r.jsx)(u.vwX, {
                            className: W.guildTitle,
                            children: Q ? H.NW.string(H.t.ohTzZG) : H.NW.string(H.t['eLfh+f'])
                        }),
                        (0, r.jsx)(ee, {
                            expressionSourceGuild: null != S ? S : y.JO.createFromGuildRecord(I),
                            hasJoinedExpressionSourceGuild: Q,
                            isDisplayingJoinGuildButtonInPopout: ef
                        }),
                        n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    o(),
                                    null != c.emojiId &&
                                        eh &&
                                        (0, r.jsx)(er, {
                                            emojiId: c.emojiId,
                                            expressionSourceGuild: S,
                                            popoutData: el,
                                            onClose: C,
                                            hasJoinedEmojiSourceGuild: Q,
                                            isDisplayingButtonInTopSection: ef || ep
                                        })
                                ]
                            })
                    ]
                });
            },
            eE = X || (Q && !q) || null != S;
        return (0, r.jsxs)(B.W_, {
            className: W.popoutContent,
            children: [e_(), eE && eg()]
        });
    },
    er = (e) => {
        var t;
        let { emojiId: n, expressionSourceGuild: i, hasJoinedEmojiSourceGuild: o, popoutData: a, onClose: s, isDisplayingButtonInTopSection: l } = e,
            c = (null !== (t = null == i ? void 0 : i.emojis) && void 0 !== t ? t : [])
                .slice(0, X + 1)
                .filter((e) => e.id !== n)
                .slice(0, X),
            d = () =>
                o
                    ? null
                    : c.map((e) =>
                          (0, r.jsx)(
                              u.ua7,
                              q(K({ text: e.require_colons ? ':'.concat(e.name, ':') : e.name }, B.b_), {
                                  children: (t) =>
                                      (0, r.jsx)(
                                          f.Z,
                                          K(
                                              {
                                                  className: W.otherEmoji,
                                                  emojiId: e.id,
                                                  animated: e.animated
                                              },
                                              t
                                          )
                                      )
                              }),
                              e.id
                          )
                      ),
            { type: p, description: _ } = a,
            h = () =>
                p === G.$.GET_PREMIUM
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(P.Z, {
                                  subscriptionTier: V.Si.TIER_2,
                                  buttonText: a.text,
                                  className: W.ctaButton,
                                  fullWidth: !0,
                                  onClick: () => s()
                              }),
                              null != _ &&
                                  (0, r.jsx)('div', {
                                      className: W.ctaDescription,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/medium',
                                          'aria-label': _,
                                          children: _
                                      })
                                  })
                          ]
                      })
                    : p === G.$.JOIN_GUILD
                      ? (0, r.jsx)(u.zxk, {
                            size: u.zxk.Sizes.SMALL,
                            className: W.ctaButton,
                            color: u.Ttl.BRAND,
                            fullWidth: !0,
                            onClick: () => {
                                (0, j.Ub)(i.id, {});
                            },
                            children: a.text
                        })
                      : null;
        return (0, r.jsxs)('div', {
            className: W.otherEmojisContainer,
            children: [d(), !l && h()]
        });
    };
