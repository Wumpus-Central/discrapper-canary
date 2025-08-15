n.d(t, { Z: () => a });
var r = n(647438),
    l = n(442837),
    i = n(897285),
    s = n(924301);
function a(e, t, n) {
    let a = (0, l.e7)([s.ZP], () => s.ZP.getUserCount(t, n));
    return (
        (0, r.useEffect)(() => {
            null != e && null != t && i.Z.getGuildEventUserCounts(e, t, null != n ? [n] : []);
        }, [t, e, n]),
        a
    );
}
