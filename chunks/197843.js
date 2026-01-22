n.d(t, {
    Rg: () => s,
    eK: () => c,
    v: () => d,
});
var l = n(311907),
    r = n(543465),
    i = n(234053),
    a = n(985018);
function s(e, t, n) {
    return (0, l.bG)([r.Ay], () => {
        var l;
        return t === n
            ? r.Ay.isChannelOptedIn(e, t, !0)
            : ((l = r.Ay),
              !!(0, i.cE)(e) || l.isChannelOptedIn(e, t, !0) || (null != n && r.Ay.isChannelOptedIn(e, n, !0)));
    });
}
function c(e, t, n) {
    return (0, l.bG)([r.Ay], () => t !== n && null != n && r.Ay.isChannelOptedIn(e, n, !0));
}
function d(e, t) {
    return (0, l.bG)([r.Ay], () => {
        if (null != t && r.Ay.isChannelOptedIn(e, t, !0)) return a.intl.string(a.t.Lz94y1);
    });
}
