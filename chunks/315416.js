n.d(t, { Z: () => s });
var l = n(192379),
    r = n(442837),
    i = n(897285),
    a = n(924301);
function s(e, t, n) {
    let s = (0, r.e7)([a.ZP], () => a.ZP.getUserCount(t, n));
    return (
        (0, l.useEffect)(() => {
            null != e && null != t && i.Z.getGuildEventUserCounts(e, t, null != n ? [n] : []);
        }, [t, e, n]),
        s
    );
}
