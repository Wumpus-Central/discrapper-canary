n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(538534),
    o = n(481060),
    s = n(940276),
    l = n(921801),
    c = n(358085),
    u = n(695346),
    d = n(273313),
    f = n(726985),
    _ = n(981631),
    p = n(388032),
    h = n(933554),
    m = n(85240);
function g(e) {
    let { className: t } = e;
    return (0, r.jsxs)(d.Z, {
        className: t,
        title: p.intl.string(p.t.Cq98yM),
        children: [
            (0, r.jsx)(y, {}),
            (0, r.jsx)(o.izJ, { gap: 32 }),
            (0, r.jsx)(E, {}),
            (0, r.jsx)(o.izJ, { gap: 32 }),
            (0, r.jsx)(b, {}),
            (0, r.jsx)(o.izJ, { gap: 32 }),
            (0, r.jsx)(O, {}),
        ],
    });
}
function E() {
    let e = u.G6.useSetting(),
        t = u.no.useSetting(),
        n = (e) => {
            u.no.updateSetting(e);
        },
        l = [
            {
                value: i.GI.ACTIVITY_STATUS_ON,
                name: p.intl.string(p.t.UzGMHx),
            },
            {
                value: i.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                name: p.intl.string(h.default["/sAeRU"]),
            },
            {
                value: i.GI.ACTIVITY_STATUS_OFF,
                name: p.intl.string(h.default.m3oL7e),
            },
        ];
    return (0, r.jsxs)(o.C3N, {
        label: p.intl.string(h.default.TG0Qsb),
        description: p.intl.string(h.default.OO17Li),
        children: [
            (0, r.jsx)(a.E, {
                label: p.intl.string(h.default["/LHVbm"]),
                options: l,
                value: t,
                onChange: (e) => n(e),
            }),
            (0, r.jsxs)("div", {
                className: m.myServersContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.myServersHeaderContainer,
                        children: [
                            (0, r.jsx)(o.Heading, {
                                className: m.myServersTitle,
                                variant: "heading-md/medium",
                                color: "header-primary",
                                children: p.intl.string(p.t.TqdOvL),
                            }),
                            !e &&
                                (0, r.jsx)(o.Wn, {
                                    className: m.myServersIgnoredWarning,
                                    messageType: o.QYI.WARNING,
                                    textColor: "text-feedback-warning",
                                    children: p.intl.string(h.default["xxI0/f"]),
                                }),
                        ],
                    }),
                    (0, r.jsx)(s.Z, {}),
                ],
            }),
        ],
    });
}
function b() {
    let e = u.cP.useSetting(),
        t = u.Ou.useSetting();
    return (0, r.jsx)(l.F, {
        setting: f.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(o.C3N, {
            label: p.intl.string(h.default["5rYBAQ"]),
            children: [
                (0, r.jsx)(o.rsf, {
                    label: p.intl.string(h.default.khuuzs),
                    description: p.intl.string(h.default["8EWsJy"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => u.cP.updateSetting(e),
                }),
                (0, r.jsx)(o.rsf, {
                    label: p.intl.string(h.default.Uz5Ipq),
                    description: p.intl.string(h.default.CZI2GR),
                    id: "allow-vc-join-without-request",
                    checked: t,
                    onChange: (e) => u.Ou.updateSetting(e),
                }),
            ],
        }),
    });
}
function y() {
    let e = u.G6.useSetting(),
        t = c.isPlatformEmbedded ? p.intl.string(h.default.UQ9RHB) : p.intl.string(p.t.oKqC4u);
    return (0, r.jsx)(l.F, {
        setting: f.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(o.Kqy, {
            gap: 32,
            children: [
                (0, r.jsx)("div", { children: p.intl.string(h.default.t2Ysra) }),
                (0, r.jsx)(o.rsf, {
                    label: p.intl.string(h.default.WhdCGB),
                    description: t,
                    id: "share-my-activity",
                    checked: e,
                    onChange: u.G6.updateSetting,
                }),
            ],
        }),
    });
}
function O() {
    return (0, r.jsx)(l.F, {
        setting: f.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(o.ToO, {
            type: o.ToO.Types.PRIMARY,
            body: p.intl.format(p.t.xvCsx8, {
                termsLink: _.EYA.TERMS,
                privacyLink: _.EYA.PRIVACY,
            }),
        }),
    });
}
