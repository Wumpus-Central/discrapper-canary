n.d(t, { Z: () => E }), n(539854), n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(704215),
    a = n(907459),
    s = n(514361),
    l = n(553049),
    c = n(724145),
    u = n(605236),
    d = n(243778),
    f = n(819640),
    _ = n(594174),
    p = n(74538),
    h = n(550385),
    m = n(981631),
    g = n(921944);
let E = function () {
    let e = (0, i.e7)([s.Z], () => s.Z.isCoachmark),
        t = (0, i.e7)([f.Z], () => f.Z.getLayers().includes(m.S9g.USER_SETTINGS)),
        n = (0, i.e7)([_.default], () => p.ZP.canUseClientThemes(_.default.getCurrentUser())),
        { activePanel: E, metadata: b } = (0, h.oq)(),
        y = [];
    t || !e || n || null != E || y.push(o.z.CLIENT_THEMES_COACHMARK);
    let [O, v] = (0, d.US)(y, g.R.SIDEBAR, !0),
        I = O === o.z.CLIENT_THEMES_COACHMARK;
    return t
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (E === h.wh.CLIENT_THEMES || I) &&
                      (0, r.jsx)(c.Z, {
                          markAsDismissed: I
                              ? v
                              : () => {
                                    (0, u.EW)(o.z.CLIENT_THEMES_COACHMARK, {
                                        dismissAction: g.L.INDIRECT_ACTION,
                                        forceTrack: !0
                                    });
                                },
                          showClientThemesCoachmark: I
                      }),
                  E === h.wh.APP_ICON &&
                      (0, r.jsx)(a.Z, {
                          isCoachmark: !1,
                          markAsDismissed: v
                      }),
                  E === h.wh.CUSTOM_THEME && (0, r.jsx)(l.Z, { metadata: b })
              ]
          });
};
