n.d(t, { d: () => a });
var i = n(627968);
n(64700);
var s = n(990078),
    l = n(397927),
    r = n(145400);
function a(e) {
    let { text: t, tooltipText: n, onClick: a, disabled: c } = e;
    return c
        ? (0, i.jsxs)("div", {
              className: r.k,
              children: [
                  (0, i.jsx)(l.j96, { size: "md", color: "currentColor", className: r.K }),
                  (0, i.jsx)(l.Text, { color: "interactive-text-active", variant: "text-md/semibold", children: t }),
              ],
          })
        : (0, i.jsx)(s.m, {
              text: n,
              shouldShow: null != n,
              children: (0, i.jsxs)(l.DUT, {
                  className: r.k,
                  onClick: a,
                  children: [
                      (0, i.jsx)(l.j96, { size: "md", color: "currentColor", className: r.K }),
                      (0, i.jsx)(l.Text, {
                          color: "interactive-text-active",
                          variant: "text-md/semibold",
                          children: t,
                      }),
                  ],
              }),
          });
}
