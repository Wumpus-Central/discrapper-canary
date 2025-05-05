n.d(t, { Z: () => c });
var r = n(73800),
    l = n(442837),
    i = n(897285),
    a = n(924301);
function c(e, t, n) {
    let c = (0, l.e7)([a.ZP], () => a.ZP.getUserCount(t, n));
    return (
        (0, r.useEffect)(() => {
            null != e && null != t && i.Z.getGuildEventUserCounts(e, t, null != n ? [n] : []);
        }, [t, e, n]),
        c
    );
}
