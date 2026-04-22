"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(990078),
    s = n(602853),
    r = n(827734),
    a = n(939249),
    o = n(383643);
function c(e) {
    let { onClick: t, Icon: n, "aria-label": c } = e,
        u = (0, s.r)(r.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        d = (0, i.jsx)(n, { color: u.hex(), size: "custom", width: 16, height: 16 });
    return null == t
        ? (0, i.jsx)("div", { className: o.k, "aria-label": c, children: d })
        : (0, i.jsx)(l.m, {
              asContainer: !0,
              text: c,
              children: (0, i.jsx)(a.D, { className: o.k, onClick: t, children: d }),
          });
}
