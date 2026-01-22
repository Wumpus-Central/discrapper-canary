n.d(t, { Q: () => d });
var r = n(627968),
    l = n(503698),
    i = n.n(l),
    a = n(990078),
    s = n(397927),
    o = n(396787),
    c = n(985018),
    u = n(876872);
function d(e) {
    let { channel: t, children: n, className: l, editable: d, location: f } = e;
    return d
        ? (0, r.jsx)(a.m, {
              position: "bottom",
              text: c.intl.string(c.t["0qPSMV"]),
              children: (0, r.jsxs)(s.DUT, {
                  className: i()(u.e, l),
                  onClick: () => (0, o.jv)(t.id, f),
                  children: [
                      n,
                      (0, r.jsx)("div", {
                          className: u.Z,
                          children: (0, r.jsx)(s.R2l, {
                              size: "xs",
                              color: "currentColor",
                          }),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)("div", {
              className: l,
              children: n,
          });
}
