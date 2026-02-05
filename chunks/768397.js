r.d(t, { A: () => p, F: () => g });
var s = r(627968);
r(64700);
var n = r(503698),
    l = r.n(n),
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
            children: (0, s.jsx)(i.Uzd, { size: "xs", color: "currentColor", className: m.HE }),
        }),
    });
}
function x(e) {
    let { verified: t, text: r } = e;
    return t ? (0, s.jsxs)("div", { className: m.V, children: [(0, s.jsx)(h, {}), r] }) : r;
}
function g(e) {
    let { className: t, count: r, creator: n, verifiedName: i } = e;
    return (0, s.jsx)("div", {
        className: l()(m.t5, t, m.fz),
        children:
            null != n || null != i
                ? C.intl.format(C.t.TTcKAw, {
                      usageCount: r,
                      creator: i ?? n,
                      creatorHook: (e, t) => (0, s.jsx)(x, { text: e, verified: null != i }, t),
                  })
                : C.intl.format(C.t.cGXXHL, { usageCount: r }),
    });
}
function p(e) {
    let { guildTemplate: t, error: r, tall: n, pillClassName: d } = e;
    if (null != r && "" !== r)
        return (0, s.jsxs)("div", {
            className: m.kL,
            children: [(0, s.jsx)(a.hE, { children: C.intl.string(C.t.mDFGFj) }), (0, s.jsx)(a.tK, { children: r })],
        });
    if (t.state === o.QB.RESOLVING) return (0, s.jsx)("div", { className: m.kL, children: (0, s.jsx)(i.y$y, {}) });
    let h = (0, u.A)(t.code).header;
    return n
        ? (0, s.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, s.jsx)(a.hE, { className: m.DD, children: h }),
                  (0, s.jsx)(a.tK, {
                      className: l()(m.VA, L.__invalid_marginTop2),
                      children: C.intl.string(C.t["h+vyO6"]),
                  }),
                  (0, s.jsx)(a.hE, { className: l()(m.DD, m.fz), children: t.name }),
                  null != t.description &&
                      "" !== t.description &&
                      (0, s.jsx)(a.tK, { className: l()(m.VA, m.fz, L.Ot), children: t.description }),
                  (0, s.jsx)(g, {
                      className: d,
                      count: t.usageCount ?? 0,
                      creator: t.creator.username,
                      verifiedName: (0, c.c)(t.code),
                  }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, s.jsx)(a.hE, { className: m.DD, children: h }),
                  (0, s.jsx)(a.tK, { className: l()(m.VA, m.fz), children: t.name }),
              ],
          });
}
