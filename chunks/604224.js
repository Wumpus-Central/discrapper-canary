n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(100527),
    s = n(906732),
    a = n(10298),
    l = n(526156),
    o = n(406613),
    c = n(314394),
    d = n(625528),
    u = n(674116),
    m = n(754367),
    g = n(661950),
    h = n(726985),
    p = n(981631),
    x = n(388032);
function f() {
    let { analyticsLocations: e } = (0, s.ZP)([r.Z.USER_SETTINGS_VOICE_AND_VIDEO]),
        { showRefreshedSettings: t } = (0, o.F)({ location: 'UserSettingsVoiceAndVideo' });
    if (!t) return (0, i.jsx)(u.Z, {});
    let n = [
        {
            title: x.intl.string(x.t.K3lovL),
            component: g.Z,
            setting: h.s6.VOICE_AND_VIDEO_VOICE_TAB
        },
        {
            title: x.intl.string(x.t.FlNoSU),
            component: d.Z,
            setting: h.s6.VOICE_AND_VIDEO_VIDEO_TAB
        },
        {
            title: x.intl.string(x.t.ABjMWF),
            component: c.Z,
            setting: h.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB
        },
        {
            title: x.intl.string(x.t.OFpL3d),
            component: m.Z,
            setting: h.s6.VOICE_AND_VIDEO_DEBUG_TAB
        }
    ];
    return (0, i.jsx)(s.Gt, {
        value: e,
        children: (0, i.jsx)(a.N, {
            header: x.intl.string(x.t.B1fFpa),
            children: (0, i.jsx)(l.Z, {
                parentSetting: h.s6.VOICE_AND_VIDEO,
                settingsSection: p.oAB.VOICE,
                tabs: n
            })
        })
    });
}
