s.d(t, { A: () => f, F: () => p });
var r = s(627968);
s(64700);
var n = s(503698),
    l = s.n(n),
    i = s(478016),
    a = s(289873),
    d = s(854378),
    c = s(496885),
    u = s(68965),
    C = s(651539),
    o = s(401755),
    L = s(985018),
    m = s(754196),
    h = s(818050);
function x() {
    return (0, r.jsx)(c.A, {
        className: m.w$,
        children: (0, r.jsx)("div", {
            className: m.SN,
            children: (0, r.jsx)(i.U, { size: "xs", color: "currentColor", className: m.HE }),
        }),
    });
}
function g(e) {
    let { verified: t, text: s } = e;
    return t ? (0, r.jsxs)("div", { className: m.V, children: [(0, r.jsx)(x, {}), s] }) : s;
}
function p(e) {
    let { className: t, count: s, creator: n, verifiedName: i } = e;
    return (0, r.jsx)("div", {
        className: l()(m.t5, t, m.fz),
        children:
            null != n || null != i
                ? L.intl.format(L.t.TTcKAw, {
                      usageCount: s,
                      creator: i ?? n,
                      creatorHook: (e, t) => (0, r.jsx)(g, { text: e, verified: null != i }, t),
                  })
                : L.intl.format(L.t.cGXXHL, { usageCount: s }),
    });
}
function f(e) {
    let { guildTemplate: t, error: s, tall: n, pillClassName: i } = e;
    if (null != s && "" !== s)
        return (0, r.jsxs)("div", {
            className: m.kL,
            children: [(0, r.jsx)(d.hE, { children: L.intl.string(L.t.mDFGFj) }), (0, r.jsx)(d.tK, { children: s })],
        });
    if (t.state === o.QB.RESOLVING) return (0, r.jsx)("div", { className: m.kL, children: (0, r.jsx)(a.y, {}) });
    let c = (0, C.A)(t.code).header;
    return n
        ? (0, r.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, r.jsx)(d.hE, { className: m.DD, children: c }),
                  (0, r.jsx)(d.tK, {
                      className: l()(m.VA, h.__invalid_marginTop2),
                      children: L.intl.string(L.t["h+vyO6"]),
                  }),
                  (0, r.jsx)(d.hE, { className: l()(m.DD, m.fz), children: t.name }),
                  null != t.description &&
                      "" !== t.description &&
                      (0, r.jsx)(d.tK, { className: l()(m.VA, m.fz, h.Ot), children: t.description }),
                  (0, r.jsx)(p, {
                      className: i,
                      count: t.usageCount ?? 0,
                      creator: t.creator.username,
                      verifiedName: (0, u.c)(t.code),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, r.jsx)(d.hE, { className: m.DD, children: c }),
                  (0, r.jsx)(d.tK, { className: l()(m.VA, m.fz), children: t.name }),
              ],
          });
}
