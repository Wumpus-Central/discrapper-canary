"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(827734),
    l = n(397927),
    r = n(774474),
    a = n(985018),
    o = n(233593);
let d = (e) => {
    let {
            title: t,
            subtext: n = a.intl.string(a.t.jHpxwo),
            localizedNumber: d,
            isTrendingUp: c,
            isTrendingDown: u,
            tooltipText: m,
        } = e,
        g =
            null != m
                ? (0, i.jsx)(l.STz, {
                      text: m,
                      position: "top",
                      "aria-label": "string" == typeof m ? m : t,
                      children: (e) => (0, i.jsx)(l.mir, { size: "xs", color: "currentColor", className: o.G, ...e }),
                  })
                : null;
    return (0, i.jsxs)("div", {
        className: o.Tp,
        children: [
            (0, i.jsxs)(l.Text, { variant: "text-md/medium", className: o.tG, children: [t, g] }),
            (0, i.jsx)("div", {
                className: o.yz,
                children: (0, i.jsx)(l.Text, {
                    className: null != d ? o.MB : o.WY,
                    variant: "text-lg/semibold",
                    children: null != d ? d : a.intl.string(a.t.jHpxwo),
                }),
            }),
            (0, i.jsxs)("div", {
                className: o.BP,
                children: [
                    c
                        ? (0, i.jsx)(r.A, {
                              className: o.Tz,
                              color: s.A.unsafe_rawColors.GREEN_360.css,
                              "aria-label": a.intl.string(a.t["8mcccd"]),
                              width: 14,
                              height: 12,
                          })
                        : null,
                    u
                        ? (0, i.jsx)(r.A, {
                              className: o.AL,
                              color: s.A.unsafe_rawColors.RED_400.css,
                              "aria-label": a.intl.string(a.t.NLl6Q3),
                              width: 14,
                              height: 12,
                          })
                        : null,
                    (0, i.jsx)(l.Text, { variant: "text-xs/normal", children: n }),
                ],
            }),
        ],
    });
};
