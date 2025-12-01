n.d(t, { Z: () => E });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(100527),
    o = n(906732),
    s = n(663389),
    l = n(10298),
    c = n(526156),
    u = n(314394),
    d = n(167540),
    f = n(674116),
    p = n(754367),
    _ = n(526761),
    m = n(726985),
    h = n(981631),
    g = n(388032);
function E() {
    let { analyticsLocations: e } = (0, o.ZP)([a.Z.USER_SETTINGS_VOICE_AND_VIDEO]),
        t = (0, i.e7)([s.Z], () => s.Z.getSubsection()),
        n = [
            {
                title: g.intl.string(g.t.K3lovD),
                component: f.Z,
                setting: m.s6.VOICE_AND_VIDEO_VOICE_TAB,
                subsection: _.CO,
            },
            {
                title: g.intl.string(g.t.FlNoSV),
                component: d.Z,
                setting: m.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                subsection: _.gP,
            },
            {
                title: g.intl.string(g.t.ABjMWI),
                component: u.Z,
                setting: m.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
                subsection: _.GA,
            },
            {
                title: g.intl.string(g.t.OFpL3c),
                component: p.Z,
                setting: m.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
        ],
        E = n.findIndex((e) => null != e.subsection && e.subsection === t);
    return (0, r.jsx)(o.Gt, {
        value: e,
        children: (0, r.jsx)(l.N, {
            header: g.intl.string(g.t.B1fFpf),
            children: (0, r.jsx)(c.Z, {
                parentSetting: m.s6.VOICE_AND_VIDEO,
                settingsSection: h.oAB.VOICE,
                tabs: n,
                defaultTabIndex: E > -1 ? E : void 0,
            }),
        }),
    });
}
