n.d(t, {
    A: () => C,
});
var r = n(627968),
    i = n(397927),
    a = n(290595),
    s = n(964486),
    o = n(332921),
    l = n(814278),
    c = n(104954),
    u = n(358776),
    d = n(740625),
    f = n(657364),
    p = n(986666),
    _ = n(713031),
    h = n(8271),
    m = n(309272),
    g = n(589984),
    E = n(549200),
    b = n(320134),
    y = n(428854),
    O = n(259274),
    A = n(531525),
    v = n(985018);

function S() {
    return (0, r.jsxs)(b.A, {
        title: v.intl.string(v.t.WWaFn5),
        description: v.intl.format(v.t["/6sFWa"], {
            helpArticle: (0, l.aW)(),
        }),
        webSetting: A.H.PRIVACY_AND_SAFETY_VOICE_SECURITY,
        children: [(0, r.jsx)(E.A, {}), (0, r.jsx)(O.A, {})],
    });
}

function I() {
    return (0, r.jsx)(b.A, {
        title: v.intl.string(v.t.BG7QsQ),
        webSetting: A.H.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
        children: (0, r.jsx)(f.A, {}),
    });
}

function T() {
    let e = (0, u.$m)("UserSettingsDataAndPrivacy");
    return (0, r.jsxs)(b.A, {
        title: v.intl.string(v.t.SRZyHg),
        webSetting: A.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
        children: [
            (0, r.jsx)(g.A, {}),
            (0, r.jsx)(m.A, {}),
            (0, r.jsx)(h.A, {}),
            (0, r.jsx)(_.A, {}),
            e && (0, r.jsx)(o.A, {}),
            (0, r.jsx)(p.z, {}),
        ],
    });
}

function C() {
    return (
        (0, s.Ay)(() => {
            (0, a.Q)(), (0, c.s)();
        }),
        (0, r.jsx)(d.R, {
            header: v.intl.string(v.t.OAuOHD),
            notice: (0, r.jsx)(y.A, {
                page: y.R.DATA_AND_PRIVACY,
            }),
            children: (0, r.jsxs)(i.lVW, {
                children: [(0, r.jsx)(T, {}), (0, r.jsx)(I, {}), (0, r.jsx)(S, {})],
            }),
        })
    );
}
