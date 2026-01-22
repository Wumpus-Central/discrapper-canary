n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(110259),
    s = n(877624),
    o = n(397927),
    c = n(139286),
    u = n(887345);
function d(e) {
    let { componentId: t, badgeCopy: n, acknowledgedBadgeCopy: i, isDismissed: d } = e;
    return ((0, c.A)({
        type: a.ImpressionTypes.VIEW,
        name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: s.C.PREMIUM_TAB,
            component_id: t,
        },
    }),
    d)
        ? (0, r.jsxs)("div", {
              className: l()(u.BE, u.ZA),
              children: [
                  (0, r.jsx)(o.O4, {
                      size: "custom",
                      width: 10,
                      height: 10,
                      color: "currentColor",
                      className: u.P0,
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: i,
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: l()(u.BE, u.CU),
              children: (0, r.jsx)(o.Text, {
                  variant: "eyebrow",
                  className: u.lI,
                  children: n,
              }),
          });
}
