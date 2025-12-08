n.d(t, { Z: () => a });
var r = n(473749),
    i = n(442837),
    l = n(19394),
    o = n(60482);
function a(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getStateForGuild(e));
    return r.useMemo(() => {
        var e;
        let n = Object.values(null != (e = null == t ? void 0 : t.entitlements) ? e : {});
        return 0 === n.length ? [] : (0, l.h)(n);
    }, [null == t ? void 0 : t.entitlements]);
}
