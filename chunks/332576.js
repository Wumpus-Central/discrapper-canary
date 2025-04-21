n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    o = n(475179),
    s = n(358221),
    a = n(979651),
    d = n(981631),
    c = n(388032);
function u(e, t) {
    let n = (0, r.e7)([s.Z], () => e === s.Z.getSelectedParticipantId(t), [t, e]);
    return (0, r.e7)(
        [s.Z, a.Z],
        () => {
            let n = a.Z.isInChannel(t, e) && a.Z.hasVideo(t),
                i = s.Z.getLayout(t),
                r = i === d.AEg.MINIMUM || i === d.AEg.NORMAL;
            return !n || r;
        },
        [t, e]
    )
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'focus-video',
              label: n ? c.intl.string(c.t.KJPKUV) : c.intl.string(c.t['77cRNz']),
              action: () => o.Z.selectParticipant(t, n ? null : e)
          });
}
