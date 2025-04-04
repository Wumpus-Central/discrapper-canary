t.d(n, { Z: () => X }), t(47120);
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
    E = t(541716),
    j = t(379357),
    _ = t(26033),
    p = t(358696),
    y = t(740605),
    I = t(370370),
    v = t(91140),
    h = t(551228),
    b = t(555672),
    Z = t(335326),
    N = t(297781),
    P = t(797342),
    S = t(810568),
    T = t(168524),
    g = t(592125),
    f = t(944486),
    C = t(960870),
    R = t(139793),
    O = t(502762),
    A = t(652853),
    k = t(336383),
    G = t(373826),
    L = t(228168),
    U = t(981631),
    F = t(616922),
    z = t(227832);
function w(e) {
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
function Y(e) {
    let { user: n, entry: t, header: a, className: r, onClose: o } = e,
        { profileType: x } = (0, A.z)(),
        m = { [z.fullSize]: x === L.y0.FULL_SIZE },
        { largeImage: u } = (0, j.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { appName: E } = (0, P.n)(t),
        _ = (0, T.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: t.extra.application_id,
            source: S.m1.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: y } = (0, d.ZP)(),
        I = (0, C.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: y
        }),
        h = (0, R.Z)({
            userId: n.id,
            onAction: I
        }),
        Z = () => (t.content_type === l.s.TOP_GAME ? b.Hs.map((e, n) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(n))) : v.W.map((e, n) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(n))));
    return null == _
        ? (0, s.jsxs)(O.Z.Overlay, {
              className: i()(z.card, r),
              ref: h,
              children: [
                  a,
                  (0, s.jsx)('div', {
                      className: z.body,
                      children: (0, s.jsxs)('div', {
                          className: i()(z.content, m),
                          children: [
                              (0, s.jsx)(p.E, {
                                  image: u,
                                  size: p.J.SIZE_60
                              }),
                              (0, s.jsxs)('div', {
                                  className: z.details,
                                  children: [
                                      (0, s.jsx)('div', {
                                          children: (0, s.jsx)(G.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: E
                                          })
                                      }),
                                      (0, s.jsx)(N.Gk, {
                                          location: N.Gt.USER_PROFILE,
                                          className: z.badges,
                                          children: Z()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, s.jsxs)(k.Z, {
              ref: h,
              className: r,
              subsection: L.Tb.RECENT_ACTIVITY,
              onAction: I,
              onClose: o,
              children: [
                  a,
                  (0, s.jsx)('div', {
                      className: z.body,
                      children: (0, s.jsxs)('div', {
                          className: i()(z.content, m),
                          children: [
                              (0, s.jsx)(p.E, {
                                  image: u,
                                  size: p.J.SIZE_60,
                                  className: z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), I({ action: 'PRESS_IMAGE' }), _(e), x !== L.y0.FULL_SIZE && (null == o || o());
                                  }
                              }),
                              (0, s.jsxs)('div', {
                                  className: z.details,
                                  children: [
                                      (0, s.jsx)(c.P3F, {
                                          className: z.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), I({ action: 'PRESS_TEXT' }), _(e), x !== L.y0.FULL_SIZE && (null == o || o());
                                          },
                                          children: (0, s.jsx)(G.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: E
                                          })
                                      }),
                                      (0, s.jsx)(N.Gk, {
                                          location: N.Gt.USER_PROFILE,
                                          className: z.badges,
                                          children: Z()
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
    let { user: n, entry: t, header: a, className: l, onClose: r } = e,
        { profileType: o } = (0, A.z)(),
        x = { [z.fullSize]: o === L.y0.FULL_SIZE },
        { largeImage: m } = (0, j.rv)({ entry: t }),
        { url: u } = t.extra,
        { analyticsLocations: E } = (0, d.ZP)(),
        _ = (0, C.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: E
        }),
        I = (0, R.Z)({
            userId: n.id,
            onAction: _
        });
    return (0, s.jsxs)(k.Z, {
        ref: I,
        className: l,
        subsection: L.Tb.RECENT_ACTIVITY,
        onAction: _,
        onClose: r,
        children: [
            a,
            (0, s.jsx)('div', {
                className: z.body,
                children: (0, s.jsxs)('div', {
                    className: i()(z.content, x),
                    children: [
                        null == u || '' === u
                            ? (0, s.jsx)(p.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: m,
                                  size: p.J.SIZE_60
                              })
                            : (0, s.jsx)(p.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: m,
                                  size: p.J.SIZE_60,
                                  className: z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), _({ action: 'PRESS_IMAGE' }), (0, y.Y)(u);
                                  }
                              }),
                        (0, s.jsxs)('div', {
                            className: z.details,
                            children: [
                                null == u || '' === u
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
                                          className: z.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), _({ action: 'PRESS_TEXT' }), (0, y.Y)(u);
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
                                (0, s.jsx)(N.Gk, {
                                    location: N.Gt.USER_PROFILE,
                                    className: z.badges,
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
function J(e) {
    var n, t;
    let { user: a, entry: l, header: r, className: c, onClose: o } = e,
        { profileType: x } = (0, A.z)(),
        m = { [z.fullSize]: x === L.y0.FULL_SIZE },
        { largeImage: u } = (0, j.rv)({ entry: l }),
        { analyticsLocations: E } = (0, d.ZP)(),
        _ = (0, C.Z)({
            display: 'recent',
            user: a,
            entry: l,
            analyticsLocations: E
        }),
        I = (0, R.Z)({
            userId: a.id,
            onAction: _
        }),
        v = null == (n = l.extra.entries[0]) ? void 0 : n.media;
    return null == v
        ? null
        : (0, s.jsxs)(k.Z, {
              ref: I,
              className: c,
              subsection: L.Tb.RECENT_ACTIVITY,
              onAction: _,
              onClose: o,
              children: [
                  r,
                  (0, s.jsx)('div', {
                      className: z.body,
                      children: (0, s.jsxs)('div', {
                          className: i()(z.content, m),
                          children: [
                              (0, s.jsx)(p.E, {
                                  image: u,
                                  size: p.J.SIZE_60,
                                  className: z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), _({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, y.o)(F.Hw.ALBUM, v.external_parent_id);
                                  }
                              }),
                              (0, s.jsxs)('div', {
                                  className: z.details,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          children: [
                                              (0, s.jsx)(G.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: v.title,
                                                  onClick: () => {
                                                      _({ action: 'OPEN_SPOTIFY_TRACK' }), (0, y.o)(F.Hw.TRACK, v.external_id);
                                                  }
                                              }),
                                              (0, s.jsx)(G.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null == (t = v.artists[0]) ? void 0 : t.name,
                                                  onClick: () => {
                                                      var e;
                                                      _({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, y.o)(F.Hw.ARTIST, null == (e = v.artists[0]) ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, s.jsx)(N.Gk, {
                                          location: N.Gt.USER_PROFILE,
                                          className: z.badges,
                                          children: h.te.map((e, n) => (0, s.jsx)(e, { entry: l }, 'entry-'.concat(n)))
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
    let { user: n, entry: t, header: a, className: l, onClose: c } = e,
        { profileType: _ } = (0, A.z)(),
        y = { [z.fullSize]: _ === L.y0.FULL_SIZE },
        { largeImage: v } = (0, j.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { analyticsLocations: h, newestAnalyticsLocation: b } = (0, d.ZP)(),
        Z = (0, C.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: h
        }),
        P = (0, R.Z)({
            userId: n.id,
            onAction: Z
        }),
        S = (0, o.bp)() === U.IlC.POPOUT,
        T = (0, r.e7)([g.Z, f.Z], () => g.Z.getChannel(f.Z.getChannelId())),
        O = () => {
            null == c || c(),
                (null == T ? void 0 : T.isVocal())
                    ? (0, u.Z)({
                          context: {
                              type: 'channel',
                              channel: T
                          },
                          analyticsLocation: b,
                          openInPopout: S
                      })
                    : (0, x.__)(m._b.TEXT, E.Ie.NORMAL, { applicationId: t.extra.application_id });
        };
    return (0, s.jsxs)(k.Z, {
        ref: P,
        className: l,
        subsection: L.Tb.RECENT_ACTIVITY,
        onAction: Z,
        onClose: c,
        children: [
            a,
            (0, s.jsx)('div', {
                className: z.body,
                children: (0, s.jsxs)('div', {
                    className: i()(z.content, y),
                    children: [
                        (0, s.jsx)(p.E, {
                            image: v,
                            size: p.J.SIZE_60,
                            className: z.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), Z({ action: 'PRESS_IMAGE' }), O();
                            }
                        }),
                        (0, s.jsxs)('div', {
                            className: z.details,
                            children: [
                                (0, s.jsx)('div', {
                                    children: (0, s.jsx)(G.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: t.extra.activity_name,
                                        onClick: () => {
                                            Z({ action: 'PRESS_TEXT' }), O();
                                        }
                                    })
                                }),
                                (0, s.jsx)(N.Gk, {
                                    location: N.Gt.USER_PROFILE,
                                    className: z.badges,
                                    children: I.j.map((e, n) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function X(e) {
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
    return (0, _.dX)(n) ? (0, s.jsx)(Y, w({ entry: n }, t)) : (0, _.y0)(n) ? (0, s.jsx)(M, w({ entry: n }, t)) : (0, _.dU)(n) ? (0, s.jsx)(J, w({ entry: n }, t)) : (0, _.Mq)(n) ? (0, s.jsx)(V, w({ entry: n }, t)) : null;
}
