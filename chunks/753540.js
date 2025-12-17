n.d(t, {
    EH: () => d,
    Mf: () => o,
    t4: () => c,
});
var a = n(442837),
    r = n(9156),
    l = n(724213),
    i = n(388032);
function o(e, t, n) {
    return (0, a.e7)([r.ZP], () => {
        var a;
        return t === n
            ? r.ZP.isChannelOptedIn(e, t, !0)
            : ((a = r.ZP),
              !!(0, l.hi)(e) || a.isChannelOptedIn(e, t, !0) || (null != n && r.ZP.isChannelOptedIn(e, n, !0)));
    });
}
function c(e, t, n) {
    return (0, a.e7)([r.ZP], () => t !== n && null != n && r.ZP.isChannelOptedIn(e, n, !0));
}
function d(e, t) {
    return (0, a.e7)([r.ZP], () => {
        if (null != t && r.ZP.isChannelOptedIn(e, t, !0)) return i.intl.string(i.t.Lz94y1);
    });
}
