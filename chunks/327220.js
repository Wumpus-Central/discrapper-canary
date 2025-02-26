n.d(t, { Z: () => o }), n(47120);
var r = n(192379),
    a = n(442837),
    i = n(592125),
    l = n(9156);
function o(e) {
    let t = (0, a.e7)([i.Z], () => i.Z.getPrivateChannelsVersion()),
        n = (0, a.e7)([i.Z], () => i.Z.getMutableDMsByUserIds(), [t]),
        o = (0, a.e7)([l.ZP], () => l.ZP.getMutedChannels(null)),
        s = r.useMemo(() => {
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
                      for (let t of e.participants) if (s.has(t)) return !1;
                      return !0;
                  }),
        [e, s]
    );
}
