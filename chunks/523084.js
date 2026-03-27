t.d(a, { default: () => m });
var n = t(627968),
    s = t(64700),
    i = t(106778),
    r = t(311907),
    l = t(397927),
    d = t(775602),
    c = t(524246),
    o = t(14368),
    u = t(62296);
function m(e) {
    let { title: a, description: t, image: m, button: p, ...x } = e,
        g = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        f = s.useRef(null),
        h = s.useRef(new i.OH()),
        [v, j] = s.useState(null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.Fk, { ref: j, className: u.Lb, environment: h.current }),
            (0, n.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                className: u.yl,
                size: l.rIJ.DYNAMIC,
                ...x,
                parentComponent: "GuildPowerupActivateModal",
                children: [
                    (0, n.jsx)(l.$mQ, {
                        "data-migration-pending": !0,
                        className: u._F,
                        scrollbarType: "none",
                        children: (0, n.jsxs)("div", {
                            className: u.kL,
                            ref: f,
                            children: [
                                m,
                                (0, n.jsxs)("div", {
                                    className: u.hQ,
                                    children: [
                                        (0, n.jsx)(l.Heading, { variant: "heading-xl/extrabold", children: a }),
                                        (0, n.jsx)(l.Text, {
                                            tag: "span",
                                            className: u.h_,
                                            variant: "text-sm/normal",
                                            children: t,
                                        }),
                                        p,
                                    ],
                                }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(l.s_y, { "data-migration-pending": !0, className: u.VN, onClick: x.onClose }),
                    !g && (0, n.jsx)(c.A, { confettiTarget: f.current, confettiCanvas: v, sprites: (0, o.rA)() }),
                ],
            }),
        ],
    });
}
