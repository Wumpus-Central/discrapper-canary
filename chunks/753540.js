t.d(n, {
    EH: () => d,
    Mf: () => o,
    t4: () => s
});
var l = t(442837),
    i = t(9156),
    a = t(724213),
    r = t(388032);
function o(e, n, t) {
    return (0, l.e7)([i.ZP], () => {
        var l;
        return n === t ? i.ZP.isChannelOptedIn(e, n, !0) : ((l = i.ZP), !!(0, a.hi)(e) || l.isChannelOptedIn(e, n, !0) || (null != t && i.ZP.isChannelOptedIn(e, t, !0)));
    });
}
function s(e, n, t) {
    return (0, l.e7)([i.ZP], () => n !== t && null != t && i.ZP.isChannelOptedIn(e, t, !0));
}
function d(e, n) {
    return (0, l.e7)([i.ZP], () => {
        if (null != n && i.ZP.isChannelOptedIn(e, n, !0)) return r.intl.string(r.t.Lz94y8);
    });
}
