n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(28664),
    a = n(481060),
    o = n(755947);
function s(e) {
    let { onClick: t, Icon: n, "aria-label": s } = e,
        l = (0, a.dQu)(a.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        c = (0, r.jsx)(n, {
            color: l.hex(),
            size: "custom",
            width: 16,
            height: 16,
        });
    return null == t
        ? (0, r.jsx)("div", {
              className: o.container,
              "aria-label": s,
              children: c,
          })
        : (0, r.jsx)(i.u, {
              asContainer: !0,
              text: s,
              children: (0, r.jsx)(a.P3F, {
                  className: o.container,
                  onClick: t,
                  children: c,
              }),
          });
}
