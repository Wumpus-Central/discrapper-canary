n.d(t, { A: () => d });
var s = n(64700),
    l = n(311907),
    a = n(734057),
    i = n(287809),
    r = n(180232),
    c = n(157550);
function d() {
    let e = (0, l.bG)([a.A], () => a.A.getPrivateChannelsVersion()),
        t = (0, l.yK)([a.A, c.A], () => {
            let e = a.A.getMutablePrivateChannels(),
                t = Array.from(c.A.getSpamChannelIds())
                    .map((t) => e[t])
                    .filter((e) => null != e);
            return (0, r.g)(t);
        }, [e]),
        n = (0, l.cf)([i.default], () => {
            let e = {};
            return (
                t.forEach((t) => {
                    let n = i.default.getUser(t.recipients[0]);
                    null != n && (e[t.id] = n);
                }),
                e
            );
        }, [t]);
    return s.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n]);
}
