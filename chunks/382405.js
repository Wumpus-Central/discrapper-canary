t.d(n, { Z: () => J }), t(388685);
var s = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    l = t(876215),
    r = t(442837),
    c = t(481060),
    o = t(40851),
    d = t(906732),
    x = t(499254),
    m = t(827498),
    u = t(397698),
    j = t(541716),
    p = t(379357),
    h = t(26033),
    v = t(358696),
    b = t(740605),
    E = t(370370),
    y = t(91140),
    _ = t(551228),
    I = t(555672),
    Z = t(335326),
    P = t(297781),
    N = t(797342),
    g = t(810568),
    T = t(168524),
    C = t(592125),
    O = t(944486),
    f = t(960870),
    R = t(139793),
    S = t(502762),
    k = t(652853),
    A = t(336383),
    G = t(373826),
    L = t(228168),
    Y = t(981631),
    w = t(616922),
    M = t(227832);
function U(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            s = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            s.forEach(function (n) {
                var s;
                (s = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = s);
            });
    }
    return e;
}
function F(e) {
    let { user: n, entry: t, header: a, className: r, onClose: o } = e,
        { themeType: x } = (0, k.z)(),
        { largeImage: m } = (0, p.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { appName: u } = (0, N.n)(t),
        j = (0, T.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: t.extra.application_id,
            source: g.m1.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: h } = (0, d.ZP)(),
        b = (0, f.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: h
        }),
        E = (0, R.Z)({
            userId: n.id,
            onAction: b
        }),
        _ = () => (t.content_type === l.s.TOP_GAME ? I.Hs.map((e, n) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(n))) : y.W.map((e, n) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(n))));
    return null == j
        ? (0, s.jsxs)(S.Z.Overlay, {
              className: i()(M.card, r),
              ref: E,
              children: [
                  a,
                  (0, s.jsx)('div', {
                      className: M.body,
                      children: (0, s.jsxs)('div', {
                          className: M.content,
                          children: [
                              (0, s.jsx)(v.E, {
                                  image: m,
                                  size: v.J.SIZE_60
                              }),
                              (0, s.jsxs)('div', {
                                  className: M.details,
                                  children: [
                                      (0, s.jsx)('div', {
                                          children: (0, s.jsx)(G.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: u
                                          })
                                      }),
                                      (0, s.jsx)(P.Gk, {
                                          location: P.Gt.USER_PROFILE,
                                          className: M.badges,
                                          children: _()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, s.jsxs)(A.Z, {
              ref: E,
              className: r,
              subsection: L.Tb.RECENT_ACTIVITY,
              onAction: b,
              onClose: o,
              children: [
                  a,
                  (0, s.jsx)('div', {
                      className: M.body,
                      children: (0, s.jsxs)('div', {
                          className: M.content,
                          children: [
                              (0, s.jsx)(v.E, {
                                  image: m,
                                  size: v.J.SIZE_60,
                                  className: M.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), b({ action: 'PRESS_IMAGE' }), j(e), x !== L.lY.MODAL && x !== L.lY.MODAL_V2 && (null == o || o());
                                  }
                              }),
                              (0, s.jsxs)('div', {
                                  className: M.details,
                                  children: [
                                      (0, s.jsx)(c.P3F, {
                                          className: M.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), b({ action: 'PRESS_TEXT' }), j(e), x !== L.lY.MODAL && x !== L.lY.MODAL_V2 && (null == o || o());
                                          },
                                          children: (0, s.jsx)(G.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: u
                                          })
                                      }),
                                      (0, s.jsx)(P.Gk, {
                                          location: P.Gt.USER_PROFILE,
                                          className: M.badges,
                                          children: _()
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
    let { user: n, entry: t, header: a, className: i, onClose: l } = e,
        { largeImage: r } = (0, p.rv)({ entry: t }),
        { url: o } = t.extra,
        { analyticsLocations: x } = (0, d.ZP)(),
        m = (0, f.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: x
        }),
        u = (0, R.Z)({
            userId: n.id,
            onAction: m
        });
    return (0, s.jsxs)(A.Z, {
        ref: u,
        className: i,
        subsection: L.Tb.RECENT_ACTIVITY,
        onAction: m,
        onClose: l,
        children: [
            a,
            (0, s.jsx)('div', {
                className: M.body,
                children: (0, s.jsxs)('div', {
                    className: M.content,
                    children: [
                        null == o || '' === o
                            ? (0, s.jsx)(v.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: r,
                                  size: v.J.SIZE_60
                              })
                            : (0, s.jsx)(v.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: r,
                                  size: v.J.SIZE_60,
                                  className: M.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), m({ action: 'PRESS_IMAGE' }), (0, b.Y)(o);
                                  }
                              }),
                        (0, s.jsxs)('div', {
                            className: M.details,
                            children: [
                                null == o || '' === o
                                    ? (0, s.jsxs)('div', {
                                          children: [
                                              (0, s.jsx)(G.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: t.extra.media_title
                                              }),
                                              (0, s.jsx)(G.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: t.extra.media_subtitle
                                              })
                                          ]
                                      })
                                    : (0, s.jsxs)(c.P3F, {
                                          className: M.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), m({ action: 'PRESS_TEXT' }), (0, b.Y)(o);
                                          },
                                          children: [
                                              (0, s.jsx)(G.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: t.extra.media_title
                                              }),
                                              (0, s.jsx)(G.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: t.extra.media_subtitle
                                              })
                                          ]
                                      }),
                                (0, s.jsx)(P.Gk, {
                                    location: P.Gt.USER_PROFILE,
                                    className: M.badges,
                                    children: Z.t.map((e, n) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function z(e) {
    var n, t;
    let { user: a, entry: i, header: l, className: r, onClose: c } = e,
        { largeImage: o } = (0, p.rv)({ entry: i }),
        { analyticsLocations: x } = (0, d.ZP)(),
        m = (0, f.Z)({
            display: 'recent',
            user: a,
            entry: i,
            analyticsLocations: x
        }),
        u = (0, R.Z)({
            userId: a.id,
            onAction: m
        }),
        j = null == (n = i.extra.entries[0]) ? void 0 : n.media;
    return null == j
        ? null
        : (0, s.jsxs)(A.Z, {
              ref: u,
              className: r,
              subsection: L.Tb.RECENT_ACTIVITY,
              onAction: m,
              onClose: c,
              children: [
                  l,
                  (0, s.jsx)('div', {
                      className: M.body,
                      children: (0, s.jsxs)('div', {
                          className: M.content,
                          children: [
                              (0, s.jsx)(v.E, {
                                  image: o,
                                  size: v.J.SIZE_60,
                                  className: M.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), m({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, b.o)(w.Hw.ALBUM, j.external_parent_id);
                                  }
                              }),
                              (0, s.jsxs)('div', {
                                  className: M.details,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          children: [
                                              (0, s.jsx)(G.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: j.title,
                                                  onClick: () => {
                                                      m({ action: 'OPEN_SPOTIFY_TRACK' }), (0, b.o)(w.Hw.TRACK, j.external_id);
                                                  }
                                              }),
                                              (0, s.jsx)(G.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null == (t = j.artists[0]) ? void 0 : t.name,
                                                  onClick: () => {
                                                      var e;
                                                      m({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, b.o)(w.Hw.ARTIST, null == (e = j.artists[0]) ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, s.jsx)(P.Gk, {
                                          location: P.Gt.USER_PROFILE,
                                          className: M.badges,
                                          children: _.te.map((e, n) => (0, s.jsx)(e, { entry: i }, 'entry-'.concat(n)))
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
}
function D(e) {
    let { user: n, entry: t, header: a, className: i, onClose: l } = e,
        { largeImage: c } = (0, p.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { analyticsLocations: h, newestAnalyticsLocation: b } = (0, d.ZP)(),
        y = (0, f.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: h
        }),
        _ = (0, R.Z)({
            userId: n.id,
            onAction: y
        }),
        I = (0, o.bp)() === Y.IlC.POPOUT,
        Z = (0, r.e7)([C.Z, O.Z], () => C.Z.getChannel(O.Z.getChannelId())),
        N = () => {
            null == l || l(),
                (null == Z ? void 0 : Z.isVocal())
                    ? (0, u.Z)({
                          context: {
                              type: 'channel',
                              channel: Z
                          },
                          analyticsLocation: b,
                          openInPopout: I
                      })
                    : (0, x.__)(m._b.TEXT, j.Ie.NORMAL, { applicationId: t.extra.application_id });
        };
    return (0, s.jsxs)(A.Z, {
        ref: _,
        className: i,
        subsection: L.Tb.RECENT_ACTIVITY,
        onAction: y,
        onClose: l,
        children: [
            a,
            (0, s.jsx)('div', {
                className: M.body,
                children: (0, s.jsxs)('div', {
                    className: M.content,
                    children: [
                        (0, s.jsx)(v.E, {
                            image: c,
                            size: v.J.SIZE_60,
                            className: M.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), y({ action: 'PRESS_IMAGE' }), N();
                            }
                        }),
                        (0, s.jsxs)('div', {
                            className: M.details,
                            children: [
                                (0, s.jsx)('div', {
                                    children: (0, s.jsx)(G.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: t.extra.activity_name,
                                        onClick: () => {
                                            y({ action: 'PRESS_TEXT' }), N();
                                        }
                                    })
                                }),
                                (0, s.jsx)(P.Gk, {
                                    location: P.Gt.USER_PROFILE,
                                    className: M.badges,
                                    children: E.j.map((e, n) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function J(e) {
    var { entry: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                s,
                a = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        s,
                        a = {},
                        i = Object.keys(e);
                    for (s = 0; s < i.length; s++) (t = i[s]), n.indexOf(t) >= 0 || (a[t] = e[t]);
                    return a;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (s = 0; s < i.length; s++) (t = i[s]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
            }
            return a;
        })(e, ['entry']);
    return (0, h.dX)(n) ? (0, s.jsx)(F, U({ entry: n }, t)) : (0, h.y0)(n) ? (0, s.jsx)(V, U({ entry: n }, t)) : (0, h.dU)(n) ? (0, s.jsx)(z, U({ entry: n }, t)) : (0, h.Mq)(n) ? (0, s.jsx)(D, U({ entry: n }, t)) : null;
}
