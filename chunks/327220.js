r.d(t, { Z: () => l }), r(47120);
var n = r(192379),
    a = r(442837),
    o = r(592125),
    i = r(9156);
function l(e) {
    let t = (0, a.e7)([o.Z], () => o.Z.getPrivateChannelsVersion()),
        r = (0, a.e7)([o.Z], () => o.Z.getMutableDMsByUserIds(), [t]),
        l = (0, a.e7)([i.ZP], () => i.ZP.getMutedChannels(null)),
        s = n.useMemo(() => {
            let e = new Set();
            for (let t in r) {
                let n = r[t];
                null != n && l.has(n) && e.add(t);
            }
            return e;
        }, [r, l]);
    return n.useMemo(
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
