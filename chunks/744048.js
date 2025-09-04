n.d(t, { Z: () => I }), n(539854), n(388685);
var r = n(951288);
n(647438);
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
    O = n(921944),
    v = n(223399);
let I = function (e) {
    let { mobile: t } = e,
        n = (0, i.e7)([m.Z], () => m.Z.getLayers().includes(y.S9g.USER_SETTINGS)),
        I = (0, i.e7)([g.default], () => E.ZP.canUseClientThemes(g.default.getCurrentUser())),
        S = (0, i.e7)([s.Z], () => s.Z.isCoachmark),
        T = (0, c.g)(),
        { v2EditorEnabled: A } = l.Mc.useExperiment({ location: "AppRightSidePanel" }),
        { activePanel: C, metadata: N } = (0, b.oq)(),
        R = [];
    !n && null == C && (S && !I && R.push(a.z.CLIENT_THEMES_COACHMARK), T && R.push(a.z.CUSTOM_THEME_COACHMARK));
    let [P, w] = (0, h.US)(R, O.R.SIDEBAR, !0),
        D = P === a.z.CLIENT_THEMES_COACHMARK,
        x = P === a.z.CUSTOM_THEME_COACHMARK;
    if (((0, d.HA)(T, P), n)) return null;
    let L = A ? _.Z : f.Z,
        j = C === b.wh.CLIENT_THEMES || D,
        M = C === b.wh.APP_ICON,
        k = C === b.wh.CUSTOM_THEME || x;
    if (!(j || M || k)) return null;
    let U = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                j &&
                    (0, r.jsx)(u.Z, {
                        markAsDismissed: D
                            ? w
                            : () => {
                                  (0, p.Q3)(a.z.CLIENT_THEMES_COACHMARK, {
                                      dismissAction: O.L.INDIRECT_ACTION,
                                      forceTrack: !0,
                                  });
                              },
                        showClientThemesCoachmark: D,
                    }),
                M &&
                    (0, r.jsx)(o.Z, {
                        isCoachmark: !1,
                        markAsDismissed: w,
                    }),
                k &&
                    (0, r.jsx)(L, {
                        metadata: null != N ? N : {},
                        markAsDismissed: w,
                        isCoachmark: x,
                        isMobile: t,
                    }),
            ],
        });
    return t
        ? (0, r.jsx)("div", {
              className: v.mobileContainer,
              children: U(),
          })
        : U();
};
