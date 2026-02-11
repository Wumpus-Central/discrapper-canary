n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(397927),
    r = n(775602),
    o = n(201805),
    c = n(461797),
    d = n(985018),
    u = n(25470);
function _(e) {
    let { preset: t, onShuffle: n } = e,
        _ = (0, a.bG)([r.A], () => r.A.useReducedMotion),
        m = (0, o.Xf)({ useReducedMotion: _ }),
        { name: A, header: g } = s.useMemo(() => {
            let e = (0, c.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, i.jsxs)("div", {
        className: u.kL,
        children: [
            (0, i.jsx)(l.DUT, {
                onClick: () => {
                    n(), m.startAnimation(!1);
                },
                className: u.x6,
                "aria-label": d.intl.string(d.t["44yJxh"]),
                children: m.render(),
            }),
            (0, i.jsxs)(l.DUT, {
                onClick: () => {
                    n(), m.startAnimation(!1);
                },
                "aria-label": `${A}: ${d.intl.string(d.t["44yJxh"])}`,
                className: u.Lt,
                children: [
                    (0, i.jsx)("img", { alt: "", "aria-hidden": !0, src: g, className: u.L_ }),
                    (0, i.jsx)(l.Text, {
                        className: u._e,
                        variant: "text-sm/bold",
                        color: "always-white",
                        children: A,
                    }),
                ],
            }),
        ],
    });
}
