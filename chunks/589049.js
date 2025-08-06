n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(230711),
    a = n(40851),
    s = n(906732),
    l = n(174609),
    c = n(358085),
    u = n(981631),
    d = n(388032);
function f() {
    let e = (0, a.bp)(),
        { analyticsLocations: t } = (0, s.ZP)(),
        n = () => {
            ((0, l.Z)(), o.Z.open(u.oAB.VOICE, null, { analyticsLocations: t }));
        };
    return e === u.IlC.APP || c.isPlatformEmbedded
        ? (0, r.jsx)(i.sNh, {
              id: 'voice-and-video-settings',
              label: d.intl.string(d.t.dsXapK),
              action: n,
              icon: i.ewm
          })
        : null;
}
