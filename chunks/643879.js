n.d(t, {
    SD: () => m,
    cN: () => g,
    fD: () => d,
    mh: () => h,
    pC: () => f
}),
    n(301563),
    n(266796);
var r = n(664751),
    i = n(134432),
    o = n(768581),
    a = n(823379),
    s = n(72703),
    l = n(981631),
    c = n(485696);
function u(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: r = !0 } = e;
    if (n && (0, o.xR)(t)) return 'gif';
    let { CDN_HOST: i } = window.GLOBAL_ENV;
    return null == i ? 'jpg' : r && o.$k ? 'webp' : 'png';
}
function d(e) {
    let { userId: t, avatarId: n, storageHash: o, canAnimate: a = !1, allowWebp: s = !0, size: c } = e,
        { CDN_HOST: d } = window.GLOBAL_ENV,
        f = null != d ? ''.concat(location.protocol, '//').concat(d) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        _ = u({
            storageHash: o,
            canAnimate: a,
            allowWebp: s
        }),
        p = '?'.concat(r.stringify({ size: (0, i.oO)(c * (0, i.x_)()) }));
    return ''
        .concat(f)
        .concat(l.ANM.ARCHIVED_AVATAR(t, n, o, _))
        .concat(p);
}
function f(e) {
    let t = e ? c.Ul : c.h,
        n = c.Ul - t;
    return {
        recentAvatarsLimit: t,
        numberOfLockedAvatarSlots: n
    };
}
function _(e, t) {
    if (null == t) return e;
    let n = /(.+?)-(\d+)$/,
        r = t.match(n);
    if (null != r) {
        let e = r[1],
            t = parseInt(r[2]);
        return ''.concat(e, '-').concat(t + 1);
    }
    return ''.concat(t, '-1');
}
function p(e) {
    switch (e) {
        case 'gif':
            return 'image/gif';
        case 'png':
            return 'image/png';
        case 'jpg':
            return 'image/jpeg';
        default:
            (0, a.vE)(e);
    }
}
function h(e, t) {
    let n = u({
            storageHash: e,
            canAnimate: !0,
            allowWebp: !1
        }),
        r = _(e, t);
    return {
        filename: ''.concat(r, '.').concat(n),
        type: p(n)
    };
}
function g(e) {
    let { assetOrigin: t = s.q.NEW_ASSET, imageUri: n, description: r, originalAsset: i } = e;
    switch (t) {
        case s.q.NEW_ASSET:
            return {
                assetOrigin: t,
                imageUri: n,
                description: r
            };
        case s.q.EDITED_ARCHIVED_ASSET:
            return {
                assetOrigin: t,
                imageUri: n,
                description: r,
                originalAsset: i
            };
        case s.q.ARCHIVED_ASSET:
            return {
                assetOrigin: t,
                imageUri: n,
                originalAsset: i
            };
        default:
            (0, a.vE)(t);
    }
}
function m(e) {
    let { userId: t, image: n, size: r = 80, canAnimate: i = !0 } = e;
    return null != n && 'string' != typeof n
        ? n.assetOrigin === s.q.ARCHIVED_ASSET
            ? d({
                  userId: t,
                  avatarId: n.originalAsset.id,
                  storageHash: n.originalAsset.storageHash,
                  size: r,
                  canAnimate: i,
                  allowWebp: !1
              })
            : n.imageUri
        : n;
}
