n.d(t, { L: () => i, s: () => c });
var r = n(278416),
    l = n(403581),
    a = n(604913),
    u = n(306396),
    o = n(518865);
function i(e, t) {
    switch (t?.tenantMetadata?.collectibles?.type) {
        case a.hE.COLLECT_AND_CLAIM:
            return (0, u.av)(e, t);
        case a.hE.TARGETED_OFFER:
            return (0, o.PY)(e, t);
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case a.cR.TAG:
            return r.TagIcon;
        case a.cR.NITRO:
            return l.t;
        default:
            return null;
    }
}
