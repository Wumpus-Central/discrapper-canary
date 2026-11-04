var a = i(477900);
i(582128);
var s = i(855986),
    e = i(189213),
    r = i(192308),
    l = i(834730),
    c = i(408278),
    o = i(22231),
    d = i(241326),
    m = i(98278),
    u = i(869388),
    h = i(792996),
    p = i(585878);
function x(t) {
    let { transform: n } = t;
    return (0, a.jsxs)("div", {
        className: p.nM,
        children: [
            (0, a.jsxs)("div", {
                className: p.u4,
                children: [
                    (0, a.jsx)(l.E, { variant: "body-md/semibold", children: n.name }),
                    (0, a.jsx)(l.E, { variant: "body-sm/normal", color: "text-muted", children: n.prompt }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: p.cm,
                children: [
                    (0, a.jsx)(c.K, {
                        icon: o.PencilIcon,
                        onClick: function () {
                            (0, r.mM)(async () => {
                                let { default: t } = await Promise.all([i.e(142753), i.e(268582), i.e(491373)]).then(
                                    i.bind(i, 183036),
                                );
                                return (i) => (0, a.jsx)(t, { ...i, existingTransform: n });
                            });
                        },
                        "aria-label": h.intl.string(h.t.bt75uw),
                        size: "sm",
                        variant: "secondary",
                    }),
                    (0, a.jsx)(c.K, {
                        icon: d.TrashIcon,
                        onClick: function () {
                            (0, m.Is)(n.id);
                        },
                        "aria-label": h.intl.string(h.t.ObhPxL),
                        size: "sm",
                        variant: "critical-secondary",
                    }),
                ],
            }),
        ],
    });
}
i.d(
    n,
    {},
    {
        default: function (t) {
            let { transitionState: n, onClose: c } = t,
                o = (0, s.bG)([u.A], () => u.A.getTransforms());
            return (0, a.jsx)(e.a, {
                transitionState: n,
                title: h.intl.string(h.t.UOwdbh),
                subtitle: h.intl.string(h.t.tNavX9),
                onClose: c,
                input: (0, a.jsx)("div", {
                    className: p.kL,
                    children:
                        0 === o.length
                            ? (0, a.jsx)(l.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  className: p.Ie,
                                  children: h.intl.string(h.t["Euo+Gq"]),
                              })
                            : o.map((t) => (0, a.jsx)(x, { transform: t }, t.id)),
                }),
                actions: [
                    { variant: "secondary", text: h.intl.string(h.t.cpT0Cq), onClick: c },
                    {
                        variant: "primary",
                        text: h.intl.string(h.t.y7x0kp),
                        onClick: function () {
                            (0, r.mM)(async () => {
                                let { default: t } = await Promise.all([i.e(142753), i.e(268582), i.e(491373)]).then(
                                    i.bind(i, 183036),
                                );
                                return (n) => (0, a.jsx)(t, { ...n });
                            });
                        },
                    },
                ],
            });
        },
    },
);
