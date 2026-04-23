n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(545442),
    o = n(97808),
    d = n(778712),
    c = n(834730),
    u = n(534514),
    m = n(821609),
    g = n(404778),
    h = n(686956),
    x = n(361739),
    _ = n(775602),
    p = n(50249),
    A = n(652215),
    E = n(985018),
    f = n(73787);
function j(e) {
    let { color: t, children: n } = e;
    return (0, i.jsxs)("div", {
        className: f.b6,
        children: [
            (0, i.jsx)(a.R, { className: f.m4, color: t, colors: null }),
            (0, i.jsx)("span", { className: f.yj, children: n }),
        ],
    });
}
function N(e) {
    let { guild: t, display: n } = e;
    return (0, i.jsxs)("div", {
        className: r()(f.vK, t.backgroundClass, { [f.lK]: !n }),
        children: [
            (0, i.jsx)("div", {
                className: f.Ot,
                children: t.roles.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: f.UK,
                            children: e.map((e) => (0, i.jsx)(j, { color: e.color, children: e.name }, e.name)),
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsx)("div", {
                className: f.Kq,
                children: (0, i.jsxs)("div", {
                    className: f.H,
                    children: [
                        (0, i.jsx)(o.eu, {
                            size: d._3.SIZE_56,
                            "aria-hidden": !0,
                            status: A.clD.ONLINE,
                            src: t.avatar,
                        }),
                        (0, i.jsx)(c.E, {
                            color: "text-strong",
                            variant: "text-md/bold",
                            className: f.HQ,
                            children: t.username,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function I() {
    let e = l.useMemo(
            () => [
                {
                    backgroundClass: f.Cy,
                    username: "Wumpus#0000",
                    avatar: n(75169),
                    roles: [
                        [
                            { name: E.intl.string(E.t["7oaPPo"]), color: "#7e00fc" },
                            { name: E.intl.string(E.t["Z/HN61"]), color: "#faa61a" },
                            { name: E.intl.string(E.t.lvHTg0), color: "#f06ea8" },
                        ],
                        [
                            { name: E.intl.string(E.t["6yECkg"]), color: "#45ddc0" },
                            { name: E.intl.string(E.t["5DabCV"]), color: "#00b0f4" },
                            { name: E.intl.string(E.t.bB900T), color: "#ba1616" },
                        ],
                    ],
                },
                {
                    backgroundClass: f.Gp,
                    username: "Graggle#0000",
                    avatar: n(818573),
                    roles: [
                        [
                            { name: E.intl.string(E.t["xz/Vfn"]), color: "#4a76e6" },
                            { name: E.intl.string(E.t.Bceruw), color: "#ad87ff" },
                            { name: E.intl.string(E.t.W51slj), color: "#6defcf" },
                        ],
                        [
                            { name: E.intl.string(E.t.y9gTiX), color: "#ff73fa" },
                            { name: E.intl.string(E.t.HslvdS), color: "#3ba55c" },
                            { name: E.intl.string(E.t.ipL1AG), color: "#ff1b66" },
                        ],
                    ],
                },
                {
                    backgroundClass: f.$t,
                    username: "Mallow#0000",
                    avatar: n(516574),
                    roles: [
                        [
                            { name: E.intl.string(E.t.pAFEbr), color: "#20d6b8" },
                            { name: E.intl.string(E.t["p/HZEE"]), color: "#236136" },
                            { name: E.intl.string(E.t["9Qp/JQ"]), color: "#ff9a15" },
                        ],
                        [
                            { name: E.intl.string(E.t.craF5a), color: "#ff78b9" },
                            { name: E.intl.string(E.t.L1TvXF), color: "#00b0f4" },
                            { name: E.intl.string(E.t.lqKz9F), color: "#6f52e4" },
                        ],
                    ],
                },
            ],
            [],
        ),
        [t, s] = l.useState(0),
        r = l.useRef(e);
    return (
        l.useEffect(() => {
            r.current = e;
        }),
        l.useEffect(() => {
            if (_.A.useReducedMotion) return;
            let e = setTimeout(() => s((t + 1) % r.current.length), 6332);
            return () => clearTimeout(e);
        }, [t]),
        (0, i.jsx)("div", {
            className: f.cI,
            "aria-hidden": !0,
            children: e.map((e, n) => (0, i.jsx)(N, { guild: e, display: n === t }, n)),
        })
    );
}
function C(e) {
    let { guild: t, everyoneRole: n, setEditRoleId: s } = e,
        [r, a] = l.useState(!1),
        o = async () => {
            a(!0), await h.A.createRole(t.id), a(!1);
        },
        d = l.useCallback(() => {
            s(n.id);
        }, [s, n.id]);
    return (0, i.jsx)(x.gJ, {
        children: (0, i.jsxs)("div", {
            className: f.uW,
            children: [
                (0, i.jsx)(u.D, { variant: "heading-lg/semibold", children: E.intl.string(E.t["LPJmL/"]) }),
                (0, i.jsxs)("div", {
                    className: f.kL,
                    children: [
                        (0, i.jsx)(I, {}),
                        (0, i.jsx)(u.D, { variant: "heading-xl/semibold", children: E.intl.string(E.t.ALlnbi) }),
                        (0, i.jsx)(c.E, {
                            color: "text-default",
                            variant: "text-md/normal",
                            className: f.NQ,
                            children: E.intl.string(E.t["1ydhVp"]),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: f.x6,
                            children: (0, i.jsx)(m.$, {
                                variant: "primary",
                                text: E.intl.string(E.t.JZZjQK),
                                onClick: o,
                                loading: r,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(g.c, { className: f.yF }),
                (0, i.jsx)(p.A, { role: n, onClick: d }),
            ],
        }),
    });
}
