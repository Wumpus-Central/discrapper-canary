n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(704215),
    l = n(481060),
    o = n(906732),
    c = n(605236),
    d = n(441167),
    u = n(695346),
    m = n(131951),
    g = n(924557),
    h = n(435064),
    p = n(779618),
    x = n(39604),
    f = n(703288),
    _ = n(491758),
    E = n(233685),
    C = n(388032),
    T = n(644517),
    S = n(277253),
    b = n(232186);
function I(e) {
    let { className: t, showHeader: n = !0 } = e,
        I = u.tU.useSetting(),
        { enableViewerClipping: N } = d.Z.useExperiment({ location: 'Clips Settings' }, { autoTrackExposure: !1 }),
        { analyticsLocations: v } = (0, o.ZP)(),
        A = (0, g.Go)(),
        { viewerClipsEnabled: j } = (0, r.cj)([h.Z], () => h.Z.getSettings()),
        R = (0, p.Z)(m.Z);
    return (
        s.useEffect(() => {
            (0, c.EW)(a.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, i.jsxs)(o.Gt, {
            value: v,
            children: [
                (A || n) &&
                    (0, i.jsx)(l.FormSection, {
                        className: t,
                        tag: l.FormTitleTags.H1,
                        title: n
                            ? (0, i.jsxs)('div', {
                                  className: T.headerContainer,
                                  children: [C.intl.string(C.t.z2jK6e), (0, i.jsx)(f.Z, {})]
                              })
                            : null,
                        children:
                            A &&
                            (0, i.jsxs)('form', {
                                onSubmit: (e) => e.preventDefault(),
                                children: [(0, i.jsx)(_.Z, {}), (0, i.jsx)(E.Z, {})]
                            })
                    }),
                A && (0, i.jsx)(l.FormDivider, {}),
                (0, i.jsxs)(l.FormSection, {
                    className: n || A ? b.marginTop20 : t,
                    children: [
                        (0, i.jsx)(l.FormSwitch, {
                            hideBorder: !0,
                            className: S.formItem,
                            value: I,
                            note: C.intl.string(C.t['wW9/zc']),
                            onChange: (e) => x.yg({ allowVoiceRecording: e }),
                            children: C.intl.string(C.t.AGDDkJ)
                        }),
                        N &&
                            R &&
                            (0, i.jsx)(l.FormSwitch, {
                                hideBorder: !0,
                                className: S.formItem,
                                value: j,
                                note: C.intl.string(C.t['0vjy8P']),
                                onChange: (e) =>
                                    x.yl({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: C.intl.string(C.t.NWw7kZ)
                            })
                    ]
                })
            ]
        })
    );
}
