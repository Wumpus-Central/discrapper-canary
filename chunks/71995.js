n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(793574),
    s = n(688810),
    o = n(628965),
    l = n(740625),
    c = n(524738),
    u = n(998126),
    d = n(360668),
    f = n(175539),
    p = n(942515),
    _ = n(355097),
    h = n(531525),
    m = n(652215),
    g = n(985018);

function E() {
    let { analyticsLocations: e } = (0, s.Ay)([a.A.USER_SETTINGS_VOICE_AND_VIDEO]),
        t = (0, i.bG)([o.A], () => o.A.getSubsection()),
        n = [
            {
                title: g.intl.string(g.t.K3lovD),
                component: f.A,
                setting: h.H.VOICE_AND_VIDEO_VOICE_TAB,
                subsection: _.V5,
            },
            {
                title: g.intl.string(g.t.FlNoSV),
                component: d.A,
                setting: h.H.VOICE_AND_VIDEO_VIDEO_TAB,
                subsection: _.Ss,
            },
            {
                title: g.intl.string(g.t.ABjMWI),
                component: u.A,
                setting: h.H.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
                subsection: _.MJ,
            },
            {
                title: g.intl.string(g.t.OFpL3c),
                component: p.A,
                setting: h.H.VOICE_AND_VIDEO_DEBUG_TAB,
            },
        ],
        E = n.findIndex((e) => null != e.subsection && e.subsection === t);
    return (0, r.jsx)(s.f5, {
        value: e,
        children: (0, r.jsx)(l.R, {
            header: g.intl.string(g.t.B1fFpf),
            children: (0, r.jsx)(c.A, {
                parentSetting: h.H.VOICE_AND_VIDEO,
                settingsSection: m.nc_.VOICE,
                tabs: n,
                defaultTabIndex: E > -1 ? E : void 0,
            }),
        }),
    });
}
