n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(939249),
    r = n(834730),
    o = n(775602),
    d = n(201805),
    u = n(461797),
    c = n(985018),
    g = n(674253);
function m(e) {
    let { preset: t, onShuffle: n } = e,
        m = (0, l.bG)([o.A], () => o.A.useReducedMotion),
        _ = (0, d.Xf)({ useReducedMotion: m }),
        { name: A, header: h } = s.useMemo(() => {
            let e = (0, u.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)(a.D, {
                onClick: () => {
                    n(), _.startAnimation(!1);
                },
                className: g.x6,
                "aria-label": c.intl.string(c.t["44yJxh"]),
                children: _.render(),
            }),
            (0, i.jsxs)(a.D, {
                onClick: () => {
                    n(), _.startAnimation(!1);
                },
                "aria-label": `${A}: ${c.intl.string(c.t["44yJxh"])}`,
                className: g.Lt,
                children: [
                    (0, i.jsx)("img", { alt: "", "aria-hidden": !0, src: h, className: g.L_ }),
                    (0, i.jsx)(r.E, { className: g._e, variant: "text-sm/bold", color: "always-white", children: A }),
                ],
            }),
        ],
    });
}
