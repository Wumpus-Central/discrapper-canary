n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651);
n(192379);
var r = n(924628),
    s = n(493773),
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
    E = n(726985),
    _ = n(388032);
function C() {
    let { enabled: e } = (0, a.S)({ location: 'UserSettingsDataAndPrivacy' });
    return e
        ? (0, i.jsxs)(x.Z, {
              title: _.intl.string(_.t.WWaFn5),
              description: _.intl.format(_.t['/6sFWV'], { helpArticle: (0, l.uV)() }),
              webSetting: E.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
              children: [(0, i.jsx)(p.Z, {}), (0, i.jsx)(f.Z, {})]
          })
        : null;
}
function T() {
    return (0, i.jsx)(x.Z, {
        title: _.intl.string(_.t.BG7Qsb),
        webSetting: E.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
        children: (0, i.jsx)(d.Z, {})
    });
}
function S() {
    return (0, i.jsxs)(x.Z, {
        title: _.intl.string(_.t.SRZyHh),
        webSetting: E.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
        children: [(0, i.jsx)(h.Z, {}), (0, i.jsx)(g.Z, {}), (0, i.jsx)(m.Z, {}), (0, i.jsx)(u.Z, {})]
    });
}
function b() {
    return (
        (0, s.Z)(() => {
            (0, r.I)(), (0, o.A)();
        }),
        (0, i.jsxs)(c.N, {
            header: _.intl.string(_.t.OAuOHB),
            children: [(0, i.jsx)(S, {}), (0, i.jsx)(T, {}), (0, i.jsx)(C, {})]
        })
    );
}
