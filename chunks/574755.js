n.d(t, { Z: () => T });
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
    O = n(40435),
    v = n(749799),
    I = n(197571);
function T(e) {
    let { className: t, showHeader: n = !0 } = e,
        T = d.tU.useSetting(),
        { enableViewerClipping: S } = u.Z.useExperiment({ location: "Clips Settings" }, { autoTrackExposure: !1 }),
        { analyticsLocations: A } = (0, l.ZP)(),
        C = (0, _.Go)(),
        { viewerClipsEnabled: N } = (0, a.cj)([p.Z], () => p.Z.getSettings()),
        R = (0, h.Z)(f.Z);
    return (
        i.useEffect(() => {
            (0, c.Q3)(o.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, r.jsxs)(l.Gt, {
            value: A,
            children: [
                (C || n) &&
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
                            C &&
                            (0, r.jsxs)("form", {
                                onSubmit: (e) => e.preventDefault(),
                                children: [(0, r.jsx)(E.Z, {}), (0, r.jsx)(b.Z, {})],
                            }),
                    }),
                C && (0, r.jsx)(s.$i$, {}),
                (0, r.jsxs)(s.hjN, {
                    className: n || C ? I.marginTop20 : t,
                    children: [
                        (0, r.jsx)(s.j7V, {
                            hideBorder: !0,
                            className: v.formItem,
                            value: T,
                            note: y.intl.string(y.t["wW9/zc"]),
                            onChange: (e) => m.yg({ allowVoiceRecording: e }),
                            children: y.intl.string(y.t.AGDDkJ),
                        }),
                        S &&
                            R &&
                            (0, r.jsx)(s.j7V, {
                                hideBorder: !0,
                                className: v.formItem,
                                value: N,
                                note: y.intl.string(y.t["0vjy8P"]),
                                onChange: (e) =>
                                    m.yl({
                                        enabled: e,
                                        trackAnalytics: !0,
                                    }),
                                children: y.intl.string(y.t.NWw7kZ),
                            }),
                    ],
                }),
            ],
        })
    );
}
