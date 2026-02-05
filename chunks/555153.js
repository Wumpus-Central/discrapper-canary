n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    a = n(554146),
    s = n(397927),
    r = n(379848),
    o = n(49999),
    d = n(985018),
    u = n(477545);
function c(e) {
    let { locked: t } = e,
        [n, c] = (0, r.kn)(t ? [] : [a.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (l.useEffect(() => {
        if (!t && n === a.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === a.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && c(o.i.AUTO_DISMISS);
            };
    }, [t, c, n]),
    t || n !== a.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, i.jsx)("div", {
              className: u.A,
              children: (0, i.jsxs)("div", {
                  className: u.rs,
                  children: [
                      (0, i.jsxs)("div", {
                          className: u.vJ,
                          children: [
                              (0, i.jsx)(s.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: d.intl.string(d.t.jzjJQg),
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: d.intl.string(d.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: u.S1,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: u.bS,
                                  children: [
                                      (0, i.jsx)(s.XeY, {}),
                                      (0, i.jsx)(s.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: d.intl.string(d.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: u.bS,
                                  children: [
                                      (0, i.jsx)(s.XFE, {}),
                                      (0, i.jsx)(s.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: d.intl.string(d.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: u.bS,
                                  children: [
                                      (0, i.jsx)(s.npA, {}),
                                      (0, i.jsx)(s.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: d.intl.string(d.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: u.bS,
                                  children: [
                                      (0, i.jsx)(s.JMI, {}),
                                      (0, i.jsx)(s.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-text-default",
                                          children: d.intl.string(d.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
