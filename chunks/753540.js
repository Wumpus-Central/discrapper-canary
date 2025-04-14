t.d(n, {
    EH: () => c,
    Mf: () => o,
    t4: () => s
});
var r = t(442837),
    l = t(9156),
    a = t(724213),
    i = t(388032);
function o(e, n, t) {
    return (0, r.e7)([l.ZP], () => {
        var r;
        return n === t ? l.ZP.isChannelOptedIn(e, n, !0) : ((r = l.ZP), !!(0, a.hi)(e) || r.isChannelOptedIn(e, n, !0) || (null != t && l.ZP.isChannelOptedIn(e, t, !0)));
    });
}
function s(e, n, t) {
    return (0, r.e7)([l.ZP], () => n !== t && null != t && l.ZP.isChannelOptedIn(e, t, !0));
}
function c(e, n) {
    return (0, r.e7)([l.ZP], () => {
        if (null != n && l.ZP.isChannelOptedIn(e, n, !0)) return i.NW.string(i.t.Lz94y8);
    });
}
