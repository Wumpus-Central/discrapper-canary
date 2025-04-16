n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(475179),
    a = n(358221),
    d = n(979651),
    o = n(981631),
    u = n(388032);
function c(e, t) {
    let n = (0, r.e7)([a.Z], () => e === a.Z.getSelectedParticipantId(t), [t, e]);
    return (0, r.e7)(
        [a.Z, d.Z],
        () => {
            let n = d.Z.isInChannel(t, e) && d.Z.hasVideo(t),
                i = a.Z.getLayout(t),
                r = i === o.AEg.MINIMUM || i === o.AEg.NORMAL;
            return !n || r;
        },
        [t, e]
    )
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'focus-video',
              label: n ? u.NW.string(u.t.KJPKUV) : u.NW.string(u.t['77cRNz']),
              action: () => s.Z.selectParticipant(t, n ? null : e)
          });
}
