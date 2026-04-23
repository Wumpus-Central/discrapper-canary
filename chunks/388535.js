s.d(a, { A: () => w });
var i = s(627968);
s(64700);
var n = s(503698),
    l = s.n(n),
    t = s(681154),
    r = s(696292),
    c = s(939249),
    d = s(688810),
    o = s(939341),
    x = s(20805),
    m = s(623671),
    j = s(261020),
    p = s(468581),
    A = s(322789),
    _ = s(363670),
    h = s(977001),
    E = s(514243),
    I = s(506326),
    N = s(299846),
    u = s(915089),
    y = s(409626),
    C = s(692969),
    T = s(932413),
    v = s(92240),
    S = s(257367),
    R = s(946356),
    P = s(939496),
    f = s(624951),
    b = s(584904),
    g = s(531648),
    O = s(695311),
    M = s(518477),
    k = s(272984),
    L = s(996988),
    V = s(514566);
function z(e) {
    let { user: a, entry: s, header: n, className: x, onClose: j } = e,
        p = (0, u.GV)(),
        { themeType: _ } = (0, P.E)(),
        { largeImage: E } = (0, o.nO)({ entry: s, showCoverImage: !1 }),
        { appName: O, activity: k } = (0, N.u)(s),
        z = (0, C.A)({
            location: "UserProfileRecentActivityCard",
            applicationId: s.extra.application_id,
            source: y.Ob.UserProfile,
            sourceUserId: a.id,
            trackEntryPointImpression: !0,
        }),
        { analyticsLocations: G } = (0, d.Ay)(),
        U = (0, v.A)({ display: "recent", user: a, entry: s, analyticsLocations: G }),
        Q = (0, S.A)({ userId: a.id, onAction: U });
    return null == z
        ? (0, i.jsx)("article", {
              "aria-labelledby": p,
              children: (0, i.jsxs)(R.A.Overlay, {
                  className: l()(V.Nr, x),
                  ref: Q,
                  children: [
                      n,
                      (0, i.jsx)("div", {
                          className: V.rf,
                          children: (0, i.jsxs)("div", {
                              className: V.Qs,
                              children: [
                                  (0, i.jsx)(m.d, { image: E, size: m.w.SIZE_60, className: V.Sl }),
                                  (0, i.jsx)("div", {
                                      className: V.zH,
                                      children: (0, i.jsx)("div", {
                                          children: (0, i.jsx)(g.Q, { variant: "heading-sm/semibold", text: O, id: p }),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          })
        : (0, i.jsxs)(b.A, {
              ref: Q,
              className: x,
              profileModalScrollTarget: M.bk.RECENT_ACTIVITY,
              onAction: U,
              onClose: j,
              "aria-labelledby": p,
              children: [
                  n,
                  (0, i.jsx)(T.A, {
                      applicationId: s.extra.application_id,
                      questContent: r.u.USER_PROFILE_ACTIVITY,
                      children: (e) =>
                          (0, i.jsx)("div", {
                              className: V.rf,
                              ref: e,
                              children: (0, i.jsxs)("div", {
                                  className: V.Qs,
                                  children: [
                                      (0, i.jsx)(m.d, {
                                          image: E,
                                          size: m.w.SIZE_60,
                                          className: V.mM,
                                          onClick: (e) => {
                                              e.stopPropagation(),
                                                  U({ action: "PRESS_IMAGE" }),
                                                  z(e),
                                                  _ !== L.d.MODAL && _ !== L.d.MODAL_V2 && j?.();
                                          },
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: V.zH,
                                          children: [
                                              (0, i.jsx)(c.D, {
                                                  className: V.sd,
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          U({ action: "PRESS_TEXT" }),
                                                          z(e),
                                                          _ !== L.d.MODAL && _ !== L.d.MODAL_V2 && j?.();
                                                  },
                                                  children: (0, i.jsx)(g.Q, {
                                                      variant: "heading-sm/semibold",
                                                      text: O,
                                                      id: p,
                                                  }),
                                              }),
                                              (0, i.jsx)(I.mG, {
                                                  location: I.N5.USER_PROFILE,
                                                  className: V.jp,
                                                  children:
                                                      s.content_type === t.ContentInventoryEntryType.TOP_GAME
                                                          ? h.ac.map((e, a) =>
                                                                (0, i.jsx)(e, { entry: s }, `entry-${a}`),
                                                            )
                                                          : A.n.map((e, a) =>
                                                                (0, i.jsx)(e, { entry: s }, `entry-${a}`),
                                                            ),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                  }),
                  (0, i.jsx)(f.A, { applicationId: s.extra.application_id, onAction: U, onClose: j, activity: k }),
              ],
          });
}
function G(e) {
    let { user: a, entry: s, header: n, className: l, onClose: t } = e,
        r = (0, u.GV)(),
        { largeImage: x } = (0, o.nO)({ entry: s }),
        { url: p } = s.extra,
        { analyticsLocations: A } = (0, d.Ay)(),
        _ = (0, v.A)({ display: "recent", user: a, entry: s, analyticsLocations: A }),
        h = (0, S.A)({ userId: a.id, onAction: _ });
    return (0, i.jsxs)(b.A, {
        ref: h,
        className: l,
        profileModalScrollTarget: M.bk.RECENT_ACTIVITY,
        onAction: _,
        onClose: t,
        "aria-labelledby": r,
        children: [
            n,
            (0, i.jsx)("div", {
                className: V.rf,
                children: (0, i.jsxs)("div", {
                    className: V.Qs,
                    children: [
                        null == p || "" === p
                            ? (0, i.jsx)(m.d, {
                                  aspectRatio: "crunchyroll",
                                  image: x,
                                  size: m.w.SIZE_60,
                                  className: V.Sl,
                              })
                            : (0, i.jsx)(m.d, {
                                  aspectRatio: "crunchyroll",
                                  image: x,
                                  size: m.w.SIZE_60,
                                  className: V.mM,
                                  onClick: (e) => {
                                      e.stopPropagation(), _({ action: "PRESS_IMAGE" }), (0, j.C)(p);
                                  },
                              }),
                        (0, i.jsxs)("div", {
                            className: V.zH,
                            children: [
                                null == p || "" === p
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(g.Q, {
                                                  variant: "heading-sm/semibold",
                                                  text: s.extra.media_title,
                                                  id: r,
                                              }),
                                              (0, i.jsx)(g.A, {
                                                  variant: "text-xs/normal",
                                                  text: s.extra.media_subtitle,
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)(c.D, {
                                          className: V.sd,
                                          onClick: (e) => {
                                              e.stopPropagation(), _({ action: "PRESS_TEXT" }), (0, j.C)(p);
                                          },
                                          children: [
                                              (0, i.jsx)(g.Q, {
                                                  variant: "heading-sm/semibold",
                                                  text: s.extra.media_title,
                                                  id: r,
                                              }),
                                              (0, i.jsx)(g.A, {
                                                  variant: "text-xs/normal",
                                                  text: s.extra.media_subtitle,
                                              }),
                                          ],
                                      }),
                                (0, i.jsx)(I.mG, {
                                    location: I.N5.USER_PROFILE,
                                    className: V.jp,
                                    children: E.R.map((e, a) => (0, i.jsx)(e, { entry: s }, `entry-${a}`)),
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
    let { user: a, entry: s, header: n, className: l, onClose: t } = e,
        r = (0, u.GV)(),
        { largeImage: c } = (0, o.nO)({ entry: s }),
        { analyticsLocations: x } = (0, d.Ay)(),
        p = (0, v.A)({ display: "recent", user: a, entry: s, analyticsLocations: x }),
        A = (0, S.A)({ userId: a.id, onAction: p }),
        h = s.extra.entries[0]?.media;
    return null == h
        ? null
        : (0, i.jsxs)(b.A, {
              ref: A,
              className: l,
              profileModalScrollTarget: M.bk.RECENT_ACTIVITY,
              onAction: p,
              onClose: t,
              "aria-labelledby": r,
              children: [
                  n,
                  (0, i.jsx)("div", {
                      className: V.rf,
                      children: (0, i.jsxs)("div", {
                          className: V.Qs,
                          children: [
                              (0, i.jsx)(m.d, {
                                  image: c,
                                  size: m.w.SIZE_60,
                                  className: V.mM,
                                  onClick: (e) => {
                                      e.stopPropagation(),
                                          p({ action: "OPEN_SPOTIFY_ALBUM" }),
                                          (0, j.n)(k.M0.ALBUM, h.external_parent_id);
                                  },
                              }),
                              (0, i.jsxs)("div", {
                                  className: V.zH,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(g.Q, {
                                                  variant: "heading-sm/semibold",
                                                  text: h.title,
                                                  onClick: () => {
                                                      p({ action: "OPEN_SPOTIFY_TRACK" }),
                                                          (0, j.n)(k.M0.TRACK, h.external_id);
                                                  },
                                                  id: r,
                                              }),
                                              (0, i.jsx)(g.A, {
                                                  variant: "text-xs/normal",
                                                  text: h.artists[0]?.name,
                                                  onClick: () => {
                                                      p({ action: "OPEN_SPOTIFY_ARTIST" }),
                                                          (0, j.n)(k.M0.ARTIST, h.artists[0]?.external_id);
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)(I.mG, {
                                          location: I.N5.USER_PROFILE,
                                          className: V.jp,
                                          children: _.hh.map((e, a) => (0, i.jsx)(e, { entry: s }, `entry-${a}`)),
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
    let { user: a, entry: s, header: n, className: l, onClose: t } = e,
        c = (0, u.GV)(),
        { largeImage: x } = (0, o.nO)({ entry: s, showCoverImage: !1 }),
        { analyticsLocations: j } = (0, d.Ay)(),
        A = (0, v.A)({ display: "recent", user: a, entry: s, analyticsLocations: j }),
        _ = (0, S.A)({ userId: a.id, onAction: A }),
        h = (0, O.A)({ applicationId: s.extra.application_id, onClose: t });
    return (0, i.jsxs)(b.A, {
        ref: _,
        className: l,
        profileModalScrollTarget: M.bk.RECENT_ACTIVITY,
        onAction: A,
        onClose: t,
        "aria-labelledby": c,
        children: [
            n,
            (0, i.jsx)(T.A, {
                applicationId: s.extra.application_id,
                questContent: r.u.USER_PROFILE_ACTIVITY,
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: V.rf,
                        ref: e,
                        children: (0, i.jsxs)("div", {
                            className: V.Qs,
                            children: [
                                (0, i.jsx)(m.d, {
                                    image: x,
                                    size: m.w.SIZE_60,
                                    className: V.mM,
                                    onClick: (e) => {
                                        e.stopPropagation(), A({ action: "PRESS_IMAGE" }), h();
                                    },
                                }),
                                (0, i.jsxs)("div", {
                                    className: V.zH,
                                    children: [
                                        (0, i.jsx)("div", {
                                            children: (0, i.jsx)(g.Q, {
                                                variant: "heading-sm/semibold",
                                                text: s.extra.activity_name,
                                                onClick: () => {
                                                    A({ action: "PRESS_TEXT" }), h();
                                                },
                                                id: c,
                                            }),
                                        }),
                                        (0, i.jsx)(I.mG, {
                                            location: I.N5.USER_PROFILE,
                                            className: V.jp,
                                            children: p.$.map((e, a) => (0, i.jsx)(e, { entry: s }, `entry-${a}`)),
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
function w(e) {
    let { entry: a, ...s } = e;
    return (0, x.zD)(a)
        ? (0, i.jsx)(z, { entry: a, ...s })
        : (0, x.Lf)(a)
          ? (0, i.jsx)(G, { entry: a, ...s })
          : (0, x.Tq)(a)
            ? (0, i.jsx)(U, { entry: a, ...s })
            : (0, x.yl)(a)
              ? (0, i.jsx)(Q, { entry: a, ...s })
              : null;
}
