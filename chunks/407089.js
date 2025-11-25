n.d(t, {
    R: () => l,
    r: () => s,
}),
    n(388685);
var r = n(473749),
    i = n(812206),
    a = n(189451),
    o = n(674563);
function s(e) {
    var t;
    if (null == e) return null;
    if (e.type !== o.wW.GAME) return e;
    for (let n of null != (t = e.linkedGames) ? t : []) {
        let e = i.Z.getApplication(n.id);
        if (null != e && n.type === a.tE.OFFICIAL) return e;
    }
    return null;
}
function l(e) {
    return r.useMemo(() => s(e), [e]);
}
