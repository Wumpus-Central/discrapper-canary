n.d(t, { Z: () => C });
var r = n(200651);
n(192379);
var i = n(924628),
    s = n(493773),
    a = n(977059),
    l = n(630759),
    o = n(398826),
    c = n(10298),
    d = n(623196),
    u = n(993315),
    m = n(883382),
    g = n(940021),
    p = n(402583),
    h = n(230341),
    f = n(893996),
    b = n(266132),
    N = n(726985),
    x = n(388032);
function _() {
    let { enabled: e } = (0, a.S)({ location: 'UserSettingsDataAndPrivacy' });
    return e
        ? (0, r.jsxs)(f.Z, {
              title: x.NW.string(x.t.WWaFn5),
              description: x.NW.format(x.t['/6sFWV'], { helpArticle: (0, l.uV)() }),
              webSetting: N.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
              children: [(0, r.jsx)(h.Z, {}), (0, r.jsx)(b.Z, {})]
          })
        : null;
}
function E() {
    return (0, r.jsx)(f.Z, {
        title: x.NW.string(x.t.BG7Qsb),
        webSetting: N.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
        children: (0, r.jsx)(d.Z, {})
    });
}
function j() {
    return (0, r.jsxs)(f.Z, {
        title: x.NW.string(x.t.SRZyHh),
        webSetting: N.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
        children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(g.Z, {}), (0, r.jsx)(m.Z, {}), (0, r.jsx)(u.Z, {})]
    });
}
function C() {
    return (
        (0, s.ZP)(() => {
            (0, i.I)(), (0, o.A)();
        }),
        (0, r.jsxs)(c.N, {
            header: x.NW.string(x.t.OAuOHB),
            children: [(0, r.jsx)(j, {}), (0, r.jsx)(E, {}), (0, r.jsx)(_, {})]
        })
    );
}
