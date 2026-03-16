n.d(t, { Ay: () => E, dd: () => T, lD: () => b });
var i = n(627968),
    s = n(64700),
    l = n(873298),
    r = n(397927),
    a = n(334726),
    o = n(365258),
    d = n(285058),
    c = n(195043),
    u = n(723702),
    _ = n(253932),
    m = n(790174),
    g = n(531525),
    A = n(652215),
    h = n(985018),
    x = n(536482),
    p = n(208746);
function T() {
    let e = _.tz.useSetting();
    return (0, i.jsxs)("div", {
        className: p.QF,
        children: [
            (0, i.jsxs)("div", {
                className: p.v_,
                children: [
                    (0, i.jsx)(r.Heading, {
                        className: p.n7,
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: h.intl.string(h.t.TqdOvC),
                    }),
                    !e &&
                        (0, i.jsx)("div", {
                            className: p.ZT,
                            children: (0, i.jsx)(r.wx6, {
                                type: "warning",
                                children: h.intl.string(x.default["xxI0/W"]),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)(d.A, {}),
        ],
    });
}
function E(e) {
    let { className: t } = e;
    return (0, i.jsxs)(m.A, {
        className: t,
        title: h.intl.string(h.t.Cq98yL),
        children: [
            (0, i.jsx)(N, {}),
            (0, i.jsx)(r.cGx, { gap: 32 }),
            (0, i.jsx)(S, {}),
            (0, i.jsx)(r.cGx, { gap: 32 }),
            (0, i.jsx)(f, {}),
            (0, i.jsx)(r.cGx, { gap: 32 }),
            (0, i.jsx)(b, {}),
        ],
    });
}
function C(e) {
    let t = _._Z.getSetting();
    if ((_._Z.updateSetting(e), !(0, a.r)("UserSettingsActivityPrivacy"))) return;
    let s = (0, o.g8)(t, e);
    if (null == s) return;
    let l = (0, o.Xc)(e);
    (0, r.mMO)(async () => {
        let { default: e } = await n.e("41996").then(n.bind(n, 32167));
        return (t) =>
            (0, i.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
    });
}
function S() {
    let e = _._Z.useSetting(),
        t = (0, a.i)("UserSettingsActivityPrivacy"),
        n = s.useMemo(
            () =>
                t
                    ? [
                          {
                              value: l.Qd.ACTIVITY_STATUS_OFF,
                              name: h.intl.string(h.t.FzgQna),
                              desc: h.intl.string(h.t.SQxoyc),
                          },
                          {
                              value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                              name: h.intl.string(h.t["1hvuGH"]),
                              desc: h.intl.string(h.t.odUCPE),
                          },
                          { value: l.Qd.ACTIVITY_STATUS_ON, name: h.intl.string(h.t.fQc5la) },
                      ]
                    : [
                          { value: l.Qd.ACTIVITY_STATUS_ON, name: h.intl.string(h.t.UzGMH9) },
                          { value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: h.intl.string(x.default["/sAeRY"]) },
                          { value: l.Qd.ACTIVITY_STATUS_OFF, name: h.intl.string(x.default.m3oL7Q) },
                      ],
            [t],
        ),
        o = t ? h.intl.string(h.t.vpgck1) : h.intl.string(x.default["/LHVbt"]);
    return (0, i.jsxs)(r.nVY, {
        label: h.intl.string(x.default.TG0QsS),
        description: h.intl.string(x.default.OO17Lg),
        children: [(0, i.jsx)(r.z6M, { label: o, options: n, value: e, onChange: C }), (0, i.jsx)(T, {})],
    });
}
function f() {
    let e = _.e.useSetting(),
        t = _.UM.useSetting();
    return (0, i.jsx)(c.x, {
        setting: g.H.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(r.nVY, {
            label: h.intl.string(x.default["5rYBAQ"]),
            children: [
                (0, i.jsx)(r.dOG, {
                    label: h.intl.string(x.default.khuuzv),
                    description: h.intl.string(x.default["8EWsJ8"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => _.e.updateSetting(e),
                }),
                (0, i.jsx)(r.dOG, {
                    label: h.intl.string(x.default.Uz5Ipi),
                    description: h.intl.string(x.default.CZI2Gb),
                    id: "allow-vc-join-without-request",
                    checked: t,
                    onChange: (e) => _.UM.updateSetting(e),
                }),
            ],
        }),
    });
}
function N() {
    let e = _.tz.useSetting(),
        t = u.isPlatformEmbedded ? h.intl.string(x.default.UQ9RHJ) : h.intl.string(h.t.oKqC4t);
    return (0, i.jsx)(c.x, {
        setting: g.H.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(r.BJc, {
            gap: 32,
            children: [
                (0, i.jsx)("div", { children: h.intl.string(x.default.t2YsrV) }),
                (0, i.jsx)(r.dOG, {
                    label: h.intl.string(x.default.WhdCGP),
                    description: t,
                    id: "share-my-activity",
                    checked: e,
                    onChange: _.tz.updateSetting,
                }),
            ],
        }),
    });
}
function b() {
    return (0, i.jsx)(c.x, {
        setting: g.H.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(r.ZpM, {
            type: r.ZpM.Types.PRIMARY,
            className: p.AX,
            children: (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                children: h.intl.format(h.t.xvCsx4, { termsLink: A.X7G.TERMS, privacyLink: A.X7G.PRIVACY }),
            }),
        }),
    });
}
