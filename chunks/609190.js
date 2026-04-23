"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(311907),
    s = n(734057),
    a = n(543465);
function o(e) {
    let t = (0, i.bG)([s.A], () => s.A.getPrivateChannelsVersion()),
        n = (0, i.bG)([s.A], () => s.A.getMutableDMsByUserIds(), [t]),
        o = (0, i.bG)([a.Ay], () => a.Ay.getMutedChannels(null)),
        l = r.useMemo(() => {
            let e = new Set();
            for (let t in n) {
                let r = n[t];
                null != r && o.has(r) && e.add(t);
            }
            return e;
        }, [n, o]);
    return r.useMemo(
        () =>
            e?.filter((e) => {
                for (let t of e.participants) if (l.has(t)) return !1;
                return !0;
            }),
        [e, l],
    );
}
