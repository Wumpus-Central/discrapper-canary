n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(827734),
    s = n(781696),
    r = n(885574),
    a = n(834730),
    o = n(774474),
    d = n(985018),
    c = n(969842);
let u = (e) => {
    let {
            title: t,
            subtext: n = d.intl.string(d.t.jHpxwo),
            localizedNumber: u,
            isTrendingUp: m,
            isTrendingDown: g,
            tooltipText: h,
        } = e,
        x =
            null != h
                ? (0, i.jsx)(s.ST, {
                      text: h,
                      position: "top",
                      "aria-label": "string" == typeof h ? h : t,
                      children: (e) => (0, i.jsx)(r.m, { size: "xs", color: "currentColor", className: c.G, ...e }),
                  })
                : null;
    return (0, i.jsxs)("div", {
        className: c.Tp,
        children: [
            (0, i.jsxs)(a.E, { variant: "text-md/medium", className: c.tG, children: [t, x] }),
            (0, i.jsx)("div", {
                className: c.yz,
                children: (0, i.jsx)(a.E, {
                    className: null != u ? c.MB : c.WY,
                    variant: "text-lg/semibold",
                    children: null != u ? u : d.intl.string(d.t.jHpxwo),
                }),
            }),
            (0, i.jsxs)("div", {
                className: c.BP,
                children: [
                    m
                        ? (0, i.jsx)(o.A, {
                              className: c.Tz,
                              color: l.A.unsafe_rawColors.GREEN_360.css,
                              "aria-label": d.intl.string(d.t["8mcccd"]),
                              width: 14,
                              height: 12,
                          })
                        : null,
                    g
                        ? (0, i.jsx)(o.A, {
                              className: c.AL,
                              color: l.A.unsafe_rawColors.RED_400.css,
                              "aria-label": d.intl.string(d.t.NLl6Q3),
                              width: 14,
                              height: 12,
                          })
                        : null,
                    (0, i.jsx)(a.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
        ],
    });
};
