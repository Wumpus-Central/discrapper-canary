"use strict";
n.d(t, { Rh: () => _, V7: () => p, XB: () => h, Xp: () => d, yM: () => f });
var i = n(488428),
    r = n(776231),
    s = n(486020),
    a = n(403362),
    o = n(392107),
    l = n(652215),
    u = n(375708);
function c(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: i = !0 } = e;
    if (n && (0, s.VI)(t)) return "gif";
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    return null == r ? "jpg" : i && s.QB ? "webp" : "png";
}
function d(e) {
    let { userId: t, avatarId: n, storageHash: s, canAnimate: a = !1, allowWebp: o = !0, size: u } = e,
        { CDN_HOST: d } = window.GLOBAL_ENV,
        _ = null != d ? `https://${d}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        f = c({ storageHash: s, canAnimate: a, allowWebp: o }),
        h = `?${i.stringify({ size: (0, r.kr)(u * (0, r.mZ)()) })}`;
    return `${_}${l.Rsh.ARCHIVED_AVATAR(t, n, s, f)}${h}`;
}
function _(e) {
    let { filename: t, assetOrigin: n = o.E.NEW_ASSET } = e ?? {};
    if (n === o.E.ARCHIVED_ASSET) return;
    let i = t ?? u.intl.string(u.t.lqaIxI),
        r = new Date().toLocaleString(u.intl.currentLocale, {
            year: "numeric",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
        });
    return u.intl.formatToPlainString(n === o.E.EDITED_ARCHIVED_ASSET ? u.t.eC2sZi : u.t.DYil93, {
        name: i,
        dateTime: r,
    });
}
function f(e, t) {
    let n = c({ storageHash: e, canAnimate: !0, allowWebp: !1 }),
        i = null == t ? u.intl.string(u.t.lqaIxI) : t.split(",")[0];
    return {
        filename: `${i}.${n}`,
        type: (function (e) {
            switch (e) {
                case "gif":
                    return "image/gif";
                case "png":
                    return "image/png";
                case "jpg":
                    return "image/jpeg";
                default:
                    (0, a.xb)(e);
            }
        })(n),
    };
}
function h(e) {
    let { assetOrigin: t = o.E.NEW_ASSET, imageUri: n, description: i, originalAsset: r, originalMd5: s } = e;
    switch (t) {
        case o.E.NEW_ASSET:
            return { assetOrigin: t, imageUri: n, description: i, originalMd5: s };
        case o.E.EDITED_ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, description: i, originalAsset: r, originalMd5: s };
        case o.E.ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, originalAsset: r };
        default:
            (0, a.xb)(t);
    }
}
function p(e) {
    let { userId: t, image: n, size: i = 80, canAnimate: r = !0 } = e;
    return null != n && "string" != typeof n
        ? n.assetOrigin === o.E.ARCHIVED_ASSET
            ? d({
                  userId: t,
                  avatarId: n.originalAsset.id,
                  storageHash: n.originalAsset.storageHash,
                  size: i,
                  canAnimate: r,
                  allowWebp: !1,
              })
            : n.imageUri
        : n;
}
