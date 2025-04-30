n.d(t, { Z: () => c });
var r = n(192379),
    i = n(442837),
    l = n(592125),
    a = n(594174),
    o = n(355298),
    s = n(900255);
function c() {
    let e = (0, i.e7)([l.Z], () => l.Z.getPrivateChannelsVersion()),
        t = (0, i.Wu)(
            [l.Z, o.Z],
            () => {
                let e = l.Z.getMutablePrivateChannels(),
                    t = Array.from(o.Z.getMessageRequestChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e);
                return (0, s.x)(t);
            },
            [e]
        ),
        n = (0, i.cj)(
            [a.default],
            () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        let n = a.default.getUser(t.recipients[0]);
                        null != n && (e[t.id] = n);
                    }),
                    e
                );
            },
            [t]
        );
    return r.useMemo(
        () =>
            t.map((e) => ({
                channel: e,
                user: n[e.id]
            })),
        [t, n]
    );
}
