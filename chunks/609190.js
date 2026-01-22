n.d(t, {
    A: () => l,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(734057),
    s = n(543465);
let o = null;

function l(e) {
    let t = (0, i.bG)([a.A], () => a.A.getPrivateChannelsVersion()),
        n = (0, i.bG)([a.A], () => a.A.getMutableDMsByUserIds(), [t]),
        l = (0, i.bG)([s.Ay], () => s.Ay.getMutedChannels(o)),
        c = r.useMemo(() => {
            let e = new Set();
            for (let t in n) {
                let r = t,
                    i = n[r];
                null != i && l.has(i) && e.add(r);
            }
            return e;
        }, [n, l]);
    return r.useMemo(
        () =>
            null == e
                ? void 0
                : e.filter((e) => {
                      for (let t of e.participants) if (c.has(t)) return !1;
                      return !0;
                  }),
        [e, c],
    );
}
