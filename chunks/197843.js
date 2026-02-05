n.d(t, { Rg: () => r, eK: () => d, v: () => c });
var l = n(311907),
    i = n(543465),
    s = n(234053),
    a = n(985018);
function r(e, t, n) {
    return (0, l.bG)([i.Ay], () => {
        var l;
        return t === n
            ? i.Ay.isChannelOptedIn(e, t, !0)
            : ((l = i.Ay),
              !!(0, s.cE)(e) || l.isChannelOptedIn(e, t, !0) || (null != n && i.Ay.isChannelOptedIn(e, n, !0)));
    });
}
function d(e, t, n) {
    return (0, l.bG)([i.Ay], () => t !== n && null != n && i.Ay.isChannelOptedIn(e, n, !0));
}
function c(e, t) {
    return (0, l.bG)([i.Ay], () => {
        if (null != t && i.Ay.isChannelOptedIn(e, t, !0)) return a.intl.string(a.t.Lz94y1);
    });
}
