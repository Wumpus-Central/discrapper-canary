n.d(t, { Z: () => g }), n(539854), n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(704215),
    a = n(907459),
    s = n(514361),
    l = n(724145),
    c = n(605236),
    u = n(243778),
    d = n(819640),
    f = n(594174),
    _ = n(74538),
    p = n(550385),
    h = n(981631),
    m = n(921944);
let g = function () {
    let e = (0, i.e7)([s.Z], () => s.Z.isCoachmark),
        t = (0, i.e7)([d.Z], () => d.Z.getLayers().includes(h.S9g.USER_SETTINGS)),
        n = (0, i.e7)([f.default], () => _.ZP.canUseClientThemes(f.default.getCurrentUser())),
        { activePanel: g } = (0, p.oq)(),
        E = [];
    t || !e || n || null != g || E.push(o.z.CLIENT_THEMES_COACHMARK);
    let [b, y] = (0, u.US)(E, m.R.SIDEBAR, !0),
        O = b === o.z.CLIENT_THEMES_COACHMARK;
    return t
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (g === p.wh.CLIENT_THEMES || O) &&
                      (0, r.jsx)(l.Z, {
                          markAsDismissed: O
                              ? y
                              : () => {
                                    (0, c.EW)(o.z.CLIENT_THEMES_COACHMARK, {
                                        dismissAction: m.L.INDIRECT_ACTION,
                                        forceTrack: !0
                                    });
                                },
                          showClientThemesCoachmark: O
                      }),
                  g === p.wh.APP_ICON &&
                      (0, r.jsx)(a.Z, {
                          isCoachmark: !1,
                          markAsDismissed: y
                      })
              ]
          });
};
