var n = i(391973),
    d = i(934058),
    h = i(83880),
    l = i(531685),
    a = i(5463),
    r = i(365971),
    u = i(897720),
    o = i(667419),
    s = i(545807),
    c = i(856988),
    p = i(644434),
    f = i(652215);
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.A;
    for (let i of t.getWidgetsByTypeAndLayout(f.uss.CONJURE, p.GJ))
        if ((0, u.Du)(i) && i.meta.applicationId === e) return i;
}
function m(e, t) {
    let i = g(e);
    if (null != i) {
        ((0, n.sx)([i.id], t), t || (0, n.uD)(i.id));
        return;
    }
    if (!t) return;
    let h = d.A.getProject(e);
    null != h && w(h, !0);
}
function w(e, t, i) {
    let d = h.A.getWidgetDefaultSettings(f.uss.CONJURE);
    if (null == d) return;
    (0, o.j$)();
    let u = l.A.windowSize((0, r.Q2)((0, s.b)())),
        { create: g } = (0, c.c3)({
            layoutId: p.GJ,
            listed: [e],
            existing: [],
            layoutSize: u,
            defaultSettings: d,
            removable: { owned: !1, server: !1 },
        });
    (0, n.uF)(
        g.map((e) => {
            var n, d;
            let { width: l, height: r } = e.size,
                o =
                    null != i &&
                    "number" == typeof l &&
                    "number" == typeof r &&
                    i.top >= 0 &&
                    i.left >= 0 &&
                    i.top + r <= u.height &&
                    i.left + l <= u.width &&
                    ((n = i.top),
                    (d = i.left),
                    !h.A.getWidgetsForLayout(p.GJ).some((e) => {
                        if (e.hidden || "number" != typeof e.size.width || "number" != typeof e.size.height) return !1;
                        let t = (0, a.NR)(e.anchor, e.size, u),
                            i = u.width - t.right,
                            h = u.height - t.bottom;
                        return d < i && t.left < d + l && n < h && t.top < n + r;
                    }))
                        ? (0, a.NO)(i, u)
                        : e.anchor;
            return { ...e, anchor: o, hidden: t };
        }),
    );
}
i.d(
    t,
    {},
    {
        $5: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.A;
            return g(e, t)?.hidden === !0;
        },
        $x: function (e, t) {
            let i = e.application_id;
            null != g(i) ? m(i, !1) : w(e, !1, t);
        },
        ht: m,
    },
);
