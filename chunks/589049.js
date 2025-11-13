n.d(t, { Z: () => f });
var i = n(951288);
n(647438);
var r = n(481060),
    l = n(906732),
    a = n(174609),
    o = n(728285),
    s = n(313789),
    c = n(526665),
    u = n(518596),
    d = n(358085),
    p = n(981631),
    h = n(388032);
function f() {
    let e = (0, o.bp)(),
        { analyticsLocations: t, newestAnalyticsLocation: n } = (0, l.ZP)(),
        f = (0, c.wy)(n);
    return e === p.IlC.APP || d.isPlatformEmbedded || f
        ? (0, i.jsx)(r.sNh, {
              id: "voice-and-video-settings",
              label: h.intl.string(h.t.dsXapM),
              action: () => {
                  f || (0, a.Z)(),
                      (0, u.openUserSettings)(s.n.VOICE_AND_VIDEO_PANEL, {
                          section: p.oAB.VOICE,
                          analyticsLocations: t,
                      });
              },
              icon: r.ewm,
          })
        : null;
}
