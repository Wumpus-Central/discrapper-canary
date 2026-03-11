n.d(t, { Ay: () => T, dd: () => E, lD: () => N });
var i = n(627968),
    s = n(64700),
    l = n(873298),
    a = n(397927),
    r = n(334726),
    o = n(365258),
    d = n(285058),
    c = n(195043),
    u = n(723702),
    _ = n(253932),
    g = n(790174),
    A = n(531525),
    m = n(652215),
    h = n(985018),
    p = n(730844),
    x = n(13476);
function E() {
    let e = _.tz.useSetting();
    return (0, i.jsxs)("div", {
        className: x.QF,
        children: [
            (0, i.jsxs)("div", {
                className: x.v_,
                children: [
                    (0, i.jsx)(a.Heading, {
                        className: x.n7,
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: h.intl.string(h.t.TqdOvC),
                    }),
                    !e &&
                        (0, i.jsx)("div", {
                            className: x.ZT,
                            children: (0, i.jsx)(a.wx6, {
                                type: "warning",
                                children: h.intl.string(p.default["xxI0/W"]),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)(d.A, {}),
        ],
    });
}
function T(e) {
    let { className: t } = e;
    return (0, i.jsxs)(g.A, {
        className: t,
        title: h.intl.string(h.t.Cq98yL),
        children: [
            (0, i.jsx)(f, {}),
            (0, i.jsx)(a.cGx, { gap: 32 }),
            (0, i.jsx)(C, {}),
            (0, i.jsx)(a.cGx, { gap: 32 }),
            (0, i.jsx)(I, {}),
            (0, i.jsx)(a.cGx, { gap: 32 }),
            (0, i.jsx)(N, {}),
        ],
    });
}
function S(e) {
    let t = _._Z.getSetting();
    if ((_._Z.updateSetting(e), !(0, r.r)("UserSettingsActivityPrivacy"))) return;
    let s = (0, o.g8)(t, e);
    if (null == s) return;
    let l = (0, o.Xc)(e);
    (0, a.mMO)(async () => {
        let { default: e } = await n.e("41996").then(n.bind(n, 32167));
        return (t) =>
            (0, i.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
    });
}
function C() {
    let e = _._Z.useSetting(),
        t = (0, r.i)("UserSettingsActivityPrivacy"),
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
                          { value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: h.intl.string(p.default["/sAeRY"]) },
                          { value: l.Qd.ACTIVITY_STATUS_OFF, name: h.intl.string(p.default.m3oL7Q) },
                      ],
            [t],
        ),
        o = t ? h.intl.string(h.t.vpgck1) : h.intl.string(p.default["/LHVbt"]);
    return (0, i.jsxs)(a.nVY, {
        label: h.intl.string(p.default.TG0QsS),
        description: h.intl.string(p.default.OO17Lg),
        children: [(0, i.jsx)(a.z6M, { label: o, options: n, value: e, onChange: S }), (0, i.jsx)(E, {})],
    });
}
function I() {
    let e = _.e.useSetting(),
        t = _.UM.useSetting();
    return (0, i.jsx)(c.x, {
        setting: A.H.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(a.nVY, {
            label: h.intl.string(p.default["5rYBAQ"]),
            children: [
                (0, i.jsx)(a.dOG, {
                    label: h.intl.string(p.default.khuuzv),
                    description: h.intl.string(p.default["8EWsJ8"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => _.e.updateSetting(e),
                }),
                (0, i.jsx)(a.dOG, {
                    label: h.intl.string(p.default.Uz5Ipi),
                    description: h.intl.string(p.default.CZI2Gb),
                    id: "allow-vc-join-without-request",
                    checked: t,
                    onChange: (e) => _.UM.updateSetting(e),
                }),
            ],
        }),
    });
}
function f() {
    let e = _.tz.useSetting(),
        t = u.isPlatformEmbedded ? h.intl.string(p.default.UQ9RHJ) : h.intl.string(h.t.oKqC4t);
    return (0, i.jsx)(c.x, {
        setting: A.H.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(a.BJc, {
            gap: 32,
            children: [
                (0, i.jsx)("div", { children: h.intl.string(p.default.t2YsrV) }),
                (0, i.jsx)(a.dOG, {
                    label: h.intl.string(p.default.WhdCGP),
                    description: t,
                    id: "share-my-activity",
                    checked: e,
                    onChange: _.tz.updateSetting,
                }),
            ],
        }),
    });
}
function N() {
    return (0, i.jsx)(c.x, {
        setting: A.H.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(a.ZpM, {
            type: a.ZpM.Types.PRIMARY,
            className: x.AX,
            children: (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: h.intl.format(h.t.xvCsx4, { termsLink: m.X7G.TERMS, privacyLink: m.X7G.PRIVACY }),
            }),
        }),
    });
}
