n.d(t, { Z: () => v });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(704215),
    l = n(481060),
    o = n(906732),
    c = n(266454),
    d = n(441167),
    u = n(695346),
    m = n(131951),
    p = n(924557),
    g = n(435064),
    h = n(779618),
    f = n(39604),
    b = n(703288),
    x = n(491758),
    _ = n(233685),
    j = n(388032),
    C = n(922284),
    O = n(802454),
    E = n(20493);
function v(e) {
    let { className: t, showHeader: n = !0 } = e,
        v = u.tU.useSetting(),
        { enableViewerClipping: S } = d.Z.useExperiment({ location: 'Clips Settings' }, { autoTrackExposure: !1 }),
        { analyticsLocations: T } = (0, o.ZP)(),
        N = (0, p.Go)(),
        { viewerClipsEnabled: I } = (0, s.cj)([g.Z], () => g.Z.getSettings()),
        y = (0, h.Z)(m.Z);
    return (
        r.useEffect(() => {
            (0, c.Q3)(a.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, i.jsxs)(o.Gt, {
            value: T,
            children: [
                (N || n) &&
                    (0, i.jsx)(l.hjN, {
                        className: t,
                        tag: l.RB0.H1,
                        title: n
                            ? (0, i.jsxs)('div', {
                                  className: C.headerContainer,
                                  children: [j.intl.string(j.t.z2jK6e), (0, i.jsx)(b.Z, {})]
                              })
                            : null,
                        children:
                            N &&
                            (0, i.jsxs)('form', {
                                onSubmit: (e) => e.preventDefault(),
                                children: [(0, i.jsx)(x.Z, {}), (0, i.jsx)(_.Z, {})]
                            })
                    }),
                N && (0, i.jsx)(l.$i$, {}),
                (0, i.jsxs)(l.hjN, {
                    className: n || N ? E.marginTop20 : t,
                    children: [
                        (0, i.jsx)(l.j7V, {
                            hideBorder: !0,
                            className: O.formItem,
                            value: v,
                            note: j.intl.string(j.t['wW9/zc']),
                            onChange: (e) => f.yg({ allowVoiceRecording: e }),
                            children: j.intl.string(j.t.AGDDkJ)
                        }),
                        S &&
                            y &&
                            (0, i.jsx)(l.j7V, {
                                hideBorder: !0,
                                className: O.formItem,
                                value: I,
                                note: j.intl.string(j.t['0vjy8P']),
                                onChange: (e) =>
                                    f.yl({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: j.intl.string(j.t.NWw7kZ)
                            })
                    ]
                })
            ]
        })
    );
}
