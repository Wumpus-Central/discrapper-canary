"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(686956),
    d = n(361739),
    c = n(775602),
    u = n(50249),
    m = n(652215),
    g = n(985018),
    x = n(73787);
function h(e) {
    let { color: t, children: n } = e;
    return (0, i.jsxs)("div", {
        className: x.b6,
        children: [
            (0, i.jsx)(a.RYH, { className: x.m4, color: t, colors: null }),
            (0, i.jsx)("span", { className: x.yj, children: n }),
        ],
    });
}
function _(e) {
    let { guild: t, display: n } = e;
    return (0, i.jsxs)("div", {
        className: r()(x.vK, t.backgroundClass, { [x.lK]: !n }),
        children: [
            (0, i.jsx)("div", {
                className: x.Ot,
                children: t.roles.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: x.UK,
                            children: e.map((e) => (0, i.jsx)(h, { color: e.color, children: e.name }, e.name)),
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsx)("div", {
                className: x.Kq,
                children: (0, i.jsxs)("div", {
                    className: x.H,
                    children: [
                        (0, i.jsx)(a.euF, {
                            size: a._3J.SIZE_56,
                            "aria-hidden": !0,
                            status: m.clD.ONLINE,
                            src: t.avatar,
                        }),
                        (0, i.jsx)(a.Text, {
                            color: "text-strong",
                            variant: "text-md/bold",
                            className: x.HQ,
                            children: t.username,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function A() {
    let e = s.useMemo(
            () => [
                {
                    backgroundClass: x.Cy,
                    username: "Wumpus#0000",
                    avatar: n(75169),
                    roles: [
                        [
                            { name: g.intl.string(g.t["7oaPPo"]), color: "#7e00fc" },
                            { name: g.intl.string(g.t["Z/HN61"]), color: "#faa61a" },
                            { name: g.intl.string(g.t.lvHTg0), color: "#f06ea8" },
                        ],
                        [
                            { name: g.intl.string(g.t["6yECkg"]), color: "#45ddc0" },
                            { name: g.intl.string(g.t["5DabCV"]), color: "#00b0f4" },
                            { name: g.intl.string(g.t.bB900T), color: "#ba1616" },
                        ],
                    ],
                },
                {
                    backgroundClass: x.Gp,
                    username: "Graggle#0000",
                    avatar: n(818573),
                    roles: [
                        [
                            { name: g.intl.string(g.t["xz/Vfn"]), color: "#4a76e6" },
                            { name: g.intl.string(g.t.Bceruw), color: "#ad87ff" },
                            { name: g.intl.string(g.t.W51slj), color: "#6defcf" },
                        ],
                        [
                            { name: g.intl.string(g.t.y9gTiX), color: "#ff73fa" },
                            { name: g.intl.string(g.t.HslvdS), color: "#3ba55c" },
                            { name: g.intl.string(g.t.ipL1AG), color: "#ff1b66" },
                        ],
                    ],
                },
                {
                    backgroundClass: x.$t,
                    username: "Mallow#0000",
                    avatar: n(516574),
                    roles: [
                        [
                            { name: g.intl.string(g.t.pAFEbr), color: "#20d6b8" },
                            { name: g.intl.string(g.t["p/HZEE"]), color: "#236136" },
                            { name: g.intl.string(g.t["9Qp/JQ"]), color: "#ff9a15" },
                        ],
                        [
                            { name: g.intl.string(g.t.craF5a), color: "#ff78b9" },
                            { name: g.intl.string(g.t.L1TvXF), color: "#00b0f4" },
                            { name: g.intl.string(g.t.lqKz9F), color: "#6f52e4" },
                        ],
                    ],
                },
            ],
            [],
        ),
        [t, l] = s.useState(0),
        r = s.useRef(e);
    return (
        s.useEffect(() => {
            r.current = e;
        }),
        s.useEffect(() => {
            if (c.A.useReducedMotion) return;
            let e = setTimeout(() => l((t + 1) % r.current.length), 6332);
            return () => clearTimeout(e);
        }, [t]),
        (0, i.jsx)("div", {
            className: x.cI,
            "aria-hidden": !0,
            children: e.map((e, n) => (0, i.jsx)(_, { guild: e, display: n === t }, n)),
        })
    );
}
function p(e) {
    let { guild: t, everyoneRole: n, setEditRoleId: l } = e,
        [r, c] = s.useState(!1),
        m = async () => {
            c(!0), await o.A.createRole(t.id), c(!1);
        },
        h = s.useCallback(() => {
            l(n.id);
        }, [l, n.id]);
    return (0, i.jsx)(d.gJ, {
        children: (0, i.jsxs)("div", {
            className: x.uW,
            children: [
                (0, i.jsx)(a.Heading, { variant: "heading-lg/semibold", children: g.intl.string(g.t["LPJmL/"]) }),
                (0, i.jsxs)("div", {
                    className: x.kL,
                    children: [
                        (0, i.jsx)(A, {}),
                        (0, i.jsx)(a.Heading, { variant: "heading-xl/semibold", children: g.intl.string(g.t.ALlnbi) }),
                        (0, i.jsx)(a.Text, {
                            color: "text-default",
                            variant: "text-md/normal",
                            className: x.NQ,
                            children: g.intl.string(g.t["1ydhVp"]),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: x.x6,
                            children: (0, i.jsx)(a.Button, {
                                variant: "primary",
                                text: g.intl.string(g.t.JZZjQK),
                                onClick: m,
                                loading: r,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(a.cGx, { className: x.yF }),
                (0, i.jsx)(u.A, { role: n, onClick: h }),
            ],
        }),
    });
}
