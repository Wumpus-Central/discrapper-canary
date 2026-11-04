var i = n(477900),
    l = n(855986),
    a = n(558076),
    s = n(872772),
    r = n(271006);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, plantConfig: n, roomWidth: o } = e,
                d = (0, l.bG)([a.A], () => a.A.getRoomObjects(t));
            return (0, i.jsx)(r.A, { channelId: t, plants: d.get(s.N.PLANT) ?? [], plantConfig: n, roomWidth: o });
        },
    },
);
