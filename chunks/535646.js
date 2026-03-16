n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(775602),
    o = n(201805),
    d = n(461797),
    c = n(985018),
    u = n(428208);
function _(e) {
    let { preset: t, onShuffle: n } = e,
        _ = (0, l.bG)([a.A], () => a.A.useReducedMotion),
        m = (0, o.Xf)({ useReducedMotion: _ }),
        { name: g, header: A } = s.useMemo(() => {
            let e = (0, d.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, i.jsxs)("div", {
        className: u.kL,
        children: [
            (0, i.jsx)(r.DUT, {
                onClick: () => {
                    n(), m.startAnimation(!1);
                },
                className: u.x6,
                "aria-label": c.intl.string(c.t["44yJxh"]),
                children: m.render(),
            }),
            (0, i.jsxs)(r.DUT, {
                onClick: () => {
                    n(), m.startAnimation(!1);
                },
                "aria-label": `${g}: ${c.intl.string(c.t["44yJxh"])}`,
                className: u.Lt,
                children: [
                    (0, i.jsx)("img", { alt: "", "aria-hidden": !0, src: A, className: u.L_ }),
                    (0, i.jsx)(r.Text, {
                        className: u._e,
                        variant: "text-sm/bold",
                        color: "always-white",
                        children: g,
                    }),
                ],
            }),
        ],
    });
}
