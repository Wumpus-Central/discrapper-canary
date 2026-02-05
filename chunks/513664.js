n.d(t, { Ay: () => _, dd: () => p, lD: () => C });
var i = n(627968);
n(64700);
var l = n(873298),
    s = n(397927),
    a = n(285058),
    r = n(195043),
    o = n(723702),
    d = n(253932),
    c = n(790174),
    u = n(531525),
    h = n(652215),
    A = n(985018),
    g = n(536482),
    m = n(208746);
function p() {
    let e = d.tz.useSetting();
    return (0, i.jsxs)("div", {
        className: m.QF,
        children: [
            (0, i.jsxs)("div", {
                className: m.v_,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: m.n7,
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: A.intl.string(A.t.TqdOvC),
                    }),
                    !e &&
                        (0, i.jsx)("div", {
                            className: m.ZT,
                            children: (0, i.jsx)(s.wx6, {
                                type: "warning",
                                children: A.intl.string(g.default["xxI0/W"]),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)(a.A, {}),
        ],
    });
}
function _(e) {
    let { className: t } = e;
    return (0, i.jsxs)(c.A, {
        className: t,
        title: A.intl.string(A.t.Cq98yL),
        children: [
            (0, i.jsx)(E, {}),
            (0, i.jsx)(s.cGx, { gap: 32 }),
            (0, i.jsx)(x, {}),
            (0, i.jsx)(s.cGx, { gap: 32 }),
            (0, i.jsx)(f, {}),
            (0, i.jsx)(s.cGx, { gap: 32 }),
            (0, i.jsx)(C, {}),
        ],
    });
}
function x() {
    let e = d._Z.useSetting(),
        t = [
            { value: l.Qd.ACTIVITY_STATUS_ON, name: A.intl.string(A.t.UzGMH9) },
            { value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: A.intl.string(g.default["/sAeRY"]) },
            { value: l.Qd.ACTIVITY_STATUS_OFF, name: A.intl.string(g.default.m3oL7Q) },
        ];
    return (0, i.jsxs)(s.nVY, {
        label: A.intl.string(g.default.TG0QsS),
        description: A.intl.string(g.default.OO17Lg),
        children: [
            (0, i.jsx)(s.z6M, {
                label: A.intl.string(g.default["/LHVbt"]),
                options: t,
                value: e,
                onChange: (e) => {
                    d._Z.updateSetting(e);
                },
            }),
            (0, i.jsx)(p, {}),
        ],
    });
}
function f() {
    let e = d.e.useSetting(),
        t = d.UM.useSetting();
    return (0, i.jsx)(r.x, {
        setting: u.H.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(s.nVY, {
            label: A.intl.string(g.default["5rYBAQ"]),
            children: [
                (0, i.jsx)(s.dOG, {
                    label: A.intl.string(g.default.khuuzv),
                    description: A.intl.string(g.default["8EWsJ8"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => d.e.updateSetting(e),
                }),
                (0, i.jsx)(s.dOG, {
                    label: A.intl.string(g.default.Uz5Ipi),
                    description: A.intl.string(g.default.CZI2Gb),
                    id: "allow-vc-join-without-request",
                    checked: t,
                    onChange: (e) => d.UM.updateSetting(e),
                }),
            ],
        }),
    });
}
function E() {
    let e = d.tz.useSetting(),
        t = o.isPlatformEmbedded ? A.intl.string(g.default.UQ9RHJ) : A.intl.string(A.t.oKqC4t);
    return (0, i.jsx)(r.x, {
        setting: u.H.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(s.BJc, {
            gap: 32,
            children: [
                (0, i.jsx)("div", { children: A.intl.string(g.default.t2YsrV) }),
                (0, i.jsx)(s.dOG, {
                    label: A.intl.string(g.default.WhdCGP),
                    description: t,
                    id: "share-my-activity",
                    checked: e,
                    onChange: d.tz.updateSetting,
                }),
            ],
        }),
    });
}
function C() {
    return (0, i.jsx)(r.x, {
        setting: u.H.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(s.ZpM, {
            type: s.ZpM.Types.PRIMARY,
            className: m.AX,
            children: (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: A.intl.format(A.t.xvCsx4, { termsLink: h.X7G.TERMS, privacyLink: h.X7G.PRIVACY }),
            }),
        }),
    });
}
