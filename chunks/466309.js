n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(780384),
    o = n(481060),
    s = n(410030),
    l = n(509545),
    c = n(74538),
    u = n(474936),
    d = n(283102);
let f = function (e) {
    let { isGift: t = !1, priceOptions: n } = e,
        f = (0, i.e7)([l.Z], () => l.Z.get(u.Xh.PREMIUM_GROUP_MONTH)),
        p = (0, a.ap)((0, s.ZP)());
    if (null == f)
        return (0, r.jsx)(o.$jN, {
            type: o.$jN.Type.PULSING_ELLIPSIS,
            className: d.priceSpinner,
        });
    let _ = (0, c.gy)(f, n, !1, t),
        m = u.rV.MONTH,
        h = p ? "text-strong" : "always-white";
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.Text, {
                variant: "heading-xxl/extrabold",
                color: h,
                tag: "span",
                children: _,
            }),
            (0, r.jsxs)(o.Text, {
                variant: "text-xs/medium",
                tag: "span",
                color: "text-muted",
                children: ["/", (0, c.eP)(m)],
            }),
        ],
    });
};
