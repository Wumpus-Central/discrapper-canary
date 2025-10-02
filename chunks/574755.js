n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    l = n(906732),
    c = n(266454),
    u = n(441167),
    d = n(695346),
    f = n(131951),
    _ = n(924557),
    p = n(435064),
    h = n(779618),
    m = n(39604),
    g = n(703288),
    E = n(491758),
    b = n(233685),
    y = n(388032),
    O = n(311102);
function v(e) {
    let { className: t, showHeader: n = !0 } = e,
        v = d.tU.useSetting(),
        { enableViewerClipping: I } = u.Z.useExperiment({ location: "Clips Settings" }, { autoTrackExposure: !1 }),
        { analyticsLocations: T } = (0, l.ZP)(),
        S = (0, _.Go)(),
        { viewerClipsEnabled: A } = (0, a.cj)([p.Z], () => p.Z.getSettings()),
        C = (0, h.Z)(f.Z);
    return (
        i.useEffect(() => {
            (0, c.Q3)(o.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, r.jsx)(l.Gt, {
            value: T,
            children: (0, r.jsxs)(s.Kqy, {
                gap: 20,
                children: [
                    (S || n) &&
                        (0, r.jsx)(s.hjN, {
                            className: t,
                            tag: s.RB0.H1,
                            title: n
                                ? (0, r.jsxs)("div", {
                                      className: O.headerContainer,
                                      children: [y.intl.string(y.t.z2jK6e), (0, r.jsx)(g.Z, {})],
                                  })
                                : null,
                            children:
                                S &&
                                (0, r.jsx)("form", {
                                    onSubmit: (e) => e.preventDefault(),
                                    children: (0, r.jsxs)(s.Kqy, {
                                        gap: 24,
                                        children: [(0, r.jsx)(E.Z, {}), (0, r.jsx)(b.Z, {})],
                                    }),
                                }),
                        }),
                    S && (0, r.jsx)(s.izJ, {}),
                    (0, r.jsxs)(s.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(s.rsf, {
                                label: y.intl.string(y.t.AGDDkJ),
                                description: y.intl.string(y.t["wW9/zc"]),
                                checked: v,
                                onChange: (e) => m.yg({ allowVoiceRecording: e }),
                            }),
                            I &&
                                C &&
                                (0, r.jsx)(s.rsf, {
                                    label: y.intl.string(y.t.NWw7kZ),
                                    description: y.intl.string(y.t["0vjy8P"]),
                                    checked: A,
                                    onChange: (e) =>
                                        m.yl({
                                            enabled: e,
                                            trackAnalytics: !0,
                                        }),
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
