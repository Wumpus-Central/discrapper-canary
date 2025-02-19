n.d(t, { Z: () => K });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(278074),
    s = n(481060),
    l = n(394821),
    c = n(841784),
    u = n(833664),
    d = n(420660),
    f = n(100527),
    p = n(906732),
    _ = n(379357),
    h = n(358696),
    m = n(649700),
    g = n(810568),
    E = n(168524),
    v = n(769654),
    b = n(960870),
    y = n(139793),
    O = n(994746),
    S = n(273284),
    I = n(232174),
    T = n(510659),
    N = n(287954),
    A = n(660579),
    C = n(652853),
    R = n(64621),
    P = n(979038),
    w = n(448980),
    D = n(336383),
    x = n(194811),
    L = n(373826),
    M = n(315324),
    k = n(262210),
    j = n(103479),
    U = n(386019),
    G = n(553375),
    B = n(228168),
    Z = n(981631),
    F = n(701488),
    V = n(388032),
    H = n(481736);
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function K(e) {
    var t;
    let { user: n, currentUser: i, activity: W, application: K, voiceGuild: z, voiceChannel: q, profileGuildId: Q, className: X, onClose: J } = e,
        { analyticsLocations: $ } = (0, p.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: ee } = (0, C.z)(),
        et = { [H.fullSize]: ee === B.y0.FULL_SIZE },
        { interactionSource: en, interactionSourceId: er } = (0, T.Xo)(),
        ei = (0, m.Z)({
            activity: W,
            user: n
        }),
        eo = (0, E.Z)(
            Y(
                {
                    location: 'UserProfileActivityCard',
                    source: g.m1.UserProfile,
                    trackEntryPointImpression: !0
                },
                (0, G.nK)({
                    user: n,
                    activity: W,
                    entry: ei
                })
            )
        ),
        ea = (0, b.Z)({
            display: 'live',
            user: n,
            activity: W,
            entry: ei,
            analyticsLocations: $
        }),
        es = (0, y.Z)({
            userId: n.id,
            onAction: ea
        }),
        el = (0, O.Z)(W),
        { largeImage: ec, smallImage: eu } = (0, _.FO)(W, K),
        ed = (0, a.EQ)(W)
            .when(u.Z, () => eo)
            .when(l.Z, () => {
                if (n.id !== i.id)
                    return () =>
                        (0, j.s)({
                            activity: W,
                            user: n,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        ef = () => {
            let e = (0, l.Z)(W) ? 'crunchyroll' : 'default';
            return null == ed
                ? (0, r.jsx)(h.E, {
                      image: ec,
                      smallImage: eu,
                      size: h.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(h.E, {
                      image: ec,
                      smallImage: eu,
                      size: h.J.SIZE_60,
                      className: H.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          e.stopPropagation(), ea({ action: 'PRESS_IMAGE' }), ed(e);
                      }
                  });
        },
        ep = () => {
            var e;
            return (0, d.Z)(W) && null != q
                ? (0, r.jsxs)('div', {
                      className: H.voiceChannelText,
                      children: [
                          (0, r.jsx)(s.gj8, {
                              size: 'xxs',
                              color: s.TVs.colors.TEXT_NORMAL,
                              className: H.voiceIcon
                          }),
                          (0, r.jsx)(L.Z, {
                              variant: 'heading-sm/semibold',
                              text: q.name
                          })
                      ]
                  })
                : (0, u.Z)(W)
                  ? (0, r.jsx)(L.Z, {
                        variant: 'heading-sm/semibold',
                        text: W.name
                    })
                  : (0, r.jsx)(L.Z, {
                        variant: 'heading-sm/semibold',
                        text: null !== (e = W.details) && void 0 !== e ? e : W.name
                    });
        },
        e_ = () =>
            (0, d.Z)(W) && null != z
                ? (0, r.jsx)(L.Z, {
                      variant: 'text-xs/normal',
                      text: V.NW.formatToPlainString(V.t['hq/Qzc'], { guildName: z.name }),
                      onClick: () => {
                          (0, v.X)(z.id), ea({ action: 'OPEN_VOICE_GUILD' }), null == J || J();
                      }
                  })
                : (0, u.Z)(W)
                  ? (0, r.jsx)(L.Z, {
                        variant: 'text-xs/normal',
                        text: W.details
                    })
                  : (0, r.jsx)(L.Z, {
                        text: W.state,
                        variant: 'text-xs/normal'
                    }),
        eh = () => {
            var e;
            return W.type === Z.IIU.WATCHING
                ? null
                : (0, u.Z)(W)
                  ? em()
                  : (0, r.jsx)(L.Z, {
                        text: null === (e = W.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        em = () => {
            var e, t, n, i;
            return (null === (e = W.party) || void 0 === e ? void 0 : e.size) == null && W.application_id === F.Zc
                ? (0, r.jsxs)('div', {
                      className: H.gameState,
                      children: [
                          (0, r.jsx)(L.Z, {
                              variant: 'text-xs/normal',
                              text: W.state
                          }),
                          (0, r.jsx)(L.Z, {
                              variant: 'text-xs/normal',
                              text: V.NW.formatToPlainString(V.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (i = null == K ? void 0 : K.getMaxParticipants()) && void 0 !== i ? i : 0
                              })
                          })
                      ]
                  })
                : (0, c.Z)(W) && (null === (t = W.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = W.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: H.gameState,
                        children: [
                            (0, r.jsx)(L.Z, {
                                variant: 'text-xs/normal',
                                text: W.state
                            }),
                            (0, r.jsx)(L.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === W.party.size[1]
                                        ? V.NW.formatToPlainString(V.t.IM4J4e, { count: W.party.size[0] })
                                        : V.NW.formatToPlainString(V.t['u//9Bw'], {
                                              count: W.party.size[0],
                                              max: W.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == W.party
                    ? (0, r.jsx)(L.Z, {
                          variant: 'text-xs/normal',
                          text: W.state
                      })
                    : null;
        },
        eg = () => {
            if (!(0, I.Z)(W)) return null;
            let { start: e, end: t } = W.timestamps;
            return (0, r.jsx)(k.Z, {
                start: e,
                end: t
            });
        },
        eE = () =>
            null == ed
                ? (0, r.jsxs)('div', {
                      children: [ep(), e_(), eh()]
                  })
                : (0, r.jsxs)(s.P3F, {
                      className: H.clickableText,
                      onClick: (e) => {
                          e.stopPropagation(), ea({ action: 'PRESS_TEXT' }), ed(e);
                      },
                      children: [ep(), e_(), eh()]
                  }),
        ev = () =>
            null == z || null == q
                ? null
                : (0, r.jsx)(M.Z, {
                      user: n,
                      guild: z,
                      channel: q,
                      onAction: ea,
                      onClose: J
                  }),
        eb = () =>
            n.id === i.id
                ? null
                : (0, r.jsx)('div', {
                      className: o()(H.actions, et),
                      children: (0, r.jsx)(P.Z, {
                          activity: W,
                          user: n,
                          onAction: ea,
                          onClose: J
                      })
                  });
    if (null === ee) return null;
    let ey = null !== (t = W.application_id) && void 0 !== t ? t : W.name,
        eO = en === B.n_.ACTIVITY && er === ey;
    return (0, r.jsx)(p.Gt, {
        value: $,
        children: (0, r.jsx)(R.Z, {
            sourceType: B.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(N.Z, {
                user: n,
                guildId: Q,
                profileType: ee,
                sourceId: ey,
                sourceDetails: null == ei ? (0, S.Z)(W) : null,
                entry: ei,
                onAction: ea,
                sourceType: B.n_.ACTIVITY,
                children: () =>
                    (0, r.jsx)(A.Z, {
                        user: n,
                        className: H.toolbarContainer,
                        interactionSourceId: ey,
                        sourceType: B.n_.ACTIVITY,
                        onAction: ea,
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(U.Z, {
                                display: 'live',
                                user: n,
                                activity: W,
                                entry: ei,
                                onClose: J,
                                children: e
                            }),
                        onShowToolbar: () => ea({ action: 'HOVER_ACTIVITY_CARD' }),
                        children: (0, r.jsxs)(D.Z, {
                            ref: es,
                            className: o()(X, { [H.hoisted]: eO }),
                            onAction: ea,
                            onClose: J,
                            children: [
                                (0, r.jsx)(x.Z, Y({}, el)),
                                (0, r.jsxs)('div', {
                                    className: H.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: o()(H.content, et),
                                            children: [
                                                !n.bot && ef(),
                                                (0, r.jsxs)('div', {
                                                    className: H.details,
                                                    children: [
                                                        eE(),
                                                        !n.bot &&
                                                            (0, r.jsx)(w.Z, {
                                                                user: n,
                                                                activity: W,
                                                                className: H.badges
                                                            }),
                                                        eg()
                                                    ]
                                                }),
                                                ee === B.y0.FULL_SIZE && eb()
                                            ]
                                        }),
                                        ev()
                                    ]
                                }),
                                ee !== B.y0.FULL_SIZE && eb()
                            ]
                        })
                    })
            })
        })
    });
}
