"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(990078),
    s = n(397927),
    a = n(54834);
function o(e) {
    let { onClick: t, Icon: n, "aria-label": o } = e,
        l = (0, s.rdh)(s.LU0.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        u = (0, r.jsx)(n, { color: l.hex(), size: "custom", width: 16, height: 16 });
    return null == t
        ? (0, r.jsx)("div", { className: a.k, "aria-label": o, children: u })
        : (0, r.jsx)(i.m, {
              asContainer: !0,
              text: o,
              children: (0, r.jsx)(s.DUT, { className: a.k, onClick: t, children: u }),
          });
}
