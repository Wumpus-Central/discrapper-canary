r.d(n, {
    Z: function () {
        return Y;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(278074),
    l = r(481060),
    u = r(394821),
    c = r(841784),
    d = r(833664),
    f = r(420660),
    p = r(100527),
    h = r(906732),
    _ = r(499254),
    m = r(827498),
    g = r(541716),
    E = r(379357),
    v = r(358696),
    y = r(649700),
    b = r(810568),
    I = r(168524),
    T = r(833858),
    S = r(769654),
    A = r(960870),
    C = r(139793),
    N = r(994746),
    R = r(232174),
    O = r(652853),
    D = r(979038),
    L = r(448980),
    x = r(336383),
    w = r(194811),
    P = r(373826),
    M = r(315324),
    k = r(262210),
    U = r(103479),
    B = r(670451),
    G = r(553375),
    Z = r(228168),
    F = r(981631),
    V = r(701488),
    j = r(388032),
    H = r(249942);
function Y(e) {
    let { user: n, currentUser: r, activity: a, application: Y, guild: W, channel: K, className: z, onClose: q } = e,
        { analyticsLocations: Q } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: X } = (0, O.z)(),
        J = { [H.fullSize]: X === Z.y0.FULL_SIZE },
        $ = (0, y.Z)({
            activity: a,
            user: n
        }),
        ee = (0, I.Z)({
            location: 'UserProfileActivityCard',
            source: b.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, G.nK)({
                user: n,
                activity: a,
                entry: $
            })
        }),
        et = (0, A.Z)({
            display: 'live',
            user: n,
            activity: a,
            entry: $,
            analyticsLocations: Q
        }),
        en = (0, C.Z)({
            userId: n.id,
            onAction: et
        }),
        er = () => {
            null != Y && (null == q || q(), _.__(m._b.TEXT, g.Ie.NORMAL, { applicationId: Y.id }));
        },
        ei = (0, N.Z)(a),
        { largeImage: ea, smallImage: eo } = (0, E.FO)(a, Y),
        es = (0, s.EQ)(a)
            .when(c.Z, () => (null != Y ? er : void 0))
            .when(d.Z, () => ee)
            .when(u.Z, () => {
                if (n.id !== r.id)
                    return () =>
                        (0, U.s)({
                            activity: a,
                            user: n,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        el = () => {
            let e = (0, u.Z)(a) ? 'crunchyroll' : 'default';
            return null == es
                ? (0, i.jsx)(v.E, {
                      image: ea,
                      smallImage: eo,
                      size: v.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, i.jsx)(v.E, {
                      image: ea,
                      smallImage: eo,
                      size: v.J.SIZE_60,
                      className: H.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          et({ action: 'PRESS_IMAGE' }), es(e);
                      }
                  });
        },
        eu = () => {
            var e;
            return a.type === F.IIU.HANG_STATUS
                ? (0, i.jsx)(P.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, T.O8)(a)
                  })
                : (0, f.Z)(a) && null != K
                  ? (0, i.jsxs)('div', {
                        className: H.voiceChannelText,
                        children: [
                            (0, i.jsx)(l.VoiceNormalIcon, {
                                size: 'xxs',
                                color: l.tokens.colors.TEXT_NORMAL,
                                className: H.voiceIcon
                            }),
                            (0, i.jsx)(P.Z, {
                                variant: 'heading-sm/semibold',
                                text: K.name
                            })
                        ]
                    })
                  : (0, d.Z)(a)
                    ? (0, i.jsx)(P.Z, {
                          variant: 'heading-sm/semibold',
                          text: a.name
                      })
                    : (0, i.jsx)(P.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = a.details) && void 0 !== e ? e : a.name
                      });
        },
        ec = () =>
            a.type === F.IIU.HANG_STATUS
                ? null
                : (0, f.Z)(a) && null != W
                  ? (0, i.jsx)(P.Z, {
                        variant: 'text-xs/normal',
                        text: j.intl.formatToPlainString(j.t['hq/Qzc'], { guildName: W.name }),
                        onClick: () => {
                            (0, S.X)(W.id), et({ action: 'OPEN_VOICE_GUILD' }), null == q || q();
                        }
                    })
                  : (0, d.Z)(a)
                    ? (0, i.jsx)(P.Z, {
                          variant: 'text-xs/normal',
                          text: a.details
                      })
                    : (0, i.jsx)(P.Z, {
                          text: a.state,
                          variant: 'text-xs/normal'
                      }),
        ed = () => {
            var e;
            return a.type === F.IIU.WATCHING
                ? null
                : (0, d.Z)(a)
                  ? ef()
                  : (0, i.jsx)(P.Z, {
                        text: null === (e = a.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        ef = () => {
            var e, n, r, o;
            return (null === (e = a.party) || void 0 === e ? void 0 : e.size) == null && a.application_id === V.Zc
                ? (0, i.jsxs)('div', {
                      className: H.gameState,
                      children: [
                          (0, i.jsx)(P.Z, {
                              variant: 'text-xs/normal',
                              text: a.state
                          }),
                          (0, i.jsx)(P.Z, {
                              variant: 'text-xs/normal',
                              text: j.intl.formatToPlainString(j.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (o = null == Y ? void 0 : Y.getMaxParticipants()) && void 0 !== o ? o : 0
                              })
                          })
                      ]
                  })
                : (0, c.Z)(a) && (null === (n = a.party) || void 0 === n ? void 0 : n.size) != null && (null === (r = a.party) || void 0 === r ? void 0 : r.size.length) >= 2
                  ? (0, i.jsxs)('div', {
                        className: H.gameState,
                        children: [
                            (0, i.jsx)(P.Z, {
                                variant: 'text-xs/normal',
                                text: a.state
                            }),
                            (0, i.jsx)(P.Z, {
                                variant: 'text-xs/normal',
                                text: j.intl.formatToPlainString(j.t['u//9Bw'], {
                                    count: a.party.size[0],
                                    max: a.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == a.party
                    ? (0, i.jsx)(P.Z, {
                          variant: 'text-xs/normal',
                          text: a.state
                      })
                    : null;
        },
        ep = () => {
            if (!(0, R.Z)(a)) return null;
            let { start: e, end: n } = a.timestamps;
            return (0, i.jsx)(k.Z, {
                start: e,
                end: n
            });
        },
        eh = () =>
            null == es
                ? (0, i.jsxs)('div', {
                      children: [eu(), ec(), ed()]
                  })
                : (0, i.jsxs)(l.Clickable, {
                      className: H.clickableText,
                      onClick: (e) => {
                          et({ action: 'PRESS_TEXT' }), es(e);
                      },
                      children: [eu(), ec(), ed()]
                  }),
        e_ = () =>
            null == W || null == K
                ? null
                : (0, i.jsx)(M.Z, {
                      user: n,
                      guild: W,
                      channel: K,
                      onAction: et,
                      onClose: q
                  }),
        em = () =>
            n.id === r.id
                ? null
                : (0, i.jsx)('div', {
                      className: o()(H.actions, J),
                      children: (0, i.jsx)(D.Z, {
                          activity: a,
                          user: n,
                          currentUser: r,
                          onAction: et,
                          onClose: q
                      })
                  });
    return (0, i.jsx)(h.Gt, {
        value: Q,
        children: (0, i.jsxs)(x.Z, {
            ref: en,
            className: o()(H.card, z),
            onAction: et,
            onClose: q,
            children: [
                (0, i.jsx)(w.Z, {
                    ...ei,
                    contextMenu: (0, i.jsx)(B.Z, {
                        display: 'live',
                        user: n,
                        activity: a,
                        entry: $,
                        onClose: q
                    })
                }),
                (0, i.jsxs)('div', {
                    className: H.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: o()(H.content, J),
                            children: [
                                !n.bot && el(),
                                (0, i.jsxs)('div', {
                                    className: H.details,
                                    children: [
                                        eh(),
                                        !n.bot &&
                                            (0, i.jsx)(L.Z, {
                                                user: n,
                                                activity: a,
                                                className: H.badges
                                            }),
                                        ep()
                                    ]
                                }),
                                X === Z.y0.FULL_SIZE && em()
                            ]
                        }),
                        e_()
                    ]
                }),
                X !== Z.y0.FULL_SIZE && em()
            ]
        })
    });
}
