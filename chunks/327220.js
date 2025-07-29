(n.d(t, { Z: () => o }), n(388685));
var r = n(73800),
    i = n(442837),
    a = n(592125),
    l = n(9156);
function o(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getPrivateChannelsVersion()),
        n = (0, i.e7)([a.Z], () => a.Z.getMutableDMsByUserIds(), [t]),
        o = (0, i.e7)([l.ZP], () => l.ZP.getMutedChannels(null)),
        c = r.useMemo(() => {
            let e = new Set();
            for (let t in n) {
                let r = n[t];
                null != r && o.has(r) && e.add(t);
            }
            return e;
        }, [n, o]);
    return r.useMemo(
        () =>
            null == e
                ? void 0
                : e.filter((e) => {
                      for (let t of e.participants) if (c.has(t)) return !1;
                      return !0;
                  }),
        [e, c]
    );
}
