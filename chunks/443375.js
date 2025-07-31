n.d(t, { Z: () => z });
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
    E = n(833858),
    b = n(223135),
    y = n(769654),
    O = n(750154),
    v = n(960870),
    I = n(139793),
    T = n(994746),
    S = n(273284),
    A = n(232174),
    N = n(510659),
    C = n(287954),
    R = n(660579),
    P = n(652853),
    w = n(64621),
    D = n(979038),
    L = n(448980),
    x = n(336383),
    k = n(194811),
    M = n(373826),
    j = n(668700),
    U = n(262210),
    G = n(386019),
    B = n(881530),
    V = n(228168),
    F = n(981631),
    Z = n(701488),
    H = n(388032),
    Y = n(227832);
function W(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                W(e, t, n[t]);
            }));
    }
    return e;
}
function z(e) {
    var t;
    let { user: n, currentUser: a, activity: W, application: z, voiceGuild: q, voiceChannel: X, profileGuildId: Q, className: J, onClose: $ } = e,
        ee = (0, g.Dt)(),
        et = (0, g.Dt)(),
        en = i.useRef(null),
        { analyticsLocations: er } = (0, f.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: ei } = (0, P.z)(),
        { interactionSource: ea, interactionSourceId: eo } = (0, N.Xo)(),
        es = (0, m.Z)({
            activity: W,
            user: n
        }),
        el = (0, v.Z)({
            display: 'live',
            user: n,
            activity: W,
            entry: es,
            analyticsLocations: er
        }),
        ec = (0, I.Z)({
            userId: n.id,
            onAction: el
        }),
        eu = (0, T.Z)(W),
        ed = null != eu.text && '' !== eu.text,
        { largeImage: e_, smallImage: ef } = (0, p.FO)(W, z),
        ep = (0, B.Z)({
            location: 'UserProfileActivityCardWithInteractionToolbar',
            user: n,
            currentUser: a,
            activity: W,
            application: z,
            entry: es,
            onClose: $
        }),
        eh = () => {
            let e = (0, l.Z)(W) ? 'crunchyroll' : 'default',
                t = ei === V.lY.MODAL_V2 ? h.J.SIZE_100 : h.J.SIZE_60;
            return W.type === F.IIU.HANG_STATUS
                ? (0, r.jsx)(b.Z, {
                      hangStatusActivity: W,
                      className: o()(Y.hangStatusIcon, Y.image, { [Y.small]: ei !== V.lY.MODAL_V2 })
                  })
                : null == ep
                  ? (0, r.jsx)(h.E, {
                        image: e_,
                        smallImage: ef,
                        size: t,
                        aspectRatio: e,
                        className: Y.image
                    })
                  : (0, r.jsx)(h.E, {
                        image: e_,
                        smallImage: ef,
                        size: t,
                        className: Y.clickableImage,
                        aspectRatio: e,
                        onClick: (e) => {
                            (e.stopPropagation(), el({ action: 'PRESS_IMAGE' }), ep(e));
                        }
                    });
        },
        em = () => {
            var e;
            return W.type === F.IIU.HANG_STATUS
                ? (0, r.jsx)(M.f, {
                      variant: 'heading-sm/semibold',
                      text: (0, E.O8)(W),
                      id: ee
                  })
                : (0, d.Z)(W) && null != X
                  ? (0, r.jsxs)('div', {
                        className: Y.voiceChannelText,
                        children: [
                            (0, r.jsx)(s.gj8, {
                                size: 'xxs',
                                color: s.TVs.colors.TEXT_DEFAULT,
                                className: Y.voiceIcon
                            }),
                            (0, r.jsx)(M.f, {
                                variant: 'heading-sm/semibold',
                                text: X.name,
                                id: ee
                            })
                        ]
                    })
                  : (0, u.Z)(W) || (0, O.dS)(W)
                    ? (0, r.jsx)(M.f, {
                          variant: 'heading-sm/semibold',
                          text: W.name,
                          id: ee
                      })
                    : (0, r.jsx)(M.f, {
                          variant: 'heading-sm/semibold',
                          text: null != (e = W.details) ? e : W.name,
                          id: ee
                      });
        },
        eg = () => {
            if (W.type === F.IIU.HANG_STATUS) return null;
            if ((0, d.Z)(W) && null != q)
                return (0, r.jsx)(M.Z, {
                    variant: 'text-xs/normal',
                    text: H.intl.formatToPlainString(H.t['hq/Qzc'], { guildName: q.name }),
                    onClick: () => {
                        ((0, y.X)(q.id), el({ action: 'OPEN_VOICE_GUILD' }), null == $ || $());
                    }
                });
            if ((0, u.Z)(W))
                return (0, r.jsx)(M.Z, {
                    variant: 'text-xs/normal',
                    text: W.details
                });
            if ((0, O.dS)(W)) {
                var e;
                return (0, r.jsx)(M.Z, {
                    variant: 'text-xs/normal',
                    text: null == W || null == (e = W.assets) ? void 0 : e.small_text
                });
            }
            return (0, r.jsx)(M.Z, {
                variant: 'text-xs/normal',
                text: W.state
            });
        },
        eE = () => {
            var e, t, n, i, a, o;
            if (W.type === F.IIU.WATCHING) return null;
            if ((0, u.Z)(W)) return eb();
            if ((0, O.dS)(W) && (null == (e = W.party) ? void 0 : e.size) != null && (null == (t = W.party) ? void 0 : t.size.length) >= 2) {
                let e = H.intl.formatToPlainString(H.t['JC/3x8'], {
                    numSpeakers: null == (i = W.party) ? void 0 : i.size[0],
                    numListeners: (null == (a = W.party) ? void 0 : a.size[1]) - (null == (o = W.party) ? void 0 : o.size[0])
                });
                return (0, r.jsx)(M.Z, {
                    variant: 'text-xs/normal',
                    text: e
                });
            }
            return (0, r.jsx)(M.Z, {
                text: null == (n = W.assets) ? void 0 : n.large_text,
                variant: 'text-xs/normal'
            });
        },
        eb = () => {
            var e, t, n, i;
            return (null == (e = W.party) ? void 0 : e.size) == null && W.application_id === Z.Zc
                ? (0, r.jsxs)('div', {
                      className: Y.gameState,
                      children: [
                          (0, r.jsx)(M.Z, {
                              variant: 'text-xs/normal',
                              text: W.state
                          }),
                          (0, r.jsx)(M.Z, {
                              variant: 'text-xs/normal',
                              text: H.intl.formatToPlainString(H.t['u//9Bw'], {
                                  count: '0',
                                  max: null != (i = null == z ? void 0 : z.getMaxParticipants()) ? i : 0
                              })
                          })
                      ]
                  })
                : (0, c.Z)(W) && (null == (t = W.party) ? void 0 : t.size) != null && (null == (n = W.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: Y.gameState,
                        children: [
                            (0, r.jsx)(M.Z, {
                                variant: 'text-xs/normal',
                                text: W.state
                            }),
                            (0, r.jsx)(M.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === W.party.size[1]
                                        ? H.intl.formatToPlainString(H.t.IM4J4e, { count: W.party.size[0] })
                                        : H.intl.formatToPlainString(H.t['u//9Bw'], {
                                              count: W.party.size[0],
                                              max: W.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == W.party
                    ? (0, r.jsx)(M.Z, {
                          variant: 'text-xs/normal',
                          text: W.state
                      })
                    : null;
        },
        ey = () => {
            if (!(0, A.Z)(W)) return null;
            let { start: e, end: t } = W.timestamps;
            return (0, r.jsx)(U.Z, {
                start: e,
                end: t
            });
        },
        eO = () =>
            null == ep
                ? (0, r.jsxs)('div', {
                      children: [em(), eg(), eE()]
                  })
                : (0, r.jsxs)(s.P3F, {
                      className: Y.clickableText,
                      onClick: (e) => {
                          (e.stopPropagation(), el({ action: 'PRESS_TEXT' }), ep(e));
                      },
                      children: [em(), eg(), eE()]
                  }),
        ev = () =>
            null == q || null == X
                ? null
                : (0, r.jsx)(j.Z, {
                      user: n,
                      guild: q,
                      channel: X,
                      onAction: el,
                      onClose: $
                  }),
        eI = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: Y.actions,
                      children: (0, r.jsx)(D.Z, {
                          activity: W,
                          user: n,
                          onAction: el,
                          onClose: $,
                          application: z
                      })
                  });
    if (null === ei) return null;
    let eT = null != (t = W.application_id) ? t : W.name,
        eS = ea === V.n_.ACTIVITY && eo === eT;
    return (0, r.jsx)(f.Gt, {
        value: er,
        children: (0, r.jsx)(w.Z, {
            targetElementRef: en,
            sourceType: V.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(C.Z, {
                user: n,
                guildId: Q,
                themeType: ei,
                sourceId: eT,
                sourceDetails: null == es ? (0, S.Z)(W) : null,
                entry: es,
                onAction: el,
                sourceType: V.n_.ACTIVITY,
                children: () =>
                    (0, r.jsx)(R.Z, {
                        ref: en,
                        user: n,
                        className: Y.toolbarContainer,
                        interactionSourceId: eT,
                        sourceType: V.n_.ACTIVITY,
                        onAction: el,
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(G.Z, {
                                display: 'live',
                                user: n,
                                activity: W,
                                entry: es,
                                onClose: $,
                                children: e
                            }),
                        onShowToolbar: () => el({ action: 'HOVER_ACTIVITY_CARD' }),
                        children: (0, r.jsxs)(x.Z, {
                            ref: ec,
                            className: o()(J, { [Y.hoisted]: eS }),
                            onAction: el,
                            onClose: $,
                            'aria-labelledby': ed ? ''.concat(et, ' ').concat(ee) : ee,
                            children: [
                                (0, r.jsx)(k.Z, K({ textId: et }, eu)),
                                (0, r.jsxs)('div', {
                                    className: Y.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: Y.content,
                                            children: [
                                                !n.bot && eh(),
                                                (0, r.jsxs)('div', {
                                                    className: Y.details,
                                                    children: [
                                                        eO(),
                                                        !n.bot &&
                                                            (0, r.jsx)(L.Z, {
                                                                user: n,
                                                                activity: W,
                                                                className: Y.badges
                                                            }),
                                                        ey(),
                                                        ei === V.lY.MODAL_V2 && eI()
                                                    ]
                                                }),
                                                ei === V.lY.MODAL && eI()
                                            ]
                                        }),
                                        ev()
                                    ]
                                }),
                                ei !== V.lY.MODAL && ei !== V.lY.MODAL_V2 && eI()
                            ]
                        })
                    })
            })
        })
    });
}
