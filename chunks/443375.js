n.d(t, { Z: () => H });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
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
    E = n(960870),
    b = n(139793),
    y = n(994746),
    v = n(273284),
    O = n(232174),
    I = n(510659),
    S = n(287954),
    T = n(660579),
    N = n(652853),
    A = n(64621),
    C = n(979038),
    R = n(448980),
    P = n(336383),
    w = n(194811),
    D = n(373826),
    L = n(315324),
    x = n(262210),
    M = n(386019),
    k = n(881530),
    j = n(228168),
    U = n(981631),
    G = n(701488),
    B = n(388032),
    V = n(227832);
function F(e, t, n) {
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
function Z(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e) {
    var t;
    let { user: n, currentUser: o, activity: F, application: H, voiceGuild: W, voiceChannel: Y, profileGuildId: K, className: z, onClose: q } = e,
        Q = i.useRef(null),
        { analyticsLocations: X } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: J } = (0, N.z)(),
        $ = { [V.fullSize]: J === j.y0.FULL_SIZE },
        { interactionSource: ee, interactionSourceId: et } = (0, I.Xo)(),
        en = (0, m.Z)({
            activity: F,
            user: n
        }),
        er = (0, E.Z)({
            display: 'live',
            user: n,
            activity: F,
            entry: en,
            analyticsLocations: X
        }),
        ei = (0, b.Z)({
            userId: n.id,
            onAction: er
        }),
        eo = (0, y.Z)(F),
        { largeImage: ea, smallImage: es } = (0, p.FO)(F, H),
        el = (0, k.Z)({
            location: 'UserProfileActivityCardWithInteractionToolbar',
            user: n,
            currentUser: o,
            activity: F,
            application: H,
            entry: en,
            onClose: q
        }),
        ec = () => {
            let e = (0, l.Z)(F) ? 'crunchyroll' : 'default';
            return null == el
                ? (0, r.jsx)(h.E, {
                      image: ea,
                      smallImage: es,
                      size: h.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(h.E, {
                      image: ea,
                      smallImage: es,
                      size: h.J.SIZE_60,
                      className: V.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          e.stopPropagation(), er({ action: 'PRESS_IMAGE' }), el(e);
                      }
                  });
        },
        eu = () => {
            var e;
            return (0, d.Z)(F) && null != Y
                ? (0, r.jsxs)('div', {
                      className: V.voiceChannelText,
                      children: [
                          (0, r.jsx)(s.gj8, {
                              size: 'xxs',
                              color: s.TVs.colors.TEXT_NORMAL,
                              className: V.voiceIcon
                          }),
                          (0, r.jsx)(D.Z, {
                              variant: 'heading-sm/semibold',
                              text: Y.name
                          })
                      ]
                  })
                : (0, u.Z)(F)
                  ? (0, r.jsx)(D.Z, {
                        variant: 'heading-sm/semibold',
                        text: F.name
                    })
                  : (0, r.jsx)(D.Z, {
                        variant: 'heading-sm/semibold',
                        text: null != (e = F.details) ? e : F.name
                    });
        },
        ed = () =>
            (0, d.Z)(F) && null != W
                ? (0, r.jsx)(D.Z, {
                      variant: 'text-xs/normal',
                      text: B.NW.formatToPlainString(B.t['hq/Qzc'], { guildName: W.name }),
                      onClick: () => {
                          (0, g.X)(W.id), er({ action: 'OPEN_VOICE_GUILD' }), null == q || q();
                      }
                  })
                : (0, u.Z)(F)
                  ? (0, r.jsx)(D.Z, {
                        variant: 'text-xs/normal',
                        text: F.details
                    })
                  : (0, r.jsx)(D.Z, {
                        text: F.state,
                        variant: 'text-xs/normal'
                    }),
        ef = () => {
            var e;
            return F.type === U.IIU.WATCHING
                ? null
                : (0, u.Z)(F)
                  ? e_()
                  : (0, r.jsx)(D.Z, {
                        text: null == (e = F.assets) ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        e_ = () => {
            var e, t, n, i;
            return (null == (e = F.party) ? void 0 : e.size) == null && F.application_id === G.Zc
                ? (0, r.jsxs)('div', {
                      className: V.gameState,
                      children: [
                          (0, r.jsx)(D.Z, {
                              variant: 'text-xs/normal',
                              text: F.state
                          }),
                          (0, r.jsx)(D.Z, {
                              variant: 'text-xs/normal',
                              text: B.NW.formatToPlainString(B.t['u//9Bw'], {
                                  count: '0',
                                  max: null != (i = null == H ? void 0 : H.getMaxParticipants()) ? i : 0
                              })
                          })
                      ]
                  })
                : (0, c.Z)(F) && (null == (t = F.party) ? void 0 : t.size) != null && (null == (n = F.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: V.gameState,
                        children: [
                            (0, r.jsx)(D.Z, {
                                variant: 'text-xs/normal',
                                text: F.state
                            }),
                            (0, r.jsx)(D.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === F.party.size[1]
                                        ? B.NW.formatToPlainString(B.t.IM4J4e, { count: F.party.size[0] })
                                        : B.NW.formatToPlainString(B.t['u//9Bw'], {
                                              count: F.party.size[0],
                                              max: F.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == F.party
                    ? (0, r.jsx)(D.Z, {
                          variant: 'text-xs/normal',
                          text: F.state
                      })
                    : null;
        },
        ep = () => {
            if (!(0, O.Z)(F)) return null;
            let { start: e, end: t } = F.timestamps;
            return (0, r.jsx)(x.Z, {
                start: e,
                end: t
            });
        },
        eh = () =>
            null == el
                ? (0, r.jsxs)('div', {
                      children: [eu(), ed(), ef()]
                  })
                : (0, r.jsxs)(s.P3F, {
                      className: V.clickableText,
                      onClick: (e) => {
                          e.stopPropagation(), er({ action: 'PRESS_TEXT' }), el(e);
                      },
                      children: [eu(), ed(), ef()]
                  }),
        em = () =>
            null == W || null == Y
                ? null
                : (0, r.jsx)(L.Z, {
                      user: n,
                      guild: W,
                      channel: Y,
                      onAction: er,
                      onClose: q
                  }),
        eg = () =>
            n.id === o.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(V.actions, $),
                      children: (0, r.jsx)(C.Z, {
                          activity: F,
                          user: n,
                          onAction: er,
                          onClose: q
                      })
                  });
    if (null === J) return null;
    let eE = null != (t = F.application_id) ? t : F.name,
        eb = ee === j.n_.ACTIVITY && et === eE;
    return (0, r.jsx)(_.Gt, {
        value: X,
        children: (0, r.jsx)(A.Z, {
            targetElementRef: Q,
            sourceType: j.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(S.Z, {
                user: n,
                guildId: K,
                profileType: J,
                sourceId: eE,
                sourceDetails: null == en ? (0, v.Z)(F) : null,
                entry: en,
                onAction: er,
                sourceType: j.n_.ACTIVITY,
                children: () =>
                    (0, r.jsx)(T.Z, {
                        ref: Q,
                        user: n,
                        className: V.toolbarContainer,
                        interactionSourceId: eE,
                        sourceType: j.n_.ACTIVITY,
                        onAction: er,
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(M.Z, {
                                display: 'live',
                                user: n,
                                activity: F,
                                entry: en,
                                onClose: q,
                                children: e
                            }),
                        onShowToolbar: () => er({ action: 'HOVER_ACTIVITY_CARD' }),
                        children: (0, r.jsxs)(P.Z, {
                            ref: ei,
                            className: a()(z, { [V.hoisted]: eb }),
                            onAction: er,
                            onClose: q,
                            children: [
                                (0, r.jsx)(w.Z, Z({}, eo)),
                                (0, r.jsxs)('div', {
                                    className: V.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: a()(V.content, $),
                                            children: [
                                                !n.bot && ec(),
                                                (0, r.jsxs)('div', {
                                                    className: V.details,
                                                    children: [
                                                        eh(),
                                                        !n.bot &&
                                                            (0, r.jsx)(R.Z, {
                                                                user: n,
                                                                activity: F,
                                                                className: V.badges
                                                            }),
                                                        ep()
                                                    ]
                                                }),
                                                J === j.y0.FULL_SIZE && eg()
                                            ]
                                        }),
                                        em()
                                    ]
                                }),
                                J !== j.y0.FULL_SIZE && eg()
                            ]
                        })
                    })
            })
        })
    });
}
