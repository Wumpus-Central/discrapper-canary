var l = t(477900);
t(582128);
var r = t(602853),
    a = t(646514),
    i = t(866665),
    s = t(939249),
    o = t(963966);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { onClick: n, Icon: t, "aria-label": u } = e,
                c = (0, r.r)(a.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
                d = (0, l.jsx)(t, { color: c.hex(), size: "custom", width: 16, height: 16 });
            return null == n
                ? (0, l.jsx)("div", { className: o.k, "aria-label": u, children: d })
                : (0, l.jsx)(i.m, {
                      asContainer: !0,
                      text: u,
                      children: (0, l.jsx)(s.D, { className: o.k, onClick: n, children: d }),
                  });
        },
    },
);
