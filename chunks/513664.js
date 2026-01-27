n.d(t, {
    Ay: () => m,
    dd: () => p,
    lD: () => S,
});
var i = n(627968);
n(64700);
var s = n(873298),
    l = n(397927),
    r = n(285058),
    a = n(195043),
    o = n(723702),
    c = n(253932),
    d = n(790174),
    u = n(531525),
    g = n(652215),
    h = n(985018),
    x = n(536482),
    A = n(208746);

function p() {
    let e = c.tz.useSetting();
    return (0, i.jsxs)("div", {
        className: A.QF,
        children: [
            (0, i.jsxs)("div", {
                className: A.v_,
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: A.n7,
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: h.intl.string(h.t.TqdOvC),
                    }),
                    !e &&
                        (0, i.jsx)("div", {
                            className: A.ZT,
                            children: (0, i.jsx)(l.wx6, {
                                type: "warning",
                                children: h.intl.string(x.default["xxI0/W"]),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)(r.A, {}),
        ],
    });
}

function m(e) {
    let { className: t } = e;
    return (0, i.jsxs)(d.A, {
        className: t,
        title: h.intl.string(h.t.Cq98yL),
        children: [
            (0, i.jsx)(O, {}),
            (0, i.jsx)(l.cGx, {
                gap: 32,
            }),
            (0, i.jsx)(j, {}),
            (0, i.jsx)(l.cGx, {
                gap: 32,
            }),
            (0, i.jsx)(b, {}),
            (0, i.jsx)(l.cGx, {
                gap: 32,
            }),
            (0, i.jsx)(S, {}),
        ],
    });
}

function j() {
    let e = c._Z.useSetting(),
        t = [
            {
                value: s.Qd.ACTIVITY_STATUS_ON,
                name: h.intl.string(h.t.UzGMH9),
            },
            {
                value: s.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                name: h.intl.string(x.default["/sAeRY"]),
            },
            {
                value: s.Qd.ACTIVITY_STATUS_OFF,
                name: h.intl.string(x.default.m3oL7Q),
            },
        ];
    return (0, i.jsxs)(l.nVY, {
        label: h.intl.string(x.default.TG0QsS),
        description: h.intl.string(x.default.OO17Lg),
        children: [
            (0, i.jsx)(l.z6M, {
                label: h.intl.string(x.default["/LHVbt"]),
                options: t,
                value: e,
                onChange: (e) => {
                    c._Z.updateSetting(e);
                },
            }),
            (0, i.jsx)(p, {}),
        ],
    });
}

function b() {
    let e = c.e.useSetting(),
        t = c.UM.useSetting();
    return (0, i.jsx)(a.x, {
        setting: u.H.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(l.nVY, {
            label: h.intl.string(x.default["5rYBAQ"]),
            children: [
                (0, i.jsx)(l.dOG, {
                    label: h.intl.string(x.default.khuuzv),
                    description: h.intl.string(x.default["8EWsJ8"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => c.e.updateSetting(e),
                }),
                (0, i.jsx)(l.dOG, {
                    label: h.intl.string(x.default.Uz5Ipi),
                    description: h.intl.string(x.default.CZI2Gb),
                    id: "allow-vc-join-without-request",
                    checked: t,
                    onChange: (e) => c.UM.updateSetting(e),
                }),
            ],
        }),
    });
}

function O() {
    let e = c.tz.useSetting(),
        t = o.isPlatformEmbedded ? h.intl.string(x.default.UQ9RHJ) : h.intl.string(h.t.oKqC4t);
    return (0, i.jsx)(a.x, {
        setting: u.H.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(l.BJc, {
            gap: 32,
            children: [
                (0, i.jsx)("div", {
                    children: h.intl.string(x.default.t2YsrV),
                }),
                (0, i.jsx)(l.dOG, {
                    label: h.intl.string(x.default.WhdCGP),
                    description: t,
                    id: "share-my-activity",
                    checked: e,
                    onChange: c.tz.updateSetting,
                }),
            ],
        }),
    });
}

function S() {
    return (0, i.jsx)(a.x, {
        setting: u.H.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(l.ZpM, {
            type: l.ZpM.Types.PRIMARY,
            className: A.AX,
            children: (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: h.intl.format(h.t.xvCsx4, {
                    termsLink: g.X7G.TERMS,
                    privacyLink: g.X7G.PRIVACY,
                }),
            }),
        }),
    });
}
