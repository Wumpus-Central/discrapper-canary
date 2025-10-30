n.d(t, { v: () => d });
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    a = n(28664),
    o = n(481060),
    s = n(140106),
    c = n(388032),
    u = n(827723);
function d(e) {
    let { channel: t, children: n, className: i, editable: d, location: p } = e;
    return d
        ? (0, r.jsx)(a.u, {
              position: "bottom",
              text: c.intl.string(c.t["0qPSMV"]),
              children: (0, r.jsxs)(o.P3F, {
                  className: l()(u.editableGdmIcon, i),
                  onClick: () => (0, s.P5)(t.id, p),
                  children: [
                      n,
                      (0, r.jsx)("div", {
                          className: u.editableGdmIconIndicator,
                          children: (0, r.jsx)(o.vdY, {
                              size: "xs",
                              color: "currentColor",
                          }),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)("div", {
              className: i,
              children: n,
          });
}
