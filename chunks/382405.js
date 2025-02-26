t.d(n, { Z: () => W }), t(47120);
var l = t(200651);
t(192379);
var i = t(120356),
    a = t.n(i),
    s = t(278074),
    r = t(876215),
    c = t(442837),
    d = t(481060),
    o = t(40851),
    u = t(906732),
    x = t(499254),
    m = t(827498),
    h = t(397698),
    j = t(541716),
    v = t(379357),
    E = t(26033),
    f = t(358696),
    _ = t(740605),
    I = t(370370),
    g = t(91140),
    p = t(551228),
    Z = t(555672),
    N = t(335326),
    y = t(297781),
    b = t(797342),
    P = t(810568),
    C = t(168524),
    R = t(592125),
    T = t(944486),
    S = t(960870),
    A = t(139793),
    O = t(502762),
    k = t(652853),
    G = t(336383),
    F = t(373826),
    U = t(228168),
    L = t(981631),
    w = t(616922),
    z = t(481736);
function M(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function Y(e) {
    let { user: n, entry: t, header: i, className: s, onClose: c } = e,
        { profileType: o } = (0, k.z)(),
        x = { [z.fullSize]: o === U.y0.FULL_SIZE },
        { largeImage: m } = (0, v.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { appName: h } = (0, b.n)(t),
        j = (0, C.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: t.extra.application_id,
            source: P.m1.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: E } = (0, u.ZP)(),
        _ = (0, S.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: E
        }),
        I = (0, A.Z)({
            userId: n.id,
            onAction: _
        }),
        p = () => (t.content_type === r.s.TOP_GAME ? Z.Hs.map((e, n) => (0, l.jsx)(e, { entry: t }, 'entry-'.concat(n))) : g.W.map((e, n) => (0, l.jsx)(e, { entry: t }, 'entry-'.concat(n))));
    return null == j
        ? (0, l.jsxs)(O.Z.Overlay, {
              className: a()(z.card, s),
              ref: I,
              children: [
                  i,
                  (0, l.jsx)('div', {
                      className: z.body,
                      children: (0, l.jsxs)('div', {
                          className: a()(z.content, x),
                          children: [
                              (0, l.jsx)(f.E, {
                                  image: m,
                                  size: f.J.SIZE_60
                              }),
                              (0, l.jsxs)('div', {
                                  className: z.details,
                                  children: [
                                      (0, l.jsx)('div', {
                                          children: (0, l.jsx)(F.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: h
                                          })
                                      }),
                                      (0, l.jsx)(y.Gk, {
                                          location: y.Gt.USER_PROFILE,
                                          className: z.badges,
                                          children: p()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, l.jsxs)(G.Z, {
              ref: I,
              className: s,
              subsection: U.Tb.RECENT_ACTIVITY,
              onAction: _,
              onClose: c,
              children: [
                  i,
                  (0, l.jsx)('div', {
                      className: z.body,
                      children: (0, l.jsxs)('div', {
                          className: a()(z.content, x),
                          children: [
                              (0, l.jsx)(f.E, {
                                  image: m,
                                  size: f.J.SIZE_60,
                                  className: z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), _({ action: 'PRESS_IMAGE' }), j(e), o !== U.y0.FULL_SIZE && (null == c || c());
                                  }
                              }),
                              (0, l.jsxs)('div', {
                                  className: z.details,
                                  children: [
                                      (0, l.jsx)(d.P3F, {
                                          className: z.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), _({ action: 'PRESS_TEXT' }), j(e), o !== U.y0.FULL_SIZE && (null == c || c());
                                          },
                                          children: (0, l.jsx)(F.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: h
                                          })
                                      }),
                                      (0, l.jsx)(y.Gk, {
                                          location: y.Gt.USER_PROFILE,
                                          className: z.badges,
                                          children: p()
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
    let { user: n, entry: t, header: i, className: s, onClose: r } = e,
        { profileType: c } = (0, k.z)(),
        o = { [z.fullSize]: c === U.y0.FULL_SIZE },
        { largeImage: x } = (0, v.rv)({ entry: t }),
        { url: m } = t.extra,
        { analyticsLocations: h } = (0, u.ZP)(),
        j = (0, S.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: h
        }),
        E = (0, A.Z)({
            userId: n.id,
            onAction: j
        });
    return (0, l.jsxs)(G.Z, {
        ref: E,
        className: s,
        subsection: U.Tb.RECENT_ACTIVITY,
        onAction: j,
        onClose: r,
        children: [
            i,
            (0, l.jsx)('div', {
                className: z.body,
                children: (0, l.jsxs)('div', {
                    className: a()(z.content, o),
                    children: [
                        null == m || '' === m
                            ? (0, l.jsx)(f.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: x,
                                  size: f.J.SIZE_60
                              })
                            : (0, l.jsx)(f.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: x,
                                  size: f.J.SIZE_60,
                                  className: z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), j({ action: 'PRESS_IMAGE' }), (0, _.Y)(m);
                                  }
                              }),
                        (0, l.jsxs)('div', {
                            className: z.details,
                            children: [
                                null == m || '' === m
                                    ? (0, l.jsxs)('div', {
                                          children: [
                                              (0, l.jsx)(F.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: t.extra.media_title
                                              }),
                                              (0, l.jsx)(F.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: t.extra.media_subtitle
                                              })
                                          ]
                                      })
                                    : (0, l.jsxs)(d.P3F, {
                                          className: z.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), j({ action: 'PRESS_TEXT' }), (0, _.Y)(m);
                                          },
                                          children: [
                                              (0, l.jsx)(F.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: t.extra.media_title
                                              }),
                                              (0, l.jsx)(F.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: t.extra.media_subtitle
                                              })
                                          ]
                                      }),
                                (0, l.jsx)(y.Gk, {
                                    location: y.Gt.USER_PROFILE,
                                    className: z.badges,
                                    children: N.t.map((e, n) => (0, l.jsx)(e, { entry: t }, 'entry-'.concat(n)))
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
    var n, t;
    let { user: i, entry: s, header: r, className: c, onClose: d } = e,
        { profileType: o } = (0, k.z)(),
        x = { [z.fullSize]: o === U.y0.FULL_SIZE },
        { largeImage: m } = (0, v.rv)({ entry: s }),
        { analyticsLocations: h } = (0, u.ZP)(),
        j = (0, S.Z)({
            display: 'recent',
            user: i,
            entry: s,
            analyticsLocations: h
        }),
        E = (0, A.Z)({
            userId: i.id,
            onAction: j
        }),
        I = null === (n = s.extra.entries[0]) || void 0 === n ? void 0 : n.media;
    return null == I
        ? null
        : (0, l.jsxs)(G.Z, {
              ref: E,
              className: c,
              subsection: U.Tb.RECENT_ACTIVITY,
              onAction: j,
              onClose: d,
              children: [
                  r,
                  (0, l.jsx)('div', {
                      className: z.body,
                      children: (0, l.jsxs)('div', {
                          className: a()(z.content, x),
                          children: [
                              (0, l.jsx)(f.E, {
                                  image: m,
                                  size: f.J.SIZE_60,
                                  className: z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), j({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, _.o)(w.Hw.ALBUM, I.external_parent_id);
                                  }
                              }),
                              (0, l.jsxs)('div', {
                                  className: z.details,
                                  children: [
                                      (0, l.jsxs)('div', {
                                          children: [
                                              (0, l.jsx)(F.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: I.title,
                                                  onClick: () => {
                                                      j({ action: 'OPEN_SPOTIFY_TRACK' }), (0, _.o)(w.Hw.TRACK, I.external_id);
                                                  }
                                              }),
                                              (0, l.jsx)(F.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null === (t = I.artists[0]) || void 0 === t ? void 0 : t.name,
                                                  onClick: () => {
                                                      var e;
                                                      j({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, _.o)(w.Hw.ARTIST, null === (e = I.artists[0]) || void 0 === e ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, l.jsx)(y.Gk, {
                                          location: y.Gt.USER_PROFILE,
                                          className: z.badges,
                                          children: p.te.map((e, n) => (0, l.jsx)(e, { entry: s }, 'entry-'.concat(n)))
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
    let { user: n, entry: t, header: i, className: s, onClose: r } = e,
        { profileType: d } = (0, k.z)(),
        E = { [z.fullSize]: d === U.y0.FULL_SIZE },
        { largeImage: _ } = (0, v.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { analyticsLocations: g, newestAnalyticsLocation: p } = (0, u.ZP)(),
        Z = (0, S.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: g
        }),
        N = (0, A.Z)({
            userId: n.id,
            onAction: Z
        }),
        b = (0, o.bp)() === L.IlC.POPOUT,
        P = (0, c.e7)([R.Z, T.Z], () => R.Z.getChannel(T.Z.getChannelId())),
        C = () => {
            null == r || r(),
                (null == P ? void 0 : P.isVocal())
                    ? (0, h.Z)({
                          context: {
                              type: 'channel',
                              channel: P
                          },
                          analyticsLocation: p,
                          openInPopout: b
                      })
                    : (0, x.__)(m._b.TEXT, j.Ie.NORMAL, { applicationId: t.extra.application_id });
        };
    return (0, l.jsxs)(G.Z, {
        ref: N,
        className: s,
        subsection: U.Tb.RECENT_ACTIVITY,
        onAction: Z,
        onClose: r,
        children: [
            i,
            (0, l.jsx)('div', {
                className: z.body,
                children: (0, l.jsxs)('div', {
                    className: a()(z.content, E),
                    children: [
                        (0, l.jsx)(f.E, {
                            image: _,
                            size: f.J.SIZE_60,
                            className: z.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), Z({ action: 'PRESS_IMAGE' }), C();
                            }
                        }),
                        (0, l.jsxs)('div', {
                            className: z.details,
                            children: [
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(F.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: t.extra.activity_name,
                                        onClick: () => {
                                            Z({ action: 'PRESS_TEXT' }), C();
                                        }
                                    })
                                }),
                                (0, l.jsx)(y.Gk, {
                                    location: y.Gt.USER_PROFILE,
                                    className: z.badges,
                                    children: I.j.map((e, n) => (0, l.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function W(e) {
    var { entry: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                i = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        l,
                        i = {},
                        a = Object.keys(e);
                    for (l = 0; l < a.length; l++) (t = a[l]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (l = 0; l < a.length; l++) (t = a[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            }
            return i;
        })(e, ['entry']);
    return (0, s.EQ)(n)
        .when(E.dX, (e) => (0, l.jsx)(Y, M({ entry: e }, t)))
        .when(E.y0, (e) => (0, l.jsx)(D, M({ entry: e }, t)))
        .when(E.dU, (e) => (0, l.jsx)(H, M({ entry: e }, t)))
        .when(E.Mq, (e) => (0, l.jsx)(V, M({ entry: e }, t)))
        .exhaustive();
}
