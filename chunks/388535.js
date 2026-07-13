s.d(a, { A: () => U });
var i = s(627968);
s(64700);
var n = s(503698),
    t = s.n(n),
    l = s(681154),
    r = s(696292),
    c = s(939249),
    o = s(688810),
    d = s(939341),
    x = s(20805),
    m = s(623671),
    p = s(261020),
    _ = s(468581),
    j = s(322789),
    h = s(363670),
    A = s(977001),
    I = s(514243),
    u = s(506326),
    E = s(299846),
    y = s(915089),
    N = s(409626),
    S = s(692969),
    v = s(932413),
    T = s(92240),
    C = s(257367),
    g = s(946356),
    R = s(939496),
    f = s(624951),
    P = s(584904),
    b = s(531648),
    k = s(695311),
    O = s(518477),
    M = s(272984),
    G = s(996988),
    L = s(514566);
function z(e) {
    let { user: a, entry: s, header: n, className: x, onClose: p } = e,
        _ = (0, y.GV)(),
        { themeType: h } = (0, R.E)(),
        { largeImage: I } = (0, d.nO)({ entry: s, showCoverImage: !1, trackingSource: "user_profile_gaming_entry" }),
        { appName: k, activity: M } = (0, E.u)(s),
        z = (0, S.A)({
            location: "UserProfileRecentActivityCard",
            applicationId: s.extra.application_id,
            source: N.GameProfileSources.UserProfile,
            sourceUserId: a.id,
            trackEntryPointImpression: !0,
        }),
        { analyticsLocations: V } = (0, o.Ay)(),
        w = (0, T.A)({ display: "recent", user: a, entry: s, analyticsLocations: V }),
        Q = (0, C.A)({ userId: a.id, onAction: w });
    return null == z
        ? (0, i.jsx)("article", {
              "aria-labelledby": _,
              children: (0, i.jsxs)(g.A.Overlay, {
                  className: t()(L.Nr, x),
                  ref: Q,
                  children: [
                      n,
                      (0, i.jsx)("div", {
                          className: L.rf,
                          children: (0, i.jsxs)("div", {
                              className: L.Qs,
                              children: [
                                  (0, i.jsx)(m.d, { image: I, size: m.w.SIZE_60, className: L.Sl }),
                                  (0, i.jsx)("div", {
                                      className: L.zH,
                                      children: (0, i.jsx)("div", {
                                          children: (0, i.jsx)(b.Q, { variant: "heading-sm/semibold", text: k, id: _ }),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          })
        : (0, i.jsxs)(P.A, {
              ref: Q,
              className: x,
              profileModalScrollTarget: O.bk.RECENT_ACTIVITY,
              onAction: w,
              onClose: p,
              "aria-labelledby": _,
              children: [
                  n,
                  (0, i.jsx)(v.A, {
                      applicationId: s.extra.application_id,
                      questContent: r.u.USER_PROFILE_ACTIVITY,
                      children: (e) =>
                          (0, i.jsx)("div", {
                              className: L.rf,
                              ref: e,
                              children: (0, i.jsxs)("div", {
                                  className: L.Qs,
                                  children: [
                                      (0, i.jsx)(m.d, {
                                          image: I,
                                          size: m.w.SIZE_60,
                                          className: L.mM,
                                          onClick: (e) => {
                                              e.stopPropagation(),
                                                  w({ action: "PRESS_IMAGE" }),
                                                  z(e),
                                                  h !== G.d.MODAL && h !== G.d.MODAL_V2 && p?.();
                                          },
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: L.zH,
                                          children: [
                                              (0, i.jsx)(c.D, {
                                                  className: L.sd,
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          w({ action: "PRESS_TEXT" }),
                                                          z(e),
                                                          h !== G.d.MODAL && h !== G.d.MODAL_V2 && p?.();
                                                  },
                                                  children: (0, i.jsx)(b.Q, {
                                                      variant: "heading-sm/semibold",
                                                      text: k,
                                                      id: _,
                                                  }),
                                              }),
                                              (0, i.jsx)(u.mG, {
                                                  location: u.N5.USER_PROFILE,
                                                  className: L.jp,
                                                  children:
                                                      s.content_type === l.ContentInventoryEntryType.TOP_GAME
                                                          ? A.ac.map((e, a) =>
                                                                (0, i.jsx)(e, { entry: s }, `entry-${a}`),
                                                            )
                                                          : j.n.map((e, a) =>
                                                                (0, i.jsx)(e, { entry: s }, `entry-${a}`),
                                                            ),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                  }),
                  (0, i.jsx)(f.A, { applicationId: s.extra.application_id, onAction: w, onClose: p, activity: M }),
              ],
          });
}
function V(e) {
    let { user: a, entry: s, header: n, className: t, onClose: l } = e,
        r = (0, y.GV)(),
        { largeImage: x } = (0, d.nO)({ entry: s, trackingSource: "user_profile_watch_entry" }),
        { url: _ } = s.extra,
        { analyticsLocations: j } = (0, o.Ay)(),
        h = (0, T.A)({ display: "recent", user: a, entry: s, analyticsLocations: j }),
        A = (0, C.A)({ userId: a.id, onAction: h });
    return (0, i.jsxs)(P.A, {
        ref: A,
        className: t,
        profileModalScrollTarget: O.bk.RECENT_ACTIVITY,
        onAction: h,
        onClose: l,
        "aria-labelledby": r,
        children: [
            n,
            (0, i.jsx)("div", {
                className: L.rf,
                children: (0, i.jsxs)("div", {
                    className: L.Qs,
                    children: [
                        null == _ || "" === _
                            ? (0, i.jsx)(m.d, {
                                  aspectRatio: "crunchyroll",
                                  image: x,
                                  size: m.w.SIZE_60,
                                  className: L.Sl,
                              })
                            : (0, i.jsx)(m.d, {
                                  aspectRatio: "crunchyroll",
                                  image: x,
                                  size: m.w.SIZE_60,
                                  className: L.mM,
                                  onClick: (e) => {
                                      e.stopPropagation(), h({ action: "PRESS_IMAGE" }), (0, p.C)(_);
                                  },
                              }),
                        (0, i.jsxs)("div", {
                            className: L.zH,
                            children: [
                                null == _ || "" === _
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(b.Q, {
                                                  variant: "heading-sm/semibold",
                                                  text: s.extra.media_title,
                                                  id: r,
                                              }),
                                              (0, i.jsx)(b.A, {
                                                  variant: "text-xs/normal",
                                                  text: s.extra.media_subtitle,
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)(c.D, {
                                          className: L.sd,
                                          onClick: (e) => {
                                              e.stopPropagation(), h({ action: "PRESS_TEXT" }), (0, p.C)(_);
                                          },
                                          children: [
                                              (0, i.jsx)(b.Q, {
                                                  variant: "heading-sm/semibold",
                                                  text: s.extra.media_title,
                                                  id: r,
                                              }),
                                              (0, i.jsx)(b.A, {
                                                  variant: "text-xs/normal",
                                                  text: s.extra.media_subtitle,
                                              }),
                                          ],
                                      }),
                                (0, i.jsx)(u.mG, {
                                    location: u.N5.USER_PROFILE,
                                    className: L.jp,
                                    children: I.R.map((e, a) => (0, i.jsx)(e, { entry: s }, `entry-${a}`)),
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
    let { user: a, entry: s, header: n, className: t, onClose: l } = e,
        r = (0, y.GV)(),
        { largeImage: c } = (0, d.nO)({ entry: s, trackingSource: "user_profile_listened_session_entry" }),
        { analyticsLocations: x } = (0, o.Ay)(),
        _ = (0, T.A)({ display: "recent", user: a, entry: s, analyticsLocations: x }),
        j = (0, C.A)({ userId: a.id, onAction: _ }),
        A = s.extra.entries[0]?.media;
    return null == A
        ? null
        : (0, i.jsxs)(P.A, {
              ref: j,
              className: t,
              profileModalScrollTarget: O.bk.RECENT_ACTIVITY,
              onAction: _,
              onClose: l,
              "aria-labelledby": r,
              children: [
                  n,
                  (0, i.jsx)("div", {
                      className: L.rf,
                      children: (0, i.jsxs)("div", {
                          className: L.Qs,
                          children: [
                              (0, i.jsx)(m.d, {
                                  image: c,
                                  size: m.w.SIZE_60,
                                  className: L.mM,
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          _({ action: "OPEN_SPOTIFY_ALBUM" }),
                                          (0, p.n)(M.M0.ALBUM, A.external_parent_id);
                                  },
                              }),
                              (0, i.jsxs)("div", {
                                  className: L.zH,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(b.Q, {
                                                  variant: "heading-sm/semibold",
                                                  text: A.title,
                                                  onClick: () => {
                                                      _({ action: "OPEN_SPOTIFY_TRACK" }),
                                                          (0, p.n)(M.M0.TRACK, A.external_id);
                                                  },
                                                  id: r,
                                              }),
                                              (0, i.jsx)(b.A, {
                                                  variant: "text-xs/normal",
                                                  text: A.artists[0]?.name,
                                                  onClick: () => {
                                                      _({ action: "OPEN_SPOTIFY_ARTIST" }),
                                                          (0, p.n)(M.M0.ARTIST, A.artists[0]?.external_id);
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)(u.mG, {
                                          location: u.N5.USER_PROFILE,
                                          className: L.jp,
                                          children: h.hh.map((e, a) => (0, i.jsx)(e, { entry: s }, `entry-${a}`)),
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
    let { user: a, entry: s, header: n, className: t, onClose: l } = e,
        c = (0, y.GV)(),
        { largeImage: x } = (0, d.nO)({
            entry: s,
            showCoverImage: !1,
            trackingSource: "user_profile_launched_activity_entry",
        }),
        { analyticsLocations: p } = (0, o.Ay)(),
        j = (0, T.A)({ display: "recent", user: a, entry: s, analyticsLocations: p }),
        h = (0, C.A)({ userId: a.id, onAction: j }),
        A = (0, k.A)({ applicationId: s.extra.application_id, onClose: l });
    return (0, i.jsxs)(P.A, {
        ref: h,
        className: t,
        profileModalScrollTarget: O.bk.RECENT_ACTIVITY,
        onAction: j,
        onClose: l,
        "aria-labelledby": c,
        children: [
            n,
            (0, i.jsx)(v.A, {
                applicationId: s.extra.application_id,
                questContent: r.u.USER_PROFILE_ACTIVITY,
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: L.rf,
                        ref: e,
                        children: (0, i.jsxs)("div", {
                            className: L.Qs,
                            children: [
                                (0, i.jsx)(m.d, {
                                    image: x,
                                    size: m.w.SIZE_60,
                                    className: L.mM,
                                    onClick: (e) => {
                                        e.stopPropagation(), j({ action: "PRESS_IMAGE" }), A();
                                    },
                                }),
                                (0, i.jsxs)("div", {
                                    className: L.zH,
                                    children: [
                                        (0, i.jsx)("div", {
                                            children: (0, i.jsx)(b.Q, {
                                                variant: "heading-sm/semibold",
                                                text: s.extra.activity_name,
                                                onClick: () => {
                                                    j({ action: "PRESS_TEXT" }), A();
                                                },
                                                id: c,
                                            }),
                                        }),
                                        (0, i.jsx)(u.mG, {
                                            location: u.N5.USER_PROFILE,
                                            className: L.jp,
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
function U(e) {
    let { entry: a, ...s } = e;
    return (0, x.zD)(a)
        ? (0, i.jsx)(z, { entry: a, ...s })
        : (0, x.Lf)(a)
          ? (0, i.jsx)(V, { entry: a, ...s })
          : (0, x.Tq)(a)
            ? (0, i.jsx)(w, { entry: a, ...s })
            : (0, x.yl)(a)
              ? (0, i.jsx)(Q, { entry: a, ...s })
              : null;
}
