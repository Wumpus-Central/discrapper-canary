(r.d(t, { Z: () => s }), r(388685));
var n = r(73800),
    i = r(442837),
    a = r(592125),
    l = r(9156);
function s(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getPrivateChannelsVersion()),
        r = (0, i.e7)([a.Z], () => a.Z.getMutableDMsByUserIds(), [t]),
        s = (0, i.e7)([l.ZP], () => l.ZP.getMutedChannels(null)),
        o = n.useMemo(() => {
            let e = new Set();
            for (let t in r) {
                let n = r[t];
                null != n && s.has(n) && e.add(t);
            }
            return e;
        }, [r, s]);
    return n.useMemo(
        () =>
            null == e
                ? void 0
                : e.filter((e) => {
                      for (let t of e.participants) if (o.has(t)) return !1;
                      return !0;
                  }),
        [e, o]
    );
}
