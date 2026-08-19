t.d(n, { d: () => c });
var i = t(477900);
t(582128);
var l = t(307301),
    r = t(834730),
    s = t(866665),
    a = t(939249),
    o = t(669075);
function c(e) {
    let { text: n, tooltipText: t, onClick: c, disabled: d } = e;
    return d
        ? (0, i.jsxs)("div", {
              className: o.k,
              children: [
                  (0, i.jsx)(l.j, { size: "md", color: "currentColor", className: o.K }),
                  (0, i.jsx)(r.E, { color: "interactive-text-active", variant: "text-md/semibold", children: n }),
              ],
          })
        : (0, i.jsx)(s.m, {
              text: t,
              shouldShow: null != t,
              children: (0, i.jsxs)(a.D, {
                  className: o.k,
                  onClick: c,
                  children: [
                      (0, i.jsx)(l.j, { size: "md", color: "currentColor", className: o.K }),
                      (0, i.jsx)(r.E, { color: "interactive-text-active", variant: "text-md/semibold", children: n }),
                  ],
              }),
          });
}
