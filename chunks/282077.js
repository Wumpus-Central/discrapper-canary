a.d(l, { A: () => v });
var t = a(627968);
a(64700);
var s = a(503698),
    i = a.n(s),
    n = a(110259),
    c = a(877624),
    h = a(406810),
    r = a(834730),
    o = a(139286),
    d = a(303816);
function v(e) {
    let { componentId: l, badgeCopy: a, acknowledgedBadgeCopy: s, isDismissed: v } = e;
    return ((0, o.A)({
        type: n.ImpressionTypes.VIEW,
        name: n.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: c.C.PREMIUM_TAB, component_id: l },
    }),
    v)
        ? (0, t.jsxs)("div", {
              className: i()(d.BE, d.ZA),
              children: [
                  (0, t.jsx)(h.O, { size: "custom", width: 10, height: 10, color: "currentColor", className: d.P0 }),
                  (0, t.jsx)(r.E, { variant: "eyebrow", color: "text-subtle", children: s }),
              ],
          })
        : (0, t.jsx)("div", {
              className: i()(d.BE, d.CU),
              children: (0, t.jsx)(r.E, { variant: "eyebrow", className: d.lI, children: a }),
          });
}
