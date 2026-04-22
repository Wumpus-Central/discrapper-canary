n.d(t, { d: () => d });
var i = n(627968);
n(64700);
var a = n(990078),
    r = n(307301),
    l = n(834730),
    s = n(939249),
    o = n(783931);
function d(e) {
    let { text: t, tooltipText: n, onClick: d, disabled: c } = e;
    return c
        ? (0, i.jsxs)("div", {
              className: o.k,
              children: [
                  (0, i.jsx)(r.j, { size: "md", color: "currentColor", className: o.K }),
                  (0, i.jsx)(l.E, { color: "interactive-text-active", variant: "text-md/semibold", children: t }),
              ],
          })
        : (0, i.jsx)(a.m, {
              text: n,
              shouldShow: null != n,
              children: (0, i.jsxs)(s.D, {
                  className: o.k,
                  onClick: d,
                  children: [
                      (0, i.jsx)(r.j, { size: "md", color: "currentColor", className: o.K }),
                      (0, i.jsx)(l.E, { color: "interactive-text-active", variant: "text-md/semibold", children: t }),
                  ],
              }),
          });
}
