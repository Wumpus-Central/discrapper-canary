n.d(e, { A: () => p });
var r = n(627968),
    a = n(64700),
    i = n(106778),
    l = n(311907),
    s = n(397927),
    o = n(775602),
    d = n(524246),
    u = n(14368),
    c = n(944053);
function p(t) {
    let { title: e, description: n, image: p, button: f, ..._ } = t,
        m = (0, l.bG)([o.A], () => o.A.useReducedMotion),
        A = a.useRef(null),
        v = a.useRef(new i.OH()),
        [x, g] = a.useState(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Fk, { ref: g, className: c.Lb, environment: v.current }),
            (0, r.jsxs)(s.EOs, {
                "data-migration-pending": !0,
                className: c.yl,
                size: s.rIJ.DYNAMIC,
                ..._,
                parentComponent: "GuildPowerupActivateModal",
                children: [
                    (0, r.jsx)(s.$mQ, {
                        "data-migration-pending": !0,
                        className: c._F,
                        scrollbarType: "none",
                        children: (0, r.jsxs)("div", {
                            className: c.kL,
                            ref: A,
                            children: [
                                p,
                                (0, r.jsxs)("div", {
                                    className: c.hQ,
                                    children: [
                                        (0, r.jsx)(s.Heading, { variant: "heading-xl/extrabold", children: e }),
                                        (0, r.jsx)(s.Text, {
                                            tag: "span",
                                            className: c.h_,
                                            variant: "text-sm/normal",
                                            children: n,
                                        }),
                                        f,
                                    ],
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(s.s_y, { "data-migration-pending": !0, className: c.VN, onClick: _.onClose }),
                    !m && (0, r.jsx)(d.A, { confettiTarget: A.current, confettiCanvas: x, sprites: (0, u.rA)() }),
                ],
            }),
        ],
    });
}
