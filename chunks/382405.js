n.d(t, { Z: () => q }), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(278074),
    s = n(876215),
    l = n(442837),
    c = n(481060),
    u = n(40851),
    d = n(906732),
    f = n(499254),
    p = n(827498),
    _ = n(397698),
    h = n(541716),
    m = n(379357),
    g = n(26033),
    E = n(358696),
    v = n(740605),
    b = n(370370),
    y = n(91140),
    O = n(551228),
    S = n(555672),
    I = n(335326),
    T = n(297781),
    N = n(797342),
    A = n(810568),
    C = n(168524),
    R = n(592125),
    P = n(944486),
    w = n(960870),
    D = n(139793),
    x = n(502762),
    L = n(652853),
    M = n(336383),
    k = n(373826),
    j = n(228168),
    U = n(981631),
    G = n(616922),
    B = n(481736);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                Z(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = H(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function H(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function W(e) {
    let { user: t, entry: n, header: i, className: a, onClose: l } = e,
        { profileType: u } = (0, L.z)(),
        f = { [B.fullSize]: u === j.y0.FULL_SIZE },
        { largeImage: p } = (0, m.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { appName: _ } = (0, N.n)(n),
        h = (0, C.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: n.extra.application_id,
            source: A.m1.UserProfile,
            sourceUserId: t.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: g } = (0, d.ZP)(),
        v = (0, w.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: g
        }),
        b = (0, D.Z)({
            userId: t.id,
            onAction: v
        }),
        O = () => (n.content_type === s.s.TOP_GAME ? S.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))) : y.W.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))));
    return null == h
        ? (0, r.jsxs)(x.Z.Overlay, {
              className: o()(B.card, a),
              ref: b,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: B.body,
                      children: (0, r.jsxs)('div', {
                          className: o()(B.content, f),
                          children: [
                              (0, r.jsx)(E.E, {
                                  image: p,
                                  size: E.J.SIZE_60
                              }),
                              (0, r.jsxs)('div', {
                                  className: B.details,
                                  children: [
                                      (0, r.jsx)('div', {
                                          children: (0, r.jsx)(k.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: _
                                          })
                                      }),
                                      (0, r.jsx)(T.Gk, {
                                          location: T.Gt.USER_PROFILE,
                                          className: B.badges,
                                          children: O()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(M.Z, {
              ref: b,
              className: a,
              subsection: j.Tb.RECENT_ACTIVITY,
              onAction: v,
              onClose: l,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: B.body,
                      children: (0, r.jsxs)('div', {
                          className: o()(B.content, f),
                          children: [
                              (0, r.jsx)(E.E, {
                                  image: p,
                                  size: E.J.SIZE_60,
                                  className: B.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), v({ action: 'PRESS_IMAGE' }), h(e), u !== j.y0.FULL_SIZE && (null == l || l());
                                  }
                              }),
                              (0, r.jsxs)('div', {
                                  className: B.details,
                                  children: [
                                      (0, r.jsx)(c.P3F, {
                                          className: B.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), v({ action: 'PRESS_TEXT' }), h(e), u !== j.y0.FULL_SIZE && (null == l || l());
                                          },
                                          children: (0, r.jsx)(k.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: _
                                          })
                                      }),
                                      (0, r.jsx)(T.Gk, {
                                          location: T.Gt.USER_PROFILE,
                                          className: B.badges,
                                          children: O()
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
    let { user: t, entry: n, header: i, className: a, onClose: s } = e,
        { profileType: l } = (0, L.z)(),
        u = { [B.fullSize]: l === j.y0.FULL_SIZE },
        { largeImage: f } = (0, m.rv)({ entry: n }),
        { url: p } = n.extra,
        { analyticsLocations: _ } = (0, d.ZP)(),
        h = (0, w.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: _
        }),
        g = (0, D.Z)({
            userId: t.id,
            onAction: h
        }),
        b = () =>
            null == p || '' === p
                ? (0, r.jsx)(E.E, {
                      aspectRatio: 'crunchyroll',
                      image: f,
                      size: E.J.SIZE_60
                  })
                : (0, r.jsx)(E.E, {
                      aspectRatio: 'crunchyroll',
                      image: f,
                      size: E.J.SIZE_60,
                      className: B.clickableImage,
                      onClick: (e) => {
                          e.stopPropagation(), h({ action: 'PRESS_IMAGE' }), (0, v.Y)(p);
                      }
                  }),
        y = () =>
            null == p || '' === p
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(k.Z, {
                              variant: 'heading-sm/semibold',
                              text: n.extra.media_title
                          }),
                          (0, r.jsx)(k.Z, {
                              variant: 'text-xs/normal',
                              text: n.extra.media_subtitle
                          })
                      ]
                  })
                : (0, r.jsxs)(c.P3F, {
                      className: B.clickableText,
                      onClick: (e) => {
                          e.stopPropagation(), h({ action: 'PRESS_TEXT' }), (0, v.Y)(p);
                      },
                      children: [
                          (0, r.jsx)(k.Z, {
                              variant: 'heading-sm/semibold',
                              text: n.extra.media_title
                          }),
                          (0, r.jsx)(k.Z, {
                              variant: 'text-xs/normal',
                              text: n.extra.media_subtitle
                          })
                      ]
                  });
    return (0, r.jsxs)(M.Z, {
        ref: g,
        className: a,
        subsection: j.Tb.RECENT_ACTIVITY,
        onAction: h,
        onClose: s,
        children: [
            i,
            (0, r.jsx)('div', {
                className: B.body,
                children: (0, r.jsxs)('div', {
                    className: o()(B.content, u),
                    children: [
                        b(),
                        (0, r.jsxs)('div', {
                            className: B.details,
                            children: [
                                y(),
                                (0, r.jsx)(T.Gk, {
                                    location: T.Gt.USER_PROFILE,
                                    className: B.badges,
                                    children: I.t.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function K(e) {
    var t, n;
    let { user: i, entry: a, header: s, className: l, onClose: c } = e,
        { profileType: u } = (0, L.z)(),
        f = { [B.fullSize]: u === j.y0.FULL_SIZE },
        { largeImage: p } = (0, m.rv)({ entry: a }),
        { analyticsLocations: _ } = (0, d.ZP)(),
        h = (0, w.Z)({
            display: 'recent',
            user: i,
            entry: a,
            analyticsLocations: _
        }),
        g = (0, D.Z)({
            userId: i.id,
            onAction: h
        }),
        b = null === (t = a.extra.entries[0]) || void 0 === t ? void 0 : t.media;
    return null == b
        ? null
        : (0, r.jsxs)(M.Z, {
              ref: g,
              className: l,
              subsection: j.Tb.RECENT_ACTIVITY,
              onAction: h,
              onClose: c,
              children: [
                  s,
                  (0, r.jsx)('div', {
                      className: B.body,
                      children: (0, r.jsxs)('div', {
                          className: o()(B.content, f),
                          children: [
                              (0, r.jsx)(E.E, {
                                  image: p,
                                  size: E.J.SIZE_60,
                                  className: B.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), h({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, v.o)(G.Hw.ALBUM, b.external_parent_id);
                                  }
                              }),
                              (0, r.jsxs)('div', {
                                  className: B.details,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          children: [
                                              (0, r.jsx)(k.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: b.title,
                                                  onClick: () => {
                                                      h({ action: 'OPEN_SPOTIFY_TRACK' }), (0, v.o)(G.Hw.TRACK, b.external_id);
                                                  }
                                              }),
                                              (0, r.jsx)(k.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null === (n = b.artists[0]) || void 0 === n ? void 0 : n.name,
                                                  onClick: () => {
                                                      var e;
                                                      h({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, v.o)(G.Hw.ARTIST, null === (e = b.artists[0]) || void 0 === e ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(T.Gk, {
                                          location: T.Gt.USER_PROFILE,
                                          className: B.badges,
                                          children: O.te.map((e, t) => (0, r.jsx)(e, { entry: a }, 'entry-'.concat(t)))
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
    let { user: t, entry: n, header: i, className: a, onClose: s } = e,
        { profileType: c } = (0, L.z)(),
        g = { [B.fullSize]: c === j.y0.FULL_SIZE },
        { largeImage: v } = (0, m.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { analyticsLocations: y, newestAnalyticsLocation: O } = (0, d.ZP)(),
        S = (0, w.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: y
        }),
        I = (0, D.Z)({
            userId: t.id,
            onAction: S
        }),
        N = (0, u.bp)() === U.IlC.POPOUT,
        A = (0, l.e7)([R.Z, P.Z], () => R.Z.getChannel(P.Z.getChannelId())),
        C = () => {
            null == s || s(),
                (null == A ? void 0 : A.isVocal())
                    ? (0, _.Z)({
                          context: {
                              type: 'channel',
                              channel: A
                          },
                          analyticsLocation: O,
                          openInPopout: N
                      })
                    : (0, f.__)(p._b.TEXT, h.Ie.NORMAL, { applicationId: n.extra.application_id });
        };
    return (0, r.jsxs)(M.Z, {
        ref: I,
        className: a,
        subsection: j.Tb.RECENT_ACTIVITY,
        onAction: S,
        onClose: s,
        children: [
            i,
            (0, r.jsx)('div', {
                className: B.body,
                children: (0, r.jsxs)('div', {
                    className: o()(B.content, g),
                    children: [
                        (0, r.jsx)(E.E, {
                            image: v,
                            size: E.J.SIZE_60,
                            className: B.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), S({ action: 'PRESS_IMAGE' }), C();
                            }
                        }),
                        (0, r.jsxs)('div', {
                            className: B.details,
                            children: [
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(k.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: n.extra.activity_name,
                                        onClick: () => {
                                            S({ action: 'PRESS_TEXT' }), C();
                                        }
                                    })
                                }),
                                (0, r.jsx)(T.Gk, {
                                    location: T.Gt.USER_PROFILE,
                                    className: B.badges,
                                    children: b.j.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function q(e) {
    var { entry: t } = e,
        n = V(e, ['entry']);
    return (0, a.EQ)(t)
        .when(g.dX, (e) => (0, r.jsx)(W, F({ entry: e }, n)))
        .when(g.y0, (e) => (0, r.jsx)(Y, F({ entry: e }, n)))
        .when(g.dU, (e) => (0, r.jsx)(K, F({ entry: e }, n)))
        .when(g.Mq, (e) => (0, r.jsx)(z, F({ entry: e }, n)))
        .exhaustive();
}
