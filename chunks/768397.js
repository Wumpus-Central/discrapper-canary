r.d(t, {
    A: () => p,
    F: () => g,
}),
    r(228524);
var s = r(627968);
r(64700);
var l = r(503698),
    n = r.n(l),
    i = r(397927),
    a = r(854378),
    d = r(496885),
    c = r(68965),
    u = r(651539),
    o = r(401755),
    C = r(985018),
    m = r(346349),
    L = r(473169);

function h() {
    return (0, s.jsx)(d.A, {
        className: m.w$,
        children: (0, s.jsx)("div", {
            className: m.SN,
            children: (0, s.jsx)(i.Uzd, {
                size: "xs",
                color: "currentColor",
                className: m.HE,
            }),
        }),
    });
}

function x(e) {
    let { verified: t, text: r } = e;
    return t
        ? (0, s.jsxs)("div", {
              className: m.V,
              children: [(0, s.jsx)(h, {}), r],
          })
        : r;
}

function g(e) {
    let { className: t, count: r, creator: l, verifiedName: i } = e;
    return (0, s.jsx)("div", {
        className: n()(m.t5, t, m.fz),
        children:
            null != l || null != i
                ? C.intl.format(C.t.TTcKAw, {
                      usageCount: r,
                      creator: null != i ? i : l,
                      creatorHook: (e, t) =>
                          (0, s.jsx)(
                              x,
                              {
                                  text: e,
                                  verified: null != i,
                              },
                              t,
                          ),
                  })
                : C.intl.format(C.t.cGXXHL, {
                      usageCount: r,
                  }),
    });
}

function p(e) {
    var t;
    let { guildTemplate: r, error: l, tall: d, pillClassName: h } = e;
    if (null != l && "" !== l)
        return (0, s.jsxs)("div", {
            className: m.kL,
            children: [
                (0, s.jsx)(a.hE, {
                    children: C.intl.string(C.t.mDFGFj),
                }),
                (0, s.jsx)(a.tK, {
                    children: l,
                }),
            ],
        });
    if (r.state === o.QB.RESOLVING)
        return (0, s.jsx)("div", {
            className: m.kL,
            children: (0, s.jsx)(i.y$y, {}),
        });
    let x = (0, u.A)(r.code).header;
    return d
        ? (0, s.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, s.jsx)(a.hE, {
                      className: m.DD,
                      children: x,
                  }),
                  (0, s.jsx)(a.tK, {
                      className: n()(m.VA, L.__invalid_marginTop2),
                      children: C.intl.string(C.t["h+vyO6"]),
                  }),
                  (0, s.jsx)(a.hE, {
                      className: n()(m.DD, m.fz),
                      children: r.name,
                  }),
                  null != r.description &&
                      "" !== r.description &&
                      (0, s.jsx)(a.tK, {
                          className: n()(m.VA, m.fz, L.Ot),
                          children: r.description,
                      }),
                  (0, s.jsx)(g, {
                      className: h,
                      count: null != (t = r.usageCount) ? t : 0,
                      creator: r.creator.username,
                      verifiedName: (0, c.c)(r.code),
                  }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, s.jsx)(a.hE, {
                      className: m.DD,
                      children: x,
                  }),
                  (0, s.jsx)(a.tK, {
                      className: n()(m.VA, m.fz),
                      children: r.name,
                  }),
              ],
          });
}
