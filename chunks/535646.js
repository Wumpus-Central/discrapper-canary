n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(775602),
    l = n(201805),
    c = n(461797),
    u = n(985018),
    d = n(428208);

function f(e) {
    let { preset: t, onShuffle: n } = e,
        f = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        p = (0, l.Xf)({
            useReducedMotion: f,
        }),
        { name: _, header: h } = i.useMemo(() => {
            let e = (0, c.Wt)(t);
            return {
                name: e.getName(),
                header: e.getHeaderSrc(),
            };
        }, [t]);
    return (0, r.jsxs)("div", {
        className: d.kL,
        children: [
            (0, r.jsx)(s.DUT, {
                onClick: () => {
                    n(), p.startAnimation(!1);
                },
                className: d.x6,
                "aria-label": u.intl.string(u.t["44yJxh"]),
                children: p.render(),
            }),
            (0, r.jsxs)(s.DUT, {
                onClick: () => {
                    n(), p.startAnimation(!1);
                },
                "aria-label": "".concat(_, ": ").concat(u.intl.string(u.t["44yJxh"])),
                className: d.Lt,
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        "aria-hidden": !0,
                        src: h,
                        className: d.L_,
                    }),
                    (0, r.jsx)(s.Text, {
                        className: d._e,
                        variant: "text-sm/bold",
                        color: "always-white",
                        children: _,
                    }),
                ],
            }),
        ],
    });
}
