n.d(t, { A: () => R });
var i = n(627968),
    s = n(397927),
    a = n(290595),
    l = n(964486),
    r = n(332921),
    o = n(814278),
    c = n(890164),
    d = n(104954),
    u = n(740625),
    _ = n(657364),
    m = n(986666),
    A = n(713031),
    g = n(8271),
    h = n(309272),
    x = n(589984),
    p = n(549200),
    E = n(871930),
    C = n(320134),
    T = n(433809),
    S = n(428854),
    I = n(259274),
    f = n(531525),
    N = n(985018);
function b() {
    return (0, c.lX)("ProfilePrivacyCategory")
        ? (0, i.jsx)(C.A, {
              title: N.intl.string(N.t.ul884f),
              description: N.intl.format(N.t.N4jSgR, {
                  learnMoreUrl: "https://support.discord.com/hc/articles/private-profiles",
              }),
              webSetting: f.H.PRIVACY_PROFILE_VISIBILITY,
              children: (0, i.jsx)(T.A, {}),
          })
        : null;
}
function j() {
    return (0, i.jsxs)(C.A, {
        title: N.intl.string(N.t.WWaFn5),
        description: N.intl.format(N.t["/6sFWa"], { helpArticle: (0, o.aW)() }),
        webSetting: f.H.PRIVACY_AND_SAFETY_VOICE_SECURITY,
        children: [(0, i.jsx)(p.A, {}), (0, i.jsx)(I.A, {})],
    });
}
function v() {
    return (0, i.jsx)(C.A, {
        title: N.intl.string(N.t.BG7QsQ),
        webSetting: f.H.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
        children: (0, i.jsx)(_.A, {}),
    });
}
function O() {
    return (0, i.jsxs)(C.A, {
        title: N.intl.string(N.t.SRZyHg),
        webSetting: f.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
        children: [
            (0, i.jsx)(x.A, {}),
            (0, i.jsx)(h.A, {}),
            (0, i.jsx)(g.A, {}),
            (0, i.jsx)(A.A, {}),
            (0, i.jsx)(E.h, { setting: f.H.PRIVACY_DATA_CLIPS, children: (0, i.jsx)(r.A, {}) }),
            (0, i.jsx)(m.z, {}),
        ],
    });
}
function R() {
    return (
        (0, l.Ay)(() => {
            (0, a.Q)(), (0, d.s)();
        }),
        (0, i.jsx)(u.R, {
            header: N.intl.string(N.t.OAuOHD),
            notice: (0, i.jsx)(S.A, { page: S.R.DATA_AND_PRIVACY }),
            children: (0, i.jsxs)(s.lVW, {
                children: [(0, i.jsx)(O, {}), (0, i.jsx)(b, {}), (0, i.jsx)(v, {}), (0, i.jsx)(j, {})],
            }),
        })
    );
}
