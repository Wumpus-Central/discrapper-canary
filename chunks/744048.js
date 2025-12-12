n.d(t, { Z: () => O }), n(539854), n(388685);
var r = n(54381),
    i = n(442837),
    a = n(704215),
    o = n(907459),
    s = n(90110),
    l = n(514361),
    c = n(662975),
    u = n(724145),
    d = n(884134),
    f = n(266454),
    p = n(243778),
    _ = n(819640),
    m = n(594174),
    h = n(74538),
    g = n(550385),
    E = n(981631),
    b = n(921944),
    y = n(852750);
let O = function (e) {
    let { mobile: t } = e,
        n = (0, i.e7)([_.Z], () => _.Z.getLayers().includes(E.S9g.USER_SETTINGS)),
        O = (0, i.e7)([m.default], () => h.ZP.canUseClientThemes(m.default.getCurrentUser())),
        v = (0, i.e7)([l.Z], () => l.Z.isCoachmark),
        S = (0, c.g)(),
        { activePanel: I, metadata: T } = (0, g.oq)(),
        C = [];
    !n && null == I && (v && !O && C.push(a.z.CLIENT_THEMES_COACHMARK), S && O && C.push(a.z.CUSTOM_THEME_COACHMARK));
    let [A, N] = (0, p.US)(C, b.R.SIDEBAR, !0),
        P = A === a.z.CLIENT_THEMES_COACHMARK,
        R = A === a.z.CUSTOM_THEME_COACHMARK;
    if (n) return null;
    let w = I === g.wh.CLIENT_THEMES || P,
        D = I === g.wh.APP_ICON,
        x = I === g.wh.CUSTOM_THEME || R,
        L = I === g.wh.APPLICATION_TEST_MODE_DEBUG;
    if (!(w || D || x || L)) return null;
    let j = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                w &&
                    (0, r.jsx)(u.Z, {
                        markAsDismissed: P
                            ? N
                            : () => {
                                  (0, f.Q3)(a.z.CLIENT_THEMES_COACHMARK, {
                                      dismissAction: b.L.INDIRECT_ACTION,
                                      forceTrack: !0,
                                  });
                              },
                        showClientThemesCoachmark: P,
                    }),
                D &&
                    (0, r.jsx)(o.Z, {
                        isCoachmark: !1,
                        markAsDismissed: N,
                    }),
                x &&
                    (0, r.jsx)(d.Z, {
                        metadata: null != T ? T : {},
                        markAsDismissed: N,
                        isCoachmark: R,
                        isMobile: t,
                    }),
                L && (0, r.jsx)(s.Z, {}),
            ],
        });
    return t
        ? (0, r.jsx)("div", {
              className: y.mobileContainer,
              children: j(),
          })
        : j();
};
