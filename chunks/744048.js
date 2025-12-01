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
    p = n(266454),
    _ = n(243778),
    m = n(819640),
    h = n(594174),
    g = n(74538),
    E = n(550385),
    b = n(981631),
    y = n(921944),
    O = n(223399);
let v = function (e) {
    let { mobile: t } = e,
        n = (0, i.e7)([m.Z], () => m.Z.getLayers().includes(b.S9g.USER_SETTINGS)),
        v = (0, i.e7)([h.default], () => g.ZP.canUseClientThemes(h.default.getCurrentUser())),
        S = (0, i.e7)([l.Z], () => l.Z.isCoachmark),
        I = (0, c.g)(),
        { activePanel: T, metadata: A } = (0, E.oq)(),
        C = [];
    !n && null == T && (S && !v && C.push(a.z.CLIENT_THEMES_COACHMARK), I && C.push(a.z.CUSTOM_THEME_COACHMARK));
    let [N, P] = (0, _.US)(C, y.R.SIDEBAR, !0),
        R = N === a.z.CLIENT_THEMES_COACHMARK,
        w = N === a.z.CUSTOM_THEME_COACHMARK;
    if (((0, d.HA)(I, N), n)) return null;
    let D = T === E.wh.CLIENT_THEMES || R,
        x = T === E.wh.APP_ICON,
        L = T === E.wh.CUSTOM_THEME || w,
        j = T === E.wh.APPLICATION_TEST_MODE_DEBUG;
    if (!(D || x || L || j)) return null;
    let M = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                D &&
                    (0, r.jsx)(u.Z, {
                        markAsDismissed: R
                            ? P
                            : () => {
                                  (0, p.Q3)(a.z.CLIENT_THEMES_COACHMARK, {
                                      dismissAction: y.L.INDIRECT_ACTION,
                                      forceTrack: !0,
                                  });
                              },
                        showClientThemesCoachmark: R,
                    }),
                x &&
                    (0, r.jsx)(o.Z, {
                        isCoachmark: !1,
                        markAsDismissed: P,
                    }),
                L &&
                    (0, r.jsx)(f.Z, {
                        metadata: null != A ? A : {},
                        markAsDismissed: P,
                        isCoachmark: w,
                        isMobile: t,
                    }),
                j && (0, r.jsx)(s.Z, {}),
            ],
        });
    return t
        ? (0, r.jsx)("div", {
              className: O.mobileContainer,
              children: M(),
          })
        : M();
};
