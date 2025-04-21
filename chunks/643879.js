n.d(t, {
    SD: () => g,
    Z1: () => _,
    cN: () => m,
    fD: () => d,
    mh: () => h
}),
    n(35282),
    n(953529);
var r = n(664751),
    i = n(134432),
    a = n(768581),
    o = n(823379),
    s = n(72703),
    l = n(981631),
    c = n(388032);
function u(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: r = !0 } = e;
    if (n && (0, a.xR)(t)) return 'gif';
    let { CDN_HOST: i } = window.GLOBAL_ENV;
    return null == i ? 'jpg' : r && a.$k ? 'webp' : 'png';
}
function d(e) {
    let { userId: t, avatarId: n, storageHash: a, canAnimate: o = !1, allowWebp: s = !0, size: c } = e,
        { CDN_HOST: d } = window.GLOBAL_ENV,
        f = null != d ? ''.concat(location.protocol, '//').concat(d) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        _ = u({
            storageHash: a,
            canAnimate: o,
            allowWebp: s
        }),
        p = '?'.concat(r.stringify({ size: (0, i.oO)(c * (0, i.x_)()) }));
    return ''
        .concat(f)
        .concat(l.ANM.ARCHIVED_AVATAR(t, n, a, _))
        .concat(p);
}
function f(e) {
    return null == e ? c.intl.string(c.t.lqaIxM) : e.split(',')[0];
}
function _(e) {
    let { filename: t, assetOrigin: n = s.q.NEW_ASSET } = null != e ? e : {};
    if (n === s.q.ARCHIVED_ASSET) return;
    let r = null != t ? t : c.intl.string(c.t.lqaIxM),
        i = new Date().toLocaleString(c.intl.currentLocale, {
            year: 'numeric',
            day: 'numeric',
            month: 'long',
            hour: 'numeric',
            minute: 'numeric'
        });
    return c.intl.formatToPlainString(n === s.q.EDITED_ARCHIVED_ASSET ? c.t.eC2sZm : c.t['DYil9/'], {
        name: r,
        dateTime: i
    });
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
            (0, o.vE)(e);
    }
}
function h(e, t) {
    let n = u({
            storageHash: e,
            canAnimate: !0,
            allowWebp: !1
        }),
        r = f(t);
    return {
        filename: ''.concat(r, '.').concat(n),
        type: p(n)
    };
}
function m(e) {
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
            (0, o.vE)(t);
    }
}
function g(e) {
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
