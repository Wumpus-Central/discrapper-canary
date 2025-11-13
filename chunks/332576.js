n.d(t, { Z: () => c });
var i = n(951288);
n(647438);
var l = n(442837),
    r = n(481060),
    a = n(475179),
    o = n(358221),
    s = n(979651),
    u = n(981631),
    d = n(388032);
function c(e, t) {
    let n = (0, l.e7)([o.Z], () => e === o.Z.getSelectedParticipantId(t), [t, e]);
    return (0, l.e7)([o.Z, s.Z], () => {
        let n = s.Z.isInChannel(t, e) && s.Z.hasVideo(t),
            i = o.Z.getLayout(t),
            l = i === u.AEg.MINIMUM || i === u.AEg.NORMAL;
        return !n || l;
    }, [t, e])
        ? null
        : (0, i.jsx)(r.sNh, {
              id: "focus-video",
              label: n ? d.intl.string(d.t.KJPKUT) : d.intl.string(d.t["77cRN4"]),
              action: () => a.Z.selectParticipant(t, n ? null : e),
          });
}
