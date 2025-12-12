n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    o = n(442837),
    a = n(481060),
    s = n(607070),
    l = n(659302),
    c = n(211712),
    u = n(388032),
    d = n(19895);
function f(e) {
    let { preset: t, onShuffle: n } = e,
        f = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        p = (0, l.g2)({ useReducedMotion: f }),
        { name: _, header: m } = i.useMemo(() => {
            let e = (0, c.Ib)(t);
            return {
                name: e.getName(),
                header: e.getHeaderSrc(),
            };
        }, [t]);
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            (0, r.jsx)(a.P3F, {
                onClick: () => {
                    n(), p.startAnimation(!1);
                },
                className: d.button,
                "aria-label": u.intl.string(u.t["44yJxh"]),
                children: p.render(),
            }),
            (0, r.jsxs)(a.P3F, {
                onClick: () => {
                    n(), p.startAnimation(!1);
                },
                "aria-label": "".concat(_, ": ").concat(u.intl.string(u.t["44yJxh"])),
                className: d.select,
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        "aria-hidden": !0,
                        src: m,
                        className: d.presetImage,
                    }),
                    (0, r.jsx)(a.Text, {
                        className: d.presetLabel,
                        variant: "text-sm/bold",
                        color: "always-white",
                        children: _,
                    }),
                ],
            }),
        ],
    });
}
