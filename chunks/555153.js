"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    l = n(554146),
    a = n(534514),
    s = n(834730),
    o = n(352255),
    d = n(782603),
    u = n(428689),
    c = n(7807),
    A = n(932001),
    h = n(49999),
    g = n(985018),
    f = n(632244);
function m(e) {
    let { locked: t } = e,
        [n, m] = (0, A.kn)(t ? [] : [l.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (i.useEffect(() => {
        if (!t && n === l.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === l.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && m(h.i.AUTO_DISMISS);
            };
    }, [t, m, n]),
    t || n !== l.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, r.jsx)("div", {
              className: f.A,
              children: (0, r.jsxs)("div", {
                  className: f.rs,
                  children: [
                      (0, r.jsxs)("div", {
                          className: f.vJ,
                          children: [
                              (0, r.jsx)(a.D, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: g.intl.string(g.t.jzjJQg),
                              }),
                              (0, r.jsx)(s.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: g.intl.string(g.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: f.S1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: f.bS,
                                  children: [
                                      (0, r.jsx)(o.X, {}),
                                      (0, r.jsx)(s.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: g.intl.string(g.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: f.bS,
                                  children: [
                                      (0, r.jsx)(d.X, {}),
                                      (0, r.jsx)(s.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: g.intl.string(g.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: f.bS,
                                  children: [
                                      (0, r.jsx)(u.n, {}),
                                      (0, r.jsx)(s.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: g.intl.string(g.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: f.bS,
                                  children: [
                                      (0, r.jsx)(c.J, {}),
                                      (0, r.jsx)(s.E, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: g.intl.string(g.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
