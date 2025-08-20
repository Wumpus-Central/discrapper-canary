n.d(t, { Z: () => y });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(100527),
    o = n(906732),
    s = n(663389),
    l = n(10298),
    c = n(526156),
    u = n(406613),
    d = n(314394),
    f = n(625528),
    _ = n(674116),
    p = n(754367),
    h = n(661950),
    m = n(526761),
    g = n(726985),
    E = n(981631),
    b = n(388032);
function y() {
    let { analyticsLocations: e } = (0, o.ZP)([a.Z.USER_SETTINGS_VOICE_AND_VIDEO]),
        t = (0, i.e7)([s.Z], () => s.Z.getSubsection()),
        { showRefreshedSettings: n } = (0, u.F)({ location: "UserSettingsVoiceAndVideo" });
    if (!n) return (0, r.jsx)(_.Z, {});
    let y = [
            {
                title: b.intl.string(b.t.K3lovL),
                component: h.Z,
                setting: g.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            {
                title: b.intl.string(b.t.FlNoSU),
                component: f.Z,
                setting: g.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                subsection: m.gP,
            },
            {
                title: b.intl.string(b.t.ABjMWF),
                component: d.Z,
                setting: g.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
                subsection: m.GA,
            },
            {
                title: b.intl.string(b.t.OFpL3d),
                component: p.Z,
                setting: g.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
        ],
        O = y.findIndex((e) => null != e.subsection && e.subsection === t);
    return (0, r.jsx)(o.Gt, {
        value: e,
        children: (0, r.jsx)(l.N, {
            header: b.intl.string(b.t.B1fFpa),
            children: (0, r.jsx)(c.Z, {
                parentSetting: g.s6.VOICE_AND_VIDEO,
                settingsSection: E.oAB.VOICE,
                tabs: y,
                defaultTabIndex: O > -1 ? O : void 0,
            }),
        }),
    });
}
