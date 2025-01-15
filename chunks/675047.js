n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651);
n(192379);
var s = n(924628),
    r = n(493773),
    a = n(977059),
    l = n(630759),
    o = n(398826),
    c = n(10298),
    d = n(623196),
    u = n(993315),
    m = n(883382),
    g = n(940021),
    h = n(402583),
    p = n(230341),
    x = n(893996),
    f = n(266132),
    _ = n(726985),
    E = n(388032);
function C() {
    let { enabled: e } = (0, a.S)({ location: 'UserSettingsDataAndPrivacy' });
    return e
        ? (0, i.jsxs)(x.Z, {
              title: E.intl.string(E.t.WWaFn5),
              description: E.intl.format(E.t['/6sFWV'], { helpArticle: (0, l.uV)() }),
              webSetting: _.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
              children: [(0, i.jsx)(p.Z, {}), (0, i.jsx)(f.Z, {})]
          })
        : null;
}
function T() {
    return (0, i.jsx)(x.Z, {
        title: E.intl.string(E.t.BG7Qsb),
        webSetting: _.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
        children: (0, i.jsx)(d.Z, {})
    });
}
function S() {
    return (0, i.jsxs)(x.Z, {
        title: E.intl.string(E.t.SRZyHh),
        webSetting: _.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
        children: [(0, i.jsx)(h.Z, {}), (0, i.jsx)(g.Z, {}), (0, i.jsx)(m.Z, {}), (0, i.jsx)(u.Z, {})]
    });
}
function b() {
    return (
        (0, r.Z)(() => {
            (0, s.I)(), (0, o.A)();
        }),
        (0, i.jsxs)(c.N, {
            header: E.intl.string(E.t.OAuOHB),
            children: [(0, i.jsx)(S, {}), (0, i.jsx)(T, {}), (0, i.jsx)(C, {})]
        })
    );
}
