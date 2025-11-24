n.d(t, { Z: () => N });
var r = n(54381),
    i = n(481060),
    a = n(924628),
    o = n(493773),
    s = n(902451),
    l = n(630759),
    c = n(398826),
    u = n(526665),
    d = n(695463),
    f = n(10298),
    _ = n(623196),
    p = n(993315),
    h = n(883382),
    m = n(265390),
    g = n(940021),
    E = n(402583),
    b = n(230341),
    y = n(893996),
    O = n(441007),
    v = n(266132),
    I = n(726985),
    T = n(388032);
function S() {
    return (0, r.jsxs)(y.Z, {
        title: T.intl.string(T.t.WWaFn5),
        description: T.intl.format(T.t["/6sFWa"], { helpArticle: (0, l.uV)() }),
        webSetting: I.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
        children: [(0, r.jsx)(b.Z, {}), (0, r.jsx)(v.Z, {})],
    });
}
function A() {
    return (0, r.jsx)(y.Z, {
        title: T.intl.string(T.t.BG7QsQ),
        webSetting: I.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
        children: (0, r.jsx)(_.Z, {}),
    });
}
function C() {
    let e = (0, d.W)("UserSettingsDataAndPrivacy"),
        t = (0, u.BK)("UserSettingsDataAndPrivacy");
    return (0, r.jsxs)(y.Z, {
        title: T.intl.string(T.t.SRZyHg),
        webSetting: I.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
        children: [
            (0, r.jsx)(E.Z, {}),
            (0, r.jsx)(g.Z, {}),
            e && (0, r.jsx)(m.Z, {}),
            (0, r.jsx)(h.Z, {}),
            t && (0, r.jsx)(s.Z, {}),
            (0, r.jsx)(p.Z, {}),
        ],
    });
}
function N() {
    return (
        (0, o.ZP)(() => {
            (0, a.I)(), (0, c.A)();
        }),
        (0, r.jsx)(f.N, {
            header: T.intl.string(T.t.OAuOHD),
            notice: (0, r.jsx)(O.Z, { page: O.N.DATA_AND_PRIVACY }),
            children: (0, r.jsxs)(i.l09, {
                children: [(0, r.jsx)(C, {}), (0, r.jsx)(A, {}), (0, r.jsx)(S, {})],
            }),
        })
    );
}
