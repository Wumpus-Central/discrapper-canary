n.d(t, { Z: () => Y }), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(278074),
    o = n(876215),
    l = n(442837),
    u = n(481060),
    c = n(40851),
    d = n(906732),
    f = n(499254),
    _ = n(827498),
    p = n(397698),
    h = n(541716),
    m = n(379357),
    g = n(26033),
    E = n(358696),
    v = n(740605),
    y = n(370370),
    I = n(91140),
    T = n(551228),
    b = n(555672),
    S = n(335326),
    A = n(297781),
    N = n(797342),
    C = n(810568),
    R = n(168524),
    O = n(592125),
    D = n(944486),
    x = n(960870),
    L = n(139793),
    P = n(502762),
    w = n(652853),
    M = n(336383),
    k = n(373826),
    U = n(228168),
    G = n(981631),
    B = n(616922),
    Z = n(249942);
function F(e) {
    let { user: t, entry: n, header: r, className: s, onClose: l } = e,
        { profileType: c } = (0, w.z)(),
        f = { [Z.fullSize]: c === U.y0.FULL_SIZE },
        { largeImage: _ } = (0, m.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { appName: p } = (0, N.n)(n),
        h = (0, R.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: n.extra.application_id,
            source: C.m1.UserProfile,
            sourceUserId: t.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: g } = (0, d.ZP)(),
        v = (0, x.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: g
        }),
        y = (0, L.Z)({
            userId: t.id,
            onAction: v
        }),
        T = () => (n.content_type === o.s.TOP_GAME ? b.Hs.map((e, t) => (0, i.jsx)(e, { entry: n }, 'entry-'.concat(t))) : I.W.map((e, t) => (0, i.jsx)(e, { entry: n }, 'entry-'.concat(t))));
    return null == h
        ? (0, i.jsxs)(P.Z.Overlay, {
              className: a()(Z.card, s),
              ref: y,
              children: [
                  r,
                  (0, i.jsx)('div', {
                      className: Z.body,
                      children: (0, i.jsxs)('div', {
                          className: a()(Z.content, f),
                          children: [
                              (0, i.jsx)(E.E, {
                                  image: _,
                                  size: E.J.SIZE_60
                              }),
                              (0, i.jsxs)('div', {
                                  className: Z.details,
                                  children: [
                                      (0, i.jsx)('div', {
                                          children: (0, i.jsx)(k.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: p
                                          })
                                      }),
                                      (0, i.jsx)(A.Gk, {
                                          location: A.Gt.USER_PROFILE,
                                          className: Z.badges,
                                          children: T()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, i.jsxs)(M.Z, {
              ref: y,
              className: s,
              subsection: U.Tb.RECENT_ACTIVITY,
              onAction: v,
              onClose: l,
              children: [
                  r,
                  (0, i.jsx)('div', {
                      className: Z.body,
                      children: (0, i.jsxs)('div', {
                          className: a()(Z.content, f),
                          children: [
                              (0, i.jsx)(E.E, {
                                  image: _,
                                  size: E.J.SIZE_60,
                                  className: Z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), v({ action: 'PRESS_IMAGE' }), h(e), c !== U.y0.FULL_SIZE && (null == l || l());
                                  }
                              }),
                              (0, i.jsxs)('div', {
                                  className: Z.details,
                                  children: [
                                      (0, i.jsx)(u.P3F, {
                                          className: Z.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), v({ action: 'PRESS_TEXT' }), h(e), c !== U.y0.FULL_SIZE && (null == l || l());
                                          },
                                          children: (0, i.jsx)(k.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: p
                                          })
                                      }),
                                      (0, i.jsx)(A.Gk, {
                                          location: A.Gt.USER_PROFILE,
                                          className: Z.badges,
                                          children: T()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
}
function V(e) {
    let { user: t, entry: n, header: r, className: s, onClose: o } = e,
        { profileType: l } = (0, w.z)(),
        c = { [Z.fullSize]: l === U.y0.FULL_SIZE },
        { largeImage: f } = (0, m.rv)({ entry: n }),
        { url: _ } = n.extra,
        { analyticsLocations: p } = (0, d.ZP)(),
        h = (0, x.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: p
        }),
        g = (0, L.Z)({
            userId: t.id,
            onAction: h
        }),
        y = () =>
            null == _ || '' === _
                ? (0, i.jsx)(E.E, {
                      aspectRatio: 'crunchyroll',
                      image: f,
                      size: E.J.SIZE_60
                  })
                : (0, i.jsx)(E.E, {
                      aspectRatio: 'crunchyroll',
                      image: f,
                      size: E.J.SIZE_60,
                      className: Z.clickableImage,
                      onClick: (e) => {
                          e.stopPropagation(), h({ action: 'PRESS_IMAGE' }), (0, v.Y)(_);
                      }
                  }),
        I = () =>
            null == _ || '' === _
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(k.Z, {
                              variant: 'heading-sm/semibold',
                              text: n.extra.media_title
                          }),
                          (0, i.jsx)(k.Z, {
                              variant: 'text-xs/normal',
                              text: n.extra.media_subtitle
                          })
                      ]
                  })
                : (0, i.jsxs)(u.P3F, {
                      className: Z.clickableText,
                      onClick: (e) => {
                          e.stopPropagation(), h({ action: 'PRESS_TEXT' }), (0, v.Y)(_);
                      },
                      children: [
                          (0, i.jsx)(k.Z, {
                              variant: 'heading-sm/semibold',
                              text: n.extra.media_title
                          }),
                          (0, i.jsx)(k.Z, {
                              variant: 'text-xs/normal',
                              text: n.extra.media_subtitle
                          })
                      ]
                  });
    return (0, i.jsxs)(M.Z, {
        ref: g,
        className: s,
        subsection: U.Tb.RECENT_ACTIVITY,
        onAction: h,
        onClose: o,
        children: [
            r,
            (0, i.jsx)('div', {
                className: Z.body,
                children: (0, i.jsxs)('div', {
                    className: a()(Z.content, c),
                    children: [
                        y(),
                        (0, i.jsxs)('div', {
                            className: Z.details,
                            children: [
                                I(),
                                (0, i.jsx)(A.Gk, {
                                    location: A.Gt.USER_PROFILE,
                                    className: Z.badges,
                                    children: S.t.map((e, t) => (0, i.jsx)(e, { entry: n }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function j(e) {
    var t, n;
    let { user: r, entry: s, header: o, className: l, onClose: u } = e,
        { profileType: c } = (0, w.z)(),
        f = { [Z.fullSize]: c === U.y0.FULL_SIZE },
        { largeImage: _ } = (0, m.rv)({ entry: s }),
        { analyticsLocations: p } = (0, d.ZP)(),
        h = (0, x.Z)({
            display: 'recent',
            user: r,
            entry: s,
            analyticsLocations: p
        }),
        g = (0, L.Z)({
            userId: r.id,
            onAction: h
        }),
        y = null === (t = s.extra.entries[0]) || void 0 === t ? void 0 : t.media;
    return null == y
        ? null
        : (0, i.jsxs)(M.Z, {
              ref: g,
              className: l,
              subsection: U.Tb.RECENT_ACTIVITY,
              onAction: h,
              onClose: u,
              children: [
                  o,
                  (0, i.jsx)('div', {
                      className: Z.body,
                      children: (0, i.jsxs)('div', {
                          className: a()(Z.content, f),
                          children: [
                              (0, i.jsx)(E.E, {
                                  image: _,
                                  size: E.J.SIZE_60,
                                  className: Z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), h({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, v.o)(B.Hw.ALBUM, y.external_parent_id);
                                  }
                              }),
                              (0, i.jsxs)('div', {
                                  className: Z.details,
                                  children: [
                                      (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)(k.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: y.title,
                                                  onClick: () => {
                                                      h({ action: 'OPEN_SPOTIFY_TRACK' }), (0, v.o)(B.Hw.TRACK, y.external_id);
                                                  }
                                              }),
                                              (0, i.jsx)(k.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null === (n = y.artists[0]) || void 0 === n ? void 0 : n.name,
                                                  onClick: () => {
                                                      var e;
                                                      h({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, v.o)(B.Hw.ARTIST, null === (e = y.artists[0]) || void 0 === e ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, i.jsx)(A.Gk, {
                                          location: A.Gt.USER_PROFILE,
                                          className: Z.badges,
                                          children: T.te.map((e, t) => (0, i.jsx)(e, { entry: s }, 'entry-'.concat(t)))
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
}
function H(e) {
    let { user: t, entry: n, header: r, className: s, onClose: o } = e,
        { profileType: u } = (0, w.z)(),
        g = { [Z.fullSize]: u === U.y0.FULL_SIZE },
        { largeImage: v } = (0, m.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { analyticsLocations: I, newestAnalyticsLocation: T } = (0, d.ZP)(),
        b = (0, x.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: I
        }),
        S = (0, L.Z)({
            userId: t.id,
            onAction: b
        }),
        N = (0, c.bp)() === G.IlC.POPOUT,
        C = (0, l.e7)([O.Z, D.Z], () => O.Z.getChannel(D.Z.getChannelId())),
        R = () => {
            null == o || o(),
                (null == C ? void 0 : C.isVocal())
                    ? (0, p.Z)({
                          context: {
                              type: 'channel',
                              channel: C
                          },
                          analyticsLocation: T,
                          openInPopout: N
                      })
                    : (0, f.__)(_._b.TEXT, h.Ie.NORMAL, { applicationId: n.extra.application_id });
        };
    return (0, i.jsxs)(M.Z, {
        ref: S,
        className: s,
        subsection: U.Tb.RECENT_ACTIVITY,
        onAction: b,
        onClose: o,
        children: [
            r,
            (0, i.jsx)('div', {
                className: Z.body,
                children: (0, i.jsxs)('div', {
                    className: a()(Z.content, g),
                    children: [
                        (0, i.jsx)(E.E, {
                            image: v,
                            size: E.J.SIZE_60,
                            className: Z.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), b({ action: 'PRESS_IMAGE' }), R();
                            }
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.details,
                            children: [
                                (0, i.jsx)('div', {
                                    children: (0, i.jsx)(k.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: n.extra.activity_name,
                                        onClick: () => {
                                            b({ action: 'PRESS_TEXT' }), R();
                                        }
                                    })
                                }),
                                (0, i.jsx)(A.Gk, {
                                    location: A.Gt.USER_PROFILE,
                                    className: Z.badges,
                                    children: y.j.map((e, t) => (0, i.jsx)(e, { entry: n }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function Y(e) {
    let { entry: t, ...n } = e;
    return (0, s.EQ)(t)
        .when(g.dX, (e) =>
            (0, i.jsx)(F, {
                entry: e,
                ...n
            })
        )
        .when(g.y0, (e) =>
            (0, i.jsx)(V, {
                entry: e,
                ...n
            })
        )
        .when(g.dU, (e) =>
            (0, i.jsx)(j, {
                entry: e,
                ...n
            })
        )
        .when(g.Mq, (e) =>
            (0, i.jsx)(H, {
                entry: e,
                ...n
            })
        )
        .exhaustive();
}
