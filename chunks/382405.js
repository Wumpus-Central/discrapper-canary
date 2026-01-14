t.d(a, { Z: () => D }), t(388685);
var i = t(54381);
t(473749);
var n = t(120356),
    s = t.n(n),
    l = t(876215),
    r = t(636977),
    c = t(481060),
    o = t(906732),
    d = t(379357),
    x = t(26033),
    m = t(358696),
    j = t(740605),
    p = t(370370),
    u = t(91140),
    b = t(551228),
    v = t(555672),
    y = t(335326),
    h = t(297781),
    E = t(797342),
    _ = t(313201),
    I = t(810568),
    f = t(168524),
    T = t(633181),
    g = t(960870),
    P = t(139793),
    N = t(502762),
    C = t(652853),
    S = t(576759),
    Z = t(336383),
    O = t(373826),
    R = t(614716),
    A = t(228168),
    k = t(616922),
    M = t(671955),
    w = t(251806);
function G(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = null != arguments[a] ? arguments[a] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            i.forEach(function (a) {
                var i;
                (i = t[a]),
                    a in e
                        ? Object.defineProperty(e, a, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[a] = i);
            });
    }
    return e;
}
function L(e) {
    let { user: a, entry: t, header: n, className: x, onClose: j } = e,
        p = (0, _.Dt)(),
        { themeType: b } = (0, C.z)(),
        { largeImage: y } = (0, d.rv)({
            entry: t,
            showCoverImage: !1,
        }),
        { appName: R, activity: k } = (0, E.n)(t),
        G = (0, f.Z)({
            location: "UserProfileRecentActivityCard",
            applicationId: t.extra.application_id,
            source: I.m1.UserProfile,
            sourceUserId: a.id,
            trackEntryPointImpression: !0,
        }),
        { analyticsLocations: L } = (0, o.ZP)(),
        U = (0, g.Z)({
            display: "recent",
            user: a,
            entry: t,
            analyticsLocations: L,
        }),
        F = (0, P.Z)({
            userId: a.id,
            onAction: U,
        });
    return null == G
        ? (0, i.jsx)("article", {
              "aria-labelledby": p,
              children: (0, i.jsxs)(N.Z.Overlay, {
                  className: s()(w.card, x),
                  ref: F,
                  children: [
                      n,
                      (0, i.jsx)("div", {
                          className: w.body,
                          children: (0, i.jsxs)("div", {
                              className: w.content,
                              children: [
                                  (0, i.jsx)(m.E, {
                                      image: y,
                                      size: m.J.SIZE_60,
                                      className: w.image,
                                  }),
                                  (0, i.jsx)("div", {
                                      className: w.details,
                                      children: (0, i.jsx)("div", {
                                          children: (0, i.jsx)(O.f, {
                                              variant: "heading-sm/semibold",
                                              text: R,
                                              id: p,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          })
        : (0, i.jsxs)(Z.Z, {
              ref: F,
              className: x,
              profileModalScrollTarget: A.Tb.RECENT_ACTIVITY,
              onAction: U,
              onClose: j,
              "aria-labelledby": p,
              children: [
                  n,
                  (0, i.jsx)(T.Z, {
                      applicationId: t.extra.application_id,
                      questContent: r.j.USER_PROFILE_ACTIVITY,
                      children: (e) =>
                          (0, i.jsx)("div", {
                              className: w.body,
                              ref: e,
                              children: (0, i.jsxs)("div", {
                                  className: w.content,
                                  children: [
                                      (0, i.jsx)(m.E, {
                                          image: y,
                                          size: m.J.SIZE_60,
                                          className: w.clickableImage,
                                          onClick: (e) => {
                                              e.stopPropagation(),
                                                  U({ action: "PRESS_IMAGE" }),
                                                  G(e),
                                                  b !== M.l.MODAL && b !== M.l.MODAL_V2 && (null == j || j());
                                          },
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: w.details,
                                          children: [
                                              (0, i.jsx)(c.P3F, {
                                                  className: w.clickableText,
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          U({ action: "PRESS_TEXT" }),
                                                          G(e),
                                                          b !== M.l.MODAL && b !== M.l.MODAL_V2 && (null == j || j());
                                                  },
                                                  children: (0, i.jsx)(O.f, {
                                                      variant: "heading-sm/semibold",
                                                      text: R,
                                                      id: p,
                                                  }),
                                              }),
                                              (0, i.jsx)(h.Gk, {
                                                  location: h.Gt.USER_PROFILE,
                                                  className: w.badges,
                                                  children:
                                                      t.content_type === l.s.TOP_GAME
                                                          ? v.Hs.map((e, a) =>
                                                                (0, i.jsx)(e, { entry: t }, "entry-".concat(a)),
                                                            )
                                                          : u.W.map((e, a) =>
                                                                (0, i.jsx)(e, { entry: t }, "entry-".concat(a)),
                                                            ),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                  }),
                  (0, i.jsx)(S.Z, {
                      applicationId: t.extra.application_id,
                      onAction: U,
                      onClose: j,
                      activity: k,
                  }),
              ],
          });
}
function U(e) {
    let { user: a, entry: t, header: n, className: s, onClose: l } = e,
        r = (0, _.Dt)(),
        { largeImage: x } = (0, d.rv)({ entry: t }),
        { url: p } = t.extra,
        { analyticsLocations: u } = (0, o.ZP)(),
        b = (0, g.Z)({
            display: "recent",
            user: a,
            entry: t,
            analyticsLocations: u,
        }),
        v = (0, P.Z)({
            userId: a.id,
            onAction: b,
        });
    return (0, i.jsxs)(Z.Z, {
        ref: v,
        className: s,
        profileModalScrollTarget: A.Tb.RECENT_ACTIVITY,
        onAction: b,
        onClose: l,
        "aria-labelledby": r,
        children: [
            n,
            (0, i.jsx)("div", {
                className: w.body,
                children: (0, i.jsxs)("div", {
                    className: w.content,
                    children: [
                        null == p || "" === p
                            ? (0, i.jsx)(m.E, {
                                  aspectRatio: "crunchyroll",
                                  image: x,
                                  size: m.J.SIZE_60,
                                  className: w.image,
                              })
                            : (0, i.jsx)(m.E, {
                                  aspectRatio: "crunchyroll",
                                  image: x,
                                  size: m.J.SIZE_60,
                                  className: w.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(), b({ action: "PRESS_IMAGE" }), (0, j.Y)(p);
                                  },
                              }),
                        (0, i.jsxs)("div", {
                            className: w.details,
                            children: [
                                null == p || "" === p
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(O.f, {
                                                  variant: "heading-sm/semibold",
                                                  text: t.extra.media_title,
                                                  id: r,
                                              }),
                                              (0, i.jsx)(O.Z, {
                                                  variant: "text-xs/normal",
                                                  text: t.extra.media_subtitle,
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)(c.P3F, {
                                          className: w.clickableText,
                                          onClick: (e) => {
                                              e.stopPropagation(), b({ action: "PRESS_TEXT" }), (0, j.Y)(p);
                                          },
                                          children: [
                                              (0, i.jsx)(O.f, {
                                                  variant: "heading-sm/semibold",
                                                  text: t.extra.media_title,
                                                  id: r,
                                              }),
                                              (0, i.jsx)(O.Z, {
                                                  variant: "text-xs/normal",
                                                  text: t.extra.media_subtitle,
                                              }),
                                          ],
                                      }),
                                (0, i.jsx)(h.Gk, {
                                    location: h.Gt.USER_PROFILE,
                                    className: w.badges,
                                    children: y.t.map((e, a) => (0, i.jsx)(e, { entry: t }, "entry-".concat(a))),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function F(e) {
    var a, t;
    let { user: n, entry: s, header: l, className: r, onClose: c } = e,
        x = (0, _.Dt)(),
        { largeImage: p } = (0, d.rv)({ entry: s }),
        { analyticsLocations: u } = (0, o.ZP)(),
        v = (0, g.Z)({
            display: "recent",
            user: n,
            entry: s,
            analyticsLocations: u,
        }),
        y = (0, P.Z)({
            userId: n.id,
            onAction: v,
        }),
        E = null == (a = s.extra.entries[0]) ? void 0 : a.media;
    return null == E
        ? null
        : (0, i.jsxs)(Z.Z, {
              ref: y,
              className: r,
              profileModalScrollTarget: A.Tb.RECENT_ACTIVITY,
              onAction: v,
              onClose: c,
              "aria-labelledby": x,
              children: [
                  l,
                  (0, i.jsx)("div", {
                      className: w.body,
                      children: (0, i.jsxs)("div", {
                          className: w.content,
                          children: [
                              (0, i.jsx)(m.E, {
                                  image: p,
                                  size: m.J.SIZE_60,
                                  className: w.clickableImage,
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          v({ action: "OPEN_SPOTIFY_ALBUM" }),
                                          (0, j.o)(k.Hw.ALBUM, E.external_parent_id);
                                  },
                              }),
                              (0, i.jsxs)("div", {
                                  className: w.details,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(O.f, {
                                                  variant: "heading-sm/semibold",
                                                  text: E.title,
                                                  onClick: () => {
                                                      v({ action: "OPEN_SPOTIFY_TRACK" }),
                                                          (0, j.o)(k.Hw.TRACK, E.external_id);
                                                  },
                                                  id: x,
                                              }),
                                              (0, i.jsx)(O.Z, {
                                                  variant: "text-xs/normal",
                                                  text: null == (t = E.artists[0]) ? void 0 : t.name,
                                                  onClick: () => {
                                                      var e;
                                                      v({ action: "OPEN_SPOTIFY_ARTIST" }),
                                                          (0, j.o)(
                                                              k.Hw.ARTIST,
                                                              null == (e = E.artists[0]) ? void 0 : e.external_id,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)(h.Gk, {
                                          location: h.Gt.USER_PROFILE,
                                          className: w.badges,
                                          children: b.te.map((e, a) => (0, i.jsx)(e, { entry: s }, "entry-".concat(a))),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
function Y(e) {
    let { user: a, entry: t, header: n, className: s, onClose: l } = e,
        c = (0, _.Dt)(),
        { largeImage: x } = (0, d.rv)({
            entry: t,
            showCoverImage: !1,
        }),
        { analyticsLocations: j } = (0, o.ZP)(),
        u = (0, g.Z)({
            display: "recent",
            user: a,
            entry: t,
            analyticsLocations: j,
        }),
        b = (0, P.Z)({
            userId: a.id,
            onAction: u,
        }),
        v = (0, R.Z)({
            applicationId: t.extra.application_id,
            onClose: l,
        });
    return (0, i.jsxs)(Z.Z, {
        ref: b,
        className: s,
        profileModalScrollTarget: A.Tb.RECENT_ACTIVITY,
        onAction: u,
        onClose: l,
        "aria-labelledby": c,
        children: [
            n,
            (0, i.jsx)(T.Z, {
                applicationId: t.extra.application_id,
                questContent: r.j.USER_PROFILE_ACTIVITY,
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: w.body,
                        ref: e,
                        children: (0, i.jsxs)("div", {
                            className: w.content,
                            children: [
                                (0, i.jsx)(m.E, {
                                    image: x,
                                    size: m.J.SIZE_60,
                                    className: w.clickableImage,
                                    onClick: (e) => {
                                        e.stopPropagation(), u({ action: "PRESS_IMAGE" }), v();
                                    },
                                }),
                                (0, i.jsxs)("div", {
                                    className: w.details,
                                    children: [
                                        (0, i.jsx)("div", {
                                            children: (0, i.jsx)(O.f, {
                                                variant: "heading-sm/semibold",
                                                text: t.extra.activity_name,
                                                onClick: () => {
                                                    u({ action: "PRESS_TEXT" }), v();
                                                },
                                                id: c,
                                            }),
                                        }),
                                        (0, i.jsx)(h.Gk, {
                                            location: h.Gt.USER_PROFILE,
                                            className: w.badges,
                                            children: p.j.map((e, a) =>
                                                (0, i.jsx)(e, { entry: t }, "entry-".concat(a)),
                                            ),
                                        }),
                                    ],
                                }),
                            ],
                        }),
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
                i,
                n = (function (e, a) {
                    if (null == e) return {};
                    var t,
                        i,
                        n = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (t = s[i]), a.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                })(e, a);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++)
                    (t = s[i]),
                        !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
            }
            return n;
        })(e, ["entry"]);
    return (0, x.dX)(a)
        ? (0, i.jsx)(L, G({ entry: a }, t))
        : (0, x.y0)(a)
          ? (0, i.jsx)(U, G({ entry: a }, t))
          : (0, x.dU)(a)
            ? (0, i.jsx)(F, G({ entry: a }, t))
            : (0, x.Mq)(a)
              ? (0, i.jsx)(Y, G({ entry: a }, t))
              : null;
}
