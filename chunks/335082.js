n.d(t, { Z: () => O });
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(538534),
    o = n(481060),
    s = n(921801),
    l = n(695346),
    c = n(273313),
    u = n(358085),
    d = n(940276),
    f = n(981631),
    _ = n(726985),
    p = n(933554),
    h = n(388032),
    m = n(764055);
function g() {
    let e = l.G6.useSetting(),
        t = l.no.useSetting(),
        n = (e) => {
            l.no.updateSetting(e);
        },
        s = [
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
    return (0, r.jsxs)(o.C3N, {
        label: h.intl.string(p.default.TG0Qsb),
        description: h.intl.string(p.default.OO17Li),
        children: [
            (0, r.jsx)(a.E, {
                label: h.intl.string(p.default["/LHVbm"]),
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
                            (0, r.jsx)(o.X6q, {
                                className: m.myServersTitle,
                                variant: "heading-md/medium",
                                color: "header-primary",
                                children: h.intl.string(h.t.TqdOvL),
                            }),
                            !e &&
                                (0, r.jsx)(o.Wn, {
                                    className: m.myServersIgnoredWarning,
                                    messageType: o.QYI.WARNING,
                                    textColor: "text-feedback-warning",
                                    children: h.intl.string(p.default["xxI0/f"]),
                                }),
                        ],
                    }),
                    (0, r.jsx)(d.Z, {}),
                ],
            }),
        ],
    });
}
function E() {
    let e = l.cP.useSetting(),
        t = l.Ou.useSetting();
    return (0, r.jsx)(s.F, {
        setting: _.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(o.C3N, {
            label: h.intl.string(p.default["5rYBAQ"]),
            children: [
                (0, r.jsx)(o.rsf, {
                    label: h.intl.string(p.default.khuuzs),
                    description: h.intl.string(p.default["8EWsJy"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => l.cP.updateSetting(e),
                }),
                (0, r.jsx)(o.rsf, {
                    label: h.intl.string(p.default.Uz5Ipq),
                    description: h.intl.string(p.default.CZI2GR),
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
        t = u.isPlatformEmbedded ? h.intl.string(p.default.UQ9RHB) : h.intl.string(h.t.oKqC4u);
    return (0, r.jsx)(s.F, {
        setting: _.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(o.Kqy, {
            gap: 32,
            children: [
                (0, r.jsx)("div", { children: h.intl.string(p.default.t2Ysra) }),
                (0, r.jsx)(o.rsf, {
                    label: h.intl.string(p.default.WhdCGB),
                    description: t,
                    id: "share-my-activity",
                    checked: e,
                    onChange: l.G6.updateSetting,
                }),
            ],
        }),
    });
}
function y() {
    return (0, r.jsx)(s.F, {
        setting: _.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(o.ToO, {
            type: o.ToO.Types.PRIMARY,
            body: h.intl.format(h.t.xvCsx8, {
                termsLink: f.EYA.TERMS,
                privacyLink: f.EYA.PRIVACY,
            }),
        }),
    });
}
let O = function (e) {
    let { className: t } = e;
    return (0, r.jsxs)(c.Z, {
        className: t,
        title: h.intl.string(h.t.Cq98yM),
        children: [
            (0, r.jsx)(b, {}),
            (0, r.jsx)(o.izJ, { gap: 32 }),
            (0, r.jsx)(g, {}),
            (0, r.jsx)(o.izJ, { gap: 32 }),
            (0, r.jsx)(E, {}),
            (0, r.jsx)(o.izJ, { gap: 32 }),
            (0, r.jsx)(y, {}),
        ],
    });
};
