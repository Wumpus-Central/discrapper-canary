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
    _ = n(100527),
    p = n(906732),
    h = n(213609),
    m = n(600164),
    g = n(686546),
    E = n(111028),
    b = n(738774),
    y = n(785896),
    v = n(231053),
    O = n(944386),
    I = n(565138),
    S = n(372769),
    T = n(889564),
    N = n(687476),
    A = n(761966),
    C = n(563927),
    R = n(98278),
    P = n(197115),
    w = n(703656),
    D = n(944486),
    L = n(914010),
    x = n(594174),
    M = n(626135),
    k = n(768581),
    j = n(900849),
    U = n(74538),
    G = n(886132),
    B = n(524444),
    F = n(981631),
    V = n(176505),
    Z = n(474936),
    H = n(388032),
    W = n(239594);
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
        page: null != (0, l.e7)([L.Z], () => L.Z.getGuildId()) ? F.ZY5.GUILD_CHANNEL : F.ZY5.DM_CHANNEL,
        section: F.jXE.EMOJI_UPSELL_POPOUT
    }),
    $ = (e) => {
        let { node: t } = e;
        (0, O.u)({
            emojiId: t.emojiId,
            currentGuildId: L.Z.getGuildId()
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
            _ = () => {
                t.isDiscoverable() ? (0, j.Ub)(o, {}) : n && (0, w.uL)(F.Z5c.CHANNEL(o, D.Z.getChannelId(o)));
            },
            p = () =>
                null != d && f
                    ? (0, r.jsxs)(u.P3F, {
                          'aria-label': l,
                          onClick: _,
                          children: [
                              (0, r.jsx)('img', {
                                  src: d,
                                  alt: '',
                                  className: W.guildIcon
                              }),
                              ' :'
                          ]
                      })
                    : (0, r.jsx)(I.Z, {
                          size: I.Z.Sizes.SMALL,
                          className: W.guildIconNotClickable,
                          guild: t
                      }),
            h = () =>
                f
                    ? (0, r.jsx)(u.P3F, {
                          onClick: _,
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
            b = t.isDiscoverable() && null != t.presenceCount,
            y = () => {
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
                                  onClick: _,
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
            v = () =>
                b
                    ? y()
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
                    children: p()
                }),
                (0, r.jsxs)(m.Z, {
                    direction: m.Z.Direction.VERTICAL,
                    className: a()(W.__invalid_guildInformation, W.truncatingText),
                    children: [
                        (0, r.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, r.jsx)(S.Z, {
                                    guild: t,
                                    className: W.guildBadge
                                }),
                                h()
                            ]
                        }),
                        (0, r.jsx)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: v()
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
            } = (0, y.i)({
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
        let { node: c, sourceType: g, expressionSourceApplication: y, expressionSourceGuild: I, joinedEmojiSourceGuildRecord: S, closePopout: C, onToggleShowMoreEmojis: w, guildEmoji: D, demoMode: k = !1, nonce: j } = e,
            Y = (0, l.e7)([x.default], () => x.default.getCurrentUser()),
            K = (0, l.e7)([L.Z], () => L.Z.getGuildId()),
            z = U.ZP.isPremium(Y),
            q = null != K && (K === (null == I ? void 0 : I.id) || K === (null == S ? void 0 : S.id)),
            Q = null != S,
            X = null != (t = null == I ? void 0 : I.isDiscoverable()) && t;
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
            eo = !!en && (0, b.Ol)(null == D ? void 0 : D.guildId),
            { analyticsLocations: ea } = (0, p.ZP)(_.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, h.Z)(
            {
                type: s.ImpressionTypes.MODAL,
                name: s.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: ea,
                    emoji_guild_id: null != (n = null == D ? void 0 : D.guildId) ? n : null,
                    emoji_id: null != (o = null == D ? void 0 : D.id) ? o : null
                }
            },
            { disableTrack: !et }
        );
        let es = L.Z.getGuildId(),
            el = (0, G.a)({
                sourceType: g,
                expressionSourceApplication: y,
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
                        M.default.track(F.rMx.PREMIUM_PROMOTION_OPENED, {
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
                emojiSourceGuildId: null == I ? void 0 : I.id,
                nonce: j,
                demoMode: k
            }),
            ef = el.type === G.$.JOIN_GUILD,
            e_ = el.type === G.$.GET_PREMIUM,
            ep = () => {
                let e = async () => {
                        if (k || null == I || Q) return;
                        C();
                        let e = I.id;
                        try {
                            await d.Z.joinGuild(e), d.Z.transitionToGuildSync(e);
                        } catch (e) {}
                    },
                    t = () => {
                        C(), (null == S ? void 0 : S.id) != null && d.Z.transitionToGuildSync(S.id, { sourceLocationStack: [_.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL] }, V.oC.ROLE_SUBSCRIPTIONS);
                    },
                    n = !Q && X,
                    i = () =>
                        e_
                            ? (0, r.jsx)(P.Z, {
                                  className: W.ctaButton,
                                  subscriptionTier: Z.Si.TIER_2,
                                  size: u.zxk.Sizes.SMALL,
                                  fullWidth: !0,
                                  buttonText: el.text,
                                  onSubscribeModalClose: (t) => (t ? e() : C()),
                                  postSuccessGuild: n && null != I ? I : void 0,
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
                let n = null != I && !Q && X && (null != (t = null == I || null == (e = I.emojis) ? void 0 : e.length) ? t : 0) > 1,
                    i = () => {
                        n && (null == w || w(), eh || k || M.default.track(F.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ed), em(!eh));
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
                            expressionSourceGuild: null != I ? I : v.JO.createFromGuildRecord(S),
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
                                            expressionSourceGuild: I,
                                            popoutData: el,
                                            onClose: C,
                                            hasJoinedEmojiSourceGuild: Q,
                                            isDisplayingButtonInTopSection: ef || e_
                                        })
                                ]
                            })
                    ]
                });
            },
            eE = X || (Q && !q) || null != I;
        return (0, r.jsxs)(B.W_, {
            className: W.popoutContent,
            children: [ep(), eE && eg()]
        });
    },
    er = (e) => {
        var t;
        let { emojiId: n, expressionSourceGuild: i, hasJoinedEmojiSourceGuild: o, popoutData: a, onClose: s, isDisplayingButtonInTopSection: l } = e,
            c = (null != (t = null == i ? void 0 : i.emojis) ? t : [])
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
            { type: _, description: p } = a,
            h = () =>
                _ === G.$.GET_PREMIUM
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(P.Z, {
                                  subscriptionTier: Z.Si.TIER_2,
                                  buttonText: a.text,
                                  className: W.ctaButton,
                                  fullWidth: !0,
                                  onClick: () => s()
                              }),
                              null != p &&
                                  (0, r.jsx)('div', {
                                      className: W.ctaDescription,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/medium',
                                          'aria-label': p,
                                          children: p
                                      })
                                  })
                          ]
                      })
                    : _ === G.$.JOIN_GUILD
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
