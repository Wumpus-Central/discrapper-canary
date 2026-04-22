n.d(t, { W: () => m });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(265872),
    o = n(123292),
    d = n(662232),
    u = n(985018),
    c = n(290280),
    g = n(818050);
let m = () => {
    let e = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: a()(c.a, g.Gf),
        children: [
            (0, i.jsx)("span", { children: u.intl.string(u.t.xwhoqM) }),
            (0, i.jsx)(r.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(d.A, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, i.jsx)(o.Q, {
                        ...t,
                        buttonRef: e,
                        variant: "primary",
                        textVariant: "text-sm/medium",
                        text: u.intl.string(u.t.GjgdXe),
                    }),
            }),
        ],
    });
};
