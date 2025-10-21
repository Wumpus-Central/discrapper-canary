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
    p = n(893867),
    h = n(174546);
function m(e) {
    let { className: t } = e;
    return (0, r.jsxs)(u.Z, {
        className: t,
        title: _.intl.string(_.t.Cq98yM),
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
                name: _.intl.string(_.t.UzGMHx),
            },
            {
                value: i.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                name: _.intl.string(p.default["/sAeRU"]),
            },
            {
                value: i.GI.ACTIVITY_STATUS_OFF,
                name: _.intl.string(p.default.m3oL7e),
            },
        ];
    return (0, r.jsxs)(a.C3N, {
        label: _.intl.string(p.default.TG0Qsb),
        description: _.intl.string(p.default.OO17Li),
        children: [
            (0, r.jsx)(a.FXm, {
                label: _.intl.string(p.default["/LHVbm"]),
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
                                children: _.intl.string(_.t.TqdOvL),
                            }),
                            !e &&
                                (0, r.jsx)(a.Wn, {
                                    className: h.myServersIgnoredWarning,
                                    messageType: a.QYI.WARNING,
                                    textColor: "text-feedback-warning",
                                    children: _.intl.string(p.default["xxI0/f"]),
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
                    label: _.intl.string(p.default.khuuzs),
                    description: _.intl.string(p.default["8EWsJy"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => c.cP.updateSetting(e),
                }),
                (0, r.jsx)(a.rsf, {
                    label: _.intl.string(p.default.Uz5Ipq),
                    description: _.intl.string(p.default.CZI2GR),
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
        t = l.isPlatformEmbedded ? _.intl.string(p.default.UQ9RHB) : _.intl.string(_.t.oKqC4u);
    return (0, r.jsx)(s.F, {
        setting: d.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(a.Kqy, {
            gap: 32,
            children: [
                (0, r.jsx)("div", { children: _.intl.string(p.default.t2Ysra) }),
                (0, r.jsx)(a.rsf, {
                    label: _.intl.string(p.default.WhdCGB),
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
        children: (0, r.jsx)(a.ToO, {
            type: a.ToO.Types.PRIMARY,
            body: _.intl.format(_.t.xvCsx8, {
                termsLink: f.EYA.TERMS,
                privacyLink: f.EYA.PRIVACY,
            }),
        }),
    });
}
