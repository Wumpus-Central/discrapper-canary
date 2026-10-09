t.d(n, { Ay: () => v, Yg: () => x, tb: () => A });
var l = t(477900);
t(582128);
var r = t(503698),
    i = t.n(r),
    a = t(323384),
    u = t(430392),
    c = t(678708),
    s = t(834730),
    o = t(331322),
    p = t(150934),
    d = t(709066),
    m = t(248675),
    f = t(660183),
    h = t(319725);
function A(e, n) {
    return f.intl.format(e, {
        app: (0, l.jsxs)(
            "span",
            {
                className: h.Kh,
                children: [n, " ", (0, l.jsx)("span", { className: h.Tc, children: (0, l.jsx)(d.A, {}) })],
            },
            "app",
        ),
    });
}
function g(e) {
    let { kind: n } = e;
    switch (n) {
        case "channel":
            return (0, l.jsx)(a.k, { size: "sm", color: "currentColor", "aria-hidden": !0 });
        case "app":
            return (0, l.jsx)(u.RobotIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
        case "project":
            return (0, l.jsx)(c.FolderIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
    }
}
function j(e) {
    let { items: n, dimmed: t = !1 } = e;
    return (0, l.jsx)("div", {
        className: i()(h.aP, { [h.SR]: t }),
        children: n.map((e) =>
            (0, l.jsxs)(
                "div",
                {
                    className: h.nM,
                    children: [
                        (0, l.jsx)(g, { kind: e.kind }),
                        (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "text-subtle", children: e.label }),
                    ],
                },
                e.key,
            ),
        ),
    });
}
function v(e) {
    let { items: n } = e;
    return (0, l.jsxs)(o.B, {
        gap: 8,
        children: [
            (0, l.jsx)(s.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: f.intl.string(m.default["+E2PqP"]),
            }),
            (0, l.jsx)(j, { items: n }),
        ],
    });
}
function x(e) {
    let { checked: n, onChange: t, items: r } = e;
    return (0, l.jsxs)(o.B, {
        gap: 8,
        children: [
            (0, l.jsx)(p.S, { checked: n, onChange: t, label: f.intl.string(m.default.gKA9tU) }),
            (0, l.jsx)(j, { items: r, dimmed: !n }),
        ],
    });
}
