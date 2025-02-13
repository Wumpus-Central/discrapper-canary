n.d(t, { Z: () => S });
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(704215),
    a = n(481060),
    o = n(906732),
    c = n(605236),
    d = n(441167),
    u = n(695346),
    h = n(131951),
    m = n(924557),
    g = n(435064),
    x = n(779618),
    _ = n(39604),
    p = n(703288),
    E = n(491758),
    C = n(233685),
    N = n(388032),
    I = n(77096),
    f = n(639957),
    T = n(814632);
function S(e) {
    let { className: t, showHeader: n = !0 } = e,
        S = u.tU.useSetting(),
        { enableViewerClipping: j } = d.Z.useExperiment({ location: 'Clips Settings' }, { autoTrackExposure: !1 }),
        { analyticsLocations: v } = (0, o.ZP)(),
        b = (0, m.Go)(),
        { viewerClipsEnabled: A } = (0, l.cj)([g.Z], () => g.Z.getSettings()),
        O = (0, x.Z)(h.Z);
    return (
        s.useEffect(() => {
            (0, c.EW)(r.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, i.jsxs)(o.Gt, {
            value: v,
            children: [
                (b || n) &&
                    (0, i.jsx)(a.hjN, {
                        className: t,
                        tag: a.RB0.H1,
                        title: n
                            ? (0, i.jsxs)('div', {
                                  className: I.headerContainer,
                                  children: [N.intl.string(N.t.z2jK6e), (0, i.jsx)(p.Z, {})]
                              })
                            : null,
                        children:
                            b &&
                            (0, i.jsxs)('form', {
                                onSubmit: (e) => e.preventDefault(),
                                children: [(0, i.jsx)(E.Z, {}), (0, i.jsx)(C.Z, {})]
                            })
                    }),
                b && (0, i.jsx)(a.$i$, {}),
                (0, i.jsxs)(a.hjN, {
                    className: n || b ? T.marginTop20 : t,
                    children: [
                        (0, i.jsx)(a.j7V, {
                            hideBorder: !0,
                            className: f.formItem,
                            value: S,
                            note: N.intl.string(N.t['wW9/zc']),
                            onChange: (e) => _.yg({ allowVoiceRecording: e }),
                            children: N.intl.string(N.t.AGDDkJ)
                        }),
                        j &&
                            O &&
                            (0, i.jsx)(a.j7V, {
                                hideBorder: !0,
                                className: f.formItem,
                                value: A,
                                note: N.intl.string(N.t['0vjy8P']),
                                onChange: (e) =>
                                    _.yl({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: N.intl.string(N.t.NWw7kZ)
                            })
                    ]
                })
            ]
        })
    );
}
