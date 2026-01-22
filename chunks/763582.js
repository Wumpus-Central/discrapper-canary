n.d(t, { A: () => h }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    c = n(686956),
    o = n(361739),
    d = n(775602),
    u = n(50249),
    f = n(652215),
    g = n(985018),
    b = n(389612);
function m(e) {
    let { color: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: b.b6,
        children: [
            (0, r.jsx)(a.RYH, {
                className: b.m4,
                color: t,
                colors: null,
            }),
            (0, r.jsx)("span", {
                className: b.yj,
                children: n,
            }),
        ],
    });
}
function p(e) {
    let { guild: t, display: n } = e;
    return (0, r.jsxs)("div", {
        className: s()(b.vK, t.backgroundClass, { [b.lK]: !n }),
        children: [
            (0, r.jsx)("div", {
                className: b.Ot,
                children: t.roles.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: b.UK,
                            children: e.map((e) =>
                                (0, r.jsx)(
                                    m,
                                    {
                                        color: e.color,
                                        children: e.name,
                                    },
                                    e.name,
                                ),
                            ),
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)("div", {
                className: b.Kq,
                children: (0, r.jsxs)("div", {
                    className: b.H,
                    children: [
                        (0, r.jsx)(a.euF, {
                            size: a._3J.SIZE_56,
                            "aria-hidden": !0,
                            status: f.clD.ONLINE,
                            src: t.avatar,
                        }),
                        (0, r.jsx)(a.Text, {
                            color: "text-strong",
                            variant: "text-md/bold",
                            className: b.HQ,
                            children: t.username,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function x() {
    let e = i.useMemo(
            () => [
                {
                    backgroundClass: b.Cy,
                    username: "Wumpus#0000",
                    avatar: n(75169),
                    roles: [
                        [
                            {
                                name: g.intl.string(g.t["7oaPPo"]),
                                color: "#7e00fc",
                            },
                            {
                                name: g.intl.string(g.t["Z/HN61"]),
                                color: "#faa61a",
                            },
                            {
                                name: g.intl.string(g.t.lvHTg0),
                                color: "#f06ea8",
                            },
                        ],
                        [
                            {
                                name: g.intl.string(g.t["6yECkg"]),
                                color: "#45ddc0",
                            },
                            {
                                name: g.intl.string(g.t["5DabCV"]),
                                color: "#00b0f4",
                            },
                            {
                                name: g.intl.string(g.t.bB900T),
                                color: "#ba1616",
                            },
                        ],
                    ],
                },
                {
                    backgroundClass: b.Gp,
                    username: "Graggle#0000",
                    avatar: n(818573),
                    roles: [
                        [
                            {
                                name: g.intl.string(g.t["xz/Vfn"]),
                                color: "#4a76e6",
                            },
                            {
                                name: g.intl.string(g.t.Bceruw),
                                color: "#ad87ff",
                            },
                            {
                                name: g.intl.string(g.t.W51slj),
                                color: "#6defcf",
                            },
                        ],
                        [
                            {
                                name: g.intl.string(g.t.y9gTiX),
                                color: "#ff73fa",
                            },
                            {
                                name: g.intl.string(g.t.HslvdS),
                                color: "#3ba55c",
                            },
                            {
                                name: g.intl.string(g.t.ipL1AG),
                                color: "#ff1b66",
                            },
                        ],
                    ],
                },
                {
                    backgroundClass: b.$t,
                    username: "Mallow#0000",
                    avatar: n(516574),
                    roles: [
                        [
                            {
                                name: g.intl.string(g.t.pAFEbr),
                                color: "#20d6b8",
                            },
                            {
                                name: g.intl.string(g.t["p/HZEE"]),
                                color: "#236136",
                            },
                            {
                                name: g.intl.string(g.t["9Qp/JQ"]),
                                color: "#ff9a15",
                            },
                        ],
                        [
                            {
                                name: g.intl.string(g.t.craF5a),
                                color: "#ff78b9",
                            },
                            {
                                name: g.intl.string(g.t.L1TvXF),
                                color: "#00b0f4",
                            },
                            {
                                name: g.intl.string(g.t.lqKz9F),
                                color: "#6f52e4",
                            },
                        ],
                    ],
                },
            ],
            [],
        ),
        [t, l] = i.useState(0),
        s = i.useRef(e);
    return (
        i.useEffect(() => {
            s.current = e;
        }),
        i.useEffect(() => {
            if (d.A.useReducedMotion) return;
            let e = setTimeout(() => l((t + 1) % s.current.length), 6332);
            return () => clearTimeout(e);
        }, [t]),
        (0, r.jsx)("div", {
            className: b.cI,
            "aria-hidden": !0,
            children: e.map((e, n) =>
                (0, r.jsx)(
                    p,
                    {
                        guild: e,
                        display: n === t,
                    },
                    n,
                ),
            ),
        })
    );
}
function h(e) {
    let { guild: t, everyoneRole: n, setEditRoleId: l } = e,
        [s, d] = i.useState(!1),
        f = async () => {
            d(!0), await c.A.createRole(t.id), d(!1);
        },
        m = i.useCallback(() => {
            l(n.id);
        }, [l, n.id]);
    return (0, r.jsx)(o.gJ, {
        children: (0, r.jsxs)("div", {
            className: b.uW,
            children: [
                (0, r.jsx)(a.Heading, {
                    variant: "heading-lg/semibold",
                    children: g.intl.string(g.t["LPJmL/"]),
                }),
                (0, r.jsxs)("div", {
                    className: b.kL,
                    children: [
                        (0, r.jsx)(x, {}),
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-xl/semibold",
                            children: g.intl.string(g.t.ALlnbi),
                        }),
                        (0, r.jsx)(a.Text, {
                            color: "text-default",
                            variant: "text-md/normal",
                            className: b.NQ,
                            children: g.intl.string(g.t["1ydhVp"]),
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: b.x6,
                            children: (0, r.jsx)(a.Button, {
                                variant: "primary",
                                text: g.intl.string(g.t.JZZjQK),
                                onClick: f,
                                loading: s,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(a.cGx, { className: b.yF }),
                (0, r.jsx)(u.A, {
                    role: n,
                    onClick: m,
                }),
            ],
        }),
    });
}
