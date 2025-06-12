n.d(t, { Z: () => W });
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
    h = n(358696),
    m = n(649700),
    g = n(313201),
    E = n(769654),
    b = n(750154),
    y = n(960870),
    O = n(139793),
    v = n(994746),
    I = n(273284),
    T = n(232174),
    S = n(510659),
    A = n(287954),
    N = n(660579),
    C = n(652853),
    R = n(64621),
    P = n(979038),
    w = n(448980),
    D = n(336383),
    L = n(194811),
    x = n(373826),
    M = n(668700),
    k = n(262210),
    j = n(386019),
    U = n(881530),
    G = n(228168),
    B = n(981631),
    V = n(701488),
    F = n(388032),
    Z = n(227832);
function H(e, t, n) {
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
function Y(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function W(e) {
    var t;
    let { user: n, currentUser: a, activity: H, application: W, voiceGuild: K, voiceChannel: z, profileGuildId: q, className: X, onClose: Q } = e,
        J = (0, g.Dt)(),
        $ = (0, g.Dt)(),
        ee = i.useRef(null),
        { analyticsLocations: et } = (0, f.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: en } = (0, C.z)(),
        { interactionSource: er, interactionSourceId: ei } = (0, S.Xo)(),
        ea = (0, m.Z)({
            activity: H,
            user: n
        }),
        eo = (0, y.Z)({
            display: 'live',
            user: n,
            activity: H,
            entry: ea,
            analyticsLocations: et
        }),
        es = (0, O.Z)({
            userId: n.id,
            onAction: eo
        }),
        el = (0, v.Z)(H),
        ec = null != el.text && '' !== el.text,
        { largeImage: eu, smallImage: ed } = (0, p.FO)(H, W),
        e_ = (0, U.Z)({
            location: 'UserProfileActivityCardWithInteractionToolbar',
            user: n,
            currentUser: a,
            activity: H,
            application: W,
            entry: ea,
            onClose: Q
        }),
        ef = () => {
            let e = (0, l.Z)(H) ? 'crunchyroll' : 'default',
                t = en === G.lY.MODAL_V2 ? h.J.SIZE_100 : h.J.SIZE_60;
            return null == e_
                ? (0, r.jsx)(h.E, {
                      image: eu,
                      smallImage: ed,
                      size: t,
                      aspectRatio: e,
                      className: Z.image
                  })
                : (0, r.jsx)(h.E, {
                      image: eu,
                      smallImage: ed,
                      size: t,
                      className: Z.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          e.stopPropagation(), eo({ action: 'PRESS_IMAGE' }), e_(e);
                      }
                  });
        },
        ep = () => {
            var e;
            return (0, d.Z)(H) && null != z
                ? (0, r.jsxs)('div', {
                      className: Z.voiceChannelText,
                      children: [
                          (0, r.jsx)(s.gj8, {
                              size: 'xxs',
                              color: s.TVs.colors.TEXT_NORMAL,
                              className: Z.voiceIcon
                          }),
                          (0, r.jsx)(x.f, {
                              variant: 'heading-sm/semibold',
                              text: z.name,
                              id: J
                          })
                      ]
                  })
                : (0, u.Z)(H) || (0, b.dS)(H)
                  ? (0, r.jsx)(x.f, {
                        variant: 'heading-sm/semibold',
                        text: H.name,
                        id: J
                    })
                  : (0, r.jsx)(x.f, {
                        variant: 'heading-sm/semibold',
                        text: null != (e = H.details) ? e : H.name,
                        id: J
                    });
        },
        eh = () => {
            if ((0, d.Z)(H) && null != K)
                return (0, r.jsx)(x.Z, {
                    variant: 'text-xs/normal',
                    text: F.intl.formatToPlainString(F.t['hq/Qzc'], { guildName: K.name }),
                    onClick: () => {
                        (0, E.X)(K.id), eo({ action: 'OPEN_VOICE_GUILD' }), null == Q || Q();
                    }
                });
            if ((0, u.Z)(H))
                return (0, r.jsx)(x.Z, {
                    variant: 'text-xs/normal',
                    text: H.details
                });
            if ((0, b.dS)(H)) {
                var e;
                return (0, r.jsx)(x.Z, {
                    variant: 'text-xs/normal',
                    text: null == H || null == (e = H.assets) ? void 0 : e.small_text
                });
            }
            return (0, r.jsx)(x.Z, {
                variant: 'text-xs/normal',
                text: H.state
            });
        },
        em = () => {
            var e, t, n, i, a, o;
            if (H.type === B.IIU.WATCHING) return null;
            if ((0, u.Z)(H)) return eg();
            if ((0, b.dS)(H) && (null == (e = H.party) ? void 0 : e.size) != null && (null == (t = H.party) ? void 0 : t.size.length) >= 2) {
                let e = F.intl.formatToPlainString(F.t['JC/3x8'], {
                    numSpeakers: null == (i = H.party) ? void 0 : i.size[0],
                    numListeners: (null == (a = H.party) ? void 0 : a.size[1]) - (null == (o = H.party) ? void 0 : o.size[0])
                });
                return (0, r.jsx)(x.Z, {
                    variant: 'text-xs/normal',
                    text: e
                });
            }
            return (0, r.jsx)(x.Z, {
                text: null == (n = H.assets) ? void 0 : n.large_text,
                variant: 'text-xs/normal'
            });
        },
        eg = () => {
            var e, t, n, i;
            return (null == (e = H.party) ? void 0 : e.size) == null && H.application_id === V.Zc
                ? (0, r.jsxs)('div', {
                      className: Z.gameState,
                      children: [
                          (0, r.jsx)(x.Z, {
                              variant: 'text-xs/normal',
                              text: H.state
                          }),
                          (0, r.jsx)(x.Z, {
                              variant: 'text-xs/normal',
                              text: F.intl.formatToPlainString(F.t['u//9Bw'], {
                                  count: '0',
                                  max: null != (i = null == W ? void 0 : W.getMaxParticipants()) ? i : 0
                              })
                          })
                      ]
                  })
                : (0, c.Z)(H) && (null == (t = H.party) ? void 0 : t.size) != null && (null == (n = H.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: Z.gameState,
                        children: [
                            (0, r.jsx)(x.Z, {
                                variant: 'text-xs/normal',
                                text: H.state
                            }),
                            (0, r.jsx)(x.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === H.party.size[1]
                                        ? F.intl.formatToPlainString(F.t.IM4J4e, { count: H.party.size[0] })
                                        : F.intl.formatToPlainString(F.t['u//9Bw'], {
                                              count: H.party.size[0],
                                              max: H.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == H.party
                    ? (0, r.jsx)(x.Z, {
                          variant: 'text-xs/normal',
                          text: H.state
                      })
                    : null;
        },
        eE = () => {
            if (!(0, T.Z)(H)) return null;
            let { start: e, end: t } = H.timestamps;
            return (0, r.jsx)(k.Z, {
                start: e,
                end: t
            });
        },
        eb = () =>
            null == e_
                ? (0, r.jsxs)('div', {
                      children: [ep(), eh(), em()]
                  })
                : (0, r.jsxs)(s.P3F, {
                      className: Z.clickableText,
                      onClick: (e) => {
                          e.stopPropagation(), eo({ action: 'PRESS_TEXT' }), e_(e);
                      },
                      children: [ep(), eh(), em()]
                  }),
        ey = () =>
            null == K || null == z
                ? null
                : (0, r.jsx)(M.Z, {
                      user: n,
                      guild: K,
                      channel: z,
                      onAction: eo,
                      onClose: Q
                  }),
        eO = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: Z.actions,
                      children: (0, r.jsx)(P.Z, {
                          activity: H,
                          user: n,
                          onAction: eo,
                          onClose: Q
                      })
                  });
    if (null === en) return null;
    let ev = null != (t = H.application_id) ? t : H.name,
        eI = er === G.n_.ACTIVITY && ei === ev;
    return (0, r.jsx)(f.Gt, {
        value: et,
        children: (0, r.jsx)(R.Z, {
            targetElementRef: ee,
            sourceType: G.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(A.Z, {
                user: n,
                guildId: q,
                themeType: en,
                sourceId: ev,
                sourceDetails: null == ea ? (0, I.Z)(H) : null,
                entry: ea,
                onAction: eo,
                sourceType: G.n_.ACTIVITY,
                children: () =>
                    (0, r.jsx)(N.Z, {
                        ref: ee,
                        user: n,
                        className: Z.toolbarContainer,
                        interactionSourceId: ev,
                        sourceType: G.n_.ACTIVITY,
                        onAction: eo,
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(j.Z, {
                                display: 'live',
                                user: n,
                                activity: H,
                                entry: ea,
                                onClose: Q,
                                children: e
                            }),
                        onShowToolbar: () => eo({ action: 'HOVER_ACTIVITY_CARD' }),
                        children: (0, r.jsxs)(D.Z, {
                            ref: es,
                            className: o()(X, { [Z.hoisted]: eI }),
                            onAction: eo,
                            onClose: Q,
                            'aria-labelledby': ec ? ''.concat($, ' ').concat(J) : J,
                            children: [
                                (0, r.jsx)(L.Z, Y({ textId: $ }, el)),
                                (0, r.jsxs)('div', {
                                    className: Z.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: Z.content,
                                            children: [
                                                !n.bot && ef(),
                                                (0, r.jsxs)('div', {
                                                    className: Z.details,
                                                    children: [
                                                        eb(),
                                                        !n.bot &&
                                                            (0, r.jsx)(w.Z, {
                                                                user: n,
                                                                activity: H,
                                                                className: Z.badges
                                                            }),
                                                        eE(),
                                                        en === G.lY.MODAL_V2 && eO()
                                                    ]
                                                }),
                                                en === G.lY.MODAL && eO()
                                            ]
                                        }),
                                        ey()
                                    ]
                                }),
                                en !== G.lY.MODAL && en !== G.lY.MODAL_V2 && eO()
                            ]
                        })
                    })
            })
        })
    });
}
