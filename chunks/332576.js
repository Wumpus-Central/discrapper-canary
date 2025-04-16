n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    l = n(475179),
    s = n(358221),
    a = n(979651),
    d = n(981631),
    c = n(388032);
function u(e, t) {
    let n = (0, i.e7)([s.Z], () => e === s.Z.getSelectedParticipantId(t), [t, e]);
    return (0, i.e7)(
        [s.Z, a.Z],
        () => {
            let n = a.Z.isInChannel(t, e) && a.Z.hasVideo(t),
                r = s.Z.getLayout(t),
                i = r === d.AEg.MINIMUM || r === d.AEg.NORMAL;
            return !n || i;
        },
        [t, e]
    )
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'focus-video',
              label: n ? c.NW.string(c.t.KJPKUV) : c.NW.string(c.t['77cRNz']),
              action: () => l.Z.selectParticipant(t, n ? null : e)
          });
}
