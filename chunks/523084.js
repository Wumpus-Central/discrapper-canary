a.d(t, { A: () => p });
var n = a(627968),
    r = a(64700),
    i = a(106778),
    s = a(17928),
    l = a(935462),
    c = a(534514),
    o = a(834730),
    d = a(775602),
    u = a(524246),
    m = a(14368),
    f = a(372165);
function p(e) {
    let { title: t, description: a, image: p, button: _, ...v } = e,
        x = (0, s.bG)([d.A], () => d.A.useReducedMotion),
        g = r.useRef(null),
        h = r.useRef(new i.OH()),
        [b, C] = r.useState(null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.Fk, { ref: C, className: f.Lb, environment: h.current }),
            (0, n.jsxs)(l.EO, {
                "data-migration-pending": !0,
                className: f.yl,
                size: l.rI.DYNAMIC,
                ...v,
                parentComponent: "GuildPowerupActivateModal",
                children: [
                    (0, n.jsx)(l.$m, {
                        "data-migration-pending": !0,
                        className: f._F,
                        scrollbarType: "none",
                        children: (0, n.jsxs)("div", {
                            className: f.kL,
                            ref: g,
                            children: [
                                p,
                                (0, n.jsxs)("div", {
                                    className: f.hQ,
                                    children: [
                                        (0, n.jsx)(c.D, { variant: "heading-xl/extrabold", children: t }),
                                        null != a &&
                                            (0, n.jsx)(o.E, {
                                                tag: "span",
                                                className: f.h_,
                                                variant: "text-sm/normal",
                                                children: a,
                                            }),
                                        _,
                                    ],
                                }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(l.s_, { "data-migration-pending": !0, className: f.VN, onClick: v.onClose }),
                    !x && (0, n.jsx)(u.A, { confettiTarget: g.current, confettiCanvas: b, sprites: (0, m.rA)() }),
                ],
            }),
        ],
    });
}
