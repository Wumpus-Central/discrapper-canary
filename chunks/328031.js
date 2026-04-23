n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(419354),
    o = n(827734),
    d = n(834730),
    c = n(628284),
    u = n(717421),
    m = n(270003),
    g = n(404778),
    h = n(452027),
    x = n(331322),
    _ = n(939249),
    p = n(534514),
    A = n(147925),
    E = n(2242),
    f = n(985018),
    j = n(562742);
function N(e) {
    let { checked: t, children: n } = e;
    return (0, i.jsxs)("div", {
        className: j.nM,
        children: [
            (0, i.jsx)(d.E, {
                variant: "text-md/normal",
                color: "interactive-text-active",
                className: j.qg,
                children: n,
            }),
            t
                ? (0, i.jsx)(c.y, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                      className: r()(j.aL, j.xp),
                  })
                : (0, i.jsx)("div", { className: r()(j.aL, j.VL) }),
        ],
    });
}
function I(e) {
    let { children: t } = e,
        [n, s] = l.useState(!1),
        r = t.flatMap((e) => e.items.map((e) => e.completed)),
        o = r.filter((e) => e).length / r.length,
        c = 1 === o,
        I = (0, u.z)({ width: `${100 * o}%` }),
        C = [
            f.intl.format(f.t["CgyVP+"], { mustReadArticlesUrl: E.P7.MUST_READ_ARTICLES }),
            f.intl.format(f.t.wfTzye, { creatorToAdmin101Url: E.P7.CREATOR_TO_ADMIN_101 }),
            f.intl.format(f.t["IpGL+4"], { creatorToAdmin201Url: E.P7.CREATOR_TO_ADMIN_201 }),
        ],
        b = n
            ? null
            : (0, i.jsxs)(m.n, {
                  children: [
                      !c &&
                          t.map((e, t) => {
                              let { title: n, items: s } = e;
                              return (0, i.jsxs)(
                                  l.Fragment,
                                  {
                                      children: [
                                          t > 0 && (0, i.jsx)(g.c, {}),
                                          (0, i.jsx)(h.D, {
                                              label: n,
                                              children: (0, i.jsx)(x.B, {
                                                  gap: 8,
                                                  children: s.map((e, t) =>
                                                      (0, i.jsx)(
                                                          N,
                                                          { children: e.description, checked: e.completed },
                                                          t,
                                                      ),
                                                  ),
                                              }),
                                          }),
                                      ],
                                  },
                                  t,
                              );
                          }),
                      (0, i.jsx)(g.c, {}),
                      (0, i.jsx)(h.D, {
                          label: f.intl.string(f.t.FO0AIS),
                          children: (0, i.jsx)(x.B, {
                              gap: 8,
                              children: C.map((e, t) =>
                                  (0, i.jsx)(
                                      "div",
                                      {
                                          className: j.nM,
                                          children: (0, i.jsx)(d.E, { variant: "text-md/normal", children: e }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      }),
                  ],
              });
    return (0, i.jsx)("div", {
        className: j.D4,
        children: (0, i.jsx)("div", {
            className: j.kL,
            children: (0, i.jsxs)(x.B, {
                gap: 16,
                children: [
                    (0, i.jsxs)(_.D, {
                        className: j.jr,
                        onClick: () => s((e) => !e),
                        children: [
                            (0, i.jsx)(p.D, {
                                variant: "heading-md/semibold",
                                className: j.TK,
                                children: f.intl.string(f.t["2Xbd/G"]),
                            }),
                            (0, i.jsx)(A.A, { direction: n ? A.A.Directions.DOWN : A.A.Directions.UP, className: j.D }),
                        ],
                    }),
                    !c &&
                        (0, i.jsx)("div", {
                            className: j.ux,
                            children: (0, i.jsx)(a.animated.div, { className: j.zZ, style: I }),
                        }),
                    b,
                ],
            }),
        }),
    });
}
