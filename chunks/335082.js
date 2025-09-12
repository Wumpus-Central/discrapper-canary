n.d(t, { Z: () => O });
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(755721),
    o = n(481060),
    s = n(921801),
    l = n(695346),
    c = n(358085),
    u = n(940276),
    d = n(981631),
    f = n(726985),
    _ = n(933554),
    p = n(388032),
    h = n(764055);
function m(e) {
    let { label: t, sublabel: n, id: i, checked: s, onChange: l } = e;
    return (0, r.jsxs)("div", {
        className: h.settingSwitch,
        children: [
            (0, r.jsxs)("label", {
                className: h.settingSwitchLabel,
                htmlFor: i,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-md/semibold",
                        children: t,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: n,
                    }),
                ],
            }),
            (0, r.jsx)(a.T2, {
                id: i,
                checked: s,
                onChange: l,
            }),
        ],
    });
}
function g() {
    let e = l.G6.useSetting(),
        t = l.no.useSetting(),
        n = (e) => {
            l.no.updateSetting(e);
        },
        s = [
            {
                value: i.GI.ACTIVITY_STATUS_ON,
                name: p.intl.string(p.t.UzGMHx),
            },
            {
                value: i.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                name: p.intl.string(_.default["/sAeRU"]),
            },
            {
                value: i.GI.ACTIVITY_STATUS_OFF,
                name: p.intl.string(_.default.m3oL7e),
            },
        ];
    return (0, r.jsx)(o.hjN, {
        className: h.formSection,
        children: (0, r.jsxs)(o.y5t, {
            component: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(o.X6q, {
                        className: h.formTitle,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children: p.intl.string(_.default.TG0Qsb),
                    }),
                    (0, r.jsx)(o.R94, {
                        className: h.formDescription,
                        type: o.R94.Types.DESCRIPTION,
                        children: p.intl.string(_.default.OO17Li),
                    }),
                ],
            }),
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(o.X6q, {
                            className: h.defaultSetting,
                            variant: "heading-md/medium",
                            color: "header-primary",
                            children: p.intl.string(_.default["/LHVbm"]),
                        }),
                        (0, r.jsx)(a.Gu, {
                            options: s,
                            value: t,
                            onChange: (e) => n(e.value),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: h.myServersContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: h.myServersHeaderContainer,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    className: h.myServersTitle,
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: p.intl.string(p.t.TqdOvL),
                                }),
                                !e &&
                                    (0, r.jsx)(o.Wn, {
                                        className: h.myServersIgnoredWarning,
                                        messageType: o.QYI.WARNING,
                                        textColor: "text-feedback-warning",
                                        children: p.intl.string(_.default["xxI0/f"]),
                                    }),
                            ],
                        }),
                        (0, r.jsx)(u.Z, {}),
                    ],
                }),
            ],
        }),
    });
}
function E() {
    let e = l.cP.useSetting(),
        t = l.Ou.useSetting();
    return (0, r.jsx)(s.F, {
        setting: f.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(o.hjN, {
            className: h.formSection,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(o.X6q, {
                        className: h.formTitle,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children: p.intl.string(_.default["5rYBAQ"]),
                    }),
                }),
                (0, r.jsx)(m, {
                    label: p.intl.string(_.default.khuuzs),
                    sublabel: p.intl.string(_.default["8EWsJy"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => l.cP.updateSetting(e),
                }),
                (0, r.jsx)(m, {
                    label: p.intl.string(_.default.Uz5Ipq),
                    sublabel: p.intl.string(_.default.CZI2GR),
                    id: "allow-vc-join-without-request",
                    checked: t,
                    onChange: (e) => l.Ou.updateSetting(e),
                }),
            ],
        }),
    });
}
function b() {
    let e = l.G6.useSetting(),
        t = c.isPlatformEmbedded ? p.intl.string(_.default.UQ9RHB) : p.intl.string(p.t.oKqC4u);
    return (0, r.jsx)(s.F, {
        setting: f.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(o.hjN, {
            className: h.formSection,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(o.R94, {
                        className: h.formDescription,
                        type: o.R94.Types.DESCRIPTION,
                        children: p.intl.string(_.default.t2Ysra),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: h.switchContainer,
                    children: (0, r.jsx)(m, {
                        label: p.intl.string(_.default.WhdCGB),
                        sublabel: t,
                        id: "share-my-activity",
                        checked: e,
                        onChange: l.G6.updateSetting,
                    }),
                }),
            ],
        }),
    });
}
function y() {
    return (0, r.jsx)(s.F, {
        setting: f.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(o.hjN, {
            children: (0, r.jsx)(o.ToO, {
                type: o.ToO.Types.PRIMARY,
                body: p.intl.format(p.t.xvCsx8, {
                    termsLink: d.EYA.TERMS,
                    privacyLink: d.EYA.PRIVACY,
                }),
            }),
        }),
    });
}
let O = function (e) {
    let { className: t } = e;
    return (0, r.jsx)(o.hjN, {
        className: t,
        children: (0, r.jsxs)(o.y5t, {
            forceLevel: 1,
            component: (0, r.jsx)(o.X6q, {
                className: h.formTitle,
                variant: "heading-xl/semibold",
                color: "header-primary",
                children: p.intl.string(p.t.Cq98yM),
            }),
            children: [
                (0, r.jsx)(b, {}),
                (0, r.jsx)(o.$i$, { className: h.divider }),
                (0, r.jsx)(g, {}),
                (0, r.jsx)(o.$i$, { className: h.divider }),
                (0, r.jsx)(E, {}),
                (0, r.jsx)(o.$i$, { className: h.divider }),
                (0, r.jsx)(y, {}),
            ],
        }),
    });
};
