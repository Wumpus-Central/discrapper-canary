t.d(a, { Z: () => M }), t(388685);
var s = t(255367);
t(73800);
var n = t(120356),
    i = t.n(n),
    l = t(876215),
    r = t(481060),
    c = t(906732),
    o = t(379357),
    d = t(26033),
    x = t(358696),
    m = t(740605),
    j = t(370370),
    u = t(91140),
    b = t(551228),
    p = t(555672),
    v = t(335326),
    y = t(297781),
    h = t(797342),
    E = t(313201),
    _ = t(810568),
    I = t(168524),
    N = t(960870),
    f = t(139793),
    P = t(502762),
    g = t(652853),
    T = t(336383),
    Z = t(373826),
    C = t(614716),
    O = t(228168),
    S = t(616922),
    R = t(227832);
function k(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = null != arguments[a] ? arguments[a] : {},
            s = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            s.forEach(function (a) {
                var s;
                (s = t[a]),
                    a in e
                        ? Object.defineProperty(e, a, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[a] = s);
            });
    }
    return e;
}
function A(e) {
    let { user: a, entry: t, header: n, className: d, onClose: m } = e,
        j = (0, E.Dt)(),
        { themeType: b } = (0, g.z)(),
        { largeImage: v } = (0, o.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { appName: C } = (0, h.n)(t),
        S = (0, I.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: t.extra.application_id,
            source: _.m1.UserProfile,
            sourceUserId: a.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: k } = (0, c.ZP)(),
        A = (0, N.Z)({
            display: 'recent',
            user: a,
            entry: t,
            analyticsLocations: k
        }),
        Y = (0, f.Z)({
            userId: a.id,
            onAction: A
        });
    return null == S
        ? (0, s.jsx)('article', {
              'aria-labelledby': j,
              children: (0, s.jsxs)(P.Z.Overlay, {
                  className: i()(R.card, d),
                  ref: Y,
                  children: [
                      n,
                      (0, s.jsx)('div', {
                          className: R.body,
                          children: (0, s.jsxs)('div', {
                              className: R.content,
                              children: [
                                  (0, s.jsx)(x.E, {
                                      image: v,
                                      size: x.J.SIZE_60,
                                      className: R.image
                                  }),
                                  (0, s.jsx)('div', {
                                      className: R.details,
                                      children: (0, s.jsx)('div', {
                                          children: (0, s.jsx)(Z.f, {
                                              variant: 'heading-sm/semibold',
                                              text: C,
                                              id: j
                                          })
                                      })
                                  })
                              ]
                          })
                      })
                  ]
              })
          })
        : (0, s.jsxs)(T.Z, {
              ref: Y,
              className: d,
              subsection: O.Tb.RECENT_ACTIVITY,
              onAction: A,
              onClose: m,
              'aria-labelledby': j,
              children: [
                  n,
                  (0, s.jsx)('div', {
                      className: R.body,
                      children: (0, s.jsxs)('div', {
                          className: R.content,
                          children: [
                              (0, s.jsx)(x.E, {
                                  image: v,
                                  size: x.J.SIZE_60,
                                  className: R.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), A({ action: 'PRESS_IMAGE' }), S(e), b !== O.lY.MODAL && b !== O.lY.MODAL_V2 && (null == m || m());
                                  }
                              }),
                              (0, s.jsxs)('div', {
                                  className: R.details,
                                  children: [
                                      (0, s.jsx)(r.P3F, {
                                          className: R.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), A({ action: 'PRESS_TEXT' }), S(e), b !== O.lY.MODAL && b !== O.lY.MODAL_V2 && (null == m || m());
                                          },
                                          children: (0, s.jsx)(Z.f, {
                                              variant: 'heading-sm/semibold',
                                              text: C,
                                              id: j
                                          })
                                      }),
                                      (0, s.jsx)(y.Gk, {
                                          location: y.Gt.USER_PROFILE,
                                          className: R.badges,
                                          children: t.content_type === l.s.TOP_GAME ? p.Hs.map((e, a) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(a))) : u.W.map((e, a) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(a)))
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
    let { user: a, entry: t, header: n, className: i, onClose: l } = e,
        d = (0, E.Dt)(),
        { largeImage: j } = (0, o.rv)({ entry: t }),
        { url: u } = t.extra,
        { analyticsLocations: b } = (0, c.ZP)(),
        p = (0, N.Z)({
            display: 'recent',
            user: a,
            entry: t,
            analyticsLocations: b
        }),
        h = (0, f.Z)({
            userId: a.id,
            onAction: p
        });
    return (0, s.jsxs)(T.Z, {
        ref: h,
        className: i,
        subsection: O.Tb.RECENT_ACTIVITY,
        onAction: p,
        onClose: l,
        'aria-labelledby': d,
        children: [
            n,
            (0, s.jsx)('div', {
                className: R.body,
                children: (0, s.jsxs)('div', {
                    className: R.content,
                    children: [
                        null == u || '' === u
                            ? (0, s.jsx)(x.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: j,
                                  size: x.J.SIZE_60,
                                  className: R.image
                              })
                            : (0, s.jsx)(x.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: j,
                                  size: x.J.SIZE_60,
                                  className: R.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), p({ action: 'PRESS_IMAGE' }), (0, m.Y)(u);
                                  }
                              }),
                        (0, s.jsxs)('div', {
                            className: R.details,
                            children: [
                                null == u || '' === u
                                    ? (0, s.jsxs)('div', {
                                          children: [
                                              (0, s.jsx)(Z.f, {
                                                  variant: 'heading-sm/semibold',
                                                  text: t.extra.media_title,
                                                  id: d
                                              }),
                                              (0, s.jsx)(Z.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: t.extra.media_subtitle
                                              })
                                          ]
                                      })
                                    : (0, s.jsxs)(r.P3F, {
                                          className: R.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), p({ action: 'PRESS_TEXT' }), (0, m.Y)(u);
                                          },
                                          children: [
                                              (0, s.jsx)(Z.f, {
                                                  variant: 'heading-sm/semibold',
                                                  text: t.extra.media_title,
                                                  id: d
                                              }),
                                              (0, s.jsx)(Z.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: t.extra.media_subtitle
                                              })
                                          ]
                                      }),
                                (0, s.jsx)(y.Gk, {
                                    location: y.Gt.USER_PROFILE,
                                    className: R.badges,
                                    children: v.t.map((e, a) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(a)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function w(e) {
    var a, t;
    let { user: n, entry: i, header: l, className: r, onClose: d } = e,
        j = (0, E.Dt)(),
        { largeImage: u } = (0, o.rv)({ entry: i }),
        { analyticsLocations: p } = (0, c.ZP)(),
        v = (0, N.Z)({
            display: 'recent',
            user: n,
            entry: i,
            analyticsLocations: p
        }),
        h = (0, f.Z)({
            userId: n.id,
            onAction: v
        }),
        _ = null == (a = i.extra.entries[0]) ? void 0 : a.media;
    return null == _
        ? null
        : (0, s.jsxs)(T.Z, {
              ref: h,
              className: r,
              subsection: O.Tb.RECENT_ACTIVITY,
              onAction: v,
              onClose: d,
              'aria-labelledby': j,
              children: [
                  l,
                  (0, s.jsx)('div', {
                      className: R.body,
                      children: (0, s.jsxs)('div', {
                          className: R.content,
                          children: [
                              (0, s.jsx)(x.E, {
                                  image: u,
                                  size: x.J.SIZE_60,
                                  className: R.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), v({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, m.o)(S.Hw.ALBUM, _.external_parent_id);
                                  }
                              }),
                              (0, s.jsxs)('div', {
                                  className: R.details,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          children: [
                                              (0, s.jsx)(Z.f, {
                                                  variant: 'heading-sm/semibold',
                                                  text: _.title,
                                                  onClick: () => {
                                                      v({ action: 'OPEN_SPOTIFY_TRACK' }), (0, m.o)(S.Hw.TRACK, _.external_id);
                                                  },
                                                  id: j
                                              }),
                                              (0, s.jsx)(Z.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null == (t = _.artists[0]) ? void 0 : t.name,
                                                  onClick: () => {
                                                      var e;
                                                      v({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, m.o)(S.Hw.ARTIST, null == (e = _.artists[0]) ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, s.jsx)(y.Gk, {
                                          location: y.Gt.USER_PROFILE,
                                          className: R.badges,
                                          children: b.te.map((e, a) => (0, s.jsx)(e, { entry: i }, 'entry-'.concat(a)))
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
    let { user: a, entry: t, header: n, className: i, onClose: l } = e,
        r = (0, E.Dt)(),
        { largeImage: d } = (0, o.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { analyticsLocations: m } = (0, c.ZP)(),
        u = (0, N.Z)({
            display: 'recent',
            user: a,
            entry: t,
            analyticsLocations: m
        }),
        b = (0, f.Z)({
            userId: a.id,
            onAction: u
        }),
        p = (0, C.Z)({
            applicationId: t.extra.application_id,
            onClose: l
        });
    return (0, s.jsxs)(T.Z, {
        ref: b,
        className: i,
        subsection: O.Tb.RECENT_ACTIVITY,
        onAction: u,
        onClose: l,
        'aria-labelledby': r,
        children: [
            n,
            (0, s.jsx)('div', {
                className: R.body,
                children: (0, s.jsxs)('div', {
                    className: R.content,
                    children: [
                        (0, s.jsx)(x.E, {
                            image: d,
                            size: x.J.SIZE_60,
                            className: R.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), u({ action: 'PRESS_IMAGE' }), p();
                            }
                        }),
                        (0, s.jsxs)('div', {
                            className: R.details,
                            children: [
                                (0, s.jsx)('div', {
                                    children: (0, s.jsx)(Z.f, {
                                        variant: 'heading-sm/semibold',
                                        text: t.extra.activity_name,
                                        onClick: () => {
                                            u({ action: 'PRESS_TEXT' }), p();
                                        },
                                        id: r
                                    })
                                }),
                                (0, s.jsx)(y.Gk, {
                                    location: y.Gt.USER_PROFILE,
                                    className: R.badges,
                                    children: j.j.map((e, a) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(a)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function M(e) {
    var { entry: a } = e,
        t = (function (e, a) {
            if (null == e) return {};
            var t,
                s,
                n = (function (e, a) {
                    if (null == e) return {};
                    var t,
                        s,
                        n = {},
                        i = Object.keys(e);
                    for (s = 0; s < i.length; s++) (t = i[s]), a.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                })(e, a);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (s = 0; s < i.length; s++) (t = i[s]), !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
            }
            return n;
        })(e, ['entry']);
    return (0, d.dX)(a) ? (0, s.jsx)(A, k({ entry: a }, t)) : (0, d.y0)(a) ? (0, s.jsx)(Y, k({ entry: a }, t)) : (0, d.dU)(a) ? (0, s.jsx)(w, k({ entry: a }, t)) : (0, d.Mq)(a) ? (0, s.jsx)(G, k({ entry: a }, t)) : null;
}
