n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(906732),
    a = n(174609),
    o = n(728285),
    s = n(313789),
    c = n(526665),
    u = n(518596),
    d = n(358085),
    p = n(981631),
    f = n(388032);
function h() {
    let e = (0, o.bp)(),
        { analyticsLocations: t, newestAnalyticsLocation: n } = (0, l.ZP)(),
        h = (0, c.wy)(n);
    return e === p.IlC.APP || d.isPlatformEmbedded || h
        ? (0, r.jsx)(i.sNh, {
              id: "voice-and-video-settings",
              label: f.intl.string(f.t.dsXapM),
              action: () => {
                  h || (0, a.Z)(),
                      (0, u.openUserSettings)(s.n.VOICE_AND_VIDEO_PANEL, {
                          section: p.oAB.VOICE,
                          analyticsLocations: t,
                      });
              },
              icon: i.ewm,
          })
        : null;
}
