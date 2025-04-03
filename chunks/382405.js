l.d(n, { Z: () => V }), l(47120);
var t = l(200651);
l(192379);
var i = l(120356),
    a = l.n(i),
    s = l(876215),
    r = l(442837),
    c = l(481060),
    d = l(40851),
    o = l(906732),
    u = l(499254),
    x = l(827498),
    m = l(397698),
    h = l(541716),
    j = l(379357),
    v = l(26033),
    E = l(358696),
    f = l(740605),
    _ = l(370370),
    I = l(91140),
    g = l(551228),
    p = l(555672),
    Z = l(335326),
    N = l(297781),
    y = l(797342),
    b = l(810568),
    P = l(168524),
    C = l(592125),
    R = l(944486),
    T = l(960870),
    S = l(139793),
    A = l(502762),
    O = l(652853),
    k = l(336383),
    G = l(373826),
    F = l(228168),
    U = l(981631),
    L = l(616922),
    z = l(227832);
function w(e) {
    for (var n = 1; n < arguments.length; n++) {
        var l = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            t.forEach(function (n) {
                var t;
                (t = l[n]),
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
function M(e) {
    let { user: n, entry: l, header: i, className: r, onClose: d } = e,
        { profileType: u } = (0, O.z)(),
        x = { [z.fullSize]: u === F.y0.FULL_SIZE },
        { largeImage: m } = (0, j.rv)({
            entry: l,
            showCoverImage: !1
        }),
        { appName: h } = (0, y.n)(l),
        v = (0, P.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: l.extra.application_id,
            source: b.m1.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: f } = (0, o.ZP)(),
        _ = (0, T.Z)({
            display: 'recent',
            user: n,
            entry: l,
            analyticsLocations: f
        }),
        g = (0, S.Z)({
            userId: n.id,
            onAction: _
        }),
        Z = () => (l.content_type === s.s.TOP_GAME ? p.Hs.map((e, n) => (0, t.jsx)(e, { entry: l }, 'entry-'.concat(n))) : I.W.map((e, n) => (0, t.jsx)(e, { entry: l }, 'entry-'.concat(n))));
    return null == v
        ? (0, t.jsxs)(A.Z.Overlay, {
              className: a()(z.card, r),
              ref: g,
              children: [
                  i,
                  (0, t.jsx)('div', {
                      className: z.body,
                      children: (0, t.jsxs)('div', {
                          className: a()(z.content, x),
                          children: [
                              (0, t.jsx)(E.E, {
                                  image: m,
                                  size: E.J.SIZE_60
                              }),
                              (0, t.jsxs)('div', {
                                  className: z.details,
                                  children: [
                                      (0, t.jsx)('div', {
                                          children: (0, t.jsx)(G.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: h
                                          })
                                      }),
                                      (0, t.jsx)(N.Gk, {
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
        : (0, t.jsxs)(k.Z, {
              ref: g,
              className: r,
              subsection: F.Tb.RECENT_ACTIVITY,
              onAction: _,
              onClose: d,
              children: [
                  i,
                  (0, t.jsx)('div', {
                      className: z.body,
                      children: (0, t.jsxs)('div', {
                          className: a()(z.content, x),
                          children: [
                              (0, t.jsx)(E.E, {
                                  image: m,
                                  size: E.J.SIZE_60,
                                  className: z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), _({ action: 'PRESS_IMAGE' }), v(e), u !== F.y0.FULL_SIZE && (null == d || d());
                                  }
                              }),
                              (0, t.jsxs)('div', {
                                  className: z.details,
                                  children: [
                                      (0, t.jsx)(c.P3F, {
                                          className: z.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), _({ action: 'PRESS_TEXT' }), v(e), u !== F.y0.FULL_SIZE && (null == d || d());
                                          },
                                          children: (0, t.jsx)(G.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: h
                                          })
                                      }),
                                      (0, t.jsx)(N.Gk, {
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
function Y(e) {
    let { user: n, entry: l, header: i, className: s, onClose: r } = e,
        { profileType: d } = (0, O.z)(),
        u = { [z.fullSize]: d === F.y0.FULL_SIZE },
        { largeImage: x } = (0, j.rv)({ entry: l }),
        { url: m } = l.extra,
        { analyticsLocations: h } = (0, o.ZP)(),
        v = (0, T.Z)({
            display: 'recent',
            user: n,
            entry: l,
            analyticsLocations: h
        }),
        _ = (0, S.Z)({
            userId: n.id,
            onAction: v
        });
    return (0, t.jsxs)(k.Z, {
        ref: _,
        className: s,
        subsection: F.Tb.RECENT_ACTIVITY,
        onAction: v,
        onClose: r,
        children: [
            i,
            (0, t.jsx)('div', {
                className: z.body,
                children: (0, t.jsxs)('div', {
                    className: a()(z.content, u),
                    children: [
                        null == m || '' === m
                            ? (0, t.jsx)(E.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: x,
                                  size: E.J.SIZE_60
                              })
                            : (0, t.jsx)(E.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: x,
                                  size: E.J.SIZE_60,
                                  className: z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), v({ action: 'PRESS_IMAGE' }), (0, f.Y)(m);
                                  }
                              }),
                        (0, t.jsxs)('div', {
                            className: z.details,
                            children: [
                                null == m || '' === m
                                    ? (0, t.jsxs)('div', {
                                          children: [
                                              (0, t.jsx)(G.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: l.extra.media_title
                                              }),
                                              (0, t.jsx)(G.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: l.extra.media_subtitle
                                              })
                                          ]
                                      })
                                    : (0, t.jsxs)(c.P3F, {
                                          className: z.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), v({ action: 'PRESS_TEXT' }), (0, f.Y)(m);
                                          },
                                          children: [
                                              (0, t.jsx)(G.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: l.extra.media_title
                                              }),
                                              (0, t.jsx)(G.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: l.extra.media_subtitle
                                              })
                                          ]
                                      }),
                                (0, t.jsx)(N.Gk, {
                                    location: N.Gt.USER_PROFILE,
                                    className: z.badges,
                                    children: Z.t.map((e, n) => (0, t.jsx)(e, { entry: l }, 'entry-'.concat(n)))
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
    var n, l;
    let { user: i, entry: s, header: r, className: c, onClose: d } = e,
        { profileType: u } = (0, O.z)(),
        x = { [z.fullSize]: u === F.y0.FULL_SIZE },
        { largeImage: m } = (0, j.rv)({ entry: s }),
        { analyticsLocations: h } = (0, o.ZP)(),
        v = (0, T.Z)({
            display: 'recent',
            user: i,
            entry: s,
            analyticsLocations: h
        }),
        _ = (0, S.Z)({
            userId: i.id,
            onAction: v
        }),
        I = null == (n = s.extra.entries[0]) ? void 0 : n.media;
    return null == I
        ? null
        : (0, t.jsxs)(k.Z, {
              ref: _,
              className: c,
              subsection: F.Tb.RECENT_ACTIVITY,
              onAction: v,
              onClose: d,
              children: [
                  r,
                  (0, t.jsx)('div', {
                      className: z.body,
                      children: (0, t.jsxs)('div', {
                          className: a()(z.content, x),
                          children: [
                              (0, t.jsx)(E.E, {
                                  image: m,
                                  size: E.J.SIZE_60,
                                  className: z.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), v({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, f.o)(L.Hw.ALBUM, I.external_parent_id);
                                  }
                              }),
                              (0, t.jsxs)('div', {
                                  className: z.details,
                                  children: [
                                      (0, t.jsxs)('div', {
                                          children: [
                                              (0, t.jsx)(G.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: I.title,
                                                  onClick: () => {
                                                      v({ action: 'OPEN_SPOTIFY_TRACK' }), (0, f.o)(L.Hw.TRACK, I.external_id);
                                                  }
                                              }),
                                              (0, t.jsx)(G.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null == (l = I.artists[0]) ? void 0 : l.name,
                                                  onClick: () => {
                                                      var e;
                                                      v({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, f.o)(L.Hw.ARTIST, null == (e = I.artists[0]) ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, t.jsx)(N.Gk, {
                                          location: N.Gt.USER_PROFILE,
                                          className: z.badges,
                                          children: g.te.map((e, n) => (0, t.jsx)(e, { entry: s }, 'entry-'.concat(n)))
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
    let { user: n, entry: l, header: i, className: s, onClose: c } = e,
        { profileType: v } = (0, O.z)(),
        f = { [z.fullSize]: v === F.y0.FULL_SIZE },
        { largeImage: I } = (0, j.rv)({
            entry: l,
            showCoverImage: !1
        }),
        { analyticsLocations: g, newestAnalyticsLocation: p } = (0, o.ZP)(),
        Z = (0, T.Z)({
            display: 'recent',
            user: n,
            entry: l,
            analyticsLocations: g
        }),
        y = (0, S.Z)({
            userId: n.id,
            onAction: Z
        }),
        b = (0, d.bp)() === U.IlC.POPOUT,
        P = (0, r.e7)([C.Z, R.Z], () => C.Z.getChannel(R.Z.getChannelId())),
        A = () => {
            null == c || c(),
                (null == P ? void 0 : P.isVocal())
                    ? (0, m.Z)({
                          context: {
                              type: 'channel',
                              channel: P
                          },
                          analyticsLocation: p,
                          openInPopout: b
                      })
                    : (0, u.__)(x._b.TEXT, h.Ie.NORMAL, { applicationId: l.extra.application_id });
        };
    return (0, t.jsxs)(k.Z, {
        ref: y,
        className: s,
        subsection: F.Tb.RECENT_ACTIVITY,
        onAction: Z,
        onClose: c,
        children: [
            i,
            (0, t.jsx)('div', {
                className: z.body,
                children: (0, t.jsxs)('div', {
                    className: a()(z.content, f),
                    children: [
                        (0, t.jsx)(E.E, {
                            image: I,
                            size: E.J.SIZE_60,
                            className: z.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), Z({ action: 'PRESS_IMAGE' }), A();
                            }
                        }),
                        (0, t.jsxs)('div', {
                            className: z.details,
                            children: [
                                (0, t.jsx)('div', {
                                    children: (0, t.jsx)(G.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: l.extra.activity_name,
                                        onClick: () => {
                                            Z({ action: 'PRESS_TEXT' }), A();
                                        }
                                    })
                                }),
                                (0, t.jsx)(N.Gk, {
                                    location: N.Gt.USER_PROFILE,
                                    className: z.badges,
                                    children: _.j.map((e, n) => (0, t.jsx)(e, { entry: l }, 'entry-'.concat(n)))
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
    var { entry: n } = e,
        l = (function (e, n) {
            if (null == e) return {};
            var l,
                t,
                i = (function (e, n) {
                    if (null == e) return {};
                    var l,
                        t,
                        i = {},
                        a = Object.keys(e);
                    for (t = 0; t < a.length; t++) (l = a[t]), n.indexOf(l) >= 0 || (i[l] = e[l]);
                    return i;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (t = 0; t < a.length; t++) (l = a[t]), !(n.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            }
            return i;
        })(e, ['entry']);
    return (0, v.dX)(n) ? (0, t.jsx)(M, w({ entry: n }, l)) : (0, v.y0)(n) ? (0, t.jsx)(Y, w({ entry: n }, l)) : (0, v.dU)(n) ? (0, t.jsx)(D, w({ entry: n }, l)) : (0, v.Mq)(n) ? (0, t.jsx)(H, w({ entry: n }, l)) : null;
}
