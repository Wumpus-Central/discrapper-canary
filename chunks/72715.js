var i = e(477900);
e(582128);
var t = e(503698),
    l = e.n(t),
    n = e(224640),
    r = e(95362),
    c = e(534514),
    d = e(270003),
    x = e(696208),
    h = e(915089),
    j = e(584265),
    o = e(895600),
    p = e(792996),
    u = e(744409);
e.d(
    a,
    {},
    {
        default: function (s) {
            let { transitionState: a, onClose: e, guildTemplate: t } = s,
                { form: m, preview: v, handleSubmit: b } = (0, j.A)(t, !1),
                g = (0, h.GV)();
            return (0, i.jsxs)(n.d, {
                transitionState: a,
                onClose: e,
                size: "xxl",
                "aria-labelledby": g,
                children: [
                    (0, i.jsxs)("div", {
                        className: u.jT,
                        children: [
                            (0, i.jsx)(r.Ip, {
                                className: l()(u.jx, u.Iz),
                                scrollbarGutter: "both-edges",
                                children: (0, i.jsx)("div", {
                                    className: u.OQ,
                                    children: (0, i.jsx)(o.A, { guildTemplate: t, headerId: g }),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: l()(u.jx, u.gy),
                                children: (0, i.jsxs)(r.Ip, {
                                    className: u.KJ,
                                    children: [
                                        (0, i.jsx)(c.D, {
                                            variant: "heading-xl/semibold",
                                            className: u.wx,
                                            children: p.intl.string(p.t.UNFvtM),
                                        }),
                                        (0, i.jsxs)(d.n, { children: [m, v] }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(x.H, {
                        actions: [
                            { variant: "secondary", text: p.intl.string(p.t.cpT0Cq), onClick: e },
                            {
                                variant: "primary",
                                text: p.intl.string(p.t.CumH4u),
                                onClick: () => {
                                    b();
                                },
                            },
                        ],
                    }),
                ],
            });
        },
    },
);
