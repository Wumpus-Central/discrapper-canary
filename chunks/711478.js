n.d(t, { A: () => o });
var i = n(477900),
    l = n(17928),
    a = n(558076),
    s = n(872772),
    r = n(271006);
function o(e) {
    let { channelId: t, plantConfig: n, roomWidth: o } = e,
        c = (0, l.bG)([a.A], () => a.A.getRoomObjects(t));
    return (0, i.jsx)(r.A, { channelId: t, plants: c.get(s.N.PLANT) ?? [], plantConfig: n, roomWidth: o });
}
