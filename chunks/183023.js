(n.d(t, {
    Az: () => ee,
    Oe: () => et,
    UA: () => er,
    n_: () => ei,
    vk: () => en
}),
    n(388685),
    n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    l = n(442837),
    c = n(507274),
    u = n(755721),
    d = n(481060),
    _ = n(749210),
    f = n(596454),
    p = n(100527),
    h = n(906732),
    m = n(213609),
    g = n(600164),
    E = n(686546),
    b = n(111028),
    y = n(738774),
    O = n(785896),
    v = n(231053),
    I = n(944386),
    T = n(565138),
    S = n(372769),
    A = n(889564),
    N = n(687476),
    C = n(761966),
    R = n(563927),
    P = n(98278),
    w = n(767714),
    D = n(703656),
    L = n(944486),
    x = n(914010),
    k = n(594174),
    M = n(626135),
    j = n(768581),
    U = n(900849),
    G = n(74538),
    B = n(886132),
    V = n(524444),
    F = n(981631),
    Z = n(176505),
    H = n(474936),
    Y = n(388032),
    W = n(239594);
function K(e, t, n) {
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
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                K(e, t, n[t]);
            }));
    }
    return e;
}
function q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Q = 32,
    J = 12,
    $ = () => ({
        page: null != (0, l.e7)([x.Z], () => x.Z.getGuildId()) ? F.ZY5.GUILD_CHANNEL : F.ZY5.DM_CHANNEL,
        section: F.jXE.EMOJI_UPSELL_POPOUT
    }),
    ee = (e) => {
        let { node: t } = e;
        (0, I.u)({
            emojiId: t.emojiId,
            currentGuildId: x.Z.getGuildId()
        });
        let n = (0, R.Z)(t.name);
        return (0, r.jsx)(c.V, {
            children: (0, r.jsx)(V.W_, {
                children: (0, r.jsxs)(g.Z, {
                    className: W.emojiSection,
                    children: [
                        (0, r.jsx)(f.Z, {
                            emojiName: t.name,
                            className: W.primaryEmoji,
                            src: t.src,
                            animated: !1,
                            size: 'jumbo'
                        }),
                        (0, r.jsxs)(g.Z, {
                            direction: g.Z.Direction.VERTICAL,
                            justify: g.Z.Justify.CENTER,
                            className: W.truncatingText,
                            children: [
                                (0, r.jsx)(d.Text, {
                                    className: W.__invalid_emojiName,
                                    variant: 'text-md/semibold',
                                    children: (0, r.jsx)(b.Z, { children: n })
                                }),
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: Y.intl.string(Y.t.sXdH8f)
                                })
                            ]
                        })
                    ]
                })
            })
        });
    },
    et = (e) => {
        let { expressionSourceGuild: t, hasJoinedExpressionSourceGuild: n, isDisplayingJoinGuildButtonInPopout: i } = e,
            { id: a, icon: s, name: l } = t,
            c = Q,
            u = j.ZP.getGuildIconURL({
                id: a,
                icon: s,
                size: c,
                canAnimate: !0
            }),
            _ = (n = null == n || n) || t.isDiscoverable(),
            f = () => {
                t.isDiscoverable() ? (0, U.Ub)(a, {}) : n && (0, D.uL)(F.Z5c.CHANNEL(a, L.Z.getChannelId(a)));
            },
            p = () =>
                null != u && _
                    ? (0, r.jsxs)(d.P3F, {
                          'aria-label': l,
                          onClick: f,
                          children: [
                              (0, r.jsx)('img', {
                                  src: u,
                                  alt: '',
                                  className: W.guildIcon
                              }),
                              ' :'
                          ]
                      })
                    : (0, r.jsx)(T.Z, {
                          size: T.Z.Sizes.SMALL,
                          className: W.guildIconNotClickable,
                          guild: t
                      }),
            h = () =>
                _
                    ? (0, r.jsx)(d.P3F, {
                          onClick: f,
                          className: W.truncatingText,
                          children: (0, r.jsx)(d.X6q, {
                              className: W.guildName,
                              variant: 'heading-md/semibold',
                              children: (0, r.jsx)(b.Z, { children: l })
                          })
                      })
                    : (0, r.jsx)(d.X6q, {
                          variant: 'heading-md/semibold',
                          children: (0, r.jsx)(b.Z, { children: l })
                      }),
            m = t.isDiscoverable() && null != t.presenceCount,
            y = () => {
                let e = !i && !n;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(d.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: Y.intl.format(Y.t['LC+S+v'], { membersOnline: t.presenceCount })
                        }),
                        (0, r.jsx)('div', { className: W.dotSeparator }),
                        e
                            ? (0, r.jsx)(d.P3F, {
                                  className: W.joinGuildLink,
                                  onClick: f,
                                  children: (0, r.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-link',
                                      children: Y.intl.string(Y.t.riu2R0)
                                  })
                              })
                            : (0, r.jsx)(d.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-secondary',
                                  children: Y.intl.string(Y.t.inyJqK)
                              })
                    ]
                });
            },
            O = () =>
                m
                    ? y()
                    : (0, r.jsx)(d.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: Y.intl.string(Y.t.H29mx8)
                      });
        return (0, r.jsxs)(g.Z, {
            align: g.Z.Align.CENTER,
            children: [
                (0, r.jsx)(E.ZP, {
                    mask: E.ZP.Masks.SQUIRCLE,
                    width: c,
                    height: c,
                    className: W.__invalid_guildIconContainer,
                    children: p()
                }),
                (0, r.jsxs)(g.Z, {
                    direction: g.Z.Direction.VERTICAL,
                    className: o()(W.__invalid_guildInformation, W.truncatingText),
                    children: [
                        (0, r.jsxs)(g.Z, {
                            align: g.Z.Align.CENTER,
                            children: [
                                (0, r.jsx)(S.Z, {
                                    guild: t,
                                    className: W.guildBadge
                                }),
                                h()
                            ]
                        }),
                        (0, r.jsx)(g.Z, {
                            align: g.Z.Align.CENTER,
                            children: O()
                        })
                    ]
                })
            ]
        });
    },
    en = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: i, nonce: a } = e,
            {
                expressionSourceGuild: o,
                expressionSourceApplication: s,
                sourceType: l,
                joinedEmojiSourceGuildRecord: u,
                emoji: d,
                isFetching: _
            } = (0, O.i)({
                emojiId: t.emojiId,
                refreshPositionKey: i
            });
        return _
            ? (0, r.jsx)(V.SE, {})
            : (0, r.jsx)(c.V, {
                  'aria-label': t.name,
                  children: (0, r.jsx)(er, {
                      node: t,
                      sourceType: l,
                      expressionSourceApplication: s,
                      guildEmoji: null != d ? d : void 0,
                      expressionSourceGuild: o,
                      joinedEmojiSourceGuildRecord: u,
                      closePopout: n,
                      onToggleShowMoreEmojis: i,
                      demoMode: !1,
                      nonce: a
                  })
              });
    },
    er = (e) => {
        var t, n, a;
        let { node: c, sourceType: E, expressionSourceApplication: O, expressionSourceGuild: T, joinedEmojiSourceGuildRecord: S, closePopout: R, onToggleShowMoreEmojis: D, guildEmoji: L, demoMode: j = !1, nonce: U } = e,
            K = (0, l.e7)([k.default], () => k.default.getCurrentUser()),
            z = (0, l.e7)([x.Z], () => x.Z.getGuildId()),
            q = G.ZP.isPremium(K),
            X = null != z && (z === (null == T ? void 0 : T.id) || z === (null == S ? void 0 : S.id)),
            Q = null != S,
            J = null != (t = null == T ? void 0 : T.isDiscoverable()) && t;
        j && ((q = !0), (J = !0), (Q = !1), (X = !1));
        let ee = $(),
            {
                isRoleSubscriptionEmoji: en,
                isUnusableRoleSubscriptionEmoji: er,
                userIsRoleSubscriber: ea
            } = i.useMemo(
                () =>
                    null == L
                        ? {
                              isRoleSubscriptionEmoji: !1,
                              isUnusableRoleSubscriptionEmoji: !1,
                              userIsRoleSubscriber: !1
                          }
                        : {
                              isRoleSubscriptionEmoji: A.yH(L),
                              isUnusableRoleSubscriptionEmoji: A.Fv(L, null != z ? z : void 0),
                              userIsRoleSubscriber: N.Z.getUserSubscriptionRoles(L.guildId).size > 0
                          },
                [L, z]
            ),
            eo = !!er && (0, y.Ol)(null == L ? void 0 : L.guildId),
            { analyticsLocations: es } = (0, h.ZP)(p.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, m.Z)(
            {
                type: s.ImpressionTypes.MODAL,
                name: s.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: es,
                    emoji_guild_id: null != (n = null == L ? void 0 : L.guildId) ? n : null,
                    emoji_id: null != (a = null == L ? void 0 : L.id) ? a : null
                }
            },
            { disableTrack: !en }
        );
        let el = x.Z.getGuildId(),
            ec = (0, B.a)({
                sourceType: E,
                expressionSourceApplication: O,
                isPremium: q,
                hasJoinedEmojiSourceGuild: Q,
                isRoleSubscriptionEmoji: en,
                isUnusableRoleSubscriptionEmoji: er,
                userIsRoleSubscriber: ea,
                emojiComesFromCurrentGuild: X,
                isDiscoverable: J,
                shouldHideRoleSubscriptionCTA: eo,
                onOpenPremiumSettings: () => {
                    (R(),
                        M.default.track(F.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_page: ee.page,
                            location_section: ee.section
                        }),
                        (0, P.z)());
                }
            }),
            eu = Q && er && !eo && ((q && en) || !q),
            ed = ec.emojiDescription,
            e_ = (0, I.u)({
                emojiId: c.emojiId,
                currentGuildId: el,
                popoutData: ec,
                emojiSourceGuildId: null == T ? void 0 : T.id,
                nonce: U,
                demoMode: j
            }),
            ef = ec.type === B.$.JOIN_GUILD,
            ep = ec.type === B.$.GET_PREMIUM,
            eh = () => {
                let e = async () => {
                        if (j || null == T || Q) return;
                        R();
                        let e = T.id;
                        try {
                            (await _.Z.joinGuild(e), _.Z.transitionToGuildSync(e));
                        } catch (e) {}
                    },
                    t = () => {
                        (R(), (null == S ? void 0 : S.id) != null && _.Z.transitionToGuildSync(S.id, { sourceLocationStack: [p.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL] }, Z.oC.ROLE_SUBSCRIPTIONS));
                    },
                    n = !Q && J,
                    i = () =>
                        ep
                            ? (0, r.jsx)(w.Z, {
                                  className: W.ctaButton,
                                  subscriptionTier: H.Si.TIER_2,
                                  size: u.zx.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: ec.text },
                                  onSubscribeModalClose: (t) => (t ? e() : R()),
                                  postSuccessGuild: n && null != T ? T : void 0,
                                  premiumModalAnalyticsLocation: ee
                              })
                            : ef
                              ? (0, r.jsx)('div', {
                                    'data-button-hoisted-classname-wrapper': !0,
                                    className: W.ctaButton,
                                    children: (0, r.jsx)(d.zxk, {
                                        variant: 'primary',
                                        size: 'sm',
                                        text: ec.text,
                                        fullWidth: !0,
                                        onClick: e
                                    })
                                })
                              : void 0;
                return (0, r.jsxs)('div', {
                    className: W.emojiSection,
                    children: [
                        (0, r.jsxs)(g.Z, {
                            children: [
                                (0, r.jsx)(f.Z, {
                                    className: W.primaryEmoji,
                                    emojiId: c.emojiId,
                                    emojiName: c.name,
                                    animated: c.animated,
                                    size: 'jumbo'
                                }),
                                (0, r.jsxs)(g.Z, {
                                    direction: g.Z.Direction.VERTICAL,
                                    justify: g.Z.Justify.CENTER,
                                    className: W.truncatingText,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-md/semibold',
                                            children: (0, r.jsx)(b.Z, { children: c.name })
                                        }),
                                        null != ed &&
                                            (0, r.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                children: ed
                                            })
                                    ]
                                })
                            ]
                        }),
                        i(),
                        eu &&
                            (0, r.jsx)(C.Z, {
                                className: W.ctaButton,
                                size: u.zx.Sizes.SMALL,
                                fullWidth: !0,
                                onClick: t,
                                children: ea ? Y.intl.string(Y.t.yma8Vl) : Y.intl.string(Y.t.nN2DIi)
                            })
                    ]
                });
            },
            [em, eg] = i.useState(!1),
            eE = () => {
                var e, t;
                let n = null != T && !Q && J && (null != (t = null == T || null == (e = T.emojis) ? void 0 : e.length) ? t : 0) > 1,
                    i = () => {
                        n && (null == D || D(), em || j || M.default.track(F.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, e_), eg(!em));
                    },
                    a = () => {
                        let e = Y.intl.string(Y.t.pnsAS0);
                        return (0, r.jsx)(d.P3F, {
                            onClick: i,
                            className: W.showMoreEmojis,
                            children: (0, r.jsxs)(g.Z, {
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        className: W.__invalid_showMoreEmojisLabel,
                                        'aria-label': e,
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: e
                                    }),
                                    (0, r.jsx)(d.CJ0, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: o()(W.showMoreEmojisArrow, { [W.showMoreEmojisArrowCollapsed]: !em })
                                    })
                                ]
                            })
                        });
                    };
                return (0, r.jsxs)('div', {
                    className: W.guildSection,
                    children: [
                        (0, r.jsx)(d.vwX, {
                            className: W.guildTitle,
                            children: Q ? Y.intl.string(Y.t.ohTzZG) : Y.intl.string(Y.t['eLfh+f'])
                        }),
                        (0, r.jsx)(et, {
                            expressionSourceGuild: null != T ? T : v.JO.createFromGuildRecord(S),
                            hasJoinedExpressionSourceGuild: Q,
                            isDisplayingJoinGuildButtonInPopout: ef
                        }),
                        n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    a(),
                                    null != c.emojiId &&
                                        em &&
                                        (0, r.jsx)(ei, {
                                            emojiId: c.emojiId,
                                            expressionSourceGuild: T,
                                            popoutData: ec,
                                            onClose: R,
                                            hasJoinedEmojiSourceGuild: Q,
                                            isDisplayingButtonInTopSection: ef || ep
                                        })
                                ]
                            })
                    ]
                });
            },
            eb = J || (Q && !X) || null != T;
        return (0, r.jsxs)(V.W_, {
            className: W.popoutContent,
            children: [eh(), eb && eE()]
        });
    },
    ei = (e) => {
        var t;
        let { emojiId: n, expressionSourceGuild: i, hasJoinedEmojiSourceGuild: a, popoutData: o, onClose: s, isDisplayingButtonInTopSection: l } = e,
            c = (null != (t = null == i ? void 0 : i.emojis) ? t : [])
                .slice(0, J + 1)
                .filter((e) => e.id !== n)
                .slice(0, J),
            u = () =>
                a
                    ? null
                    : c.map((e) =>
                          (0, r.jsx)(
                              d.ua7,
                              X(z({ text: e.require_colons ? ':'.concat(e.name, ':') : e.name }, V.b_), {
                                  children: (t) =>
                                      (0, r.jsx)(
                                          f.Z,
                                          z(
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
            { type: _, description: p } = o,
            h = () =>
                _ === B.$.GET_PREMIUM
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(w.Z, {
                                  subscriptionTier: H.Si.TIER_2,
                                  textOptions: { textOverride: o.text },
                                  className: W.ctaButton,
                                  fullWidth: !0,
                                  onClick: () => s()
                              }),
                              null != p &&
                                  (0, r.jsx)('div', {
                                      className: W.ctaDescription,
                                      children: (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/medium',
                                          'aria-label': p,
                                          children: p
                                      })
                                  })
                          ]
                      })
                    : _ === B.$.JOIN_GUILD
                      ? (0, r.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: W.ctaButton,
                            children: (0, r.jsx)(d.zxk, {
                                variant: 'primary',
                                size: 'sm',
                                text: o.text,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, U.Ub)(i.id, {});
                                }
                            })
                        })
                      : null;
        return (0, r.jsxs)('div', {
            className: W.otherEmojisContainer,
            children: [u(), !l && h()]
        });
    };
