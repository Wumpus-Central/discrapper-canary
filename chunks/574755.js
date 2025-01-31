n.d(t, { Z: () => S });
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(906732),
    c = n(605236),
    d = n(441167),
    u = n(695346),
    m = n(131951),
    h = n(924557),
    g = n(435064),
    _ = n(779618),
    x = n(39604),
    p = n(703288),
    E = n(491758),
    C = n(233685),
    f = n(388032),
    T = n(644517),
    N = n(277253),
    I = n(232186);
function S(e) {
    let { className: t, showHeader: n = !0 } = e,
        S = u.tU.useSetting(),
        { enableViewerClipping: b } = d.Z.useExperiment({ location: 'Clips Settings' }, { autoTrackExposure: !1 }),
        { analyticsLocations: v } = (0, o.ZP)(),
        j = (0, h.Go)(),
        { viewerClipsEnabled: A } = (0, r.cj)([g.Z], () => g.Z.getSettings()),
        O = (0, _.Z)(m.Z);
    return (
        s.useEffect(() => {
            (0, c.EW)(l.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, i.jsxs)(o.Gt, {
            value: v,
            children: [
                (j || n) &&
                    (0, i.jsx)(a.hjN, {
                        className: t,
                        tag: a.RB0.H1,
                        title: n
                            ? (0, i.jsxs)('div', {
                                  className: T.headerContainer,
                                  children: [f.intl.string(f.t.z2jK6e), (0, i.jsx)(p.Z, {})]
                              })
                            : null,
                        children:
                            j &&
                            (0, i.jsxs)('form', {
                                onSubmit: (e) => e.preventDefault(),
                                children: [(0, i.jsx)(E.Z, {}), (0, i.jsx)(C.Z, {})]
                            })
                    }),
                j && (0, i.jsx)(a.$i$, {}),
                (0, i.jsxs)(a.hjN, {
                    className: n || j ? I.marginTop20 : t,
                    children: [
                        (0, i.jsx)(a.j7V, {
                            hideBorder: !0,
                            className: N.formItem,
                            value: S,
                            note: f.intl.string(f.t['wW9/zc']),
                            onChange: (e) => x.yg({ allowVoiceRecording: e }),
                            children: f.intl.string(f.t.AGDDkJ)
                        }),
                        b &&
                            O &&
                            (0, i.jsx)(a.j7V, {
                                hideBorder: !0,
                                className: N.formItem,
                                value: A,
                                note: f.intl.string(f.t['0vjy8P']),
                                onChange: (e) =>
                                    x.yl({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: f.intl.string(f.t.NWw7kZ)
                            })
                    ]
                })
            ]
        })
    );
}
