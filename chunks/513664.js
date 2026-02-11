n.d(t, { Ay: () => x, dd: () => h, lD: () => T });
var i = n(627968);
n(64700);
var s = n(873298),
    a = n(397927),
    l = n(285058),
    r = n(195043),
    o = n(723702),
    c = n(253932),
    d = n(790174),
    u = n(531525),
    _ = n(652215),
    m = n(985018),
    A = n(730844),
    g = n(13476);
function h() {
    let e = c.tz.useSetting();
    return (0, i.jsxs)("div", {
        className: g.QF,
        children: [
            (0, i.jsxs)("div", {
                className: g.v_,
                children: [
                    (0, i.jsx)(a.Heading, {
                        className: g.n7,
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: m.intl.string(m.t.TqdOvC),
                    }),
                    !e &&
                        (0, i.jsx)("div", {
                            className: g.ZT,
                            children: (0, i.jsx)(a.wx6, {
                                type: "warning",
                                children: m.intl.string(A.default["xxI0/W"]),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)(l.A, {}),
        ],
    });
}
function x(e) {
    let { className: t } = e;
    return (0, i.jsxs)(d.A, {
        className: t,
        title: m.intl.string(m.t.Cq98yL),
        children: [
            (0, i.jsx)(C, {}),
            (0, i.jsx)(a.cGx, { gap: 32 }),
            (0, i.jsx)(p, {}),
            (0, i.jsx)(a.cGx, { gap: 32 }),
            (0, i.jsx)(E, {}),
            (0, i.jsx)(a.cGx, { gap: 32 }),
            (0, i.jsx)(T, {}),
        ],
    });
}
function p() {
    let e = c._Z.useSetting(),
        t = [
            { value: s.Qd.ACTIVITY_STATUS_ON, name: m.intl.string(m.t.UzGMH9) },
            { value: s.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: m.intl.string(A.default["/sAeRY"]) },
            { value: s.Qd.ACTIVITY_STATUS_OFF, name: m.intl.string(A.default.m3oL7Q) },
        ];
    return (0, i.jsxs)(a.nVY, {
        label: m.intl.string(A.default.TG0QsS),
        description: m.intl.string(A.default.OO17Lg),
        children: [
            (0, i.jsx)(a.z6M, {
                label: m.intl.string(A.default["/LHVbt"]),
                options: t,
                value: e,
                onChange: (e) => {
                    c._Z.updateSetting(e);
                },
            }),
            (0, i.jsx)(h, {}),
        ],
    });
}
function E() {
    let e = c.e.useSetting(),
        t = c.UM.useSetting();
    return (0, i.jsx)(r.x, {
        setting: u.H.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(a.nVY, {
            label: m.intl.string(A.default["5rYBAQ"]),
            children: [
                (0, i.jsx)(a.dOG, {
                    label: m.intl.string(A.default.khuuzv),
                    description: m.intl.string(A.default["8EWsJ8"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => c.e.updateSetting(e),
                }),
                (0, i.jsx)(a.dOG, {
                    label: m.intl.string(A.default.Uz5Ipi),
                    description: m.intl.string(A.default.CZI2Gb),
                    id: "allow-vc-join-without-request",
                    checked: t,
                    onChange: (e) => c.UM.updateSetting(e),
                }),
            ],
        }),
    });
}
function C() {
    let e = c.tz.useSetting(),
        t = o.isPlatformEmbedded ? m.intl.string(A.default.UQ9RHJ) : m.intl.string(m.t.oKqC4t);
    return (0, i.jsx)(r.x, {
        setting: u.H.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(a.BJc, {
            gap: 32,
            children: [
                (0, i.jsx)("div", { children: m.intl.string(A.default.t2YsrV) }),
                (0, i.jsx)(a.dOG, {
                    label: m.intl.string(A.default.WhdCGP),
                    description: t,
                    id: "share-my-activity",
                    checked: e,
                    onChange: c.tz.updateSetting,
                }),
            ],
        }),
    });
}
function T() {
    return (0, i.jsx)(r.x, {
        setting: u.H.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(a.ZpM, {
            type: a.ZpM.Types.PRIMARY,
            className: g.AX,
            children: (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: m.intl.format(m.t.xvCsx4, { termsLink: _.X7G.TERMS, privacyLink: _.X7G.PRIVACY }),
            }),
        }),
    });
}
