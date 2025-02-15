n.d(t, {
    fD: () => d,
    mh: () => m,
    pC: () => u
});
var l = n(664751),
    a = n(134432),
    i = n(768581),
    s = n(823379),
    r = n(981631),
    o = n(485696);
function c(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: l = !0 } = e;
    if (n && (0, i.xR)(t)) return 'gif';
    let { CDN_HOST: a } = window.GLOBAL_ENV;
    return null == a ? 'jpg' : l && i.$k ? 'webp' : 'png';
}
function d(e) {
    let { userId: t, avatarId: n, storageHash: i, canAnimate: s = !1, allowWebp: o = !0, size: d } = e,
        { CDN_HOST: u } = window.GLOBAL_ENV,
        m = null != u ? ''.concat(location.protocol, '//').concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        p = c({
            storageHash: i,
            canAnimate: s,
            allowWebp: o
        }),
        x = '?'.concat(l.stringify({ size: (0, a.oO)(d * (0, a.x_)()) }));
    return ''
        .concat(m)
        .concat(r.ANM.ARCHIVED_AVATAR(t, n, i, p))
        .concat(x);
}
function u(e) {
    let t = e ? o.Ul : o.h,
        n = o.Ul - t;
    return {
        recentAvatarsLimit: t,
        numberOfLockedAvatarSlots: n
    };
}
function m(e, t) {
    let n = c({
            storageHash: e,
            canAnimate: !0,
            allowWebp: !1
        }),
        l = (function (e, t) {
            if (null == t) return e;
            let n = t.match(/(.+?)-(\d+)$/);
            if (null != n) {
                let e = n[1],
                    t = parseInt(n[2]);
                return ''.concat(e, '-').concat(t + 1);
            }
            return ''.concat(t, '-1');
        })(e, t);
    return {
        filename: ''.concat(l, '.').concat(n),
        type: (function (e) {
            switch (e) {
                case 'gif':
                    return 'image/gif';
                case 'png':
                    return 'image/png';
                case 'jpg':
                    return 'image/jpeg';
                default:
                    (0, s.vE)(e);
            }
        })(n)
    };
}
