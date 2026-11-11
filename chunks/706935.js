var t = a(477900);
a(582128);
var l = a(503698),
    i = a.n(l),
    r = a(323384),
    s = a(430392),
    c = a(678708),
    o = a(834730),
    d = a(939249),
    u = a(658675),
    p = a(331322),
    m = a(150934),
    h = a(709066),
    g = a(191850),
    x = a(792996),
    v = a(319725);
function b(e) {
    let { kind: n } = e;
    switch (n) {
        case "channel":
            return (0, t.jsx)(r.AppsIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
        case "app":
            return (0, t.jsx)(s.RobotIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
        case "project":
            return (0, t.jsx)(c.FolderIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
    }
}
function j(e) {
    let { items: n, dimmed: a = !1, children: l } = e;
    return (0, t.jsxs)("div", {
        className: i()(v.aP, { [v.SR]: a }),
        children: [
            n.map((e) =>
                (0, t.jsxs)(
                    "div",
                    {
                        className: v.nM,
                        children: [
                            (0, t.jsx)(b, { kind: e.kind }),
                            (0, t.jsx)(o.E, { variant: "body-sm/medium", color: "text-subtle", children: e.label }),
                        ],
                    },
                    e.key,
                ),
            ),
            l,
        ],
    });
}
function k(e) {
    let { item: n, checked: a, onChange: l, disabled: r } = e;
    return (0, t.jsxs)(d.D, {
        className: i()(v.nM, v.hn, { [v.l$]: r }),
        role: "checkbox",
        "aria-checked": a,
        "aria-disabled": r,
        onClick: r ? void 0 : () => l(!a),
        children: [
            (0, t.jsx)(b, { kind: n.kind }),
            (0, t.jsx)(o.E, {
                tag: "span",
                variant: "body-sm/medium",
                color: "text-subtle",
                className: v.f1,
                children: n.label,
            }),
            (0, t.jsx)(u.P, { checked: a, disabled: r }),
        ],
    });
}
a.d(
    n,
    {},
    {
        Ay: function (e) {
            let { items: n, optionalItems: a = [] } = e;
            return (0, t.jsxs)(p.B, {
                gap: 8,
                children: [
                    (0, t.jsx)(o.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: x.intl.string(g.default["+E2PqP"]),
                    }),
                    (0, t.jsx)(j, { items: n, children: a.map((e) => (0, t.jsx)(k, { ...e }, e.item.key)) }),
                ],
            });
        },
        Yg: function (e) {
            let { checked: n, onChange: a, items: l } = e;
            return (0, t.jsxs)(p.B, {
                gap: 8,
                children: [
                    (0, t.jsx)(m.S, { checked: n, onChange: a, label: x.intl.string(g.default.gKA9tU) }),
                    (0, t.jsx)(j, { items: l, dimmed: !n }),
                ],
            });
        },
        tb: function (e, n) {
            return x.intl.format(e, {
                app: (0, t.jsxs)(
                    "span",
                    {
                        className: v.Kh,
                        children: [n, " ", (0, t.jsx)("span", { className: v.Tc, children: (0, t.jsx)(h.A, {}) })],
                    },
                    "app",
                ),
            });
        },
    },
);
