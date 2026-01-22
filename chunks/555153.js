n.d(t, {
    A: () => d,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(554146),
    a = n(397927),
    o = n(379848),
    s = n(49999),
    c = n(985018),
    u = n(477545);

function d(e) {
    let { locked: t } = e,
        [n, d] = (0, o.kn)(t ? [] : [l.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (r.useEffect(() => {
        if (!t && n === l.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === l.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && d(s.i.AUTO_DISMISS);
            };
    }, [t, d, n]),
    t || n !== l.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, i.jsx)("div", {
              className: u.A,
              children: (0, i.jsxs)("div", {
                  className: u.rs,
                  children: [
                      (0, i.jsxs)("div", {
                          className: u.vJ,
                          children: [
                              (0, i.jsx)(a.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: c.intl.string(c.t.jzjJQg),
                              }),
                              (0, i.jsx)(a.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: c.intl.string(c.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: u.S1,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: u.bS,
                                  children: [
                                      (0, i.jsx)(a.XeY, {}),
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: c.intl.string(c.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: u.bS,
                                  children: [
                                      (0, i.jsx)(a.XFE, {}),
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: c.intl.string(c.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: u.bS,
                                  children: [
                                      (0, i.jsx)(a.npA, {}),
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: c.intl.string(c.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: u.bS,
                                  children: [
                                      (0, i.jsx)(a.JMI, {}),
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: c.intl.string(c.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
