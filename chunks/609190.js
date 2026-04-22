n.d(t, { A: () => s });
var r = n(64700),
    l = n(311907),
    i = n(734057),
    a = n(543465);
function s(e) {
    let t = (0, l.bG)([i.A], () => i.A.getPrivateChannelsVersion()),
        n = (0, l.bG)([i.A], () => i.A.getMutableDMsByUserIds(), [t]),
        s = (0, l.bG)([a.Ay], () => a.Ay.getMutedChannels(null)),
        o = r.useMemo(() => {
            let e = new Set();
            for (let t in n) {
                let r = n[t];
                null != r && s.has(r) && e.add(t);
            }
            return e;
        }, [n, s]);
    return r.useMemo(
        () =>
            e?.filter((e) => {
                for (let t of e.participants) if (o.has(t)) return !1;
                return !0;
            }),
        [e, o],
    );
}
