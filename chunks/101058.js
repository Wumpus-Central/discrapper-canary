"use strict";
n.d(t, { Rh: () => f, V7: () => g, XB: () => m, Xp: () => d, yM: () => h });
var r = n(488428),
    i = n(776231),
    a = n(486020),
    s = n(403362),
    o = n(392107),
    l = n(652215),
    u = n(985018);
function c(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: r = !0 } = e;
    if (n && (0, a.VI)(t)) return "gif";
    let { CDN_HOST: i } = window.GLOBAL_ENV;
    return null == i ? "jpg" : r && a.QB ? "webp" : "png";
}
function d(e) {
    let { userId: t, avatarId: n, storageHash: a, canAnimate: s = !1, allowWebp: o = !0, size: u } = e,
        { CDN_HOST: d } = window.GLOBAL_ENV,
        _ = null != d ? `https://${d}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        f = c({ storageHash: a, canAnimate: s, allowWebp: o }),
        p = `?${r.stringify({ size: (0, i.kr)(u * (0, i.mZ)()) })}`;
    return `${_}${l.Rsh.ARCHIVED_AVATAR(t, n, a, f)}${p}`;
}
function _(e) {
    return null == e ? u.intl.string(u.t.lqaIxI) : e.split(",")[0];
}
function f(e) {
    let { filename: t, assetOrigin: n = o.E.NEW_ASSET } = e ?? {};
    if (n === o.E.ARCHIVED_ASSET) return;
    let r = t ?? u.intl.string(u.t.lqaIxI),
        i = new Date().toLocaleString(u.intl.currentLocale, {
            year: "numeric",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
        });
    return u.intl.formatToPlainString(n === o.E.EDITED_ARCHIVED_ASSET ? u.t.eC2sZi : u.t.DYil93, {
        name: r,
        dateTime: i,
    });
}
function p(e) {
    switch (e) {
        case "gif":
            return "image/gif";
        case "png":
            return "image/png";
        case "jpg":
            return "image/jpeg";
        default:
            (0, s.xb)(e);
    }
}
function h(e, t) {
    let n = c({ storageHash: e, canAnimate: !0, allowWebp: !1 }),
        r = _(t);
    return { filename: `${r}.${n}`, type: p(n) };
}
function m(e) {
    let { assetOrigin: t = o.E.NEW_ASSET, imageUri: n, description: r, originalAsset: i } = e;
    switch (t) {
        case o.E.NEW_ASSET:
            return { assetOrigin: t, imageUri: n, description: r };
        case o.E.EDITED_ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, description: r, originalAsset: i };
        case o.E.ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, originalAsset: i };
        default:
            (0, s.xb)(t);
    }
}
function g(e) {
    let { userId: t, image: n, size: r = 80, canAnimate: i = !0 } = e;
    return null != n && "string" != typeof n
        ? n.assetOrigin === o.E.ARCHIVED_ASSET
            ? d({
                  userId: t,
                  avatarId: n.originalAsset.id,
                  storageHash: n.originalAsset.storageHash,
                  size: r,
                  canAnimate: i,
                  allowWebp: !1,
              })
            : n.imageUri
        : n;
}
