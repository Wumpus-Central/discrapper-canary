n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var r = n(100527),
    s = n(906732),
    l = n(10298),
    a = n(526156),
    o = n(406613),
    c = n(314394),
    d = n(625528),
    u = n(674116),
    m = n(754367),
    g = n(661950),
    p = n(726985),
    h = n(981631),
    f = n(388032);
function b() {
    let { analyticsLocations: e } = (0, s.ZP)([r.Z.USER_SETTINGS_VOICE_AND_VIDEO]),
        { showRefreshedSettings: t } = (0, o.F)({ location: 'UserSettingsVoiceAndVideo' });
    if (!t) return (0, i.jsx)(u.Z, {});
    let n = [
        {
            title: f.intl.string(f.t.K3lovL),
            component: g.Z,
            setting: p.s6.VOICE_AND_VIDEO_VOICE_TAB
        },
        {
            title: f.intl.string(f.t.FlNoSU),
            component: d.Z,
            setting: p.s6.VOICE_AND_VIDEO_VIDEO_TAB
        },
        {
            title: f.intl.string(f.t.ABjMWF),
            component: c.Z,
            setting: p.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB
        },
        {
            title: f.intl.string(f.t.OFpL3d),
            component: m.Z,
            setting: p.s6.VOICE_AND_VIDEO_DEBUG_TAB
        }
    ];
    return (0, i.jsx)(s.Gt, {
        value: e,
        children: (0, i.jsx)(l.N, {
            header: f.intl.string(f.t.B1fFpa),
            children: (0, i.jsx)(a.Z, {
                parentSetting: p.s6.VOICE_AND_VIDEO,
                settingsSection: h.oAB.VOICE,
                tabs: n
            })
        })
    });
}
