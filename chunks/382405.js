r.d(n, {
    Z: function () {
        return F;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(278074),
    u = r(876215),
    c = r(481060),
    d = r(906732),
    f = r(499254),
    p = r(827498),
    h = r(541716),
    _ = r(379357),
    m = r(26033),
    g = r(358696),
    E = r(740605),
    v = r(370370),
    y = r(91140),
    b = r(551228),
    I = r(555672),
    T = r(335326),
    S = r(297781),
    A = r(797342),
    C = r(810568),
    N = r(168524),
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
    let { user: n, entry: r, header: i, className: o, onClose: l } = e,
        { profileType: f } = (0, L.z)(),
        p = { [k.fullSize]: f === P.y0.FULL_SIZE },
        { largeImage: h } = (0, _.rv)({
            entry: r,
            showCoverImage: !1
        }),
        { appName: m } = (0, A.n)(r),
        E = (0, N.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: r.extra.application_id,
            source: C.m1.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: v } = (0, d.ZP)(),
        b = (0, R.Z)({
            display: 'recent',
            user: n,
            entry: r,
            analyticsLocations: v
        }),
        T = (0, O.Z)({
            userId: n.id,
            onAction: b
        }),
        M = () => (r.content_type === u.s.TOP_GAME ? I.Hs.map((e, n) => (0, a.jsx)(e, { entry: r }, 'entry-'.concat(n))) : y.W.map((e, n) => (0, a.jsx)(e, { entry: r }, 'entry-'.concat(n))));
    return null == E
        ? (0, a.jsxs)(D.Z.Overlay, {
              className: s()(k.card, o),
              ref: T,
              children: [
                  i,
                  (0, a.jsx)('div', {
                      className: k.body,
                      children: (0, a.jsxs)('div', {
                          className: s()(k.content, p),
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
              ref: T,
              className: o,
              subsection: P.Tb.RECENT_ACTIVITY,
              onAction: b,
              onClose: l,
              children: [
                  i,
                  (0, a.jsx)('div', {
                      className: k.body,
                      children: (0, a.jsxs)('div', {
                          className: s()(k.content, p),
                          children: [
                              (0, a.jsx)(g.E, {
                                  image: h,
                                  size: g.J.SIZE_60,
                                  className: k.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), b({ action: 'PRESS_IMAGE' }), E(e), f !== P.y0.FULL_SIZE && (null == l || l());
                                  }
                              }),
                              (0, a.jsxs)('div', {
                                  className: k.details,
                                  children: [
                                      (0, a.jsx)(c.Clickable, {
                                          className: k.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), b({ action: 'PRESS_TEXT' }), E(e), f !== P.y0.FULL_SIZE && (null == l || l());
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
    let { user: n, entry: r, header: i, className: o, onClose: l } = e,
        { profileType: u } = (0, L.z)(),
        f = { [k.fullSize]: u === P.y0.FULL_SIZE },
        { largeImage: p } = (0, _.rv)({ entry: r }),
        { url: h } = r.extra,
        { analyticsLocations: m } = (0, d.ZP)(),
        v = (0, R.Z)({
            display: 'recent',
            user: n,
            entry: r,
            analyticsLocations: m
        }),
        y = (0, O.Z)({
            userId: n.id,
            onAction: v
        }),
        b = () =>
            null == h || '' === h
                ? (0, a.jsx)(g.E, {
                      aspectRatio: 'crunchyroll',
                      image: p,
                      size: g.J.SIZE_60
                  })
                : (0, a.jsx)(g.E, {
                      aspectRatio: 'crunchyroll',
                      image: p,
                      size: g.J.SIZE_60,
                      className: k.clickableImage,
                      onClick: (e) => {
                          e.stopPropagation(), v({ action: 'PRESS_IMAGE' }), (0, E.Y)(h);
                      }
                  }),
        I = () =>
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
        ref: y,
        className: o,
        subsection: P.Tb.RECENT_ACTIVITY,
        onAction: v,
        onClose: l,
        children: [
            i,
            (0, a.jsx)('div', {
                className: k.body,
                children: (0, a.jsxs)('div', {
                    className: s()(k.content, f),
                    children: [
                        b(),
                        (0, a.jsxs)('div', {
                            className: k.details,
                            children: [
                                I(),
                                (0, a.jsx)(S.Gk, {
                                    location: S.Gt.USER_PROFILE,
                                    className: k.badges,
                                    children: T.t.map((e, n) => (0, a.jsx)(e, { entry: r }, 'entry-'.concat(n)))
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
    let { user: i, entry: o, header: l, className: u, onClose: c } = e,
        { profileType: f } = (0, L.z)(),
        p = { [k.fullSize]: f === P.y0.FULL_SIZE },
        { largeImage: h } = (0, _.rv)({ entry: o }),
        { analyticsLocations: m } = (0, d.ZP)(),
        v = (0, R.Z)({
            display: 'recent',
            user: i,
            entry: o,
            analyticsLocations: m
        }),
        y = (0, O.Z)({
            userId: i.id,
            onAction: v
        }),
        I = null === (n = o.extra.entries[0]) || void 0 === n ? void 0 : n.media;
    return null == I
        ? null
        : (0, a.jsxs)(x.Z, {
              ref: y,
              className: u,
              subsection: P.Tb.RECENT_ACTIVITY,
              onAction: v,
              onClose: c,
              children: [
                  l,
                  (0, a.jsx)('div', {
                      className: k.body,
                      children: (0, a.jsxs)('div', {
                          className: s()(k.content, p),
                          children: [
                              (0, a.jsx)(g.E, {
                                  image: h,
                                  size: g.J.SIZE_60,
                                  className: k.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), v({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, E.o)(M.Hw.ALBUM, I.external_parent_id);
                                  }
                              }),
                              (0, a.jsxs)('div', {
                                  className: k.details,
                                  children: [
                                      (0, a.jsxs)('div', {
                                          children: [
                                              (0, a.jsx)(w.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: I.title,
                                                  onClick: () => {
                                                      v({ action: 'OPEN_SPOTIFY_TRACK' }), (0, E.o)(M.Hw.TRACK, I.external_id);
                                                  }
                                              }),
                                              (0, a.jsx)(w.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null === (r = I.artists[0]) || void 0 === r ? void 0 : r.name,
                                                  onClick: () => {
                                                      var e;
                                                      v({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, E.o)(M.Hw.ARTIST, null === (e = I.artists[0]) || void 0 === e ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, a.jsx)(S.Gk, {
                                          location: S.Gt.USER_PROFILE,
                                          className: k.badges,
                                          children: b.te.map((e, n) => (0, a.jsx)(e, { entry: o }, 'entry-'.concat(n)))
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
    let { user: n, entry: r, header: i, className: o, onClose: l } = e,
        { profileType: u } = (0, L.z)(),
        c = { [k.fullSize]: u === P.y0.FULL_SIZE },
        { largeImage: m } = (0, _.rv)({
            entry: r,
            showCoverImage: !1
        }),
        { analyticsLocations: E } = (0, d.ZP)(),
        y = (0, R.Z)({
            display: 'recent',
            user: n,
            entry: r,
            analyticsLocations: E
        }),
        b = (0, O.Z)({
            userId: n.id,
            onAction: y
        }),
        I = () => {
            null == l || l(), (0, f.__)(p._b.TEXT, h.Ie.NORMAL, { applicationId: r.extra.application_id });
        };
    return (0, a.jsxs)(x.Z, {
        ref: b,
        className: o,
        subsection: P.Tb.RECENT_ACTIVITY,
        onAction: y,
        onClose: l,
        children: [
            i,
            (0, a.jsx)('div', {
                className: k.body,
                children: (0, a.jsxs)('div', {
                    className: s()(k.content, c),
                    children: [
                        (0, a.jsx)(g.E, {
                            image: m,
                            size: g.J.SIZE_60,
                            className: k.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), y({ action: 'PRESS_IMAGE' }), I();
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
                                            y({ action: 'PRESS_TEXT' }), I();
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
