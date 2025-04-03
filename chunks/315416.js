n.d(t, { Z: () => c });
var r = n(192379),
    l = n(442837),
    a = n(897285),
    i = n(924301);
function c(e, t, n) {
    let c = (0, l.e7)([i.ZP], () => i.ZP.getUserCount(t, n));
    return (
        (0, r.useEffect)(() => {
            null != e && null != t && a.Z.getGuildEventUserCounts(e, t, null != n ? [n] : []);
        }, [t, e, n]),
        c
    );
}
