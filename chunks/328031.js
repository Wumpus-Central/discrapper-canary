"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(208798),
    o = n(827734),
    d = n(397927),
    c = n(147925),
    u = n(2242),
    m = n(985018),
    g = n(562742);
function x(e) {
    let { checked: t, children: n } = e;
    return (0, i.jsxs)("div", {
        className: g.nM,
        children: [
            (0, i.jsx)(d.Text, {
                variant: "text-md/normal",
                color: "interactive-text-active",
                className: g.qg,
                children: n,
            }),
            t
                ? (0, i.jsx)(d.yr3, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                      className: r()(g.aL, g.xp),
                  })
                : (0, i.jsx)("div", { className: r()(g.aL, g.VL) }),
        ],
    });
}
function h(e) {
    let { children: t } = e,
        [n, l] = s.useState(!1),
        r = t.flatMap((e) => e.items.map((e) => e.completed)),
        o = r.filter((e) => e).length / r.length,
        h = 1 === o,
        _ = (0, d.zhh)({ width: `${100 * o}%` }),
        A = [
            m.intl.format(m.t["CgyVP+"], { mustReadArticlesUrl: u.P7.MUST_READ_ARTICLES }),
            m.intl.format(m.t.wfTzye, { creatorToAdmin101Url: u.P7.CREATOR_TO_ADMIN_101 }),
            m.intl.format(m.t["IpGL+4"], { creatorToAdmin201Url: u.P7.CREATOR_TO_ADMIN_201 }),
        ],
        p = n
            ? null
            : (0, i.jsxs)(d.nVY, {
                  children: [
                      !h &&
                          t.map((e, t) => {
                              let { title: n, items: l } = e;
                              return (0, i.jsxs)(
                                  s.Fragment,
                                  {
                                      children: [
                                          t > 0 && (0, i.jsx)(d.cGx, {}),
                                          (0, i.jsx)(d.D0$, {
                                              label: n,
                                              children: (0, i.jsx)(d.BJc, {
                                                  gap: 8,
                                                  children: l.map((e, t) =>
                                                      (0, i.jsx)(
                                                          x,
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
                      (0, i.jsx)(d.cGx, {}),
                      (0, i.jsx)(d.D0$, {
                          label: m.intl.string(m.t.FO0AIS),
                          children: (0, i.jsx)(d.BJc, {
                              gap: 8,
                              children: A.map((e, t) =>
                                  (0, i.jsx)(
                                      "div",
                                      {
                                          className: g.nM,
                                          children: (0, i.jsx)(d.Text, { variant: "text-md/normal", children: e }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      }),
                  ],
              });
    return (0, i.jsx)("div", {
        className: g.D4,
        children: (0, i.jsx)("div", {
            className: g.kL,
            children: (0, i.jsxs)(d.BJc, {
                gap: 16,
                children: [
                    (0, i.jsxs)(d.DUT, {
                        className: g.jr,
                        onClick: () => l((e) => !e),
                        children: [
                            (0, i.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                className: g.TK,
                                children: m.intl.string(m.t["2Xbd/G"]),
                            }),
                            (0, i.jsx)(c.A, { direction: n ? c.A.Directions.DOWN : c.A.Directions.UP, className: g.D }),
                        ],
                    }),
                    !h &&
                        (0, i.jsx)("div", {
                            className: g.ux,
                            children: (0, i.jsx)(a.animated.div, { className: g.zZ, style: _ }),
                        }),
                    p,
                ],
            }),
        }),
    });
}
