e.d(n, { L: () => o, s: () => c });
var r = e(278416),
    u = e(403581),
    a = e(604913),
    l = e(306396),
    i = e(518865);
function o(t, n) {
    switch (n?.tenantMetadata?.collectibles?.type) {
        case a.hE.COLLECT_AND_CLAIM:
            return (0, l.av)(t, n);
        case a.hE.TARGETED_OFFER:
            return (0, i.PY)(t, n);
        default:
            return null;
    }
}
function c(t) {
    switch (t) {
        case a.cR.TAG:
            return r.TagIcon;
        case a.cR.NITRO:
            return u.t;
        default:
            return null;
    }
}
