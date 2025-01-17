r.d(n, {
    Z: function () {
        return K;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(278074),
    l = r(481060),
    u = r(394821),
    c = r(841784),
    d = r(833664),
    f = r(420660),
    _ = r(100527),
    h = r(906732),
    p = r(379357),
    m = r(358696),
    g = r(649700),
    E = r(810568),
    v = r(168524),
    I = r(833858),
    T = r(769654),
    b = r(960870),
    y = r(139793),
    S = r(994746),
    A = r(273284),
    N = r(232174),
    C = r(510659),
    R = r(287954),
    O = r(660579),
    D = r(652853),
    L = r(64621),
    x = r(979038),
    w = r(448980),
    P = r(336383),
    M = r(194811),
    k = r(373826),
    U = r(315324),
    B = r(262210),
    G = r(103479),
    Z = r(386019),
    F = r(553375),
    V = r(228168),
    j = r(981631),
    H = r(701488),
    Y = r(388032),
    W = r(249942);
function K(e) {
    var n;
    let { user: r, currentUser: a, activity: K, application: z, guild: q, channel: Q, className: X, onClose: J, profileGuildId: $ } = e,
        { analyticsLocations: ee } = (0, h.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: et } = (0, D.z)(),
        en = { [W.fullSize]: et === V.y0.FULL_SIZE },
        { interactionSource: er, interactionSourceId: ei } = (0, C.Xo)(),
        ea = (0, g.Z)({
            activity: K,
            user: r
        }),
        es = (0, v.Z)({
            location: 'UserProfileActivityCard',
            source: E.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, F.nK)({
                user: r,
                activity: K,
                entry: ea
            })
        }),
        eo = (0, b.Z)({
            display: 'live',
            user: r,
            activity: K,
            entry: ea,
            analyticsLocations: ee
        }),
        el = (0, y.Z)({
            userId: r.id,
            onAction: eo
        }),
        eu = (0, S.Z)(K),
        { largeImage: ec, smallImage: ed } = (0, p.FO)(K, z),
        ef = (0, o.EQ)(K)
            .when(d.Z, () => es)
            .when(u.Z, () => {
                if (r.id !== a.id)
                    return () =>
                        (0, G.s)({
                            activity: K,
                            user: r,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        e_ = () => {
            let e = (0, u.Z)(K) ? 'crunchyroll' : 'default';
            return null == ef
                ? (0, i.jsx)(m.E, {
                      image: ec,
                      smallImage: ed,
                      size: m.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, i.jsx)(m.E, {
                      image: ec,
                      smallImage: ed,
                      size: m.J.SIZE_60,
                      className: W.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          e.stopPropagation(), eo({ action: 'PRESS_IMAGE' }), ef(e);
                      }
                  });
        },
        eh = () => {
            var e;
            return K.type === j.IIU.HANG_STATUS
                ? (0, i.jsx)(k.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, I.O8)(K)
                  })
                : (0, f.Z)(K) && null != Q
                  ? (0, i.jsxs)('div', {
                        className: W.voiceChannelText,
                        children: [
                            (0, i.jsx)(l.VoiceNormalIcon, {
                                size: 'xxs',
                                color: l.tokens.colors.TEXT_NORMAL,
                                className: W.voiceIcon
                            }),
                            (0, i.jsx)(k.Z, {
                                variant: 'heading-sm/semibold',
                                text: Q.name
                            })
                        ]
                    })
                  : (0, d.Z)(K)
                    ? (0, i.jsx)(k.Z, {
                          variant: 'heading-sm/semibold',
                          text: K.name
                      })
                    : (0, i.jsx)(k.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = K.details) && void 0 !== e ? e : K.name
                      });
        },
        ep = () =>
            K.type === j.IIU.HANG_STATUS
                ? null
                : (0, f.Z)(K) && null != q
                  ? (0, i.jsx)(k.Z, {
                        variant: 'text-xs/normal',
                        text: Y.intl.formatToPlainString(Y.t['hq/Qzc'], { guildName: q.name }),
                        onClick: () => {
                            (0, T.X)(q.id), eo({ action: 'OPEN_VOICE_GUILD' }), null == J || J();
                        }
                    })
                  : (0, d.Z)(K)
                    ? (0, i.jsx)(k.Z, {
                          variant: 'text-xs/normal',
                          text: K.details
                      })
                    : (0, i.jsx)(k.Z, {
                          text: K.state,
                          variant: 'text-xs/normal'
                      }),
        em = () => {
            var e;
            return K.type === j.IIU.WATCHING
                ? null
                : (0, d.Z)(K)
                  ? eg()
                  : (0, i.jsx)(k.Z, {
                        text: null === (e = K.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        eg = () => {
            var e, n, r, a;
            return (null === (e = K.party) || void 0 === e ? void 0 : e.size) == null && K.application_id === H.Zc
                ? (0, i.jsxs)('div', {
                      className: W.gameState,
                      children: [
                          (0, i.jsx)(k.Z, {
                              variant: 'text-xs/normal',
                              text: K.state
                          }),
                          (0, i.jsx)(k.Z, {
                              variant: 'text-xs/normal',
                              text: Y.intl.formatToPlainString(Y.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (a = null == z ? void 0 : z.getMaxParticipants()) && void 0 !== a ? a : 0
                              })
                          })
                      ]
                  })
                : (0, c.Z)(K) && (null === (n = K.party) || void 0 === n ? void 0 : n.size) != null && (null === (r = K.party) || void 0 === r ? void 0 : r.size.length) >= 2
                  ? (0, i.jsxs)('div', {
                        className: W.gameState,
                        children: [
                            (0, i.jsx)(k.Z, {
                                variant: 'text-xs/normal',
                                text: K.state
                            }),
                            (0, i.jsx)(k.Z, {
                                variant: 'text-xs/normal',
                                text: Y.intl.formatToPlainString(Y.t['u//9Bw'], {
                                    count: K.party.size[0],
                                    max: K.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == K.party
                    ? (0, i.jsx)(k.Z, {
                          variant: 'text-xs/normal',
                          text: K.state
                      })
                    : null;
        },
        eE = () => {
            if (!(0, N.Z)(K)) return null;
            let { start: e, end: n } = K.timestamps;
            return (0, i.jsx)(B.Z, {
                start: e,
                end: n
            });
        },
        ev = () =>
            null == ef
                ? (0, i.jsxs)('div', {
                      children: [eh(), ep(), em()]
                  })
                : (0, i.jsxs)(l.Clickable, {
                      className: W.clickableText,
                      onClick: (e) => {
                          e.stopPropagation(), eo({ action: 'PRESS_TEXT' }), ef(e);
                      },
                      children: [eh(), ep(), em()]
                  }),
        eI = () =>
            null == q || null == Q
                ? null
                : (0, i.jsx)(U.Z, {
                      user: r,
                      guild: q,
                      channel: Q,
                      onAction: eo,
                      onClose: J
                  }),
        eT = () =>
            r.id === a.id
                ? null
                : (0, i.jsx)('div', {
                      className: s()(W.actions, en),
                      children: (0, i.jsx)(x.Z, {
                          activity: K,
                          user: r,
                          currentUser: a,
                          onAction: eo,
                          onClose: J
                      })
                  });
    if (null === et) return null;
    let eb = null !== (n = K.application_id) && void 0 !== n ? n : K.name,
        ey = er === V.n_.ACTIVITY && ei === eb;
    return (0, i.jsx)(h.Gt, {
        value: ee,
        children: (0, i.jsx)(L.Z, {
            sourceType: V.n_.ACTIVITY,
            user: r,
            children: (0, i.jsx)(R.Z, {
                user: r,
                guildId: $,
                profileType: et,
                sourceId: eb,
                sourceDetails: null == ea ? (0, A.Z)(K) : null,
                entry: ea,
                onAction: eo,
                sourceType: V.n_.ACTIVITY,
                children: () =>
                    (0, i.jsx)(O.Z, {
                        user: r,
                        className: W.toolbarContainer,
                        interactionSourceId: eb,
                        sourceType: V.n_.ACTIVITY,
                        onAction: eo,
                        renderMoreButtonPopout: (e) =>
                            (0, i.jsx)(Z.Z, {
                                display: 'live',
                                user: r,
                                activity: K,
                                entry: ea,
                                onClose: J,
                                children: e
                            }),
                        onShowToolbar: () => eo({ action: 'HOVER_ACTIVITY_CARD' }),
                        children: (0, i.jsxs)(P.Z, {
                            ref: el,
                            className: s()(X, { [W.hoisted]: ey }),
                            onAction: eo,
                            onClose: J,
                            children: [
                                (0, i.jsx)(M.Z, { ...eu }),
                                (0, i.jsxs)('div', {
                                    className: W.body,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: s()(W.content, en),
                                            children: [
                                                !r.bot && e_(),
                                                (0, i.jsxs)('div', {
                                                    className: W.details,
                                                    children: [
                                                        ev(),
                                                        !r.bot &&
                                                            (0, i.jsx)(w.Z, {
                                                                user: r,
                                                                activity: K,
                                                                className: W.badges
                                                            }),
                                                        eE()
                                                    ]
                                                }),
                                                et === V.y0.FULL_SIZE && eT()
                                            ]
                                        }),
                                        eI()
                                    ]
                                }),
                                et !== V.y0.FULL_SIZE && eT()
                            ]
                        })
                    })
            })
        })
    });
}
