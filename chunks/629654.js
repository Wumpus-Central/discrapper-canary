n.d(t, { Z: () => f });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(607070),
    l = n(667105),
    c = n(211712),
    u = n(388032),
    d = n(19895);
function f(e) {
    let { preset: t, onShuffle: n } = e,
        f = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        _ = (0, l.g2)({ useReducedMotion: f }),
        { name: p, header: h } = i.useMemo(() => {
            let e = (0, c.Ib)(t);
            return {
                name: e.getName(),
                header: e.getHeaderSrc(),
            };
        }, [t]);
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            (0, r.jsx)(o.P3F, {
                onClick: () => {
                    n(), _.startAnimation(!1);
                },
                className: d.button,
                "aria-label": u.intl.string(u.t["44yJxh"]),
                children: _.render(),
            }),
            (0, r.jsxs)(o.P3F, {
                onClick: () => {
                    n(), _.startAnimation(!1);
                },
                "aria-label": "".concat(p, ": ").concat(u.intl.string(u.t["44yJxh"])),
                className: d.select,
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        "aria-hidden": !0,
                        src: h,
                        className: d.presetImage,
                    }),
                    (0, r.jsx)(o.Text, {
                        className: d.presetLabel,
                        variant: "text-sm/bold",
                        color: "always-white",
                        children: p,
                    }),
                ],
            }),
        ],
    });
}
