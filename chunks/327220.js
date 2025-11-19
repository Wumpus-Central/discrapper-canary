n.d(t, { Z: () => l }), n(388685);
var r = n(473749),
    i = n(442837),
    a = n(592125),
    o = n(9156);
let s = null;
function l(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getPrivateChannelsVersion()),
        n = (0, i.e7)([a.Z], () => a.Z.getMutableDMsByUserIds(), [t]),
        l = (0, i.e7)([o.ZP], () => o.ZP.getMutedChannels(s)),
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
