a.d(t, { k: () => v });
var l = a(477900);
a(582128);
var r = a(503698),
    s = a.n(r),
    n = a(17928),
    i = a(834730),
    o = a(97808),
    d = a(778712),
    u = a(287809),
    c = a(562153),
    m = a(796966),
    h = a(870087);
let p = { 1: h.Xe, 2: h.XQ, 3: h.c9 };
function g(e) {
    return 1 === e || 2 === e || 3 === e;
}
function v(e) {
    let { guildId: t, entry: a } = e,
        r = a.user_id,
        v = (0, n.bG)([u.default], () => u.default.getUser(r), [r]),
        b = (0, n.bG)([u.default], () => u.default.getCurrentUser()?.id),
        _ = c.Ay.useName(t, void 0, v),
        f = null != v && "" !== _ ? _ : a.name,
        y = null != b && b === r,
        x = y ? `${f} ${m.l.viewerSuffix}` : f;
    return (0, l.jsxs)("tr", {
        className: s()(h.nM, { [h._z]: y }),
        children: [
            (0, l.jsx)("td", {
                className: h.Jt,
                children: (0, l.jsx)(i.E, {
                    variant: "text-sm/semibold",
                    color: g(a.rank) ? "none" : "text-subtle",
                    className: g(a.rank) ? p[a.rank] : void 0,
                    children: a.rank,
                }),
            }),
            (0, l.jsx)("td", {
                className: h.if,
                children: (0, l.jsxs)("div", {
                    className: h.kQ,
                    children: [
                        (0, l.jsx)(o.eu, { size: d._3.SIZE_32, src: v?.getAvatarURL(t, 32), "aria-hidden": !0 }),
                        (0, l.jsx)(i.E, {
                            variant: "text-md/semibold",
                            color: "text-subtle",
                            className: h.UU,
                            children: x,
                        }),
                    ],
                }),
            }),
            (0, l.jsx)("td", {
                className: h.nP,
                children: (0, l.jsx)(i.E, { variant: "text-md/semibold", color: "text-subtle", children: a.value }),
            }),
            (0, l.jsx)("td", {
                className: h.nP,
                children: (0, l.jsx)(i.E, {
                    variant: "text-md/semibold",
                    color: "text-subtle",
                    children: a.application_ids.length,
                }),
            }),
        ],
    });
}
