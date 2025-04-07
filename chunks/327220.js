n.d(t, { Z: () => a }), n(388685);
var r = n(192379),
    i = n(442837),
    l = n(592125),
    o = n(9156);
function a(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getPrivateChannelsVersion()),
        n = (0, i.e7)([l.Z], () => l.Z.getMutableDMsByUserIds(), [t]),
        a = (0, i.e7)([o.ZP], () => o.ZP.getMutedChannels(null)),
        s = r.useMemo(() => {
            let e = new Set();
            for (let t in n) {
                let r = n[t];
                null != r && a.has(r) && e.add(t);
            }
            return e;
        }, [n, a]);
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
