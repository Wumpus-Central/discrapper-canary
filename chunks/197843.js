t.d(n, { Rg: () => r, eK: () => d, v: () => c });
var l = t(311907),
    i = t(543465),
    s = t(234053),
    a = t(985018);
function r(e, n, t) {
    return (0, l.bG)([i.Ay], () => {
        var l;
        return n === t
            ? i.Ay.isChannelOptedIn(e, n, !0)
            : ((l = i.Ay),
              !!(0, s.cE)(e) || l.isChannelOptedIn(e, n, !0) || (null != t && i.Ay.isChannelOptedIn(e, t, !0)));
    });
}
function d(e, n, t) {
    return (0, l.bG)([i.Ay], () => n !== t && null != t && i.Ay.isChannelOptedIn(e, t, !0));
}
function c(e, n) {
    return (0, l.bG)([i.Ay], () => {
        if (null != n && i.Ay.isChannelOptedIn(e, n, !0)) return a.intl.string(a.t.Lz94y1);
    });
}
