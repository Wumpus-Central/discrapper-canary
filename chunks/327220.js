n.d(t, { Z: () => l }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(592125),
    s = n(9156);
let o = null;
function l(e) {
    let t = (0, r.e7)([a.Z], () => a.Z.getPrivateChannelsVersion()),
        n = (0, r.e7)([a.Z], () => a.Z.getMutableDMsByUserIds(), [t]),
        l = (0, r.e7)([s.ZP], () => s.ZP.getMutedChannels(o)),
        u = i.useMemo(() => {
            let e = new Set();
            for (let t in n) {
                let i = t,
                    r = n[i];
                null != r && l.has(r) && e.add(i);
            }
            return e;
        }, [n, l]);
    return i.useMemo(
        () =>
            null == e
                ? void 0
                : e.filter((e) => {
                      for (let t of e.participants) if (u.has(t)) return !1;
                      return !0;
                  }),
        [e, u]
    );
}
