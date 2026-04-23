s.d(a, { A: () => $ });
var i = s(627968);
s(64700);
var n = s(793574),
    l = s(688810),
    t = s(20805),
    r = s(351638),
    c = s(503698),
    d = s.n(c),
    o = s(681154),
    x = s(696292),
    m = s(939249),
    j = s(939341),
    p = s(623671),
    A = s(261020),
    _ = s(468581),
    h = s(322789),
    E = s(363670),
    I = s(977001),
    N = s(514243),
    u = s(506326),
    y = s(299846),
    C = s(915089),
    T = s(409626),
    v = s(692969),
    S = s(932413),
    R = s(92240),
    P = s(257367),
    f = s(946356),
    b = s(939496),
    g = s(624951),
    O = s(584904),
    M = s(531648),
    k = s(695311),
    L = s(518477),
    V = s(272984),
    z = s(996988),
    G = s(514566);
function U(e) {
    let { user: a, entry: s, header: n, className: t, onClose: r } = e,
        c = (0, C.GV)(),
        { themeType: A } = (0, b.E)(),
        { largeImage: _ } = (0, j.nO)({ entry: s, showCoverImage: !1 }),
        { appName: E, activity: N } = (0, y.u)(s),
        k = (0, v.A)({
            location: "UserProfileRecentActivityCard",
            applicationId: s.extra.application_id,
            source: T.Ob.UserProfile,
            sourceUserId: a.id,
            trackEntryPointImpression: !0,
        }),
        { analyticsLocations: V } = (0, l.Ay)(),
        U = (0, R.A)({ display: "recent", user: a, entry: s, analyticsLocations: V }),
        Q = (0, P.A)({ userId: a.id, onAction: U });
    return null == k
        ? (0, i.jsx)("article", {
              "aria-labelledby": c,
              children: (0, i.jsxs)(f.A.Overlay, {
                  className: d()(G.Nr, t),
                  ref: Q,
                  children: [
                      n,
                      (0, i.jsx)("div", {
                          className: G.rf,
                          children: (0, i.jsxs)("div", {
                              className: G.Qs,
                              children: [
                                  (0, i.jsx)(p.d, { image: _, size: p.w.SIZE_60, className: G.Sl }),
                                  (0, i.jsx)("div", {
                                      className: G.zH,
                                      children: (0, i.jsx)("div", {
                                          children: (0, i.jsx)(M.Q, { variant: "heading-sm/semibold", text: E, id: c }),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          })
        : (0, i.jsxs)(O.A, {
              ref: Q,
              className: t,
              profileModalScrollTarget: L.bk.RECENT_ACTIVITY,
              onAction: U,
              onClose: r,
              "aria-labelledby": c,
              children: [
                  n,
                  (0, i.jsx)(S.A, {
                      applicationId: s.extra.application_id,
                      questContent: x.u.USER_PROFILE_ACTIVITY,
                      children: (e) =>
                          (0, i.jsx)("div", {
                              className: G.rf,
                              ref: e,
                              children: (0, i.jsxs)("div", {
                                  className: G.Qs,
                                  children: [
                                      (0, i.jsx)(p.d, {
                                          image: _,
                                          size: p.w.SIZE_60,
                                          className: G.mM,
                                          onClick: (e) => {
                                              e.stopPropagation(),
                                                  U({ action: "PRESS_IMAGE" }),
                                                  k(e),
                                                  A !== z.d.MODAL && A !== z.d.MODAL_V2 && r?.();
                                          },
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: G.zH,
                                          children: [
                                              (0, i.jsx)(m.D, {
                                                  className: G.sd,
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          U({ action: "PRESS_TEXT" }),
                                                          k(e),
                                                          A !== z.d.MODAL && A !== z.d.MODAL_V2 && r?.();
                                                  },
                                                  children: (0, i.jsx)(M.Q, {
                                                      variant: "heading-sm/semibold",
                                                      text: E,
                                                      id: c,
                                                  }),
                                              }),
                                              (0, i.jsx)(u.mG, {
                                                  location: u.N5.USER_PROFILE,
                                                  className: G.jp,
                                                  children:
                                                      s.content_type === o.ContentInventoryEntryType.TOP_GAME
                                                          ? I.ac.map((e, a) =>
                                                                (0, i.jsx)(e, { entry: s }, `entry-${a}`),
                                                            )
                                                          : h.n.map((e, a) =>
                                                                (0, i.jsx)(e, { entry: s }, `entry-${a}`),
                                                            ),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                  }),
                  (0, i.jsx)(g.A, { applicationId: s.extra.application_id, onAction: U, onClose: r, activity: N }),
              ],
          });
}
function Q(e) {
    let { user: a, entry: s, header: n, className: t, onClose: r } = e,
        c = (0, C.GV)(),
        { largeImage: d } = (0, j.nO)({ entry: s }),
        { url: o } = s.extra,
        { analyticsLocations: x } = (0, l.Ay)(),
        _ = (0, R.A)({ display: "recent", user: a, entry: s, analyticsLocations: x }),
        h = (0, P.A)({ userId: a.id, onAction: _ });
    return (0, i.jsxs)(O.A, {
        ref: h,
        className: t,
        profileModalScrollTarget: L.bk.RECENT_ACTIVITY,
        onAction: _,
        onClose: r,
        "aria-labelledby": c,
        children: [
            n,
            (0, i.jsx)("div", {
                className: G.rf,
                children: (0, i.jsxs)("div", {
                    className: G.Qs,
                    children: [
                        null == o || "" === o
                            ? (0, i.jsx)(p.d, {
                                  aspectRatio: "crunchyroll",
                                  image: d,
                                  size: p.w.SIZE_60,
                                  className: G.Sl,
                              })
                            : (0, i.jsx)(p.d, {
                                  aspectRatio: "crunchyroll",
                                  image: d,
                                  size: p.w.SIZE_60,
                                  className: G.mM,
                                  onClick: (e) => {
                                      e.stopPropagation(), _({ action: "PRESS_IMAGE" }), (0, A.C)(o);
                                  },
                              }),
                        (0, i.jsxs)("div", {
                            className: G.zH,
                            children: [
                                null == o || "" === o
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(M.Q, {
                                                  variant: "heading-sm/semibold",
                                                  text: s.extra.media_title,
                                                  id: c,
                                              }),
                                              (0, i.jsx)(M.A, {
                                                  variant: "text-xs/normal",
                                                  text: s.extra.media_subtitle,
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)(m.D, {
                                          className: G.sd,
                                          onClick: (e) => {
                                              e.stopPropagation(), _({ action: "PRESS_TEXT" }), (0, A.C)(o);
                                          },
                                          children: [
                                              (0, i.jsx)(M.Q, {
                                                  variant: "heading-sm/semibold",
                                                  text: s.extra.media_title,
                                                  id: c,
                                              }),
                                              (0, i.jsx)(M.A, {
                                                  variant: "text-xs/normal",
                                                  text: s.extra.media_subtitle,
                                              }),
                                          ],
                                      }),
                                (0, i.jsx)(u.mG, {
                                    location: u.N5.USER_PROFILE,
                                    className: G.jp,
                                    children: N.R.map((e, a) => (0, i.jsx)(e, { entry: s }, `entry-${a}`)),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function w(e) {
    let { user: a, entry: s, header: n, className: t, onClose: r } = e,
        c = (0, C.GV)(),
        { largeImage: d } = (0, j.nO)({ entry: s }),
        { analyticsLocations: o } = (0, l.Ay)(),
        x = (0, R.A)({ display: "recent", user: a, entry: s, analyticsLocations: o }),
        m = (0, P.A)({ userId: a.id, onAction: x }),
        _ = s.extra.entries[0]?.media;
    return null == _
        ? null
        : (0, i.jsxs)(O.A, {
              ref: m,
              className: t,
              profileModalScrollTarget: L.bk.RECENT_ACTIVITY,
              onAction: x,
              onClose: r,
              "aria-labelledby": c,
              children: [
                  n,
                  (0, i.jsx)("div", {
                      className: G.rf,
                      children: (0, i.jsxs)("div", {
                          className: G.Qs,
                          children: [
                              (0, i.jsx)(p.d, {
                                  image: d,
                                  size: p.w.SIZE_60,
                                  className: G.mM,
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          x({ action: "OPEN_SPOTIFY_ALBUM" }),
                                          (0, A.n)(V.M0.ALBUM, _.external_parent_id);
                                  },
                              }),
                              (0, i.jsxs)("div", {
                                  className: G.zH,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(M.Q, {
                                                  variant: "heading-sm/semibold",
                                                  text: _.title,
                                                  onClick: () => {
                                                      x({ action: "OPEN_SPOTIFY_TRACK" }),
                                                          (0, A.n)(V.M0.TRACK, _.external_id);
                                                  },
                                                  id: c,
                                              }),
                                              (0, i.jsx)(M.A, {
                                                  variant: "text-xs/normal",
                                                  text: _.artists[0]?.name,
                                                  onClick: () => {
                                                      x({ action: "OPEN_SPOTIFY_ARTIST" }),
                                                          (0, A.n)(V.M0.ARTIST, _.artists[0]?.external_id);
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)(u.mG, {
                                          location: u.N5.USER_PROFILE,
                                          className: G.jp,
                                          children: E.hh.map((e, a) => (0, i.jsx)(e, { entry: s }, `entry-${a}`)),
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
    let { user: a, entry: s, header: n, className: t, onClose: r } = e,
        c = (0, C.GV)(),
        { largeImage: d } = (0, j.nO)({ entry: s, showCoverImage: !1 }),
        { analyticsLocations: o } = (0, l.Ay)(),
        m = (0, R.A)({ display: "recent", user: a, entry: s, analyticsLocations: o }),
        A = (0, P.A)({ userId: a.id, onAction: m }),
        h = (0, k.A)({ applicationId: s.extra.application_id, onClose: r });
    return (0, i.jsxs)(O.A, {
        ref: A,
        className: t,
        profileModalScrollTarget: L.bk.RECENT_ACTIVITY,
        onAction: m,
        onClose: r,
        "aria-labelledby": c,
        children: [
            n,
            (0, i.jsx)(S.A, {
                applicationId: s.extra.application_id,
                questContent: x.u.USER_PROFILE_ACTIVITY,
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: G.rf,
                        ref: e,
                        children: (0, i.jsxs)("div", {
                            className: G.Qs,
                            children: [
                                (0, i.jsx)(p.d, {
                                    image: d,
                                    size: p.w.SIZE_60,
                                    className: G.mM,
                                    onClick: (e) => {
                                        e.stopPropagation(), m({ action: "PRESS_IMAGE" }), h();
                                    },
                                }),
                                (0, i.jsxs)("div", {
                                    className: G.zH,
                                    children: [
                                        (0, i.jsx)("div", {
                                            children: (0, i.jsx)(M.Q, {
                                                variant: "heading-sm/semibold",
                                                text: s.extra.activity_name,
                                                onClick: () => {
                                                    m({ action: "PRESS_TEXT" }), h();
                                                },
                                                id: c,
                                            }),
                                        }),
                                        (0, i.jsx)(u.mG, {
                                            location: u.N5.USER_PROFILE,
                                            className: G.jp,
                                            children: _.$.map((e, a) => (0, i.jsx)(e, { entry: s }, `entry-${a}`)),
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
function Y(e) {
    let { entry: a, ...s } = e;
    return (0, t.zD)(a)
        ? (0, i.jsx)(U, { entry: a, ...s })
        : (0, t.Lf)(a)
          ? (0, i.jsx)(Q, { entry: a, ...s })
          : (0, t.Tq)(a)
            ? (0, i.jsx)(w, { entry: a, ...s })
            : (0, t.yl)(a)
              ? (0, i.jsx)(F, { entry: a, ...s })
              : null;
}
var D = s(269587);
function $(e) {
    let { user: a, entry: s, className: c, onClose: d, hideContextMenu: o = !1, appContext: x } = e,
        { analyticsLocations: m } = (0, l.Ay)(n.A.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, t.$R)(s)
        ? (0, i.jsx)(l.f5, {
              value: m,
              children: (0, i.jsx)(Y, {
                  entry: s,
                  user: a,
                  className: c,
                  onClose: d,
                  header: (0, i.jsx)(r.A, {
                      contextMenu: o
                          ? null
                          : (0, i.jsx)(D.A, { display: "recent", entry: s, user: a, onClose: d, appContext: x }),
                  }),
              }),
          })
        : null;
}
