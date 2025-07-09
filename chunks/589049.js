n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(230711),
    a = n(40851),
    o = n(906732),
    s = n(174609),
    c = n(358085),
    u = n(981631),
    d = n(388032);
function p() {
    let e = (0, a.bp)(),
        { analyticsLocations: t } = (0, o.ZP)();
    return e === u.IlC.APP || c.isPlatformEmbedded
        ? (0, r.jsx)(i.sNh, {
              id: 'voice-and-video-settings',
              label: d.intl.string(d.t.dsXapK),
              action: () => {
                  ((0, s.Z)(), l.Z.open(u.oAB.VOICE, null, { analyticsLocations: t }));
              },
              icon: i.ewm
          })
        : null;
}
