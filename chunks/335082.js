n.d(t, { Z: () => v });
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(538534),
    o = n(755721),
    s = n(481060),
    l = n(921801),
    c = n(695346),
    u = n(358085),
    d = n(940276),
    f = n(981631),
    _ = n(726985),
    p = n(933554),
    h = n(388032),
    m = n(764055);
function g(e) {
    let { label: t, sublabel: n, id: i, checked: a, onChange: l } = e;
    return (0, r.jsxs)("div", {
        className: m.settingSwitch,
        children: [
            (0, r.jsxs)("label", {
                className: m.settingSwitchLabel,
                htmlFor: i,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-md/semibold",
                        children: t,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: n,
                    }),
                ],
            }),
            (0, r.jsx)(o.T2, {
                id: i,
                checked: a,
                onChange: l,
            }),
        ],
    });
}
function E() {
    let e = c.G6.useSetting(),
        t = c.no.useSetting(),
        n = (e) => {
            c.no.updateSetting(e);
        },
        o = [
            {
                value: i.GI.ACTIVITY_STATUS_ON,
                name: h.intl.string(h.t.UzGMHx),
            },
            {
                value: i.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                name: h.intl.string(p.default["/sAeRU"]),
            },
            {
                value: i.GI.ACTIVITY_STATUS_OFF,
                name: h.intl.string(p.default.m3oL7e),
            },
        ];
    return (0, r.jsx)(s.hjN, {
        className: m.formSection,
        children: (0, r.jsxs)(s.y5t, {
            component: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.X6q, {
                        className: m.formTitle,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children: h.intl.string(p.default.TG0Qsb),
                    }),
                    (0, r.jsx)(s.R94, {
                        className: m.formDescription,
                        type: s.R94.Types.DESCRIPTION,
                        children: h.intl.string(p.default.OO17Li),
                    }),
                ],
            }),
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(s.X6q, {
                            className: m.defaultSetting,
                            variant: "heading-md/medium",
                            color: "header-primary",
                            children: h.intl.string(p.default["/LHVbm"]),
                        }),
                        (0, r.jsx)(a.E, {
                            options: o,
                            value: t,
                            onChange: (e) => n(e),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: m.myServersContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: m.myServersHeaderContainer,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    className: m.myServersTitle,
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: h.intl.string(h.t.TqdOvL),
                                }),
                                !e &&
                                    (0, r.jsx)(s.Wn, {
                                        className: m.myServersIgnoredWarning,
                                        messageType: s.QYI.WARNING,
                                        textColor: "text-feedback-warning",
                                        children: h.intl.string(p.default["xxI0/f"]),
                                    }),
                            ],
                        }),
                        (0, r.jsx)(d.Z, {}),
                    ],
                }),
            ],
        }),
    });
}
function b() {
    let e = c.cP.useSetting(),
        t = c.Ou.useSetting();
    return (0, r.jsx)(l.F, {
        setting: _.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(s.hjN, {
            className: m.formSection,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.X6q, {
                        className: m.formTitle,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children: h.intl.string(p.default["5rYBAQ"]),
                    }),
                }),
                (0, r.jsx)(g, {
                    label: h.intl.string(p.default.khuuzs),
                    sublabel: h.intl.string(p.default["8EWsJy"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => c.cP.updateSetting(e),
                }),
                (0, r.jsx)(g, {
                    label: h.intl.string(p.default.Uz5Ipq),
                    sublabel: h.intl.string(p.default.CZI2GR),
                    id: "allow-vc-join-without-request",
                    checked: t,
                    onChange: (e) => c.Ou.updateSetting(e),
                }),
            ],
        }),
    });
}
function y() {
    let e = c.G6.useSetting(),
        t = u.isPlatformEmbedded ? h.intl.string(p.default.UQ9RHB) : h.intl.string(h.t.oKqC4u);
    return (0, r.jsx)(l.F, {
        setting: _.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(s.hjN, {
            className: m.formSection,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.R94, {
                        className: m.formDescription,
                        type: s.R94.Types.DESCRIPTION,
                        children: h.intl.string(p.default.t2Ysra),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: m.switchContainer,
                    children: (0, r.jsx)(g, {
                        label: h.intl.string(p.default.WhdCGB),
                        sublabel: t,
                        id: "share-my-activity",
                        checked: e,
                        onChange: c.G6.updateSetting,
                    }),
                }),
            ],
        }),
    });
}
function O() {
    return (0, r.jsx)(l.F, {
        setting: _.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(s.hjN, {
            children: (0, r.jsx)(s.ToO, {
                type: s.ToO.Types.PRIMARY,
                body: h.intl.format(h.t.xvCsx8, {
                    termsLink: f.EYA.TERMS,
                    privacyLink: f.EYA.PRIVACY,
                }),
            }),
        }),
    });
}
let v = function (e) {
    let { className: t } = e;
    return (0, r.jsx)(s.hjN, {
        className: t,
        children: (0, r.jsxs)(s.y5t, {
            forceLevel: 1,
            component: (0, r.jsx)(s.X6q, {
                className: m.formTitle,
                variant: "heading-xl/semibold",
                color: "header-primary",
                children: h.intl.string(h.t.Cq98yM),
            }),
            children: [
                (0, r.jsx)(y, {}),
                (0, r.jsx)(s.$i$, { className: m.divider }),
                (0, r.jsx)(E, {}),
                (0, r.jsx)(s.$i$, { className: m.divider }),
                (0, r.jsx)(b, {}),
                (0, r.jsx)(s.$i$, { className: m.divider }),
                (0, r.jsx)(O, {}),
            ],
        }),
    });
};
