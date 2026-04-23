a.d(t, { A: () => _ });
var n = a(627968),
    r = a(64700),
    i = a(106778),
    s = a(17928),
    o = a(935462),
    l = a(534514),
    d = a(834730),
    c = a(775602),
    u = a(524246),
    p = a(14368),
    m = a(372165);
function _(e) {
    let { title: t, description: a, image: _, button: f, ...x } = e,
        v = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        g = r.useRef(null),
        h = r.useRef(new i.OH()),
        [k, b] = r.useState(null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.Fk, { ref: b, className: m.Lb, environment: h.current }),
            (0, n.jsxs)(o.EO, {
                "data-migration-pending": !0,
                className: m.yl,
                size: o.rI.DYNAMIC,
                ...x,
                parentComponent: "GuildPowerupActivateModal",
                children: [
                    (0, n.jsx)(o.$m, {
                        "data-migration-pending": !0,
                        className: m._F,
                        scrollbarType: "none",
                        children: (0, n.jsxs)("div", {
                            className: m.kL,
                            ref: g,
                            children: [
                                _,
                                (0, n.jsxs)("div", {
                                    className: m.hQ,
                                    children: [
                                        (0, n.jsx)(l.D, { variant: "heading-xl/extrabold", children: t }),
                                        null != a &&
                                            (0, n.jsx)(d.E, {
                                                tag: "span",
                                                className: m.h_,
                                                variant: "text-sm/normal",
                                                children: a,
                                            }),
                                        f,
                                    ],
                                }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(o.s_, { "data-migration-pending": !0, className: m.VN, onClick: x.onClose }),
                    !v && (0, n.jsx)(u.A, { confettiTarget: g.current, confettiCanvas: k, sprites: (0, p.rA)() }),
                ],
            }),
        ],
    });
}
