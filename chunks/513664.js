n.d(t, { Ay: () => C, dd: () => E, lD: () => b });
var i = n(627968),
    s = n(64700),
    a = n(873298),
    l = n(397927),
    r = n(334726),
    o = n(546351),
    c = n(285058),
    d = n(195043),
    u = n(723702),
    _ = n(253932),
    m = n(790174),
    A = n(531525),
    g = n(652215),
    h = n(985018),
    x = n(730844),
    p = n(13476);
function E() {
    let e = _.tz.useSetting();
    return (0, i.jsxs)("div", {
        className: p.QF,
        children: [
            (0, i.jsxs)("div", {
                className: p.v_,
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: p.n7,
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: h.intl.string(h.t.TqdOvC),
                    }),
                    !e &&
                        (0, i.jsx)("div", {
                            className: p.ZT,
                            children: (0, i.jsx)(l.wx6, {
                                type: "warning",
                                children: h.intl.string(x.default["xxI0/W"]),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)(c.A, {}),
        ],
    });
}
function C(e) {
    let { className: t } = e;
    return (0, i.jsxs)(m.A, {
        className: t,
        title: h.intl.string(h.t.Cq98yL),
        children: [
            (0, i.jsx)(N, {}),
            (0, i.jsx)(l.cGx, { gap: 32 }),
            (0, i.jsx)(I, {}),
            (0, i.jsx)(l.cGx, { gap: 32 }),
            (0, i.jsx)(f, {}),
            (0, i.jsx)(l.cGx, { gap: 32 }),
            (0, i.jsx)(b, {}),
        ],
    });
}
let T = {
    [a.Qd.ACTIVITY_STATUS_OFF]: () => h.intl.string(h.t.FzgQna).toLowerCase(),
    [a.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS]: () => h.intl.string(h.t["1hvuGH"]).toLowerCase(),
    [a.Qd.ACTIVITY_STATUS_ON]: () => h.intl.string(h.t.fQc5la).toLowerCase(),
};
function S(e) {
    let t = _._Z.getSetting();
    if ((_._Z.updateSetting(e), !(0, r.r)("UserSettingsActivityPrivacy"))) return;
    let s = (0, o.g8)(t, e);
    if (null == s) return;
    let a = T[e]?.() ?? "";
    (0, l.mMO)(async () => {
        let { default: e } = await n.e("41996").then(n.bind(n, 32167));
        return (t) =>
            (0, i.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: a });
    });
}
function I() {
    let e = _._Z.useSetting(),
        t = (0, r.m)("UserSettingsActivityPrivacy"),
        n = s.useMemo(
            () =>
                t
                    ? [
                          {
                              value: a.Qd.ACTIVITY_STATUS_OFF,
                              name: h.intl.string(h.t.FzgQna),
                              desc: h.intl.string(h.t.SQxoyc),
                          },
                          {
                              value: a.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                              name: h.intl.string(h.t["1hvuGH"]),
                              desc: h.intl.string(h.t.odUCPE),
                          },
                          { value: a.Qd.ACTIVITY_STATUS_ON, name: h.intl.string(h.t.fQc5la) },
                      ]
                    : [
                          { value: a.Qd.ACTIVITY_STATUS_ON, name: h.intl.string(h.t.UzGMH9) },
                          { value: a.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: h.intl.string(x.default["/sAeRY"]) },
                          { value: a.Qd.ACTIVITY_STATUS_OFF, name: h.intl.string(x.default.m3oL7Q) },
                      ],
            [t],
        ),
        o = t ? h.intl.string(h.t.vpgck1) : h.intl.string(x.default["/LHVbt"]);
    return (0, i.jsxs)(l.nVY, {
        label: h.intl.string(x.default.TG0QsS),
        description: h.intl.string(x.default.OO17Lg),
        children: [(0, i.jsx)(l.z6M, { label: o, options: n, value: e, onChange: S }), (0, i.jsx)(E, {})],
    });
}
function f() {
    let e = _.e.useSetting(),
        t = _.UM.useSetting();
    return (0, i.jsx)(d.x, {
        setting: A.H.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(l.nVY, {
            label: h.intl.string(x.default["5rYBAQ"]),
            children: [
                (0, i.jsx)(l.dOG, {
                    label: h.intl.string(x.default.khuuzv),
                    description: h.intl.string(x.default["8EWsJ8"]),
                    id: "allow-friends-to-join-my-game",
                    checked: e,
                    onChange: (e) => _.e.updateSetting(e),
                }),
                (0, i.jsx)(l.dOG, {
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
    return (0, i.jsx)(d.x, {
        setting: A.H.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(l.BJc, {
            gap: 32,
            children: [
                (0, i.jsx)("div", { children: h.intl.string(x.default.t2YsrV) }),
                (0, i.jsx)(l.dOG, {
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
    return (0, i.jsx)(d.x, {
        setting: A.H.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(l.ZpM, {
            type: l.ZpM.Types.PRIMARY,
            className: p.AX,
            children: (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: h.intl.format(h.t.xvCsx4, { termsLink: g.X7G.TERMS, privacyLink: g.X7G.PRIVACY }),
            }),
        }),
    });
}
