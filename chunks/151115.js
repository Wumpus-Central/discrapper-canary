e.d(n, { L: () => o, s: () => c });
var r = e(278416),
    u = e(403581),
    l = e(604913),
    a = e(306396),
    i = e(518865);
function o(t, n) {
    switch (n?.tenantMetadata?.collectibles?.type) {
        case l.hE.COLLECT_AND_CLAIM:
            return (0, a.av)(t, n);
        case l.hE.TARGETED_OFFER:
            return (0, i.PY)(t, n);
        default:
            return null;
    }
}
function c(t) {
    switch (t) {
        case l.cR.TAG:
            return r.TagIcon;
        case l.cR.NITRO:
            return u.t;
        default:
            return null;
    }
}
