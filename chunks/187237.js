n.d(t, { v: () => d });
var i = n(54381),
    r = n(120356),
    l = n.n(r),
    a = n(28664),
    o = n(481060),
    s = n(140106),
    c = n(388032),
    u = n(79556);
function d(e) {
    let { channel: t, children: n, className: r, editable: d, location: p } = e;
    return d
        ? (0, i.jsx)(a.u, {
              position: "bottom",
              text: c.intl.string(c.t["0qPSMV"]),
              children: (0, i.jsxs)(o.P3F, {
                  className: l()(u.editableGdmIcon, r),
                  onClick: () => (0, s.P5)(t.id, p),
                  children: [
                      n,
                      (0, i.jsx)("div", {
                          className: u.editableGdmIconIndicator,
                          children: (0, i.jsx)(o.vdY, {
                              size: "xs",
                              color: "currentColor",
                          }),
                      }),
                  ],
              }),
          })
        : (0, i.jsx)("div", {
              className: r,
              children: n,
          });
}
