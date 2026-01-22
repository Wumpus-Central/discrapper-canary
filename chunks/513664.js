n.d(t, {
    Ay: () => g,
    dd: () => m,
    lD: () => O,
});
var r = n(627968);
n(64700);
var i = n(873298),
    a = n(397927),
    s = n(285058),
    o = n(195043),
    l = n(723702),
    c = n(253932),
    u = n(790174),
    d = n(531525),
    f = n(652215),
    p = n(985018),
    _ = n(536482),
    h = n(208746);

function m() {
    let e = c.tz.useSetting();
    return (0, r.jsxs)("div", {
        className: h.QF,
        children: [
            (0, r.jsxs)("div", {
                className: h.v_,
                children: [
                    (0, r.jsx)(a.Heading, {
                        className: h.n7,
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: p.intl.string(p.t.TqdOvC),
                    }),
                    !e &&
                        (0, r.jsx)("div", {
                            className: h.ZT,
                            children: (0, r.jsx)(a.wx6, {
                                type: "warning",
                                children: p.intl.string(_.default["xxI0/W"]),
                            }),
                        }),
                ],
            }),
            (0, r.jsx)(s.A, {}),
        ],
    });
}

function g(e) {
    let { className: t } = e;
    return (0, r.jsxs)(u.A, {
        className: t,
        title: p.intl.string(p.t.Cq98yL),
        children: [
            (0, r.jsx)(y, {}),
            (0, r.jsx)(a.cGx, {
                gap: 32,
            }),
            (0, r.jsx)(E, {}),
            (0, r.jsx)(a.cGx, {
                gap: 32,
            }),
            (0, r.jsx)(b, {}),
            (0, r.jsx)(a.cGx, {
                gap: 32,
            }),
            (0, r.jsx)(O, {}),
        ],
    });
}

function E() {
    let e = c._Z.useSetting(),
        t = (e) => {
            c._Z.updateSetting(e);
        },
        n = [
            {
                value: i.Qd.ACTIVITY_STATUS_ON,
                name: p.intl.string(p.t.UzGMH9),
            },
            {
                value: i.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                name: p.intl.string(_.default["/sAeRY"]),
            },
            {
                value: i.Qd.ACTIVITY_STATUS_OFF,
                name: p.intl.string(_.default.m3oL7Q),
            },
        ];
    return (0, r.jsxs)(a.nVY, {
        label: p.intl.string(_.default.TG0QsS),
        description: p.intl.string(_.default.OO17Lg),
        children: [
            (0, r.jsx)(a.z6M, {
                label: p.intl.string(_.default["/LHVbt"]),
                options: n,
                value: e,
                onChange: (e) => t(e),
            }),
            (0, r.jsx)(m, {}),
        ],
    });
}

function b() {
    let e = c.e.useSetting(),
        t = c.UM.useSetting();
    return (0, r.jsx)(o.x, {
        setting: d.H.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(a.nVY, {
            label: p.intl.string(_.default["5rYBAQ"]),
            children: [
                (0, r.jsx)(a.dOG, {
                    label: p.intl.string(_.default.khuuzv),
                    description: p.intl.string(_.default["8EWsJ8"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => c.e.updateSetting(e),
                }),
                (0, r.jsx)(a.dOG, {
                    label: p.intl.string(_.default.Uz5Ipi),
                    description: p.intl.string(_.default.CZI2Gb),
                    id: "allow-vc-join-without-request",
                    checked: t,
                    onChange: (e) => c.UM.updateSetting(e),
                }),
            ],
        }),
    });
}

function y() {
    let e = c.tz.useSetting(),
        t = l.isPlatformEmbedded ? p.intl.string(_.default.UQ9RHJ) : p.intl.string(p.t.oKqC4t);
    return (0, r.jsx)(o.x, {
        setting: d.H.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(a.BJc, {
            gap: 32,
            children: [
                (0, r.jsx)("div", {
                    children: p.intl.string(_.default.t2YsrV),
                }),
                (0, r.jsx)(a.dOG, {
                    label: p.intl.string(_.default.WhdCGP),
                    description: t,
                    id: "share-my-activity",
                    checked: e,
                    onChange: c.tz.updateSetting,
                }),
            ],
        }),
    });
}

function O() {
    return (0, r.jsx)(o.x, {
        setting: d.H.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(a.ZpM, {
            type: a.ZpM.Types.PRIMARY,
            className: h.AX,
            children: (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: p.intl.format(p.t.xvCsx4, {
                    termsLink: f.X7G.TERMS,
                    privacyLink: f.X7G.PRIVACY,
                }),
            }),
        }),
    });
}
