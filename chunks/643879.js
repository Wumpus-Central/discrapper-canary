n.d(t, {
    SD: () => b,
    Z1: () => h,
    cN: () => E,
    fD: () => f,
    mh: () => g,
    pC: () => _
}),
    n(301563),
    n(266796);
var r = n(664751),
    i = n(134432),
    o = n(768581),
    a = n(823379),
    s = n(72703),
    l = n(981631),
    c = n(485696),
    u = n(388032);
function d(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: r = !0 } = e;
    if (n && (0, o.xR)(t)) return 'gif';
    let { CDN_HOST: i } = window.GLOBAL_ENV;
    return null == i ? 'jpg' : r && o.$k ? 'webp' : 'png';
}
function f(e) {
    let { userId: t, avatarId: n, storageHash: o, canAnimate: a = !1, allowWebp: s = !0, size: c } = e,
        { CDN_HOST: u } = window.GLOBAL_ENV,
        f = null != u ? ''.concat(location.protocol, '//').concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        _ = d({
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
function _(e) {
    let t = e ? c.zW : c.PH,
        n = c.zW - t;
    return {
        recentAvatarsLimit: t,
        numberOfLockedAvatarSlots: n
    };
}
function p(e) {
    return null == e ? u.NW.string(u.t.lqaIxM) : e.split(',')[0];
}
function h(e) {
    let { filename: t, assetOrigin: n = s.q.NEW_ASSET } = null != e ? e : {};
    if (n === s.q.ARCHIVED_ASSET) return;
    let r = null != t ? t : u.NW.string(u.t.lqaIxM),
        i = new Date().toLocaleString(u.NW.currentLocale, {
            year: 'numeric',
            day: 'numeric',
            month: 'long',
            hour: 'numeric',
            minute: 'numeric'
        });
    return u.NW.formatToPlainString(n === s.q.EDITED_ARCHIVED_ASSET ? u.t.eC2sZm : u.t['DYil9/'], {
        name: r,
        dateTime: i
    });
}
function m(e) {
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
function g(e, t) {
    let n = d({
            storageHash: e,
            canAnimate: !0,
            allowWebp: !1
        }),
        r = p(t);
    return {
        filename: ''.concat(r, '.').concat(n),
        type: m(n)
    };
}
function E(e) {
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
function b(e) {
    let { userId: t, image: n, size: r = 80, canAnimate: i = !0 } = e;
    return null != n && 'string' != typeof n
        ? n.assetOrigin === s.q.ARCHIVED_ASSET
            ? f({
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
