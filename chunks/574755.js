n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(704215),
    s = n(906732),
    l = n(266454),
    c = n(10298),
    u = n(526156),
    d = n(663389),
    f = n(924557),
    p = n(361244),
    _ = n(902451),
    m = n(320091),
    h = n(981631),
    g = n(526761),
    E = n(726985),
    b = n(388032);
function y() {
    let { analyticsLocations: e } = (0, s.ZP)(),
        t = (0, f.w9)(),
        n = (0, a.e7)([d.Z], () => d.Z.getSubsection()),
        { enableAdvancedSignals: y } = f.NV.useExperiment({ location: "clips_settings" }, { autoTrackExposure: !1 });
    i.useEffect(() => {
        (0, l.Q3)(o.z.CLIPS_SETTINGS_BETA_TAG);
    });
    let O = [
            {
                title: b.intl.string(b.t.iIwmV5),
                component: m.Z,
                setting: E.s6.CLIPS_RECORDING_TAB,
                subsection: g.M6,
                predicate: () => t,
            },
            {
                title: b.intl.string(b.t.sA0WKL),
                component: p.Z,
                setting: E.s6.CLIPS_AUTOMATIC_TAB,
                subsection: g.d5,
                predicate: () => t && y,
            },
            {
                title: b.intl.string(b.t.GcIeET),
                component: _.Z,
                setting: E.s6.CLIPS_PRIVACY_TAB,
                subsection: g.Sr,
            },
        ],
        v = O.findIndex((e) => null != e.subsection && e.subsection === n);
    return (0, r.jsx)(s.Gt, {
        value: e,
        children: (0, r.jsx)(c.N, {
            header: b.intl.string(b.t.z2jK6X),
            children: (0, r.jsx)(u.Z, {
                parentSetting: E.s6.CLIPS,
                settingsSection: h.oAB.CLIPS,
                tabs: O,
                defaultTabIndex: v > -1 ? v : void 0,
            }),
        }),
    });
}
