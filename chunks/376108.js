n.d(t, { Z: () => s });
var r = n(473749),
    i = n(442837),
    o = n(897285),
    a = n(924301);
function s(e, t, n) {
    let s = (0, i.e7)([a.ZP], () => a.ZP.getUserCount(t, n));
    return (
        (0, r.useEffect)(() => {
            null != e && null != t && o.Z.getGuildEventUserCounts(e, t, null != n ? [n] : []);
        }, [t, e, n]),
        s
    );
}
