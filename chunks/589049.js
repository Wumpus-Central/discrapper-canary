n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(906732),
    a = n(174609),
    o = n(728285),
    s = n(313789),
    c = n(518596),
    u = n(358085),
    d = n(981631),
    p = n(388032);
function h() {
    let e = (0, o.bp)(),
        { analyticsLocations: t } = (0, l.ZP)();
    return e === d.IlC.APP || u.isPlatformEmbedded
        ? (0, r.jsx)(i.sNh, {
              id: "voice-and-video-settings",
              label: p.intl.string(p.t.dsXapK),
              action: () => {
                  (0, a.Z)(),
                      (0, c.openUserSettings)(s.n.VOICE_AND_VIDEO_PANEL, {
                          section: d.oAB.VOICE,
                          analyticsLocations: t,
                      });
              },
              icon: i.ewm,
          })
        : null;
}
