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
    g = n(661950),
    h = n(726985),
    x = n(981631),
    _ = n(388032);
function p() {
    let { analyticsLocations: e } = (0, r.ZP)([s.Z.USER_SETTINGS_VOICE_AND_VIDEO]),
        { showRefreshedSettings: t } = (0, o.F)({ location: 'UserSettingsVoiceAndVideo' });
    if (!t) return (0, i.jsx)(u.Z, {});
    let n = [
        {
            title: _.intl.string(_.t.K3lovL),
            component: g.Z,
            setting: h.s6.VOICE_AND_VIDEO_VOICE_TAB
        },
        {
            title: _.intl.string(_.t.FlNoSU),
            component: d.Z,
            setting: h.s6.VOICE_AND_VIDEO_VIDEO_TAB
        },
        {
            title: _.intl.string(_.t.ABjMWF),
            component: c.Z,
            setting: h.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB
        },
        {
            title: _.intl.string(_.t.OFpL3d),
            component: m.Z,
            setting: h.s6.VOICE_AND_VIDEO_DEBUG_TAB
        }
    ];
    return (0, i.jsx)(r.Gt, {
        value: e,
        children: (0, i.jsx)(l.N, {
            header: _.intl.string(_.t.B1fFpa),
            children: (0, i.jsx)(a.Z, {
                parentSetting: h.s6.VOICE_AND_VIDEO,
                settingsSection: x.oAB.VOICE,
                tabs: n
            })
        })
    });
}
