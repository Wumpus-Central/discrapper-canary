t.d(n, {
    EH: () => c,
    Mf: () => o,
    t4: () => s
});
var l = t(442837),
    r = t(9156),
    i = t(724213),
    a = t(388032);
function o(e, n, t) {
    return (0, l.e7)([r.ZP], () => {
        var l;
        return n === t ? r.ZP.isChannelOptedIn(e, n, !0) : ((l = r.ZP), !!(0, i.hi)(e) || l.isChannelOptedIn(e, n, !0) || (null != t && r.ZP.isChannelOptedIn(e, t, !0)));
    });
}
function s(e, n, t) {
    return (0, l.e7)([r.ZP], () => n !== t && null != t && r.ZP.isChannelOptedIn(e, t, !0));
}
function c(e, n) {
    return (0, l.e7)([r.ZP], () => {
        if (null != n && r.ZP.isChannelOptedIn(e, n, !0)) return a.intl.string(a.t.Lz94y8);
    });
}
