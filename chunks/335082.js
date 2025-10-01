n.d(t, { Z: () => I });
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(538534),
    o = n(755721),
    s = n(481060),
    l = n(921801),
    c = n(695346),
    u = n(273313),
    d = n(358085),
    f = n(940276),
    _ = n(981631),
    p = n(726985),
    h = n(893867),
    m = n(388032),
    g = n(61545);
function E(e) {
    let { label: t, sublabel: n, id: i, checked: a, onChange: l } = e;
    return (0, r.jsxs)("div", {
        className: g.settingSwitch,
        children: [
            (0, r.jsxs)("label", {
                className: g.settingSwitchLabel,
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
function b() {
    let e = c.G6.useSetting(),
        t = c.no.useSetting(),
        n = (e) => {
            c.no.updateSetting(e);
        },
        o = [
            {
                value: i.GI.ACTIVITY_STATUS_ON,
                name: m.intl.string(m.t.UzGMHx),
            },
            {
                value: i.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                name: m.intl.string(h.default["/sAeRU"]),
            },
            {
                value: i.GI.ACTIVITY_STATUS_OFF,
                name: m.intl.string(h.default.m3oL7e),
            },
        ];
    return (0, r.jsx)(s.hjN, {
        className: g.formSection,
        children: (0, r.jsxs)(s.y5t, {
            component: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.X6q, {
                        className: g.formTitle,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children: m.intl.string(h.default.TG0Qsb),
                    }),
                    (0, r.jsx)(s.R94, {
                        className: g.formDescription,
                        type: s.R94.Types.DESCRIPTION,
                        children: m.intl.string(h.default.OO17Li),
                    }),
                ],
            }),
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(s.X6q, {
                            className: g.defaultSetting,
                            variant: "heading-md/medium",
                            color: "header-primary",
                            children: m.intl.string(h.default["/LHVbm"]),
                        }),
                        (0, r.jsx)(a.E, {
                            options: o,
                            value: t,
                            onChange: (e) => n(e),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: g.myServersContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: g.myServersHeaderContainer,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    className: g.myServersTitle,
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: m.intl.string(m.t.TqdOvL),
                                }),
                                !e &&
                                    (0, r.jsx)(s.Wn, {
                                        className: g.myServersIgnoredWarning,
                                        messageType: s.QYI.WARNING,
                                        textColor: "text-feedback-warning",
                                        children: m.intl.string(h.default["xxI0/f"]),
                                    }),
                            ],
                        }),
                        (0, r.jsx)(f.Z, {}),
                    ],
                }),
            ],
        }),
    });
}
function y() {
    let e = c.cP.useSetting(),
        t = c.Ou.useSetting();
    return (0, r.jsx)(l.F, {
        setting: p.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(s.hjN, {
            className: g.formSection,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.X6q, {
                        className: g.formTitle,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children: m.intl.string(h.default["5rYBAQ"]),
                    }),
                }),
                (0, r.jsx)(E, {
                    label: m.intl.string(h.default.khuuzs),
                    sublabel: m.intl.string(h.default["8EWsJy"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => c.cP.updateSetting(e),
                }),
                (0, r.jsx)(E, {
                    label: m.intl.string(h.default.Uz5Ipq),
                    sublabel: m.intl.string(h.default.CZI2GR),
                    id: "allow-vc-join-without-request",
                    checked: t,
                    onChange: (e) => c.Ou.updateSetting(e),
                }),
            ],
        }),
    });
}
function O() {
    let e = c.G6.useSetting(),
        t = d.isPlatformEmbedded ? m.intl.string(h.default.UQ9RHB) : m.intl.string(m.t.oKqC4u);
    return (0, r.jsx)(l.F, {
        setting: p.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(s.hjN, {
            className: g.formSection,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.R94, {
                        className: g.formDescription,
                        type: s.R94.Types.DESCRIPTION,
                        children: m.intl.string(h.default.t2Ysra),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: g.switchContainer,
                    children: (0, r.jsx)(E, {
                        label: m.intl.string(h.default.WhdCGB),
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
function v() {
    return (0, r.jsx)(l.F, {
        setting: p.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(s.hjN, {
            children: (0, r.jsx)(s.ToO, {
                type: s.ToO.Types.PRIMARY,
                body: m.intl.format(m.t.xvCsx8, {
                    termsLink: _.EYA.TERMS,
                    privacyLink: _.EYA.PRIVACY,
                }),
            }),
        }),
    });
}
let I = function (e) {
    let { className: t } = e;
    return (0, r.jsxs)(u.Z, {
        className: t,
        title: m.intl.string(m.t.Cq98yM),
        children: [
            (0, r.jsx)(O, {}),
            (0, r.jsx)(s.izJ, { className: g.divider }),
            (0, r.jsx)(b, {}),
            (0, r.jsx)(s.izJ, { className: g.divider }),
            (0, r.jsx)(y, {}),
            (0, r.jsx)(s.izJ, { className: g.divider }),
            (0, r.jsx)(v, {}),
        ],
    });
};
