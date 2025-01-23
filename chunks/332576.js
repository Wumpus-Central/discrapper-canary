e.d(t, {
    Z: function () {
        return c;
    }
});
var i = e(200651);
e(192379);
var l = e(442837),
    r = e(481060),
    o = e(475179),
    u = e(358221),
    a = e(979651),
    d = e(981631),
    s = e(388032);
function c(n, t) {
    let e = (0, l.e7)([u.Z], () => n === u.Z.getSelectedParticipantId(t), [t, n]);
    return (0, l.e7)(
        [u.Z, a.Z],
        () => {
            let e = a.Z.isInChannel(t, n) && a.Z.hasVideo(t),
                i = u.Z.getLayout(t),
                l = i === d.AEg.MINIMUM || i === d.AEg.NORMAL;
            return !e || l;
        },
        [t, n]
    )
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'focus-video',
              label: e ? s.intl.string(s.t.KJPKUV) : s.intl.string(s.t['77cRNz']),
              action: () => o.Z.selectParticipant(t, e ? null : n)
          });
}
