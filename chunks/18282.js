n.d(t, { A: () => c });
var l = n(477900);
n(582128);
var r = n(602853),
    a = n(661531),
    s = n(866665),
    i = n(939249),
    o = n(963966);
function c(e) {
    let { onClick: t, Icon: n, "aria-label": c } = e,
        d = (0, r.r)(a.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        u = (0, l.jsx)(n, { color: d.hex(), size: "custom", width: 16, height: 16 });
    return null == t
        ? (0, l.jsx)("div", { className: o.k, "aria-label": c, children: u })
        : (0, l.jsx)(s.m, {
              asContainer: !0,
              text: c,
              children: (0, l.jsx)(i.D, { className: o.k, onClick: t, children: u }),
          });
}
