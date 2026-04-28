"use strict";
n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var i = n(990078),
    s = n(602853),
    a = n(661531),
    r = n(939249),
    o = n(383643);
function c(e) {
    let { onClick: t, Icon: n, "aria-label": c } = e,
        u = (0, s.r)(a.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        d = (0, l.jsx)(n, { color: u.hex(), size: "custom", width: 16, height: 16 });
    return null == t
        ? (0, l.jsx)("div", { className: o.k, "aria-label": c, children: d })
        : (0, l.jsx)(i.m, {
              asContainer: !0,
              text: c,
              children: (0, l.jsx)(r.D, { className: o.k, onClick: t, children: d }),
          });
}
