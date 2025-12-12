n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(120356),
    o = n.n(i),
    a = n(793030),
    s = n(302221),
    l = n(553896),
    c = n(848572),
    u = n(787528),
    d = n(388032),
    f = n(726185);
let p = (e, t) =>
        (null == e ? void 0 : e.status) === c.Vq.EARNED
            ? d.intl.format(d.t.Hu4jfi, { date: null != t ? t : new Date() })
            : (null == e ? void 0 : e.status) === c.Vq.UPCOMING
              ? d.intl.format(d.t.E85fll, {
                    date: null != t ? t : new Date(),
                    days: e.daysLeft,
                })
              : null,
    _ = () => {
        var e;
        let t = (0, c.Rw)(),
            n = null != (e = (0, c.GG)()) ? e : new Date(),
            i = (0, u.u)(null == t ? void 0 : t.id);
        if (null == t || null == i) return null;
        let { id: _, nameUnformatted: m, tenureReqNumMonths: h, hasWideArt: g } = t,
            E = d.intl.string(m),
            b = (0, l.q)(_, h),
            y = { "--custom-badge-glow-color": (0, s.rj)(t.glowColor, 0.5) };
        return (0, r.jsxs)("div", {
            className: f.container,
            style: y,
            children: [
                (0, r.jsx)("div", {}),
                " ",
                (0, r.jsx)("img", {
                    src: i,
                    alt: E,
                    className: o()(f.badgeImage, {
                        [f.upcomingBadge]: t.status === c.Vq.UPCOMING,
                        [f.wide]: g,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: f.textColumn,
                    children: [
                        (0, r.jsx)(a.xvT, {
                            variant: "text-lg/semibold",
                            className: f.badgeText,
                            children: E,
                        }),
                        (0, r.jsx)(a.xvT, {
                            variant: "text-md/normal",
                            className: f.badgeText,
                            children: b,
                        }),
                        (0, r.jsx)(a.xvT, {
                            variant: "text-xs/normal",
                            children: p(t, n),
                        }),
                    ],
                }),
            ],
        });
    };
