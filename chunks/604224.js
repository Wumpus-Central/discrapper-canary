n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var s = n(100527),
    r = n(906732),
    l = n(10298),
    a = n(526156),
    o = n(406613),
    c = n(314394),
    d = n(625528),
    u = n(674116),
    m = n(754367),
    h = n(661950),
    g = n(726985),
    _ = n(981631),
    x = n(388032);
function p() {
    let { analyticsLocations: e } = (0, r.ZP)([s.Z.USER_SETTINGS_VOICE_AND_VIDEO]),
        { showRefreshedSettings: t } = (0, o.F)({ location: 'UserSettingsVoiceAndVideo' });
    if (!t) return (0, i.jsx)(u.Z, {});
    let n = [
        {
            title: x.intl.string(x.t.K3lovL),
            component: h.Z,
            setting: g.s6.VOICE_AND_VIDEO_VOICE_TAB
        },
        {
            title: x.intl.string(x.t.FlNoSU),
            component: d.Z,
            setting: g.s6.VOICE_AND_VIDEO_VIDEO_TAB
        },
        {
            title: x.intl.string(x.t.ABjMWF),
            component: c.Z,
            setting: g.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB
        },
        {
            title: x.intl.string(x.t.OFpL3d),
            component: m.Z,
            setting: g.s6.VOICE_AND_VIDEO_DEBUG_TAB
        }
    ];
    return (0, i.jsx)(r.Gt, {
        value: e,
        children: (0, i.jsx)(l.N, {
            header: x.intl.string(x.t.B1fFpa),
            children: (0, i.jsx)(a.Z, {
                parentSetting: g.s6.VOICE_AND_VIDEO,
                settingsSection: _.oAB.VOICE,
                tabs: n
            })
        })
    });
}
