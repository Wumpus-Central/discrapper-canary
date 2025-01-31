n.d(e, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    d = n(475179),
    r = n(358221),
    o = n(979651),
    s = n(981631),
    u = n(388032);
function c(t, e) {
    let n = (0, l.e7)([r.Z], () => t === r.Z.getSelectedParticipantId(e), [e, t]);
    return (0, l.e7)(
        [r.Z, o.Z],
        () => {
            let n = o.Z.isInChannel(e, t) && o.Z.hasVideo(e),
                i = r.Z.getLayout(e),
                l = i === s.AEg.MINIMUM || i === s.AEg.NORMAL;
            return !n || l;
        },
        [e, t]
    )
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'focus-video',
              label: n ? u.intl.string(u.t.KJPKUV) : u.intl.string(u.t['77cRNz']),
              action: () => d.Z.selectParticipant(e, n ? null : t)
          });
}
