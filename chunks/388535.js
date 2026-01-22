n.d(a, { A: () => F }), n(896048);
var t = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    l = n(681154),
    r = n(696292),
    c = n(397927),
    o = n(688810),
    d = n(939341),
    x = n(20805),
    m = n(623671),
    p = n(261020),
    j = n(468581),
    u = n(322789),
    y = n(363670),
    A = n(977001),
    h = n(514243),
    _ = n(506326),
    f = n(299846),
    E = n(915089),
    I = n(409626),
    v = n(692969),
    b = n(753845),
    N = n(92240),
    O = n(257367),
    T = n(946356),
    C = n(939496),
    S = n(624951),
    R = n(584904),
    P = n(531648),
    g = n(695311),
    M = n(518477),
    k = n(272984),
    w = n(996988),
    L = n(380297);
function U(e) {
    for (var a = 1; a < arguments.length; a++) {
        var n = null != arguments[a] ? arguments[a] : {},
            t = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            t.forEach(function (a) {
                var t;
                (t = n[a]),
                    a in e
                        ? Object.defineProperty(e, a, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[a] = t);
            });
    }
    return e;
}
function V(e) {
    let { user: a, entry: n, header: s, className: x, onClose: p } = e,
        j = (0, E.GV)(),
        { themeType: y } = (0, C.E)(),
        { largeImage: h } = (0, d.nO)({
            entry: n,
            showCoverImage: !1,
        }),
        { appName: g, activity: k } = (0, f.u)(n),
        U = (0, v.A)({
            location: "UserProfileRecentActivityCard",
            applicationId: n.extra.application_id,
            source: I.Ob.UserProfile,
            sourceUserId: a.id,
            trackEntryPointImpression: !0,
        }),
        { analyticsLocations: V } = (0, o.Ay)(),
        z = (0, N.A)({
            display: "recent",
            user: a,
            entry: n,
            analyticsLocations: V,
        }),
        G = (0, O.A)({
            userId: a.id,
            onAction: z,
        });
    return null == U
        ? (0, t.jsx)("article", {
              "aria-labelledby": j,
              children: (0, t.jsxs)(T.A.Overlay, {
                  className: i()(L.Nr, x),
                  ref: G,
                  children: [
                      s,
                      (0, t.jsx)("div", {
                          className: L.rf,
                          children: (0, t.jsxs)("div", {
                              className: L.Qs,
                              children: [
                                  (0, t.jsx)(m.d, {
                                      image: h,
                                      size: m.w.SIZE_60,
                                      className: L.Sl,
                                  }),
                                  (0, t.jsx)("div", {
                                      className: L.zH,
                                      children: (0, t.jsx)("div", {
                                          children: (0, t.jsx)(P.Q, {
                                              variant: "heading-sm/semibold",
                                              text: g,
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
        : (0, t.jsxs)(R.A, {
              ref: G,
              className: x,
              profileModalScrollTarget: M.bk.RECENT_ACTIVITY,
              onAction: z,
              onClose: p,
              "aria-labelledby": j,
              children: [
                  s,
                  (0, t.jsx)(b.A, {
                      applicationId: n.extra.application_id,
                      questContent: r.u.USER_PROFILE_ACTIVITY,
                      children: (e) =>
                          (0, t.jsx)("div", {
                              className: L.rf,
                              ref: e,
                              children: (0, t.jsxs)("div", {
                                  className: L.Qs,
                                  children: [
                                      (0, t.jsx)(m.d, {
                                          image: h,
                                          size: m.w.SIZE_60,
                                          className: L.mM,
                                          onClick: (e) => {
                                              e.stopPropagation(),
                                                  z({ action: "PRESS_IMAGE" }),
                                                  U(e),
                                                  y !== w.d.MODAL && y !== w.d.MODAL_V2 && (null == p || p());
                                          },
                                      }),
                                      (0, t.jsxs)("div", {
                                          className: L.zH,
                                          children: [
                                              (0, t.jsx)(c.DUT, {
                                                  className: L.sd,
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          z({ action: "PRESS_TEXT" }),
                                                          U(e),
                                                          y !== w.d.MODAL && y !== w.d.MODAL_V2 && (null == p || p());
                                                  },
                                                  children: (0, t.jsx)(P.Q, {
                                                      variant: "heading-sm/semibold",
                                                      text: g,
                                                      id: j,
                                                  }),
                                              }),
                                              (0, t.jsx)(_.mG, {
                                                  location: _.N5.USER_PROFILE,
                                                  className: L.jp,
                                                  children:
                                                      n.content_type === l.I.TOP_GAME
                                                          ? A.ac.map((e, a) =>
                                                                (0, t.jsx)(e, { entry: n }, "entry-".concat(a)),
                                                            )
                                                          : u.n.map((e, a) =>
                                                                (0, t.jsx)(e, { entry: n }, "entry-".concat(a)),
                                                            ),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                  }),
                  (0, t.jsx)(S.A, {
                      applicationId: n.extra.application_id,
                      onAction: z,
                      onClose: p,
                      activity: k,
                  }),
              ],
          });
}
function z(e) {
    let { user: a, entry: n, header: s, className: i, onClose: l } = e,
        r = (0, E.GV)(),
        { largeImage: x } = (0, d.nO)({ entry: n }),
        { url: j } = n.extra,
        { analyticsLocations: u } = (0, o.Ay)(),
        y = (0, N.A)({
            display: "recent",
            user: a,
            entry: n,
            analyticsLocations: u,
        }),
        A = (0, O.A)({
            userId: a.id,
            onAction: y,
        });
    return (0, t.jsxs)(R.A, {
        ref: A,
        className: i,
        profileModalScrollTarget: M.bk.RECENT_ACTIVITY,
        onAction: y,
        onClose: l,
        "aria-labelledby": r,
        children: [
            s,
            (0, t.jsx)("div", {
                className: L.rf,
                children: (0, t.jsxs)("div", {
                    className: L.Qs,
                    children: [
                        null == j || "" === j
                            ? (0, t.jsx)(m.d, {
                                  aspectRatio: "crunchyroll",
                                  image: x,
                                  size: m.w.SIZE_60,
                                  className: L.Sl,
                              })
                            : (0, t.jsx)(m.d, {
                                  aspectRatio: "crunchyroll",
                                  image: x,
                                  size: m.w.SIZE_60,
                                  className: L.mM,
                                  onClick: (e) => {
                                      e.stopPropagation(), y({ action: "PRESS_IMAGE" }), (0, p.C)(j);
                                  },
                              }),
                        (0, t.jsxs)("div", {
                            className: L.zH,
                            children: [
                                null == j || "" === j
                                    ? (0, t.jsxs)("div", {
                                          children: [
                                              (0, t.jsx)(P.Q, {
                                                  variant: "heading-sm/semibold",
                                                  text: n.extra.media_title,
                                                  id: r,
                                              }),
                                              (0, t.jsx)(P.A, {
                                                  variant: "text-xs/normal",
                                                  text: n.extra.media_subtitle,
                                              }),
                                          ],
                                      })
                                    : (0, t.jsxs)(c.DUT, {
                                          className: L.sd,
                                          onClick: (e) => {
                                              e.stopPropagation(), y({ action: "PRESS_TEXT" }), (0, p.C)(j);
                                          },
                                          children: [
                                              (0, t.jsx)(P.Q, {
                                                  variant: "heading-sm/semibold",
                                                  text: n.extra.media_title,
                                                  id: r,
                                              }),
                                              (0, t.jsx)(P.A, {
                                                  variant: "text-xs/normal",
                                                  text: n.extra.media_subtitle,
                                              }),
                                          ],
                                      }),
                                (0, t.jsx)(_.mG, {
                                    location: _.N5.USER_PROFILE,
                                    className: L.jp,
                                    children: h.R.map((e, a) => (0, t.jsx)(e, { entry: n }, "entry-".concat(a))),
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
    var a, n;
    let { user: s, entry: i, header: l, className: r, onClose: c } = e,
        x = (0, E.GV)(),
        { largeImage: j } = (0, d.nO)({ entry: i }),
        { analyticsLocations: u } = (0, o.Ay)(),
        A = (0, N.A)({
            display: "recent",
            user: s,
            entry: i,
            analyticsLocations: u,
        }),
        h = (0, O.A)({
            userId: s.id,
            onAction: A,
        }),
        f = null == (a = i.extra.entries[0]) ? void 0 : a.media;
    return null == f
        ? null
        : (0, t.jsxs)(R.A, {
              ref: h,
              className: r,
              profileModalScrollTarget: M.bk.RECENT_ACTIVITY,
              onAction: A,
              onClose: c,
              "aria-labelledby": x,
              children: [
                  l,
                  (0, t.jsx)("div", {
                      className: L.rf,
                      children: (0, t.jsxs)("div", {
                          className: L.Qs,
                          children: [
                              (0, t.jsx)(m.d, {
                                  image: j,
                                  size: m.w.SIZE_60,
                                  className: L.mM,
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          A({ action: "OPEN_SPOTIFY_ALBUM" }),
                                          (0, p.n)(k.M0.ALBUM, f.external_parent_id);
                                  },
                              }),
                              (0, t.jsxs)("div", {
                                  className: L.zH,
                                  children: [
                                      (0, t.jsxs)("div", {
                                          children: [
                                              (0, t.jsx)(P.Q, {
                                                  variant: "heading-sm/semibold",
                                                  text: f.title,
                                                  onClick: () => {
                                                      A({ action: "OPEN_SPOTIFY_TRACK" }),
                                                          (0, p.n)(k.M0.TRACK, f.external_id);
                                                  },
                                                  id: x,
                                              }),
                                              (0, t.jsx)(P.A, {
                                                  variant: "text-xs/normal",
                                                  text: null == (n = f.artists[0]) ? void 0 : n.name,
                                                  onClick: () => {
                                                      var e;
                                                      A({ action: "OPEN_SPOTIFY_ARTIST" }),
                                                          (0, p.n)(
                                                              k.M0.ARTIST,
                                                              null == (e = f.artists[0]) ? void 0 : e.external_id,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, t.jsx)(_.mG, {
                                          location: _.N5.USER_PROFILE,
                                          className: L.jp,
                                          children: y.hh.map((e, a) => (0, t.jsx)(e, { entry: i }, "entry-".concat(a))),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
function Q(e) {
    let { user: a, entry: n, header: s, className: i, onClose: l } = e,
        c = (0, E.GV)(),
        { largeImage: x } = (0, d.nO)({
            entry: n,
            showCoverImage: !1,
        }),
        { analyticsLocations: p } = (0, o.Ay)(),
        u = (0, N.A)({
            display: "recent",
            user: a,
            entry: n,
            analyticsLocations: p,
        }),
        y = (0, O.A)({
            userId: a.id,
            onAction: u,
        }),
        A = (0, g.A)({
            applicationId: n.extra.application_id,
            onClose: l,
        });
    return (0, t.jsxs)(R.A, {
        ref: y,
        className: i,
        profileModalScrollTarget: M.bk.RECENT_ACTIVITY,
        onAction: u,
        onClose: l,
        "aria-labelledby": c,
        children: [
            s,
            (0, t.jsx)(b.A, {
                applicationId: n.extra.application_id,
                questContent: r.u.USER_PROFILE_ACTIVITY,
                children: (e) =>
                    (0, t.jsx)("div", {
                        className: L.rf,
                        ref: e,
                        children: (0, t.jsxs)("div", {
                            className: L.Qs,
                            children: [
                                (0, t.jsx)(m.d, {
                                    image: x,
                                    size: m.w.SIZE_60,
                                    className: L.mM,
                                    onClick: (e) => {
                                        e.stopPropagation(), u({ action: "PRESS_IMAGE" }), A();
                                    },
                                }),
                                (0, t.jsxs)("div", {
                                    className: L.zH,
                                    children: [
                                        (0, t.jsx)("div", {
                                            children: (0, t.jsx)(P.Q, {
                                                variant: "heading-sm/semibold",
                                                text: n.extra.activity_name,
                                                onClick: () => {
                                                    u({ action: "PRESS_TEXT" }), A();
                                                },
                                                id: c,
                                            }),
                                        }),
                                        (0, t.jsx)(_.mG, {
                                            location: _.N5.USER_PROFILE,
                                            className: L.jp,
                                            children: j.$.map((e, a) =>
                                                (0, t.jsx)(e, { entry: n }, "entry-".concat(a)),
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
function F(e) {
    let { entry: a } = e,
        n = (function (e, a) {
            if (null == e) return {};
            var n,
                t,
                s,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++)
                    (t = n[s]),
                        !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
                return i;
            }
            if (
                ((i = (function (e, a) {
                    if (null == e) return {};
                    var n,
                        t,
                        s = {},
                        i = Object.getOwnPropertyNames(e);
                    for (t = 0; t < i.length; t++)
                        (n = i[t]),
                            !(a.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                    return s;
                })(e, a)),
                Object.getOwnPropertySymbols)
            )
                for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                    (t = n[s]),
                        !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            return i;
        })(e, ["entry"]);
    return (0, x.zD)(a)
        ? (0, t.jsx)(V, U({ entry: a }, n))
        : (0, x.Lf)(a)
          ? (0, t.jsx)(z, U({ entry: a }, n))
          : (0, x.Tq)(a)
            ? (0, t.jsx)(G, U({ entry: a }, n))
            : (0, x.yl)(a)
              ? (0, t.jsx)(Q, U({ entry: a }, n))
              : null;
}
