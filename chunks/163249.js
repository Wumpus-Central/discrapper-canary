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
    f = n(388032),
    m = n(500591);
function b(e) {
    let { color: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: m.roleTag,
        children: [
            (0, r.jsx)(s.xko, {
                className: m.roleDot,
                color: t,
                colors: null,
            }),
            (0, r.jsx)("span", {
                className: m.roleText,
                children: n,
            }),
        ],
    });
}
function p(e) {
    let { guild: t, display: n } = e;
    return (0, r.jsxs)("div", {
        className: a()(m.banner, t.backgroundClass, { [m.bannerOut]: !n }),
        children: [
            (0, r.jsx)("div", {
                className: m.roles,
                children: t.roles.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: m.rolesRow,
                            children: e.map((e) =>
                                (0, r.jsx)(
                                    b,
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
                className: m.profileCard,
                children: (0, r.jsxs)("div", {
                    className: m.avatarContainer,
                    children: [
                        (0, r.jsx)(s.qEK, {
                            size: s.EFr.SIZE_56,
                            "aria-hidden": !0,
                            status: g.Skl.ONLINE,
                            src: t.avatar,
                        }),
                        (0, r.jsx)(s.Text, {
                            color: "text-strong",
                            variant: "text-md/bold",
                            className: m.avatarName,
                            children: t.username,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function h() {
    let e = i.useMemo(
            () => [
                {
                    backgroundClass: m.bannerClubs,
                    username: "Wumpus#0000",
                    avatar: n(91055),
                    roles: [
                        [
                            {
                                name: f.intl.string(f.t["7oaPPo"]),
                                color: "#7e00fc",
                            },
                            {
                                name: f.intl.string(f.t["Z/HN61"]),
                                color: "#faa61a",
                            },
                            {
                                name: f.intl.string(f.t.lvHTg0),
                                color: "#f06ea8",
                            },
                        ],
                        [
                            {
                                name: f.intl.string(f.t["6yECkg"]),
                                color: "#45ddc0",
                            },
                            {
                                name: f.intl.string(f.t["5DabCV"]),
                                color: "#00b0f4",
                            },
                            {
                                name: f.intl.string(f.t.bB900T),
                                color: "#ba1616",
                            },
                        ],
                    ],
                },
                {
                    backgroundClass: m.bannerGaming,
                    username: "Graggle#0000",
                    avatar: n(507003),
                    roles: [
                        [
                            {
                                name: f.intl.string(f.t["xz/Vfn"]),
                                color: "#4a76e6",
                            },
                            {
                                name: f.intl.string(f.t.Bceruw),
                                color: "#ad87ff",
                            },
                            {
                                name: f.intl.string(f.t.W51slj),
                                color: "#6defcf",
                            },
                        ],
                        [
                            {
                                name: f.intl.string(f.t.y9gTiX),
                                color: "#ff73fa",
                            },
                            {
                                name: f.intl.string(f.t.HslvdS),
                                color: "#3ba55c",
                            },
                            {
                                name: f.intl.string(f.t.ipL1AG),
                                color: "#ff1b66",
                            },
                        ],
                    ],
                },
                {
                    backgroundClass: m.bannerHobbies,
                    username: "Mallow#0000",
                    avatar: n(552557),
                    roles: [
                        [
                            {
                                name: f.intl.string(f.t.pAFEbr),
                                color: "#20d6b8",
                            },
                            {
                                name: f.intl.string(f.t["p/HZEE"]),
                                color: "#236136",
                            },
                            {
                                name: f.intl.string(f.t["9Qp/JQ"]),
                                color: "#ff9a15",
                            },
                        ],
                        [
                            {
                                name: f.intl.string(f.t.craF5a),
                                color: "#ff78b9",
                            },
                            {
                                name: f.intl.string(f.t.L1TvXF),
                                color: "#00b0f4",
                            },
                            {
                                name: f.intl.string(f.t.lqKz9F),
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
            className: m.bannerContainer,
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
function x(e) {
    let { guild: t, everyoneRole: n, setEditRoleId: l } = e,
        [a, d] = i.useState(!1),
        g = async () => {
            d(!0), await o.Z.createRole(t.id), d(!1);
        },
        b = i.useCallback(() => {
            l(n.id);
        }, [l, n.id]);
    return (0, r.jsx)(c.NM, {
        children: (0, r.jsxs)("div", {
            className: m.section,
            children: [
                (0, r.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: f.intl.string(f.t["LPJmL/"]),
                }),
                (0, r.jsxs)("div", {
                    className: m.container,
                    children: [
                        (0, r.jsx)(h, {}),
                        (0, r.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            children: f.intl.string(f.t.ALlnbi),
                        }),
                        (0, r.jsx)(s.Text, {
                            color: "text-default",
                            variant: "text-md/normal",
                            className: m.introBody,
                            children: f.intl.string(f.t["1ydhVp"]),
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: m.button,
                            children: (0, r.jsx)(s.Button, {
                                variant: "primary",
                                text: f.intl.string(f.t.JZZjQK),
                                onClick: g,
                                loading: a,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(s.izJ, { className: m.divider }),
                (0, r.jsx)(u.Z, {
                    role: n,
                    onClick: b,
                }),
            ],
        }),
    });
}
