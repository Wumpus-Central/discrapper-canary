n.d(t, { Z: () => S });
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(906732),
    c = n(605236),
    d = n(441167),
    u = n(695346),
    m = n(131951),
    p = n(924557),
    g = n(435064),
    h = n(779618),
    f = n(39604),
    b = n(703288),
    _ = n(491758),
    x = n(233685),
    E = n(388032),
    j = n(922284),
    C = n(802454),
    O = n(20493);
function S(e) {
    let { className: t, showHeader: n = !0 } = e,
        S = u.tU.useSetting(),
        { enableViewerClipping: v } = d.Z.useExperiment({ location: 'Clips Settings' }, { autoTrackExposure: !1 }),
        { analyticsLocations: T } = (0, o.ZP)(),
        I = (0, p.Go)(),
        { viewerClipsEnabled: N } = (0, s.cj)([g.Z], () => g.Z.getSettings()),
        y = (0, h.Z)(m.Z);
    return (
        r.useEffect(() => {
            (0, c.EW)(l.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, i.jsxs)(o.Gt, {
            value: T,
            children: [
                (I || n) &&
                    (0, i.jsx)(a.hjN, {
                        className: t,
                        tag: a.RB0.H1,
                        title: n
                            ? (0, i.jsxs)('div', {
                                  className: j.headerContainer,
                                  children: [E.intl.string(E.t.z2jK6e), (0, i.jsx)(b.Z, {})]
                              })
                            : null,
                        children:
                            I &&
                            (0, i.jsxs)('form', {
                                onSubmit: (e) => e.preventDefault(),
                                children: [(0, i.jsx)(_.Z, {}), (0, i.jsx)(x.Z, {})]
                            })
                    }),
                I && (0, i.jsx)(a.$i$, {}),
                (0, i.jsxs)(a.hjN, {
                    className: n || I ? O.marginTop20 : t,
                    children: [
                        (0, i.jsx)(a.j7V, {
                            hideBorder: !0,
                            className: C.formItem,
                            value: S,
                            note: E.intl.string(E.t['wW9/zc']),
                            onChange: (e) => f.yg({ allowVoiceRecording: e }),
                            children: E.intl.string(E.t.AGDDkJ)
                        }),
                        v &&
                            y &&
                            (0, i.jsx)(a.j7V, {
                                hideBorder: !0,
                                className: C.formItem,
                                value: N,
                                note: E.intl.string(E.t['0vjy8P']),
                                onChange: (e) =>
                                    f.yl({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: E.intl.string(E.t.NWw7kZ)
                            })
                    ]
                })
            ]
        })
    );
}
