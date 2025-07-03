n.d(t, { Z: () => E });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(100527),
    l = n(906732),
    a = n(663389),
    o = n(10298),
    c = n(526156),
    d = n(406613),
    u = n(314394),
    m = n(625528),
    p = n(674116),
    g = n(754367),
    h = n(661950),
    f = n(526761),
    b = n(726985),
    x = n(981631),
    _ = n(388032);
function E() {
    let { analyticsLocations: e } = (0, l.ZP)([s.Z.USER_SETTINGS_VOICE_AND_VIDEO]),
        t = (0, r.e7)([a.Z], () => a.Z.getSubsection()),
        { showRefreshedSettings: n } = (0, d.F)({ location: 'UserSettingsVoiceAndVideo' });
    if (!n) return (0, i.jsx)(p.Z, {});
    let E = [
            {
                title: _.intl.string(_.t.K3lovL),
                component: h.Z,
                setting: b.s6.VOICE_AND_VIDEO_VOICE_TAB
            },
            {
                title: _.intl.string(_.t.FlNoSU),
                component: m.Z,
                setting: b.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                subsection: f.gP
            },
            {
                title: _.intl.string(_.t.ABjMWF),
                component: u.Z,
                setting: b.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
                subsection: f.GA
            },
            {
                title: _.intl.string(_.t.OFpL3d),
                component: g.Z,
                setting: b.s6.VOICE_AND_VIDEO_DEBUG_TAB
            }
        ],
        j = E.findIndex((e) => null != e.subsection && e.subsection === t);
    return (0, i.jsx)(l.Gt, {
        value: e,
        children: (0, i.jsx)(o.N, {
            header: _.intl.string(_.t.B1fFpa),
            children: (0, i.jsx)(c.Z, {
                parentSetting: b.s6.VOICE_AND_VIDEO,
                settingsSection: x.oAB.VOICE,
                tabs: E,
                defaultTabIndex: j > -1 ? j : void 0
            })
        })
    });
}
