n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(749210),
    c = n(493544),
    d = n(607070),
    u = n(714939),
    g = n(981631),
    m = n(388032),
    p = n(22168);
function f(e) {
    let { color: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: p.roleTag,
        children: [
            (0, r.jsx)(s.xko, {
                className: p.roleDot,
                color: t,
                colors: null,
            }),
            (0, r.jsx)("span", {
                className: p.roleText,
                children: n,
            }),
        ],
    });
}
function h(e) {
    let { guild: t, display: n } = e;
    return (0, r.jsxs)("div", {
        className: a()(p.banner, t.backgroundClass, { [p.bannerOut]: !n }),
        children: [
            (0, r.jsx)("div", {
                className: p.roles,
                children: t.roles.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: p.rolesRow,
                            children: e.map((e) =>
                                (0, r.jsx)(
                                    f,
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
                className: p.profileCard,
                children: (0, r.jsxs)("div", {
                    className: p.avatarContainer,
                    children: [
                        (0, r.jsx)(s.qEK, {
                            size: s.EFr.SIZE_56,
                            "aria-hidden": !0,
                            status: g.Skl.ONLINE,
                            src: t.avatar,
                        }),
                        (0, r.jsx)(s.Text, {
                            color: "header-primary",
                            variant: "text-md/bold",
                            className: p.avatarName,
                            children: t.username,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function b() {
    let e = i.useMemo(
            () => [
                {
                    backgroundClass: p.bannerClubs,
                    username: "Wumpus#0000",
                    avatar: n(91055),
                    roles: [
                        [
                            {
                                name: m.intl.string(m.t["7oaPPo"]),
                                color: "#7e00fc",
                            },
                            {
                                name: m.intl.string(m.t["Z/HN61"]),
                                color: "#faa61a",
                            },
                            {
                                name: m.intl.string(m.t.lvHTg0),
                                color: "#f06ea8",
                            },
                        ],
                        [
                            {
                                name: m.intl.string(m.t["6yECkg"]),
                                color: "#45ddc0",
                            },
                            {
                                name: m.intl.string(m.t["5DabCV"]),
                                color: "#00b0f4",
                            },
                            {
                                name: m.intl.string(m.t.bB900T),
                                color: "#ba1616",
                            },
                        ],
                    ],
                },
                {
                    backgroundClass: p.bannerGaming,
                    username: "Graggle#0000",
                    avatar: n(507003),
                    roles: [
                        [
                            {
                                name: m.intl.string(m.t["xz/Vfn"]),
                                color: "#4a76e6",
                            },
                            {
                                name: m.intl.string(m.t.Bceruw),
                                color: "#ad87ff",
                            },
                            {
                                name: m.intl.string(m.t.W51slj),
                                color: "#6defcf",
                            },
                        ],
                        [
                            {
                                name: m.intl.string(m.t.y9gTiX),
                                color: "#ff73fa",
                            },
                            {
                                name: m.intl.string(m.t.HslvdS),
                                color: "#3ba55c",
                            },
                            {
                                name: m.intl.string(m.t.ipL1AG),
                                color: "#ff1b66",
                            },
                        ],
                    ],
                },
                {
                    backgroundClass: p.bannerHobbies,
                    username: "Mallow#0000",
                    avatar: n(552557),
                    roles: [
                        [
                            {
                                name: m.intl.string(m.t.pAFEbr),
                                color: "#20d6b8",
                            },
                            {
                                name: m.intl.string(m.t["p/HZEE"]),
                                color: "#236136",
                            },
                            {
                                name: m.intl.string(m.t["9Qp/JQ"]),
                                color: "#ff9a15",
                            },
                        ],
                        [
                            {
                                name: m.intl.string(m.t.craF5a),
                                color: "#ff78b9",
                            },
                            {
                                name: m.intl.string(m.t.L1TvXF),
                                color: "#00b0f4",
                            },
                            {
                                name: m.intl.string(m.t.lqKz9F),
                                color: "#6f52e4",
                            },
                        ],
                    ],
                },
            ],
            [],
        ),
        [t, l] = i.useState(0),
        a = i.useRef(e);
    return (
        i.useEffect(() => {
            a.current = e;
        }),
        i.useEffect(() => {
            if (d.Z.useReducedMotion) return;
            let e = setTimeout(() => l((t + 1) % a.current.length), 6332);
            return () => clearTimeout(e);
        }, [t]),
        (0, r.jsx)("div", {
            className: p.bannerContainer,
            "aria-hidden": !0,
            children: e.map((e, n) =>
                (0, r.jsx)(
                    h,
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
function x(e) {
    let { guild: t, everyoneRole: n, setEditRoleId: l } = e,
        [a, d] = i.useState(!1),
        g = async () => {
            d(!0), await o.Z.createRole(t.id), d(!1);
        },
        f = i.useCallback(() => {
            l(n.id);
        }, [l, n.id]);
    return (0, r.jsx)(c.NM, {
        children: (0, r.jsxs)("div", {
            className: p.section,
            children: [
                (0, r.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: m.intl.string(m.t["LPJmL/"]),
                }),
                (0, r.jsxs)("div", {
                    className: p.container,
                    children: [
                        (0, r.jsx)(b, {}),
                        (0, r.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            children: m.intl.string(m.t.ALlnbi),
                        }),
                        (0, r.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: p.introBody,
                            children: m.intl.string(m.t["1ydhVp"]),
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: p.button,
                            children: (0, r.jsx)(s.Button, {
                                variant: "primary",
                                text: m.intl.string(m.t.JZZjQK),
                                onClick: g,
                                loading: a,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(s.izJ, { className: p.divider }),
                (0, r.jsx)(u.Z, {
                    role: n,
                    onClick: f,
                }),
            ],
        }),
    });
}
