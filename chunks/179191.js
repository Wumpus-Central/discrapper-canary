n.d(t, { ZP: () => o });
var r = n(442837),
    i = n(523746),
    l = n(358221),
    a = n(354459);
function o(e, t) {
    return (0, r.e7)(
        [i.Z, l.Z],
        () => i.Z.isCallActive(e, t) && l.Z.getParticipants(e).some((e) => e.type === a.fO.USER && !e.ringing),
        [e, t],
    );
}
