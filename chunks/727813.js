n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(192379),
    r = n(442837),
    l = n(592125),
    a = n(594174),
    s = n(900255),
    o = n(333984);
function c() {
    let e = (0, r.e7)([l.Z], () => l.Z.getPrivateChannelsVersion()),
        t = (0, r.Wu)(
            [l.Z, o.Z],
            () => {
                let e = l.Z.getMutablePrivateChannels(),
                    t = Array.from(o.Z.getSpamChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e);
                return (0, s.x)(t);
            },
            [e]
        ),
        n = (0, r.cj)(
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
