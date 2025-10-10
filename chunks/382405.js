n.d(t, { Z: () => G }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(876215),
    o = n(481060),
    s = n(906732),
    c = n(379357),
    u = n(26033),
    d = n(358696),
    p = n(740605),
    f = n(370370),
    h = n(91140),
    g = n(551228),
    m = n(555672),
    b = n(335326),
    _ = n(297781),
    O = n(797342),
    E = n(313201),
    y = n(810568),
    v = n(168524),
    I = n(960870),
    S = n(139793),
    C = n(502762),
    T = n(652853),
    N = n(576759),
    j = n(336383),
    P = n(373826),
    x = n(614716),
    A = n(228168),
    Z = n(616922),
    w = n(671955),
    L = n(704543);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function D(e) {
    let { user: t, entry: n, header: i, className: u, onClose: p } = e,
        f = (0, E.Dt)(),
        { themeType: g } = (0, T.z)(),
        { largeImage: b } = (0, c.rv)({
            entry: n,
            showCoverImage: !1,
        }),
        { appName: x, activity: Z } = (0, O.n)(n),
        R = (0, v.Z)({
            location: "UserProfileRecentActivityCard",
            applicationId: n.extra.application_id,
            source: y.m1.UserProfile,
            sourceUserId: t.id,
            trackEntryPointImpression: !0,
        }),
        { analyticsLocations: D } = (0, s.ZP)(),
        k = (0, I.Z)({
            display: "recent",
            user: t,
            entry: n,
            analyticsLocations: D,
        }),
        M = (0, S.Z)({
            userId: t.id,
            onAction: k,
        });
    return null == R
        ? (0, r.jsx)("article", {
              "aria-labelledby": f,
              children: (0, r.jsxs)(C.Z.Overlay, {
                  className: l()(L.card, u),
                  ref: M,
                  children: [
                      i,
                      (0, r.jsx)("div", {
                          className: L.body,
                          children: (0, r.jsxs)("div", {
                              className: L.content,
                              children: [
                                  (0, r.jsx)(d.E, {
                                      image: b,
                                      size: d.J.SIZE_60,
                                      className: L.image,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: L.details,
                                      children: (0, r.jsx)("div", {
                                          children: (0, r.jsx)(P.f, {
                                              variant: "heading-sm/semibold",
                                              text: x,
                                              id: f,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          })
        : (0, r.jsxs)(j.Z, {
              ref: M,
              className: u,
              subsection: A.Tb.RECENT_ACTIVITY,
              onAction: k,
              onClose: p,
              "aria-labelledby": f,
              children: [
                  i,
                  (0, r.jsx)("div", {
                      className: L.body,
                      children: (0, r.jsxs)("div", {
                          className: L.content,
                          children: [
                              (0, r.jsx)(d.E, {
                                  image: b,
                                  size: d.J.SIZE_60,
                                  className: L.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          k({ action: "PRESS_IMAGE" }),
                                          R(e),
                                          g !== w.l.MODAL && g !== w.l.MODAL_V2 && (null == p || p());
                                  },
                              }),
                              (0, r.jsxs)("div", {
                                  className: L.details,
                                  children: [
                                      (0, r.jsx)(o.P3F, {
                                          className: L.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(),
                                                  k({ action: "PRESS_TEXT" }),
                                                  R(e),
                                                  g !== w.l.MODAL && g !== w.l.MODAL_V2 && (null == p || p());
                                          },
                                          children: (0, r.jsx)(P.f, {
                                              variant: "heading-sm/semibold",
                                              text: x,
                                              id: f,
                                          }),
                                      }),
                                      (0, r.jsx)(_.Gk, {
                                          location: _.Gt.USER_PROFILE,
                                          className: L.badges,
                                          children:
                                              n.content_type === a.s.TOP_GAME
                                                  ? m.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, "entry-".concat(t)))
                                                  : h.W.map((e, t) => (0, r.jsx)(e, { entry: n }, "entry-".concat(t))),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsx)(N.Z, {
                      applicationId: n.extra.application_id,
                      onAction: k,
                      onClose: p,
                      activity: Z,
                  }),
              ],
          });
}
function k(e) {
    let { user: t, entry: n, header: i, className: l, onClose: a } = e,
        u = (0, E.Dt)(),
        { largeImage: f } = (0, c.rv)({ entry: n }),
        { url: h } = n.extra,
        { analyticsLocations: g } = (0, s.ZP)(),
        m = (0, I.Z)({
            display: "recent",
            user: t,
            entry: n,
            analyticsLocations: g,
        }),
        O = (0, S.Z)({
            userId: t.id,
            onAction: m,
        });
    return (0, r.jsxs)(j.Z, {
        ref: O,
        className: l,
        subsection: A.Tb.RECENT_ACTIVITY,
        onAction: m,
        onClose: a,
        "aria-labelledby": u,
        children: [
            i,
            (0, r.jsx)("div", {
                className: L.body,
                children: (0, r.jsxs)("div", {
                    className: L.content,
                    children: [
                        null == h || "" === h
                            ? (0, r.jsx)(d.E, {
                                  aspectRatio: "crunchyroll",
                                  image: f,
                                  size: d.J.SIZE_60,
                                  className: L.image,
                              })
                            : (0, r.jsx)(d.E, {
                                  aspectRatio: "crunchyroll",
                                  image: f,
                                  size: d.J.SIZE_60,
                                  className: L.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), m({ action: "PRESS_IMAGE" }), (0, p.Y)(h);
                                  },
                              }),
                        (0, r.jsxs)("div", {
                            className: L.details,
                            children: [
                                null == h || "" === h
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(P.f, {
                                                  variant: "heading-sm/semibold",
                                                  text: n.extra.media_title,
                                                  id: u,
                                              }),
                                              (0, r.jsx)(P.Z, {
                                                  variant: "text-xs/normal",
                                                  text: n.extra.media_subtitle,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)(o.P3F, {
                                          className: L.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), m({ action: "PRESS_TEXT" }), (0, p.Y)(h);
                                          },
                                          children: [
                                              (0, r.jsx)(P.f, {
                                                  variant: "heading-sm/semibold",
                                                  text: n.extra.media_title,
                                                  id: u,
                                              }),
                                              (0, r.jsx)(P.Z, {
                                                  variant: "text-xs/normal",
                                                  text: n.extra.media_subtitle,
                                              }),
                                          ],
                                      }),
                                (0, r.jsx)(_.Gk, {
                                    location: _.Gt.USER_PROFILE,
                                    className: L.badges,
                                    children: b.t.map((e, t) => (0, r.jsx)(e, { entry: n }, "entry-".concat(t))),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function M(e) {
    var t, n;
    let { user: i, entry: l, header: a, className: o, onClose: u } = e,
        f = (0, E.Dt)(),
        { largeImage: h } = (0, c.rv)({ entry: l }),
        { analyticsLocations: m } = (0, s.ZP)(),
        b = (0, I.Z)({
            display: "recent",
            user: i,
            entry: l,
            analyticsLocations: m,
        }),
        O = (0, S.Z)({
            userId: i.id,
            onAction: b,
        }),
        y = null == (t = l.extra.entries[0]) ? void 0 : t.media;
    return null == y
        ? null
        : (0, r.jsxs)(j.Z, {
              ref: O,
              className: o,
              subsection: A.Tb.RECENT_ACTIVITY,
              onAction: b,
              onClose: u,
              "aria-labelledby": f,
              children: [
                  a,
                  (0, r.jsx)("div", {
                      className: L.body,
                      children: (0, r.jsxs)("div", {
                          className: L.content,
                          children: [
                              (0, r.jsx)(d.E, {
                                  image: h,
                                  size: d.J.SIZE_60,
                                  className: L.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          b({ action: "OPEN_SPOTIFY_ALBUM" }),
                                          (0, p.o)(Z.Hw.ALBUM, y.external_parent_id);
                                  },
                              }),
                              (0, r.jsxs)("div", {
                                  className: L.details,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(P.f, {
                                                  variant: "heading-sm/semibold",
                                                  text: y.title,
                                                  onClick: () => {
                                                      b({ action: "OPEN_SPOTIFY_TRACK" }),
                                                          (0, p.o)(Z.Hw.TRACK, y.external_id);
                                                  },
                                                  id: f,
                                              }),
                                              (0, r.jsx)(P.Z, {
                                                  variant: "text-xs/normal",
                                                  text: null == (n = y.artists[0]) ? void 0 : n.name,
                                                  onClick: () => {
                                                      var e;
                                                      b({ action: "OPEN_SPOTIFY_ARTIST" }),
                                                          (0, p.o)(
                                                              Z.Hw.ARTIST,
                                                              null == (e = y.artists[0]) ? void 0 : e.external_id,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)(_.Gk, {
                                          location: _.Gt.USER_PROFILE,
                                          className: L.badges,
                                          children: g.te.map((e, t) => (0, r.jsx)(e, { entry: l }, "entry-".concat(t))),
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
    let { user: t, entry: n, header: i, className: l, onClose: a } = e,
        o = (0, E.Dt)(),
        { largeImage: u } = (0, c.rv)({
            entry: n,
            showCoverImage: !1,
        }),
        { analyticsLocations: p } = (0, s.ZP)(),
        h = (0, I.Z)({
            display: "recent",
            user: t,
            entry: n,
            analyticsLocations: p,
        }),
        g = (0, S.Z)({
            userId: t.id,
            onAction: h,
        }),
        m = (0, x.Z)({
            applicationId: n.extra.application_id,
            onClose: a,
        });
    return (0, r.jsxs)(j.Z, {
        ref: g,
        className: l,
        subsection: A.Tb.RECENT_ACTIVITY,
        onAction: h,
        onClose: a,
        "aria-labelledby": o,
        children: [
            i,
            (0, r.jsx)("div", {
                className: L.body,
                children: (0, r.jsxs)("div", {
                    className: L.content,
                    children: [
                        (0, r.jsx)(d.E, {
                            image: u,
                            size: d.J.SIZE_60,
                            className: L.clickableImage,
                            onClick: (e) => {
                                e.stopPropagation(), h({ action: "PRESS_IMAGE" }), m();
                            },
                        }),
                        (0, r.jsxs)("div", {
                            className: L.details,
                            children: [
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)(P.f, {
                                        variant: "heading-sm/semibold",
                                        text: n.extra.activity_name,
                                        onClick: () => {
                                            h({ action: "PRESS_TEXT" }), m();
                                        },
                                        id: o,
                                    }),
                                }),
                                (0, r.jsx)(_.Gk, {
                                    location: _.Gt.USER_PROFILE,
                                    className: L.badges,
                                    children: f.j.map((e, t) => (0, r.jsx)(e, { entry: n }, "entry-".concat(t))),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function G(e) {
    var { entry: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["entry"]);
    return (0, u.dX)(t)
        ? (0, r.jsx)(D, R({ entry: t }, n))
        : (0, u.y0)(t)
          ? (0, r.jsx)(k, R({ entry: t }, n))
          : (0, u.dU)(t)
            ? (0, r.jsx)(M, R({ entry: t }, n))
            : (0, u.Mq)(t)
              ? (0, r.jsx)(U, R({ entry: t }, n))
              : null;
}
