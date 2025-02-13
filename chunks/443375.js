n.d(t, { Z: () => Y });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(278074),
    o = n(481060),
    l = n(394821),
    u = n(841784),
    c = n(833664),
    d = n(420660),
    f = n(100527),
    _ = n(906732),
    p = n(379357),
    h = n(358696),
    m = n(649700),
    g = n(810568),
    E = n(168524),
    v = n(769654),
    y = n(960870),
    I = n(139793),
    T = n(994746),
    b = n(273284),
    S = n(232174),
    A = n(510659),
    N = n(287954),
    C = n(660579),
    R = n(652853),
    O = n(64621),
    D = n(979038),
    L = n(448980),
    x = n(336383),
    P = n(194811),
    w = n(373826),
    M = n(315324),
    k = n(262210),
    U = n(103479),
    G = n(386019),
    B = n(553375),
    Z = n(228168),
    F = n(981631),
    V = n(701488),
    j = n(388032),
    H = n(537208);
function Y(e) {
    var t;
    let { user: n, currentUser: r, activity: Y, application: W, voiceGuild: K, voiceChannel: z, profileGuildId: q, className: Q, onClose: X } = e,
        { analyticsLocations: J } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: $ } = (0, R.z)(),
        ee = { [H.fullSize]: $ === Z.y0.FULL_SIZE },
        { interactionSource: et, interactionSourceId: en } = (0, A.Xo)(),
        ei = (0, m.Z)({
            activity: Y,
            user: n
        }),
        er = (0, E.Z)({
            location: 'UserProfileActivityCard',
            source: g.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, B.nK)({
                user: n,
                activity: Y,
                entry: ei
            })
        }),
        ea = (0, y.Z)({
            display: 'live',
            user: n,
            activity: Y,
            entry: ei,
            analyticsLocations: J
        }),
        es = (0, I.Z)({
            userId: n.id,
            onAction: ea
        }),
        eo = (0, T.Z)(Y),
        { largeImage: el, smallImage: eu } = (0, p.FO)(Y, W),
        ec = (0, s.EQ)(Y)
            .when(c.Z, () => er)
            .when(l.Z, () => {
                if (n.id !== r.id)
                    return () =>
                        (0, U.s)({
                            activity: Y,
                            user: n,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        ed = () => {
            let e = (0, l.Z)(Y) ? 'crunchyroll' : 'default';
            return null == ec
                ? (0, i.jsx)(h.E, {
                      image: el,
                      smallImage: eu,
                      size: h.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, i.jsx)(h.E, {
                      image: el,
                      smallImage: eu,
                      size: h.J.SIZE_60,
                      className: H.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          e.stopPropagation(), ea({ action: 'PRESS_IMAGE' }), ec(e);
                      }
                  });
        },
        ef = () => {
            var e;
            return (0, d.Z)(Y) && null != z
                ? (0, i.jsxs)('div', {
                      className: H.voiceChannelText,
                      children: [
                          (0, i.jsx)(o.gj8, {
                              size: 'xxs',
                              color: o.TVs.colors.TEXT_NORMAL,
                              className: H.voiceIcon
                          }),
                          (0, i.jsx)(w.Z, {
                              variant: 'heading-sm/semibold',
                              text: z.name
                          })
                      ]
                  })
                : (0, c.Z)(Y)
                  ? (0, i.jsx)(w.Z, {
                        variant: 'heading-sm/semibold',
                        text: Y.name
                    })
                  : (0, i.jsx)(w.Z, {
                        variant: 'heading-sm/semibold',
                        text: null !== (e = Y.details) && void 0 !== e ? e : Y.name
                    });
        },
        e_ = () =>
            (0, d.Z)(Y) && null != K
                ? (0, i.jsx)(w.Z, {
                      variant: 'text-xs/normal',
                      text: j.intl.formatToPlainString(j.t['hq/Qzc'], { guildName: K.name }),
                      onClick: () => {
                          (0, v.X)(K.id), ea({ action: 'OPEN_VOICE_GUILD' }), null == X || X();
                      }
                  })
                : (0, c.Z)(Y)
                  ? (0, i.jsx)(w.Z, {
                        variant: 'text-xs/normal',
                        text: Y.details
                    })
                  : (0, i.jsx)(w.Z, {
                        text: Y.state,
                        variant: 'text-xs/normal'
                    }),
        ep = () => {
            var e;
            return Y.type === F.IIU.WATCHING
                ? null
                : (0, c.Z)(Y)
                  ? eh()
                  : (0, i.jsx)(w.Z, {
                        text: null === (e = Y.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        eh = () => {
            var e, t, n, r;
            return (null === (e = Y.party) || void 0 === e ? void 0 : e.size) == null && Y.application_id === V.Zc
                ? (0, i.jsxs)('div', {
                      className: H.gameState,
                      children: [
                          (0, i.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: Y.state
                          }),
                          (0, i.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: j.intl.formatToPlainString(j.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (r = null == W ? void 0 : W.getMaxParticipants()) && void 0 !== r ? r : 0
                              })
                          })
                      ]
                  })
                : (0, u.Z)(Y) && (null === (t = Y.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = Y.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, i.jsxs)('div', {
                        className: H.gameState,
                        children: [
                            (0, i.jsx)(w.Z, {
                                variant: 'text-xs/normal',
                                text: Y.state
                            }),
                            (0, i.jsx)(w.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === Y.party.size[1]
                                        ? j.intl.formatToPlainString(j.t.IM4J4e, { count: Y.party.size[0] })
                                        : j.intl.formatToPlainString(j.t['u//9Bw'], {
                                              count: Y.party.size[0],
                                              max: Y.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == Y.party
                    ? (0, i.jsx)(w.Z, {
                          variant: 'text-xs/normal',
                          text: Y.state
                      })
                    : null;
        },
        em = () => {
            if (!(0, S.Z)(Y)) return null;
            let { start: e, end: t } = Y.timestamps;
            return (0, i.jsx)(k.Z, {
                start: e,
                end: t
            });
        },
        eg = () =>
            null == ec
                ? (0, i.jsxs)('div', {
                      children: [ef(), e_(), ep()]
                  })
                : (0, i.jsxs)(o.P3F, {
                      className: H.clickableText,
                      onClick: (e) => {
                          e.stopPropagation(), ea({ action: 'PRESS_TEXT' }), ec(e);
                      },
                      children: [ef(), e_(), ep()]
                  }),
        eE = () =>
            null == K || null == z
                ? null
                : (0, i.jsx)(M.Z, {
                      user: n,
                      guild: K,
                      channel: z,
                      onAction: ea,
                      onClose: X
                  }),
        ev = () =>
            n.id === r.id
                ? null
                : (0, i.jsx)('div', {
                      className: a()(H.actions, ee),
                      children: (0, i.jsx)(D.Z, {
                          activity: Y,
                          user: n,
                          onAction: ea,
                          onClose: X
                      })
                  });
    if (null === $) return null;
    let ey = null !== (t = Y.application_id) && void 0 !== t ? t : Y.name,
        eI = et === Z.n_.ACTIVITY && en === ey;
    return (0, i.jsx)(_.Gt, {
        value: J,
        children: (0, i.jsx)(O.Z, {
            sourceType: Z.n_.ACTIVITY,
            user: n,
            children: (0, i.jsx)(N.Z, {
                user: n,
                guildId: q,
                profileType: $,
                sourceId: ey,
                sourceDetails: null == ei ? (0, b.Z)(Y) : null,
                entry: ei,
                onAction: ea,
                sourceType: Z.n_.ACTIVITY,
                children: () =>
                    (0, i.jsx)(C.Z, {
                        user: n,
                        className: H.toolbarContainer,
                        interactionSourceId: ey,
                        sourceType: Z.n_.ACTIVITY,
                        onAction: ea,
                        renderMoreButtonPopout: (e) =>
                            (0, i.jsx)(G.Z, {
                                display: 'live',
                                user: n,
                                activity: Y,
                                entry: ei,
                                onClose: X,
                                children: e
                            }),
                        onShowToolbar: () => ea({ action: 'HOVER_ACTIVITY_CARD' }),
                        children: (0, i.jsxs)(x.Z, {
                            ref: es,
                            className: a()(Q, { [H.hoisted]: eI }),
                            onAction: ea,
                            onClose: X,
                            children: [
                                (0, i.jsx)(P.Z, { ...eo }),
                                (0, i.jsxs)('div', {
                                    className: H.body,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: a()(H.content, ee),
                                            children: [
                                                !n.bot && ed(),
                                                (0, i.jsxs)('div', {
                                                    className: H.details,
                                                    children: [
                                                        eg(),
                                                        !n.bot &&
                                                            (0, i.jsx)(L.Z, {
                                                                user: n,
                                                                activity: Y,
                                                                className: H.badges
                                                            }),
                                                        em()
                                                    ]
                                                }),
                                                $ === Z.y0.FULL_SIZE && ev()
                                            ]
                                        }),
                                        eE()
                                    ]
                                }),
                                $ !== Z.y0.FULL_SIZE && ev()
                            ]
                        })
                    })
            })
        })
    });
}
