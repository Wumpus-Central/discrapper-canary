n.d(t, { Z: () => Z });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(394821),
    l = n(841784),
    c = n(833664),
    u = n(420660),
    d = n(100527),
    f = n(906732),
    _ = n(379357),
    p = n(358696),
    h = n(649700),
    m = n(769654),
    g = n(960870),
    E = n(139793),
    b = n(994746),
    y = n(273284),
    v = n(232174),
    O = n(510659),
    I = n(287954),
    S = n(660579),
    T = n(652853),
    N = n(64621),
    A = n(979038),
    C = n(448980),
    R = n(336383),
    P = n(194811),
    w = n(373826),
    D = n(315324),
    L = n(262210),
    x = n(386019),
    M = n(881530),
    k = n(228168),
    j = n(981631),
    U = n(701488),
    G = n(388032),
    B = n(227832);
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
function V(e) {
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
function Z(e) {
    var t;
    let { user: n, currentUser: i, activity: F, application: Z, voiceGuild: H, voiceChannel: W, profileGuildId: Y, className: K, onClose: z } = e,
        { analyticsLocations: q } = (0, f.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: Q } = (0, T.z)(),
        X = { [B.fullSize]: Q === k.y0.FULL_SIZE },
        { interactionSource: J, interactionSourceId: $ } = (0, O.Xo)(),
        ee = (0, h.Z)({
            activity: F,
            user: n
        }),
        et = (0, g.Z)({
            display: 'live',
            user: n,
            activity: F,
            entry: ee,
            analyticsLocations: q
        }),
        en = (0, E.Z)({
            userId: n.id,
            onAction: et
        }),
        er = (0, b.Z)(F),
        { largeImage: ei, smallImage: eo } = (0, _.FO)(F, Z),
        ea = (0, M.Z)({
            location: 'UserProfileActivityCardWithInteractionToolbar',
            user: n,
            currentUser: i,
            activity: F,
            application: Z,
            entry: ee,
            onClose: z
        }),
        es = () => {
            let e = (0, s.Z)(F) ? 'crunchyroll' : 'default';
            return null == ea
                ? (0, r.jsx)(p.E, {
                      image: ei,
                      smallImage: eo,
                      size: p.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(p.E, {
                      image: ei,
                      smallImage: eo,
                      size: p.J.SIZE_60,
                      className: B.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          e.stopPropagation(), et({ action: 'PRESS_IMAGE' }), ea(e);
                      }
                  });
        },
        el = () => {
            var e;
            return (0, u.Z)(F) && null != W
                ? (0, r.jsxs)('div', {
                      className: B.voiceChannelText,
                      children: [
                          (0, r.jsx)(a.gj8, {
                              size: 'xxs',
                              color: a.TVs.colors.TEXT_NORMAL,
                              className: B.voiceIcon
                          }),
                          (0, r.jsx)(w.Z, {
                              variant: 'heading-sm/semibold',
                              text: W.name
                          })
                      ]
                  })
                : (0, c.Z)(F)
                  ? (0, r.jsx)(w.Z, {
                        variant: 'heading-sm/semibold',
                        text: F.name
                    })
                  : (0, r.jsx)(w.Z, {
                        variant: 'heading-sm/semibold',
                        text: null != (e = F.details) ? e : F.name
                    });
        },
        ec = () =>
            (0, u.Z)(F) && null != H
                ? (0, r.jsx)(w.Z, {
                      variant: 'text-xs/normal',
                      text: G.NW.formatToPlainString(G.t['hq/Qzc'], { guildName: H.name }),
                      onClick: () => {
                          (0, m.X)(H.id), et({ action: 'OPEN_VOICE_GUILD' }), null == z || z();
                      }
                  })
                : (0, c.Z)(F)
                  ? (0, r.jsx)(w.Z, {
                        variant: 'text-xs/normal',
                        text: F.details
                    })
                  : (0, r.jsx)(w.Z, {
                        text: F.state,
                        variant: 'text-xs/normal'
                    }),
        eu = () => {
            var e;
            return F.type === j.IIU.WATCHING
                ? null
                : (0, c.Z)(F)
                  ? ed()
                  : (0, r.jsx)(w.Z, {
                        text: null == (e = F.assets) ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        ed = () => {
            var e, t, n, i;
            return (null == (e = F.party) ? void 0 : e.size) == null && F.application_id === U.Zc
                ? (0, r.jsxs)('div', {
                      className: B.gameState,
                      children: [
                          (0, r.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: F.state
                          }),
                          (0, r.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: G.NW.formatToPlainString(G.t['u//9Bw'], {
                                  count: '0',
                                  max: null != (i = null == Z ? void 0 : Z.getMaxParticipants()) ? i : 0
                              })
                          })
                      ]
                  })
                : (0, l.Z)(F) && (null == (t = F.party) ? void 0 : t.size) != null && (null == (n = F.party) ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: B.gameState,
                        children: [
                            (0, r.jsx)(w.Z, {
                                variant: 'text-xs/normal',
                                text: F.state
                            }),
                            (0, r.jsx)(w.Z, {
                                variant: 'text-xs/normal',
                                text:
                                    0 === F.party.size[1]
                                        ? G.NW.formatToPlainString(G.t.IM4J4e, { count: F.party.size[0] })
                                        : G.NW.formatToPlainString(G.t['u//9Bw'], {
                                              count: F.party.size[0],
                                              max: F.party.size[1]
                                          })
                            })
                        ]
                    })
                  : null == F.party
                    ? (0, r.jsx)(w.Z, {
                          variant: 'text-xs/normal',
                          text: F.state
                      })
                    : null;
        },
        ef = () => {
            if (!(0, v.Z)(F)) return null;
            let { start: e, end: t } = F.timestamps;
            return (0, r.jsx)(L.Z, {
                start: e,
                end: t
            });
        },
        e_ = () =>
            null == ea
                ? (0, r.jsxs)('div', {
                      children: [el(), ec(), eu()]
                  })
                : (0, r.jsxs)(a.P3F, {
                      className: B.clickableText,
                      onClick: (e) => {
                          e.stopPropagation(), et({ action: 'PRESS_TEXT' }), ea(e);
                      },
                      children: [el(), ec(), eu()]
                  }),
        ep = () =>
            null == H || null == W
                ? null
                : (0, r.jsx)(D.Z, {
                      user: n,
                      guild: H,
                      channel: W,
                      onAction: et,
                      onClose: z
                  }),
        eh = () =>
            n.id === i.id
                ? null
                : (0, r.jsx)('div', {
                      className: o()(B.actions, X),
                      children: (0, r.jsx)(A.Z, {
                          activity: F,
                          user: n,
                          onAction: et,
                          onClose: z
                      })
                  });
    if (null === Q) return null;
    let em = null != (t = F.application_id) ? t : F.name,
        eg = J === k.n_.ACTIVITY && $ === em;
    return (0, r.jsx)(f.Gt, {
        value: q,
        children: (0, r.jsx)(N.Z, {
            sourceType: k.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(I.Z, {
                user: n,
                guildId: Y,
                profileType: Q,
                sourceId: em,
                sourceDetails: null == ee ? (0, y.Z)(F) : null,
                entry: ee,
                onAction: et,
                sourceType: k.n_.ACTIVITY,
                children: () =>
                    (0, r.jsx)(S.Z, {
                        user: n,
                        className: B.toolbarContainer,
                        interactionSourceId: em,
                        sourceType: k.n_.ACTIVITY,
                        onAction: et,
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(x.Z, {
                                display: 'live',
                                user: n,
                                activity: F,
                                entry: ee,
                                onClose: z,
                                children: e
                            }),
                        onShowToolbar: () => et({ action: 'HOVER_ACTIVITY_CARD' }),
                        children: (0, r.jsxs)(R.Z, {
                            ref: en,
                            className: o()(K, { [B.hoisted]: eg }),
                            onAction: et,
                            onClose: z,
                            children: [
                                (0, r.jsx)(P.Z, V({}, er)),
                                (0, r.jsxs)('div', {
                                    className: B.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: o()(B.content, X),
                                            children: [
                                                !n.bot && es(),
                                                (0, r.jsxs)('div', {
                                                    className: B.details,
                                                    children: [
                                                        e_(),
                                                        !n.bot &&
                                                            (0, r.jsx)(C.Z, {
                                                                user: n,
                                                                activity: F,
                                                                className: B.badges
                                                            }),
                                                        ef()
                                                    ]
                                                }),
                                                Q === k.y0.FULL_SIZE && eh()
                                            ]
                                        }),
                                        ep()
                                    ]
                                }),
                                Q !== k.y0.FULL_SIZE && eh()
                            ]
                        })
                    })
            })
        })
    });
}
