n.d(t, { Z: () => v }), n(539854), n(388685);
var r = n(54381),
    i = n(442837),
    a = n(704215),
    o = n(907459),
    s = n(90110),
    l = n(514361),
    c = n(662975),
    u = n(724145),
    d = n(771934),
    f = n(884134),
    _ = n(266454),
    p = n(243778),
    h = n(819640),
    m = n(594174),
    g = n(74538),
    E = n(550385),
    b = n(981631),
    y = n(921944),
    O = n(223399);
let v = function (e) {
    let { mobile: t } = e,
        n = (0, i.e7)([h.Z], () => h.Z.getLayers().includes(b.S9g.USER_SETTINGS)),
        v = (0, i.e7)([m.default], () => g.ZP.canUseClientThemes(m.default.getCurrentUser())),
        I = (0, i.e7)([l.Z], () => l.Z.isCoachmark),
        T = (0, c.g)(),
        { activePanel: S, metadata: A } = (0, E.oq)(),
        C = [];
    !n && null == S && (I && !v && C.push(a.z.CLIENT_THEMES_COACHMARK), T && C.push(a.z.CUSTOM_THEME_COACHMARK));
    let [N, R] = (0, p.US)(C, y.R.SIDEBAR, !0),
        P = N === a.z.CLIENT_THEMES_COACHMARK,
        D = N === a.z.CUSTOM_THEME_COACHMARK;
    if (((0, d.HA)(T, N), n)) return null;
    let w = S === E.wh.CLIENT_THEMES || P,
        L = S === E.wh.APP_ICON,
        x = S === E.wh.CUSTOM_THEME || D,
        M = S === E.wh.APPLICATION_TEST_MODE_DEBUG;
    if (!(w || L || x || M)) return null;
    let j = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                w &&
                    (0, r.jsx)(u.Z, {
                        markAsDismissed: P
                            ? R
                            : () => {
                                  (0, _.Q3)(a.z.CLIENT_THEMES_COACHMARK, {
                                      dismissAction: y.L.INDIRECT_ACTION,
                                      forceTrack: !0,
                                  });
                              },
                        showClientThemesCoachmark: P,
                    }),
                L &&
                    (0, r.jsx)(o.Z, {
                        isCoachmark: !1,
                        markAsDismissed: R,
                    }),
                x &&
                    (0, r.jsx)(f.Z, {
                        metadata: null != A ? A : {},
                        markAsDismissed: R,
                        isCoachmark: D,
                        isMobile: t,
                    }),
                M && (0, r.jsx)(s.Z, {}),
            ],
        });
    return t
        ? (0, r.jsx)("div", {
              className: O.mobileContainer,
              children: j(),
          })
        : j();
};
