t.d(a, { Z: () => D }), t(388685);
var n = t(54381);
t(473749);
var i = t(120356),
    s = t.n(i),
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
    b = t(555672),
    v = t(335326),
    y = t(297781),
    h = t(797342),
    E = t(313201),
    _ = t(810568),
    I = t(168524),
    f = t(960870),
    g = t(139793),
    N = t(502762),
    T = t(652853),
    P = t(576759),
    S = t(336383),
    Z = t(373826),
    C = t(614716),
    O = t(228168),
    R = t(616922),
    k = t(671955),
    A = t(251806);
function M(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = null != arguments[a] ? arguments[a] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            n.forEach(function (a) {
                var n;
                (n = t[a]),
                    a in e
                        ? Object.defineProperty(e, a, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[a] = n);
            });
    }
    return e;
}
function w(e) {
    let { user: a, entry: t, header: i, className: d, onClose: m } = e,
        j = (0, E.Dt)(),
        { themeType: p } = (0, T.z)(),
        { largeImage: v } = (0, o.rv)({
            entry: t,
            showCoverImage: !1,
        }),
        { appName: C, activity: R } = (0, h.n)(t),
        M = (0, I.Z)({
            location: "UserProfileRecentActivityCard",
            applicationId: t.extra.application_id,
            source: _.m1.UserProfile,
            sourceUserId: a.id,
            trackEntryPointImpression: !0,
        }),
        { analyticsLocations: w } = (0, c.ZP)(),
        G = (0, f.Z)({
            display: "recent",
            user: a,
            entry: t,
            analyticsLocations: w,
        }),
        L = (0, g.Z)({
            userId: a.id,
            onAction: G,
        });
    return null == M
        ? (0, n.jsx)("article", {
              "aria-labelledby": j,
              children: (0, n.jsxs)(N.Z.Overlay, {
                  className: s()(A.card, d),
                  ref: L,
                  children: [
                      i,
                      (0, n.jsx)("div", {
                          className: A.body,
                          children: (0, n.jsxs)("div", {
                              className: A.content,
                              children: [
                                  (0, n.jsx)(x.E, {
                                      image: v,
                                      size: x.J.SIZE_60,
                                      className: A.image,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: A.details,
                                      children: (0, n.jsx)("div", {
                                          children: (0, n.jsx)(Z.f, {
                                              variant: "heading-sm/semibold",
                                              text: C,
                                              id: j,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          })
        : (0, n.jsxs)(S.Z, {
              ref: L,
              className: d,
              profileModalScrollTarget: O.Tb.RECENT_ACTIVITY,
              onAction: G,
              onClose: m,
              "aria-labelledby": j,
              children: [
                  i,
                  (0, n.jsx)("div", {
                      className: A.body,
                      children: (0, n.jsxs)("div", {
                          className: A.content,
                          children: [
                              (0, n.jsx)(x.E, {
                                  image: v,
                                  size: x.J.SIZE_60,
                                  className: A.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          G({ action: "PRESS_IMAGE" }),
                                          M(e),
                                          p !== k.l.MODAL && p !== k.l.MODAL_V2 && (null == m || m());
                                  },
                              }),
                              (0, n.jsxs)("div", {
                                  className: A.details,
                                  children: [
                                      (0, n.jsx)(r.P3F, {
                                          className: A.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(),
                                                  G({ action: "PRESS_TEXT" }),
                                                  M(e),
                                                  p !== k.l.MODAL && p !== k.l.MODAL_V2 && (null == m || m());
                                          },
                                          children: (0, n.jsx)(Z.f, {
                                              variant: "heading-sm/semibold",
                                              text: C,
                                              id: j,
                                          }),
                                      }),
                                      (0, n.jsx)(y.Gk, {
                                          location: y.Gt.USER_PROFILE,
                                          className: A.badges,
                                          children:
                                              t.content_type === l.s.TOP_GAME
                                                  ? b.Hs.map((e, a) => (0, n.jsx)(e, { entry: t }, "entry-".concat(a)))
                                                  : u.W.map((e, a) => (0, n.jsx)(e, { entry: t }, "entry-".concat(a))),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  (0, n.jsx)(P.Z, {
                      applicationId: t.extra.application_id,
                      onAction: G,
                      onClose: m,
                      activity: R,
                  }),
              ],
          });
}
function G(e) {
    let { user: a, entry: t, header: i, className: s, onClose: l } = e,
        d = (0, E.Dt)(),
        { largeImage: j } = (0, o.rv)({ entry: t }),
        { url: u } = t.extra,
        { analyticsLocations: p } = (0, c.ZP)(),
        b = (0, f.Z)({
            display: "recent",
            user: a,
            entry: t,
            analyticsLocations: p,
        }),
        h = (0, g.Z)({
            userId: a.id,
            onAction: b,
        });
    return (0, n.jsxs)(S.Z, {
        ref: h,
        className: s,
        profileModalScrollTarget: O.Tb.RECENT_ACTIVITY,
        onAction: b,
        onClose: l,
        "aria-labelledby": d,
        children: [
            i,
            (0, n.jsx)("div", {
                className: A.body,
                children: (0, n.jsxs)("div", {
                    className: A.content,
                    children: [
                        null == u || "" === u
                            ? (0, n.jsx)(x.E, {
                                  aspectRatio: "crunchyroll",
                                  image: j,
                                  size: x.J.SIZE_60,
                                  className: A.image,
                              })
                            : (0, n.jsx)(x.E, {
                                  aspectRatio: "crunchyroll",
                                  image: j,
                                  size: x.J.SIZE_60,
                                  className: A.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), b({ action: "PRESS_IMAGE" }), (0, m.Y)(u);
                                  },
                              }),
                        (0, n.jsxs)("div", {
                            className: A.details,
                            children: [
                                null == u || "" === u
                                    ? (0, n.jsxs)("div", {
                                          children: [
                                              (0, n.jsx)(Z.f, {
                                                  variant: "heading-sm/semibold",
                                                  text: t.extra.media_title,
                                                  id: d,
                                              }),
                                              (0, n.jsx)(Z.Z, {
                                                  variant: "text-xs/normal",
                                                  text: t.extra.media_subtitle,
                                              }),
                                          ],
                                      })
                                    : (0, n.jsxs)(r.P3F, {
                                          className: A.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), b({ action: "PRESS_TEXT" }), (0, m.Y)(u);
                                          },
                                          children: [
                                              (0, n.jsx)(Z.f, {
                                                  variant: "heading-sm/semibold",
                                                  text: t.extra.media_title,
                                                  id: d,
                                              }),
                                              (0, n.jsx)(Z.Z, {
                                                  variant: "text-xs/normal",
                                                  text: t.extra.media_subtitle,
                                              }),
                                          ],
                                      }),
                                (0, n.jsx)(y.Gk, {
                                    location: y.Gt.USER_PROFILE,
                                    className: A.badges,
                                    children: v.t.map((e, a) => (0, n.jsx)(e, { entry: t }, "entry-".concat(a))),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function L(e) {
    var a, t;
    let { user: i, entry: s, header: l, className: r, onClose: d } = e,
        j = (0, E.Dt)(),
        { largeImage: u } = (0, o.rv)({ entry: s }),
        { analyticsLocations: b } = (0, c.ZP)(),
        v = (0, f.Z)({
            display: "recent",
            user: i,
            entry: s,
            analyticsLocations: b,
        }),
        h = (0, g.Z)({
            userId: i.id,
            onAction: v,
        }),
        _ = null == (a = s.extra.entries[0]) ? void 0 : a.media;
    return null == _
        ? null
        : (0, n.jsxs)(S.Z, {
              ref: h,
              className: r,
              profileModalScrollTarget: O.Tb.RECENT_ACTIVITY,
              onAction: v,
              onClose: d,
              "aria-labelledby": j,
              children: [
                  l,
                  (0, n.jsx)("div", {
                      className: A.body,
                      children: (0, n.jsxs)("div", {
                          className: A.content,
                          children: [
                              (0, n.jsx)(x.E, {
                                  image: u,
                                  size: x.J.SIZE_60,
                                  className: A.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          v({ action: "OPEN_SPOTIFY_ALBUM" }),
                                          (0, m.o)(R.Hw.ALBUM, _.external_parent_id);
                                  },
                              }),
                              (0, n.jsxs)("div", {
                                  className: A.details,
                                  children: [
                                      (0, n.jsxs)("div", {
                                          children: [
                                              (0, n.jsx)(Z.f, {
                                                  variant: "heading-sm/semibold",
                                                  text: _.title,
                                                  onClick: () => {
                                                      v({ action: "OPEN_SPOTIFY_TRACK" }),
                                                          (0, m.o)(R.Hw.TRACK, _.external_id);
                                                  },
                                                  id: j,
                                              }),
                                              (0, n.jsx)(Z.Z, {
                                                  variant: "text-xs/normal",
                                                  text: null == (t = _.artists[0]) ? void 0 : t.name,
                                                  onClick: () => {
                                                      var e;
                                                      v({ action: "OPEN_SPOTIFY_ARTIST" }),
                                                          (0, m.o)(
                                                              R.Hw.ARTIST,
                                                              null == (e = _.artists[0]) ? void 0 : e.external_id,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, n.jsx)(y.Gk, {
                                          location: y.Gt.USER_PROFILE,
                                          className: A.badges,
                                          children: p.te.map((e, a) => (0, n.jsx)(e, { entry: s }, "entry-".concat(a))),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
function U(e) {
    let { user: a, entry: t, header: i, className: s, onClose: l } = e,
        r = (0, E.Dt)(),
        { largeImage: d } = (0, o.rv)({
            entry: t,
            showCoverImage: !1,
        }),
        { analyticsLocations: m } = (0, c.ZP)(),
        u = (0, f.Z)({
            display: "recent",
            user: a,
            entry: t,
            analyticsLocations: m,
        }),
        p = (0, g.Z)({
            userId: a.id,
            onAction: u,
        }),
        b = (0, C.Z)({
            applicationId: t.extra.application_id,
            onClose: l,
        });
    return (0, n.jsxs)(S.Z, {
        ref: p,
        className: s,
        profileModalScrollTarget: O.Tb.RECENT_ACTIVITY,
        onAction: u,
        onClose: l,
        "aria-labelledby": r,
        children: [
            i,
            (0, n.jsx)("div", {
                className: A.body,
                children: (0, n.jsxs)("div", {
                    className: A.content,
                    children: [
                        (0, n.jsx)(x.E, {
                            image: d,
                            size: x.J.SIZE_60,
                            className: A.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), u({ action: "PRESS_IMAGE" }), b();
                            },
                        }),
                        (0, n.jsxs)("div", {
                            className: A.details,
                            children: [
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(Z.f, {
                                        variant: "heading-sm/semibold",
                                        text: t.extra.activity_name,
                                        onClick: () => {
                                            u({ action: "PRESS_TEXT" }), b();
                                        },
                                        id: r,
                                    }),
                                }),
                                (0, n.jsx)(y.Gk, {
                                    location: y.Gt.USER_PROFILE,
                                    className: A.badges,
                                    children: j.j.map((e, a) => (0, n.jsx)(e, { entry: t }, "entry-".concat(a))),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function D(e) {
    var { entry: a } = e,
        t = (function (e, a) {
            if (null == e) return {};
            var t,
                n,
                i = (function (e, a) {
                    if (null == e) return {};
                    var t,
                        n,
                        i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (t = s[n]), a.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i;
                })(e, a);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++)
                    (t = s[n]),
                        !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            }
            return i;
        })(e, ["entry"]);
    return (0, d.dX)(a)
        ? (0, n.jsx)(w, M({ entry: a }, t))
        : (0, d.y0)(a)
          ? (0, n.jsx)(G, M({ entry: a }, t))
          : (0, d.dU)(a)
            ? (0, n.jsx)(L, M({ entry: a }, t))
            : (0, d.Mq)(a)
              ? (0, n.jsx)(U, M({ entry: a }, t))
              : null;
}
