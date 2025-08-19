n.d(t, { Z: () => l }), n(388685);
var r = n(647438),
    a = n(442837),
    i = n(592125),
    o = n(9156);
function l(e) {
    let t = (0, a.e7)([i.Z], () => i.Z.getPrivateChannelsVersion()),
        n = (0, a.e7)([i.Z], () => i.Z.getMutableDMsByUserIds(), [t]),
        l = (0, a.e7)([o.ZP], () => o.ZP.getMutedChannels(null)),
        s = r.useMemo(() => {
            let e = new Set();
            for (let t in n) {
                let r = n[t];
                null != r && l.has(r) && e.add(t);
            }
            return e;
        }, [n, l]);
    return r.useMemo(
        () =>
            null == e
                ? void 0
                : e.filter((e) => {
                      for (let t of e.participants) if (s.has(t)) return !1;
                      return !0;
                  }),
        [e, s],
    );
}
