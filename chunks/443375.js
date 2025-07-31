n.d(t, { Z: () => q });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(394821),
    c = n(841784),
    u = n(833664),
    d = n(420660),
    _ = n(100527),
    f = n(906732),
    p = n(379357),
    h = n(264832),
    m = n(358696),
    g = n(649700),
    E = n(313201),
    b = n(833858),
    y = n(223135),
    O = n(769654),
    v = n(750154),
    I = n(960870),
    T = n(139793),
    S = n(994746),
    A = n(273284),
    N = n(232174),
    C = n(510659),
    R = n(287954),
    P = n(660579),
    w = n(652853),
    D = n(64621),
    L = n(979038),
    x = n(448980),
    M = n(336383),
    k = n(194811),
    j = n(373826),
    U = n(668700),
    G = n(262210),
    B = n(386019),
    V = n(881530),
    F = n(228168),
    Z = n(981631),
    H = n(701488),
    Y = n(388032),
    W = n(227832);
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
function q(e) {
    var t;
    let { user: n, currentUser: a, activity: K, application: q, voiceGuild: X, voiceChannel: Q, profileGuildId: J, className: $, onClose: ee } = e,
        et = (0, E.Dt)(),
        en = (0, E.Dt)(),
        er = i.useRef(null),
        { analyticsLocations: ei } = (0, f.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: ea } = (0, w.z)(),
        { interactionSource: eo, interactionSourceId: es } = (0, C.Xo)(),
        el = (0, g.Z)({
            activity: K,
            user: n
        }),
        ec = (0, I.Z)({
            display: 'live',
            user: n,
            activity: K,
            entry: el,
            analyticsLocations: ei
        }),
        eu = (0, T.Z)({
            userId: n.id,
            onAction: ec
        }),
        ed = (0, S.Z)(K),
        e_ = null != ed.text && '' !== ed.text,
        { largeImage: ef, smallImage: ep } = (0, p.FO)(K, q),
        eh = (0, V.Z)({
            location: 'UserProfileActivityCardWithInteractionToolbar',
            user: n,
            currentUser: a,
            activity: K,
            application: q,
            entry: el,
            onClose: ee
        }),
        em = () => {
            let e = (0, l.Z)(K) ? 'crunchyroll' : 'default',
                t = ea === F.lY.MODAL_V2 ? m.J.SIZE_100 : m.J.SIZE_60;
            return K.type === Z.IIU.HANG_STATUS
                ? (0, r.jsx)(y.Z, {
                      hangStatusActivity: K,
                      className: o()(W.hangStatusIcon, W.image, { [W.small]: ea !== F.lY.MODAL_V2 })
                  })
                : null == eh
                  ? (0, r.jsx)(m.E, {
                        image: ef,
                        smallImage: ep,
                        size: t,
                        aspectRatio: e,
                        className: W.image
                    })
                  : (0, r.jsx)(m.E, {
                        image: ef,
                        smallImage: ep,
                        size: t,
                        className: W.clickableImage,
                        aspectRatio: e,
                        onClick: (e) => {
                            (e.stopPropagation(), ec({ action: 'PRESS_IMAGE' }), eh(e));
                        }
                    });
        },
        eg = () =>
            K.type === Z.IIU.HANG_STATUS
                ? (0, r.jsx)(j.f, {
                      variant: 'heading-sm/semibold',
                      text: (0, b.O8)(K),
                      id: et
                  })
                : (0, d.Z)(K) && null != Q
                  ? (0, r.jsxs)('div', {
                        className: W.voiceChannelText,
                        children: [
                            (0, r.jsx)(s.gj8, {
                                size: 'xxs',
                                color: s.TVs.colors.TEXT_DEFAULT,
                                className: W.voiceIcon
                            }),
                            (0, r.jsx)(j.f, {
                                variant: 'heading-sm/semibold',
                                text: Q.name,
                                id: et
                            })
                        ]
                    })
                  : (0, u.Z)(K) || (0, v.dS)(K)
                    ? (0, r.jsx)(j.f, {
                          variant: 'heading-sm/semibold',
                          text: K.name,
                          id: et
                      })
                    : null != K.details
                      ? (0, r.jsx)(h._, {
                            href: K.details_url,
                            children: (0, r.jsx)(j.f, {
                                variant: 'heading-sm/semibold',
                                text: K.details,
                                id: et
                            })
                        })
                      : (0, r.jsx)(j.f, {
                            variant: 'heading-sm/semibold',
                            text: K.name,
                            id: et
                        }),
        eE = () => {
            if (K.type === Z.IIU.HANG_STATUS) return null;
            if ((0, d.Z)(K) && null != X)
                return (0, r.jsx)(j.Z, {
                    variant: 'text-xs/normal',
                    text: Y.intl.formatToPlainString(Y.t['hq/Qzc'], { guildName: X.name }),
                    onClick: () => {
                        ((0, O.X)(X.id), ec({ action: 'OPEN_VOICE_GUILD' }), null == ee || ee());
                    }
                });
            if ((0, u.Z)(K))
                return (0, r.jsx)(h._, {
                    href: K.details_url,
                    children: (0, r.jsx)(j.Z, {
                        variant: 'text-xs/normal',
                        text: K.details
                    })
                });
            if ((0, v.dS)(K)) {
                var e;
                return (0, r.jsx)(j.Z, {
                    variant: 'text-xs/normal',
                    text: null == K || null == (e = K.assets) ? void 0 : e.small_text
                });
            }
            return (0, r.jsx)(h._, {
                href: K.state_url,
                children: (0, r.jsx)(j.Z, {
                    variant: 'text-xs/normal',
                    text: K.state
                })
            });
        },
        eb = () => {
            var e, t, n, i, a, o, s, l;
            if (K.type === Z.IIU.WATCHING) return null;
            if ((0, u.Z)(K)) return ey();
            if ((0, v.dS)(K) && (null == (e = K.party) ? void 0 : e.size) != null && (null == (t = K.party) ? void 0 : t.size.length) >= 2) {
                let e = Y.intl.formatToPlainString(Y.t['JC/3x8'], {
                    numSpeakers: null == (i = K.party) ? void 0 : i.size[0],
                    numListeners: (null == (a = K.party) ? void 0 : a.size[1]) - (null == (o = K.party) ? void 0 : o.size[0])
                });
                return (0, r.jsx)(j.Z, {
                    variant: 'text-xs/normal',
                    text: e
                });
            }
            return (null == (n = K.assets) ? void 0 : n.large_text) != null
                ? (0, r.jsx)(h._, {
                      href: null == (s = K.assets) ? void 0 : s.large_url,
                      children: (0, r.jsx)(j.Z, {
                          text: null == (l = K.assets) ? void 0 : l.large_text,
                          variant: 'text-xs/normal'
                      })
                  })
                : null;
        },
        ey = () => {
            var e, t, n, i;
            return (null == (e = K.party) ? void 0 : e.size) == null && K.application_id === H.Zc
                ? (0, r.jsxs)('div', {
                      className: W.gameState,
                      children: [
                          (0, r.jsx)(h._, {
                              href: K.state_url,
                              children: (0, r.jsx)(j.Z, {
                                  variant: 'text-xs/normal',
                                  text: K.state
                              })
                          }),
                          (0, r.jsx)(j.Z, {
                              variant: 'text-xs/normal',
                              text: Y.intl.formatToPlainString(Y.t['u//9Bw'], {
                                  count: '0',
                                  max: null != (i = null == q ? void 0 : q.getMaxParticipants()) ? i : 0
                              })
                          })
                      ]
                  })
                : (0, c.Z)(K) && (null == (t = K.party) ? void 0 : t.size) != null && (null == (n = K.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: W.gameState,
                        children: [
                            (0, r.jsx)(h._, {
                                href: K.state_url,
                                children: (0, r.jsx)(j.Z, {
                                    variant: 'text-xs/normal',
                                    text: K.state
                                })
                            }),
                            (0, r.jsx)(j.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === K.party.size[1]
                                        ? Y.intl.formatToPlainString(Y.t.IM4J4e, { count: K.party.size[0] })
                                        : Y.intl.formatToPlainString(Y.t['u//9Bw'], {
                                              count: K.party.size[0],
                                              max: K.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == K.party
                    ? (0, r.jsx)(h._, {
                          href: K.state_url,
                          children: (0, r.jsx)(j.Z, {
                              variant: 'text-xs/normal',
                              text: K.state
                          })
                      })
                    : null;
        },
        eO = () => {
            if (!(0, N.Z)(K)) return null;
            let { start: e, end: t } = K.timestamps;
            return (0, r.jsx)(G.Z, {
                start: e,
                end: t
            });
        },
        ev = () =>
            null == eh
                ? (0, r.jsxs)('div', {
                      children: [eg(), eE(), eb()]
                  })
                : (0, r.jsxs)(s.P3F, {
                      className: W.clickableText,
                      onClick: (e) => {
                          (e.stopPropagation(), ec({ action: 'PRESS_TEXT' }), eh(e));
                      },
                      children: [eg(), eE(), eb()]
                  }),
        eI = () =>
            null == X || null == Q
                ? null
                : (0, r.jsx)(U.Z, {
                      user: n,
                      guild: X,
                      channel: Q,
                      onAction: ec,
                      onClose: ee
                  }),
        eT = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: W.actions,
                      children: (0, r.jsx)(L.Z, {
                          activity: K,
                          user: n,
                          onAction: ec,
                          onClose: ee,
                          application: q
                      })
                  });
    if (null === ea) return null;
    let eS = null != (t = K.application_id) ? t : K.name,
        eA = eo === F.n_.ACTIVITY && es === eS;
    return (0, r.jsx)(f.Gt, {
        value: ei,
        children: (0, r.jsx)(D.Z, {
            targetElementRef: er,
            sourceType: F.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(R.Z, {
                user: n,
                guildId: J,
                themeType: ea,
                sourceId: eS,
                sourceDetails: null == el ? (0, A.Z)(K) : null,
                entry: el,
                onAction: ec,
                sourceType: F.n_.ACTIVITY,
                children: () =>
                    (0, r.jsx)(P.Z, {
                        ref: er,
                        user: n,
                        className: W.toolbarContainer,
                        interactionSourceId: eS,
                        sourceType: F.n_.ACTIVITY,
                        onAction: ec,
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(B.Z, {
                                display: 'live',
                                user: n,
                                activity: K,
                                entry: el,
                                onClose: ee,
                                children: e
                            }),
                        onShowToolbar: () => ec({ action: 'HOVER_ACTIVITY_CARD' }),
                        children: (0, r.jsxs)(M.Z, {
                            ref: eu,
                            className: o()($, { [W.hoisted]: eA }),
                            onAction: ec,
                            onClose: ee,
                            'aria-labelledby': e_ ? ''.concat(en, ' ').concat(et) : et,
                            children: [
                                (0, r.jsx)(k.Z, z({ textId: en }, ed)),
                                (0, r.jsxs)('div', {
                                    className: W.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: W.content,
                                            children: [
                                                !n.bot && em(),
                                                (0, r.jsxs)('div', {
                                                    className: W.details,
                                                    children: [
                                                        ev(),
                                                        !n.bot &&
                                                            (0, r.jsx)(x.Z, {
                                                                user: n,
                                                                activity: K,
                                                                className: W.badges
                                                            }),
                                                        eO(),
                                                        ea === F.lY.MODAL_V2 && eT()
                                                    ]
                                                }),
                                                ea === F.lY.MODAL && eT()
                                            ]
                                        }),
                                        eI()
                                    ]
                                }),
                                ea !== F.lY.MODAL && ea !== F.lY.MODAL_V2 && eT()
                            ]
                        })
                    })
            })
        })
    });
}
