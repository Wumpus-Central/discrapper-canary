n.d(t, { A: () => R });
var i = n(627968),
    s = n(397927),
    l = n(290595),
    a = n(964486),
    r = n(332921),
    o = n(814278),
    d = n(890164),
    c = n(104954),
    u = n(740625),
    _ = n(657364),
    g = n(986666),
    m = n(713031),
    A = n(8271),
    h = n(309272),
    p = n(589984),
    x = n(549200),
    E = n(871930),
    T = n(320134),
    S = n(433809),
    C = n(428854),
    f = n(259274),
    I = n(531525),
    b = n(985018);
function N() {
    return (0, d.lX)("ProfilePrivacyCategory")
        ? (0, i.jsx)(T.A, {
              title: b.intl.string(b.t.ul884f),
              description: b.intl.string(b.t.J0SFL2),
              webSetting: I.H.PRIVACY_PROFILE_VISIBILITY,
              children: (0, i.jsx)(S.A, {}),
          })
        : null;
}
function v() {
    return (0, i.jsxs)(T.A, {
        title: b.intl.string(b.t.WWaFn5),
        description: b.intl.format(b.t["/6sFWa"], { helpArticle: (0, o.aW)() }),
        webSetting: I.H.PRIVACY_AND_SAFETY_VOICE_SECURITY,
        children: [(0, i.jsx)(x.A, {}), (0, i.jsx)(f.A, {})],
    });
}
function j() {
    return (0, i.jsx)(T.A, {
        title: b.intl.string(b.t.BG7QsQ),
        webSetting: I.H.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
        children: (0, i.jsx)(_.A, {}),
    });
}
function O() {
    return (0, i.jsxs)(T.A, {
        title: b.intl.string(b.t.SRZyHg),
        webSetting: I.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
        children: [
            (0, i.jsx)(p.A, {}),
            (0, i.jsx)(h.A, {}),
            (0, i.jsx)(A.A, {}),
            (0, i.jsx)(m.A, {}),
            (0, i.jsx)(E.h, { setting: I.H.PRIVACY_DATA_CLIPS, children: (0, i.jsx)(r.A, {}) }),
            (0, i.jsx)(g.z, {}),
        ],
    });
}
function R() {
    return (
        (0, a.Ay)(() => {
            (0, l.Q)(), (0, c.s)();
        }),
        (0, i.jsx)(u.R, {
            header: b.intl.string(b.t.OAuOHD),
            notice: (0, i.jsx)(C.A, { page: C.R.DATA_AND_PRIVACY }),
            children: (0, i.jsxs)(s.lVW, {
                children: [(0, i.jsx)(O, {}), (0, i.jsx)(N, {}), (0, i.jsx)(j, {}), (0, i.jsx)(v, {})],
            }),
        })
    );
}
