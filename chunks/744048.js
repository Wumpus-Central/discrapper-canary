n.d(t, { Z: () => b }), n(539854), n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(704215),
    o = n(907459),
    s = n(514361),
    l = n(662975),
    c = n(724145),
    u = n(726034),
    d = n(605236),
    f = n(243778),
    _ = n(819640),
    p = n(594174),
    h = n(74538),
    m = n(550385),
    g = n(981631),
    E = n(921944);
let b = function () {
    let e = (0, i.e7)([_.Z], () => _.Z.getLayers().includes(g.S9g.USER_SETTINGS)),
        t = (0, i.e7)([p.default], () => h.ZP.canUseClientThemes(p.default.getCurrentUser())),
        n = (0, i.e7)([s.Z], () => s.Z.isCoachmark),
        b = (0, l.g)(),
        { activePanel: y, metadata: O } = (0, m.oq)(),
        v = [];
    !e && null == y && (n && !t && v.push(a.z.CLIENT_THEMES_COACHMARK), b && v.push(a.z.CUSTOM_THEME_COACHMARK));
    let [I, T] = (0, f.US)(v, E.R.SIDEBAR, !0),
        S = I === a.z.CLIENT_THEMES_COACHMARK,
        A = I === a.z.CUSTOM_THEME_COACHMARK;
    return e
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (y === m.wh.CLIENT_THEMES || S) &&
                      (0, r.jsx)(c.Z, {
                          markAsDismissed: S
                              ? T
                              : () => {
                                    (0, d.EW)(a.z.CLIENT_THEMES_COACHMARK, {
                                        dismissAction: E.L.INDIRECT_ACTION,
                                        forceTrack: !0
                                    });
                                },
                          showClientThemesCoachmark: S
                      }),
                  y === m.wh.APP_ICON &&
                      (0, r.jsx)(o.Z, {
                          isCoachmark: !1,
                          markAsDismissed: T
                      }),
                  (y === m.wh.CUSTOM_THEME || A) &&
                      (0, r.jsx)(u.Z, {
                          metadata: null != O ? O : {},
                          markAsDismissed: T,
                          isCoachmark: A
                      })
              ]
          });
};
