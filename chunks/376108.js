n.d(t, { Z: () => s });
var r = n(473749),
    i = n(442837),
    a = n(897285),
    o = n(924301);
function s(e, t, n) {
    let s = (0, i.e7)([o.ZP], () => o.ZP.getUserCount(t, n));
    return (
        (0, r.useEffect)(() => {
            null != e && null != t && a.Z.getGuildEventUserCounts(e, t, null != n ? [n] : []);
        }, [t, e, n]),
        s
    );
}
