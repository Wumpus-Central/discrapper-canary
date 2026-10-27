n.d(t, { A: () => o });
var l = n(477900);
n(582128);
var r = n(602853),
    a = n(661531),
    s = n(866665),
    i = n(939249),
    c = n(963966);
function o(e) {
    let { onClick: t, Icon: n, "aria-label": o } = e,
        u = (0, r.r)(a.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        d = (0, l.jsx)(n, { color: u.hex(), size: "custom", width: 16, height: 16 });
    return null == t
        ? (0, l.jsx)("div", { className: c.k, "aria-label": o, children: d })
        : (0, l.jsx)(s.m, {
              asContainer: !0,
              text: o,
              children: (0, l.jsx)(i.D, { className: c.k, onClick: t, children: d }),
          });
}
