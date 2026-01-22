n.d(t, {
    A: () => c,
});
var r = n(64700),
    i = n(311907),
    l = n(734057),
    a = n(287809),
    s = n(180232),
    o = n(157550);

function c() {
    let e = (0, i.bG)([l.A], () => l.A.getPrivateChannelsVersion()),
        t = (0, i.yK)([l.A, o.A], () => {
            let e = l.A.getMutablePrivateChannels(),
                t = Array.from(o.A.getSpamChannelIds())
                    .map((t) => e[t])
                    .filter((e) => null != e);
            return (0, s.g)(t);
        }, [e]),
        n = (0, i.cf)([a.default], () => {
            let e = {};
            return (
                t.forEach((t) => {
                    let n = a.default.getUser(t.recipients[0]);
                    null != n && (e[t.id] = n);
                }),
                e
            );
        }, [t]);
    return r.useMemo(
        () =>
            t.map((e) => ({
                channel: e,
                user: n[e.id],
            })),
        [t, n],
    );
}
