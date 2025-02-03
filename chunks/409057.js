n.d(t, { Z: () => j });
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
    p = n(499254),
    h = n(827498),
    m = n(541716),
    g = n(379357),
    E = n(358696),
    v = n(649700),
    y = n(810568),
    I = n(168524),
    b = n(769654),
    T = n(960870),
    S = n(139793),
    A = n(994746),
    N = n(232174),
    C = n(652853),
    R = n(979038),
    O = n(448980),
    D = n(336383),
    x = n(194811),
    L = n(373826),
    P = n(315324),
    w = n(262210),
    M = n(103479),
    k = n(670451),
    U = n(553375),
    G = n(228168),
    B = n(981631),
    Z = n(701488),
    F = n(388032),
    V = n(249942);
function j(e) {
    let { user: t, currentUser: n, activity: r, application: j, voiceGuild: H, voiceChannel: Y, className: W, onClose: K } = e,
        { analyticsLocations: z } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: q } = (0, C.z)(),
        Q = { [V.fullSize]: q === G.y0.FULL_SIZE },
        X = (0, v.Z)({
            activity: r,
            user: t
        }),
        J = (0, I.Z)({
            location: 'UserProfileActivityCard',
            source: y.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, U.nK)({
                user: t,
                activity: r,
                entry: X
            })
        }),
        $ = (0, T.Z)({
            display: 'live',
            user: t,
            activity: r,
            entry: X,
            analyticsLocations: z
        }),
        ee = (0, S.Z)({
            userId: t.id,
            onAction: $
        }),
        et = () => {
            null != j && (null == K || K(), p.__(h._b.TEXT, m.Ie.NORMAL, { applicationId: j.id }));
        },
        en = (0, A.Z)(r),
        { largeImage: ei, smallImage: er } = (0, g.FO)(r, j),
        ea = (0, s.EQ)(r)
            .when(u.Z, () => (null != j ? et : void 0))
            .when(c.Z, () => J)
            .when(l.Z, () => {
                if (t.id !== n.id)
                    return () =>
                        (0, M.s)({
                            activity: r,
                            user: t,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        es = () => {
            let e = (0, l.Z)(r) ? 'crunchyroll' : 'default';
            return null == ea
                ? (0, i.jsx)(E.E, {
                      image: ei,
                      smallImage: er,
                      size: E.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, i.jsx)(E.E, {
                      image: ei,
                      smallImage: er,
                      size: E.J.SIZE_60,
                      className: V.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          $({ action: 'PRESS_IMAGE' }), ea(e);
                      }
                  });
        },
        eo = () => {
            var e;
            return (0, d.Z)(r) && null != Y
                ? (0, i.jsxs)('div', {
                      className: V.voiceChannelText,
                      children: [
                          (0, i.jsx)(o.gj8, {
                              size: 'xxs',
                              color: o.TVs.colors.TEXT_NORMAL,
                              className: V.voiceIcon
                          }),
                          (0, i.jsx)(L.Z, {
                              variant: 'heading-sm/semibold',
                              text: Y.name
                          })
                      ]
                  })
                : (0, c.Z)(r)
                  ? (0, i.jsx)(L.Z, {
                        variant: 'heading-sm/semibold',
                        text: r.name
                    })
                  : (0, i.jsx)(L.Z, {
                        variant: 'heading-sm/semibold',
                        text: null !== (e = r.details) && void 0 !== e ? e : r.name
                    });
        },
        el = () =>
            (0, d.Z)(r) && null != H
                ? (0, i.jsx)(L.Z, {
                      variant: 'text-xs/normal',
                      text: F.intl.formatToPlainString(F.t['hq/Qzc'], { guildName: H.name }),
                      onClick: () => {
                          (0, b.X)(H.id), $({ action: 'OPEN_VOICE_GUILD' }), null == K || K();
                      }
                  })
                : (0, c.Z)(r)
                  ? (0, i.jsx)(L.Z, {
                        variant: 'text-xs/normal',
                        text: r.details
                    })
                  : (0, i.jsx)(L.Z, {
                        text: r.state,
                        variant: 'text-xs/normal'
                    }),
        eu = () => {
            var e;
            return r.type === B.IIU.WATCHING
                ? null
                : (0, c.Z)(r)
                  ? ec()
                  : (0, i.jsx)(L.Z, {
                        text: null === (e = r.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        ec = () => {
            var e, t, n, a;
            return (null === (e = r.party) || void 0 === e ? void 0 : e.size) == null && r.application_id === Z.Zc
                ? (0, i.jsxs)('div', {
                      className: V.gameState,
                      children: [
                          (0, i.jsx)(L.Z, {
                              variant: 'text-xs/normal',
                              text: r.state
                          }),
                          (0, i.jsx)(L.Z, {
                              variant: 'text-xs/normal',
                              text: F.intl.formatToPlainString(F.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (a = null == j ? void 0 : j.getMaxParticipants()) && void 0 !== a ? a : 0
                              })
                          })
                      ]
                  })
                : (0, u.Z)(r) && (null === (t = r.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = r.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, i.jsxs)('div', {
                        className: V.gameState,
                        children: [
                            (0, i.jsx)(L.Z, {
                                variant: 'text-xs/normal',
                                text: r.state
                            }),
                            (0, i.jsx)(L.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === r.party.size[1]
                                        ? F.intl.formatToPlainString(F.t.IM4J4e, { count: r.party.size[0] })
                                        : F.intl.formatToPlainString(F.t['u//9Bw'], {
                                              count: r.party.size[0],
                                              max: r.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == r.party
                    ? (0, i.jsx)(L.Z, {
                          variant: 'text-xs/normal',
                          text: r.state
                      })
                    : null;
        },
        ed = () => {
            if (!(0, N.Z)(r)) return null;
            let { start: e, end: t } = r.timestamps;
            return (0, i.jsx)(w.Z, {
                start: e,
                end: t
            });
        },
        ef = () =>
            null == ea
                ? (0, i.jsxs)('div', {
                      children: [eo(), el(), eu()]
                  })
                : (0, i.jsxs)(o.P3F, {
                      className: V.clickableText,
                      onClick: (e) => {
                          $({ action: 'PRESS_TEXT' }), ea(e);
                      },
                      children: [eo(), el(), eu()]
                  }),
        e_ = () =>
            null == H || null == Y
                ? null
                : (0, i.jsx)(P.Z, {
                      user: t,
                      guild: H,
                      channel: Y,
                      onAction: $,
                      onClose: K
                  }),
        ep = () =>
            t.id === n.id
                ? null
                : (0, i.jsx)('div', {
                      className: a()(V.actions, Q),
                      children: (0, i.jsx)(R.Z, {
                          activity: r,
                          user: t,
                          onAction: $,
                          onClose: K
                      })
                  });
    return (0, i.jsx)(_.Gt, {
        value: z,
        children: (0, i.jsxs)(D.Z, {
            ref: ee,
            className: a()(V.card, W),
            onAction: $,
            onClose: K,
            children: [
                (0, i.jsx)(x.Z, {
                    ...en,
                    contextMenu: (0, i.jsx)(k.Z, {
                        display: 'live',
                        user: t,
                        activity: r,
                        entry: X,
                        onClose: K
                    })
                }),
                (0, i.jsxs)('div', {
                    className: V.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: a()(V.content, Q),
                            children: [
                                !t.bot && es(),
                                (0, i.jsxs)('div', {
                                    className: V.details,
                                    children: [
                                        ef(),
                                        !t.bot &&
                                            (0, i.jsx)(O.Z, {
                                                user: t,
                                                activity: r,
                                                className: V.badges
                                            }),
                                        ed()
                                    ]
                                }),
                                q === G.y0.FULL_SIZE && ep()
                            ]
                        }),
                        e_()
                    ]
                }),
                q !== G.y0.FULL_SIZE && ep()
            ]
        })
    });
}
