s.d(n, { Z: () => J }), s(388685);
var t = s(255367);
s(73800);
var a = s(120356),
    i = s.n(a),
    l = s(876215),
    r = s(442837),
    c = s(481060),
    o = s(40851),
    d = s(906732),
    x = s(499254),
    m = s(827498),
    u = s(397698),
    j = s(541716),
    p = s(379357),
    h = s(26033),
    v = s(358696),
    b = s(740605),
    E = s(370370),
    y = s(91140),
    _ = s(551228),
    I = s(555672),
    Z = s(335326),
    N = s(297781),
    P = s(797342),
    g = s(810568),
    T = s(168524),
    C = s(592125),
    O = s(944486),
    f = s(960870),
    R = s(139793),
    S = s(502762),
    k = s(652853),
    A = s(336383),
    G = s(373826),
    L = s(228168),
    Y = s(981631),
    w = s(616922),
    M = s(227832);
function U(e) {
    for (var n = 1; n < arguments.length; n++) {
        var s = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            t.forEach(function (n) {
                var t;
                (t = s[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = t);
            });
    }
    return e;
}
function F(e) {
    let { user: n, entry: s, header: a, className: r, onClose: o } = e,
        { themeType: x } = (0, k.z)(),
        { largeImage: m } = (0, p.rv)({
            entry: s,
            showCoverImage: !1
        }),
        { appName: u } = (0, P.n)(s),
        j = (0, T.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: s.extra.application_id,
            source: g.m1.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: h } = (0, d.ZP)(),
        b = (0, f.Z)({
            display: 'recent',
            user: n,
            entry: s,
            analyticsLocations: h
        }),
        E = (0, R.Z)({
            userId: n.id,
            onAction: b
        }),
        _ = () => (s.content_type === l.s.TOP_GAME ? I.Hs.map((e, n) => (0, t.jsx)(e, { entry: s }, 'entry-'.concat(n))) : y.W.map((e, n) => (0, t.jsx)(e, { entry: s }, 'entry-'.concat(n))));
    return null == j
        ? (0, t.jsxs)(S.Z.Overlay, {
              className: i()(M.card, r),
              ref: E,
              children: [
                  a,
                  (0, t.jsx)('div', {
                      className: M.body,
                      children: (0, t.jsxs)('div', {
                          className: M.content,
                          children: [
                              (0, t.jsx)(v.E, {
                                  image: m,
                                  size: v.J.SIZE_60,
                                  className: M.image
                              }),
                              (0, t.jsxs)('div', {
                                  className: M.details,
                                  children: [
                                      (0, t.jsx)('div', {
                                          children: (0, t.jsx)(G.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: u
                                          })
                                      }),
                                      (0, t.jsx)(N.Gk, {
                                          location: N.Gt.USER_PROFILE,
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
        : (0, t.jsxs)(A.Z, {
              ref: E,
              className: r,
              subsection: L.Tb.RECENT_ACTIVITY,
              onAction: b,
              onClose: o,
              children: [
                  a,
                  (0, t.jsx)('div', {
                      className: M.body,
                      children: (0, t.jsxs)('div', {
                          className: M.content,
                          children: [
                              (0, t.jsx)(v.E, {
                                  image: m,
                                  size: v.J.SIZE_60,
                                  className: M.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), b({ action: 'PRESS_IMAGE' }), j(e), x !== L.lY.MODAL && x !== L.lY.MODAL_V2 && (null == o || o());
                                  }
                              }),
                              (0, t.jsxs)('div', {
                                  className: M.details,
                                  children: [
                                      (0, t.jsx)(c.P3F, {
                                          className: M.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), b({ action: 'PRESS_TEXT' }), j(e), x !== L.lY.MODAL && x !== L.lY.MODAL_V2 && (null == o || o());
                                          },
                                          children: (0, t.jsx)(G.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: u
                                          })
                                      }),
                                      (0, t.jsx)(N.Gk, {
                                          location: N.Gt.USER_PROFILE,
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
    let { user: n, entry: s, header: a, className: i, onClose: l } = e,
        { largeImage: r } = (0, p.rv)({ entry: s }),
        { url: o } = s.extra,
        { analyticsLocations: x } = (0, d.ZP)(),
        m = (0, f.Z)({
            display: 'recent',
            user: n,
            entry: s,
            analyticsLocations: x
        }),
        u = (0, R.Z)({
            userId: n.id,
            onAction: m
        });
    return (0, t.jsxs)(A.Z, {
        ref: u,
        className: i,
        subsection: L.Tb.RECENT_ACTIVITY,
        onAction: m,
        onClose: l,
        children: [
            a,
            (0, t.jsx)('div', {
                className: M.body,
                children: (0, t.jsxs)('div', {
                    className: M.content,
                    children: [
                        null == o || '' === o
                            ? (0, t.jsx)(v.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: r,
                                  size: v.J.SIZE_60,
                                  className: M.image
                              })
                            : (0, t.jsx)(v.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: r,
                                  size: v.J.SIZE_60,
                                  className: M.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), m({ action: 'PRESS_IMAGE' }), (0, b.Y)(o);
                                  }
                              }),
                        (0, t.jsxs)('div', {
                            className: M.details,
                            children: [
                                null == o || '' === o
                                    ? (0, t.jsxs)('div', {
                                          children: [
                                              (0, t.jsx)(G.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: s.extra.media_title
                                              }),
                                              (0, t.jsx)(G.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: s.extra.media_subtitle
                                              })
                                          ]
                                      })
                                    : (0, t.jsxs)(c.P3F, {
                                          className: M.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), m({ action: 'PRESS_TEXT' }), (0, b.Y)(o);
                                          },
                                          children: [
                                              (0, t.jsx)(G.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: s.extra.media_title
                                              }),
                                              (0, t.jsx)(G.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: s.extra.media_subtitle
                                              })
                                          ]
                                      }),
                                (0, t.jsx)(N.Gk, {
                                    location: N.Gt.USER_PROFILE,
                                    className: M.badges,
                                    children: Z.t.map((e, n) => (0, t.jsx)(e, { entry: s }, 'entry-'.concat(n)))
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
    var n, s;
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
        : (0, t.jsxs)(A.Z, {
              ref: u,
              className: r,
              subsection: L.Tb.RECENT_ACTIVITY,
              onAction: m,
              onClose: c,
              children: [
                  l,
                  (0, t.jsx)('div', {
                      className: M.body,
                      children: (0, t.jsxs)('div', {
                          className: M.content,
                          children: [
                              (0, t.jsx)(v.E, {
                                  image: o,
                                  size: v.J.SIZE_60,
                                  className: M.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), m({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, b.o)(w.Hw.ALBUM, j.external_parent_id);
                                  }
                              }),
                              (0, t.jsxs)('div', {
                                  className: M.details,
                                  children: [
                                      (0, t.jsxs)('div', {
                                          children: [
                                              (0, t.jsx)(G.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: j.title,
                                                  onClick: () => {
                                                      m({ action: 'OPEN_SPOTIFY_TRACK' }), (0, b.o)(w.Hw.TRACK, j.external_id);
                                                  }
                                              }),
                                              (0, t.jsx)(G.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null == (s = j.artists[0]) ? void 0 : s.name,
                                                  onClick: () => {
                                                      var e;
                                                      m({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, b.o)(w.Hw.ARTIST, null == (e = j.artists[0]) ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, t.jsx)(N.Gk, {
                                          location: N.Gt.USER_PROFILE,
                                          className: M.badges,
                                          children: _.te.map((e, n) => (0, t.jsx)(e, { entry: i }, 'entry-'.concat(n)))
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
    let { user: n, entry: s, header: a, className: i, onClose: l } = e,
        { largeImage: c } = (0, p.rv)({
            entry: s,
            showCoverImage: !1
        }),
        { analyticsLocations: h, newestAnalyticsLocation: b } = (0, d.ZP)(),
        y = (0, f.Z)({
            display: 'recent',
            user: n,
            entry: s,
            analyticsLocations: h
        }),
        _ = (0, R.Z)({
            userId: n.id,
            onAction: y
        }),
        I = (0, o.bp)() === Y.IlC.POPOUT,
        Z = (0, r.e7)([C.Z, O.Z], () => C.Z.getChannel(O.Z.getChannelId())),
        P = () => {
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
                    : (0, x.__)(m._b.TEXT, j.Ie.NORMAL, { applicationId: s.extra.application_id });
        };
    return (0, t.jsxs)(A.Z, {
        ref: _,
        className: i,
        subsection: L.Tb.RECENT_ACTIVITY,
        onAction: y,
        onClose: l,
        children: [
            a,
            (0, t.jsx)('div', {
                className: M.body,
                children: (0, t.jsxs)('div', {
                    className: M.content,
                    children: [
                        (0, t.jsx)(v.E, {
                            image: c,
                            size: v.J.SIZE_60,
                            className: M.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), y({ action: 'PRESS_IMAGE' }), P();
                            }
                        }),
                        (0, t.jsxs)('div', {
                            className: M.details,
                            children: [
                                (0, t.jsx)('div', {
                                    children: (0, t.jsx)(G.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: s.extra.activity_name,
                                        onClick: () => {
                                            y({ action: 'PRESS_TEXT' }), P();
                                        }
                                    })
                                }),
                                (0, t.jsx)(N.Gk, {
                                    location: N.Gt.USER_PROFILE,
                                    className: M.badges,
                                    children: E.j.map((e, n) => (0, t.jsx)(e, { entry: s }, 'entry-'.concat(n)))
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
        s = (function (e, n) {
            if (null == e) return {};
            var s,
                t,
                a = (function (e, n) {
                    if (null == e) return {};
                    var s,
                        t,
                        a = {},
                        i = Object.keys(e);
                    for (t = 0; t < i.length; t++) (s = i[t]), n.indexOf(s) >= 0 || (a[s] = e[s]);
                    return a;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (t = 0; t < i.length; t++) (s = i[t]), !(n.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (a[s] = e[s]);
            }
            return a;
        })(e, ['entry']);
    return (0, h.dX)(n) ? (0, t.jsx)(F, U({ entry: n }, s)) : (0, h.y0)(n) ? (0, t.jsx)(V, U({ entry: n }, s)) : (0, h.dU)(n) ? (0, t.jsx)(z, U({ entry: n }, s)) : (0, h.Mq)(n) ? (0, t.jsx)(D, U({ entry: n }, s)) : null;
}
