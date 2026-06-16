"use strict";
n.d(t, { A: () => u });
var l = n(627968);
n(64700);
var i = n(990078),
    r = n(602853),
    s = n(661531),
    a = n(939249),
    o = n(383643);
function u(e) {
    let { onClick: t, Icon: n, "aria-label": u } = e,
        c = (0, r.r)(s.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        d = (0, l.jsx)(n, { color: c.hex(), size: "custom", width: 16, height: 16 });
    return null == t
        ? (0, l.jsx)("div", { className: o.k, "aria-label": u, children: d })
        : (0, l.jsx)(i.m, {
              asContainer: !0,
              text: u,
              children: (0, l.jsx)(a.D, { className: o.k, onClick: t, children: d }),
          });
}
