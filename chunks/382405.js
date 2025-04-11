t.d(n, { Z: () => X }), t(388685);
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
    E = t(379357),
    p = t(26033),
    y = t(358696),
    h = t(740605),
    v = t(370370),
    _ = t(91140),
    b = t(551228),
    I = t(555672),
    Z = t(335326),
    P = t(297781),
    S = t(797342),
    N = t(810568),
    g = t(168524),
    T = t(592125),
    f = t(944486),
    C = t(960870),
    O = t(139793),
    R = t(502762),
    k = t(652853),
    A = t(336383),
    L = t(373826),
    U = t(228168),
    F = t(981631),
    G = t(616922),
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
        { profileType: x } = (0, k.z)(),
        m = { [z.fullSize]: x === U.y0.FULL_SIZE },
        { largeImage: u } = (0, E.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { appName: j } = (0, S.n)(t),
        p = (0, g.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: t.extra.application_id,
            source: N.m1.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: h } = (0, d.ZP)(),
        v = (0, C.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: h
        }),
        b = (0, O.Z)({
            userId: n.id,
            onAction: v
        }),
        Z = () => (t.content_type === l.s.TOP_GAME ? I.Hs.map((e, n) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(n))) : _.W.map((e, n) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(n))));
    return null == p
        ? (0, s.jsxs)(R.Z.Overlay, {
              className: i()(z.card, r),
              ref: b,
              children: [
                  a,
                  (0, s.jsx)('div', {
                      className: z.body,
                      children: (0, s.jsxs)('div', {
                          className: i()(z.content, m),
                          children: [
                              (0, s.jsx)(y.E, {
                                  image: u,
                                  size: y.J.SIZE_60
                              }),
                              (0, s.jsxs)('div', {
                                  className: z.details,
                                  children: [
                                      (0, s.jsx)('div', {
                                          children: (0, s.jsx)(L.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: j
                                          })
                                      }),
                                      (0, s.jsx)(P.Gk, {
                                          location: P.Gt.USER_PROFILE,
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
        : (0, s.jsxs)(A.Z, {
              ref: b,
              className: r,
              subsection: U.Tb.RECENT_ACTIVITY,
              onAction: v,
              onClose: o,
              children: [
                  a,
                  (0, s.jsx)('div', {
                      className: z.body,
                      children: (0, s.jsxs)('div', {
                          className: i()(z.content, m),
                          children: [
                              (0, s.jsx)(y.E, {
                                  image: u,
                                  size: y.J.SIZE_60,
                                  className: z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), v({ action: 'PRESS_IMAGE' }), p(e), x !== U.y0.FULL_SIZE && (null == o || o());
                                  }
                              }),
                              (0, s.jsxs)('div', {
                                  className: z.details,
                                  children: [
                                      (0, s.jsx)(c.P3F, {
                                          className: z.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), v({ action: 'PRESS_TEXT' }), p(e), x !== U.y0.FULL_SIZE && (null == o || o());
                                          },
                                          children: (0, s.jsx)(L.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: j
                                          })
                                      }),
                                      (0, s.jsx)(P.Gk, {
                                          location: P.Gt.USER_PROFILE,
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
        { profileType: o } = (0, k.z)(),
        x = { [z.fullSize]: o === U.y0.FULL_SIZE },
        { largeImage: m } = (0, E.rv)({ entry: t }),
        { url: u } = t.extra,
        { analyticsLocations: j } = (0, d.ZP)(),
        p = (0, C.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: j
        }),
        v = (0, O.Z)({
            userId: n.id,
            onAction: p
        });
    return (0, s.jsxs)(A.Z, {
        ref: v,
        className: l,
        subsection: U.Tb.RECENT_ACTIVITY,
        onAction: p,
        onClose: r,
        children: [
            a,
            (0, s.jsx)('div', {
                className: z.body,
                children: (0, s.jsxs)('div', {
                    className: i()(z.content, x),
                    children: [
                        null == u || '' === u
                            ? (0, s.jsx)(y.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: m,
                                  size: y.J.SIZE_60
                              })
                            : (0, s.jsx)(y.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: m,
                                  size: y.J.SIZE_60,
                                  className: z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), p({ action: 'PRESS_IMAGE' }), (0, h.Y)(u);
                                  }
                              }),
                        (0, s.jsxs)('div', {
                            className: z.details,
                            children: [
                                null == u || '' === u
                                    ? (0, s.jsxs)('div', {
                                          children: [
                                              (0, s.jsx)(L.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: t.extra.media_title
                                              }),
                                              (0, s.jsx)(L.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: t.extra.media_subtitle
                                              })
                                          ]
                                      })
                                    : (0, s.jsxs)(c.P3F, {
                                          className: z.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), p({ action: 'PRESS_TEXT' }), (0, h.Y)(u);
                                          },
                                          children: [
                                              (0, s.jsx)(L.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: t.extra.media_title
                                              }),
                                              (0, s.jsx)(L.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: t.extra.media_subtitle
                                              })
                                          ]
                                      }),
                                (0, s.jsx)(P.Gk, {
                                    location: P.Gt.USER_PROFILE,
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
        { profileType: x } = (0, k.z)(),
        m = { [z.fullSize]: x === U.y0.FULL_SIZE },
        { largeImage: u } = (0, E.rv)({ entry: l }),
        { analyticsLocations: j } = (0, d.ZP)(),
        p = (0, C.Z)({
            display: 'recent',
            user: a,
            entry: l,
            analyticsLocations: j
        }),
        v = (0, O.Z)({
            userId: a.id,
            onAction: p
        }),
        _ = null == (n = l.extra.entries[0]) ? void 0 : n.media;
    return null == _
        ? null
        : (0, s.jsxs)(A.Z, {
              ref: v,
              className: c,
              subsection: U.Tb.RECENT_ACTIVITY,
              onAction: p,
              onClose: o,
              children: [
                  r,
                  (0, s.jsx)('div', {
                      className: z.body,
                      children: (0, s.jsxs)('div', {
                          className: i()(z.content, m),
                          children: [
                              (0, s.jsx)(y.E, {
                                  image: u,
                                  size: y.J.SIZE_60,
                                  className: z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), p({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, h.o)(G.Hw.ALBUM, _.external_parent_id);
                                  }
                              }),
                              (0, s.jsxs)('div', {
                                  className: z.details,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          children: [
                                              (0, s.jsx)(L.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: _.title,
                                                  onClick: () => {
                                                      p({ action: 'OPEN_SPOTIFY_TRACK' }), (0, h.o)(G.Hw.TRACK, _.external_id);
                                                  }
                                              }),
                                              (0, s.jsx)(L.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null == (t = _.artists[0]) ? void 0 : t.name,
                                                  onClick: () => {
                                                      var e;
                                                      p({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, h.o)(G.Hw.ARTIST, null == (e = _.artists[0]) ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, s.jsx)(P.Gk, {
                                          location: P.Gt.USER_PROFILE,
                                          className: z.badges,
                                          children: b.te.map((e, n) => (0, s.jsx)(e, { entry: l }, 'entry-'.concat(n)))
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
        { profileType: p } = (0, k.z)(),
        h = { [z.fullSize]: p === U.y0.FULL_SIZE },
        { largeImage: _ } = (0, E.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { analyticsLocations: b, newestAnalyticsLocation: I } = (0, d.ZP)(),
        Z = (0, C.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: b
        }),
        S = (0, O.Z)({
            userId: n.id,
            onAction: Z
        }),
        N = (0, o.bp)() === F.IlC.POPOUT,
        g = (0, r.e7)([T.Z, f.Z], () => T.Z.getChannel(f.Z.getChannelId())),
        R = () => {
            null == c || c(),
                (null == g ? void 0 : g.isVocal())
                    ? (0, u.Z)({
                          context: {
                              type: 'channel',
                              channel: g
                          },
                          analyticsLocation: I,
                          openInPopout: N
                      })
                    : (0, x.__)(m._b.TEXT, j.Ie.NORMAL, { applicationId: t.extra.application_id });
        };
    return (0, s.jsxs)(A.Z, {
        ref: S,
        className: l,
        subsection: U.Tb.RECENT_ACTIVITY,
        onAction: Z,
        onClose: c,
        children: [
            a,
            (0, s.jsx)('div', {
                className: z.body,
                children: (0, s.jsxs)('div', {
                    className: i()(z.content, h),
                    children: [
                        (0, s.jsx)(y.E, {
                            image: _,
                            size: y.J.SIZE_60,
                            className: z.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), Z({ action: 'PRESS_IMAGE' }), R();
                            }
                        }),
                        (0, s.jsxs)('div', {
                            className: z.details,
                            children: [
                                (0, s.jsx)('div', {
                                    children: (0, s.jsx)(L.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: t.extra.activity_name,
                                        onClick: () => {
                                            Z({ action: 'PRESS_TEXT' }), R();
                                        }
                                    })
                                }),
                                (0, s.jsx)(P.Gk, {
                                    location: P.Gt.USER_PROFILE,
                                    className: z.badges,
                                    children: v.j.map((e, n) => (0, s.jsx)(e, { entry: t }, 'entry-'.concat(n)))
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
    return (0, p.dX)(n) ? (0, s.jsx)(Y, w({ entry: n }, t)) : (0, p.y0)(n) ? (0, s.jsx)(M, w({ entry: n }, t)) : (0, p.dU)(n) ? (0, s.jsx)(J, w({ entry: n }, t)) : (0, p.Mq)(n) ? (0, s.jsx)(V, w({ entry: n }, t)) : null;
}
