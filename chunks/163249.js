n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
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
            (0, r.jsx)(a.xko, {
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
        className: s()(p.banner, t.backgroundClass, { [p.bannerOut]: !n }),
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
                        (0, r.jsx)(a.qEK, {
                            size: a.EFr.SIZE_56,
                            "aria-hidden": !0,
                            status: g.Skl.ONLINE,
                            src: t.avatar,
                        }),
                        (0, r.jsx)(a.Text, {
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
function x() {
    let e = i.useMemo(
            () => [
                {
                    backgroundClass: p.bannerClubs,
                    username: "Wumpus#0000",
                    avatar: n(91055),
                    roles: [
                        [
                            {
                                name: m.intl.string(m.t["7oaPPj"]),
                                color: "#7e00fc",
                            },
                            {
                                name: m.intl.string(m.t["Z/HN6+"]),
                                color: "#faa61a",
                            },
                            {
                                name: m.intl.string(m.t.lvHTg4),
                                color: "#f06ea8",
                            },
                        ],
                        [
                            {
                                name: m.intl.string(m.t["6yECkp"]),
                                color: "#45ddc0",
                            },
                            {
                                name: m.intl.string(m.t["5DabCQ"]),
                                color: "#00b0f4",
                            },
                            {
                                name: m.intl.string(m.t.bB900d),
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
                                name: m.intl.string(m.t.Bceru7),
                                color: "#ad87ff",
                            },
                            {
                                name: m.intl.string(m.t.W51slp),
                                color: "#6defcf",
                            },
                        ],
                        [
                            {
                                name: m.intl.string(m.t.y9gTiY),
                                color: "#ff73fa",
                            },
                            {
                                name: m.intl.string(m.t.HslvdX),
                                color: "#3ba55c",
                            },
                            {
                                name: m.intl.string(m.t.ipL1AA),
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
                                name: m.intl.string(m.t.pAFEbm),
                                color: "#20d6b8",
                            },
                            {
                                name: m.intl.string(m.t["p/HZEB"]),
                                color: "#236136",
                            },
                            {
                                name: m.intl.string(m.t["9Qp/JS"]),
                                color: "#ff9a15",
                            },
                        ],
                        [
                            {
                                name: m.intl.string(m.t.craF5e),
                                color: "#ff78b9",
                            },
                            {
                                name: m.intl.string(m.t.L1TvXF),
                                color: "#00b0f4",
                            },
                            {
                                name: m.intl.string(m.t.lqKz9P),
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
            if (d.Z.useReducedMotion) return;
            let e = setTimeout(() => l((t + 1) % s.current.length), 6332);
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
function b(e) {
    let { guild: t, everyoneRole: n, setEditRoleId: l } = e,
        [s, d] = i.useState(!1),
        g = async () => {
            d(!0), await o.Z.createRole(t.id), d(!1);
        },
        f = i.useCallback(() => {
            l(n.id);
        }, [l, n.id]);
    return (0, r.jsx)(c.NM, {
        children: (0, r.jsxs)(a.hjN, {
            className: p.section,
            title: m.intl.string(m.t.LPJmLy),
            tag: a.RB0.H2,
            children: [
                (0, r.jsxs)("div", {
                    className: p.container,
                    children: [
                        (0, r.jsx)(x, {}),
                        (0, r.jsx)(a.X6q, {
                            variant: "heading-xl/semibold",
                            children: m.intl.string(m.t.ALlnbm),
                        }),
                        (0, r.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: p.introBody,
                            children: m.intl.string(m.t["1ydhVl"]),
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: p.button,
                            children: (0, r.jsx)(a.zxk, {
                                variant: "primary",
                                text: m.intl.string(m.t.JZZjQE),
                                onClick: g,
                                loading: s,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(a.izJ, { className: p.divider }),
                (0, r.jsx)(u.Z, {
                    role: n,
                    onClick: f,
                }),
            ],
        }),
    });
}
