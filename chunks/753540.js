n.d(t, {
    EH: () => c,
    Mf: () => o,
    t4: () => s
});
var l = n(442837),
    r = n(9156),
    i = n(724213),
    a = n(388032);
function o(e, t, n) {
    return (0, l.e7)([r.ZP], () => {
        var l;
        return t === n ? r.ZP.isChannelOptedIn(e, t, !0) : ((l = r.ZP), !!(0, i.hi)(e) || l.isChannelOptedIn(e, t, !0) || (null != n && r.ZP.isChannelOptedIn(e, n, !0)));
    });
}
function s(e, t, n) {
    return (0, l.e7)([r.ZP], () => t !== n && null != n && r.ZP.isChannelOptedIn(e, n, !0));
}
function c(e, t) {
    return (0, l.e7)([r.ZP], () => {
        if (null != t && r.ZP.isChannelOptedIn(e, t, !0)) return a.intl.string(a.t.Lz94y8);
    });
}
