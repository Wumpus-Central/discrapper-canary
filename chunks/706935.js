l.d(n, { Ay: () => b, Yg: () => N, tb: () => A });
var t = l(477900);
l(582128);
var i = l(503698),
    r = l.n(i),
    a = l(323384),
    u = l(430392),
    c = l(678708),
    s = l(834730);
if (221552 == l.j) var o = l(939249);
if (221552 == l.j) var d = l(658675);
var p = l(331322),
    m = l(150934),
    f = l(709066),
    h = l(248675),
    j = l(660183),
    x = l(319725);
function A(e, n) {
    return j.intl.format(e, {
        app: (0, t.jsxs)(
            "span",
            {
                className: x.Kh,
                children: [n, " ", (0, t.jsx)("span", { className: x.Tc, children: (0, t.jsx)(f.A, {}) })],
            },
            "app",
        ),
    });
}
function g(e) {
    let { kind: n } = e;
    switch (n) {
        case "channel":
            return (0, t.jsx)(a.k, { size: "sm", color: "currentColor", "aria-hidden": !0 });
        case "app":
            return (0, t.jsx)(u.RobotIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
        case "project":
            return (0, t.jsx)(c.FolderIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
    }
}
function v(e) {
    let { items: n, dimmed: l = !1, children: i } = e;
    return (0, t.jsxs)("div", {
        className: r()(x.aP, { [x.SR]: l }),
        children: [
            n.map((e) =>
                (0, t.jsxs)(
                    "div",
                    {
                        className: x.nM,
                        children: [
                            (0, t.jsx)(g, { kind: e.kind }),
                            (0, t.jsx)(s.E, { variant: "text-sm/medium", color: "text-subtle", children: e.label }),
                        ],
                    },
                    e.key,
                ),
            ),
            i,
        ],
    });
}
function k(e) {
    let { item: n, checked: l, onChange: i, disabled: a } = e;
    return (0, t.jsxs)(o.D, {
        className: r()(x.nM, x.hn, { [x.l$]: a }),
        role: "checkbox",
        "aria-checked": l,
        "aria-disabled": a,
        onClick: a ? void 0 : () => i(!l),
        children: [
            (0, t.jsx)(g, { kind: n.kind }),
            (0, t.jsx)(s.E, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-subtle",
                className: x.f1,
                children: n.label,
            }),
            (0, t.jsx)(d.P, { checked: l, disabled: a }),
        ],
    });
}
function b(e) {
    let { items: n, optionalItem: l } = e;
    return (0, t.jsxs)(p.B, {
        gap: 8,
        children: [
            (0, t.jsx)(s.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: j.intl.string(h.default["+E2PqP"]),
            }),
            (0, t.jsx)(v, { items: n, children: null != l ? (0, t.jsx)(k, { ...l }) : null }),
        ],
    });
}
function N(e) {
    let { checked: n, onChange: l, items: i } = e;
    return (0, t.jsxs)(p.B, {
        gap: 8,
        children: [
            (0, t.jsx)(m.S, { checked: n, onChange: l, label: j.intl.string(h.default.gKA9tU) }),
            (0, t.jsx)(v, { items: i, dimmed: !n }),
        ],
    });
}
