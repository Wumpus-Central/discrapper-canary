"use strict";
n.d(t, { DY: () => u, UF: () => d, bG: () => h });
var i = n(311907),
    s = n(652896),
    l = n(961350),
    r = n(383501),
    a = n(707890),
    o = n(83942),
    c = n(259374);
function d(e) {
    let { userId: t, channelId: n } = e,
        s = (0, c.k)({ channelId: n });
    return (0, i.bG)(
        [a.A, l.default, r.A],
        () => null != t && s && r.A.isUserConnected(t) && l.default.getId() !== t && a.A.isUserVerified(t),
        [s, t],
    );
}
function u(e) {
    let { streamKey: t, channelId: n } = e,
        r = (0, c.k)({ channelId: n }),
        d = (0, o.w)(t);
    return (0, i.bG)([a.A, l.default], () => {
        if (!r || d || null == t) return !1;
        let e = l.default.getId(),
            { ownerId: n } = (0, s.Iy)(t);
        return n !== e && a.A.isStreamVerified(t);
    }, [d, r, t]);
}
function h(e) {
    let { channelId: t } = e,
        n = (0, c.k)({ channelId: t }),
        s = (0, o.c)();
    return (0, i.bG)([a.A], () => !!n && !s && a.A.isCallVerified(), [s, n]);
}
