(n.d(t, { Z: () => v }), n(539854), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(704215),
    o = n(907459),
    s = n(514361),
    l = n(803038),
    c = n(662975),
    u = n(724145),
    d = n(507962),
    f = n(726034),
    _ = n(884134),
    p = n(266454),
    h = n(243778),
    m = n(819640),
    g = n(594174),
    E = n(74538),
    b = n(550385),
    y = n(981631),
    O = n(921944);
let v = function () {
    let e = (0, i.e7)([m.Z], () => m.Z.getLayers().includes(y.S9g.USER_SETTINGS)),
        t = (0, i.e7)([g.default], () => E.ZP.canUseClientThemes(g.default.getCurrentUser())),
        n = (0, i.e7)([s.Z], () => s.Z.isCoachmark),
        v = (0, c.g)(),
        { v2EditorEnabled: I } = l.M.useExperiment({ location: 'AppRightSidePanel' }),
        { activePanel: T, metadata: S } = (0, b.oq)(),
        A = [];
    !e && null == T && (n && !t && A.push(a.z.CLIENT_THEMES_COACHMARK), v && A.push(a.z.CUSTOM_THEME_COACHMARK));
    let [N, C] = (0, h.US)(A, O.R.SIDEBAR, !0),
        R = N === a.z.CLIENT_THEMES_COACHMARK,
        P = N === a.z.CUSTOM_THEME_COACHMARK;
    if (((0, d.HA)(v, N), e)) return null;
    let w = I ? _.Z : f.Z;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (T === b.wh.CLIENT_THEMES || R) &&
                (0, r.jsx)(u.Z, {
                    markAsDismissed: R
                        ? C
                        : () => {
                              (0, p.Q3)(a.z.CLIENT_THEMES_COACHMARK, {
                                  dismissAction: O.L.INDIRECT_ACTION,
                                  forceTrack: !0
                              });
                          },
                    showClientThemesCoachmark: R
                }),
            T === b.wh.APP_ICON &&
                (0, r.jsx)(o.Z, {
                    isCoachmark: !1,
                    markAsDismissed: C
                }),
            (T === b.wh.CUSTOM_THEME || P) &&
                (0, r.jsx)(w, {
                    metadata: null != S ? S : {},
                    markAsDismissed: C,
                    isCoachmark: P
                })
        ]
    });
};
