"use strict";
n.d(t, { A: () => d });
var i = n(477900);
n(582128);
var r = n(602853),
    a = n(661531),
    s = n(866665),
    l = n(939249),
    o = n(847155);
function d(e) {
    let { onClick: t, Icon: n, "aria-label": d } = e,
        c = (0, r.r)(a.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        u = (0, i.jsx)(n, { color: c.hex(), size: "custom", width: 16, height: 16 });
    return null == t
        ? (0, i.jsx)("div", { className: o.k, "aria-label": d, children: u })
        : (0, i.jsx)(s.m, {
              asContainer: !0,
              text: d,
              children: (0, i.jsx)(l.D, { className: o.k, onClick: t, children: u }),
          });
}
