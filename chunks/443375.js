n.d(t, { Z: () => W });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(394821),
    c = n(841784),
    u = n(833664),
    d = n(420660),
    f = n(100527),
    _ = n(906732),
    p = n(379357),
    h = n(358696),
    m = n(649700),
    g = n(769654),
    E = n(750154),
    b = n(960870),
    y = n(139793),
    v = n(994746),
    O = n(273284),
    I = n(232174),
    S = n(510659),
    T = n(287954),
    N = n(660579),
    A = n(652853),
    C = n(64621),
    R = n(979038),
    P = n(448980),
    w = n(336383),
    D = n(194811),
    L = n(373826),
    x = n(315324),
    M = n(262210),
    k = n(386019),
    j = n(881530),
    U = n(228168),
    G = n(981631),
    B = n(701488),
    F = n(388032),
    V = n(227832);
function Z(e, t, n) {
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
function H(e) {
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
                Z(e, t, n[t]);
            });
    }
    return e;
}
function W(e) {
    var t;
    let { user: n, currentUser: a, activity: Z, application: W, voiceGuild: Y, voiceChannel: K, profileGuildId: z, className: q, onClose: Q } = e,
        X = i.useRef(null),
        { analyticsLocations: J } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: $ } = (0, A.z)(),
        ee = { [V.fullSize]: $ === U.y0.FULL_SIZE },
        { interactionSource: et, interactionSourceId: en } = (0, S.Xo)(),
        er = (0, m.Z)({
            activity: Z,
            user: n
        }),
        ei = (0, b.Z)({
            display: 'live',
            user: n,
            activity: Z,
            entry: er,
            analyticsLocations: J
        }),
        ea = (0, y.Z)({
            userId: n.id,
            onAction: ei
        }),
        eo = (0, v.Z)(Z),
        { largeImage: es, smallImage: el } = (0, p.FO)(Z, W),
        ec = (0, j.Z)({
            location: 'UserProfileActivityCardWithInteractionToolbar',
            user: n,
            currentUser: a,
            activity: Z,
            application: W,
            entry: er,
            onClose: Q
        }),
        eu = () => {
            let e = (0, l.Z)(Z) ? 'crunchyroll' : 'default';
            return null == ec
                ? (0, r.jsx)(h.E, {
                      image: es,
                      smallImage: el,
                      size: h.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(h.E, {
                      image: es,
                      smallImage: el,
                      size: h.J.SIZE_60,
                      className: V.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          e.stopPropagation(), ei({ action: 'PRESS_IMAGE' }), ec(e);
                      }
                  });
        },
        ed = () => {
            var e;
            return (0, d.Z)(Z) && null != K
                ? (0, r.jsxs)('div', {
                      className: V.voiceChannelText,
                      children: [
                          (0, r.jsx)(s.gj8, {
                              size: 'xxs',
                              color: s.TVs.colors.TEXT_NORMAL,
                              className: V.voiceIcon
                          }),
                          (0, r.jsx)(L.Z, {
                              variant: 'heading-sm/semibold',
                              text: K.name
                          })
                      ]
                  })
                : (0, u.Z)(Z) || (0, E.dS)(Z)
                  ? (0, r.jsx)(L.Z, {
                        variant: 'heading-sm/semibold',
                        text: Z.name
                    })
                  : (0, r.jsx)(L.Z, {
                        variant: 'heading-sm/semibold',
                        text: null != (e = Z.details) ? e : Z.name
                    });
        },
        ef = () => {
            if ((0, d.Z)(Z) && null != Y)
                return (0, r.jsx)(L.Z, {
                    variant: 'text-xs/normal',
                    text: F.NW.formatToPlainString(F.t['hq/Qzc'], { guildName: Y.name }),
                    onClick: () => {
                        (0, g.X)(Y.id), ei({ action: 'OPEN_VOICE_GUILD' }), null == Q || Q();
                    }
                });
            if ((0, u.Z)(Z))
                return (0, r.jsx)(L.Z, {
                    variant: 'text-xs/normal',
                    text: Z.details
                });
            if ((0, E.dS)(Z)) {
                var e;
                return (0, r.jsx)(L.Z, {
                    variant: 'text-xs/normal',
                    text: null == Z || null == (e = Z.assets) ? void 0 : e.small_text
                });
            }
            return (0, r.jsx)(L.Z, {
                variant: 'text-xs/normal',
                text: Z.state
            });
        },
        e_ = () => {
            var e, t, n, i, a, o;
            if (Z.type === G.IIU.WATCHING) return null;
            if ((0, u.Z)(Z)) return ep();
            if ((0, E.dS)(Z) && (null == (e = Z.party) ? void 0 : e.size) != null && (null == (t = Z.party) ? void 0 : t.size.length) >= 2) {
                let e = F.NW.formatToPlainString(F.t['JC/3x8'], {
                    numSpeakers: null == (i = Z.party) ? void 0 : i.size[0],
                    numListeners: (null == (a = Z.party) ? void 0 : a.size[1]) - (null == (o = Z.party) ? void 0 : o.size[0])
                });
                return (0, r.jsx)(L.Z, {
                    variant: 'text-xs/normal',
                    text: e
                });
            }
            return (0, r.jsx)(L.Z, {
                text: null == (n = Z.assets) ? void 0 : n.large_text,
                variant: 'text-xs/normal'
            });
        },
        ep = () => {
            var e, t, n, i;
            return (null == (e = Z.party) ? void 0 : e.size) == null && Z.application_id === B.Zc
                ? (0, r.jsxs)('div', {
                      className: V.gameState,
                      children: [
                          (0, r.jsx)(L.Z, {
                              variant: 'text-xs/normal',
                              text: Z.state
                          }),
                          (0, r.jsx)(L.Z, {
                              variant: 'text-xs/normal',
                              text: F.NW.formatToPlainString(F.t['u//9Bw'], {
                                  count: '0',
                                  max: null != (i = null == W ? void 0 : W.getMaxParticipants()) ? i : 0
                              })
                          })
                      ]
                  })
                : (0, c.Z)(Z) && (null == (t = Z.party) ? void 0 : t.size) != null && (null == (n = Z.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: V.gameState,
                        children: [
                            (0, r.jsx)(L.Z, {
                                variant: 'text-xs/normal',
                                text: Z.state
                            }),
                            (0, r.jsx)(L.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === Z.party.size[1]
                                        ? F.NW.formatToPlainString(F.t.IM4J4e, { count: Z.party.size[0] })
                                        : F.NW.formatToPlainString(F.t['u//9Bw'], {
                                              count: Z.party.size[0],
                                              max: Z.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == Z.party
                    ? (0, r.jsx)(L.Z, {
                          variant: 'text-xs/normal',
                          text: Z.state
                      })
                    : null;
        },
        eh = () => {
            if (!(0, I.Z)(Z)) return null;
            let { start: e, end: t } = Z.timestamps;
            return (0, r.jsx)(M.Z, {
                start: e,
                end: t
            });
        },
        em = () =>
            null == ec
                ? (0, r.jsxs)('div', {
                      children: [ed(), ef(), e_()]
                  })
                : (0, r.jsxs)(s.P3F, {
                      className: V.clickableText,
                      onClick: (e) => {
                          e.stopPropagation(), ei({ action: 'PRESS_TEXT' }), ec(e);
                      },
                      children: [ed(), ef(), e_()]
                  }),
        eg = () =>
            null == Y || null == K
                ? null
                : (0, r.jsx)(x.Z, {
                      user: n,
                      guild: Y,
                      channel: K,
                      onAction: ei,
                      onClose: Q
                  }),
        eE = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: o()(V.actions, ee),
                      children: (0, r.jsx)(R.Z, {
                          activity: Z,
                          user: n,
                          onAction: ei,
                          onClose: Q
                      })
                  });
    if (null === $) return null;
    let eb = null != (t = Z.application_id) ? t : Z.name,
        ey = et === U.n_.ACTIVITY && en === eb;
    return (0, r.jsx)(_.Gt, {
        value: J,
        children: (0, r.jsx)(C.Z, {
            targetElementRef: X,
            sourceType: U.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(T.Z, {
                user: n,
                guildId: z,
                profileType: $,
                sourceId: eb,
                sourceDetails: null == er ? (0, O.Z)(Z) : null,
                entry: er,
                onAction: ei,
                sourceType: U.n_.ACTIVITY,
                children: () =>
                    (0, r.jsx)(N.Z, {
                        ref: X,
                        user: n,
                        className: V.toolbarContainer,
                        interactionSourceId: eb,
                        sourceType: U.n_.ACTIVITY,
                        onAction: ei,
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(k.Z, {
                                display: 'live',
                                user: n,
                                activity: Z,
                                entry: er,
                                onClose: Q,
                                children: e
                            }),
                        onShowToolbar: () => ei({ action: 'HOVER_ACTIVITY_CARD' }),
                        children: (0, r.jsxs)(w.Z, {
                            ref: ea,
                            className: o()(q, { [V.hoisted]: ey }),
                            onAction: ei,
                            onClose: Q,
                            children: [
                                (0, r.jsx)(D.Z, H({}, eo)),
                                (0, r.jsxs)('div', {
                                    className: V.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: o()(V.content, ee),
                                            children: [
                                                !n.bot && eu(),
                                                (0, r.jsxs)('div', {
                                                    className: V.details,
                                                    children: [
                                                        em(),
                                                        !n.bot &&
                                                            (0, r.jsx)(P.Z, {
                                                                user: n,
                                                                activity: Z,
                                                                className: V.badges
                                                            }),
                                                        eh()
                                                    ]
                                                }),
                                                $ === U.y0.FULL_SIZE && eE()
                                            ]
                                        }),
                                        eg()
                                    ]
                                }),
                                $ !== U.y0.FULL_SIZE && eE()
                            ]
                        })
                    })
            })
        })
    });
}
