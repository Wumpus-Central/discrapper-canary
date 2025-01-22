r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(592125),
    l = r(9156);
let u = null;
function c(e) {
    let n = (0, o.e7)([s.Z], () => s.Z.getPrivateChannelsVersion()),
        r = (0, o.e7)([s.Z], () => s.Z.getMutableDMsByUserIds(), [n]),
        i = (0, o.e7)([l.ZP], () => l.ZP.getMutedChannels(u)),
        c = a.useMemo(() => {
            let e = new Set();
            for (let n in r) {
                let a = n,
                    o = r[a];
                null != o && i.has(o) && e.add(a);
            }
            return e;
        }, [r, i]);
    return a.useMemo(
        () =>
            null == e
                ? void 0
                : e.filter((e) => {
                      for (let n of e.participants) if (c.has(n)) return !1;
                      return !0;
                  }),
        [e, c]
    );
}
