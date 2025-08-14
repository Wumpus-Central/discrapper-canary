n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(793030),
    l = n(302221),
    o = n(553896),
    c = n(848572),
    d = n(787528),
    u = n(388032),
    m = n(726185);
let p = () => {
    var e;
    let t = (0, c.Rw)(),
        n = null != (e = (0, c.GG)()) ? e : new Date(),
        r = (0, d.u)(null == t ? void 0 : t.id);
    if (null == t || null == r) return null;
    let { id: p, nameUnformatted: g, tenureReqNumMonths: h, hasWideArt: f } = t,
        b = u.intl.string(g),
        x = (0, o.q)(p, h),
        _ = { "--custom-badge-glow-color": (0, l.rj)(t.glowColor, 0.5) };
    return (0, i.jsxs)("div", {
        className: m.container,
        style: _,
        children: [
            (0, i.jsx)("div", {}),
            " ",
            (0, i.jsx)("img", {
                src: r,
                alt: b,
                className: s()(m.badgeImage, {
                    [m.upcomingBadge]: t.status === c.Vq.UPCOMING,
                    [m.wide]: f,
                }),
            }),
            (0, i.jsxs)("div", {
                className: m.textColumn,
                children: [
                    (0, i.jsx)(a.xv, {
                        variant: "text-lg/semibold",
                        className: m.badgeText,
                        children: b,
                    }),
                    (0, i.jsx)(a.xv, {
                        variant: "text-md/normal",
                        className: m.badgeText,
                        children: x,
                    }),
                    (0, i.jsx)(a.xv, {
                        variant: "text-xs/normal",
                        children:
                            (null == t ? void 0 : t.status) === c.Vq.EARNED
                                ? u.intl.format(u.t.Hu4jfn, { date: null != n ? n : new Date() })
                                : (null == t ? void 0 : t.status) === c.Vq.UPCOMING
                                  ? u.intl.format(u.t.E85flp, {
                                        date: null != n ? n : new Date(),
                                        days: t.daysLeft,
                                    })
                                  : null,
                    }),
                ],
            }),
        ],
    });
};
