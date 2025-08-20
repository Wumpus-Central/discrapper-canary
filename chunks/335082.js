n.d(t, { Z: () => y });
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(481060),
    o = n(921801),
    s = n(695346),
    l = n(358085),
    c = n(940276),
    u = n(981631),
    d = n(726985),
    f = n(933554),
    _ = n(388032),
    p = n(764055);
function h(e) {
    let { label: t, sublabel: n, id: i, checked: o, onChange: s } = e;
    return (0, r.jsxs)("div", {
        className: p.settingSwitch,
        children: [
            (0, r.jsxs)("label", {
                className: p.settingSwitchLabel,
                htmlFor: i,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-md/semibold",
                        children: t,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: n,
                    }),
                ],
            }),
            (0, r.jsx)(a.rsf, {
                id: i,
                checked: o,
                onChange: s,
            }),
        ],
    });
}
function m() {
    let e = s.G6.useSetting(),
        t = s.no.useSetting(),
        n = (e) => {
            s.no.updateSetting(e);
        },
        o = [
            {
                value: i.GI.ACTIVITY_STATUS_ON,
                name: _.intl.string(_.t.UzGMHx),
            },
            {
                value: i.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                name: _.intl.string(f.default["/sAeRU"]),
            },
            {
                value: i.GI.ACTIVITY_STATUS_OFF,
                name: _.intl.string(f.default.m3oL7e),
            },
        ];
    return (0, r.jsx)(a.hjN, {
        className: p.formSection,
        children: (0, r.jsxs)(a.y5t, {
            component: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(a.X6q, {
                        className: p.formTitle,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children: _.intl.string(f.default.TG0Qsb),
                    }),
                    (0, r.jsx)(a.R94, {
                        className: p.formDescription,
                        type: a.R94.Types.DESCRIPTION,
                        children: _.intl.string(f.default.OO17Li),
                    }),
                ],
            }),
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(a.X6q, {
                            className: p.defaultSetting,
                            variant: "heading-md/medium",
                            color: "header-primary",
                            children: _.intl.string(f.default["/LHVbm"]),
                        }),
                        (0, r.jsx)(a.FXm, {
                            options: o,
                            value: t,
                            onChange: (e) => n(e.value),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: p.myServersContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: p.myServersHeaderContainer,
                            children: [
                                (0, r.jsx)(a.X6q, {
                                    className: p.myServersTitle,
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: _.intl.string(_.t.TqdOvL),
                                }),
                                !e &&
                                    (0, r.jsx)(a.Wn, {
                                        className: p.myServersIgnoredWarning,
                                        messageType: a.QYI.WARNING,
                                        textColor: "text-feedback-warning",
                                        children: _.intl.string(f.default["xxI0/f"]),
                                    }),
                            ],
                        }),
                        (0, r.jsx)(c.Z, {}),
                    ],
                }),
            ],
        }),
    });
}
function g() {
    let e = s.cP.useSetting(),
        t = s.Ou.useSetting();
    return (0, r.jsx)(o.F, {
        setting: d.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(a.hjN, {
            className: p.formSection,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(a.X6q, {
                        className: p.formTitle,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children: _.intl.string(f.default["5rYBAQ"]),
                    }),
                }),
                (0, r.jsx)(h, {
                    label: _.intl.string(f.default.khuuzs),
                    sublabel: _.intl.string(f.default["8EWsJy"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => s.cP.updateSetting(e),
                }),
                (0, r.jsx)(h, {
                    label: _.intl.string(f.default.Uz5Ipq),
                    sublabel: _.intl.string(f.default.CZI2GR),
                    id: "allow-vc-join-without-request",
                    checked: t,
                    onChange: (e) => s.Ou.updateSetting(e),
                }),
            ],
        }),
    });
}
function E() {
    let e = s.G6.useSetting(),
        t = l.isPlatformEmbedded ? _.intl.string(f.default.UQ9RHB) : _.intl.string(_.t.oKqC4u);
    return (0, r.jsx)(o.F, {
        setting: d.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(a.hjN, {
            className: p.formSection,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(a.R94, {
                        className: p.formDescription,
                        type: a.R94.Types.DESCRIPTION,
                        children: _.intl.string(f.default.t2Ysra),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: p.switchContainer,
                    children: (0, r.jsx)(h, {
                        label: _.intl.string(f.default.WhdCGB),
                        sublabel: t,
                        id: "share-my-activity",
                        checked: e,
                        onChange: s.G6.updateSetting,
                    }),
                }),
            ],
        }),
    });
}
function b() {
    return (0, r.jsx)(o.F, {
        setting: d.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(a.hjN, {
            children: (0, r.jsx)(a.ToO, {
                type: a.ToO.Types.PRIMARY,
                body: _.intl.format(_.t.xvCsx8, {
                    termsLink: u.EYA.TERMS,
                    privacyLink: u.EYA.PRIVACY,
                }),
            }),
        }),
    });
}
let y = function (e) {
    let { className: t } = e;
    return (0, r.jsx)(a.hjN, {
        className: t,
        children: (0, r.jsxs)(a.y5t, {
            forceLevel: 1,
            component: (0, r.jsx)(a.X6q, {
                className: p.formTitle,
                variant: "heading-xl/semibold",
                color: "header-primary",
                children: _.intl.string(_.t.Cq98yM),
            }),
            children: [
                (0, r.jsx)(E, {}),
                (0, r.jsx)(a.$i$, { className: p.divider }),
                (0, r.jsx)(m, {}),
                (0, r.jsx)(a.$i$, { className: p.divider }),
                (0, r.jsx)(g, {}),
                (0, r.jsx)(a.$i$, { className: p.divider }),
                (0, r.jsx)(b, {}),
            ],
        }),
    });
};
