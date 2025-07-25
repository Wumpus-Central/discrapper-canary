(n.d(t, { Z: () => y }), n(539854), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(704215),
    o = n(907459),
    s = n(514361),
    l = n(662975),
    c = n(724145),
    u = n(507962),
    d = n(726034),
    f = n(266454),
    _ = n(243778),
    p = n(819640),
    h = n(594174),
    m = n(74538),
    g = n(550385),
    E = n(981631),
    b = n(921944);
let y = function () {
    let e = (0, i.e7)([p.Z], () => p.Z.getLayers().includes(E.S9g.USER_SETTINGS)),
        t = (0, i.e7)([h.default], () => m.ZP.canUseClientThemes(h.default.getCurrentUser())),
        n = (0, i.e7)([s.Z], () => s.Z.isCoachmark),
        y = (0, l.g)(),
        { activePanel: O, metadata: v } = (0, g.oq)(),
        I = [];
    !e && null == O && (n && !t && I.push(a.z.CLIENT_THEMES_COACHMARK), y && I.push(a.z.CUSTOM_THEME_COACHMARK));
    let [T, S] = (0, _.US)(I, b.R.SIDEBAR, !0),
        A = T === a.z.CLIENT_THEMES_COACHMARK,
        N = T === a.z.CUSTOM_THEME_COACHMARK;
    return ((0, u.HA)(y, T), e)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (O === g.wh.CLIENT_THEMES || A) &&
                      (0, r.jsx)(c.Z, {
                          markAsDismissed: A
                              ? S
                              : () => {
                                    (0, f.Q3)(a.z.CLIENT_THEMES_COACHMARK, {
                                        dismissAction: b.L.INDIRECT_ACTION,
                                        forceTrack: !0
                                    });
                                },
                          showClientThemesCoachmark: A
                      }),
                  O === g.wh.APP_ICON &&
                      (0, r.jsx)(o.Z, {
                          isCoachmark: !1,
                          markAsDismissed: S
                      }),
                  (O === g.wh.CUSTOM_THEME || N) &&
                      (0, r.jsx)(d.Z, {
                          metadata: null != v ? v : {},
                          markAsDismissed: S,
                          isCoachmark: N
                      })
              ]
          });
};
