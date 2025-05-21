t.d(s, { Z: () => w }), t(388685);
var a = t(255367);
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
    p = t(551228),
    v = t(555672),
    h = t(335326),
    E = t(297781),
    b = t(797342),
    y = t(810568),
    _ = t(168524),
    I = t(960870),
    N = t(139793),
    P = t(502762),
    Z = t(652853),
    g = t(336383),
    T = t(373826),
    f = t(614716),
    C = t(228168),
    O = t(616922),
    S = t(227832);
function R(e) {
    for (var s = 1; s < arguments.length; s++) {
        var t = null != arguments[s] ? arguments[s] : {},
            a = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            a.forEach(function (s) {
                var a;
                (a = t[s]),
                    s in e
                        ? Object.defineProperty(e, s, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[s] = a);
            });
    }
    return e;
}
function k(e) {
    let { user: s, entry: t, header: n, className: d, onClose: m } = e,
        { themeType: j } = (0, Z.z)(),
        { largeImage: p } = (0, o.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { appName: h } = (0, b.n)(t),
        f = (0, _.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: t.extra.application_id,
            source: y.m1.UserProfile,
            sourceUserId: s.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: O } = (0, c.ZP)(),
        R = (0, I.Z)({
            display: 'recent',
            user: s,
            entry: t,
            analyticsLocations: O
        }),
        k = (0, N.Z)({
            userId: s.id,
            onAction: R
        }),
        A = () => (t.content_type === l.s.TOP_GAME ? v.Hs.map((e, s) => (0, a.jsx)(e, { entry: t }, 'entry-'.concat(s))) : u.W.map((e, s) => (0, a.jsx)(e, { entry: t }, 'entry-'.concat(s))));
    return null == f
        ? (0, a.jsxs)(P.Z.Overlay, {
              className: i()(S.card, d),
              ref: k,
              children: [
                  n,
                  (0, a.jsx)('div', {
                      className: S.body,
                      children: (0, a.jsxs)('div', {
                          className: S.content,
                          children: [
                              (0, a.jsx)(x.E, {
                                  image: p,
                                  size: x.J.SIZE_60,
                                  className: S.image
                              }),
                              (0, a.jsxs)('div', {
                                  className: S.details,
                                  children: [
                                      (0, a.jsx)('div', {
                                          children: (0, a.jsx)(T.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: h
                                          })
                                      }),
                                      (0, a.jsx)(E.Gk, {
                                          location: E.Gt.USER_PROFILE,
                                          className: S.badges,
                                          children: A()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, a.jsxs)(g.Z, {
              ref: k,
              className: d,
              subsection: C.Tb.RECENT_ACTIVITY,
              onAction: R,
              onClose: m,
              children: [
                  n,
                  (0, a.jsx)('div', {
                      className: S.body,
                      children: (0, a.jsxs)('div', {
                          className: S.content,
                          children: [
                              (0, a.jsx)(x.E, {
                                  image: p,
                                  size: x.J.SIZE_60,
                                  className: S.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), R({ action: 'PRESS_IMAGE' }), f(e), j !== C.lY.MODAL && j !== C.lY.MODAL_V2 && (null == m || m());
                                  }
                              }),
                              (0, a.jsxs)('div', {
                                  className: S.details,
                                  children: [
                                      (0, a.jsx)(r.P3F, {
                                          className: S.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), R({ action: 'PRESS_TEXT' }), f(e), j !== C.lY.MODAL && j !== C.lY.MODAL_V2 && (null == m || m());
                                          },
                                          children: (0, a.jsx)(T.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: h
                                          })
                                      }),
                                      (0, a.jsx)(E.Gk, {
                                          location: E.Gt.USER_PROFILE,
                                          className: S.badges,
                                          children: A()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
}
function A(e) {
    let { user: s, entry: t, header: n, className: i, onClose: l } = e,
        { largeImage: d } = (0, o.rv)({ entry: t }),
        { url: j } = t.extra,
        { analyticsLocations: u } = (0, c.ZP)(),
        p = (0, I.Z)({
            display: 'recent',
            user: s,
            entry: t,
            analyticsLocations: u
        }),
        v = (0, N.Z)({
            userId: s.id,
            onAction: p
        });
    return (0, a.jsxs)(g.Z, {
        ref: v,
        className: i,
        subsection: C.Tb.RECENT_ACTIVITY,
        onAction: p,
        onClose: l,
        children: [
            n,
            (0, a.jsx)('div', {
                className: S.body,
                children: (0, a.jsxs)('div', {
                    className: S.content,
                    children: [
                        null == j || '' === j
                            ? (0, a.jsx)(x.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: d,
                                  size: x.J.SIZE_60,
                                  className: S.image
                              })
                            : (0, a.jsx)(x.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: d,
                                  size: x.J.SIZE_60,
                                  className: S.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), p({ action: 'PRESS_IMAGE' }), (0, m.Y)(j);
                                  }
                              }),
                        (0, a.jsxs)('div', {
                            className: S.details,
                            children: [
                                null == j || '' === j
                                    ? (0, a.jsxs)('div', {
                                          children: [
                                              (0, a.jsx)(T.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: t.extra.media_title
                                              }),
                                              (0, a.jsx)(T.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: t.extra.media_subtitle
                                              })
                                          ]
                                      })
                                    : (0, a.jsxs)(r.P3F, {
                                          className: S.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), p({ action: 'PRESS_TEXT' }), (0, m.Y)(j);
                                          },
                                          children: [
                                              (0, a.jsx)(T.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: t.extra.media_title
                                              }),
                                              (0, a.jsx)(T.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: t.extra.media_subtitle
                                              })
                                          ]
                                      }),
                                (0, a.jsx)(E.Gk, {
                                    location: E.Gt.USER_PROFILE,
                                    className: S.badges,
                                    children: h.t.map((e, s) => (0, a.jsx)(e, { entry: t }, 'entry-'.concat(s)))
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
    var s, t;
    let { user: n, entry: i, header: l, className: r, onClose: d } = e,
        { largeImage: j } = (0, o.rv)({ entry: i }),
        { analyticsLocations: u } = (0, c.ZP)(),
        v = (0, I.Z)({
            display: 'recent',
            user: n,
            entry: i,
            analyticsLocations: u
        }),
        h = (0, N.Z)({
            userId: n.id,
            onAction: v
        }),
        b = null == (s = i.extra.entries[0]) ? void 0 : s.media;
    return null == b
        ? null
        : (0, a.jsxs)(g.Z, {
              ref: h,
              className: r,
              subsection: C.Tb.RECENT_ACTIVITY,
              onAction: v,
              onClose: d,
              children: [
                  l,
                  (0, a.jsx)('div', {
                      className: S.body,
                      children: (0, a.jsxs)('div', {
                          className: S.content,
                          children: [
                              (0, a.jsx)(x.E, {
                                  image: j,
                                  size: x.J.SIZE_60,
                                  className: S.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), v({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, m.o)(O.Hw.ALBUM, b.external_parent_id);
                                  }
                              }),
                              (0, a.jsxs)('div', {
                                  className: S.details,
                                  children: [
                                      (0, a.jsxs)('div', {
                                          children: [
                                              (0, a.jsx)(T.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: b.title,
                                                  onClick: () => {
                                                      v({ action: 'OPEN_SPOTIFY_TRACK' }), (0, m.o)(O.Hw.TRACK, b.external_id);
                                                  }
                                              }),
                                              (0, a.jsx)(T.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null == (t = b.artists[0]) ? void 0 : t.name,
                                                  onClick: () => {
                                                      var e;
                                                      v({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, m.o)(O.Hw.ARTIST, null == (e = b.artists[0]) ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, a.jsx)(E.Gk, {
                                          location: E.Gt.USER_PROFILE,
                                          className: S.badges,
                                          children: p.te.map((e, s) => (0, a.jsx)(e, { entry: i }, 'entry-'.concat(s)))
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
    let { user: s, entry: t, header: n, className: i, onClose: l } = e,
        { largeImage: r } = (0, o.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { analyticsLocations: d } = (0, c.ZP)(),
        m = (0, I.Z)({
            display: 'recent',
            user: s,
            entry: t,
            analyticsLocations: d
        }),
        u = (0, N.Z)({
            userId: s.id,
            onAction: m
        }),
        p = (0, f.Z)({
            applicationId: t.extra.application_id,
            onClose: l
        });
    return (0, a.jsxs)(g.Z, {
        ref: u,
        className: i,
        subsection: C.Tb.RECENT_ACTIVITY,
        onAction: m,
        onClose: l,
        children: [
            n,
            (0, a.jsx)('div', {
                className: S.body,
                children: (0, a.jsxs)('div', {
                    className: S.content,
                    children: [
                        (0, a.jsx)(x.E, {
                            image: r,
                            size: x.J.SIZE_60,
                            className: S.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), m({ action: 'PRESS_IMAGE' }), p();
                            }
                        }),
                        (0, a.jsxs)('div', {
                            className: S.details,
                            children: [
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(T.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: t.extra.activity_name,
                                        onClick: () => {
                                            m({ action: 'PRESS_TEXT' }), p();
                                        }
                                    })
                                }),
                                (0, a.jsx)(E.Gk, {
                                    location: E.Gt.USER_PROFILE,
                                    className: S.badges,
                                    children: j.j.map((e, s) => (0, a.jsx)(e, { entry: t }, 'entry-'.concat(s)))
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
    var { entry: s } = e,
        t = (function (e, s) {
            if (null == e) return {};
            var t,
                a,
                n = (function (e, s) {
                    if (null == e) return {};
                    var t,
                        a,
                        n = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (t = i[a]), s.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                })(e, s);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++) (t = i[a]), !(s.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
            }
            return n;
        })(e, ['entry']);
    return (0, d.dX)(s) ? (0, a.jsx)(k, R({ entry: s }, t)) : (0, d.y0)(s) ? (0, a.jsx)(A, R({ entry: s }, t)) : (0, d.dU)(s) ? (0, a.jsx)(G, R({ entry: s }, t)) : (0, d.Mq)(s) ? (0, a.jsx)(Y, R({ entry: s }, t)) : null;
}
