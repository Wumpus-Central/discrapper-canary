r.d(n, {
    Z: function () {
        return F;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var s = r(120356),
    o = r.n(s),
    l = r(278074),
    u = r(876215),
    c = r(481060),
    d = r(906732),
    f = r(499254),
    _ = r(827498),
    h = r(541716),
    p = r(379357),
    m = r(26033),
    g = r(358696),
    E = r(740605),
    v = r(370370),
    I = r(91140),
    T = r(551228),
    b = r(555672),
    y = r(335326),
    S = r(297781),
    A = r(797342),
    N = r(810568),
    C = r(168524),
    R = r(960870),
    O = r(139793),
    D = r(502762),
    L = r(652853),
    x = r(336383),
    w = r(373826),
    P = r(228168),
    M = r(616922),
    k = r(249942);
function U(e) {
    let { user: n, entry: r, header: i, className: s, onClose: l } = e,
        { profileType: f } = (0, L.z)(),
        _ = { [k.fullSize]: f === P.y0.FULL_SIZE },
        { largeImage: h } = (0, p.rv)({
            entry: r,
            showCoverImage: !1
        }),
        { appName: m } = (0, A.n)(r),
        E = (0, C.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: r.extra.application_id,
            source: N.m1.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: v } = (0, d.ZP)(),
        T = (0, R.Z)({
            display: 'recent',
            user: n,
            entry: r,
            analyticsLocations: v
        }),
        y = (0, O.Z)({
            userId: n.id,
            onAction: T
        }),
        M = () => (r.content_type === u.s.TOP_GAME ? b.Hs.map((e, n) => (0, a.jsx)(e, { entry: r }, 'entry-'.concat(n))) : I.W.map((e, n) => (0, a.jsx)(e, { entry: r }, 'entry-'.concat(n))));
    return null == E
        ? (0, a.jsxs)(D.Z.Overlay, {
              className: o()(k.card, s),
              ref: y,
              children: [
                  i,
                  (0, a.jsx)('div', {
                      className: k.body,
                      children: (0, a.jsxs)('div', {
                          className: o()(k.content, _),
                          children: [
                              (0, a.jsx)(g.E, {
                                  image: h,
                                  size: g.J.SIZE_60
                              }),
                              (0, a.jsxs)('div', {
                                  className: k.details,
                                  children: [
                                      (0, a.jsx)('div', {
                                          children: (0, a.jsx)(w.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: m
                                          })
                                      }),
                                      (0, a.jsx)(S.Gk, {
                                          location: S.Gt.USER_PROFILE,
                                          className: k.badges,
                                          children: M()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, a.jsxs)(x.Z, {
              ref: y,
              className: s,
              subsection: P.Tb.RECENT_ACTIVITY,
              onAction: T,
              onClose: l,
              children: [
                  i,
                  (0, a.jsx)('div', {
                      className: k.body,
                      children: (0, a.jsxs)('div', {
                          className: o()(k.content, _),
                          children: [
                              (0, a.jsx)(g.E, {
                                  image: h,
                                  size: g.J.SIZE_60,
                                  className: k.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), T({ action: 'PRESS_IMAGE' }), E(e), f !== P.y0.FULL_SIZE && (null == l || l());
                                  }
                              }),
                              (0, a.jsxs)('div', {
                                  className: k.details,
                                  children: [
                                      (0, a.jsx)(c.Clickable, {
                                          className: k.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), T({ action: 'PRESS_TEXT' }), E(e), f !== P.y0.FULL_SIZE && (null == l || l());
                                          },
                                          children: (0, a.jsx)(w.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: m
                                          })
                                      }),
                                      (0, a.jsx)(S.Gk, {
                                          location: S.Gt.USER_PROFILE,
                                          className: k.badges,
                                          children: M()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
}
function B(e) {
    let { user: n, entry: r, header: i, className: s, onClose: l } = e,
        { profileType: u } = (0, L.z)(),
        f = { [k.fullSize]: u === P.y0.FULL_SIZE },
        { largeImage: _ } = (0, p.rv)({ entry: r }),
        { url: h } = r.extra,
        { analyticsLocations: m } = (0, d.ZP)(),
        v = (0, R.Z)({
            display: 'recent',
            user: n,
            entry: r,
            analyticsLocations: m
        }),
        I = (0, O.Z)({
            userId: n.id,
            onAction: v
        }),
        T = () =>
            null == h || '' === h
                ? (0, a.jsx)(g.E, {
                      aspectRatio: 'crunchyroll',
                      image: _,
                      size: g.J.SIZE_60
                  })
                : (0, a.jsx)(g.E, {
                      aspectRatio: 'crunchyroll',
                      image: _,
                      size: g.J.SIZE_60,
                      className: k.clickableImage,
                      onClick: (e) => {
                          e.stopPropagation(), v({ action: 'PRESS_IMAGE' }), (0, E.Y)(h);
                      }
                  }),
        b = () =>
            null == h || '' === h
                ? (0, a.jsxs)('div', {
                      children: [
                          (0, a.jsx)(w.Z, {
                              variant: 'heading-sm/semibold',
                              text: r.extra.media_title
                          }),
                          (0, a.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: r.extra.media_subtitle
                          })
                      ]
                  })
                : (0, a.jsxs)(c.Clickable, {
                      className: k.clickableText,
                      onClick: (e) => {
                          e.stopPropagation(), v({ action: 'PRESS_TEXT' }), (0, E.Y)(h);
                      },
                      children: [
                          (0, a.jsx)(w.Z, {
                              variant: 'heading-sm/semibold',
                              text: r.extra.media_title
                          }),
                          (0, a.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: r.extra.media_subtitle
                          })
                      ]
                  });
    return (0, a.jsxs)(x.Z, {
        ref: I,
        className: s,
        subsection: P.Tb.RECENT_ACTIVITY,
        onAction: v,
        onClose: l,
        children: [
            i,
            (0, a.jsx)('div', {
                className: k.body,
                children: (0, a.jsxs)('div', {
                    className: o()(k.content, f),
                    children: [
                        T(),
                        (0, a.jsxs)('div', {
                            className: k.details,
                            children: [
                                b(),
                                (0, a.jsx)(S.Gk, {
                                    location: S.Gt.USER_PROFILE,
                                    className: k.badges,
                                    children: y.t.map((e, n) => (0, a.jsx)(e, { entry: r }, 'entry-'.concat(n)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function G(e) {
    var n, r;
    let { user: i, entry: s, header: l, className: u, onClose: c } = e,
        { profileType: f } = (0, L.z)(),
        _ = { [k.fullSize]: f === P.y0.FULL_SIZE },
        { largeImage: h } = (0, p.rv)({ entry: s }),
        { analyticsLocations: m } = (0, d.ZP)(),
        v = (0, R.Z)({
            display: 'recent',
            user: i,
            entry: s,
            analyticsLocations: m
        }),
        I = (0, O.Z)({
            userId: i.id,
            onAction: v
        }),
        b = null === (n = s.extra.entries[0]) || void 0 === n ? void 0 : n.media;
    return null == b
        ? null
        : (0, a.jsxs)(x.Z, {
              ref: I,
              className: u,
              subsection: P.Tb.RECENT_ACTIVITY,
              onAction: v,
              onClose: c,
              children: [
                  l,
                  (0, a.jsx)('div', {
                      className: k.body,
                      children: (0, a.jsxs)('div', {
                          className: o()(k.content, _),
                          children: [
                              (0, a.jsx)(g.E, {
                                  image: h,
                                  size: g.J.SIZE_60,
                                  className: k.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), v({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, E.o)(M.Hw.ALBUM, b.external_parent_id);
                                  }
                              }),
                              (0, a.jsxs)('div', {
                                  className: k.details,
                                  children: [
                                      (0, a.jsxs)('div', {
                                          children: [
                                              (0, a.jsx)(w.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: b.title,
                                                  onClick: () => {
                                                      v({ action: 'OPEN_SPOTIFY_TRACK' }), (0, E.o)(M.Hw.TRACK, b.external_id);
                                                  }
                                              }),
                                              (0, a.jsx)(w.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null === (r = b.artists[0]) || void 0 === r ? void 0 : r.name,
                                                  onClick: () => {
                                                      var e;
                                                      v({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, E.o)(M.Hw.ARTIST, null === (e = b.artists[0]) || void 0 === e ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, a.jsx)(S.Gk, {
                                          location: S.Gt.USER_PROFILE,
                                          className: k.badges,
                                          children: T.te.map((e, n) => (0, a.jsx)(e, { entry: s }, 'entry-'.concat(n)))
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
}
function Z(e) {
    let { user: n, entry: r, header: i, className: s, onClose: l } = e,
        { profileType: u } = (0, L.z)(),
        c = { [k.fullSize]: u === P.y0.FULL_SIZE },
        { largeImage: m } = (0, p.rv)({
            entry: r,
            showCoverImage: !1
        }),
        { analyticsLocations: E } = (0, d.ZP)(),
        I = (0, R.Z)({
            display: 'recent',
            user: n,
            entry: r,
            analyticsLocations: E
        }),
        T = (0, O.Z)({
            userId: n.id,
            onAction: I
        }),
        b = () => {
            null == l || l(), (0, f.__)(_._b.TEXT, h.Ie.NORMAL, { applicationId: r.extra.application_id });
        };
    return (0, a.jsxs)(x.Z, {
        ref: T,
        className: s,
        subsection: P.Tb.RECENT_ACTIVITY,
        onAction: I,
        onClose: l,
        children: [
            i,
            (0, a.jsx)('div', {
                className: k.body,
                children: (0, a.jsxs)('div', {
                    className: o()(k.content, c),
                    children: [
                        (0, a.jsx)(g.E, {
                            image: m,
                            size: g.J.SIZE_60,
                            className: k.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), I({ action: 'PRESS_IMAGE' }), b();
                            }
                        }),
                        (0, a.jsxs)('div', {
                            className: k.details,
                            children: [
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(w.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: r.extra.activity_name,
                                        onClick: () => {
                                            I({ action: 'PRESS_TEXT' }), b();
                                        }
                                    })
                                }),
                                (0, a.jsx)(S.Gk, {
                                    location: S.Gt.USER_PROFILE,
                                    className: k.badges,
                                    children: v.j.map((e, n) => (0, a.jsx)(e, { entry: r }, 'entry-'.concat(n)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function F(e) {
    let { entry: n, ...r } = e;
    return (0, l.EQ)(n)
        .when(m.dX, (e) =>
            (0, a.jsx)(U, {
                entry: e,
                ...r
            })
        )
        .when(m.y0, (e) =>
            (0, a.jsx)(B, {
                entry: e,
                ...r
            })
        )
        .when(m.dU, (e) =>
            (0, a.jsx)(G, {
                entry: e,
                ...r
            })
        )
        .when(m.Mq, (e) =>
            (0, a.jsx)(Z, {
                entry: e,
                ...r
            })
        )
        .exhaustive();
}
