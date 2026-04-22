n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(276293),
    r = n(834730),
    a = n(821609),
    o = n(47167),
    d = n(713654),
    c = n(199940),
    u = n(985018),
    m = n(327084);
let g = function (e) {
    let { channel: t, end: n } = e,
        g = (0, o.Ay)(t),
        h = l.useCallback(() => {
            (0, c.px)({ channelId: t.id, title: g ?? "", description: "", emoji: null, icon: null });
        }, [t, g]),
        x = (0, d.gU)(t) ?? s.N;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: m.TG,
                children: [
                    (0, i.jsx)(x, { className: m.cC }),
                    (0, i.jsx)(r.E, { className: m.g7, variant: "text-sm/normal", children: g }),
                    (0, i.jsx)(a.$, { size: "sm", variant: "primary", onClick: h, text: u.intl.string(u.t.OYkgVk) }),
                ],
            }),
            n && (0, i.jsx)("div", { className: m.p3 }),
        ],
    });
};
