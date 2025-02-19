n.d(t, {
    fD: () => u,
    mh: () => f,
    pC: () => d
}),
    n(301563);
var r = n(664751),
    l = n(134432),
    a = n(768581),
    i = n(823379),
    o = n(981631),
    s = n(485696);
function c(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: r = !0 } = e;
    if (n && (0, a.xR)(t)) return 'gif';
    let { CDN_HOST: l } = window.GLOBAL_ENV;
    return null == l ? 'jpg' : r && a.$k ? 'webp' : 'png';
}
function u(e) {
    let { userId: t, avatarId: n, storageHash: a, canAnimate: i = !1, allowWebp: s = !0, size: u } = e,
        { CDN_HOST: d } = window.GLOBAL_ENV,
        f = null != d ? ''.concat(location.protocol, '//').concat(d) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        p = c({
            storageHash: a,
            canAnimate: i,
            allowWebp: s
        }),
        m = '?'.concat(r.stringify({ size: (0, l.oO)(u * (0, l.x_)()) }));
    return ''
        .concat(f)
        .concat(o.ANM.ARCHIVED_AVATAR(t, n, a, p))
        .concat(m);
}
function d(e) {
    let t = e ? s.Ul : s.h,
        n = s.Ul - t;
    return {
        recentAvatarsLimit: t,
        numberOfLockedAvatarSlots: n
    };
}
function f(e, t) {
    let n = c({
            storageHash: e,
            canAnimate: !0,
            allowWebp: !1
        }),
        r = (function (e, t) {
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
        filename: ''.concat(r, '.').concat(n),
        type: (function (e) {
            switch (e) {
                case 'gif':
                    return 'image/gif';
                case 'png':
                    return 'image/png';
                case 'jpg':
                    return 'image/jpeg';
                default:
                    (0, i.vE)(e);
            }
        })(n)
    };
}
