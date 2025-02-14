n.d(t, { Z: () => d });
var i = n(192379),
    l = n(442837),
    r = n(592125),
    a = n(594174),
    s = n(900255),
    o = n(333984);
function d() {
    let e = (0, l.e7)([r.Z], () => r.Z.getPrivateChannelsVersion()),
        t = (0, l.Wu)(
            [r.Z, o.Z],
            () => {
                let e = r.Z.getMutablePrivateChannels(),
                    t = Array.from(o.Z.getSpamChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e);
                return (0, s.x)(t);
            },
            [e]
        ),
        n = (0, l.cj)(
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
    return i.useMemo(
        () =>
            t.map((e) => ({
                channel: e,
                user: n[e.id]
            })),
        [t, n]
    );
}
