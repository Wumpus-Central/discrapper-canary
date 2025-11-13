n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(481060),
    o = n(940276),
    s = n(921801),
    l = n(358085),
    c = n(695346),
    u = n(273313),
    d = n(726985),
    f = n(981631),
    _ = n(388032),
    p = n(361742),
    h = n(85240);
function m(e) {
    let { className: t } = e;
    return (0, r.jsxs)(u.Z, {
        className: t,
        title: _.intl.string(_.t.Cq98yL),
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
                name: _.intl.string(_.t.UzGMH9),
            },
            {
                value: i.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                name: _.intl.string(p.default["/sAeRY"]),
            },
            {
                value: i.GI.ACTIVITY_STATUS_OFF,
                name: _.intl.string(p.default.m3oL7Q),
            },
        ];
    return (0, r.jsxs)(a.C3N, {
        label: _.intl.string(p.default.TG0QsS),
        description: _.intl.string(p.default.OO17Lg),
        children: [
            (0, r.jsx)(a.FXm, {
                label: _.intl.string(p.default["/LHVbt"]),
                options: s,
                value: t,
                onChange: (e) => n(e),
            }),
            (0, r.jsxs)("div", {
                className: h.myServersContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.myServersHeaderContainer,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                className: h.myServersTitle,
                                variant: "heading-md/medium",
                                color: "header-primary",
                                children: _.intl.string(_.t.TqdOvC),
                            }),
                            !e &&
                                (0, r.jsx)("div", {
                                    className: h.myServersIgnoredWarning,
                                    children: (0, r.jsx)(a.M14, {
                                        type: "warning",
                                        children: _.intl.string(p.default["xxI0/W"]),
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
            label: _.intl.string(p.default["5rYBAQ"]),
            children: [
                (0, r.jsx)(a.rsf, {
                    label: _.intl.string(p.default.khuuzv),
                    description: _.intl.string(p.default["8EWsJ8"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => c.cP.updateSetting(e),
                }),
                (0, r.jsx)(a.rsf, {
                    label: _.intl.string(p.default.Uz5Ipi),
                    description: _.intl.string(p.default.CZI2Gb),
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
        t = l.isPlatformEmbedded ? _.intl.string(p.default.UQ9RHJ) : _.intl.string(_.t.oKqC4t);
    return (0, r.jsx)(s.F, {
        setting: d.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(a.Kqy, {
            gap: 32,
            children: [
                (0, r.jsx)("div", { children: _.intl.string(p.default.t2YsrV) }),
                (0, r.jsx)(a.rsf, {
                    label: _.intl.string(p.default.WhdCGP),
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
            className: h.privacyTermsCard,
            children: (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: _.intl.format(_.t.xvCsx4, {
                    termsLink: f.EYA.TERMS,
                    privacyLink: f.EYA.PRIVACY,
                }),
            }),
        }),
    });
}
