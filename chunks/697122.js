n.d(t, { Q: () => h });
var i = n(627968),
    l = n(503698),
    a = n.n(l),
    s = n(990078),
    r = n(939249),
    o = n(22231),
    c = n(396787),
    d = n(985018),
    u = n(817789);
function h(e) {
    let { channel: t, children: n, className: l, editable: h, location: m } = e;
    return h
        ? (0, i.jsx)(s.m, {
              position: "bottom",
              text: d.intl.string(d.t["0qPSMV"]),
              children: (0, i.jsxs)(r.D, {
                  className: a()(u.e, l),
                  onClick: () => (0, c.jv)(t.id, m),
                  children: [
                      n,
                      (0, i.jsx)("div", {
                          className: u.Z,
                          children: (0, i.jsx)(o.R, { size: "xs", color: "currentColor" }),
                      }),
                  ],
              }),
          })
        : (0, i.jsx)("div", { className: l, children: n });
}
