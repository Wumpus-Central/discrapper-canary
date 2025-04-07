n.d(t, {
    EH: () => c,
    Mf: () => o,
    t4: () => s
});
var r = n(442837),
    l = n(9156),
    a = n(724213),
    i = n(388032);
function o(e, t, n) {
    return (0, r.e7)([l.ZP], () => {
        var r;
        return t === n ? l.ZP.isChannelOptedIn(e, t, !0) : ((r = l.ZP), !!(0, a.hi)(e) || r.isChannelOptedIn(e, t, !0) || (null != n && l.ZP.isChannelOptedIn(e, n, !0)));
    });
}
function s(e, t, n) {
    return (0, r.e7)([l.ZP], () => t !== n && null != n && l.ZP.isChannelOptedIn(e, n, !0));
}
function c(e, t) {
    return (0, r.e7)([l.ZP], () => {
        if (null != t && l.ZP.isChannelOptedIn(e, t, !0)) return i.NW.string(i.t.Lz94y8);
    });
}
