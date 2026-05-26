n.d(t, { Rh: () => A, V7: () => d, XB: () => p, Xp: () => E, yM: () => g });
var i = n(488428),
    r = n(776231),
    a = n(486020),
    u = n(403362),
    s = n(392107),
    l = n(652215),
    o = n(375708);
function c(e) {
    let { storageHash: t, canAnimate: n = !1, allowWebp: i = !0 } = e;
    if (n && (0, a.VI)(t)) return i && a.QB ? "webp" : "gif";
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    return null == r ? "jpg" : i && a.QB ? "webp" : "png";
}
function E(e) {
    let { userId: t, avatarId: n, storageHash: u, canAnimate: s = !1, allowWebp: o = !0, size: E } = e,
        { CDN_HOST: A } = window.GLOBAL_ENV,
        g = null != A ? `https://${A}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
        p = c({ storageHash: u, canAnimate: s, allowWebp: o }),
        d = { size: (0, r.kr)(E * (0, r.mZ)()) };
    return (
        "webp" === p && s && (0, a.VI)(u) && (d.animated = !0),
        `${g}${l.Rsh.ARCHIVED_AVATAR(t, n, u, p)}?${i.stringify(d)}`
    );
}
function A(e) {
    let { filename: t, assetOrigin: n = s.E.NEW_ASSET } = e ?? {};
    if (n === s.E.ARCHIVED_ASSET) return;
    let i = t ?? o.intl.string(o.t.lqaIxI),
        r = new Date().toLocaleString(o.intl.currentLocale, {
            year: "numeric",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
        });
    return o.intl.formatToPlainString(n === s.E.EDITED_ARCHIVED_ASSET ? o.t.eC2sZi : o.t.DYil93, {
        name: i,
        dateTime: r,
    });
}
function g(e, t) {
    let n = c({ storageHash: e, canAnimate: !0, allowWebp: a.QB }),
        i = null == t ? o.intl.string(o.t.lqaIxI) : t.split(",")[0];
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
                case "webp":
                    return "image/webp";
                default:
                    (0, u.xb)(e);
            }
        })(n),
    };
}
function p(e) {
    let { assetOrigin: t = s.E.NEW_ASSET, imageUri: n, description: i, originalAsset: r, originalMd5: a } = e;
    switch (t) {
        case s.E.NEW_ASSET:
            return { assetOrigin: t, imageUri: n, description: i, originalMd5: a };
        case s.E.EDITED_ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, description: i, originalAsset: r, originalMd5: a };
        case s.E.ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, originalAsset: r };
        default:
            (0, u.xb)(t);
    }
}
function d(e) {
    let { userId: t, image: n, size: i = 80, canAnimate: r = !0 } = e;
    return null != n && "string" != typeof n
        ? n.assetOrigin === s.E.ARCHIVED_ASSET
            ? E({
                  userId: t,
                  avatarId: n.originalAsset.id,
                  storageHash: n.originalAsset.storageHash,
                  size: i,
                  canAnimate: r,
              })
            : n.imageUri
        : n;
}
