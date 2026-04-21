i.d(n, { default: () => x });
var e = i(627968);
i(64700);
var a = i(189213),
    s = i(158954),
    r = i(311907),
    c = i(397927),
    l = i(98278),
    o = i(869388),
    d = i(985018),
    u = i(734627);
function m(t) {
    let { transform: n } = t;
    return (0, e.jsxs)("div", {
        className: u.nM,
        children: [
            (0, e.jsxs)("div", {
                className: u.u4,
                children: [
                    (0, e.jsx)(c.Text, { variant: "text-md/semibold", children: n.name }),
                    (0, e.jsx)(c.Text, { variant: "text-sm/normal", color: "text-muted", children: n.prompt }),
                ],
            }),
            (0, e.jsxs)("div", {
                className: u.cm,
                children: [
                    (0, e.jsx)(s.K0, {
                        icon: c.R2l,
                        onClick: function () {
                            (0, c.mMO)(async () => {
                                let { default: t } = await i.e("91373").then(i.bind(i, 183036));
                                return (i) => (0, e.jsx)(t, { ...i, existingTransform: n });
                            });
                        },
                        "aria-label": d.intl.string(d.t.bt75uw),
                        size: "sm",
                        variant: "secondary",
                    }),
                    (0, e.jsx)(s.K0, {
                        icon: c.ucK,
                        onClick: function () {
                            (0, l.Is)(n.id);
                        },
                        "aria-label": d.intl.string(d.t.ObhPxL),
                        size: "sm",
                        variant: "critical-secondary",
                    }),
                ],
            }),
        ],
    });
}
function x(t) {
    let { transitionState: n, onClose: s } = t,
        l = (0, r.bG)([o.A], () => o.A.getTransforms());
    return (0, e.jsx)(a.Modal, {
        transitionState: n,
        title: d.intl.string(d.t.UOwdbh),
        subtitle: d.intl.string(d.t.tNavX9),
        onClose: s,
        input: (0, e.jsx)("div", {
            className: u.kL,
            children:
                0 === l.length
                    ? (0, e.jsx)(c.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          className: u.Ie,
                          children: d.intl.string(d.t["Euo+Gq"]),
                      })
                    : l.map((t) => (0, e.jsx)(m, { transform: t }, t.id)),
        }),
        actions: [
            { variant: "secondary", text: d.intl.string(d.t.cpT0Cq), onClick: s },
            {
                variant: "primary",
                text: d.intl.string(d.t.y7x0kp),
                onClick: function () {
                    (0, c.mMO)(async () => {
                        let { default: t } = await i.e("91373").then(i.bind(i, 183036));
                        return (n) => (0, e.jsx)(t, { ...n });
                    });
                },
            },
        ],
    });
}
