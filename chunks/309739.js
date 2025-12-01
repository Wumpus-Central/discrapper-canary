n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(524437),
    a = n(481060),
    o = n(940276),
    s = n(921801),
    l = n(358085),
    c = n(695346),
    u = n(273313),
    d = n(726985),
    f = n(981631),
    p = n(388032),
    _ = n(779334),
    m = n(85240);
function h(e) {
    let { className: t } = e;
    return (0, r.jsxs)(u.Z, {
        className: t,
        title: p.intl.string(p.t.Cq98yL),
        children: [
            (0, r.jsx)(b, {}),
            (0, r.jsx)(a.izJ, { gap: 32 }),
            (0, r.jsx)(g, {}),
            (0, r.jsx)(a.izJ, { gap: 32 }),
            (0, r.jsx)(E, {}),
            (0, r.jsx)(a.izJ, { gap: 32 }),
            (0, r.jsx)(y, {}),
        ],
    });
}
function g() {
    let e = c.G6.useSetting(),
        t = c.no.useSetting(),
        n = (e) => {
            c.no.updateSetting(e);
        },
        s = [
            {
                value: i.GI.ACTIVITY_STATUS_ON,
                name: p.intl.string(p.t.UzGMH9),
            },
            {
                value: i.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                name: p.intl.string(_.default["/sAeRY"]),
            },
            {
                value: i.GI.ACTIVITY_STATUS_OFF,
                name: p.intl.string(_.default.m3oL7Q),
            },
        ];
    return (0, r.jsxs)(a.C3N, {
        label: p.intl.string(_.default.TG0QsS),
        description: p.intl.string(_.default.OO17Lg),
        children: [
            (0, r.jsx)(a.FXm, {
                label: p.intl.string(_.default["/LHVbt"]),
                options: s,
                value: t,
                onChange: (e) => n(e),
            }),
            (0, r.jsxs)("div", {
                className: m.myServersContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.myServersHeaderContainer,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                className: m.myServersTitle,
                                variant: "heading-md/medium",
                                color: "header-primary",
                                children: p.intl.string(p.t.TqdOvC),
                            }),
                            !e &&
                                (0, r.jsx)("div", {
                                    className: m.myServersIgnoredWarning,
                                    children: (0, r.jsx)(a.M14, {
                                        type: "warning",
                                        children: p.intl.string(_.default["xxI0/W"]),
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsx)(o.Z, {}),
                ],
            }),
        ],
    });
}
function E() {
    let e = c.cP.useSetting(),
        t = c.Ou.useSetting();
    return (0, r.jsx)(s.F, {
        setting: d.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(a.C3N, {
            label: p.intl.string(_.default["5rYBAQ"]),
            children: [
                (0, r.jsx)(a.rsf, {
                    label: p.intl.string(_.default.khuuzv),
                    description: p.intl.string(_.default["8EWsJ8"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => c.cP.updateSetting(e),
                }),
                (0, r.jsx)(a.rsf, {
                    label: p.intl.string(_.default.Uz5Ipi),
                    description: p.intl.string(_.default.CZI2Gb),
                    id: "allow-vc-join-without-request",
                    checked: t,
                    onChange: (e) => c.Ou.updateSetting(e),
                }),
            ],
        }),
    });
}
function b() {
    let e = c.G6.useSetting(),
        t = l.isPlatformEmbedded ? p.intl.string(_.default.UQ9RHJ) : p.intl.string(p.t.oKqC4t);
    return (0, r.jsx)(s.F, {
        setting: d.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(a.Kqy, {
            gap: 32,
            children: [
                (0, r.jsx)("div", { children: p.intl.string(_.default.t2YsrV) }),
                (0, r.jsx)(a.rsf, {
                    label: p.intl.string(_.default.WhdCGP),
                    description: t,
                    id: "share-my-activity",
                    checked: e,
                    onChange: c.G6.updateSetting,
                }),
            ],
        }),
    });
}
function y() {
    return (0, r.jsx)(s.F, {
        setting: d.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(a.Zbd, {
            type: a.Zbd.Types.PRIMARY,
            className: m.privacyTermsCard,
            children: (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: p.intl.format(p.t.xvCsx4, {
                    termsLink: f.EYA.TERMS,
                    privacyLink: f.EYA.PRIVACY,
                }),
            }),
        }),
    });
}
