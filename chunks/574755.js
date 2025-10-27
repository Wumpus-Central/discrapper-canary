n.d(t, { Z: () => O });
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
    y = n(388032);
function O(e) {
    let { className: t, showHeader: n = !0 } = e,
        O = d.tU.useSetting(),
        { enableViewerClipping: v } = u.Z.useExperiment({ location: "Clips Settings" }, { autoTrackExposure: !1 }),
        { analyticsLocations: I } = (0, l.ZP)(),
        T = (0, _.Go)(),
        { viewerClipsEnabled: S } = (0, a.cj)([p.Z], () => p.Z.getSettings()),
        A = (0, h.Z)(f.Z);
    return (
        i.useEffect(() => {
            (0, c.Q3)(o.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, r.jsx)(l.Gt, {
            value: I,
            children: (0, r.jsxs)(s.Kqy, {
                gap: 20,
                children: [
                    (T || n) &&
                        (0, r.jsxs)("div", {
                            className: t,
                            children: [
                                n
                                    ? (0, r.jsxs)(s.Heading, {
                                          variant: "heading-lg/semibold",
                                          children: [y.intl.string(y.t.z2jK6X), " ", (0, r.jsx)(g.Z, {})],
                                      })
                                    : null,
                                T &&
                                    (0, r.jsx)("form", {
                                        onSubmit: (e) => e.preventDefault(),
                                        children: (0, r.jsxs)(s.Kqy, {
                                            gap: 24,
                                            children: [(0, r.jsx)(E.Z, {}), (0, r.jsx)(b.Z, {})],
                                        }),
                                    }),
                            ],
                        }),
                    T && (0, r.jsx)(s.izJ, {}),
                    (0, r.jsxs)(s.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(s.rsf, {
                                label: y.intl.string(y.t.AGDDkH),
                                description: y.intl.string(y.t["wW9/zQ"]),
                                checked: O,
                                onChange: (e) => m.yg({ allowVoiceRecording: e }),
                            }),
                            v &&
                                A &&
                                (0, r.jsx)(s.rsf, {
                                    label: y.intl.string(y.t.NWw7kY),
                                    description: y.intl.string(y.t["0vjy8N"]),
                                    checked: S,
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
