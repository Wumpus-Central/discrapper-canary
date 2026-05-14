i.d(n, { default: () => T });
var a = i(627968);
i(64700);
var e = i(189213),
    s = i(408278),
    r = i(17928),
    l = i(192308),
    c = i(834730),
    o = i(22231),
    d = i(241326),
    u = i(98278),
    m = i(869388),
    h = i(375708),
    x = i(734627);
function p(t) {
    let { transform: n } = t;
    return (0, a.jsxs)("div", {
        className: x.nM,
        children: [
            (0, a.jsxs)("div", {
                className: x.u4,
                children: [
                    (0, a.jsx)(c.E, { variant: "text-md/semibold", children: n.name }),
                    (0, a.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: n.prompt }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: x.cm,
                children: [
                    (0, a.jsx)(s.K, {
                        icon: o.R,
                        onClick: function () {
                            (0, l.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([i.e("95081"), i.e("8891"), i.e("91373")]).then(
                                    i.bind(i, 183036),
                                );
                                return (i) => (0, a.jsx)(t, { ...i, existingTransform: n });
                            });
                        },
                        "aria-label": h.intl.string(h.t.bt75uw),
                        size: "sm",
                        variant: "secondary",
                    }),
                    (0, a.jsx)(s.K, {
                        icon: d.u,
                        onClick: function () {
                            (0, u.Is)(n.id);
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
function T(t) {
    let { transitionState: n, onClose: s } = t,
        o = (0, r.bG)([m.A], () => m.A.getTransforms());
    return (0, a.jsx)(e.Modal, {
        transitionState: n,
        title: h.intl.string(h.t.UOwdbh),
        subtitle: h.intl.string(h.t.tNavX9),
        onClose: s,
        input: (0, a.jsx)("div", {
            className: x.kL,
            children:
                0 === o.length
                    ? (0, a.jsx)(c.E, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          className: x.Ie,
                          children: h.intl.string(h.t["Euo+Gq"]),
                      })
                    : o.map((t) => (0, a.jsx)(p, { transform: t }, t.id)),
        }),
        actions: [
            { variant: "secondary", text: h.intl.string(h.t.cpT0Cq), onClick: s },
            {
                variant: "primary",
                text: h.intl.string(h.t.y7x0kp),
                onClick: function () {
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([i.e("95081"), i.e("8891"), i.e("91373")]).then(
                            i.bind(i, 183036),
                        );
                        return (n) => (0, a.jsx)(t, { ...n });
                    });
                },
            },
        ],
    });
}
