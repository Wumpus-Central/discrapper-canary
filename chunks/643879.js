n.d(t, {
    f: () => c,
    p: () => d
});
var l = n(664751),
    a = n(481060),
    i = n(134432),
    s = n(768581),
    r = n(981631),
    o = n(485696);
function c(e) {
    let { userId: t, avatarId: n, storageHash: o, canAnimate: c = !1, size: d } = e,
        { CDN_HOST: u } = window.GLOBAL_ENV,
        m = null != u ? ''.concat(location.protocol, '//').concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        x = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t && (0, s.xR)(e)) return 'gif';
            let { CDN_HOST: n } = window.GLOBAL_ENV;
            return null == n ? 'jpg' : s.$k ? 'webp' : 'png';
        })(o, c),
        p = '?'.concat(l.stringify({ size: (0, i.oO)((0, a.pxk)(d) * (0, i.x_)()) }));
    return ''
        .concat(m)
        .concat(r.ANM.ARCHIVED_AVATAR(t, n, o, x))
        .concat(p);
}
function d(e) {
    let t = e ? o.Ul : o.h,
        n = o.Ul - t;
    return {
        recentAvatarsLimit: t,
        numberOfLockedAvatarSlots: n
    };
}
