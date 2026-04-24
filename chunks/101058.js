n.d(t, { Rh: () => f, V7: () => _, XB: () => m, Xp: () => d, yM: () => p });
var i = n(488428),
    r = n(776231),
    l = n(486020),
    a = n(403362),
    s = n(392107),
    o = n(652215),
    u = n(985018);
function c(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: i = !0 } = e;
    if (n && (0, l.VI)(t)) return "gif";
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    return null == r ? "jpg" : i && l.QB ? "webp" : "png";
}
function d(e) {
    let { userId: t, avatarId: n, storageHash: l, canAnimate: a = !1, allowWebp: s = !0, size: u } = e,
        { CDN_HOST: d } = window.GLOBAL_ENV,
        f = null != d ? `https://${d}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        p = c({ storageHash: l, canAnimate: a, allowWebp: s }),
        m = `?${i.stringify({ size: (0, r.kr)(u * (0, r.mZ)()) })}`;
    return `${f}${o.Rsh.ARCHIVED_AVATAR(t, n, l, p)}${m}`;
}
function f(e) {
    let { filename: t, assetOrigin: n = s.E.NEW_ASSET } = e ?? {};
    if (n === s.E.ARCHIVED_ASSET) return;
    let i = t ?? u.intl.string(u.t.lqaIxI),
        r = new Date().toLocaleString(u.intl.currentLocale, {
            year: "numeric",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
        });
    return u.intl.formatToPlainString(n === s.E.EDITED_ARCHIVED_ASSET ? u.t.eC2sZi : u.t.DYil93, {
        name: i,
        dateTime: r,
    });
}
function p(e, t) {
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
function m(e) {
    let { assetOrigin: t = s.E.NEW_ASSET, imageUri: n, description: i, originalAsset: r } = e;
    switch (t) {
        case s.E.NEW_ASSET:
            return { assetOrigin: t, imageUri: n, description: i };
        case s.E.EDITED_ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, description: i, originalAsset: r };
        case s.E.ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, originalAsset: r };
        default:
            (0, a.xb)(t);
    }
}
function _(e) {
    let { userId: t, image: n, size: i = 80, canAnimate: r = !0 } = e;
    return null != n && "string" != typeof n
        ? n.assetOrigin === s.E.ARCHIVED_ASSET
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
