e.d(n, { Z: () => c });
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    o = e(475179),
    d = e(358221),
    r = e(979651),
    s = e(981631),
    u = e(388032);
function c(t, n) {
    let e = (0, l.e7)([d.Z], () => t === d.Z.getSelectedParticipantId(n), [n, t]);
    return (0, l.e7)(
        [d.Z, r.Z],
        () => {
            let e = r.Z.isInChannel(n, t) && r.Z.hasVideo(n),
                i = d.Z.getLayout(n),
                l = i === s.AEg.MINIMUM || i === s.AEg.NORMAL;
            return !e || l;
        },
        [n, t]
    )
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'focus-video',
              label: e ? u.intl.string(u.t.KJPKUV) : u.intl.string(u.t['77cRNz']),
              action: () => o.Z.selectParticipant(n, e ? null : t)
          });
}
