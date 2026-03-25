n.d(t, { W: () => m });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(662232),
    d = n(985018),
    c = n(434191),
    u = n(473169);
let m = () => {
    let e = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: a()(c.a, u.Gf),
        children: [
            (0, i.jsx)("span", { children: d.intl.string(d.t.xwhoqM) }),
            (0, i.jsx)(r.YNO, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(o.A, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, i.jsx)(r.QWc, {
                        ...t,
                        buttonRef: e,
                        variant: "primary",
                        textVariant: "text-sm/medium",
                        text: d.intl.string(d.t.GjgdXe),
                    }),
            }),
        ],
    });
};
